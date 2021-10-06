import React, { useState } from "react";
import axios from 'axios';

const ContactFormKinderGarden = () => {
  const [inputs, setInputs] = useState({
    // name: "edu",
    // email: "eduardouozv@gmail.com",
    // subject: "asunto",
    // message: "Mensaje de relleno"
  });

  const [isSending, setIsSending] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = (event) => {
    // setInputs({ ...inputs, "message": encodeURIComponent("Buenas,\n&nbsp;%20Mi&nbsp;+++nombre es "+inputs.message).replace(/%20/g, '+')})
    setInputs({ ...inputs, "message": "Buenas,\nMi nombre es "+inputs.message})
    // encodeURIComponent(inputs.message).replace(/%20/g, '+')
    axios.post('https://miennielanndie.edu.uy/helloworld.php')
    .then(response => console.log("POST resp:"+response) )
    .catch(error => {
        // element.parentElement.innerHTML = `Error: ${error.message}`;
        console.error('There was an error!', error);
    });
    event.preventDefault();
  };

  return (
    <form
      onSubmit={(event) => handleSubmit(event)}
      // name="contact-form"
      id="contact-form"
      // action={"mailto:"+text.email+"?subject="+inputs.subject+"&body=Hola"}
      action="https://miennielanndie.edu.uy/helloworld.php"
      // action="https://miennielanndie.edu.uy/helloworld.php"
      // action={"mailto:"+text.email}
      method="POST"
      // enctype="text/plain"
    >
      <div className="messages"></div>
      <div className="form-floating">
        <input
          type="text"
          name="name"
          className="form-control"
          id="name"
          required="required"
          placeholder="Your Name"
          data-error="Your Name is Required"
          value={inputs.name}
          onChange={handleInputChange}
        />
        <label htmlFor="name">Nombre</label>
        <div className="help-block with-errors mt-20"></div>
      </div>
      <div className="form-floating">
        <input
          type="email"
          name="email"
          className="form-control"
          id="email"
          placeholder="Your Email"
          required="required"
          data-error="Please Enter Valid Email"
          value={inputs.email}
          onChange={handleInputChange}
        />
        <label htmlFor="email">Email</label>
        <div className="help-block with-errors mt-20"></div>
      </div>
      <div className="form-floating">
        <input
          type="text"
          name="subject"
          className="form-control"
          id="subject"
          placeholder="Your Subject"
          value={inputs.subject}
          onChange={handleInputChange}
        />
        <label htmlFor="subject">Asunto</label>
      </div>
      <div className="form-floating">
        <textarea
          name="message"
          className="form-control"
          id="message-input-simple"
          rows="7"
          placeholder="Your Message"
          required
          data-error="Please, Leave us a message"
          value={inputs.message}
          onChange={handleInputChange}
        ></textarea>
        <label htmlFor="message">Mensaje</label>
        <div className="help-block with-errors mt-20"></div>
      </div>
      <button type="submit" className="btn btn-color btn-circle">
      {/* <button type="submit" name="submit" className="btn btn-color btn-circle"> */}
        Enviar
      </button>
    </form>
  );
};

export default ContactFormKinderGarden;
