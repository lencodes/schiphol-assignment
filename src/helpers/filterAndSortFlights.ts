import { Flight } from '../services/flightsApiService';
import { TOrder } from '../data/types';

const MAXIMUM_FLIGHTS_SHOWN = 5;
const MINIMUM_FILTER_CHARACTERS = 3;

/**
 * Filters and sorts flights based on the given filter text and order.
 *
 * @param {Flight[]} flights - Array of flights to be filtered and sorted.
 * @param {string} filterText - The text used to filter flights based on airport names.
 * @param {TOrder} order - The order in which flights should be sorted ('asc' or 'desc').
 * @returns {Flight[]} - A new array of flights that are filtered, sorted, and limited to the maximum shown.
 */
export const filterAndSortFlights = (
  flights: Flight[],
  filterText: string,
  order: TOrder
): Flight[] => {
  if (filterText.length < MINIMUM_FILTER_CHARACTERS) {
    return [];
  }

  const lowercasedFilterText = filterText.toLowerCase();

  return flights
    .filter((flight) =>
      flight.airport.toLowerCase().includes(lowercasedFilterText)
    )
    .sort((a, b) => {
      // Compare by date before comparing by expectedTime
      const compareByDate = a.date.localeCompare(b.date);
      if (compareByDate !== 0) {
        return order === 'asc' ? compareByDate : -compareByDate;
      }

      // Compare by expectedTime if the date is equal
      return order === 'asc'
        ? a.expectedTime.localeCompare(b.expectedTime)
        : -a.expectedTime.localeCompare(b.expectedTime);
    })
    .slice(0, MAXIMUM_FLIGHTS_SHOWN);
};
