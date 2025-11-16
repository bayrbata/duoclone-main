import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { UserType } from "../../../Types/User/UserType.ts";
import type { CourseType } from "../../../Types/Catalog/CourseType.ts";
import {CHANGE_COURSE} from "../../../Constants/RequestConstants/paths.ts";
import {qk} from "../../../Constants/QueryConstants/queryKeys.ts";
import { USE_MOCK_MODE, mockSubmitData } from "../../../Utils/MockData/mockService.ts";
import { MOCK_USER, MOCK_COURSES, getMockCourseProgress } from "../../../Utils/MockData/mockData.ts";

interface ChangeCourseVariables {
  newCourse: number;
}

type CourseChangeType = {
  newUser: UserType;
  newCourses: CourseType[];
};

export function useChangeCourse() {
  const qc = useQueryClient();

  return useMutation<CourseChangeType, Error, ChangeCourseVariables>({
    mutationFn: async (
      variables: ChangeCourseVariables
    ): Promise<CourseChangeType> => {
      const { newCourse } = variables;

      if (USE_MOCK_MODE) {
        return {
          newUser: { ...MOCK_USER, currentCourseId: newCourse },
          newCourses: MOCK_COURSES,
        };
      }

      const res = await fetch(CHANGE_COURSE, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ newCourse }),
        credentials: "include",
      });

      if (!res.ok) throw new Error("Failed to change course");

      const data = (await res.json()) as CourseChangeType;
      return data;
    },
    onSuccess: (updatedCourse: CourseChangeType) => {
      const updatedUser = updatedCourse.newUser;
      const newCourseList = updatedCourse.newCourses;
      qc.setQueryData(qk.user(updatedUser.id), updatedUser);
      
      // In mock mode, set the new course progress immediately
      if (USE_MOCK_MODE && updatedUser.currentCourseId) {
        const newProgress = getMockCourseProgress(updatedUser.currentCourseId);
        qc.setQueryData(qk.courseProgress(updatedUser.currentCourseId), newProgress);
      } else {
      qc.invalidateQueries({ queryKey: qk.courseProgress(updatedUser.id) });
      qc.invalidateQueries({ queryKey: ["courseProgress", "pending"] });
      }
      
      qc.setQueryData(qk.currentUser(), updatedUser);
      qc.setQueryData(qk.userCourses(updatedUser.id), newCourseList);
    },
  });
}
