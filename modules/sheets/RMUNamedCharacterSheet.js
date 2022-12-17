export class RMUNamedCharacterSheet extends ActorSheet {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      template: "systems/rmu-by-tucansilver/templates/sheets/namedCharacter-sheet.hbs",
      clases: [ "rmu", "sheet", "namedCharacter" ],
      width: 796,
      height: 720,
    });
  }

  async getData() {
    const context = await super.getData();
    context.systemData = context.data.system;
    context.config = CONFIG.RMU;
    return context;
  }

}