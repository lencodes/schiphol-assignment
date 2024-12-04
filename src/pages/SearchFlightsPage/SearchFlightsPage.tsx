import './SearchFlightsPage.css';
import flightSearchImage from '../../assets/fligh-search-asset.png';
import { SearchFlights } from '../../components/SearchFlights/SearchFlights';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import { Alert } from '../../components/Alert/Alert';

export const SearchFlightsPage = () => {
  return (
    <div className="search-flights-page container">
      <div className="header">
        <h1 className="title">Find your flight</h1>

        <img src={flightSearchImage} alt="Search flights" />
      </div>

      <ErrorBoundary
        fallback={
          <Alert.Danger>
            Oops, something went wrong. Try again later
          </Alert.Danger>
        }
      >
        <SearchFlights />
      </ErrorBoundary>
    </div>
  );
};
