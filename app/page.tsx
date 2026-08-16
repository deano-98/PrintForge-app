import Nav from "@/components/Nav";
import Button from "@/components/Button";
import Image from "next/image";

/** Desktop hero: circular collage with diagonal pillar overlay */
function HeroCollage() {
  return (
    <figure className="group relative mx-auto aspect-square w-full max-w-100 cursor-pointer md:max-w-120 lg:max-w-140">
      <div className="relative h-full w-full overflow-hidden rounded-full bg-neutral-200 shadow-md transition-all duration-700 ease-out group-hover:-translate-y-1.5 group-hover:shadow-xl dark:bg-neutral-900 dark:shadow-neutral-900/50">
        <Image
          src="/hero-image.png"
          alt="3D-printed capitol, gears & statue"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
          className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.14] group-hover:-rotate-3"
          priority
        />
        <div
          className="pointer-events-none absolute inset-0 transition-transform duration-700 ease-out group-hover:rotate-[8deg]"
          aria-hidden
        >
          <div className="absolute left-1/2 top-1/2 h-[145%] w-[7.5%] -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-full bg-white dark:bg-black" />
          <div className="absolute left-1/2 top-1/2 h-[28%] w-[28%] origin-center -translate-x-1/2 -translate-y-1/2 rounded-full bg-white transition-transform duration-700 ease-out group-hover:scale-125 dark:bg-black" />
        </div>
      </div>
    </figure>
  );
}

/** Mobile / tablet hero: fills remaining height, mask-faded at top edge */
function HeroBanner() {
  return (
    <div className="relative w-full flex-1 overflow-hidden lg:hidden mask-[linear-gradient(to_bottom,transparent_0%,black_30%)]">
      <Image
        src="/hero-image.png"
        alt="3D-printed capitol, gears & statue"
        fill
        sizes="100vw"
        className="object-cover object-top"
        priority
      />
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex h-screen w-full flex-col overflow-hidden bg-white font-body text-neutral-900 dark:bg-black dark:text-neutral-100">
      <Nav />

      <section className="mx-auto flex w-full flex-1 flex-col overflow-hidden lg:max-w-7xl lg:flex-row lg:items-center lg:gap-16 lg:px-6 lg:py-12">
        {/* Headings section */}
        <div className="flex flex-col justify-center space-y-4 px-6 mt-16 pt-2 text-center sm:space-y-6 md:px-8 md:pt-4 lg:flex-1 lg:px-0 lg:py-0 lg:text-left">
          <p className="animate-fade-in-up text-xs hidden sm:block font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400 sm:text-sm">
            Your go-to platform for 3D printing files
          </p>

          <h1 className="animate-fade-in-up font-display text-2xl font-bold leading-tight sm:text-5xl lg:text-6xl lg:leading-tight">
            Discover what&rsquo;s possible with 3D printing
          </h1>

          <p className="animate-fade-in-up mx-auto max-w-md text-sm text-neutral-600 dark:text-neutral-400 sm:text-lg lg:mx-0">
            Join our community of creators and explore a vast library of user-submitted models.
          </p>

          <div className="animate-fade-in-up flex justify-center lg:justify-start">
            <Button href="/models" variant="outline">
              Browse Models
            </Button>
          </div>
        </div>

        {/* Mobile image area fills bottom space */}
        <HeroBanner />

        {/* Desktop collage area */}
        <div className="hidden flex-1 lg:block">
          <HeroCollage />
        </div>
      </section>
    </main>
  );
}