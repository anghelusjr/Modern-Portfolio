import { blogData } from './blogData';

export function BlogCardPage() {
    return (
        <section className="h-auto flex flex-col gap-16 mt-10 xl:mt-20 pl-4 max-w-6xl mx-auto">

            {blogData.map((blog) => {
                return (
                    <div
                        id={blog.id}
                        key={blog.id}
                        className='flex flex-col gap-8 items-center'
                    >
                        <h2 className="text-3xl font-medium text-gray-900 text-center">
                            {blog.heading}
                        </h2>

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full'>
                            {blog.images.map((image, index) => {
                                return (
                                    <img
                                        key={index}
                                        src={image}
                                        alt='blog images list'
                                        className='w-full h-[230px] object-cover rounded-lg shadow-lg'
                                    />
                                )
                            })}
                        </div>

                        <p className="text-lg leading-7 text-gray-700 text-center max-w-3xl">
                            {blog.description}
                        </p>
                    </div>
                )
            })}

        </section>
    )
}