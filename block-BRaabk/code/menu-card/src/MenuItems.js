import React from 'react'
import Data from './data.json'

class MenuItems extends React.Component {
    constructor(props){
        super();
        this.state = {
            category: "All"
        }
        
    }

    render(){
        let foodCategories = Array.from(new Set(Data.map((food) => food.category)));//filtering unique categories using set and converting to array
        foodCategories.unshift("All")
        console.log("state", this.state)

        function ItemCard(props){
            return (
                <div className='item-card'>
                    <img src={props.url}></img>
                    <div className='item-text'>
                        <div className='item-title'>
                            <h3>{props.title}</h3>
                            <span>{props.cost}</span>
                        </div>
                        <p>{props.description}</p>
                    </div>
                </div>
            )


        }


        return (
    <>
        <ul className='categories'>
        
       { foodCategories.map((category) => 
            <li onClick={() => this.setState({category: category})} className='category'>{category}</li>
        )}
        </ul>
        <ul className='selected-items'>
            {Data.filter(foodItem =>  this.state.category === "All" ? true : foodItem.category === this.state.category).map((foodItem) => {
                return (<li className='item'>
                    <ItemCard
                    url = {process.env.PUBLIC_URL + 'logo512.png'}
                    title= {foodItem.title}
                    cost = {foodItem.price}
                    description = {foodItem.desc}
                    />
                </li>)
            })}


        </ul>
    </>
            
        )
    }
}

export default MenuItems;