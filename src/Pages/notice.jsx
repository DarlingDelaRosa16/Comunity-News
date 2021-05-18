import React from 'react'
import { useParams } from 'react-router-dom'
import useFetchGet from '../Hooks/useFetchGet'
import '../Styles/notice.css'
import Publicity from '../Components/publicity'

const Notice = () => {

    const {id} = useParams()
    const dataBaseInfo = useFetchGet(`http://localhost:3000/notices/${id}`)
    
    return (
        <div id="noticeFullContainer">
            <div 
                id="noticeImg" 
                style={
                    {
                        backgroundImage: `url(${dataBaseInfo.img})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPositionY: '-200px',
                        backgroundAttachment: 'fixed'             
                    }
                }>
            
            </div>
            
            <div id="infoContainer">

                <div className="noticeInfo" >
                    <h3 className="mb-3"> {dataBaseInfo.title} </h3>
                    <p> {dataBaseInfo.description} </p>
                    <h6 id="dataNotice">{dataBaseInfo.date} <br /> {dataBaseInfo.journalistName}</h6> 
                </div>

                <div className="noticePublicity"> 
                    <Publicity/>
                </div>

            </div>
        </div>
    );
}
 
export default Notice;