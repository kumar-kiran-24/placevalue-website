import { redirect } from "react-router";

export async function clientLoader() {
  return redirect("/terms");
}

export function meta() {
  return [
    { title: "Terms of Service | PlaceValue" },
    { name: "robots", content: "noindex, follow" },
  ];
}

export { default } from "./terms";
