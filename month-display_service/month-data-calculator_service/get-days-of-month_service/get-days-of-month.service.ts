import { DaysOfMonth } from '@shared/days-of-month.type';
import { getArrFilled } from '@writetome51/get-arr-filled';
import { WeekdayIndex } from './weekday-index.type';
import { MonthInfoService as monthInfo } from './month-info_service/month-info.service';


export class GetDaysOfMonthService {

	static go(monthIndex, year): DaysOfMonth {
		const {numDays, weekdayIndexOfFirstDay} = monthInfo.getInfo(monthIndex, year);

		const daysWithoutNumbers = this.__getDaysThatDontHaveNumbersBefore(
			weekdayIndexOfFirstDay
		);
		const daysWithNumbers = this.__getDaysWithNumbers(numDays);
		return [...daysWithoutNumbers, ...daysWithNumbers];
	}


	private static __getDaysThatDontHaveNumbersBefore(weekdayIndex: WeekdayIndex): ''[] {
		return getArrFilled(weekdayIndex, () => '');
	}


	private static __getDaysWithNumbers(numberOfDays: number): number[] {
		// @ts-ignore
		return getArrFilled(numberOfDays, (i) => (i + 1));
	}

}
