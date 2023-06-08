import data from  '../data.json'
import Products from './Products';
const {products} = data




function Main(props) {
    return (
        <div className="main">
            <Products data={props.products}  sizes={props.sizes} />
        </div>
    )
}

export default Main;