import { describe, it, expect, vi } from 'vitest';
import { flightsApiService } from '../services/flightsApiService';

describe('flightsApiService', () => {
  it('should return data with the correct structure', async () => {
    const response = await flightsApiService.fetchData();

    // Check the structure of the response
    expect(response).toHaveProperty('success', true);
    expect(response).toHaveProperty('message', 'Flights fetched successfully!');
    expect(response).toHaveProperty('data');
    expect(Array.isArray(response.data)).toBe(true);

    if (response.data.length > 0) {
      const flight = response.data[0];

      expect(flight).toHaveProperty('airport');
      expect(flight).toHaveProperty('date');
      expect(flight).toHaveProperty('expectedTime');
      expect(flight).toHaveProperty('flightIdentifier');
      expect(flight).toHaveProperty('flightNumber');
      expect(flight).toHaveProperty('originalTime');
      expect(flight).toHaveProperty('score');
      expect(flight).toHaveProperty('url');
    }
  });

  it('should handle errors when fetching data', async () => {
    // Replace the original fetchData with the mocked one
    flightsApiService.fetchData = vi.fn(() => {
      throw new Error('Something went wrong retrieving the flights.');
    });

    // Check the error (message)
    try {
      await flightsApiService.fetchData();
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect((error as Error).message).toBe(
        'Something went wrong retrieving the flights.'
      );
    }
  });
});
