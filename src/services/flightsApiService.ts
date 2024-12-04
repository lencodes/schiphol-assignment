import flightsData from '../data/flights.json';

export interface Flight {
  airport: string;
  date: string;
  expectedTime: string;
  flightIdentifier: string;
  flightNumber: string;
  originalTime: string;
  score: string;
  url: string;
}

interface FlightResponse {
  success: boolean;
  message: string;
  data: Flight[];
}

export const flightsApiService = {
  fetchData: () => {
    return new Promise<FlightResponse>((resolve, reject) => {
      setTimeout(() => {
        const data: FlightResponse = {
          success: true,
          message: 'Flights fetched successfully!',
          data: flightsData.flights,
        };

        resolve(data);
        // reject('Oops, something went wrong retrieving the flights.'); // Enable this line to show the error state
      }, 1500); // fake a loading time
    });
  },
};
