module.exports = function afker(mod) {

    let enabled = true,
        lasttimemoved = Date.now();

    mod.hook('C_PLAYER_LOCATION', 1, event => {
        if ([0, 1, 5, 6].indexOf(event.type) > -1)
            lasttimemoved = Date.now();
    })

    mod.hook('C_RETURN_TO_LOBBY', 'raw', () => {
        if (enabled && Date.now() - lasttimemoved >= 3600000) 
            return false;
    })
}