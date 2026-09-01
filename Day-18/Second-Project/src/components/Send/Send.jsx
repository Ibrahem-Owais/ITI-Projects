import { useState } from 'react';
import Recieve from '../Recieve/Recieve';

export default function Send() {
    let prodArray = [
        { id: 1, prodName: 'Samsung', desc: 'Samsung Mobile Phone', price: 3000, quantity: 0, onSale: false },
        { id: 2, prodName: 'Oppo', desc: 'Oppo Mobile Phone', price: 5000, quantity: 0, onSale: false },
        { id: 3, prodName: 'TV', desc: 'Smart TV', price: 15000, quantity: 0, onSale: true },
        { id: 4, prodName: 'PC', desc: 'HighEnd PC', price: 12000, quantity: 0, onSale: true },
        { id: 5, prodName: 'Camera', desc: 'DSLR Camera', price: 10000, quantity: 0, onSale: false },
        { id: 6, prodName: 'iPad', desc: 'Apple iPad', price: 15000, quantity: 0, onSale: true },
        { id: 7, prodName: 'Tab', desc: 'Android Tab', price: 4000, quantity: 0, onSale: false }
    ];

    let [products, setProducts] = useState(prodArray);

    // دالة الحذف
    function deleteProduct(id) {
        let updatedProducts = products.filter(product => product.id !== id);
        setProducts(updatedProducts);
    }

    // دالة التعديل (زيادة الـ Count مع كل ضغطة)
    function updateProduct(index) {
        let updatedProducts = [...products];
        updatedProducts[index].quantity += 1;
        setProducts(updatedProducts);
    }

    return (
        <div className="container bg-success p-4 mt-5 rounded-4">
            <div className="row g-4">
                {products.map((product, index) => (
                    <Recieve
                        key={product.id}
                        index={index}
                        productDetails={product}
                        deleteProduct={deleteProduct}
                        updateProduct={updateProduct}
                    />
                ))}
            </div>
        </div>
    );
}