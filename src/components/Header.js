// components/Header.js
import Link from "next/link";

export default function Header() {
  return (
    <header className="relative w-full h-[500px] bg-gradient-to-t from-[#ffffff] to-[#CFEE9E]">
      <div className="relative flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-5xl font-bold text-black md:text-8xl">Elevate Your AI Interactions.</h1>
        <h1 className="text-3xl mt-4 font-medium text-black md:text-3xl text-center mb-4">Craft perfect prompts <span className="text-[#587b7f]">every time.</span></h1>
        <Link href="/" className="mt-8" legacyBehavior>
              <a className="rounded-lg inline-block text-xl border font-bold text-white bg-black hover:bg-white hover:text-black py-4 px-8 mt-36 sm:mt-4">
                Go to App
              </a>
            </Link>
      </div>
    </header>
  );
}
