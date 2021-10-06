import React from 'react';
import texts from '../../data/Home/home-text.json';
import loading from '../../assets/images/loading.gif';

const renderBulletList = (list) => (
  <ul>
      {list.map( (t, index) => 
          <li key={index} data-aos-delay={300}
              data-aos={"fade-up"}
              data-aos-duration={700}
              className="content-font mt-30"
              style={{ fontSize: '15px' }} >
              {t}
          </li>
      )}
  </ul>
);

const LoadingSpinner = (...props) => (
    <img className="spinner" src={loading} alt="loading..." />
);

export default LoadingSpinner;