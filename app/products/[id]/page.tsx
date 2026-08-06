import React from 'react'

const ProductsWithId = async ({params}) => {
    const p =  await params;
  return (
    <div className='bg-purple-900 text-7xl text-center'>
        <h1 className="text-3xl font-bold text-amber-300">Products With Id: {p.id}</h1>
    </div>
  )
}

export default ProductsWithId
