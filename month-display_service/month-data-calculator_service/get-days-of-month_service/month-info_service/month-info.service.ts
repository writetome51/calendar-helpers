import { getAsWeekdayIndex } from './get-as-weekday-index.function';
import { GetNumLeapYearsPassedService as getNumLeapYearsPassed }
	from './get-num-leap-years-passed.service';
import { getHead } from '@writetome51/array-get-head-tail';
import { getSum } from '@writetome51/get-sum-average-product';
import { StartYearData as startYear }
	from '../../start-year.data';
import { WeekdayIndex } from '../weekday-index.type';
import { yearValid } from './year-valid.function';
import { isLeapYear } from '@writetome51/is-leap-year';


export class MonthInfoService {

	private static __dayCountsForEachMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	private static __checkedYear = 0;


	static getInfo(
		monthIndex, year
	): { numDays: number, weekdayIndexOfFirstDay: WeekdayIndex } {
		if (yearValid(year)) {
			return {
				numDays: this.getNumDaysInMonth(monthIndex, year),
				weekdayIndexOfFirstDay:
					this.__getFirstOfMonthAsWeekdayIndex(monthIndex, year)
			};
		} else throw new Error('The year is invalid');
	}


	static getNumDaysInMonth(monthIndex, year): number {
		this.__checkYear(year);
		return this.__dayCountsForEachMonth[monthIndex];
	}


	private static __getFirstOfMonthAsWeekdayIndex(monthIndex, year): WeekdayIndex {
		const jan1AsWeekdayIndex = this.__getFirstOfJanuaryAsWeekdayIndex(year);

		const totalDays = this.__getNumDaysFromJanuaryFirstToFirstOfRequestedMonth(
			monthIndex, year
		);
		const firstDayOfMonth = jan1AsWeekdayIndex + totalDays;

		// Since the day index can't be greater than 6, reset it:
		return getAsWeekdayIndex(firstDayOfMonth);
	}


	private static __getFirstOfJanuaryAsWeekdayIndex(year): WeekdayIndex {
		let numYearsSince__startYear = year - startYear;

		// For each leap year that's passed...
		const numLeapYearsPassed = getNumLeapYearsPassed.go(
			{startYear: startYear, endingAtYear: year}
		);
		numYearsSince__startYear += numLeapYearsPassed; // ... add 1.

		const jan1 = numYearsSince__startYear;
		return getAsWeekdayIndex(jan1);
	}


	private static __getNumDaysFromJanuaryFirstToFirstOfRequestedMonth(
		monthIndex, year
	): number {
		this.__checkYear(year);
		if (monthIndex < 1) return 0;

		const dayCounts = getHead(monthIndex, this.__dayCountsForEachMonth);
		return getSum(dayCounts);
	}


	private static __checkYear(year) {
		if (year === this.__checkedYear) return;

		if (isLeapYear(year)) this.__dayCountsForEachMonth[1] = 29;
		else this.__dayCountsForEachMonth[1] = 28;

		this.__checkedYear = year;
	}

}
