import Image from "next/image";
import WorflowImg01 from "@/public/workflow-01.png";
import WorflowImg02 from "@/public/workflow-02.png";
import WorflowImg03 from "@/public/workflow-03.png";
import Spotlight from "@/components/landing/spotlight";

export default function Workflows() {
  return (
    <section className="mt-4 md:mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-6 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-rose-gold-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-rose-gold-200/50">
              <span className="inline-flex bg-gradient-to-r from-rose-gold-500 to-rose-gold-200 bg-clip-text text-transparent">
                AI Code Editor
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.rose-gold.200),theme(colors.gray.50),theme(colors.rose-gold.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Enhance Your Coding Experience
            </h2>
            <p className="text-lg text-rose-gold-200/65">
              Experience a powerful AI-driven code editor that helps you write,
              debug, and optimize your code effortlessly. Collaborate with your
              team in real-time and integrate seamlessly with your development
              workflow.
            </p>
          </div>
          {/* Spotlight items */}
          <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
            {/* Card 1 */}
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-rose-gold-300/20 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-rose-gold-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-rose-gold-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
              href="#0"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-white after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                {/* Arrow */}
                <div
                  className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-white text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100"
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={9}
                    height={8}
                    fill="none"
                  >
                    <path
                      fill="#F4F4F5"
                      d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
                    />
                  </svg>
                </div>
                {/* Image */}
                <Image
                  className="inline-flex"
                  src={WorflowImg01}
                  width={350}
                  height={288}
                  alt="AI Code Editor Feature 1"
                />
                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-white px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-white">
                      <span className="bg-gradient-to-r from-rose-gold-500 to-rose-gold-200 bg-clip-text text-transparent">
                        Smart Suggestions
                      </span>
                    </span>
                  </div>
                  <p className="text-rose-gold-200/65">
                    Leverage AI to get real-time code suggestions and improve
                    your coding efficiency.
                  </p>
                </div>
              </div>
            </a>
            {/* Card 2 */}
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-rose-gold-300/20 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-rose-gold-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-rose-gold-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
              href="#0"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-white after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                {/* Arrow */}
                <div
                  className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-white text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100"
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={9}
                    height={8}
                    fill="none"
                  >
                    <path
                      fill="#F4F4F5"
                      d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
                    />
                  </svg>
                </div>
                {/* Image */}
                <Image
                  className="inline-flex"
                  src={WorflowImg02}
                  width={350}
                  height={288}
                  alt="AI Code Editor Feature 2"
                />
                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-white px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-white">
                      <span className="bg-gradient-to-r from-rose-gold-500 to-rose-gold-200 bg-clip-text text-transparent">
                        Instant Debugging
                      </span>
                    </span>
                  </div>
                  <p className="text-rose-gold-200/65">
                    Quickly identify and fix errors in your code with AI-powered
                    debugging tools.
                  </p>
                </div>
              </div>
            </a>
            {/* Card 3 */}
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-rose-gold-300/20 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-rose-gold-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-rose-gold-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
              href="#0"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-white after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                {/* Arrow */}
                <div
                  className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-white text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100"
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={9}
                    height={8}
                    fill="none"
                  >
                    <path
                      fill="#F4F4F5"
                      d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
                    />
                  </svg>
                </div>
                {/* Image */}
                <Image
                  className="inline-flex"
                  src={WorflowImg03}
                  width={350}
                  height={288}
                  alt="AI Code Editor Feature 3"
                />
                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-white px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-white">
                      <span className="bg-gradient-to-r from-rose-gold-500 to-rose-gold-200 bg-clip-text text-transparent">
                        Collaborative Coding
                      </span>
                    </span>
                  </div>
                  <p className="text-rose-gold-200/65">
                    Work together with your team in real-time, sharing insights
                    and code snippets effortlessly.
                  </p>
                </div>
              </div>
            </a>
          </Spotlight>
        </div>
      </div>
    </section>
  );
}
