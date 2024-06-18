import Link from "next/link";
import { TopicTechnology } from "./BlogTopic";

// blog post component
export function BlogPost() {
  return (
    <article className="max-w-[450px] my-[30px]">
      {/* blog Topic chip*/}
      <TopicTechnology />

      {/* title of the blog */}
      <h3 className="style-text text-gray-700 flex items-center hover:text-purple-500 hover:cursor-pointer font-bold">
        Lorem ipsum dolor sit amet.
        {/* blog post link */}
        <Link href={"/"}>
          <i className="fas fa-arrow-up-right-from-square text-[10px] ml-1 text-purple-500"></i>
        </Link>
      </h3>

      {/* blog discription */}
      <p className="text-gray-600 text-[11px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ab
        voluptatum fugit, autem velit voluptates tenetur totam consectetur eos
        nobis!
      </p>

      {/* like and comment section */}
      <section className="flex item-center justify-between">
        <section className="text-xs text-gray-500 mt-5">
          <i className="far fa-heart text-red-500"></i>
          <span className="text-[10px] ml-1">10 likes</span>
          <i className="far fa-comment text-black ml-5"></i>
          <span className="text-[10px] ml-1">10 comments</span>
        </section>

        {/* date and time section */}
        <section className="text-xs text-gray-500 mt-5">
          <span className="text-[10px]">
            <i className="far fa-calendar mr-1"></i>
            16 June, 2024
          </span>
          <i className="fas fa-circle text-blue-500 text-[5px] mx-2"></i>
          <span className="text-[10px]">
            <i className="far fa-clock mr-1"></i>5 mins
          </span>
        </section>
      </section>
    </article>
  );
}
