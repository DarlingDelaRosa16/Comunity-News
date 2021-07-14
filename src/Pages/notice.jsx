import React from 'react'
import { useParams } from 'react-router-dom'
import useFetchGet from '../Hooks/useFetchGet'
import Publicity from '../Components/publicity'
import '../Styles/notice.css'
import Parse from 'html-react-parser'

const Notice = () => {

    const {id} = useParams()
    const dataBaseInfo = useFetchGet(`http://localhost:3001/detailsNews/${id}`)
    const details = dataBaseInfo.items
    
    return (
        <div id="noticeFullContainer">
            <div 
                id="noticeImg" 
                style={{ backgroundImage: `url(${details.img})` }}>
            </div>
            
            <div id="infoContainer">

                <div className="noticeInfo" >
                    <div className="mb-3"> <h3>{details.title}</h3> </div>
                    {Parse("" + details.description)}
                    <h6 id="dataNotice">{details.createdAt} <br /> {details.journalistName}</h6> 
                </div>

                <div className="noticePublicity"> 
                    <Publicity/>
                </div>

            </div>
        </div>
    );
}
 
export default Notice;