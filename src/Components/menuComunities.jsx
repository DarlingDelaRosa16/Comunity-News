import React, {useContext} from 'react'
import CategoryContext  from '../Contexs/categoryContext'
import '../Styles/menuComunities.css'
import { Button } from 'reactstrap'
import useFetchGet from '../Hooks/useFetchGet'
import { types } from '../Contexs/storeReducer'

const MenuComunities = () => { 

    const [state, dispatch] = useContext(CategoryContext)
    const dataBaseInfo = useFetchGet(`http://localhost:3001/especificComunity/${state.categoryCustomButton.categoryId}`)
    //console.log(state.categoryCustomButton.categoryId)
    console.log(dataBaseInfo)
    var dataFromDB = []
    if (dataBaseInfo.items !== undefined) dataFromDB = [...dataBaseInfo.items]
    console.log(dataFromDB)
    //http://localhost:3000/Comunities?categoryId=${state.categoryCustomButton.categoryId}
    
    return (
        <div id="containerMenuComunities">
            {
                dataFromDB.map(item => (
                    <Button 
                        onClick={()=> dispatch({
                            type: types.comunityChange,
                            changedComunity: { comunityId: item._id, comunityName: item.comunityName}
                        })}
                        key={item._id} className="btn btn-dark col-auto" 
                    >
                        {item.comunityName}
                    </Button>
                ))
            }
        </div>
    );
}
 
export default MenuComunities;