import { getRoundedUp } from '@writetome51/get-rounded-up-down';
import { isLeapYear } from '@writetome51/is-leap-year';
import { not } from '@writetome51/not';
import { toStr } from '@writetome51/to-str';
export class GetNumLeapYearsPassedService {
    static go({ startYear, endingAtYear }) {
        if (not(isLeapYear(startYear)))
            throw new Error(`The start year must be a leap year`);
        const numPossibleLeapYears = this.__getNumPossibleLeapYearsWithin(endingAtYear - startYear);
        // False leap years are any year that begins a new century (ends with '00'),
        // but is not evenly divisible by 400.
        const numFalseLeapYears = this.__getNumFalseLeapYearsPassed(startYear, endingAtYear);
        return (numPossibleLeapYears - numFalseLeapYears);
    }
    static __getNumPossibleLeapYearsWithin(numYears) {
        return getRoundedUp(numYears / 4);
    }
    static __getNumFalseLeapYearsPassed(startYear, endingAtYear) {
        const numCenturiesToCheck = this.__getNumCenturiesToCheck(startYear, endingAtYear);
        return this.__getNumFalseLeapYearsIn(numCenturiesToCheck, startYear);
    }
    static __getNumCenturiesToCheck(startYear, endingAtYear) {
        // if `endingAtYear` begins a new century, it cannot be counted as a century to check.
        // This is because we're ending on it, meaning it hasn't passed.
        if (toStr(endingAtYear).endsWith('00'))
            --endingAtYear;
        let [centuryOfStartYear, centuryOfEndYear] = this.__getThe2CenturiesWithoutTheirLast2Digits(startYear, endingAtYear);
        return centuryOfEndYear - centuryOfStartYear;
    }
    static __getNumFalseLeapYearsIn(numCenturiesToCheck, startYear) {
        let centuryToCheck = Number(toStr(this.__withoutLast2Digits(startYear)) + '00');
        for (var i = 0, numFalseLeapYears = 0; i < numCenturiesToCheck; ++i) {
            centuryToCheck += 100;
            if (not(isLeapYear(centuryToCheck)))
                ++numFalseLeapYears;
        }
        return numFalseLeapYears;
    }
    static __getThe2CenturiesWithoutTheirLast2Digits(startYear, endingAtYear) {
        return [
            this.__withoutLast2Digits(startYear),
            this.__withoutLast2Digits(endingAtYear)
        ];
    }
    static __withoutLast2Digits(num) {
        const numDigits = toStr(num).length;
        return Number(toStr(num).substr(0, numDigits - 2));
    }
}
