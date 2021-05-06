import React from 'react'
import '../Styles/menuComunities.css'
import useFetchGet from '../Hooks/useFetchGet'

const MenuComunities = () => {

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