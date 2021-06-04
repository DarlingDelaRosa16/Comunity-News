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
    urlRequest = `http://localhost:3000/notices?categoryId=${state.categoryCustomButton.categoryId}`
  }else{
    urlRequest = `http://localhost:3000/notices?comunityId=${state.comunityCustomButton.comunityId}`
  }

  const dataBaseInfo = useFetchGet(urlRequest)

  return ( 
    <div>
      {
        dataBaseInfo.map(item => (
          <Link 
            to={`/notice/${item.id}`} 
            key={item.id}
            style={{textDecoration: 'none', color: 'black'}}
          >
            <Card className="cardNews" >
              <CardBody className="row">
                  <img
                    style={{objectFit: 'cover'}}
                    width="20%" 
                    height="150px"
                    className="col-md-4 "
                    src={item.img} alt="Card cap"
                  />
                  <div className="col-md-8">
                    <CardTitle tag="h5">{item.title}</CardTitle>
                    <div>{Parse(item.description.substring(0, 145))}...</div>
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