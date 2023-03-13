import './App.css';

function ShippingInfo(props){
    return (
        <form className="form-cont">
            <h2>{props.title}</h2>
            <div className={props.checkbox}>
            <input onChange={props.copyDetails} disabled={props.disabled} id="sameship" type="checkbox" />
            <label htmlFor="sameship">Shipping Add same as Billing Add</label>
            </div>
            <label htmlFor="address">Address</label>
            <input className={props.classForAdd} onChange= {props.onChange} value={props.address}  id="address" type="text" />
            <span>{props.errorMsg}</span>
            <label htmlFor="zip">ZIP/ Postal Code</label>
            <input  onChange= {props.onChange} value={props.zip} id="zip" type="number" />
            <label htmlFor="city">City</label>
            <input  onChange= {props.onChange} value={props.city} id="city" type="text" />
            <label htmlFor="country">Country</label>
            <input  onChange= {props.onChange} value={props.country} id="country" type="text" />
        </form>
    )
}

export default ShippingInfo;