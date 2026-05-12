
const About = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Mission</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            At Maxi, we believe that fashion is a form of self-expression. Our mission is to provide you with the finest apparel that combines timeless elegance with modern comfort.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <h3 className="font-semibold text-gray-900">Quality Craftsmanship</h3>
            <p className="mt-2 text-gray-600">Every piece in our collection is crafted with meticulous attention to detail using premium materials.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Sustainable Fashion</h3>
            <p className="mt-2 text-gray-600">We are committed to ethical sourcing and reducing our environmental footprint throughout our supply chain.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Customer Centric</h3>
            <p className="mt-2 text-gray-600">Your satisfaction is our top priority. We offer dedicated support to ensure a seamless shopping experience.</p>
          </div>
        </div>

        <div className="mt-24 rounded-3xl bg-indigo-600 py-16 px-6 text-center sm:px-12 lg:px-16 shadow-2xl overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Join our community</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-indigo-100">
              Stay updated with the latest trends, exclusive offers, and behind-the-scenes content.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button className="rounded-full bg-white px-8 py-3 text-sm font-bold text-indigo-600 shadow-sm hover:bg-indigo-50 transition-all transform hover:scale-105 active:scale-95">
                Subscribe Now
              </button>
            </div>
          </div>
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 blur-3xl opacity-30">
            <div className="aspect-square w-[400px] rounded-full bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
