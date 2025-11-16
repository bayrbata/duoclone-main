import { WideActionButton } from "../../Components/Atoms/Button/WideActionButton.tsx";
import { USE_MOCK_MODE } from "../../Utils/MockData/mockService.ts";
import { useQueryClient } from "@tanstack/react-query";
import { qk } from "../../Constants/QueryConstants/queryKeys.ts";
import { MOCK_USER } from "../../Utils/MockData/mockData.ts";
import { useNavigate } from "react-router-dom";
import { useGoogleAuthEntry } from "../../Hooks/Queries/Mutations/useGoogleAuthEntry.tsx";

export function LoginPage() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const googleLogin = useGoogleAuthEntry(); // This is safe now - returns no-op in mock mode

  const handleMockLogin = () => {
    // Set mock user in query cache
    queryClient.setQueryData(qk.user(MOCK_USER.id), MOCK_USER);
    queryClient.setQueryData(qk.currentUser(), MOCK_USER);

    // Navigate based on course selection
    if (MOCK_USER.currentCourseId == null) {
      navigate("/auth/courses");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="w-full flex items-center px-4 flex-col gap-6 justify-center h-full bg-white">

      <div className="w-full lg:w-1/2">
        {USE_MOCK_MODE ? (
          <WideActionButton
            onSubmit={handleMockLogin}
            isActive={true}
            activeTextColor="text-white"
            text="START DEMO"
            activeText="START DEMO"
          />
        ) : (
          <WideActionButton
            onSubmit={() => googleLogin()}
            isActive={true}
            activeTextColor="text-white"
            text="JOIN WITH GOOGLE"
            activeText="JOIN WITH GOOGLE"
          />
        )}
      </div>

      <div></div>
    </div>
  );
}
