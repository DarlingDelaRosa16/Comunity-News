import React, {useState} from 'react'
import useFetchGet from '../Hooks/useFetchGet'
import { Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../Styles/categories.css'
import { CategoryProvider } from '../Contexs/categoryContext'
//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
//import {faGamepad, faJournalWhills, faFutbol} from '@fortawesome/free-solid-svg-icons'

const Categories = () => {

    const dataBaseInfo = useFetchGet(`http://localhost:3000/Category`);
    const [categoryCotextId, setCategoryCotextId] = useState(1)
    
    return (
        <div className="containerSections">
            {
                dataBaseInfo.map(item => (
                    <Button onClick={()=>{setCategoryCotextId(item.id)}} key={item.id} className="btnAnimation" color="dark"> {item.name} </Button>
                )) 
            }

        </div>
    );
}
export default Categories;

/*<FontAwesomeIcon icon={faGamepad} />{' '}*/
