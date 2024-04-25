import { Link } from "react-router-dom";
import img1 from "../Images/html-1.jpg";
import img2 from "../Images/html-2.jpg";
import img3 from "../Images/html-3.jpg";
import img4 from "../Images/html-4.jpg";
// import useFetch from "../Hooks/useFetch";

const PopularLists = () => {

    // const { loading, data, error } = useFetch("http://localhost:8081/api/hotels?featured=true&lmit=4");

    const popular = [
        {
            id: 1,
            name: "Ariel Grande",
            slug: "ariel-grande",
            city: "USA",
            priceStarts: 120,
            rating: {
                id: 1,
                count: 9.0,
                value: "Excellent"
            },
            featureImg: img3
        },
        {
            id: 2,
            name: "Budes Aires",
            slug: "budes-aires",
            city: "Madrid",
            priceStarts: 120,
            rating: {
                id: 1,
                count: 9.4,
                value: "Excellent"
            },
            featureImg: img1
        },
        {
            id: 3,
            name: "Delta Premiere",
            slug: "delta-premiere",
            city: "Madrid",
            priceStarts: 120,
            rating: {
                id: 1,
                count: 7.0,
                value: "Good"
            },
            featureImg: img2
        },
        {
            id: 4,
            name: "Serbia Dunes",
            slug: "serbia-dunes",
            city: "Madrid",
            priceStarts: 120,
            rating: {
                id: 1,
                count: 7.0,
                value: "Good"
            },
            featureImg: img4
        },
    ];

  return (
    <section id="popularHotels" className="py-8">
        <div className="container">
            <h3 className="home-headings font-bold text-lg mb-6">Browse by Most Popular</h3>
            <div id="popularLists" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {popular && popular.map((item, i) => (
                    <figure 
                        key={i} 
                        className="popular-item cursor-pointer rounded-xl overflow-hidden transition duration-300 shadow-md hover:shadow-custom"
                    >
                        <img src={item.featureImg} alt={item.name} />
                        <figcaption className="p-3">
                            <Link to={`/hotels/${item.slug}`}>
                                <h6 className="text-lg font-semibold">{item.name}</h6>
                            </Link>
                            <p className="city fw-300 text-gray-500">{item.city}</p>
                            <p className="price fw-500 ">Starts from ${item.priceStarts}</p>
                            {item.rating && (<div className="rating mt-3 flex gap-3 items-center text-sm">
                                <button className="bg-blue-500 text-white p-1 font-bold">{item.rating.count}</button> 
                                <span>{item.rating.value}</span>
                            </div>)}
                        </figcaption>
                    </figure>
                ))}
            </div>
        </div>
    </section>
  )
}

export default PopularLists
