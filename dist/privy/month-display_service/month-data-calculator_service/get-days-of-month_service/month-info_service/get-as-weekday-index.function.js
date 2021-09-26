import {getRoundedDown} from '@writetome51/get-rounded-up-down';


export function getAsWeekdayIndex(dayIndex) {
	if (dayIndex > 6) {
		const factor = getRoundedDown(dayIndex / 7);
		dayIndex -= (7 * factor);
	}
	return dayIndex;
}
