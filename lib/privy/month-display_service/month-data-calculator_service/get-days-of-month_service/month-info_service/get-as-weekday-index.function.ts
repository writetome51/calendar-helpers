import { WeekdayIndex } from '../weekday-index.type';
import { getRoundedDown } from '@writetome51/get-rounded-up-down';


export function getAsWeekdayIndex(dayIndex): WeekdayIndex {
	if (dayIndex > 6) {
		const factor = getRoundedDown(dayIndex / 7);
		dayIndex -= (7 * factor);
	}
	return dayIndex;
}
