import './SuperDiv.scss';
import { bem } from '@/shared';

const classBEM = bem('super-div');

export const SuperDiv = () => {
  return <div className={classBEM()}>SuperDiv!!!</div>;
};
