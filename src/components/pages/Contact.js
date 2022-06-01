import React from "react";

import { validateEmail } from "../../utils/helpers";

export default function Contact() {
  // check name input for valid entry (text), throw error/message to client

  // check email input for valid entry (email), throw error/message to client

  // check message input for valid entry (text), throw error/message to client

  return (
    <div>
      <h1>Contact</h1>
      <div class="w-50 p-3">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Name
          </label>
          <input
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
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div class="mb-3">
          <button type="submit" class="btn btn-primary mb-3">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
