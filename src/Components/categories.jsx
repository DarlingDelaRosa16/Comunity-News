import React, {useContext} from 'react'
import useFetchGet from '../Hooks/useFetchGet'
import { Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../Styles/categories.css'
import CategoryContext from '../Contexs/categoryContext'
import { types } from '../Contexs/storeReducer'

const Categories = () => {

    const dataBaseInfo = useFetchGet(`https://comunity-news.herokuapp.com/category`);

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
                        key={item._id} className="btnAnimation"> {item.categoryName}
                    </Button>
                )) 
            }

        </div>
    );
}
export default Categories;
