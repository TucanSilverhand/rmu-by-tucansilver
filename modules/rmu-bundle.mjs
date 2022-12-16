// Import Modules
import { RMU } from "./config.js";
import { RMUItemSheet } from "./sheets/RMUItemSheet.js";
import { RMUNamedCharacterSheet } from "./sheets/RMUNamedCharacterSheet.js"

/* -------------------------------------------- */
/*  Foundry VTT Initialization                  */
/* -------------------------------------------- */

Hooks.once("init", async function() {
  console.log(`Initializing RMU by TucanSilverhand System`);

	/**
	 * Set an initiative formula for the system
	 * @type {String}
	 */
	CONFIG.Combat.initiative = {
    formula: "1d10 + @initiative.base",
    decimals: 0
  };
  
  CONFIG.RMU = RMU;

  // Register sheet application classes
  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("rmunified", RMUItemSheet, {
    makeDefault: true,
    label: "Default RMU Item Sheet"
  });

  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("rmunified", RMUNamedCharacterSheet, {
    makeDefault: true,
    label: "Default RMU Character Sheet"
  });
});