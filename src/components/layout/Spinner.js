import React from 'react';
import spinner from './spinner2.svg';

export default () => (
  <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
    <img
      src={spinner}
      style={{ position: 'absolute', height: '50px', margin: 'auto', display: 'block', top: '-5px' }}
      alt='Loading...'
    />
  </div>
);