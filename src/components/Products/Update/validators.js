import {timestampToDays} from '../../../utils';
import moment from 'moment';

export const isNameValid = (value) => {
	return value.trim().length > 0 && value.trim().length <= 200;
};

export const isCategoriesValid = (value) => {
	return value.length > 0 && value.length <= 5;
}

export const isExpiredDate = (value, maxValue) => {
	const selectedDate = moment(value).valueOf();
	const currentDate = moment().valueOf();
	const durationDays = timestampToDays(selectedDate - currentDate);

	return durationDays < maxValue;
}