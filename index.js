'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
class FullSearch {
  /**
   * Creates an instance of full search.
   * @param input
   */
  constructor(input) {
    /**
     * Results  of full search
     */
    this.results = []

    /**
     * Indexed object with indexes of array items
     */
    this.indexedObject = {}
    this.inputArray = input
    this.createIndexObject()
  }
  /**
   * Creates index object
   */
  createIndexObject() {
    this.inputArray.forEach((inputItem, i) => {
      let _inputItemArray = inputItem.split('')
      _inputItemArray.forEach(inputItemChar => {
        inputItemChar = inputItemChar.toLowerCase()
        if (!this.indexedObject.hasOwnProperty(inputItemChar)) {
          this.indexedObject[inputItemChar] = []
        }
        if (!this.indexedObject[inputItemChar].includes(i)) {
          this.indexedObject[inputItemChar].push(i)
        }
      })
    })
  }
  /**
   * Searchs text
   * @param input
   * @returns  Array
   */
  search(input) {
    input = input.toLowerCase()
    Object.keys(this.indexedObject).some(alphabet => {
      if (input.match(alphabet)) {
        this.indexedObject[alphabet].forEach(index => {
          if (this.inputArray[index].toLowerCase().match(input)) {
            this.results.push(this.inputArray[index])
          }
        })
      }
    })
    return [...new Set(this.results)]
  }
}
let inputArray = [
  'one',
  'Two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'Saab',
  'Volvo',
  'BMW',
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
  'Bellhouse',
  'Bohey',
  'Humble',
  'Glayzer',
  'Seamark',
  'Whimp',
  'Ferreira',
  'Joseland',
  'Klousner',
  'Gallon',
  'Peche',
  'Satch',
  'Jemison',
  'Harring',
  'Lynskey',
  'Shelford',
  'Lackinton',
  'Essam',
  "O'Nolan",
  'Dislee',
  'Conrart',
  'Jeffels',
  'Kordas',
  'Croyden',
  'Grimsdale',
  'Rilton',
  'Groveham',
  'Lavarack',
  'Douglas',
  'Peer',
  'Lidgertwood',
  'Bendson',
  'Dibbs',
  'Cadden',
  "Dell 'Orto",
  'Sally',
  'Fawdrie',
  'Pinkerton',
  'Beattie',
  'Llewellyn',
  'Jakaway',
  'Purbrick',
  'Sturmey',
  'McTeague',
  'Apted',
  "O'Gaven",
  'Murkin',
  'Cauldwell',
  'Neles',
  'Fergusson',
  'Bottelstone',
  'Barthod',
  'Viant',
  "L' Estrange",
  'Gentile',
  'Mein',
  'Jachtym',
  'Peffer',
  'Obeney',
  'Sarfat',
  'Sarah',
  'Manoelli',
  'Loukes',
  'Ebbrell',
  'Arter',
  'Stillgoe',
  'Francioli',
  'Algeo',
  'Scroyton',
  'Betteriss',
  'Enderson',
  'Epps',
  'Bream',
  'Kopf',
  'Melpuss',
  'Rupel',
  'Pastor',
  'Macquire',
  'McGowing',
  'Stelli',
  'Eaglen',
  'Branni',
  'Hackey',
  'Rawles',
  "O'Brien",
  'Aaronsohn',
  'Wathey',
  'Barrand',
  'Garlick',
  'Maryin',
  'Grizard',
  'Mullinger',
  'Issacof',
  'Garnul',
  'Krier',
  'Febre',
  'Conaghan',
  'Lillegard',
  'Landsberg',
  'Gurery'
]
