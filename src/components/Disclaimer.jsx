const Disclaimer = ({ onDismiss }) => {
  return (
    <div className="disclaimer rounded-lg z-10 p-4 md:w-1/2 mx-auto">
      <h1 className="text-center text-2xl mb-2">Disclaimer</h1>
      <p className="text-sm">
        The Institute of Chartered Accountants of India does not permit
        advertisement or solicitation by Chartered Accountants in any form or
        manner. By accessing this website, www.dsaandassociates.com, you
        acknowledge and confirm that you are seeking information relating to DSA
        & Associates on your own accord and that there has been no form of
        solicitation, advertisement or inducement by DSA & Associates or its
        partners or employees.
        <br />
        The contents of this website are for informational purposes only and
        should not be interpreted as soliciting or advertising. No information
        provided on this website should be used or construed as substitute of
        professional advice. DSA & Associates shall not be liable for
        consequences of any action taken by relying on the information provided
        on this website. It is recommended that the readers should take
        professional advice before acting on the same. The contents of this
        website are the intellectual property of DSA & Associates.
        {/* Add additional content and styling as needed */}
      </p>

      <div className="text-center mt-4">
        <button
          onClick={onDismiss}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          I agree
        </button>
      </div>
    </div>
  );
};

export default Disclaimer;
