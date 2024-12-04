import './FlightListCard.css';
import { Flight } from '../../services/flightsApiService';

interface FlightListCardProps {
  flight: Flight;
}

export const FlightListCard = ({ flight }: FlightListCardProps) => {
  const timeChanged = flight.expectedTime !== flight.originalTime;

  return (
    <div className="flight-list-card-container">
      <div className="time-container">
        <dl>
          <dt className="sr-only">Original time</dt>
          <dd className={`${timeChanged ? 'time-changed' : null}`}>
            {flight.originalTime}
          </dd>
        </dl>

        {timeChanged ? (
          <dl>
            <dt className="sr-only">Expected time</dt>
            <dd className="expected-time">{flight.expectedTime}</dd>
          </dl>
        ) : null}
      </div>

      <div className="information">
        <dl>
          <dt className="sr-only">Airport</dt>
          <dd className="airport-and-date">
            {flight.airport} <span className="date">{flight.date}</span>
          </dd>
        </dl>

        <dl>
          <dt className="sr-only">Flight number</dt>
          <dd className="flight-number">{flight.flightNumber}</dd>
        </dl>
      </div>
    </div>
  );
};
