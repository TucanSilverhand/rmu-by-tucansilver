/**
 * Extend the base Actor entity by defining a custom roll data structure which is ideal for the Simple system.
 * @extends {Actor}
 */

 export class SimpleActor extends Actor {
  async _preCreate(data, options, user) {
    await super._preCreate(data, options, user);
    if (data.type === "character") {
      this.data.token.update({vision: true, actorLink: true, disposition: 1})
      let skillPack = game.packs.get("rmunified.skills");
      let collection = await skillPack.getDocuments();
      collection.sort(function (a, b) {
        let nameA = a.name.toUpperCase();
        let nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        } if (nameA > nameB) {
          return 1;
        }
        return 0
      });
      this.data.update({
        items: collection.map(i => i.toObject())
      });

      this.data.update({'data.size': 'standard'})
    }
  }

}