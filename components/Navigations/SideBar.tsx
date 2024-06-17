import Link from "next/link";
import { Pages } from "./Pages";

// side bar component
export function SideBar() {
  return (
    <ul className="flex flex-col space-y-5 bg-white shadow w-fit p-5 rounded-md text-[13px] flex-wrap absolute">
      {Pages.map((page, index) => (
        // side bar links
        <li className="flex items-center text-[12px]" key={page.title + index}>
          <Link href={page.url}>{page.title}</Link>
        </li>
      ))}
    </ul>
  );
}
