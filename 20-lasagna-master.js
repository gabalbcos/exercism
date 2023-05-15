/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(remainingMinutes) {
  if (remainingMinutes === 0) {
    return 'Lasagna is done.'
  } else if (remainingMinutes === undefined) {
    return 'You forgot to set the timer.';
  } else {
        return 'Not done, please wait.';
  }
};

export function preparationTime(layers, minutesPerLayer) {
  if (minutesPerLayer === undefined) {
    return layers.length * 2; 
  } else {
    return layers.length * minutesPerLayer
  }
};

export function quantities(layers) {
return {
  'noodles': layers.filter(layer => layer === 'noodles'). length * 50,
  'sauce': layers.filter(layer => layer === 'sauce').length * .2
  };
 }

export function addSecretIngredient(friendsList, myList) {
  myList = myList.push(friendsList[friendsList.length - 1]);
};

export const scaleRecipe = (recipe, portions) => {
  let newPortion = portions / 2;
  let newRecipe = {};
  for (let i in recipe){
    newRecipe[i] = recipe[i] * newPortion
  }
  return newRecipe;
}

