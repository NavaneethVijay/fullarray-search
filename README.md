# fullarray-search

Javascript utility that allows for searching strings in an array based on indexing

# Installation

`npm i fullarray-search`(https://www.npmjs.com/package/fullarray-search)`

# Usage

```javascript
import { FullSearch } from 'fullarray-search'

const sampleArray = [
  'Nickolas',
  'Gisella',
  'Babbette',
  'Jeff',
  'Finlay',
  'Marten',
  'Leonelle',
  'Bud',
  'Arleyne',
  'Norah'
]

const indexedArray = new FullSearch(sampleArray)
indexedArray.searchFor('e')

// ["Gisella", "Babbette", "Jeff", "Marten", "Leonelle", "Arleyne"]

indexedArray.searchFor('ne')
// ["Leonelle", "Arleyne"]
```
