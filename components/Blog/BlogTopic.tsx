/* eslint-disable @next/next/no-img-element */
// just a chip based on topic of the blog post
// is exported from here

export function TopicTechnology() {
  return (
    <p className="flex items-center text-xs text-gray-500">
      <img
        width="30"
        height="30"
        src="https://img.icons8.com/clouds/100/technology.png"
        alt="technology"
      />
      <span className="text-[10px] ml-1">Technology</span>
    </p>
  );
}
