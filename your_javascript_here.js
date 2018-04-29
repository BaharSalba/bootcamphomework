var hero = {
  name: "Kita",
  heroic: true,
  inventory: ['hamer', 'arrows', 'mirror', 'rope'],
  health: 20,
  weapon: { type: 'bow and arrow', damage: 2 }
};
// Game logic

function rest(creature) {
  var creature = {
  name: "Veras",
  heroic: false,
  inventory: ['poison', 'knife', 'flashbang', 'smoke bomb'],
  health: ++10,
  weapon: { type: 'axe', damage: 2 }
  }

  return creature
};

function pickUpItem(creature, item) {
  var creatureItem = {
  inventory: ['poison', 'knife', 'flashbang', 'smoke bomb']
  creature.inventory.push(grenade);
  console.log(inventory)
  }
  return creature
};







// UI
