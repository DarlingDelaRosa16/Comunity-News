import React, { useContext } from 'react'
import { Card, CardBody, CardTitle } from 'reactstrap'
import '../Styles/news.css'
import useFetchGet from '../Hooks/useFetchGet'
import CategoryContext from '../Contexs/categoryContext'
import { Link } from 'react-router-dom'
import Modal from './modal'
import Parse from 'html-react-parser'

const News = () => {

  const [state, /*dispatch*/] = useContext(CategoryContext)

  var urlRequest = '';
  if(state.comunityCustomButton.comunityId === null){
    urlRequest = `http://localhost:3001/categoryNews/${state.categoryCustomButton.categoryId}`
  }else{
    urlRequest = `http://localhost:3001/comunityNews/${state.comunityCustomButton.comunityId}`
  }

  const dataBaseInfo = useFetchGet(urlRequest)
  var dataFromDB = []
  if (dataBaseInfo.items !== undefined) dataFromDB = [...dataBaseInfo.items.docs]
 
  return ( 
    <div>
      {
        dataFromDB.map(item => (
          <Link 
            to={`/notice/${item._id}`} 
            key={item._id}
            style={{textDecoration: 'none', color: 'black'}}
          >
            <Card className="cardNews" >
              <CardBody className="row m-0">
                  <img
                    style={{objectFit: 'cover'}}
                    width="20%" 
                    height="150px"
                    className="col-md-4 imgNews"
                    src={item.img} alt="Card cap"
                  />
                  <div className="col-md-8 littleDescription">
                    <CardTitle tag="h5">{item.title}</CardTitle>
                    <div >{Parse(item.description.substring(0, 145)+ "...")}</div>
                  </div>
              </CardBody> 
            </Card>
          </Link>
        ))
      }
      <div id="contentButtonModal" >
        <Modal/>
      </div>
    </div>
  );
}
 
export default News;