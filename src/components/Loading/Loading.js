import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/loading.json';
import './style.scss';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const Loading = () => (
  <div className='Loading'>
    <Lottie options={defaultOptions} height={150} width={150} />
  </div>
);

export default Loading;
