import React, { useState, useEffect } from "react";

import validator from "validator";

const Profile = () => {
  var [address, setAddress] = useState("");
  var [name, setName] = useState("");
  var [email, setEmail] = useState("");
  const [address1, setAddress1] = useState("");
  const [name1, setName1] = useState("");
  const [email1, setEmail1] = useState("");
  const [emailError, setEmailError] = useState("");
  const [point, setEarnedPoint] = useState([]);
  const [code, setCode] = useState("");
  var [pointUpdate, setEarnedPointUpdate] = useState("");

  const getInfo = async (e) => {
    try {
      const id = JSON.parse(localStorage.getItem("ID"));
      const response = await fetch(`http://localhost:5001/Profile-info/${id}`);
      const jsonData = await response.json();
      setAddress1(jsonData.address);
      setName1(jsonData.name);
      setEmail1(jsonData.email);
      setEarnedPoint(jsonData.points);

    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    getInfo();
  });
  useEffect(() => 
    getInfo(), [pointUpdate]
  );

  

//   const getPoint = async (e) => {
//     try {
//       const id = JSON.parse(localStorage.getItem("ID"));
//       const response = await fetch(`http://localhost:5001/Profile/${id}`);
//       const jsonData = await response.json();
//       setEarnedPoint(jsonData);
//     } catch (err) {
//       console.log(err.message);
//     }
//   };
 
//   useEffect(() => {
//     getPoint();
//   }, []);

  async function redeem(e) {

        try {

            const id = JSON.parse(localStorage.getItem("ID"));
            const body = { code, id };
            const response = await fetch(`http://localhost:5001/Profile-redeem`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            const jsonData = await response.json();
            if (jsonData === "Redeemed") {
                alert("Thank you for your business.");
                setEarnedPointUpdate(pointUpdate+1);
            } else {
                alert("Invalid code. Please try different one.");
            }
        } catch (err) {
            console.log(err.message);
        }
    }

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const id = JSON.parse(localStorage.getItem("ID"));
      if (name === "") {
        name = name1;
      }
      if (email === "") {
        email = email1;
      }
      if (address === "") {
        address = address1;
      } else {
      }

      if (validator.isEmail(email)) {
        setEmailError("");
      } else {
        setEmailError("Not Valid Email");
        return;
      }
      const body = { address, name, email, id };
      const response = await fetch(`http://localhost:5001/Profile-edit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const jsonData = await response.json();
      if (jsonData === "updated") {
        alert("Changes Completed");
      } else if (jsonData === "Existed Email") {
        alert("Please choose another email.");
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div class="res-background">
      <h1 class="title-res">Edit</h1>

      <form class="res-form" onSubmit={submitForm}>
        <label id="name-label" for="name">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          class="form1"
          placeholder={name1}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label id="email-label" for="email">
          Email
        </label>
        <br></br>
        <input
          type="text"
          class="form1"
          name="email"
          placeholder={email1}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <span
          style={{
            fontWeight: "bold",
            color: "red",
          }}
        >
          {emailError}
        </span>
        <label id="address-label" for="address">
          Address
        </label>
        <br></br>
        <input
          type="text"
          name="address"
          id="address"
          class="form1"
          style={{ width: "30%" }}
          placeholder={address1}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <label id="earnPoint" for="earnPoint">
          Earned Point
        </label>
        
        <input
          type="text"
          name="address"
          id="address"
          class="form1"
          placeholder={point}
          readOnly
        />
        <label id="redeemCode" for="redeemCode">
          Redeem Your Point here
        </label>
        <br></br>
        <input
          type="text"
          name="code"
          id="code"
          class="form1"
          value = {code}
          onChange={e=>setCode(e.target.value)}
          placeholder="Enter your code here"
        />
        <button type="button" class="btn-submit" style={{width: "9%"}} onClick={() => redeem()}> Redeem</button>
        <div>
          <button type="submit" class="btn-submit">
            Submit Changes
          </button>
        </div>
      </form>
    </div>
  );
};
export default Profile;
