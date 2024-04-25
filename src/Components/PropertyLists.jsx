
import { Link } from "react-router-dom";
// import useFetch from "../Hooks/useFetch";
import img1 from "../Images/html-1.jpg";
import img2 from "../Images/html-2.jpg";
import img3 from "../Images/html-3.jpg";
import img4 from "../Images/html-4.jpg";

const PropertyLists = () => {

  // const {data, loading, error} = useFetch("http://localhost:8081/api/hotels/by/type");
  const propertyTypes = [
    {
      id: 1,
      name: "Hotels",
      slug: "hotels",
      count: 4,
      imageurl: img1
    },
    {
      id: 2,
      name: "Motels",
      slug: "motels",
      count: 16,
      imageurl: img2
    },
    {
      id: 3,
      name: "Resorts",
      slug: "resorts",
      count: 6,
      imageurl: img3
    },
    {
      id: 4,
      name: "Campgrounds",
      slug: "campgrounds",
      count: 10,
      imageurl: img4
    },
  ]

  return (
    <section className="py-8">
      <div className="container">
        <h3 className="home-headings font-bold text-lg mb-6">
          Browse by property type
        </h3>
        <div
          id="propertyList"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-between gap-4 md:gap-6"
        >
          {propertyTypes && propertyTypes.map((propertyType, propertyTypeIndex) => (
            <figure key={propertyTypeIndex} className="property-list-item cursor-pointer transition rounded-xl shadow-md hover:shadow-custom overflow-hidden">
            <img
              src={propertyType.imageurl}
              alt={propertyType.name}
              className="h-100 sm:h-64 md:h-48 lg:h-32 w-full object-cover"
            />
            <figcaption className="p-3">
              <Link to={`/hotels/${propertyType.slug}`}></Link>
              <h6 className="font-semibold text-lg capitalize">{propertyType.name}</h6>
              <p className="text-sm">{propertyType.count} Available</p>
            </figcaption>
          </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyLists;