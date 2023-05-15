// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
    let numberPart1 = '';
     let numberPart2 = '';
     for (let i = 0; i < array1.length; i += 1){
      numberPart1 += array1[i].toString()
    }
     for (let i = 0; i < array2.length; i += 1){
      numberPart2 += array2[i].toString()
    }
     return parseInt(numberPart1) + parseInt(numberPart2); 
   }
   
   /**
    * Checks whether a number is a palindrome.
    *
    * @param {number} value
    * @returns {boolean} whether the number is a palindrome or not
    */
   export function luckyNumber(value) {
     let sliced = String(value).slice('');
     let backwards = [];
     for (let i = (sliced.length - 1); i > -1; i -= 1) {
       backwards.push(sliced[i]);
     }
     console.log(backwards);
     return (parseInt(backwards.join('')) === value) 
   }
   
   /**
    * Determines the error message that should be shown to the user
    * for the given input value.
    *
    * @param {string|null|undefined} input
    * @returns {string} error message
    */
   export function errorMessage(input) {
     if (input === null || input === undefined || input === '') {
       return 'Required field'; 
     } else if (isNaN(input) || Number(input) === 0) {
       return 'Must be a number besides 0';
     } else {
       return '';
     }
   }
   