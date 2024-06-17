import { Blog } from "@/components/Blog/Blog";
import { NavBar } from "@/components/Navigations/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />

      {/* actual blog content are rendered her*/}
      <Blog />
    </>
  );
}
