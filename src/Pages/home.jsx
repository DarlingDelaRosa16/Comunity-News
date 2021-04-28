import React from 'react'
import Slider from '../Components/slider'
import Categories from '../Components/categories'
import News from '../Components/news'
import Footer from '../Components/footer'
import Publicity from '../Components/publicity'
import MenuComunities from '../Components/menuComunities'
import '../Styles/home.css'

const Home = () => {
    return (    
        <div id="fullContainer">
            <div>
            <Categories/>
            </div>
            <div id="containerInfoBackground">
                <Slider/>
                <div id="containerNews">
                <div id="containerMenu">
                    <MenuComunities/>
                </div>
                <div id="containerTopics">
                    <News/>
                </div>
                <div id="containerAside">
                    <Publicity/>
                </div>
                </div>
            </div>
            <div>
            <Footer/>
            </div>
    </div>
        
    );
}
 
export default Home;