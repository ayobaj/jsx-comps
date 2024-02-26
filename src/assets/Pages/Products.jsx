

const Products = ({id, name, Price, description, image}) => {
    return (
        <div className="flex flex-col w-[200px] items-center text-white gap-3 mb-8 mt-5 ">
            <img src={image} className="product image w-[100px] h--[70px] mt-4"></img>
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#EB568E] from-30%  to-[#1447E3]">{name}</h1>
            <h4 className="font-thin text-center">{description}</h4>
            <h5 className="font-bold">{Price}</h5>
        </div>
    )
}

export default Products
