import React from "react";
import "./Form.css";

export default function Form() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true,
    employment: "",
    favColor: "",
  });
  // console.log(formData);
  // console.log(formData.employment);
  // console.log(formData.favColor);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setFormData((prevForm) => {
      return {
        ...prevForm,
        // [event.target.name]: event.target.value,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        name="firstName"
        value={formData.firstName}
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
        name="lastName"
        value={formData.lastName}
      />
      <input
        type="email"
        placeholder="E-mail"
        onChange={handleChange}
        name="email"
        value={formData.email}
      />
      <textarea
        placeholder="Comments"
        onChange={handleChange}
        name="comments"
        value={formData.comments}
      />
      <div className="checkbox">
        <input
          type="checkbox"
          id="isFriendly"
          checked={formData.isFriendly}
          onChange={handleChange}
          name="isFriendly"
        />
        <label htmlFor="isFriendly">Are you friendly ?</label>
      </div>
      <br />

      <fieldset>
        <legend>Current employment status</legend>
        <div className="radio-flex">
          <input
            type="radio"
            id="unemployed"
            name="employment"
            value="unemployed"
            checked={formData.employment === "unemployed"}
            onChange={handleChange}
          />
          <label htmlFor="unemployed">Unemployed</label>
        </div>
        <div className="radio-flex">
          <input
            type="radio"
            id="part-time"
            name="employment"
            value="part-time"
            checked={formData.employment === "part-time"}
            onChange={handleChange}
          />
          <label htmlFor="unemployed">Part-time</label>
        </div>
        <div className="radio-flex">
          <input
            type="radio"
            id="full-time"
            name="employment"
            value="full-time"
            checked={formData.employment === "full-time"}
            onChange={handleChange}
          />
          <label htmlFor="unemployed">Full-time</label>
        </div>
      </fieldset>
      <br />
      <label>What is your favourite color?</label>
      <br />
      <br />
      <select
        id="favColor"
        value={formData.favColor}
        onChange={handleChange}
        name="favColor"
      >
        <option value="">-- Choose --</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>
      <br />
      <br />
      <button>Submit</button>
    </form>
  );
}
