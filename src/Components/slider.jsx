import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import '../Styles/slider.css'

const items = [
  {
    src: 'https://i.imgur.com/xRC6Spm.jpg',
    altText: "Xbox's control",
    caption: "The magic of the game",
    title: "Xbox say 'The xbox one will be finished on may 23th'"
  },
  {
    src: 'https://i.imgur.com/bHKi5Sj.jpg',
    altText: "Xbox's Control",
    caption: 'The best console?',
    title: "Xbox and his console can be the best"
  },
  {
    src: 'https://i.imgur.com/g7ANxbq.jpg',
    altText: 'Men whit inmersion glases',
    caption: 'The new gamer glases are here',
    title: "The best of the best"
  }
];

const Slider = () => {
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

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} width="98%" height="300px" className="mt-2 mx-2 rounded"/>
        <CarouselCaption className="TextInSlider" captionText={item.title} captionHeader={item.caption} />
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