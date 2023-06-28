import FeedbackCard from "./FeedbackCard";
import { feedback } from "../constants";
import { Link } from "react-router-dom";
const Business = () => (
  <section className="container">
    <div className="container text-justify mt-10 text-xl">
      <span style={{ font: "#00538C" }}> DSA & ASSOCIATES </span>is a full
      service, multi-disciplinary professional services firm. The organization
      has carved a niche for itself by providing tailored solutions as per
      client's specific needs, adopting customer centric approach.{" "}
    </div>
    <div className="container row text-justify">
      <div className="container col mt-10 text-xl">
        DSA & ASSOCIATES offers array of diversified, specialized, and
        professional services for broad spectrum of sectors including Healthcare
        and Hospitals, Banks, Financial Institution, Insurance, Trust and
        Societies, Government, Start Ups, Manufacturing, Services, Retail, Real
        Estate, Pharmaceutical, Import/ Export and more.
      </div>

      <div className="container col text-justify mt-10 text-xl">
        The leadership team comprises of CAs and subject experts with vast
        experience in related fields. The dynamic and competent team members
        have been our biggest assets.
        <br /> <br />
        With the endeavor of offering holistic solutions, the firm is expanding
        into new service areas and geographies having offices in Vadodara and
        Ahmedabad.
      </div>
    </div>

    <div className="container rounded bg-slate-100 my-10 text-center pt-2 pb-10">
      <h1 className="text-4xl  p-2 mb-3">Expertise</h1>

      <div className="row">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-2xl">Industry Exposure</h5>
              <p className="card-text">
                Leadership of Subject expert's has given us the opportunity to
                cater to a wide range of industries.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center rounded-lg px-3 py-2 text-sm font-medium text-center text-white mt-2"
                style={{ background: "#00538C" }}
                onClick={() => {
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
              >
                Read more
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-2xl">Spectrum of Services</h5>
              <p className="card-text">
                Our goal is to provide you with everything you need in one
                place, making it convenient and hassle-free for you.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center rounded-lg mt-2 px-3 py-2 text-sm font-medium text-center text-white "
                style={{ background: "#00538C" }}
                onClick={() => {
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
              >
                Read more
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <h1 className="text-4xl text-center p-2 mb-3">Meet Our Partners</h1>
      <div className="container text-center card-deck m-3">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  </section>
);

export default Business;
