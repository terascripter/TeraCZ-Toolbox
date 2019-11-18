module.exports = function AutoVanguard(dispatch) {
    dispatch.hook('S_COMPLETE_EVENT_MATCHING_QUEST', 1, function (event) {
        dispatch.toServer('C_COMPLETE_DAILY_EVENT', 1, { id: event.id });
            return false;
    });
};