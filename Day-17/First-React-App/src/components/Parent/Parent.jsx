import { useState } from "react"
import Child from "../Child/Child"

export default function Parent() {
    let [userName, setUserName] = useState(`Ibrahim`)
    let [product, setProduct] = useState({
        id:1,
        prodName: `Samsung`,
        price: 3000,
        quantity: 200,
        onSale: true
    })

    return (
        <>
            <h1>Parent</h1>
            <h3>User Name: {userName}</h3>
            <Child userName={userName} productDetails={product}/>
        </>
    )
}