/**
 * @param {number[]} damage
 * @param {number} armor
 * @return {number}
 */
var minimumHealth = function(damage, armor) {
  let maxGain = 0,
      totalDamage = 0;
  
  for (let dmg of damage) {
    maxGain = Math.max(maxGain, dmg - armor >= 0 ? armor : dmg); 
    totalDamage += dmg; 
  }
  return totalDamage - maxGain + 1; 
}