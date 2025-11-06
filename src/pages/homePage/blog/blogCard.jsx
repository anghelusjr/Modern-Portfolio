import { blogData } from './blogData';


export function BlogCard() {
  return (
    <>
      {blogData.map((blog) => {
        return(
      <div 
      key={blog.id} 
      style={{backgroundImage: `url(${blog.image})`}}
      className='bg-center bg-cover overflow-hidden
        w-full xl:max-w-6xl h-100 pt-40 xl:h-auto xl:pt-50 rounded-lg flex items-end
        shadow-lg hover:shadow-xl transition-all duration-400 hover:scale-108 cursor-pointer'>
            <div key={blog.id} className="bg-black/70 xl:bg-black/90 p-4 xl:p-10 xl:pl-5">
              <h3 className="text-white text-shadow-2xs font-medium text-2xl py-6">{blog.heading}</h3>
              <p className="text-lg leading-7 text-white text-shadow-2xs truncate w-90">{blog.description}</p>
            </div>
          </div>
        )
      })}
    </>
  )
}