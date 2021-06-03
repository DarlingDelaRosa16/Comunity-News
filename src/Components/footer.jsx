import React from 'react'
import '../Styles/footer.css'

const Footer = () => {
    return (
        <div id="containerFooter" >
            <div className="containerInfoFooter" id="containerFotterRigth">
                Conoce nuestro trabajo en nuestro Instagram <b>@webdeveloment</b> y contactanos a nuestro email 
                <b>Whatever@gmail.com</b> para la creaciones de aplicaciones web.
                <br/><br/>
                Quieres entrar a la comunidad de periodistas trabajando en nuestra pagina web
                envianos tu CV a nuestro correo electronico <b>something@gmail.com</b> 
            </div>
            <div className="containerInfoFooter" id="containerFotterLeft">
                Si ya perteneces  nuestro equipo de periodistas inicia sesion con el correo correspondiente
                y cuentanos a la comunidad que has enccontrado.
                <br/>
            </div>
            
        </div>
    );
}
 
export default Footer;