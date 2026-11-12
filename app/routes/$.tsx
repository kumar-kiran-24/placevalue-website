import { Link } from "react-router";
import { createSeoMeta } from "@/lib/seo";

export function meta() {
  return createSeoMeta({
    title: "Page Not Found | PlaceValue",
    description: "The page you are looking for does not exist or has moved.",
    noIndex: true,
  });
}

export async function clientAction() {
  return { ok: true };
}

export default function ComingSoonRoute() {
  return (
    <div className="flex min-h-full flex-col items-center justify-center gap-4 bg-background px-6 py-24 text-center">
      <p className="text-[11px] font-bold tracking-[2px] text-brand-orange">
        COMING SOON
      </p>
      <h1 className="font-display text-4xl font-extrabold tracking-[-1.5px] text-foreground md:text-5xl">
        This page is on its way
      </h1>
      <p className="max-w-md text-base leading-6 text-brand-body">
        We are still building this section. Head back to the homepage in the
        meantime.
      </p>
      <Link
        to="/"
        className="mt-2 inline-flex h-12 items-center rounded-full bg-brand-night px-7 text-sm font-bold text-white"
      >
        Back to home
      </Link>
    </div>
  );
}
