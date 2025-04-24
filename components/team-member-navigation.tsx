// components/TeamMemberNavigation.tsx
'use client';

import { useRouter } from 'next/navigation';

export default function TeamMemberNavigation({ prevMemberSlug, nextMemberSlug }: { prevMemberSlug: string; nextMemberSlug: string }) {
  const router = useRouter();

  return (
    <div className="absolute bottom-6 flex justify-between w-full max-w-sm px-6">
      <button
        onClick={() => router.push(`/team/${prevMemberSlug}`)}
        className="bg-green-700 text-white py-2 px-4 rounded-lg hover:bg-green-800 transition duration-300"
      >
        Previous
      </button>
      <button
        onClick={() => router.push(`/team/${nextMemberSlug}`)}
        className="bg-green-700 text-white py-2 px-4 rounded-lg hover:bg-green-800 transition duration-300"
      >
        Next
      </button>
    </div>
  );
}
