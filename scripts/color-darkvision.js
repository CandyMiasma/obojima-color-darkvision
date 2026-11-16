const ID = 'obojima-color-darkvision';

Hooks.once("ready", () => {
  // Wrap the token document class actually in use (dnd5e's subclass, if present).
  const proto = CONFIG.Token.documentClass.prototype;
  const original = proto.prepareDerivedData;

  proto.prepareDerivedData = function (...args) {
    const result = original.apply(this, args);
    if (this.getFlag(ID, "keepColor")) this.sight.saturation = 0;
    return result;
  };

  canvas.tokens?.placeables.forEach(t => t.initializeVisionSource());
  canvas.perception?.update({ refreshVision: true, refreshLighting: true });
});

// Add the flag from a macro: select tokens, then run
// game.modules.get("no-grayscale-darkvision").api.toggle()
Hooks.once("init", () => {
  game.modules.get(ID).api = {
    async toggle() {
      for (const t of canvas.tokens.controlled) {
        await t.document.setFlag(ID, "keepColor", !t.document.getFlag(ID, "keepColor"));
        t.initializeVisionSource();
      }
      canvas.perception.update({ refreshVision: true, refreshLighting: true });
    }
  };
});