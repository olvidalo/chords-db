# chords-db
This is a javascript database of string instruments chords. Open, free to use, easily improved with more chords. 
Contributions are welcomed, still a lot of chords (and instruments) missing. 
Use the pull request feature of Github to add your desired chords if you want to contribute.

Take a look at the chords database of an instrument to understand the schema used to register new chords.
For example, let's take a look at the `Dsus2` chords of guitar. We can see this information in the `D/sus2.js` file:

```
export default {
  key: 'D',
  suffix: 'sus2',
  positions: [{
    frets: '0320xx',
    fingers: '031000'
  },
  {
    frets: '55775x',
    fingers: '114310',
    barres: 5,
    capo: true
  }]
}

```

Each *position* define a new chord variation of the `Dsus2` chord.
We must define the *frets* needed to obtain the chord in the respective strings.
We can define too the *fingers* information for easy reading of the chord.
If the chord need to barre some string, we will define if in the *barre* field. If
you want the barre be represented with capo, you can define the "capo" property too.

## This fork

Forked from [tombatossals/chords-db](https://github.com/tombatossals/chords-db) for the [Obsidian Chord Sheets](https://github.com/olvidalo/obsidian-chord-sheets) plugin. Changes and data sources:

- **Added typings**
- **Guitar and ukulele corrections** taken  from [tabsy-gr/chords-db](https://github.com/tabsy-gr/chords-db) (MIT) in October 2026: wrong and copied shapes fixed, mislabelled chords renamed, broken and duplicate voicings removed, implied barres declared, impossible fingerings fixed, prefer root in the bass.
  Every change is explained in their [UPSTREAM-DIFF.md](https://github.com/tabsy-gr/chords-db/blob/master/UPSTREAM-DIFF.md).
- **Guitar `7b13`** shapes from [chord.farm](https://chord.farm) (October 2024 – they never answered my request for permission. If you are chord.farm and would like this to be removed, please contact me).
- **Ukulele in D tuning** (A D F# B, from [MostFrabjous](https://github.com/olvidalo/chords-db/pull/1), October 2024) and **baritone ukulele** (D G B E, from [eviv-java](https://github.com/olvidalo/chords-db/pull/2), December 2024) are the ukulele shapes transposed, now derived from the ukulele data at build time (`transposeChords` in `src/tools.js`).
- **Mandolin** (G D A E): converted in March 2024 from `mando.py` of [starenka/chordata](https://github.com/starenka/chordata) (2014, no licence), a generated database. Cleaned up in October 2026: reordered the chord shapes so that easier shapes come first, remove duplicate and invalid suffixes, declared barres, and added missing shapes and fixes for impossible or awkward fingerings from  `ChordPro`.

## How to build/contribute

This project is using *yarn* as package manager, so all the basic command related to 
the project lifecycle are bound to it. Three basic commands

```
yarn install
yarn build
```
Generates a new version of the library when new chords are added.

```
yarn test
```
Make some testing of the new added chords. Very useful to detect basic mistakes.

## How to use

All this information is packed in a JSON library, that you can use to render visually
with a utility able to parse this information.

You can take a look of the current state of the database with this SVG rendering tool:

[![chords-db](https://raw.githubusercontent.com/tombatossals/react-chords/webpage/src/images/react-chords.png)](https://tombatossals.github.io/react-chords)
