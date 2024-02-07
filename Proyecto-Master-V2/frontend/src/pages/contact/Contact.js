import React, { useState } from "react";
import Card from "../../components/card/Card";
import "./Contact.scss";
import { FaPhoneAlt, FaEnvelope, FaTwitter } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { toast } from "react-toastify";
import axios from "axios";
import { BACKEND_URL } from "../../services/authService";

const Contact = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const data = {
    subject,
    message,
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BACKEND_URL}/api/contactus`, data);
      setSubject("");
      setMessage("");
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="contact">
      <h3 className="--mt">Contactanos</h3>
      <div className="section">
        <form onSubmit={sendEmail}>
          <Card cardClass="card">
            <label>Asunto</label>
            <input
              type="text"
              name="subject"
              placeholder="Asunto"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <label>Mensaje</label>
            <textarea
              cols="30"
              rows="10"
              name="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button className="--btn --btn-primary">Enviar Mensaje</button>
          </Card>
        </form>

        <div className="details">
          <Card cardClass={"card2"}>
            <h3>Información de contacto</h3>
            <p>Rellene el formulario o póngase en contacto con nosotros a través de los canales que se indican a continuación</p>

            <div className="icons">
              <span>
                <FaPhoneAlt />
                <p>+5930939930962</p>
              </span>
              <span>
                <FaEnvelope />
                <p>drvaldiviezo2@espe.edu.ec</p>
              </span>
              <span>
                <GoLocation />
                <p>Quito, Ecuador</p>
              </span>
              <span>
                <FaTwitter />
                <p>@Paola</p>
              </span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
