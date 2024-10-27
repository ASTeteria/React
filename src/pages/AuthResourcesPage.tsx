import React, {useEffect, useState} from 'react';
import {loadAuthProducts, refresh} from "../services/api.service";
import {IProduct} from "../models/IProduct";

const AuthResourcesPage = () => {
    const[products,setProducts] = useState<IProduct[]>([]);
    useEffect(()=>{
       loadAuthProducts()
           .then(products=>{
           if (products) {
               // setProducts(products);
               setProducts(prevState => products);

           }
       })
           .catch(error => {refresh()
               .then(value => value)
               .then(value => loadAuthProducts())});
       //  loadAuthProducts().then(setProducts)- якщо немає андефаінд
    },[])

    return (
        <div>

            <h2>Products</h2>
            {products.map(product => {
                return (
                    <div key={product.id}>
                        <p><strong>id:</strong> {product.id}</p>
                        <p><strong>title:</strong> {product.title}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default AuthResourcesPage;