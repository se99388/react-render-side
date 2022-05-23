import React from 'react';

const Home = ({ source }) => {
  return (
    <div className='center-align' style={{marginTop:'200px'}}>
<h3>Welcome</h3>

      <button onClick={() => console.log('Hi there')}>Press me</button>
    </div>
  );
};

export default { component: Home };
