import { blogData } from './blogData';

export function BlogCardPage() {
    return (
        <section className="h-auto flex flex-col gap-16 mt-10 xl:mt-20 px-4 max-w-6xl mx-auto">

            {blogData.map((blog) => {
                return (
                    <div
                        id={blog.id}
                        key={blog.id}
                        className="flex flex-col gap-8 items-center"
                    >
                        <h2 className="text-3xl font-medium text-gray-900 text-center">
                            {blog.heading}
                        </h2>

                        {/* Images */}
                        <div className="flex flex-wrap justify-center gap-6 w-full">

                            {blog.images.map((image, index) => {

                                const imageCount = blog.images.length;

                                return (
                                    <img
                                        key={index}
                                        src={image}
                                        alt="blog images list"
                                        className={`
                                            rounded-xl shadow-lg object-cover

                                            ${imageCount === 1
                                                ? 'w-full max-w-2xl h-[420px]'
                                                : imageCount === 2
                                                    ? 'w-full md:w-[45%] h-[320px]'
                                                    : 'w-full md:w-[30%] h-[250px]'
                                            }
                                        `}
                                    />
                                );
                            })}

                        </div>

                        <p className="text-lg leading-7 text-gray-700 text-center max-w-3xl">
                            {blog.description}
                        </p>
                    </div>
                );
            })}

        </section>
    );
}