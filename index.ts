import { IndexedObject } from './types/IndexedObject'

export class FullSearch {
  /**
   * Input array of full search
   */
  private inputArray: Array<string>

  /**
   * Results  of full search
   */
  private results: Array<any> = []

  /**
   * Indexed object with indexes of array items
   */
  public indexedObject: IndexedObject = {}

  /**
   * Creates an instance of full search.
   * @param input
   */
  constructor(input: Array<string>) {
    this.inputArray = input
    this.createIndexObject()
  }

  /**
   * Creates index object
   */
  private createIndexObject() {
    this.inputArray.forEach((inputItem: string, i: number) => {
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
  public searchFor(input: string) {
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
