import {
  MOCK_USER,
  MOCK_COURSES,
  MOCK_SECTIONS,
  MOCK_UNITS,
  MOCK_LESSONS,
  MOCK_EXERCISES,
  MOCK_QUESTS,
  MOCK_MONTHLY_CHALLENGE,
  MOCK_COURSE_PROGRESS,
  MOCK_AVATARS,
  MOCK_USERS,
  getMockExercises,
  getMockLessonsByUnit,
  getMockUnitsBySection,
  getMockSectionTree,
  getMockCourseProgress,
} from "./mockData.ts";
import type { UserType } from "../../Types/User/UserType.ts";
import type { Exercise } from "../../Types/Catalog/ExerciseType.ts";
import type { LessonType } from "../../Types/Catalog/LessonType.ts";
import type { UnitType } from "../../Types/Catalog/UnitType.ts";
import type { SectionType } from "../../Types/Catalog/SectionType.ts";
import type { CourseType } from "../../Types/Catalog/CourseType.ts";
import type { QuestType } from "../../Types/Quest/QuestType.ts";
import type { CourseProgressType } from "../../Types/User/CourseProgressType.ts";
import type { FlatSectionTree } from "../../Types/Catalog/FlatSectionTree.ts";
import type { ExerciseAttemptResponse } from "../../Types/Lesson/ExerciseAttemptResponse.ts";

// Check if we should use mock mode (when API_URL is not set or is empty)
export const USE_MOCK_MODE = !import.meta.env.VITE_API_URL || import.meta.env.VITE_API_URL === "";

// Simulate network delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Mock API responses
export async function mockGetData<T>(path: string): Promise<T> {
  await delay(300); // Simulate network delay

  // Parse the path to determine what data to return
  if (path.includes("/auth/me")) {
    return MOCK_USER as T;
  }

  if (path.includes("/courses/all")) {
    return MOCK_COURSES as T;
  }

  if (path.includes("/courses/get/")) {
    return MOCK_COURSES as T;
  }

  if (path.includes("/users/progress/")) {
    const courseIdMatch = path.match(/\/users\/progress\/(\d+)/);
    if (courseIdMatch) {
      const courseId = parseInt(courseIdMatch[1]);
      return getMockCourseProgress(courseId) as T;
    }
    return MOCK_COURSE_PROGRESS as T;
  }

  if (path.includes("/quests/get")) {
    return MOCK_QUESTS as T;
  }

  if (path.includes("/monthly-challenges/get")) {
    return MOCK_MONTHLY_CHALLENGE as T;
  }

  if (path.includes("/users/avatars")) {
    return MOCK_AVATARS as T;
  }

  if (path.includes("/lessons/") && path.includes("/exercises")) {
    const lessonIdMatch = path.match(/\/lessons\/(\d+)\/exercises/);
    if (lessonIdMatch) {
      const lessonId = parseInt(lessonIdMatch[1]);
      const exercises = getMockExercises(lessonId);
      if (exercises.length === 0) {
        console.warn(`No exercises found for lesson ${lessonId}`);
      }
      return exercises as T;
    }
  }

  if (path.includes("/units/") && path.includes("/lessons")) {
    const unitIdMatch = path.match(/\/units\/(\d+)\/lessons/);
    if (unitIdMatch) {
      const unitId = parseInt(unitIdMatch[1]);
      return getMockLessonsByUnit(unitId) as T;
    }
  }

  if (path.includes("/sections/") && path.includes("/units")) {
    const sectionIdMatch = path.match(/\/sections\/(\d+)\/units/);
    if (sectionIdMatch) {
      const sectionId = parseInt(sectionIdMatch[1]);
      return getMockUnitsBySection(sectionId) as T;
    }
  }

  if (path.includes("/catalog/") && path.includes("/tree")) {
    const sectionIdMatch = path.match(/\/catalog\/(\d+)\/tree/);
    if (sectionIdMatch) {
      const sectionId = parseInt(sectionIdMatch[1]);
      return getMockSectionTree(sectionId) as T;
    }
  }

  // Handle batched requests (ids queries)
  if (path.includes("/lessons/ids")) {
    const params = new URLSearchParams(path.split("?")[1]);
    const lessonIds = params.get("lessonIds")?.split(",").map(id => parseInt(id)) || [];
    return lessonIds.map(id => MOCK_LESSONS.find(l => l.id === id)).filter(Boolean) as T;
  }

  if (path.includes("/units/ids")) {
    const params = new URLSearchParams(path.split("?")[1]);
    const unitIds = params.get("unitIds")?.split(",").map(id => parseInt(id)) || [];
    return unitIds.map(id => MOCK_UNITS.find(u => u.id === id)).filter(Boolean) as T;
  }

  if (path.includes("/sections/ids")) {
    const params = new URLSearchParams(path.split("?")[1]);
    const sectionIds = params.get("sectionIds")?.split(",").map(id => parseInt(id)) || [];
    return sectionIds.map(id => MOCK_SECTIONS.find(s => s.id === id)).filter(Boolean) as T;
  }

  if (path.includes("/users/ids")) {
    const params = new URLSearchParams(path.split("?")[1]);
    const userIds = params.get("userIds")?.split(",").map(id => parseInt(id)) || [];
    return userIds.map(id => MOCK_USERS.find(u => u.id === id)).filter(Boolean) as T;
  }

  // Handle leaderboard
  if (path.includes("/leaderboard/paginated")) {
    return {
      users: MOCK_USERS,
      nextCursor: null,
    } as T;
  }

  // Handle follow counts
  if (path.includes("/follows/") && !path.includes("/follow") && !path.includes("/unfollow")) {
    const userIdMatch = path.match(/\/follows\/(\d+)/);
    if (userIdMatch) {
      return {
        followers: 10,
        following: 5,
      } as T;
    }
  }

  // Default: return empty array or null
  console.warn(`Mock data not found for path: ${path}`);
  return [] as T;
}

