import React, {useState} from "react";
import dishes from "./dishes";
import data from "./data";

const Users =() =>{
    const [user, setProducts] = useState(data)
    return (
        <div>
            {
                user.map(el =>(
                    <div key={el.id}>
                        <div>Name:{el.name}</div>
                        <div>email:{el.email}</div>
                    </div>
                ))
            }
        </div>
    )
}
export default Users;