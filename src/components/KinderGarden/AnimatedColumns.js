import React from "react";
import texts from "../../data/Home/home-text.json";

const renderBulletList = (list) => (
    <ul className="custom-list" style={{ marginLeft: '20px' }}>
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

const AnimatedColumns = () => {
  return (
        <div className="container">
            <div className="row">
                <div
                className={"col-sm-8 section-heading"}
                >
                <div className="row">
                    <div className="col-md-6 col-sm-6" style={{ marginTop: '-15px', textAlign: 'left'}}>
                        {renderBulletList(texts.activities.slice(0, 7))}
                     
                    </div>
                    <div className="col-md-6 col-sm-6" style={{ marginTop: '-15px', textAlign: 'left'}}>
                           {renderBulletList(texts.activities.slice(-7))}
                    </div>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default AnimatedColumns;



