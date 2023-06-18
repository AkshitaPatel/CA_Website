import React from "react";
import styles from "../style";
import { theme, feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";

const About = () => {
  return (
    <section
      id="clients"
      className={` ${styles.flexCenter} flex-col relative `}
    >
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 relative">
        <h2
          className={`${styles.heading2} text-center mb-0 pb-0`}
          style={theme}
        >
          Who we are!
        </h2>
      </div>
      <div className="container px-20 mb-5">
        <p>
          <b>DSA & ASSOCIATES</b> is a full service, multi-disciplinary
          professional services firm. The organization has carved a niche for
          itself by providing tailored solutions as per client’s specific needs,
          adopting customer centric approach.
          <br></br>
          <br></br>
          <b>DSA & ASSOCIATES </b>offers array of diversified, specialized, and
          professional services for broad spectrum of sectors including
          Healthcare and Hospitals, Banks, Financial Institution, Insurance,
          Trust and Societies, Government, Start Ups, Manufacturing, Services,
          Retail, Real Estate, Pharmaceutical, Import/ Export and more.
          <br />
          <br></br>
          The leadership team comprises of CAs and subject experts with vast
          experience in related fields. The dynamic and competent team members
          have been our biggest assets. With the endeavor of offering holistic
          solutions, the firm is expanding into new service areas and
          geographies having offices in Vadodara and Ahmedabad. We help the
          organisations comply with the requirements of Corporate Laws, Exchange
          Control Regulations and other Allied Laws.
        </p>
      </div>
      {/* <div className=" bg-slate-50 rounded">
        <h2 className={`${styles.heading2} text-center`} style={theme}>
          Vision
        </h2>
        <div className="container px-20 mb-5">
          To be a professionally preferred and trusted organization and to
          innovate continuously to adopt with the everchanging landscape of
          assurance and advisory business.
          <br /> <br />
          Our approach ensures continuous and intense engagement by the
          Management with a Core Team specializing in relevant focus areas,
          ensuring a detailed evaluation before providing a complete integrated
          solution to clients.
        </div>
      </div>

      <br />

      <div className="bg-slate-50 rounded">
        <h2 className={`${styles.heading2} text-center`} style={theme}>
          Mision
        </h2>
        <div className="container px-20 mb-5">
          To build a team, our greatest asset, that is competent in every aspect
          and builds a strong organizational foundation that is unshaken and
          unaffected through the course of challenging times.
        </div>
      </div> */}

      <div className="container  bg-slate-100 my-10 text-center p-10 rounded-lg">
        <div className="row">
          <div class="col-sm-6 mb-3 mb-sm-0">
            <div class="card rounded-lg">
              <div class="card-body">
                <h5 class="card-title text-2xl">Vision</h5>
                <p class="card-text">
                  To be a professionally preferred and trusted organization and
                  to innovate continuously to adopt with the everchanging
                  landscape of assurance and advisory business.
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card rounded-lg">
              <div class="card-body">
                <h5 class="card-title text-2xl">Mission</h5>
                <p class="card-text">
                  To build a team, our greatest asset, that is competent in
                  every aspect and builds a strong organizational foundation
                  that is unshaken and unaffected through the course of
                  challenging times.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className={`${styles.heading2} text-center`} style={theme}>
        Why choose DSA?
      </h2>

      {/* <div className="container px-20 mb-5">
        <ul>
          <li>
            <b>• Team of Specialist</b> : DSA has a dedicated team of
            specialists for every service line, from Partner to Subject Expert.
            However, what is more important is that specialists from different
            service lines don't work in 'silos. These specialists work
            cohesively and seamlessly with the prime objective of providing
            'best services to our clients'.
          </li>
          <br />
          <li>
            <b>• Customized Solutions to Client needs</b> : DSA believes in
            developing and delivering customized solutions and not in merely
            offering ready-to-implement solutions. We first identify the
            problem, consider the client’s objectives, limit the parameters, and
            focus on practical & commercial considerations.
          </li>
          <br />
          <li>
            <b>• Attitude of Problem Solving</b> : We do not stop with
            identification of the problem; we start from there. Our people
            approach each project with a positive mindset with the ultimate
            objective of arriving at a solution, which helps us think in the
            right direction with a methodical approach.
          </li>
          <br />
          <li>
            <b>• Implementing Best Practices</b> : At DSA, we are always open to
            improving ourselves. Be it processes, deliverables, technical
            skills, or an overall experience, we constantly try to benchmark our
            practices with the best. We identify shortcomings and try to
            overcome them by implementing the best practices. This helps us to
            significantly raise our standards, which in turn, raises
            expectations from the client and the cycle continues.
          </li>
        </ul>
      </div> */}

      <section id="advertisers" className="advertisers-service-sec pt-5 pb-5">
        <div className="container">
          <div className="row mt-5 mt-md-4 row-cols-1 row-cols-sm-1 row-cols-md-3 justify-content-center">
            <div className="col">
              <div className="service-card">
                <div className="icon-wrapper">
                  <i className="fa-solid fa-chart-line"></i>
                </div>
                <h3>Team of Speacialist</h3>
                <p>
                  DSA has a dedicated team of specialists for every service
                  line, from Partner to Subject Expert. However, what is more
                  important is that specialists from different service lines
                  don't work in 'silos. These specialists work cohesively and
                  seamlessly with the prime objective of providing 'best
                  services to our clients'.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="service-card">
                <div className="icon-wrapper">
                  <i className="fa-solid fa-arrows-down-to-people"></i>
                </div>
                <h3>Customized Solutions to Client needs</h3>
                <p>
                  DSA believes in developing and delivering customized solutions
                  and not in merely offering ready-to-implement solutions. We
                  first identify the problem, consider the client's objectives,
                  limit the parameters, and focus on practical & commercial
                  considerations.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="service-card">
                <div className="icon-wrapper">
                  <i className="fa-solid fa-globe"></i>
                </div>
                <h3>Attitude of Problem Solving</h3>
                <p>
                  We do not stop with identification of the problem; we start
                  from there. Our people approach each project with a positive
                  mindset with the ultimate objective of arriving at a solution,
                  which helps us think in the right direction with a methodical
                  approach.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="service-card">
                <div className="icon-wrapper">
                  <i className="fa-solid fa-money-check-dollar"></i>
                </div>
                <h3>Implementing Best Practices</h3>
                <p>
                  At DSA, we are always open to improving ourselves. Be it
                  processes, deliverables, technical skills, or an overall
                  experience, we constantly try to benchmark our practices with
                  the best. We identify shortcomings and try to overcome them by
                  implementing the best practices. This helps us to
                  significantly raise our standards, which in turn, raises
                  expectations from the client and the cycle continues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container card-deck m-3">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default About;
