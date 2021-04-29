import React from 'react'
import '../Styles/footer.css'

const Footer = () => {
    return (
        <div id="containerFooter" >
            <div className="containerInfoFooter" id="containerFotterRigth">
                Hello I'm Darling De La Rosa Vanderhorst.
            </div>
            <div className="containerInfoFooter" id="containerFotterLeft">
                I want to say something to you. Very important.
                Remenber Im the best between the bests.<br/>
                <a href="https://accounts.google.com/ServiceLogin/signinchooser?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin">Ingresar como usuario</a>
            </div>
        </div>
    );
}
 
export default Footer;