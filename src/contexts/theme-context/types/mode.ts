import { modes } from '../constants';

type Key = keyof typeof modes;
type Mode = typeof modes[Key];

export default Mode;
