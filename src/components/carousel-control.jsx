import React from 'react';

export default class CarouselControl extends React.Component {
  constructor(props) {
    super(props)
  };
  render() {
    const direction = this.props.direction;
    const placement = direction === 'back' ? 'left' : 'right';
    const icon = direction === 'back' ? '<' : '>';
    return (<div
      style={{
        position: 'absolute',
        [placement]: '10%',
        top: '50%',
        color: 'black',
        fontSize: 80,
      }}
      onClick={this.props.handleClick}
    >
      {icon}
    </div>)
  }
};
