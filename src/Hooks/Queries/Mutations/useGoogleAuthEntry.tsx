import { useGoogleLogin } from "@react-oauth/google";
import { useQueryClient } from "@tanstack/react-query";
import { qk } from "../../../Constants/QueryConstants/queryKeys.ts";
import { GOOGLE_LOGIN } from "../../../Constants/RequestConstants/paths.ts";
import type { UserType } from "../../../Types/User/UserType.ts";
import { USE_MOCK_MODE, mockSubmitData } from "../../../Utils/MockData/mockService.ts";
import { MOCK_USER } from "../../../Utils/MockData/mockData.ts";

export function useGoogleAuthEntry() {
  const queryClient = useQueryClient();

  // In mock mode, return a no-op function instead of using Google OAuth
  if (USE_MOCK_MODE) {
    return () => {
      // No-op in mock mode
      console.log("Google login not available in mock mode");
    };
  }

  return useGoogleLogin({
    flow: "auth-code",
    onSuccess: async (codeResponse) => {
      console.log(codeResponse);

      const res = await fetch(GOOGLE_LOGIN, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: codeResponse.code }),
        credentials: "include",
      });
      const user: UserType = await res.json();

      queryClient.setQueryData(qk.user(user.id), user);
      queryClient.setQueryData(qk.currentUser(), user);

      if (user.currentCourseId == null) {
        window.location.href = "/auth/courses";
      } else {
        window.location.href = "/";
      }
    },
    onError: (err) => console.error("Google login failed", err),
  });
}
