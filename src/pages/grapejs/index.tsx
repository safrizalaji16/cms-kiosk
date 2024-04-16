import { useRouter } from "next/router";
import WebBuilder from "./webBuilder";

export default function Home() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button
        onClick={goBack}
        className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
      >
        ⬅️ Back To Form Layout
      </button>
      <WebBuilder />
    </main>
  );
}
