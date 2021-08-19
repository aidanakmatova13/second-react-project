import React, {useState} from "react";
import dishes from "./dishes";


const Catalog = () =>{
    const [products, setProducts] = useState(dishes)
    return(
    <div className='row'>
        {
            products.map(item => (
                (
                    <div className='col-3'>
                        <img src={item.img}/>
                        <div className='content'>
                        <div className='diflex'>
                            <h3>{item.title}</h3>
                            <div>{item.price}</div>
                        </div>
                        <p>{item.desc}</p>
                        <span>Rating: {item.rating}</span>
                        </div>
                    </div>
                )
                )
            )
        }
    </div>
    )
}
export default Catalog;
