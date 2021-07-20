const types = {
    categoryChange : "category - Change",
    comunityChange : "comunity - Change",
    startSession: "session - Start",
    comfirmButtonModalLogin: "comfirm - data"
}

const initialStore = {
    categoryCustomButton:{
        categoryId: "",
        categoryName: ""
    },
    comunityCustomButton:{
        comunityId: null,
        comunityName: null
    },
    logInUser:{
        id: null,
        user: null,
        name: null,
        last_name: null,
        role: null
    },
    IsloginValidated:{
        isLogIn: false
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
        case types.startSession:
            return{
                ...state,
                logInUser: action.enteringTheSession
            }
        case types.comfirmButtonModalLogin:
            return{
                ...state,
                IsloginValidated: action.confirmatedLogIn
            }
        default:
            return state
    }
}

export {initialStore, types}
export default StoreReducer;