import React from 'react'

class Sidebar extends React.Component{
    constructor(props){
        super(props);

    }

    
    
    handleSizes = () => {
        let products = this.props.products
        console.log(this.props, "propss")
        let { selectedSizes } = this.props.sizes
        let productsBySize = [...products];
        productsBySize = productsBySize.filter((product) => {
            return product.availableSizes.includes(selectedSizes);
        })
        console.log(productsBySize, "SIZED PRODUCTS")
        return productsBySize;
    }

   

    render() {
     
        let sizes = this.props.products.reduce((acc, cv) => {
            acc = acc.concat(cv.availableSizes)
            return acc;
        }, [])
        let uniqueSizes = new Set(sizes)
        console.log(uniqueSizes);
        return (
            <aside>
                <div className="size-cont center flex wrap">
                    {Array.from(uniqueSizes).map((size, index) => {
                        return <span key={index} className={`size ${this.props.sizes.includes(size) ? 'active' : ''}`} onClick={this.props.handleSizesBy}>{size}</span>
                    })}
                </div>
            </aside>
        )
    }
}


export default Sidebar;
