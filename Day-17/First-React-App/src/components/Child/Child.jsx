export default function Child({productDetails}) {
    let {prodName, price, quantity, onSale} = productDetails

    return (
        <>
            <h1>Child</h1>
            <h3>Product Details</h3>
            <h4>Product Name: {prodName}</h4>
            <h4>Product Price: {price}</h4>
            <h4>Product Count: {quantity}</h4>
            <h4>Product Sale: {onSale == true ? `50%`: `Original price`}</h4>
        </>
    )
}