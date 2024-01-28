import mockData from '../components/Weather/mockData.json';

const mockGetWeather = async () => {
	return new Promise(resolve =>
		setTimeout(() => {
			resolve(mockData);
		}, 2000)
	);
};

export const fetcher = (url, queryParams = '', wantMock = false) => {
	return wantMock
		? mockGetWeather()
		: fetch(`${url}${queryParams}`).then(r => r.json());
};
