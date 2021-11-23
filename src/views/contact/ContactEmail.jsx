//Source: https://www.freepik.com
import email from "../../assets/image/contact/email.png";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ContactEmail = () => {
  return (
    <div className="email">
      <div className="contactImg ">
        <img src={email} alt="email logo" />
      </div>
      <div className="title">
        EMAIL <span>for</span>
      </div>

      <div className="offer">Request for Proposal</div>
      <div className="offer">All Opportunities</div>
      <div className="offer">All Cooperation</div>
      <div className="sendTo">You can send eamil to </div>

      {/* copy email addresss --------------------------- */}
      <CopyToClipboard text="hollylui@gmail.com">
        <span className="emailAddress" title="Click to copy">
          hollylui@gmail.com
        </span>
      </CopyToClipboard>
    </div>
  );
};

export default ContactEmail;
