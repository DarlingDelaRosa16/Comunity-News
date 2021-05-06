import React, { createContext, useState } from 'react'

const CategoryContext = createContext();  

const CategoryProvider = ( {children} ) => {
    const user = 2
    return (
        <CategoryContext.Provider value={user}>
            {children}
        </CategoryContext.Provider>
    );
}
export {CategoryProvider};
export default CategoryContext;  
/*

*/
//export {CategoryProvider} ;
//const data = cookies.get('categoryContextId')