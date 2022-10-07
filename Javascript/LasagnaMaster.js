 const NOODLE_G_PER_LAYER = 50;
 const SAUCE_L_PER_LAYER = 0.2;
 const PORTIONS_MADE = 2;

 export function cookingStatus(timer) {
   return timer === 0 ? `Lasagna is done.` :
     timer === undefined ? `You forgot to set the timer.` :
     `Not done, please wait.`;
 }

 export function preparationTime(layers, minutesPerLayer = 2) {
   return layers.length * minutesPerLayer;
 }

 export function quantities(layers) {
   const resultQuantities = {noodles: 0, sauce: 0};
   for (let layer of layers)
     if (layer in resultQuantities)
       resultQuantities[layer] += (layer === 'noodles' ? NOODLE_G_PER_LAYER : SAUCE_L_PER_LAYER);
   return resultQuantities;
 }

 export function addSecretIngredient(friendsList, myList) {
   myList.push(friendsList[friendsList.length - 1]);
 }

 export function scaleRecipe(recipe, newPortions) {
   let scaleFactor = newPortions / PORTIONS_MADE;
   let scaledRecipe = {};
   for (let ingredient in recipe) scaledRecipe[ingredient] = recipe[ingredient] * scaleFactor;
   return scaledRecipe;
 }