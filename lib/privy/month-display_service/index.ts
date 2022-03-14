import { DaysOfMonthData as daysOfMonth } from '../days-of-month.data';
import { MonthDataCalculatorService as monthCalculator } from './month-data-calculator_service';
import { TodaysDateService as todaysDate } from './todays-date.service';
import { TodayData as today } from '../today.data';
import { DaysOfMonth } from '../days-of-month.type';
import { MonthData, MonthIndex, MonthNumber }
	from './month-data-calculator_service/month-data.type';


export class MonthDisplayService {

	private static __data: {
		year: number;
		month: MonthNumber;
		weeks: DaysOfMonth[];
		day: number;
	};


	static get data() {
		return this.__data;
	}


	static set year(value: number) {
		// update both this.__data.year and this.__data.weeks
	}


	static set month(value: MonthNumber) {
		// update both this.__data.month and this.__data.weeks
	}


	static init(): void {
		today.data = todaysDate.get();
		this.__setSelectedDate(today.data);
		this.updateDays(today.data);
	}


	static goForwardOrBackOne(plusOrMinusOne: 1 | -1): void {
		const {year, monthIndex, days}: MonthData =
			monthCalculator.getNextOrPreviousMonthData(plusOrMinusOne);

		this.__data.year = year;
		this.__data.month = (monthIndex + 1) as MonthNumber;
		daysOfMonth.data = days; // divide 'days' into weeks and assign to this.__data.weeks
	}


	static updateDays(
		{monthIndex, year}: { monthIndex: MonthIndex, year: number }
	): void {
		const {days} = monthCalculator.getMonthData(monthIndex, year);
		daysOfMonth.data = days;
	}


	private static __setSelectedDate({year, monthIndex, day}) {
		this.__data.year = year;
		this.__data.month = monthIndex + 1;
		this.__data.day = day;
	}

}
