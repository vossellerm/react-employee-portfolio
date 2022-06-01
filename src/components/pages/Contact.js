import React, { useState } from "react";

import { validateEmail } from "../../utils/helpers";

export default function Contact() {
  // check name input for valid entry (text), throw error/message to client
  // check email input for valid entry (email), throw error/message to client
  // check message input for valid entry (text), throw error/message to client

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
      <h1>Contact</h1>
      <div class="w-50 p-3">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Name
          </label>
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Name"
          ></input>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Email address
          </label>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          ></input>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Message
          </label>
          <textarea
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div class="mb-3">
          <button
            type="submit"
            class="btn btn-primary mb-3"
            onClick={handleFormSubmit}
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
