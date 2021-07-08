import React from 'react'
import { useParams } from 'react-router-dom'
import useFetchGet from '../Hooks/useFetchGet'
import Publicity from '../Components/publicity'
import '../Styles/notice.css'
import Parse from 'html-react-parser'

const Notice = () => {

    const {id} = useParams()
    const dataBaseInfo = useFetchGet(`http://localhost:3000/comunityNews/${id}`)
    console.log(id)
    return (
        <div id="noticeFullContainer">
            <div 
                id="noticeImg" 
                style={{ backgroundImage: `url(${dataBaseInfo.img})` }}>
            </div>
            
            <div id="infoContainer">

                <div className="noticeInfo" >
                    <div className="mb-3"> <h3>{dataBaseInfo.title}</h3> </div>
                    {Parse("" + dataBaseInfo.description)}
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