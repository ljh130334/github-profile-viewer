// GitHub 사용자 프로필 정보를 가져오는 함수
export const fetchGitHubProfile = async (username: string) => {
    const res = await fetch(`https://api.github.com/users/${username}`);
    if (!res.ok) throw new Error("사용자를 찾을 수 없습니다.");
    return res.json();
}

// GitHub 사용자의 레포지토리 목록을 가져오는 함수
export const fetchGitHubRepos = async (username: string) => {
    const res = await fetch(`https://api.github.com/users/${username}/repos`);
    if (!res.ok) throw new Error("레포지토리를 불러오는 데 실패했습니다.");
    return res.json();
}