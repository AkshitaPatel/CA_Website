import { theme } from "../constants";

const FeedbackCard = ({ name, surname, title, img, inpractise, content }) => (
  // <div class="card-deck">
  <div className="card">
    <div className="w-full p-3 overflow-hidden h-60">
      <img
        className="card-img-top object-cover object-top"
        src={img}
        alt="Card image cap"
      />
    </div>
    <div className="card-body">
      <h2 className="card-title font-bold text-3xl" style={theme}>
        {name} <br />
        {surname}
      </h2>
      <p className="font-semibold text-lg">{title}</p>
      <br />
      <p className="card-text">{content}</p>
      <br />

      <p className="card-text">Inpractice since {inpractise}</p>
    </div>
  </div>

  // </div>
);

// const FeedbackCard = ({ content, name, title, img }) => (
//   <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
//     <img src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" />
//     <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
//       {content}
//     </p>

//     <div className="flex flex-row">
//       <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
//       <div className="flex flex-col ml-4">
//         <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
//           {name}
//         </h4>
//         <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
//           {title}
//         </p>
//       </div>
//     </div>
//   </div>
// );

export default FeedbackCard;
