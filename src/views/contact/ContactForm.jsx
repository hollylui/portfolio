//Source: https://www.flaticon.com/authors/phoenix-group
import message from "../../assets/image/contact/message.png";
import { useContext } from "react";
import FormContext from "../../context/FormContext";

const ContactForm = () => {
  //! context----------------------
  const {
    formName,
    setFormName,
    formEmail,
    setFormEmail,
    formMessage,
    setFormMessage,
  } = useContext(FormContext);

  //! callback ------------------------
  const formNameHandler = (e) => {
    setFormName(e.target.value);
  };

  const formEmailHandler = (e) => {
    setFormEmail(e.target.value);
  };

  const formMessageHandler = (e) => {
    setFormMessage(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    setFormName("");
    setFormEmail("");
    setFormMessage("");
  };

  //! rendering -----------------------
  return (
    <form action="" onSubmit={formSubmitHandler}>
      <div className="contactImg  ">
        <img src={message} alt="message logo" />
      </div>
      <div className="title">Message Me</div>

      {/* name ----------------------- */}
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formName}
        onChange={formNameHandler}
      />

      {/* email ----------------------- */}
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formEmail}
        onChange={formEmailHandler}
      />

      {/* message --------------------- */}
      <label htmlFor="message">Message</label>
      <textarea
        name="message"
        id="message"
        cols="30"
        rows="5"
        value={formMessage}
        onChange={formMessageHandler}
      ></textarea>

      <button>Send</button>
    </form>
  );
};

export default ContactForm;
