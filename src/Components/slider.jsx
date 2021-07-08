import React, { useContext, useState } from 'react'
import useFetchGet from '../Hooks/useFetchGet'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import '../Styles/slider.css'
import CategoryContext from '../Contexs/categoryContext';

const Slider = () => {
  const [state, /*dispatch*/] = useContext(CategoryContext)  

  const dataBaseInfo = useFetchGet(`http://localhost:3001/categoryNews/${state.categoryCustomButton.categoryId}`)

  var dataFromDB = []
  if (dataBaseInfo.items !== undefined) dataFromDB = [...dataBaseInfo.items.docs]
  const items = dataFromDB

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const styleImg = {
    objectFit: 'cover'
  }
  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.id}
      >
        <img id="imgSider" src={item.img}  style={styleImg} alt={item.altText} width="100%" height="300px" className=" rounded"/>
        <CarouselCaption className="TextInSlider" captionText={item.caption} captionHeader={item.title} />
      </CarouselItem>
    );
  });

  return (
        <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl id="fg" direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
  );
}

export default Slider;