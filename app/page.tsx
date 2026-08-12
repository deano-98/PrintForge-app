import Nav from "@/components/Nav";
import Button from "@/components/Button";
import ModelCard from "@/components/ModelCard";
import { featuredModels } from "@/lib/models";
import Image from "next/image";

/**
 * Split-circle collage: two overlapping circular "photo" placeholders with a
 * diagonal gap between them, echoing the offset ring graphic in the Figma hero.
 */
function HeroCollage() {
  return (
    <div className="group relative mx-auto aspect-square w-full max-w-100 md:max-w-120 lg:max-w-140">
      {/* Bottom-left circle */}
      <div className="absolute inset-0 overflow-hidden rounded-full bg-neutral-200 transition-transform duration-700 ease-out group-hover:-translate-x-1 group-hover:-translate-y-1">
        <Image
          src="/hero-image.png"
          alt="3D-printed capitol, gears & statue"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      {/* Top-right circle, offset up and to the right */}
      <div className="absolute inset-0 translate-y-[-18%] translate-x-[18%] overflow-hidden rounded-full bg-neutral-200 shadow-[0_0_0_8px_white] transition-transform duration-700 ease-out group-hover:translate-x-[20%] group-hover:translate-y-[-20%]">
        <Image
          src="/hero-image.png"
          alt="Robot head & geometric prints"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      {/* Diagonal gap band to echo the split-ring look */}
      <div className="pointer-events-none absolute inset-[-4%] rotate-28 bg-white [clip-path:polygon(0%_44%,100%_44%,100%_56%,0%_56%)]" />
    </div>
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