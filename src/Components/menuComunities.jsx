import React, {useContext} from 'react'
import CategoryContext  from '../Contexs/categoryContext'
import '../Styles/menuComunities.css'
import useFetchGet from '../Hooks/useFetchGet'

const MenuComunities = () => { 

    const user = useContext(CategoryContext)
    console.log(user)

    const dataBaseInfo = useFetchGet(`http://localhost:3000/Comunities`)
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