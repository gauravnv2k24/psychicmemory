/*
    This is fullscreen blogpage
    url:=> /blog/[id], id=>post id
*/

import { BlogFullScreen } from "@/components/Blog/BlogFullScreen";

// full screen blog item container
export default function Page() {
  return (
    <main className="p-5 flex flex-col items-center">
      <BlogFullScreen />
    </main>
  );
}
