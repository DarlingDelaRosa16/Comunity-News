const types = {
    categoryChange : "category - Change"
}

const initialStore = {
    categoryCustomButton:{
        categoryId: 1,
        categoryName: 'VideoJuego'
    }
}

const StoreReducer = (state, action) => {
    if (action.type === types.categoryChange) {
        return{
            categoryCustomButton: action.changedCategory
        }
    }else{
        return state
    }
}
export {initialStore, types}
export default StoreReducer;