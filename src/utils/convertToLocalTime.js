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
