import React, { useState } from 'react'

function ListAndKey() {
  const [products, setProducts] = useState([])

  function handleAdd() {
    const product = {
      id: Date.now(),
      brand: `Apple ${Date.now()}`,
      title: `${Date.now()}`
    }
    setProducts([...products, product]);
  }

  function handleDelete(productId) {
    const newProducts = products.filter(product => product.id !== productId);
    setProducts(newProducts)
  }

  console.log('product: ', products)

  return (
    <div> 
      <h1>ListAndKey</h1>
      <button type="button" onClick={handleAdd}>Add</button> <br /><br />
      {products.map((product) => {
        return (
          <div key={product.id} className='card'>
            <div 
              className='card-header'
              style={{ color: 'red' }}
            >
              {product.title}
            </div>
            <div className='card-body'>
              {product.brand} <br /><br />
              <button 
              type="button"
                onClick={() => { 
                  handleDelete(product.id)
                }}
              >
                Delete
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ListAndKey