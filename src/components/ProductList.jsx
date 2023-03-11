
const ProductList = ({ products }) => {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {products.map(product => (
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <p>#post{product.id}</p>
            <h2 className="card-title">{product.title}</h2>
            <p>{product.body}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductList