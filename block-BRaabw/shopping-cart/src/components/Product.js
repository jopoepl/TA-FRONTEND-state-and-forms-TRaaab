

function Product(props){
    return (
        <div className="padding">
            <img className="image" src={`/products/${props.sku}_1.jpg`}></img>
            <h2>{props.title}</h2>
            <div className="line"></div>
            <h3>{props.currencyId + props.price}</h3>
            <button>Add to Cart</button>
        </div>
    )
}

export default Product;