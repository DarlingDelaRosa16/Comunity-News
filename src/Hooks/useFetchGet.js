import {useState, useEffect } from 'react'

const UseFetchGet = url => {

    const [dataBaseInfo, setDataBaseInfo] = useState([])

    useEffect(() => {
        const Data = async () =>{
            try{
                let infoDB = await fetch(url)
                let infoDB_Json = await infoDB.json()
                setDataBaseInfo(infoDB_Json)               
            }catch(e){
                console.log(e)
            }
        }
        Data()
    }, [url])

    return (dataBaseInfo)
}
 
export default UseFetchGet;