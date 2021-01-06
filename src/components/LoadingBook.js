import BeatLoader from 'react-spinners/BeatLoader';

const LoadingBook = () => (
  <div className='container text-center'>
    <h4>Loading Book</h4>
    <BeatLoader sizeUnit={'px'} size={50} color={'#36D7B7'} loading={true} />
  </div>
);

export default LoadingBook;
