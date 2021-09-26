import {DaysOfMonthData as daysOfMonth} from '../days-of-month.data.js';
import {MonthDataCalculatorService as monthCalculator}
	from './month-data-calculator_service/month-data-calculator.service.js';
import {MonthNamesData as monthNames} from '../month-names.data.js';
import {SelectedData as selected} from '../selected.data.js';
import {TodaysDateService as todaysDate} from './todays-date.service.js';
import {TodayData as today} from '../today.data.js';


export class MonthDisplayService {

	static init() {
		this.__setSelectedDateToTodaysDate();
		this.updateOnChangeOfSelectedMonthOrYear();
	}


	static goForwardOrBackOne(plusOrMinusOne) {
		const {year, monthIndex, days} = monthCalculator.getNextOrPreviousMonthData(plusOrMinusOne);
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


	static __setSelectedDateToTodaysDate() {
		today.data = todaysDate.get();
		selected.year = today.data.year;
		selected.month = monthNames.data[today.data.monthIndex];
		selected.day = today.data.day;
	}

}
