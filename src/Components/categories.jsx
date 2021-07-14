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

    const dataBaseInfo = useFetchGet(`http://localhost:3001/category`);

    var dataFromDB = []
    if (dataBaseInfo.items !== undefined) dataFromDB = [...dataBaseInfo.items]
    
    const [/*state*/, dispatch] = useContext(CategoryContext)  
    
    return (
        <div className="containerSections">
            {
                dataFromDB.map(item => (
                    <Button 
                        onClick={()=> dispatch(
                            {
                                type: types.categoryChange, 
                                changedCategory: { categoryId: item._id, categoryName: item.categoryName}
                            }, dispatch({
                                type: types.comunityChange,
                                changedComunity: { comunityId: null, comunityName: null}
                            })

                        )} 
                        key={item.id} className="btnAnimation"> {item.categoryName}
                    </Button>
                )) 
            }

        </div>
    );
}
export default Categories;

/*<FontAwesomeIcon icon={faGamepad} />{' '}*/
