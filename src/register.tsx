import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const RegisterPage = () => {
  const navigate = useNavigate();

  // form state
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    email: "",
    password: "",
    companyName: "",
    agency: "",
  });

  const inputEl = [
    {
      id: 1,
      type: "text",
      label: "Full Name",
      nameId: "fullname",
      placeholder: "Marry Doe",
    },
    {
      id: 2,
      label: "Phone Number",
      type: "number",
      nameId: "phone",
      placeholder: "+91 xxxxxxxxx",
    },
    {
      id: 3,
      label: "Email",
      type: "email",
      nameId: "email",
      placeholder: "marry@gmail.com",
    },
    {
      id: 4,
      label: "Password",
      type: "password",
      nameId: "password",
      placeholder: "********",
    },
    {
      id: 5,
      label: "Company Name",
      type: "text",
      nameId: "companyName",
      placeholder: "Microsoft..",
    },
  ];

  // handle input change
  const handleChange = (e) => {
    setFormData(
        { ...formData, 
            [e.target.name]: e.target.value 
        }
    );
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // check if all fields are filled
    const allFilled = Object.values(formData).every((val) => val.trim() !== "");

    if (allFilled) {
      navigate("/login"); // ✅ go to login page
    } else {
      alert("⚠️ Please fill all fields before continuing.");
    }

    console.log(formData);
  };

  return (
    <div className="register">
      <h1>Create your PopX account</h1>
      <form onSubmit={handleSubmit}>
        {inputEl.map((item) => (
          <div key={item.id} className="input-group">
            <label className="inpLabel" htmlFor={item.nameId}>
              {item.label} <span>*</span>
            </label>
            <input
              className="inp"
              type={item.type}
              name={item.nameId}
              id={item.nameId}
              placeholder={item.placeholder}
              value={formData[item.nameId]}
              onChange={handleChange}
              required
            />
          </div>
        ))}

        {/* radio buttons */}
        <div className="radio-group">
          <p>Are you an Agency?</p>
          <label>
            <input
              type="radio"
              name="agency"
              value="yes"
              checked={formData.agency === "yes"}
              onChange={handleChange}
            />
            Yes
          </label>

          <label>
            <input
              type="radio"
              name="agency"
              value="no"
              checked={formData.agency === "no"}
              onChange={handleChange}
            />
            No
          </label>
        </div>

        <div className="regBtn">
          <button type="submit" className="btn btn1">
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
