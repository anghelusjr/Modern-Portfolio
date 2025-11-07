import { blogData } from './blogData';


export function BlogCardPage() {
    return (
        <>
            <section className="h-auto flex flex-col gap-10 mt-10 xl:mt-20 pl-4 max-w-3xl 2xl:max-w-4xl">
                {blogData.map((blog) => {
                    return (
                        <div
                            id={blog.id}
                            key={blog.id}
                            className='flex flex-col gap-10 items-center'
                        >
                            <h2 className="text-3xl font-medium text-gray-900 pb-2">{blog.heading}</h2>
                            <div className='flex flex-col lg:flex-row items-center justify-center gap-6'>
                                {blog.images.map((image, index) => {
                                    return (
                                        <img
                                            key={index}
                                            src={image}
                                            alt='blog images list'
                                            className='w-100 rounded-lg shadow-lg'
                                        />
                                    )
                                })}
                            </div>


                            <p className="text-lg leading-7 text-gray-700 pb-6">{blog.description}</p>
                        </div>
                    )
                })}

            </section>
        </>
    )
}