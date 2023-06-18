import FeedbackCard from "./FeedbackCard";
import { feedback } from "../constants";
const Business = () => (
  <section className="container">
    <div className="container mt-10 text-xl">
      DSA & ASSOCIATES is a full service, multi-disciplinary professional
      services firm. The organization has carved a niche for itself by providing
      tailored solutions as per client's specific needs, adopting customer
      centric approach.{" "}
    </div>
    <div className="container row">
      <div className="container col mt-10 text-xl">
        DSA & ASSOCIATES offers array of diversified, specialized, and
        professional services for broad spectrum of sectors including Healthcare
        and Hospitals, Banks, Financial Institution, Insurance, Trust and
        Societies, Government, Start Ups, Manufacturing, Services, Retail, Real
        Estate, Pharmaceutical, Import/ Export and more.
      </div>

      <div className="container col  mt-10 text-xl">
        The leadership team comprises of CAs and subject experts with vast
        experience in related fields. The dynamic and competent team members
        have been our biggest assets.
        <br /> <br />
        With the endeavor of offering holistic solutions, the firm is expanding
        into new service areas and geographies having offices in Vadodara and
        Ahmedabad.
      </div>
    </div>

    <div className="container  bg-slate-100 my-10 text-center pt-2 pb-10">
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
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <h1 className="text-4xl  p-2 mb-3">Meet Our Partners</h1>
      <div className="container text-center card-deck m-3">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  </section>
);

export default Business;

// const FeatureCard = ({ icon, title, content, index }) => (
//   <div
//     className={`flex flex-row p-6 rounded-[20px] ${
//       index !== features.length - 1 ? "mb-6" : "mb-0"
//     } feature-card`}
//   >
//     <div
//       className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
//     >
//       <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
//     </div>
//     <div className="flex-1 flex flex-col ml-3">
//       <h4
//         className="font-semibold text-[18px] leading-[23.4px] mb-1"
//         styles={theme}
//       >
//         {title}
//       </h4>
//       <p className=" font-normal text-black text-[16px] leading-[24px]">
//         {content}
//       </p>
//     </div>
//   </div>
// );
