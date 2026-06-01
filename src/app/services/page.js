import { redirect } from "next/navigation";

export default function Page() {
  // Server-side redirect to the not-found page
  redirect("/not-found");
}
