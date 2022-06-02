import React, { useState } from "react";

import { validateEmail } from "../../utils/helpers";

const styles = {
  button: {
    backgroundColor: "#c9a8f1",
    color: "#381155",
    border: "none",
  },
};

export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      setErrorMessage("Name is required");
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage("Enter valid email");
      return;
    }

    if (!message) {
      setErrorMessage("Message is required");
      return;
    }

    setName("");
    setMessage("");
    setEmail("");
  };

  return (
    <div>
      <h1 className="my-4 ms-5">Contact</h1>
      <div className="w-50 ms-5">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Name
          </label>
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Message
          </label>
          <textarea
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={3}
          />
        </div>
        <div className="mb-3">
          <button
            type="submit"
            className="btn btn-primary mb-3"
            onClick={handleFormSubmit}
            style={styles.button}
          >
            Submit
          </button>
        </div>
      </div>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
