import React, {useContext} from 'react'
import CategoryContext  from '../Contexs/categoryContext'
import '../Styles/menuComunities.css'
import useFetchGet from '../Hooks/useFetchGet'

const MenuComunities = () => { 

    const [state, dispatch] = useContext(CategoryContext)

    const dataBaseInfo = useFetchGet(`http://localhost:3000/Comunities?categoryId=${state.categoryCustomButton.categoryId}`)
   
    return (
        <div id="containerMenuComunities">
            {
                dataBaseInfo.map(item => (
                    <button key={item.id} className="btn btn-dark col-auto" >
                        {item.name}
                    </button>
                ))
            }
        </div>
    );
}
 
export default MenuComunities;