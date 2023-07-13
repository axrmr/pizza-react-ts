import { CSSProperties } from 'react';
import SyncLoader from 'react-spinners/BeatLoader';

const override: CSSProperties = {
  position: 'absolute',
  left: '50%',
  bottom: '10%',
};

const Loader: React.FC = () => {
  return (
    <SyncLoader
      cssOverride={override}
      color={'#fe5f1e'}
      size={20}
      aria-label='Loading Spinner'
      data-testid='loader'
    />
  );
};

export default Loader;
