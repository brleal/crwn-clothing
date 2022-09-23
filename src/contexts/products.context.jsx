import {createContext, useState, useEffect} from 'react';

import {addCollectionAndDocuments, getCategoriesAndDocuments} from '../utils/firebase/firebase.utils';

/*import SHOP_DATA from '../shop-data.js';*/

export const ProductsContext = createContext({
    products: []
});

export const ProductsProvider = ({children}) => {

    const [products, setProducts] = useState([]);

    /*
       //só usado uma vez para popular a base firebase
       useEffect(() => {
            addCollectionAndDocuments('categories', SHOP_DATA);
        }, []);*/


    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            console.log(categoryMap);
        };

        getCategoriesMap();
    }, []);

    const value = {products};

    return (
        <ProductsContext.Provider value={value}> {children}</ProductsContext.Provider>
    )
}