import React from 'react'
import { Card, CardBody, CardTitle, CardText } from 'reactstrap'
import '../Styles/news.css'
import useFetchGet from '../Hooks/useFetchGet'

const News = () => {

  const dataBaseInfo = useFetchGet(`http://localhost:3000/notices`)

  return ( 
    <div className="m-1" >
      {
        dataBaseInfo.map(item => (
          
          <Card className="cardNews" key={item.id}>
            <CardBody className="row">
                <img width="20%" height="100px" className="col-md-4 " src="http://via.placeholder.com/200x100" alt="Card cap" />
                <div className="col-md-8">
                <CardTitle tag="h5">Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                </div>
            </CardBody> 
          </Card>
          
        ))
      }
    </div>
  );
}
 
export default News;