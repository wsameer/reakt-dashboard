import mockData from '../components/Weather/mockData.json';

export const fetcher = url => fetch(url).then(r => r.json());

export const mockGetWeather = async () => {
  return new Promise(resolve =>
    setTimeout(() => {
      resolve(mockData);
    }, 2000)
  );
};