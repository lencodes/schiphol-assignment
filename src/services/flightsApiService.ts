import flightsData from '../data/flights.json';

const REJECT_FETCH = false; // change this to true to see the Error Boundary in the UI

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
      if (REJECT_FETCH) {
        reject(new Error('Error fetching flights data in flightsApiService.'));
      }

      setTimeout(() => {
        const data: FlightResponse = {
          success: true,
          message: 'Flights fetched successfully!',
          data: flightsData.flights,
        };

        resolve(data);
      }, 1500); // fake a loading time
    });
  },
};
