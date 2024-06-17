/* 
blog loader component to simulate blog post 
skeleton loading in website
*/

export function BlogLoader() {
  return (
    <article className="my-5 w-[300px]">
      <p className="h-2 bg-gray-200 w-[50px] animate-pulse my-2"></p>
      <h4 className="h-4 bg-gray-200 w-[250px] animate-pulse"></h4>
      <p className="h-20 bg-gray-200 w-[300px] animate-pulse my-2"></p>
      <section className="flex justify-between">
        <p className="h-2 bg-gray-200 w-[50px] animate-pulse my-2"></p>
        <p className="h-2 bg-gray-200 w-[50px] animate-pulse my-2"></p>
      </section>
    </article>
  );
}
