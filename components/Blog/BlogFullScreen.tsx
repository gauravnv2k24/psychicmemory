import Link from "next/link";
import { TopicTechnology } from "./BlogTopic";

// a full screen blog post component
export function BlogFullScreen() {
  return (
    <article className="max-w-[450px] my-[30px]">
      {/* back button */}
      <Link href={"/"}>
        <button className="bg-blue-500 text-white p-1 px-2 rounded-md text-xs">
          Back
        </button>
      </Link>

      {/* bread crumbs */}
      <section className="text-[10px] my-3">
        <span className="text-blue-500">Home</span>
        {" > "}
        <span className="text-blue-500">Blog</span>
        {" > "}
        <span className="text-blue-500">
          Lorem ipsum dolor sit, amet consectetur
          {"...."}
        </span>
      </section>
      {/* title of the blog */}
      <h3 className="style-text text-gray-700 flex items-center hover:text-purple-500 hover:cursor-pointer font-black text-4xl mb-2 ">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi,
        consequatur!
      </h3>

      <section className="flex items-center justify-between">
        {/* blog Topic chip*/}
        <TopicTechnology />

        {/* date and time section */}
        <section className="text-xs text-gray-500 my-5">
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

      {/* blog discription */}
      <p className="text-gray-600 text-[11px] text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolorum,
        nesciunt fugit et, itaque eaque modi sed odit minima adipisci ipsum
        laboriosam iste consectetur. Corrupti, enim iste. Quia quod possimus
        animi quibusdam fugit numquam aliquid harum cumque, officiis eius. Quod
        nemo minus enim ipsum modi maxime quibusdam molestias, deleniti culpa.
        Neque ratione laudantium quam dolores tenetur illum sunt libero numquam
        voluptas rerum. Alias nam dolor molestiae dolore sapiente iure magnam et
        veniam fugiat reprehenderit, labore soluta tenetur inventore optio
        aperiam explicabo obcaecati laudantium vitae corrupti ab ut!
        Voluptatibus sed, voluptates maiores nam maxime atque saepe similique,
        obcaecati, nostrum eaque ullam.
      </p>

      {/* like and comment section */}
      <section className="flex item-center justify-between">
        <section className="text-xs text-gray-500 mt-5">
          <i className="far fa-heart text-red-500"></i>
          <span className="text-[10px] ml-1">10 likes</span>
          <i className="far fa-comment text-black ml-5"></i>
          <span className="text-[10px] ml-1">10 comments</span>
        </section>

        {/* share post section */}
        <section className="text-xs text-gray-500 mt-5">
          <span className="text-[10px]">
            <i className="fas fa-share mr-1"></i>
            Share
          </span>
        </section>
      </section>
    </article>
  );
}
