import { womenProducts } from '../data/products'

const Women = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Women's Collection</h2>
        <span className="text-sm text-gray-500 font-medium bg-gray-100 px-4 py-1 rounded-full">
          {womenProducts.length} Items Found
        </span>
      </div>

      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
        {womenProducts.map((product) => (
          <div key={product.id} className="group relative">
            <div className="aspect-w-4 aspect-h-5 w-full overflow-hidden rounded-3xl bg-gray-200 group-hover:opacity-75 transition-opacity duration-300">
              <img
                src={product.image}
                alt={product.name}
                className="h-[400px] w-full object-cover object-center"
              />
            </div>
            <div className="mt-6 flex justify-between items-start">
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  <a href="#">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                <div className="mt-2 flex gap-1">
                  {product.sizes.map(size => (
                    <span key={size} className="text-[10px] border border-gray-200 px-2 py-0.5 rounded text-gray-400">
                      {size}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-xl font-black text-indigo-600">${product.price}</p>
            </div>
            <p className="mt-3 text-sm text-gray-500 line-clamp-2">
              {product.description}
            </p>
            <button className="mt-6 w-full py-3 bg-gray-900 text-white rounded-2xl font-bold text-sm hover:bg-gray-800 transition-colors">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Women
