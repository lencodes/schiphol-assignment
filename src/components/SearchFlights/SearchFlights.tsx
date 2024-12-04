import './SearchFlights.css';
import { useState } from 'react';
import { Flight, flightsApiService } from '../../services/flightsApiService';
import { filterAndSortFlights } from '../../helpers/filterAndSortFlights';
import { TOrder } from '../../data/types';
import { FlightListCard } from '../FlightListCard/FlightListCard';

export const SearchFlights = () => {
  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState(true);
  const [flights, setFlights] = useState<Flight[]>([]);
  const [filterInput, setFilterInput] = useState('');
  const [order, setOrder] = useState<TOrder>('asc');

  flightsApiService
    .fetchData()
    .then((res) => setFlights(res.data))
    .catch((error) => setError(error))
    .finally(() => setIsLoading(false));

  const filteredFlights = filterAndSortFlights(flights, filterInput, order);

  if (error) {
    return <span>{error}</span>;
  }

  return (
    <div className="search-flights-container">
      <input
        type="text"
        className="filter-input"
        value={filterInput}
        placeholder={
          isLoading ? 'Loading, please wait...' : 'Enter an airport name'
        }
        onChange={(e) => setFilterInput(e.target.value)}
        disabled={isLoading}
      />

      <button
        disabled={isLoading}
        className={order === 'asc' ? 'button--active' : ''}
        onClick={() => setOrder((old) => (old === 'asc' ? 'desc' : 'asc'))}
      >
        {order === 'asc' ? 'Ascending' : 'Descending'}
      </button>

      {filteredFlights.length ? (
        <>
          <ul className="flights-list">
            {filteredFlights.map((flight) => (
              <li key={flight.flightIdentifier}>
                <FlightListCard {...{ flight }} />
              </li>
            ))}
          </ul>

          <span>
            Showing {filteredFlights.length} of {flights.length} flights based
            on your filters.
          </span>
        </>
      ) : null}
    </div>
  );
};
