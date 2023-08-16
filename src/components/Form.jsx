import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Form = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_4fnjgd2", "template_u4r751n", form.current, "ZfxL87xtNMulaYL8-").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div className="container">
      <form ref={form} onSubmit={sendEmail} className="form">
        <label>Name</label>
        <input type="text" name="name" />
        <label>Email</label>
        <input type="email" name="email" />
        <label>Message</label>
        <textarea name="message" />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Form;