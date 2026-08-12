import Nav from "@/components/Nav";
import Button from "@/components/Button";
import ModelCard from "@/components/ModelCard";
import { featuredModels } from "@/lib/models";
import Image from "next/image";

/**
 * Hero collage: one circular image with a diagonal pillar overlay (center hub
 * + bar). Hovering anywhere on the collage triggers the animation.
 */
function HeroCollage() {
  return (
    <figure className="group relative mx-auto aspect-square w-full max-w-100 cursor-pointer md:max-w-120 lg:max-w-140">
      <div className="relative h-full w-full overflow-hidden rounded-full bg-neutral-200 shadow-md transition-all duration-700 ease-out group-hover:-translate-y-1.5 group-hover:shadow-xl">
        <Image
          src="/hero-image.png"
          alt="3D-printed capitol, gears & statue"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.14] group-hover:-rotate-3"
          priority
        />

        {/* Diagonal pillar — center hub + bar */}
        <div
          className="pointer-events-none absolute inset-0 transition-transform duration-700 ease-out group-hover:rotate-[8deg]"
          aria-hidden
        >
          <div className="absolute left-1/2 top-1/2 h-[145%] w-[7.5%] -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-full bg-white" />
          <div className="absolute left-1/2 top-1/2 h-[28%] w-[28%] origin-center -translate-x-1/2 -translate-y-1/2 rounded-full bg-white transition-transform duration-700 ease-out group-hover:scale-125" />
        </div>
      </div>
    </figure>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-body overflow-hidden h-screen">
      <Nav />

      <section className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-12 md:flex-row md:py-20">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <p className="animate-fade-in-up text-sm font-semibold uppercase tracking-wide text-neutral-500">
            Your go-to platform for 3D printing files
          </p>

          <h1 className="animate-fade-in-up font-display text-4xl font-bold leading-tight text-neutral-900 [animation-delay:100ms] sm:text-5xl lg:text-6xl">
            Discover what&rsquo;s possible with 3D printing
          </h1>

          <p className="animate-fade-in-up mx-auto max-w-md text-lg text-neutral-600 [animation-delay:200ms] md:mx-0">
            Join our community of creators and explore a vast library of
            user-submitted models.
          </p>

          <div className="animate-fade-in-up flex justify-center gap-4 pt-2 [animation-delay:300ms] md:justify-start">
            <Button href="/models" variant="outline">
              Browse Models
            </Button>
          </div>
        </div>

        <div className="flex-1">
          <HeroCollage />
        </div>
      </section>


{/* Featured Models for future implementation */}

      {/* <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-display text-2xl font-bold text-neutral-900 sm:text-3xl">
            Featured models
          </h2>
          <Button href="/models" variant="outline" className="self-start sm:self-auto">
            Browse all
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredModels.map((model) => (
            <ModelCard key={model.id} model={model} />
          ))}
        </div>
      </section> */}
    </main>
  );
}