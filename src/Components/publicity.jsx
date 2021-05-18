import React from 'react';
import useFetchGet from '../Hooks/useFetchGet';
import CardPublicities from './cardPublicities'

const Publicity = () => {

    const dataBaseInfo = useFetchGet(`http://localhost:3000/publicities`)

    return (
        <div>
            {
                dataBaseInfo.map(item => (
                    <div key={item.id}>
                    <CardPublicities infoCard={ 
                        {
                           img: item.img, 
                           altText: item.altText,
                           title: item.title,
                           subTitle: item.subTitle,
                           path: item.path
                        }
                    }/>
                    </div>
                ))
            }
            
        </div>
    );
}
 
export default Publicity;