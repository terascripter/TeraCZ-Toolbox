module.exports = function (dispatch) {
    const command = dispatch.command;


    //9713
    command.add('reset', (dungeonZone) => {
        let zoneId = parseInt(dungeonZone);
        if (zoneId) {
            dispatch.toServer('C_SELECT_CHANNEL', 1, {
                unk: 1,
                zone: zoneId,
                channel: 0
            });
        }
    });
}