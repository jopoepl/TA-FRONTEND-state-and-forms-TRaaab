
function OrderBy(props){
    return (
        <div>
        <p className="margin bold">Order By</p>
        <select value={props.selectedOrder} onChange={props.handleOrderBy}>
            <option value =''>Select</option>
            <option value ='lowest'>Lowest to Highest</option>
            <option value ='highest'>Highest to Lowest</option>
        </select>
        </div>
    )
}

export default OrderBy;