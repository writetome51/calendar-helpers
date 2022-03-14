import { MonthIndex } from './month-data-calculator_service/month-data.type';


export class TodaysDateService {

	private static __todaysDate = new Date();  // sets to browser's local time.


	static get(): {
		year: number,
		monthIndex: MonthIndex,
		day: number
	} {
		return {
			year: this.__todaysDate.getFullYear(),
			monthIndex: this.__todaysDate.getMonth() as MonthIndex,
			day: this.__todaysDate.getDate()
		};
	}

}
