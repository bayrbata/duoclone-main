import { useQuery, useQueryClient } from "@tanstack/react-query";
import { qk } from "../../../Constants/QueryConstants/queryKeys.ts";
import type { CourseType } from "../../../Types/Catalog/CourseType.ts";
import { GET_ALL_COURSES } from "../../../Constants/RequestConstants/paths.ts";
import { USE_MOCK_MODE, mockGetData } from "../../../Utils/MockData/mockService.ts";

export function useCourse(id: number | "all") {
  const qc = useQueryClient();

  return useQuery({
    queryKey: qk.courses(id),
    queryFn: async () => {
      let courses: CourseType[];
      
      if (USE_MOCK_MODE) {
        courses = await mockGetData<CourseType[]>(GET_ALL_COURSES);
      } else {
      if (id === "all") {
        const response = await fetch(GET_ALL_COURSES);
        if (!response.ok) {
          throw new Error("Failed to fetch courses");
        }
          courses = await response.json();
        } else {
      const allCourses = qc.getQueryData<CourseType[]>(qk.courses("all"));

      if (allCourses) {
        const course = allCourses.find((course) => course.id === id);
        if (course) return course;
      }

      const response = await fetch(GET_ALL_COURSES);
      if (!response.ok) {
        throw new Error("Failed to fetch courses");
      }
          courses = await response.json();
        }
      }

      courses.forEach((course) => {
        qc.setQueryData(qk.courses(course.id), course);
      });

      if (id === "all") {
        return courses;
      }

      qc.setQueryData(qk.courses("all"), courses);

      const foundCourse = courses.find((course) => course.id === id);
      if (!foundCourse) {
        throw new Error(`Course with id ${id} not found`);
      }
      return foundCourse;
    },
    staleTime: 60_000,
  });
}
