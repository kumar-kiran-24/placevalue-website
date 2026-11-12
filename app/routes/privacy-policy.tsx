import { redirect } from "react-router";

export async function clientLoader() {
  return redirect("/privacy");
}

export function meta() {
  return [
    { title: "Privacy Policy | PlaceValue" },
    { name: "robots", content: "noindex, follow" },
  ];
}

export { default } from "./privacy";
