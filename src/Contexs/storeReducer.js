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
    switch(action.type){
        case types.categoryChange:
            return{
                categoryCustomButton: action.changedCategory
            }
        default:
            return state
    }
}
export {initialStore, types}
export default StoreReducer;