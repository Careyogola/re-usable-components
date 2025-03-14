
import React, { useState } from "react";

const Card =() =>{
    const [] = useState(null);
    const items = [
        {
            id:1,
            src:"/uefaa.webp",
            description:"The following art has been created by the art society of London",
            price: "£ 350"
        },
        {
            id: 2,
            src:"/stadium.webp",
            description:"The following art has been created by the art society of London",
            price: "£ 450"
        },
    ];
    return(
       <div className="">
        {items.map((item)=>(
            <div key={item.id}
            className="p-2 flex flex-col rounded mb-4">
                <img src={item.src}
                className="rounded object-cover" />
                <p>{item.description}</p>
                <h3>{item.price}</h3>
            </div>
        ))}
       </div>
    )
        
}

export default Card;