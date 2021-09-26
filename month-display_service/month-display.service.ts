import { DaysOfMonthData as daysOfMonth } from '@shared/days-of-month.data';
import { MonthDataCalculatorService as monthCalculator }
	from './month-data-calculator_service/month-data-calculator.service';
import { MonthNamesData as monthNames } from '@shared/month-names.data';
import { SelectedData as selected } from '../selected.data';
import { TodaysDateService as todaysDate } from './todays-date.service';
import { TodayData as today } from '@shared/today.data';


export class MonthDisplayService {

	static init() {
		this.__setSelectedDateToTodaysDate();
		this.updateOnChangeOfSelectedMonthOrYear();
	}


	static goForwardOrBackOne(plusOrMinusOne: 1 | -1) {
		const {year, monthIndex, days} =
			monthCalculator.getNextOrPreviousMonthData(plusOrMinusOne);

		selected.year = year;
		selected.month = monthNames.data[monthIndex];
		daysOfMonth.data = days;
	}


	static updateOnChangeOfSelectedMonthOrYear() {
		const {days} = monthCalculator.getMonthData(
			monthNames.data.indexOf(selected.month), selected.year
		);
		daysOfMonth.data = days;
	}


	private static __setSelectedDateToTodaysDate() {
		today.data = todaysDate.get();

		selected.year = today.data.year;
		selected.month = monthNames.data[today.data.monthIndex];
		selected.day = today.data.day;
	}

}
