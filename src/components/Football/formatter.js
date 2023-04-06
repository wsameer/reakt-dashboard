export const calculateCurrentSeason = () => {
	const currentMonth = new Date().getMonth();
	const currentYear = new Date().getFullYear();

	const currentSeason =
		currentMonth > 7
			? `${currentYear}-${(currentYear + 1).toString().substring(2)}`
			: `${currentYear - 1}-${currentYear.toString().substring(2)}`;

	// console.log(`Current season is ${currentSeason}`);

	return currentSeason;
};
