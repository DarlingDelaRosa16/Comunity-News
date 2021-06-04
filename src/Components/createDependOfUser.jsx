import {React, useContext} from 'react'
import CategoryContext from '../Contexs/categoryContext'
import NewNotice from './newNotice'
import CreateNewCategory from './createNewCategory'
import CreateNewUser from './createNewUser'
import CreateNewComunity from './createNewComunity'

const CreateDependOfUser = () => {

    const [state, /*dispatch*/] = useContext(CategoryContext) 

    if(state.logInUser.id === 1){
        return ( 
            <div>
                <CreateNewCategory/>
                <hr />
                <CreateNewUser/> 
                <hr/>
                <CreateNewComunity/>   
            </div>
        )
    }else{
        return ( 
            <NewNotice/>
        )
    };
}
 
export default CreateDependOfUser;