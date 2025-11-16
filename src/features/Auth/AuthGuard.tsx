import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { SpinnerPage } from "../../Components/Layouts/SpinnerPage.tsx";
import { useQuery } from "@tanstack/react-query";
import { qo } from "../../Constants/QueryConstants/queries.ts";
import { USE_MOCK_MODE } from "../../Utils/MockData/mockService.ts";

export function AuthGuard() {
  const navigate = useNavigate();
  const { data: user, isLoading } = useQuery({
    ...qo.currentUser(),
    retry: false,
  });

  useEffect(() => {
    // In mock mode, allow access even if user query fails
    if (USE_MOCK_MODE) {
      if (!isLoading && user && !user.currentCourseId) {
        navigate("/auth/courses");
      }
      // Don't redirect to /auth in mock mode if user is not loaded
      return;
    }

    // Normal mode: require authentication
    if (!isLoading && !user) {
      navigate("/auth");
    } else if (user && !user.currentCourseId) {
      navigate("/auth/courses");
    }
  }, [user, isLoading, navigate]);

  // In mock mode, allow access even if there's an error or no user
  if (USE_MOCK_MODE) {
    if (isLoading) return <SpinnerPage/>;
    // Allow access in mock mode even without user (user will be set by LoginPage)
    return <Outlet />;
  }

  if (isLoading || !user) return <SpinnerPage/>;

  return <Outlet />;
}