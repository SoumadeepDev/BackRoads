import { FeatuedTours } from "./data";
const Tours = () => {
  return (
    <section className="section" id="tours">
      <div className="section-title">
        <h2>
          featured <span>tours</span>
        </h2>
      </div>

      <div className="section-center featured-center">
        {FeatuedTours.map((tour) => {
          return (
            <article className="tour-card" key={tour.id}>
              <div className="tour-img-container">
                <img
                  src={tour.tourImage}
                  className="tour-img"
                  alt="TourImage"
                />
                <p className="tour-date">{tour.tourDate}</p>
                {/* Conditionally render stamp if tour.completed is true */}
                {tour.completed && <div className="stamp">Expired</div>}
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{tour.tourTitle}</h4>
                </div>
                <p>{tour.tourPara}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className={tour.tourfooterClass}></i>
                    </span>
                    {tour.tourCountry}
                  </p>
                  <p>{tour.tourDays}</p>
                  <p>{tour.tourPackage}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="section-title gap">
        <h3>
          Next Trip is{" "}
          <span>
            Coming Soon
            <div className="animation">
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </div>
          </span>
        </h3>
      </div>
    </section>
  );
};
export default Tours;
