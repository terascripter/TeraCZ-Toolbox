module.exports = function Drop(dispatch) {
	const command = dispatch.command;

	let cid,
		model,
		location,
		curHp,
		maxHp,
		locRealTime = 0,
		isCastanic = false
		
	dispatch.hook('S_LOGIN', 2, event => {
		({cid, model} = event)

		isCastanic = ((model - 100) / 200 % 50) === 3
	})

	dispatch.hook('S_PLAYER_STAT_UPDATE', 1, event => {
		curHp = event.curHp
		maxHp = event.maxHp
	})

	dispatch.hook('S_CREATURE_CHANGE_HP', 1, event => {
		if(event.target == cid) {
			curHp = event.curHp
			maxHp = event.maxHp
		}
	})

	dispatch.hook('C_PLAYER_LOCATION', 1, event => {
		location = event
		locRealTime = Date.now()
	})

	command.add('drop', percent => {
		percent = Number(percent)

		if(!(percent > 0 && percent <= 100) || !curHp) return

		let percentToDrop = (curHp * 100 / maxHp) - percent

		if(percentToDrop <= 0) return

		dispatch.toServer('C_PLAYER_LOCATION', 1, Object.assign({}, location, {
			z1: location.z1 + 400 + percentToDrop * (isCastanic ? 20 : 10),
			type: 2,
			time: location.time - locRealTime + Date.now() - 50
		}))
		dispatch.toServer('C_PLAYER_LOCATION', 1, Object.assign(location, {
			type: 7,
			time: location.time - locRealTime + Date.now() + 50
		}))
	})
}