let active = false;

module.exports = function (mod) {

    mod.game.initialize('inventory');

    mod.command.add('autodm', () => {
        active = !active;
        mod.command.message('Auto dismantling: ' + active);
    });

    mod.hook('S_INVEN', 1, event => {
        if (active) {
            mod.game.inventory.bag.forEach(item => {
                if (item.itemLevel < 180 && item.data.combatItemType && (item.data.combatItemType.includes('EQUIP_ARM') || item.data.combatItemType.includes('EQUIP_WEAPON'))) {
                    mod.toServer('C_DECOMPOSITION_ITEM', 1, {
                        dbid: item.dbid,
                        unk: 0
                    });
                }
            });
        }
    });
}