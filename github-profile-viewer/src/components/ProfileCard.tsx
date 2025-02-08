export default function ProfileCard({ profile }: { profile: any }) {
    return (
      <div className="mt-6 p-4 border rounded shadow">
        <img src={profile.avatar_url} alt="Profile" className="w-24 h-24 rounded-full" />
        <h2 className="text-xl font-semibold">{profile.name || profile.login}</h2>
        <p className="text-gray-600">{profile.bio}</p>
        <a
          href={profile.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600"
        >
          GitHub 프로필 보기
        </a>
      </div>
    );
  }
  