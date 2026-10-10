import main from './main';
import tunings from './tunings';
import keys from './keys';
import ukulele from '../ukulele';
import { transposeChords } from '../../tools';

// A D F# B is the standard ukulele tuning two semitones up: the same shapes, two semitones higher.
export default {
  main,
  tunings,
  keys,
  suffixes: ukulele.suffixes,
  chords: transposeChords(ukulele.chords, keys, 2),
};
