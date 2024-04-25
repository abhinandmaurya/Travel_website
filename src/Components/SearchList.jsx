import { properties } from "../data/properties"
// import useFetch from "../Hooks/useFetch"
import SearchListItem from "./SearchListItem"

const SearchList = () => {

  // const { loading, error, data } = useFetch("");

  return (
    <main className="col-span-2 flex flex-col gap-y-6">
      {
        properties.length > 0 && properties.map((property, propertyIndex) => (
          <SearchListItem property={property} key={propertyIndex} />
        ))
      }
    </main>
  )
}

export default SearchList
