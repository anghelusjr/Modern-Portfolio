export function BlogCard() {
  return (
    <>
      <div className="bg-[url('/bg-pricing.webp')] bg-center bg-cover 
      w-full xl:max-w-6xl h-100 pt-40 xl:h-auto xl:pt-50 rounded-lg flex items-end
      shadow-lg hover:shadow-xl transition-all duration-400 hover:-translate-y-2 cursor-pointer">
        <div className="bg-black/70 xl:bg-black/90 p-4 xl:p-10">
          <h3 className="text-white text-shadow-2xs font-medium text-2xl py-6">Blog: Story Designer</h3>
          <p className="text-lg leading-7 text-white text-shadow-2xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quibusdam ?</p>
        </div>
      </div>
    </>
  )
}