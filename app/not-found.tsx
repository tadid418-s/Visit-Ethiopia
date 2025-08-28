import Image from "next/image"
import Link from "next/link"
import NotFoundBodyClass from "@/components/NotFoundBodyClass"

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
  <NotFoundBodyClass />
      <div className="w-full max-w-4xl px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Illustration */}

          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/404.png"
              alt="404 illustration"
              width={360}
              height={270}
              className="max-w-[360px] h-auto"
              priority
            />
          </div>

          {/* Text content */}
          <div className="w-full md:w-1/2 text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">Oops!</h1>
            <p className="text-lg md:text-xl text-gray-500 mb-8">We couldn't find the page you were looking for</p>

            <div>
              <Link
                href="/"
                className="inline-flex items-center gap-3 bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-95"
                aria-label="Go home"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                <span>Go home</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
