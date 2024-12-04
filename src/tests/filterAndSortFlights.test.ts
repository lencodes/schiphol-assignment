import { describe, it, expect } from 'vitest';
import { filterAndSortFlights } from '../helpers/filterAndSortFlights';
import flights from '../data/flights.json';

describe('filterAndSortFlights', () => {
  const mockFlights = flights.flights;

  it('returns an empty array if filterText is less than 3 characters', () => {
    const result = filterAndSortFlights(mockFlights, 'Lo', 'asc');
    expect(result).toEqual([]);
  });

  it('filters flights based on airport name', () => {
    const result = filterAndSortFlights(mockFlights, 'Stansted', 'asc');
    expect(result).toEqual([
      {
        flightIdentifier: 'D20190401EZY3004',
        flightNumber: 'EZY 3004',
        airport: 'London Stansted',
        date: '2022-02-24',
        expectedTime: '14:45',
        originalTime: '14:45',
        url: '/en/departures/flight/D20190401EZY3004/',
        score: '156.19374',
      },
    ]);
  });

  it('sorts flights by date and expectedTime in ascending order', () => {
    const result = filterAndSortFlights(mockFlights, 'Santiago', 'asc');
    expect(result).toEqual([
      {
        flightIdentifier: 'D20190401KL0701',
        flightNumber: 'KL 701',
        airport: 'Santiago',
        date: '2022-02-20',
        expectedTime: '21:30',
        originalTime: '21:00',
        url: '/en/departures/flight/D20190401KL0701/',
        score: '58.897865',
      },
      {
        flightIdentifier: 'D20190401VY8379',
        flightNumber: 'VY 8379',
        airport: 'Santiago Com',
        date: '2022-02-22',
        expectedTime: '16:55',
        originalTime: '15:55',
        url: '/en/departures/flight/D20190401VY8379/',
        score: '62.708916',
      },
    ]);
  });

  it('sorts flights by date and expectedTime in descending order', () => {
    const result = filterAndSortFlights(mockFlights, 'Santiago', 'desc');
    expect(result).toEqual([
      {
        flightIdentifier: 'D20190401VY8379',
        flightNumber: 'VY 8379',
        airport: 'Santiago Com',
        date: '2022-02-22',
        expectedTime: '16:55',
        originalTime: '15:55',
        url: '/en/departures/flight/D20190401VY8379/',
        score: '62.708916',
      },
      {
        flightIdentifier: 'D20190401KL0701',
        flightNumber: 'KL 701',
        airport: 'Santiago',
        date: '2022-02-20',
        expectedTime: '21:30',
        originalTime: '21:00',
        url: '/en/departures/flight/D20190401KL0701/',
        score: '58.897865',
      },
    ]);
  });

  it('limits the result to a maximum of 5 flights', () => {
    const result = filterAndSortFlights(mockFlights, 'San', 'asc');
    expect(result.length).toBeLessThanOrEqual(5);
  });

  it('returns an empty array if no flights match the filter text', () => {
    const result = filterAndSortFlights(mockFlights, '%%%', 'asc');
    expect(result).toEqual([]);
  });
});
