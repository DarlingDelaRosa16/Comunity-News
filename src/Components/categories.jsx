import React, {useContext} from 'react'
import useFetchGet from '../Hooks/useFetchGet'
import { Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../Styles/categories.css'
import CategoryContext from '../Contexs/categoryContext'
import { types } from '../Contexs/storeReducer'
//import { CategoryProvider } from '../Contexs/categoryContext'
//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
//import {faGamepad, faJournalWhills, faFutbol} from '@fortawesome/free-solid-svg-icons'

const Categories = () => {
    const dataBaseInfo = useFetchGet(`http://localhost:3000/Category`);
    
    const [state, dispatch] = useContext(CategoryContext)  
    
    return (
        <div className="containerSections">
            {
                dataBaseInfo.map(item => (
                    <Button 
                        onClick={()=> dispatch(
                            {
                                type: types.categoryChange, 
                                changedCategory: { categoryId: item.id, categoryName: item.name}
                            }, dispatch({
                                type: types.comunityChange,
                                changedComunity: { comunityId: null, comunityName: null}
                            })

                        )} 
                        key={item.id} className="btnAnimation"> {item.name}
                    </Button>
                )) 
            }

        </div>
    );
}
export default Categories;

/*<FontAwesomeIcon icon={faGamepad} />{' '}*/
