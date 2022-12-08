export class RMUItemSheet extends ItemSheet {
  get template() {
    const path = "systems/rmu-by-tucansilver/templates/sheets";
    return `${path}/${this.item.type}-sheet.html`;
  }
}