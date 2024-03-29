import CityData from '../assets/city.list.json';

/**
 * Format and returns todays date
 * in human readable format
 */
export const printTodaysDate = () => {
	const d = new Date();
	let months = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec'
	];
	let days = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday'
	];
	return `${days[d.getDay()]}, ${d.getDate()} ${months[d.getMonth()]}`;
};

/**
 * Convert timestamp to human readable time 24 hours format
 * @param {String} timeStamp The timestamp received from the API
 */
export const convertToLocalTime = timeStamp => {
	if (!timeStamp) {
		return '';
	}
	let theDate = new Date(timeStamp * 1000);
	return theDate.toLocaleString('en-US', {
		hour: 'numeric',
		minute: 'numeric',
		hour12: true
	});
};

export const convertTime = t => {
	const d = new Date(t);
	let months = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec'
	];
	return `${d.getDate()} ${months[d.getMonth()]}, ${d.getFullYear()}`;
};

export const getCityId = cityName => {
	if (!cityName) {
		return null;
	}
	const findCity = CityData?.find(
		city => city.name.toLowerCase() === cityName.toLowerCase()
	);
	return findCity.id;
};
