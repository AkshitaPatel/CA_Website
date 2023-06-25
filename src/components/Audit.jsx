import styles, { layout } from "../style";

const Audit = () => (
  <section id="product">
    <div
      className="text-4xl text-center underline underline-offset-4"
      id="spectrum"
    >
      Spectrum of Services
    </div>

    <div className="py-5 justify-items-center">
      <div className="container">
        <div className="row hidden-md-up">
          <div className="col-md-6">
            <div className="card" style={{ height: "280px" }}>
              <div className="card-block m-2">
                <h4
                  className="card-title text-3xl"
                  style={{ color: "#00538C" }}
                >
                  <b> Audit and Assurance</b>
                </h4>

                <p className="card-text p-y-1 text-lg m-4">
                  <ul className="list-disc">
                    <li> Audit under different law</li>
                    <li>Management/Internal Audit</li>
                    <li>System Audit</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card" style={{ height: "280px" }}>
              <div className="card-block m-2">
                <h4
                  className="card-title text-3xl"
                  style={{ color: "#00538C" }}
                >
                  <b> Consultancy, Compliance and Litigation</b>
                </h4>

                <p className="card-text p-y-1 text-lg m-4">
                  <ul className="list-disc">
                    <li> Direct Tax</li>
                    <li>Indirect Tax</li>
                    <li>Transfer Pricing & International Taxation</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
        <br></br>
        <div className="row">
          <div className="col-md-6">
            <div className="card" style={{ height: "280px" }}>
              <div className="card-block m-2">
                <h4
                  className="card-title text-3xl"
                  style={{ color: "#00538C" }}
                >
                  <b>Business Support and Outsourcing</b>
                </h4>

                <p className="card-text p-y-1 text-lg m-4">
                  <ul className="list-disc">
                    <li> Virtual CFO Service </li>
                    <li> Outsourcing Service</li>
                    <li> Fund Raising</li>
                    <li> Transaction Advisory </li>
                    <li> Accounting Advisory</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card" style={{ height: "280px" }}>
              <div className="card-block m-2">
                <h4
                  className="card-title text-3xl"
                  style={{ color: "#00538C" }}
                >
                  <b> Presence in Evolving areas</b>
                </h4>

                <p className="card-text p-y-1 text-lg m-4">
                  <ul className="list-disc">
                    <li>Corporate Restructuring</li>
                    <li>RERA</li>
                    <li>Forensic Audit</li>
                    <li>Business Valuation</li>
                    <li>Start-up </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Audit;
