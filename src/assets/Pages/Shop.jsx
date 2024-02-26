import data from '../data.json'
import Products from './Products'
const Shop = () => {
    const product = data.productinfo
    return (
    <div className='flex flex-col items-center justify-center' >
        {product.map(prod => <Products key={prod.id} {...prod}/> )}
    </div>
    )
} 

export default Shop
