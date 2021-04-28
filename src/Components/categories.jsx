import React from 'react'
import { Button } from 'reactstrap'
import '../Styles/categories.css'

const Categories = () => {
    return (
        <div id="containerSections">
            <Button color="dark">Video Juegos</Button>{'  '}
            <Button color="dark"> Animes</Button>
        </div>
     );
}
 
export default Categories;