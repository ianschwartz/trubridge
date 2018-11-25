import React, { Component } from 'react';
import starbucks1 from '../images/starbucks1.jpg';
import starbucks2 from '../images/starbucks2.jpg';
import guys from '../images/guys.jpg';
import {goldColor} from "../services/colors.service";

class MyCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
    }
  }

  componentDidMount() {
    this.timer = setInterval(this.nextSlide, 5000);
  }
  nextSlide = () => {
    this.setState({
      activeSlide: this.state.activeSlide + 1,
    })
  };

  render() {
    const slides = [
      {
        image: starbucks1,
        copy: (<div style={{
          color: 'white',
          textTransform: 'uppercase',
          display: 'flex',
          alignItems: 'stretch',
          height: '100%',
        }}>
          <div><i>Investors don't fund products.</i></div>
        </div>)
      },
      {
        image: starbucks2,
        copy: (<div>hello</div>)
      },
      {
        image: guys,
        copy: (<div>hello</div>)
      },
    ];
    const activeSlide = slides[this.state.activeSlide % 3];
    const style = {
      padding: '30px 10% 30px 10%',
      backgroundImage: `url(${activeSlide.image})`,
      backgroundSize: '100% 700px',
      height: 500,
    }
    return (<div className='container-fluid' style={style}>
      <div className='col-sm-12'>
        {activeSlide.copy}
      </div>
    </div>)
  }
}


export default MyCarousel;
