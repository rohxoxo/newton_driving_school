export default function HeroSection() {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Learn to drive with Newton Driving School.
              <a
                href="https://wa.me/17786973322?text=I%20would%20like%20to%20enroll%20in%20the%20classes"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 font-semibold text-indigo-600 hover:underline hover:text-indigo-800 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Redirecting to WhatsApp...');
                  window.open(
                    "https://wa.me/17786973322?text=I%20would%20like%20to%20enroll%20in%20the%20classes",
                    "_blank"
                  );
                }}
              >
                Book Your Lesson →
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
              Get on the Road with Confidence
            </h1>
            <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl">
              We provide expert driving lessons to help you pass your test and become a safe, confident driver.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://wa.me/17786973322?text=I%20would%20like%20to%20enroll%20in%20the%20classes"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 cursor-pointer"
                onClick={(e) => {
                  alert('Redirecting to WhatsApp...');
                }}
              >
                Book a Lesson
              </a>
              <a
                href="/services"
                className="text-sm font-semibold text-gray-900 hover:text-gray-700 hover:underline cursor-pointer"
              >
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
