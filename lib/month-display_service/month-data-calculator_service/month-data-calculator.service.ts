import { GetDaysOfMonthService as getDaysOfMonth }
	from './get-days-of-month_service/get-days-of-month.service';
import { GetMonthIncrementedOrDecrementedService as getMonthIncrementedOrDecremented }
	from './get-month-incremented-or-decremented.service';
import { MonthData } from './month-data.type';
import { StartYearData } from './start-year.data';


export class MonthDataCalculatorService {

	private static __monthIndex = 0;
	private static __year = StartYearData;


	static getMonthData(monthIndex?: number, year?: number): MonthData {
		if (monthIndex !== undefined && year !== undefined) {
			this.__setMonthAndYear(monthIndex, year);
		}
		return {
			year: this.__year,
			monthIndex: this.__monthIndex,
			days: getDaysOfMonth.go(this.__monthIndex, this.__year)
		};
	}


	static getNextOrPreviousMonthData(plusOrMinusOne: 1 | -1): MonthData {
		const {monthIndex, year} = getMonthIncrementedOrDecremented.go(
			plusOrMinusOne, {monthIndex: this.__monthIndex,  year: this.__year}
		);
		this.__monthIndex = monthIndex;
		this.__year = year;

		return this.getMonthData();
	}


	private static __setMonthAndYear(monthIndex: number, year: number) {
		this.__monthIndex = monthIndex;
		this.__year = year;
	}

}
