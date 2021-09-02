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
                        path: "https://github.com/DarlingDelaRosa16"
                    }
                }/>
                <CardPublicities infoCard={ 
                    {
                        img:"https://i.imgur.com/suyne9B.jpg", 
                        altText:"Camisetas deportivas",
                        title:"Barcelona, Real Madrid y mas",
                        subTitle: "Compra la equipacion de tu equipo al mas barato precio",
                        path: "https://github.com/DarlingDelaRosa16"
                    }
                }/>
            </div>
        </div>
    );
}
 
export default Publicity;