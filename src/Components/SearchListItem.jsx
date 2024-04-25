import { Link } from "react-router-dom";

const SearchListItem = ({ property }) => {
  return (
    <figure className="search-item rounded-lg p-3 shadow-md flex flex-col md:flex-row justify-between gap-6">
        <img src={property.featuredImageUrl} alt={property.name} className="object-cover w-full md:w-48"/>
        <figcaption className="flex flex-col sm:flex-row gap-3">
            <div className="search-item-desc flex-2 px-3 flex flex-col gap-2">
                <Link to={`/hotels/${property.slug}`}>
                    <h4 className="font-bold text-lg text-primary hover:text-primary-700">{property.name}</h4>
                </Link>
                {property.offersAirportTaxiService && <div className="bg-secondary-700 px-1 w-max rounded-md">
                    <small>Free Airport Taxi</small>
                </div>}
                <small className="text-gray-500">{property.distanceFromCityCenter} from center</small>
                {property.hasAirConditioning && <p>Studio Apartment with air conditioning</p>}
                <small> {property.roomSize} | {property.numberOfBathrooms} Bathroom | {property.bedDimensions}</small>
                {property.allowsCancellation && 
                    <p className="text-sm font-semibold text-primary-700">
                        Free cancellation <br />You can cancel later, so lock in this great price today
                    </p>
                }
            </div>
            <div className="search-item-details flex-1 flex flex-col justify-between px-3 sm:px-0">
                <div className="rating flex justify-start sm:justify-between gap-3 sm:gap-2">
                    <span className="font-semibold">{property.rating.count}</span>
                    <button className="bg-secondary-700 px-1 font-bold">{property.rating.value}</button>
                </div>
                <div className="si-detail-text text-left sm:text-right flex flex-col gap-1">
                    <p className="text-xl font-semibold text-gray-500">$112</p>
                   {<small>{property.taxIncludedInPrice ? "includes taxes" : "Taxes not included"}</small>}
                    <Link to={`/hotels/${property.slug}`} className="bg-primary hover:bg-primary-700 text-center text-sm text-white py-1 px-2 w-full font-semibold rounded-3xl">
                        See Availabilty
                    </Link>
                </div>
            </div>
        </figcaption>
    </figure>
  )
}

export default SearchListItem
