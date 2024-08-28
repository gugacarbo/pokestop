import {Move} from '@/@types/move';

export function getStatusEffectString(move: Move) {
	if (!move.buffs) {
		return '';
	}
	var atk = getStatusEffectStatString(move.buffs[0], 'Atk');
	var def = getStatusEffectStatString(move.buffs[1], 'Def');
	var buffApplyChance = (move.buffApplyChance ?? 0) * 100 + '%';
	var buffTarget = move.buffTarget;
	var stringArray = [buffApplyChance + ' chance', atk, def, buffTarget];

	if (move.buffTarget == 'both') {
		stringArray[3] = 'self';

		var atkOpp = getStatusEffectStatString(move.buffsOpponent?.[0], 'Atk');
		var defOpp = getStatusEffectStatString(move.buffsOpponent?.[1], 'Def');
		var buffApplyChance = (move?.buffApplyChance ?? 0) * 100 + '%';
		stringArray.push(buffApplyChance + ' chance', atkOpp, defOpp, 'opponent');
	}

	return stringArray.join(' ');
}

function getStatusEffectStatString(stat: number | undefined, type: string) {
	if (stat === 0 || stat === undefined) {
		return '';
	}
	var statString = stat.toString();
	if (stat > 0) {
		statString = '+' + statString;
	}
	return statString + ' ' + type;
}
