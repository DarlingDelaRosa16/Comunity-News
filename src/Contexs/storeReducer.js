const types = {
    categoryChange : "category - Change",
    comunityChange : "comunity - Change"
}

const initialStore = {
    categoryCustomButton:{
        categoryId: 1
    },
    comunityCustomButton:{
        comunityId: null
    }
}

const StoreReducer = (state, action) => {
    switch(action.type){
        case types.categoryChange:
            return {
                ...state,
                categoryCustomButton: action.changedCategory
            }
        case types.comunityChange:
            return {
                ...state,
                comunityCustomButton: action.changedComunity
            }
        default:
            return state
    }
    
}
export {initialStore, types}
export default StoreReducer;