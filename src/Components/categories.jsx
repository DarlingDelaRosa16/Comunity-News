import React from 'react'
import { Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/categories.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGamepad, faJournalWhills} from '@fortawesome/free-solid-svg-icons'

const Categories = () => {
    return (
        <div className="containerSections">
            <Button className="btnAnimation" color="dark"><FontAwesomeIcon icon={faGamepad} /> Video Juegos </Button>{'  '}
            <Button className="btnAnimation" color="dark"><FontAwesomeIcon icon={faJournalWhills} /> Animes</Button>
        </div>
     );
}
 
export default Categories;