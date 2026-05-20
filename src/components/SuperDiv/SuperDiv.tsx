import { bem } from '@/shared';
import './SuperDiv.scss';

const classBEM = bem('super-div');

export function SuperDiv() {
  return <div className={classBEM()}>SuperDiv!!!</div>;
}
