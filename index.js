"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FullSearch {
    /**
     * Creates an instance of full search.
     * @param input
     */
    constructor(input) {
        /**
         * Results  of full search
         */
        this.results = [];
        /**
         * Indexed object with indexes of array items
         */
        this.indexedObject = {};
        this.inputArray = input;
        this.createIndexObject();
    }
    /**
     * Creates index object
     */
    createIndexObject() {
        this.inputArray.forEach((inputItem, i) => {
            let _inputItemArray = inputItem.split('');
            _inputItemArray.forEach(inputItemChar => {
                inputItemChar = inputItemChar.toLowerCase();
                if (!this.indexedObject.hasOwnProperty(inputItemChar)) {
                    this.indexedObject[inputItemChar] = [];
                }
                if (!this.indexedObject[inputItemChar].includes(i)) {
                    this.indexedObject[inputItemChar].push(i);
                }
            });
        });
    }
    /**
     * Searchs text
     * @param input
     * @returns  Array
     */
    searchFor(input) {
        input = input.toLowerCase();
        Object.keys(this.indexedObject).some(alphabet => {
            if (input.match(alphabet)) {
                this.indexedObject[alphabet].forEach(index => {
                    if (this.inputArray[index].toLowerCase().match(input)) {
                        this.results.push(this.inputArray[index]);
                    }
                });
            }
        });
        return [...new Set(this.results)];
    }
}
exports.FullSearch = FullSearch;
