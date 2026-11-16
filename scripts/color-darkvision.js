// Obojima - Full-Color Darkvision (Foundry VTT v13)
// Change only the grayscale setting of core Darkvision, on every user's client.
// Unlike a GM-only macro, a world module is loaded for each connected player.

function enableColorDarkvision() {
  const mode = CONFIG.Canvas?.visionModes?.darkvision;
  const defaults = mode?.vision?.defaults;
  if (!defaults || typeof defaults.saturation !== "number") {
    console.warn("Obojima Color Darkvision | Could not locate standard darkvision saturation setting. No changes made.");
    return false;
  }
  try {
    // -1 is complete desaturation; 0 retains the scene's original colors.
    defaults.saturation = 0;
    console.info("Obojima Color Darkvision | Standard Darkvision grayscale disabled for this client.");
    return true;
  } catch (error) {
    console.warn("Obojima Color Darkvision | Could not modify darkvision settings.", error);
    return false;
  }
}

// Run once the game system has had an opportunity to configure vision modes.
Hooks.once("setup", enableColorDarkvision);
Hooks.once("ready", () => {
  // Re-apply after system/module registration; every user's browser executes this.
  if (enableColorDarkvision() && canvas?.ready) {
    canvas.perception?.update({ refreshVision: true });
  }
});
