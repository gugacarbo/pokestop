import { IVGuess } from "@/features/iv-guess";

export default function IVGuessPage() {
  return (
    <>
      <h1 className="px-4 sm:px-0 pt-2 w-full font-semibold text-2xl">
        IV Guess{" "}
        <span className="text-gray-400 text-xs dark:text-gray-500">Beta</span>
      </h1>

      <p className="mb-2 px-4 sm:px-0 w-full text-gray-700 text-sm dark:text-gray-300">
        This tool is a work-in-progress and should be used for educational
        purposes only. Please don't try to use this in an official tournament!
      </p>

      <IVGuess />
    </>
  );
}
