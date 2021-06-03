import React, {useContext} from 'react'
import CategoryContext  from '../Contexs/categoryContext'
import '../Styles/menuComunities.css'
import { Button } from 'reactstrap'
import useFetchGet from '../Hooks/useFetchGet'
import { types } from '../Contexs/storeReducer'

const MenuComunities = () => { 

    const [state, dispatch] = useContext(CategoryContext)
    const dataBaseInfo = useFetchGet(`http://localhost:3000/Comunities?categoryId=${state.categoryCustomButton.categoryId}`)
   
    return (
        <div id="containerMenuComunities">
            {
                dataBaseInfo.map(item => (
                    <Button 
                        onClick={()=> dispatch({
                            type: types.comunityChange,
                            changedComunity: { comunityId: item.id, comunityName: item.name}
                        })}
                        key={item.id} className="btn btn-dark col-auto" 
                    >
                        {item.name}
                    </Button>
                ))
            }
        </div>
    );
}
 
export default MenuComunities;