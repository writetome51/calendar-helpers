// Since a displayed month usually begins with days that don't have numbers (for instance, the
// first day of the month is a Saturday, so all the previous days in that week are numberless),
// this will contain empty strings at the beginning to represent any numberless days.
// Ex: ['','','',1,2,3,4,5,6,7,8,9,10,11...]

export type DaysOfMonth = ('' | number)[];
