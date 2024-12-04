import './SearchFlightsPage.css';
import flightSearchImage from '../../assets/fligh-search-asset.png';
import { SearchFlights } from '../../components/SearchFlights/SearchFlights';

export const SearchFlightsPage = () => {
  return (
    <div className="search-flights-page container">
      <div className="header">
        <h1 className="title">Find your flight</h1>

        <img src={flightSearchImage} alt="Search flights" />
      </div>

      <SearchFlights />
    </div>
  );
};
