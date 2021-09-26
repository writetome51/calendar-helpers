export class TodaysDateService {

	private static __todaysDate = new Date();  // sets to browser's local time.


	static get(): { day: number, monthIndex: number, year: number } {
		return {
			year: this.__todaysDate.getFullYear(),
			monthIndex: this.__todaysDate.getMonth(),
			day: this.__todaysDate.getDate()
		};
	}

}
