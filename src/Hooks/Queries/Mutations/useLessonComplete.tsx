import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { LessonCompleteType } from "../../../Types/Lesson/LessonCompleteType.ts";
import type { UserType } from "../../../Types/User/UserType.ts";
import type { LessonType } from "../../../Types/Catalog/LessonType.ts";
import {SUBMIT_LESSON_COMPLETE} from "../../../Constants/RequestConstants/paths.ts";
import {qk} from "../../../Constants/QueryConstants/queryKeys.ts";
import { USE_MOCK_MODE, mockSubmitData } from "../../../Utils/MockData/mockService.ts";
import { MOCK_USER, MOCK_LESSONS } from "../../../Utils/MockData/mockData.ts";

type useLessonCompleteParams = {
  lessonId: string;
  courseId: number;
};

export const useLessonComplete = ({
  lessonId,
  courseId,
}: useLessonCompleteParams) => {
  const queryClient = useQueryClient();

  return useMutation<LessonCompleteType>({
    mutationKey: ["lessonComplete", lessonId],
    mutationFn: async () => {
      if (USE_MOCK_MODE) {
        const lesson = MOCK_LESSONS.find(l => l.id === Number(lessonId));
        return {
          userId: MOCK_USER.id,
          lessonId: Number(lessonId),
          updatedLesson: { ...lesson, isPassed: true } as LessonType,
          updatedUserCourseProgress: {
            id: 1,
            userId: MOCK_USER.id,
            courseId: courseId,
            sectionId: 1,
            isComplete: false,
            currentLessonId: Number(lessonId) + 1,
            completedLessons: 3,
          },
          lessonsToUpdate: [],
          totalScore: MOCK_USER.points + 20,
          newUserScore: MOCK_USER.points + 20,
          accuracy: 95,
          newStreakCount: { newCount: MOCK_USER.streakLength + 1 },
          message: "Great job!",
        } as LessonCompleteType;
      }

      const res = await fetch(SUBMIT_LESSON_COMPLETE, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lessonId: Number(lessonId),
          courseId: courseId,
        }),
        credentials: "include",
      });
      if (!res.ok) throw new Error("Failed");
      return res.json();
    },
    onSuccess: (data) => {
      const userId = data.userId;
      queryClient.invalidateQueries({ queryKey: qk.quests() });
      queryClient.invalidateQueries({ queryKey: qk.monthlyChallenges() });
      queryClient.setQueryData(qk.lesson(data.lessonId), data.updatedLesson);
      queryClient.setQueryData(
        qk.courseProgress(courseId),
        data.updatedUserCourseProgress
      );
      if (data.lessonsToUpdate.length) {
        data.lessonsToUpdate.forEach((lesson: LessonType) => {
          queryClient.setQueryData(qk.lesson(lesson.id), lesson);
        });
      }
      queryClient.setQueryData(
        qk.user(userId),
        (prev: UserType | undefined) => {
          if (!prev) return prev;
          return {
            ...prev,
            totalScore: data.totalScore,
            streakLength: data.newStreakCount.newCount,
          };
        }
      );
      queryClient.setQueryData(
        qk.currentUser(),
        (prev: UserType | undefined) => {
          if (!prev) return prev;
          return {
            ...prev,
            totalScore: data.totalScore,
            streakLength: data.newStreakCount.newCount,
          };
        }
      );
    },
  });
};
