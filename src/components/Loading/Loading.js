import React from 'react';
import Lottie from 'react-lottie';
import Transition from '../Transition';
import animationData from '../../assets/loading.json';
import './style.scss';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

const Loading = () => (
  <Transition show id='loading'>
    <div className='Loading'>
      <Lottie options={defaultOptions} height={150} width={150} />
    </div>
  </Transition>
);

export default Loading;
