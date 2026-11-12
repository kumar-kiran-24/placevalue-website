import { useEffect } from "react";

export function meta() {
  return [
    { title: "Consultancy | PlaceValue" },
    { name: "robots", content: "noindex, follow" },
  ];
}

export async function clientLoader() {
  if (typeof window !== "undefined") {
    window.location.replace("https://consultancy.placevalue.in");
  }
  return null;
}

export default function ConsultancyRedirect() {
  useEffect(() => {
    window.location.replace("https://consultancy.placevalue.in");
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6 text-center">
      <p className="text-sm text-brand-muted">
        Redirecting to PlaceValue Consultancy...
      </p>
    </div>
  );
}
