import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  // form state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const inputEl = [
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
      navigate("/profile"); // ✅ go to login page
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

        <div className="regBtn">
          <button type="submit" className="btn btn1">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
