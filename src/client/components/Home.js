import React from 'react';

const Home = ({ source }) => {
  return (
    <div>
      <div className="bold" style={{ color: 'red' }}>
        Home sweet home!!! - Home component
      </div>
      <button onClick={() => console.log('Hi there')}>Press me</button>
    </div>
  );
};

export default Home;
