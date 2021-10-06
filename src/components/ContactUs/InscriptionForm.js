import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';

import LoadingSpinner from '../KinderGarden/LoadingSpinner';
import texts from '../../data/Home/home-text.json';

const InscriptionForm = () => {
  const history = useHistory();
  const [inputs, setInputs] = useState({
    // name: "Testing",
    // email: "eduardouozv@gmail.com",
    // age: 4,
    // fechaNac: "2017-04-01",
    // horarioHijoInicio: "08:00",
    // horarioHijoFin: "09:00",
    // telContacto: "0952349239",
    // horarioContactoInicio: "22:00",
    // horarioContactoFin: "22:00"
  });

  const [isSending, setIsSending] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = (event) => {
    setIsSending(true);
    // setInputs({ ...inputs, "message": encodeURIComponent("Buenas,\n&nbsp;%20Mi&nbsp;+++nombre es "+inputs.message).replace(/%20/g, '+')})
    // encodeURIComponent(inputs.message).replace(/%20/g, '+')
    let body = "Buenas,\nMe gustaría inscribirme.\n\nMis datos son:\n\n";
    body += "Nombre completo del niño/niña: "+inputs.name+"\n";
    body += "Edad: "+inputs.age+"\n";
    body += "Fecha de nacimiento: "+inputs.fechaNac+"\n";
    body += "Horario en el que deseas que concurra tu hijo/a: "+inputs.horarioHijoInicio+" a "+inputs.horarioHijoFin+"\n";
    body += "Teléfono al que quieres que te contactemos: "+inputs.telContacto+"\n";
    body += "Horario en el que prefieres que te contactemos: "+inputs.horarioContactoInicio+" a "+inputs.horarioContactoFin+"\n";
    body += "Mail donde quieres recibir nuestra información: "+inputs.email+"\n";
    
    setInputs({ ...inputs, "message": body});

    let bodyFormData = new FormData();
    bodyFormData.append('email', inputs.email);
    bodyFormData.append('subject', "[Inscripción] "+inputs.name);
    bodyFormData.append('message', body);
    bodyFormData.append('form-type', "inscriptionForm");
    
    // window.location = "mailto:"+texts.emailInscriptions+"?subject=[Inscripción] "+inputs.name+"&body="+body;
    axios({ 
      method: 'POST', 
      url: 'https://miennielanndie.edu.uy/mailhandler.php', 
      data: bodyFormData, 
      headers: { "Content-Type": "multipart/form-data" }
    }).then(response => {
      console.log("POST resp:");
      console.log({response});
      setIsSending(false);
      setResponseMessage("Se envío correctamente");
      setInputs({
        name: "",
        email: "",
        age: "",
        fechaNac: "",
        horarioHijoInicio: "",
        horarioHijoFin: "",
        telContacto: "",
        horarioContactoInicio: "",
        horarioContactoFin: ""
      });
     } )
    .catch(error => {
        // element.parentElement.innerHTML = `Error: ${error.message}`;
        console.error('There was an error!', error);
        setResponseMessage("Hubo un error en el envío. Intentar de nuevo");
        setIsSending(false);
    });
    event.preventDefault();
    
  };

  return (
    <section className="contact-us">
    <div className="container">
      <div className="row">
        <div className="col-md-8 section-heading">
          {/* <ContactFormFive /> */}
          {/* <h5 style={{ textAlign: 'left', fontStyle: 'italic', textDecoration: 'underline'}}>Agregar Nueva Solicitud </h5> */}
          <h3
            className="title-font subtitle-font-size"
            data-aos-delay={300}
            data-aos={"fade-right"}
            data-aos-duration={700}
            style={{ textAlign: 'left', fontStyle: 'italic', textDecoration: 'underline', color: "rgb(23 90 194)" }}
          >
            Agregar Nueva Solicitud
          </h3>
          <br />
          <form
            onSubmit={(event) => handleSubmit(event)}
            // name="contact-form"
            id="contact-form"
            // action={""}
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
                onInvalid="this.setCustomValidity('Please Enter valid email')"
 onInput="setCustomValidity('')"
                value={inputs.name}
                onChange={handleInputChange}
              />
              <label htmlFor="name">Nombre del niño/niña</label>
              <div className="help-block with-errors mt-20"></div>
            </div>
            <div className="form-floating">
              <input
                type="number"
                name="age"
                className="form-control"
                id="age"
                placeholder="Your Email"
                required="required"
                data-error="Please Enter Valid Email"
                value={inputs.age}
                onChange={handleInputChange}
              />
              <label htmlFor="age">Edad</label>
              <div className="help-block with-errors mt-20"></div>
            </div>
            <div className="form-floating">
              <input
                type="date"
                name="fechaNac"
                className="form-control"
                id="fechaNac"
                placeholder="Your Subject"
                required="required"
                value={inputs.fechaNac}
                onChange={handleInputChange}
              />
              <label htmlFor="fechaNac">Fecha de nacimiento</label>
            </div>
            <div className="row" >
              <label htmlFor="horarioHijo">Horario en el que deseas que concurra tu hijo/a</label>
              <div className="col-md-6 col-sm-6 form-floating ">
                <input
                  type="time"
                  // list="horarios-disponibles"
                  // min="15:19"
                  // max="15:20"
                  name="horarioHijoInicio"
                  className="form-control"
                  id="horarioHijoInicio"
                  placeholder="Your Subject"
                  value={inputs.horarioHijoInicio}
                  onChange={handleInputChange}
                  required
                />
                {/* <span class="validity"></span> */}
                <label htmlFor="horarioHijoInicio" style={{ padding: "1rem 1.75rem" }}>Inicio</label>
                {/* <select name="horarioHijo">
                <option label="07:00">09:00</option>

                <option label="08:00">09:00</option>

                <option label="09:00">09:00</option>
              </select> */}
              </div>
              <div className="col-md-6 col-sm-6 form-floating ">
                  <input
                    type="time"
                    // list="horarios-disponibles"
                    name="horarioHijoFin"
                    className="form-control"
                    id="horarioHijoFin"
                    placeholder="Your Subject"
                    value={inputs.horarioHijoFin}
                    onChange={handleInputChange}
                    required
                  />
                  <label htmlFor="horarioHijoFin" style={{ padding: "1rem 1.75rem" }}>Fin</label>
                </div>
            </div>
            <div className="form-floating">
              <input
                type="tel"
                name="telContacto"
                className="form-control"
                id="telContacto"
                placeholder="Your Subject"
                required="required"
                value={inputs.telContacto}
                onChange={handleInputChange}
              />
              <label htmlFor="telContacto">Teléfono de contacto</label>
            </div>
            <div className="row" >
              <label htmlFor="telContacto">Horario de contacto</label>
              <div className="col-md-6 col-sm-6 form-floating ">
                <input
                  type="time"
                  name="horarioContactoInicio"
                  className="form-control"
                  id="horarioContactoInicio"
                  placeholder="Your Subject"
                  value={inputs.horarioContactoInicio}
                  onChange={handleInputChange}
                />
                <label htmlFor="horarioContactoInicio" style={{ padding: "1rem 1.75rem" }}>Inicio</label>
              </div>
              <div className="col-md-6 col-sm-6 form-floating ">
                <input
                  type="time"
                  name="horarioContactoFin"
                      className="form-control"
                      id="horarioContactoFin"
                      placeholder="Your Subject"
                      value={inputs.horarioContactoFin}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="horarioContactoFin" style={{ padding: "1rem 1.75rem" }}>Fin</label>
                  </div>
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
              <label htmlFor="email">Email de contacto</label>
              <div className="help-block with-errors mt-20"></div>
            </div>
            <input id="form-type" name="form-type" type="hidden" value="inscriptionForm" />
            <input id="subject" name="subject" type="hidden" value={"[Inscripción] "+inputs.name} />
            <input id="message" name="message" type="hidden" value={inputs.message} />
            {!isSending ?
            <button type="submit" className="btn btn-color btn-circle">
              Enviar
            </button>
            : <LoadingSpinner />}
            <p style={{ color: 'green', marginTop: '20px' }}>{responseMessage}</p>
          </form>
          <datalist id="horarios-disponibles">

          

              </datalist>
        </div>
      </div>
    </div>
  </section>
    
  );
};

export default InscriptionForm;