// Mock POST responses
export async function mockSubmitData<TResponse, TBody = unknown>(
  path: string,
  body: TBody | null
): Promise<TResponse> {
  await delay(300); // Simulate network delay

  // Mock exercise submission
  if (path.includes("/exercises/attempts/submit")) {
    const data = body as { exerciseId: number; optionIds: number[] };
    // Find exercise in any lesson
    let exercise: Exercise | undefined;
    for (const lessonId of Object.keys(MOCK_EXERCISES)) {
      exercise = getMockExercises(Number(lessonId)).find(e => e.id === data.exerciseId);
      if (exercise) break;
    }
    
    const selectedOptions = exercise?.options.filter(opt => data.optionIds.includes(opt.id)) || [];
    const isCorrect = selectedOptions.every(opt => opt.isCorrect) && selectedOptions.length > 0;
    const correctOptionIds = exercise?.options.filter(opt => opt.isCorrect).map(opt => opt.id) || [];
    const correctAnswer = exercise?.options.find(opt => opt.isCorrect)?.content || "";

    return {
      correct: isCorrect,
      score: isCorrect ? 10 : 0,
      message: isCorrect ? "Correct!" : "Incorrect!",
      correctResponses: correctOptionIds,
      correctAnswer: correctAnswer,
    } as TResponse;
  }

  // Mock lesson completion
  if (path.includes("/lessons/completions/submit")) {
    return {
      newStreakCount: MOCK_USER.streakLength + 1,
      xpGained: 20,
    } as TResponse;
  }

  // Mock Google login
  if (path.includes("/auth/google-login")) {
    return MOCK_USER as TResponse;
  }

  // Mock follow/unfollow
  if (path.includes("/follows/follow") || path.includes("/follows/unfollow")) {
    const data = body as { followedId: number };
    return {
      actorUserId: MOCK_USER.id,
      followedUserId: data.followedId,
      followersNewStats: {
        followerIds: [],
        followingIds: [data.followedId],
      },
      followedNewStats: {
        followerIds: [MOCK_USER.id],
        followingIds: [],
      },
    } as TResponse;
  }

  // Mock change course
  if (path.includes("/courses/change")) {
    const data = body as { newCourse: number };
    return {
      newUser: { ...MOCK_USER, currentCourseId: data.newCourse },
      newCourses: MOCK_COURSES,
    } as TResponse;
  }

  // Mock update avatar
  if (path.includes("/users/update-avatar")) {
    const data = body as { avatarSrc: string };
    return {
      ...MOCK_USER,
      pfpSrc: data.avatarSrc,
    } as TResponse;
  }

  // Default response
  return { success: true } as TResponse;
}

