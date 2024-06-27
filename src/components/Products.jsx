import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import  db  from '../FirebaseConfig';
import productsData from '../data/Products.json';

const Products = ({ setProducts }) => {
    useEffect(() => {
        const fetchProducts = async () => {
            const querySnapshot = await getDocs(collection(db, 'products'));
            const firebaseProducts = querySnapshot.docs.map(doc => doc.data());
            
            const combinedProducts = [...firebaseProducts, ...productsData];

            setProducts(combinedProducts);
        };

        fetchProducts();
    }, [setProducts]);

    return (
        <div>
            { }
        </div>
    );
};

export default Products;
