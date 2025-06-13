import { cn } from "@/lib/utils";
import { Marquee } from "@/components/landing/marquee";

const reviews = [
  {
    name: "Sarah Chen",
    username: "@sarahchen",
    body: "VibeDocs has revolutionized how we handle project documentation. The AI-powered PRD generation saves us hours of work, and the technical specs are always spot-on. A game-changer for our development team!",
    img: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Michael Rodriguez",
    username: "@mikerod",
    body: "As a technical lead, I've tried many documentation tools, but VibeDocs stands out. The AI assistant understands our requirements perfectly and generates comprehensive documentation that actually makes sense to our team.",
    img: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=2417&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Emma Thompson",
    username: "@emmathompson",
    body: "The team collaboration features in VibeDocs are incredible. We can now generate, review, and iterate on documentation in real-time. It's like having an AI documentation expert on our team!",
    img: "https://plus.unsplash.com/premium_photo-1691784781482-9af9bce05096?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-40 xl:max-w-96 md:max-w-56 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-blue-500 bg-gray-50/[.10] hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="rounded-full overflow-hidden">
          <img className="object-cover w-8 h-8" alt="" src={img} />
        </div>
        <div className="flex flex-col">
          <figcaption className="flex flex-row text-sm font-medium text-white">
            {name}{" "}
            <svg
              height="2500"
              viewBox="0 0 512 512"
              width="2500"
              className="h-4 w-4 ml-2"
            >
              <path
                d="m512 268c0 17.9-4.3 34.5-12.9 49.7s-20.1 27.1-34.6 35.4c.4 2.7.6 6.9.6 12.6 0 27.1-9.1 50.1-27.1 69.1-18.1 19.1-39.9 28.6-65.4 28.6-11.4 0-22.3-2.1-32.6-6.3-8 16.4-19.5 29.6-34.6 39.7-15 10.2-31.5 15.2-49.4 15.2-18.3 0-34.9-4.9-49.7-14.9-14.9-9.9-26.3-23.2-34.3-40-10.3 4.2-21.1 6.3-32.6 6.3-25.5 0-47.4-9.5-65.7-28.6-18.3-19-27.4-42.1-27.4-69.1 0-3 .4-7.2 1.1-12.6-14.5-8.4-26-20.2-34.6-35.4-8.5-15.2-12.8-31.8-12.8-49.7 0-19 4.8-36.5 14.3-52.3s22.3-27.5 38.3-35.1c-4.2-11.4-6.3-22.9-6.3-34.3 0-27 9.1-50.1 27.4-69.1s40.2-28.6 65.7-28.6c11.4 0 22.3 2.1 32.6 6.3 8-16.4 19.5-29.6 34.6-39.7 15-10.1 31.5-15.2 49.4-15.2s34.4 5.1 49.4 15.1c15 10.1 26.6 23.3 34.6 39.7 10.3-4.2 21.1-6.3 32.6-6.3 25.5 0 47.3 9.5 65.4 28.6s27.1 42.1 27.1 69.1c0 12.6-1.9 24-5.7 34.3 16 7.6 28.8 19.3 38.3 35.1 9.5 15.9 14.3 33.4 14.3 52.4zm-266.9 77.1 105.7-158.3c2.7-4.2 3.5-8.8 2.6-13.7-1-4.9-3.5-8.8-7.7-11.4-4.2-2.7-8.8-3.6-13.7-2.9-5 .8-9 3.2-12 7.4l-93.1 140-42.9-42.8c-3.8-3.8-8.2-5.6-13.1-5.4-5 .2-9.3 2-13.1 5.4-3.4 3.4-5.1 7.7-5.1 12.9 0 5.1 1.7 9.4 5.1 12.9l58.9 58.9 2.9 2.3c3.4 2.3 6.9 3.4 10.3 3.4 6.7-.1 11.8-2.9 15.2-8.7z"
                fill="#1da1f2"
              ></path>
            </svg>
          </figcaption>
          <p className="text-xs font-medium text-white/40">{username}</p>
        </div>
        <div className="ml-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-blue-500 fill-blue-500"
          >
            <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z"></path>
          </svg>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export default function Testimonials() {
  return (
    <div className="flex flex-col items-center justify-center mt-4 md:mt-20">
      <div className="text-center px-10 sm:mx-0">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">
          Trusted by Development Teams Worldwide ✨
        </h2>
        <p className="mt-4 text-lg text-gray-400">
          See how VibeDocs is transforming documentation workflows &rarr;
        </p>
      </div>
      <div className="my-20 relative flex h-[500px] sm:w-fit items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
        <Marquee pauseOnHover vertical className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee
          pauseOnHover
          vertical
          className="[--duration:20s] hidden xl:block"
        >
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-background"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background"></div>
      </div>
    </div>
  );
}
