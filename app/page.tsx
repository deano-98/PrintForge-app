import Nav from "@/components/Nav";
import Button from "@/components/Button";
import Image from "next/image";

/**
 * Desktop hero: circular collage with diagonal pillar overlay.
 * Hovering anywhere triggers the animation.
 */
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

/** Mobile / tablet hero: full-bleed rectangular crop */
function HeroBanner() {
  return (
    <div className="relative w-full lg:hidden">
      <div className="relative aspect-4/3 w-full overflow-hidden bg-neutral-900 sm:aspect-16/10">
        <Image
          src="/hero-image.png"
          alt="3D-printed capitol, gears & statue"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-body text-neutral-900 dark:bg-black dark:text-neutral-100">
      <Nav />

      <section className="mx-auto flex max-w-7xl flex-col lg:min-h-[calc(100vh-5.5rem)] lg:flex-row lg:items-center lg:gap-16 lg:px-6 lg:py-12">
        <div className="flex flex-1 flex-col justify-center space-y-6 px-6 pb-8 pt-4 text-center md:px-8 md:pb-10 md:pt-6 lg:space-y-8 lg:px-0 lg:py-0 lg:text-left">
          <p className="animate-fade-in-up hidden text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400 sm:block">
            Your go-to platform for 3D printing files
          </p>

          <h1 className="animate-fade-in-up font-display text-[2rem] font-bold leading-[1.15] [animation-delay:100ms] sm:text-5xl lg:text-6xl lg:leading-tight">
            Discover what&rsquo;s possible with 3D printing
          </h1>

          <p className="animate-fade-in-up mx-auto max-w-md text-base text-neutral-600 [animation-delay:200ms] dark:text-neutral-400 sm:text-lg lg:mx-0">
            Join our community of creators and explore a vast library of
            user-submitted models.
          </p>

          <div className="animate-fade-in-up flex justify-center [animation-delay:300ms] lg:justify-start">
            <Button href="/models" variant="outline">
              Browse Models
            </Button>
          </div>
        </div>

        <HeroBanner />

        <div className="hidden flex-1 lg:block">
          <HeroCollage />
        </div>
      </section>
    </main>
  );
}
