import './styles.scss';

const Loading = () => (
  <div className='-m-5 flex justify-center'>
    <div className='lds-ellipsis'>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

export default Loading;
