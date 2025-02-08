import { useState } from "react";
import { useGitHubProfile } from "@/hooks/useGitHubProfile";
import ProfileCard from "@/components/ProfileCard"; 


export default function Home() {
  const [username, setUsername] = useState("");
  const { data, isLoading, error, refetch } = useGitHubProfile(username);

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold">GitHub 프로필 뷰어</h1>
      <input
        type="text"
        placeholder="GitHub 아이디 입력"
        className="p-2 mt-4 border rounded"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button
        onClick={() => refetch()}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        조회하기
      </button>

      {isLoading && <p>로딩 중...</p>}
      {error && <p className="text-red-500">사용자를 찾을 수 없습니다.</p>}

      {data && <ProfileCard profile={data} />}
    </div>
  );
}
