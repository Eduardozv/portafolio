import React, { useState } from "react";
import axios from 'axios';
import texts from '../../data/Home/home-text.json';
import LoadingSpinner from "../KinderGarden/LoadingSpinner";

const RequestJobForm = () => {
  const [inputs, setInputs] = useState({
      // name: "Testing",
      // lastname: "Miennie",
      // ci: "0952348808",
      // age: 4,
      // address: "av gonalo ramirez 1971",
      // telContacto: '095123408',
      // referencia: "experiencia propia",
      // email: "eduardouozv@gmail.com"
  });

  const [isSending, setIsSending] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = (event) => {
    setIsSending(true);
    setResponseMessage("");
    // setInputs({ ...inputs, "message": encodeURIComponent("Buenas,\n&nbsp;%20Mi&nbsp;+++nombre es "+inputs.message).replace(/%20/g, '+')})
    // setInputs({ ...inputs, "message": "Buenas,\nMi nombre es "+inputs.message})
    // encodeURIComponent(inputs.message).replace(/%20/g, '+')
    // axios.post('https://miennielanndie.edu.uy/helloworld.php')
    // .then(response => console.log("POST resp:"+response) )
    // .catch(error => {
    //     // element.parentElement.innerHTML = `Error: ${error.message}`;
    //     console.error('There was an error!', error);
    // });
    let body = "Buenas,\nMe gustaría postularme.\n\nMis datos son:\n\n";
    body += "Nombre: "+inputs.name+"\n";
    body += "Apellido: "+inputs.lastname+"\n";
    body += "CI: "+inputs.ci+"\n";
    body += "Edad: "+inputs.age+"\n";
    body += "Domicilio: "+inputs.address+"\n";
    body += "Teléfono de contacto: "+inputs.telContacto+"\n";
    body += "Persona o Institución de Referencia: "+inputs.referencia+"\n";
    // window.location = "mailto:"+texts.emailRequestJob+"?subject=[Postulación] "+inputs.name+" "+inputs.lastname+"&body="+body;
    setInputs({ ...inputs, "message": body})
    let bodyFormData = new FormData();
    bodyFormData.append('email', inputs.email);
    bodyFormData.append('subject', "[Postulación] "+inputs.name+" "+inputs.lastname);
    bodyFormData.append('message', body);
    bodyFormData.append('form-type', "requestJobForm");
    
    // window.location = "mailto:"+texts.emailInscriptions+"?subject=[Inscripción] "+inputs.name+"&body="+body;
    axios({ 
      method: 'POST', 
      url: 'https://miennielanndie.edu.uy/mailhandler.php', 
      data: bodyFormData, 
      headers: { "Content-Type": "multipart/form-data" }
    })
    .then(response => {
      console.log("POST resp:");
      console.log({response});
      setIsSending(false);
      setResponseMessage("Se envío correctamente");
      setInputs({
        name: "",
        lastname: "",
        age: "",
        ci: "",
        address: "",
        telContacto: "",
        referencia: "",
        email: ""
      });
    } )
    .catch(error => {
      // element.parentElement.innerHTML = `Error: ${error.message}`;
        setResponseMessage("Hubo un error en el envío. Intentar de nuevo");
        console.error('There was an error!', error);
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
          <div 
            data-aos-delay={300}
            data-aos={"fade-right"}
            data-aos-duration={700} >
            <h1 className="title-font" style={{ color: "rgb(126 189 134)"}}>
              Postúlate
            </h1>
            <h3 className="title-font subtitle-font-size" style={{ color: "rgb(126 189 134)"}} >
              para los próximos llamados laborales
            </h3>
          </div>
          <br />
          <br />
          <br />
          <br />
          {texts.postulateTxt1.map( (t, index) => 
            <p key={index}  className="content-font" style={{ fontSize: '15px', textAlign: 'left'}} >{t}</p>
            )}
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
                type="text"
                name="lastname"
                className="form-control"
                id="lastname"
                required="required"
                placeholder="Your Name"
                data-error="Your Name is Required"
                value={inputs.lastname}
                onChange={handleInputChange}
              />
              <label htmlFor="lastname">Apellido</label>
              <div className="help-block with-errors mt-20"></div>
            </div>

            <div className="form-floating">
              <input
                type="number"
                name="ci"
                className="form-control"
                id="ci"
                placeholder="Your Email"
                required="required"
                data-error="Please Enter Valid Email"
                value={inputs.ci}
                onChange={handleInputChange}
              />
              <label htmlFor="ci">CI</label>
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
                type="text"
                name="address"
                className="form-control"
                id="address"
                placeholder="Your Subject"
                value={inputs.address}
                onChange={handleInputChange}
              />
              <label htmlFor="address">Dirección</label>
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
            <div className="form-floating">
              <input
                type="text"
                name="referencia"
                className="form-control"
                id="referencia"
                placeholder="Your Subject"
                value={inputs.referencia}
                onChange={handleInputChange}
              />
              <label htmlFor="referencia">Persona o Institución de Referencia</label>
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
            <input id="form-type" name="form-type" type="hidden" value="requestJobForm" />
            <input id="subject" name="subject" type="hidden" value={"[Postulación] "+inputs.name+" "+inputs.lastname} />
            <input id="message" name="message" type="hidden" value={inputs.message} />
            {!isSending ? <button type="submit" className="btn btn-color btn-circle">
              Enviar
            </button>
            : <LoadingSpinner />}
            <p style={{ color: 'green', marginTop: '20px' }}>{responseMessage}</p>

          </form>
        </div>
      </div>
    </div>
  </section>
    
  );
};

export default RequestJobForm;
