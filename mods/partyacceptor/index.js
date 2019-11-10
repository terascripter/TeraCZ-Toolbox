let enabled = false;

module.exports = function(mod) {

    mod.command.add('partyaccept', () => {
        enabled = !enabled;
        mod.command.message('Accepting party members automatically: ' + enabled);
    });

    mod.hook('S_BEGIN_THROUGH_ARBITER_CONTRACT', 1, event => {
        if ([4, 5].indexOf(event.type) != -1 && enabled) {
            mod.toServer('C_REPLY_THROUGH_ARBITER_CONTRACT', 1, {
                type: event.type,
                id: event.id,
                response: 1,
                recipient: event.sender
            });
        }
    })
}