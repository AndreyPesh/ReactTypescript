import React, { useEffect } from 'react';
import image from './assets/images/Mona.jpg';

const styles: React.CSSProperties = {
  width: '18rem',
};

const Component = (props: TypeProps) => {
  return (
    <div>
      {props.name}
      <div className="card" style={styles}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-title">Card title</p>
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the cards content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export const App = () => {
  useEffect(() => {});
  return (
    <div>
      <img src={image} />
      <button className="btn btn-primary">Primary</button>
    </div>
  );
};

type TypeProps = {
  name: string;
};
