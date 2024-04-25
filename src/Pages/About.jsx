import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Img1 from "../Images/html-1.jpg";

const About = () => {
  return (
    <>
      <Header/>
      <section className="py-14">
        <div className="container flex gap-8 items-center">
          <picture>
            <img src={Img1} alt="about sphene reserves" className="object-cover"/>
          </picture>
          <article className="flex flex-col gap-y-3">
            <p>
              At Sphene Reserves, we believe that travel is one of life's greatest adventures. Our mission is to make it easy and affordable for everyone to explore new destinations and create memories that will last a lifetime. As a one-stop shop for travel booking, we offer a wide range of options for flights, hotels, tours, and activities, so you can create a customized itinerary that suits your needs and budget.
            </p>
            <p>
              Our experienced travel experts are always on hand to help you plan and book your dream trip, whether you're planning a romantic getaway, a family vacation, or a solo adventure. We take pride in offering personalized service, competitive pricing, and a hassle-free booking experience. With Sphene Reserves, you can rest assured that you're in good hands.
            </p>
            <p>
              We understand that travel is not just about the destination, but also the journey. That's why we offer a comprehensive travel guide to help you get the most out of your trip, including local recommendations, insider tips, and practical information. We also offer 24/7 customer support, so you can reach out to us at any time if you need help or have questions.
            </p>
            <p>
              So why wait? Discover the world with Sphene Reserves!
            </p>
          </article>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default About
