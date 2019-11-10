module.exports = function SkipCutscenes(dispatch) {
    dispatch.hook('S_PLAY_MOVIE', 1, (event) => {
        dispatch.toServer('C_END_MOVIE', 1, Object.assign({ unk: true }, event));
            return false;
    });
};