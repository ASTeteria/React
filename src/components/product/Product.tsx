
import React, {FC} from 'react';
import {IProductModel} from "../models/IProductModel";

type TypeProps = { item: IProductModel }

const Product: FC<TypeProps> = ({item}) => {
    return (
        <div>
            <h4>id: {item.id}</h4>
            <h3>{item.title}</h3>
            <p>description: {item.description}</p>
            <p>category: {item.category}</p>
            <p>price: {item.price}</p>
            <p>discountPercentage: {item.discountPercentage}</p>
            <p>rating: {item.rating}</p>
            <p>stock: {item.stock}</p>
            <p>tags: {item.tags}</p>
            <p>brand: {item.brand}</p>
            <p>sku: {item.sku}</p>
            <p>weight: {item.weight}</p>
            <p>warrantyInformation: {item.warrantyInformation}</p>
            <p>shippingInformation: {item.shippingInformation}</p>
            <p>availabilityStatus: {item.availabilityStatus}</p>
        <img src={item.thumbnail} alt={item.title}/>
    </div>
);
};

export default Product;
