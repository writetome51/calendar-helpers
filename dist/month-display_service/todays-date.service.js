export class TodaysDateService {
    static get() {
        return {
            year: this.__todaysDate.getFullYear(),
            monthIndex: this.__todaysDate.getMonth(),
            day: this.__todaysDate.getDate()
        };
    }
}
TodaysDateService.__todaysDate = new Date(); // sets to browser's local time.
