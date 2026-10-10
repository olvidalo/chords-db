import main from './main';
import tunings from './tunings';
import keys from './keys';
import ukulele from '../ukulele';
import { transposeChords } from '../../tools';

// D G B E is the standard ukulele tuning a fourth down: the same shapes, five semitones lower.
export default {
  main,
  tunings,
  keys,
  suffixes: ukulele.suffixes,
  chords: transposeChords(ukulele.chords, keys, -5),
};
