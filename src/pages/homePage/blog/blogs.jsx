import { BlogCard } from "./blogCard"


export function Blogs() {
  return (
    <>
      <section className="bg-[var(--primary-color)] grid grid-cols gap-6 place-items-center
         overflow-scroll h-screen w-screen snap-center snap-always
         pt-20 xl:pt-10 pb-20 px-4 lg:pl-30 lg:pr-15 xl:pl-75 overflow-x-hidden
         ">
        <h2 className="text-center text-gray-200 font-medium text-2xl lg:text-3xl xl:text-4xl py-10">Stories From My Journey as a <strong>Web Designer</strong>
        </h2>
        <div className="grid grid-cols-1 max-w-full lg:grid-cols-2 2xl:grid-cols-3 sm:px-15 gap-10">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </section>
    </>
  )
}