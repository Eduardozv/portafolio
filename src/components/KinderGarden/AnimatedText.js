import React, { forwardRef } from 'react';
import AnimatedSection from './AnimatedSection';
import AnimatedColumns from './AnimatedColumns';

const AnimatedText = forwardRef(( {title, tagline, children}, ref ) => (
    <section ref={ref} className="first-ico-box" style={{ paddingBottom: '0px'}} id="about">
    <div className="container">
      <div className="row">
          <AnimatedSection title={title} tagline={tagline}>
          {children}
          </AnimatedSection>
      </div>
      <br />
      <br />

      <AnimatedColumns />
    </div>
  </section>
));

export default AnimatedText;