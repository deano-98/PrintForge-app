import Link from "next/link";
import Image from "next/image";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 font-display text-xl font-semibold text-neutral-900">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 2v6" strokeLinecap="round" />
        <path d="M8 5h8l-1.5 3h-5L8 5Z" />
        <path d="M4 15c0-2 2-2 2-2h12s2 0 2 2" strokeLinecap="round" />
        <path d="M4 19c0-2 2-2 2-2h12s2 0 2 2" strokeLinecap="round" />
      </svg>
      printforge
    </Link>
  );
}

function Nav() {
  return (
    <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8">
      <Logo />
      <nav className="flex items-center gap-8 font-body text-sm font-semibold uppercase tracking-wide">
        <Link href="/models" className="text-neutral-500 hover:text-neutral-900">
          3D Models
        </Link>
        <Link href="/about" className="border-b-2 border-orange-500 pb-1 text-orange-500">
          About
        </Link>
      </nav>
    </header>
  );
}

const stats = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 3 3 8l9 5 9-5-9-5Z" />
        <path d="M3 12l9 5 9-5" />
        <path d="M3 16l9 5 9-5" />
      </svg>
    ),
    title: "100K+ Models",
    body: "Access our vast library of community-created 3D models, from practical tools to artistic creations.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.5 3.5 5.7 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-5.7-3.5-9s1-6.5 3.5-9Z" />
      </svg>
    ),
    title: "Active Community",
    body: "Join thousands of makers who share tips, provide feedback, and collaborate on projects.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M5 3v18" strokeLinecap="round" />
        <path d="M5 4h13l-2.5 3.5L18 11H5" />
      </svg>
    ),
    title: "Free to Use",
    body: "Most models are free to download, with optional premium features for power users.",
  },
];

export default function About() {
  return (
    <main className="min-h-screen bg-white font-body">
      <Nav />

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-8 md:grid-cols-2 md:gap-16">
        <div className="aspect-4/3 w-full overflow-hidden bg-neutral-200">
          <Image
            src="/about-image.png"
            alt="3D-printed capitol, gears & statue on about page"
            width={800}
            height={600}
            className="object-cover" 
          />
        </div>

        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
            About PrintForge
          </p>
          <h1 className="font-display text-3xl font-bold leading-tight text-neutral-900 md:text-4xl">
            Empowering makers worldwide
          </h1>
          <p className="text-neutral-600">
            Founded in 2023, PrintForge has quickly become the go-to platform
            for 3D printing enthusiasts, makers, and professional designers
            to share and discover amazing STL files for 3D printing.
          </p>
          <p className="text-neutral-600">
            Our mission is to foster a vibrant community where creativity
            meets technology, enabling anyone to bring their ideas to life
            through 3D printing.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl border-t border-neutral-200 px-6" />

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.title} className="space-y-2 md:border-l md:border-neutral-200 md:first:border-l-0 md:px-8 md:first:pl-0">
            <div className="flex items-center gap-2 font-display text-lg font-semibold text-neutral-900">
              <span className="text-neutral-700">{stat.icon}</span>
              {stat.title}
            </div>
            <p className="text-sm text-neutral-600">{stat.body}</p>
          </div>
        ))}
      </section>

      <div className="mx-auto max-w-6xl border-t border-neutral-200 px-6" />

      <section className="mx-auto max-w-6xl space-y-6 px-6 py-16 text-center">
        <h2 className="font-display text-3xl font-bold text-neutral-900 md:text-4xl ">
          Our vision
        </h2>
        <p className="max-w-3xl text-center text-neutral-600">
          At PrintForge, we believe that 3D printing is revolutionizing the
          way we create, prototype, and manufacture. Our platform serves as
          a bridge between designers and makers, enabling the sharing of
          knowledge and creativity that pushes the boundaries of what&rsquo;s
          possible with 3D printing.
        </p>
        <div className="h-px w-24 bg-neutral-300" />

        <p className="max-w-3xl text-center text-neutral-600">
          Whether you&rsquo;re a hobbyist looking for your next weekend
          project, an educator seeking teaching materials, or a professional
          designer wanting to share your creations, PrintForge provides the
          tools and community to support your journey in 3D printing.
        </p>
      </section>
    </main>
  );
}
