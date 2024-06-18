/*
  This the home page of the blog website
*/

import { Blog } from "@/components/Blog/Blog";
import { TopicTechnology } from "@/components/Blog/BlogTopic";

export default function Home() {
  return (
    <>
      {/* actual blog content are rendered her*/}
      <Blog />
    </>
  );
}
