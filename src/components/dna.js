import React from 'react';
import {blueColor, goldColor} from "../services/colors.service";
import dna from '../images/dna.jpg';

const Dna = () => {
  const style = {
    padding: '30px 10% 30px 10%',
  };
  return (<div className='container-fluid' style={{
    backgroundImage: `url(${dna})`,
    backgroundRepeat: 'none',
    backgroundSize: 'cover',
  }}>
    <div className="col-sm-5 col-sm-offset-1">
      <h2 style={{
        background: goldColor,
        padding: '10px 10px 10px 10px',
        textTransform: 'uppercase',
        textAlign: 'justify-content',
        fontSize: 26,
      }}>
        <i>Especially when it comes to health.</i>
      </h2>
      <p>
        Because even though you're developing the next game-changing molecule or AI-based software,
        healthcare investors need to get behind more than your creation.
        They need to get behind your company.
      </p>
      <p>
        Your vision. Your mission.
      </p>
      <h4 style={{ textTransform: 'uppercase' }}>In a word, your corporate brand.</h4>
      <p>
        <b>Was Apple just another piece of tech? Or a company on a crusade to redefine computing?</b>
      </p>
      <p>
        Was Nike a sneaker? Or a company with a rallying cry to "Just do it"?
      </p>
      <p>Early investors were intrigued by the product. But convinced by the company.</p>
      <p>Corporate brands have purpose. Tell a story.</p>
      <p>They have a calling. They're often on a crusade.</p>
      <p>And most important, brands are marketable.</p>
      <h4>What's your corporate brand?</h4>
    </div>
  </div>);
};

export default Dna;
