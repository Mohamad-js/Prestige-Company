import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSliderPage, sliderPages } from "@/lib/slider-pages";

export function generateStaticParams() {
  return sliderPages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getSliderPage(slug);

  return page ? { title: page.title, description: page.claim } : {};
}

export default async function SliderDetailPage({ params }) {
  const { slug } = await params;
  const page = getSliderPage(slug);
  if (!page) notFound();

  return (
    <main dir="rtl" className="relative min-h-screen overflow-clip bg-neutral-950 font-(family-name:--vazirt) text-white">
      <div className="fixed inset-0 z-0" aria-hidden="true">
        <Image
          src={page.image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/60 to-black/85" />
      </div>

      <article className="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl flex-col px-5 pb-24 pt-28 sm:px-10 sm:pt-36">
        <Link href="/" className="mb-10 w-fit rounded-full border border-white/30 bg-black/25 px-5 py-2 text-sm text-white/90 backdrop-blur transition hover:bg-white/15">
          بازگشت به صفحه اصلی
        </Link>
        <header className="mb-10 border-b border-white/25 pb-8">
          <p className="mb-4 text-sm tracking-wide text-white/70">معرفی دوره</p>
          <h1 className="font-(family-name:--vazirb) text-4xl leading-tight sm:text-6xl">{page.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-9 text-white/85 sm:text-xl">{page.claim}</p>
        </header>

        <div className="space-y-8 text-lg leading-10 text-white/90 sm:text-xl sm:leading-[2.6]">
          {page.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <p>{page.paragraphs[0]}</p>
          <p>{page.paragraphs[1]}</p>
          <p>{page.paragraphs[2]}</p>
          <p>{page.paragraphs[0]}</p>
        </div>
      </article>
    </main>
  );
}
