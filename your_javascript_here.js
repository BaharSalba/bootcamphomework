var hero = {
  name: "Kita",
  heroic: true,
  inventory: ['hamer', 'arrows', 'mirror', 'rope'],
  health: 20,
  weapon: { type: 'bow and arrow', damage: 2 }
};
// Game logic

function rest(creature) {
  creature.health = 10;
  console.log('hozay!');
  return creature;
};

function pickUpItem(creature, item) {
  creature.inventory.push(item);
  console.log('hozay!');
  return creature;
};

function dealDamage(attacker, defender) {
  defender.health = attacker.health - attacker.damage
  console.log('hozay!');
};

function equipWeapon(creature, index) {
  creature.weapon = inventory.[index]
}





// UI
