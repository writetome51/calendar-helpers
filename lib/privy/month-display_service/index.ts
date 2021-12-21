import { DaysOfMonthData as daysOfMonth } from '../days-of-month.data';
import { MonthDataCalculatorService as monthCalculator } from './month-data-calculator_service';
import { MonthNamesData as monthNames } from '../month-names.data';
import { SelectedData as selected } from '../selected.data';
import { TodaysDateService as todaysDate } from './todays-date.service';
import { TodayData as today } from '../today.data';


export class MonthDisplayService {

	static init(): void {
		today.data = todaysDate.get();
		this.__setSelectedDate(today.data);
		this.updateDays(today.data);
	}


	static goForwardOrBackOne(plusOrMinusOne: 1 | -1): void {
		const {year, monthIndex, days} =
			monthCalculator.getNextOrPreviousMonthData(plusOrMinusOne);

		selected.year = year;
		selected.month = monthNames.data[monthIndex];
		daysOfMonth.data = days;
	}


	static updateDays(
		{monthIndex, year}: { monthIndex: number, year: number }
	): void {
		const {days} = monthCalculator.getMonthData(monthIndex, year);
		daysOfMonth.data = days;
	}


	private static __setSelectedDate({year, monthIndex, day}) {
		selected.year = year;
		selected.month = monthNames.data[monthIndex];
		selected.day = day;
	}

}
