import React, { createContext, useReducer } from 'react'
import StoreReducer, { initialStore } from './storeReducer';

const CategoryContext = createContext();  

const CategoryProvider = ( {children} ) => {
    const [state, dispatch] = useReducer(StoreReducer, initialStore)
    return (
        <CategoryContext.Provider value={[state, dispatch]}>
            {children}
        </CategoryContext.Provider>
    );
}
export {CategoryProvider};
export default CategoryContext;  