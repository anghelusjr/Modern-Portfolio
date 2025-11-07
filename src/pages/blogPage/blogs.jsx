import { BlogCardPage } from './blogCardPage';


function BlogsPage() {
  return (

    <>
      <header>
        <title>Blogs | Angel Buenavista — Web Designer in Taguig, Philippines </title>
        <meta name="description" content="Read the latest blog posts by Angel Buenavista, a web designer from Taguig, Philippines. Explore insights on web design, development, and digital trends to help you create effective online experiences." />
      </header>

      <article className="flex flex-col items-center h-auto overflow-hidden 
      pb-30 mt-30 px-4 xl:mt-8 lg:ml-16 xl:ml-62 xl:p-10">
        <h1 className="text-5xl capitalize p-6  bg-gray-800 rounded-3xl text-gray-100 2xl:px-20">Recent Blogs</h1>
          <BlogCardPage />
      </article >
    </>
  );
}

export default BlogsPage;