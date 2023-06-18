import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-6 mb-6 relative text-center">
        <div className="text-center w-full justify-items-center ">
          <div className="text-4xl  underline underline-offset-4">
            Industries we serve
          </div>

          <br />
          <p className="text-xl">
            Leadership of Subject expert's has given us the opportunity to cater
            to a wide range of industries.
          </p>
        </div>
      </div>

      <br />

      <br />

      {clients.map((client) => (
        <div
          key={client.id}
          className={`flex-1 ${styles} sm:min-w-[192px] min-w-[120px] m-5 bg-neutral-100 p-2 rounded-lg`}
        >
          <img
            src={client.logo}
            alt="client_logo"
            className="sm:w-[192px] w-[100px] object-contain"
          />

          <p
            className="text-black mb-2"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-end",
              marginTop: "10px",
            }}
          >
            {client.id.charAt(0).toUpperCase() + client.id.slice(1)}{" "}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
