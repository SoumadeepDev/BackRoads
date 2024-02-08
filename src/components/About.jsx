import awesomeBeach from "../images/about.jpeg";
const About = () => {
  return (
    <section className="section" id="about">
      <div className="section-title">
        <h2>
          about <span>us</span>
        </h2>
      </div>

      <div className="section-center about-center">
        <div className="about-img">
          <img src={awesomeBeach} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>Discover Hidden Gems</h3>
          <p>
            Embark on a budget-friendly voyage to captivating destinations
            worldwide with BackRoad Tour & Travels. Unraveling the world's
            mysteries, BackRoad Tour & Travels offers journeys beyond the
            ordinary. From ancient ruins veiled in history to serene landscapes
            untouched by time, embark on adventures that redefine exploration.
          </p>
          <p>
            Discover the world's wonders without compromising on adventure or
            affordability. Explore iconic landmarks like the Great Wall of
            China, Petra, the Colosseum, Machu Picchu, Christ the Redeemer, the
            Taj Mahal, and the Great Pyramid of Giza—all while staying within
            your budget.
          </p>
          <a href="#About" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;
