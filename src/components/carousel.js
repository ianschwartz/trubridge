import React, { Component } from 'react';
import starbucks1 from '../images/starbucks1.jpg';
import starbucks2 from '../images/starbucks2.jpg';
import guys from '../images/guys.jpg';
import {goldColor} from "../services/colors.service";
import CarouselControl from "./carousel-control";

const time = 2000;
class MyCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
      imageClass: '',
      playing: true,
    }
  }

  componentDidMount() {
    this.startTimer();
  }
/*
  componentDidUpdate() {
    this.stopTimer();
    this.startTimer();
  };
  */
  stopTimer = () => {
    if (!this.state.playing && this.timer) {
      console.log('hi');
      clearInterval(this.timer);
    }
  }
  startTimer = () => {
    if (this.state.playing && !this.timer) {
      this.timer = setInterval(this.nextSlide, time);
    }
  };
  nextSlide = () => {
    this.setState({
      activeSlide: this.state.activeSlide + 1,
    }, this.fadeOutImage)
  };

  clickBack = () => {
    this.stopTimer();
    this.setState({
      activeSlide: this.state.activeSlide - 1,
    });
  };
  clickForward = () => {
    this.stopTimer();
    this.setState({
      activeSlide: this.state.activeSlide + 1,
    });
  };

  render() {
    const slideStyle = {
      fontSize: 40,
    };
    const slides = [
      {
        image: starbucks1,
        copy: <div style={{
          height: '100%',
          width: '100%',
          padding: '0 20px 0 20px',
          borderBottom: '1px solid black',
        }}><h2 style={slideStyle}><i>Investors don't fund products.</i></h2></div>
      },
      {
        image: starbucks2,
        copy: <div style={{
          height: '100%',
          width: '100%',
          padding: '0 20px 0 20px',
          borderBottom: '1px solid black',
        }}><h2 style={slideStyle}><i>They fund companies.</i></h2></div>
      },
      {
        image: guys,
        copy: <div style={{
          height: '100%',
          width: '100%',
          background: goldColor,
          padding: '0 20px 0 20px'
        }}><h2 style={slideStyle}><i>And the people who lead them</i></h2></div>
      },
    ];
    const activeSlide = slides[this.state.activeSlide % 3];
    const style = {
      padding: '30px 10% 30px 10%',
      backgroundImage: `url(${activeSlide.image})`,
      backgroundSize: 'auto 100%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      maxWidth: '100%',
      height: 600,
      position: 'relative',
    }
    return (<div style={style}>
      <div style={{
        margin: '0 15% 0 15%',
        height: 600,
        display: 'flex',
      }}>
        <div style={{
          alignSelf: 'center',
          textAlign: 'center',
          color: 'white',
          textTransform: 'uppercase',
          margin: '1px 10% 1px 4%',
          minHeight: 30,
        }} className='fadeImage'>
          {activeSlide.copy}
        </div>
      </div>
    </div>)
  }
}


export default MyCarousel;
