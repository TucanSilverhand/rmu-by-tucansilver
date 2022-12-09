export class RMUItemSheet extends ItemSheet {
  get template() {
    const path = "systems/rmu-by-tucansilver/templates/sheets";
    return `${path}/${this.item.type}-sheet.html`;
  }

  async getData(options) {
    const context = await super.getData(options);
    context.systemData = context.data.system;
    context.config = CONFIG.RMU;
    context.descriptionHTML = await TextEditor.enrichHTML(context.systemData.description, {
      secrets: this.document.isOwner,
      async: true
    });
    return context;
  }
}