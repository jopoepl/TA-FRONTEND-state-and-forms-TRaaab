
import React from 'react';
import Product from './Product';
import OrderBy from './OrderBy';



class Products extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedOrder: '',
            selectedSize: '',
        }
    }

    handleOrderSort = (order, products) => {
        let sortedProducts = [...products];
        if(order === 'highest'){
            sortedProducts = sortedProducts.sort((a,b)=> b.price - a.price)
        }
        if(order === 'lowest'){
             sortedProducts = sortedProducts.sort((a,b)=> a.price - b.price)
         }
        return sortedProducts   
    }



    handleOrderBy = (event) => {
        this.setState({selectedOrder: event.target.value})
    }
    
    render() {
        let {  selectedOrder } = this.state

        let products = this.handleOrderSort(selectedOrder, this.props.data).filter(product => {
            console.log(this.props.sizes, "SIZES")
            if(this.props.sizes.length !== 0){
                console.log("EMPTY ARRAY SIZES")
                return this.props.sizes.some(size => product.availableSizes.includes(size));
                
            } else{
                return true
                

            }

            
        })

        return (
             <div className='padding'>
                <p className='bold'>
                    {`${this.props.data.length} Product${this.props.data.length > 1 ? 's' : ''} found.`}{' '}
                </p>
                <OrderBy selectedOrder={ selectedOrder } handleOrderBy={this.handleOrderBy}/>
                <div className='flex wrap'>
                    {products.map(product => {
                        return <Product key={product.id} {...product}/>
                    })}
                    {console.log("else invoked")}
                </div>
             </div>
        )
    }
}

export default Products;