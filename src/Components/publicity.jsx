import React from 'react';
import CardPublicities from './cardPublicities'

const Publicity = () => {   

    return (
        <div>
            <div>
                <CardPublicities infoCard={ 
                    {
                        img: "https://i.imgur.com/LPxjRQr.jpg", 
                        altText: "Accesorios para gamers",
                        title: "Alfonbrillas, mouse y mas",
                        subTitle: "Compra los mejores Accesorios para tu pc",
                        path: "https://www.corotos.com.do/listings/combo-mouse-mas-alfombrilla-teclado-y-mouse-01f3m09s7xgjy79y0hnp4wfvjb?page=15&render_time=2021-05-17T21%3A20%3A22.966741-04%3A00&search=alfombrillas"
                    }
                }/>
                <CardPublicities infoCard={ 
                    {
                        img:"https://i.imgur.com/suyne9B.jpg", 
                        altText:"Camisetas deportivas",
                        title:"Barcelona, Real Madrid y mas",
                        subTitle: "Compra la equipacion de tu equipo al mas barato precio",
                        path: "https://www.corotos.com.do/listings/zapatillas-de-futbol-sala-nike-mercurial-del-nike-factory-size-9-5-01f5nfajdsav7t9vnmak84gcze?page=10&render_time=2021-05-17T21%3A18%3A23.845932-04%3A00&search=futbol"
                    }
                }/>
            </div>
        </div>
    );
}
 
export default Publicity;