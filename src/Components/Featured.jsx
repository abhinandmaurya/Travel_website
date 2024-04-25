import { Link } from "react-router-dom";
// import useFetch from "../Hooks/useFetch";
import img1 from "../Images/html-1.jpg";
import img2 from "../Images/html-2.jpg";
import img3 from "../Images/html-3.jpg";

const Featured = () => {

    // const { data, loading, error} = useFetch("http://localhost:8081/api/hotels/count?cities=London,Madrid,New%20%25York");

    const featuredProperties = [
        {
            id: 1,
            name: "Lagos",
            slug: "lagos",
            excerpt: "A night of full luxury awaits you",
            imageUrl: img1,
        },
        {
            id: 2,
            name: "Abuja",
            slug: "abuja",
            excerpt: "A night of full luxury awaits you",
            imageUrl: img2,
        },
        {
            id: 3,
            name: "Pleateau",
            slug: "plateau",
            excerpt: "A night of full luxury awaits you",
            imageUrl: img3,
        },
    ]

  return (
    <section id="featured" className="py-8">
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-6 mt-6">
                {featuredProperties.length > 0 && featuredProperties.map((featuredProperty, featuredPropertyIndex) => (
                    <figure 
                        className="featured-item relative rounded-lg overflow-hidden" key={featuredPropertyIndex}>
                        <img src={featuredProperty.imageUrl} alt={featuredProperty.name} className="w-full h-full"/>
                        <div className="img-overlay absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50">
                        </div>
                        <div className="absolute bottom-6 p-2 text-white">
                            <Link to={`/hotels/${featuredProperty.slug}`}>
                                <h4 className="text-2xl font-bold">{featuredProperty.name}</h4>
                            </Link>
                            <p className="text-lg">{featuredProperty.excerpt}</p>
                        </div>
                    </figure>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Featured
