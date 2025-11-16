import { useQuery, useQueryClient } from "@tanstack/react-query";
import type { FollowResponse } from "../../../../Types/Follow/FollowResponse.ts";
import { qk } from "../../../../Constants/QueryConstants/queryKeys.ts";
import { useEffect } from "react";
import { GET_FOLLOW_COUNTS_BY_USER_ID } from "../../../../Constants/RequestConstants/paths.ts";
import { USE_MOCK_MODE, mockGetData } from "../../../../Utils/MockData/mockService.ts";

export function useFollowCaches(userId: number) {
  const qc = useQueryClient();

  const query = useQuery<FollowResponse>({
    queryKey: qk.follows(userId),
    queryFn: () => fetchFollowResponse(userId),
    staleTime: 60_000,
  });

  useEffect(() => {
    if (query.data) {
      qc.setQueryData(qk.followers(userId), query.data.followerIds);
      qc.setQueryData(qk.following(userId), query.data.followingIds);
    }
  }, [query.data, qc, userId]);

  return query;
}

export const fetchFollowResponse = async (
  userId: number
): Promise<FollowResponse> => {
  if (USE_MOCK_MODE) {
    const data = await mockGetData<{ followers: number; following: number }>(GET_FOLLOW_COUNTS_BY_USER_ID(userId));
    return {
      followerIds: [],
      followingIds: [],
      ...data,
    };
  }
  
  const r = await fetch(GET_FOLLOW_COUNTS_BY_USER_ID(userId));
  if (!r.ok) throw new Error("failed");
  return r.json();
};
