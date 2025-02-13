import { world, system } from '@minecraft/server';
import { resetInventoryLore, invBlocks, getLorePropertiesFromTags, inventoryControls, itemEntityControls } from './database.js';

system.runInterval(() => {
  for (const player of world.getPlayers()) {
    const { authorMap, loreColor, loreStyle } = getLorePropertiesFromTags(player);
    const inventory = player.getComponent('minecraft:inventory').container;
    inventoryControls(inventory, loreColor, authorMap, loreStyle);
    itemEntityControls(player, loreColor, authorMap, loreStyle);
    for (let x = -5; x <= 5; x++) {
      for (let y = -5; y <= 5; y++) {
        for (let z = -5; z <= 5; z++) {
          const blockLocation = {
            x: Math.floor(player.location.x) + x,
            y: Math.floor(player.location.y) + y,
            z: Math.floor(player.location.z) + z,
          };
          const block = player.dimension.getBlock(blockLocation);
          if (block && invBlocks.includes(block.typeId)) {
            let inventory = block.getComponent("inventory").container;
            if (inventory) {
              inventoryControls(inventory, loreColor, authorMap, loreStyle);
            }
          }
        }
      }
    }
  }
}, 15);

world.afterEvents.playerSpawn.subscribe((event) => {
  const player = event.player;
  const inventory = player.getComponent('minecraft:inventory').container;
  resetInventoryLore(inventory);
  player.addTag('projectid(identifier(minecraft)author(mojang))');
  player.addTag('projectid(identifier(better_on_bedrock)author(poggy))');
});