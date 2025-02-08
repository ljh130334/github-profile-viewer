import { useQuery } from "@tanstack/react-query";
import { fetchGitHubProfile } from "@/utils/githubApi";

// GitHub 사용자 프로필 정보를 가져오는 커스텀 훅
export const useGitHubProfile = (username: string) => {
    return useQuery({
        queryKey: ["githubProfile", username],
        queryFn: () => fetchGitHubProfile(username),
        enabled: !!username,
    });
};