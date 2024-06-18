"use client";

import { useEffect, useState } from "react";
import { BlogLoader } from "../Loaders/BlogLoader";
import { BlogPost } from "./BlogPost";

// main blog component
export function Blog() {
  // Loading state is configured here
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simple loading simulation
    setInterval(() => {
      setLoading((loading) => false);
      console.log("Hello");
    }, 2000);
  }, []);

  return (
    <main className="p-5 my-5 flex flex-col items-center">
      <main>
        {/* title section */}
        <section>
          {/* bread crumbs */}
          <section className="text-xs my-3">
            <span className="text-blue-500">Home</span>
          </section>
          <h3 className="text-xl font-bold heading">Blogs</h3>
          <p className="text-sm text-gray-500">
            <span className="text-xs my-3">
              <i className="far fa-calendar mr-1"></i>16 June, 2024
            </span>
            <i className="fas fa-circle text-blue-500 text-[5px] mx-2"></i>
            <span className="text-xs my-3">3 Blogs</span>
          </p>
        </section>

        {/* blog posts */}
        {loading ? (
          <>
            <BlogLoader></BlogLoader>
            <BlogLoader></BlogLoader>
            <BlogLoader></BlogLoader>
          </>
        ) : (
          <>
            <BlogPost />
            <BlogPost />
            <BlogPost />
          </>
        )}
      </main>

      {/* pagination */}
      <section className="text-xs my-3 my-5 ">
        <span className="border p-1 px-2 rounded mr-2">
          <i className="fas fa-angle-left"></i>
        </span>
        <span className="border p-1 px-2 rounded mr-2">1</span>
        <span className="border p-1 px-2 rounded mr-2">2</span>
        <span className="border p-1 px-2 rounded mr-2">3</span>
        <span className="border p-1 px-2 rounded mr-2">4</span>
        <span className="border p-1 px-2 rounded mr-2">
          <i className="fas fa-angle-right"></i>
        </span>
      </section>
    </main>
  );
}
