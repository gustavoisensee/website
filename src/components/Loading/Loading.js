import React from 'react';
import Lottie from 'react-lottie';
import Transition from '../Transition';
import animationData from '../../assets/loading.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

const Loading = () => (
  <Transition show>
    <div className='Loading'>
      <Lottie options={defaultOptions} height={200} width={200} />
    </div>
  </Transition>
);

export default Loading;
