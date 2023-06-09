// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */

export function totalBirdCount(birdsPerDay) {
    let birdsSeen = 0;
    for(let i = 0; i < birdsPerDay.length; i += 1) {
    birdsSeen += birdsPerDay[i];
  };
    return birdsSeen;
  }
  
  /**
   * Calculates the total number of birds seen in a specific week.
   *
   * @param {number[]} birdsPerDay
   * @param {number} week
   * @returns {number} birds counted in the given week
   */
  export function birdsInWeek(birdsPerDay, week) {
    let birdSeen = 0;
    let weekIndex = (week * 7) - 7;
    for (let i = weekIndex; i < (weekIndex + 7); i += 1) {
      birdSeen += birdsPerDay[i];
    };
    return birdSeen;
  }
  
  /**
   * Fixes the counting mistake by increasing the bird count
   * by one for every second day.
   *
   * @param {number[]} birdsPerDay
   * @returns {number[]} corrected bird count data
   */
  export function fixBirdCountLog(birdsPerDay) {
    for (let i = 0; i < birdsPerDay.length; i += 2){
      birdsPerDay[i] += 1;
    }
      return birdsPerDay;
  }
  
  