import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import PasswordChecklist from "react-password-checklist";
import axios from "axios";

function PatientSignup() {
  const [validated, setValidated] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [formData, setFormData] = useState();
  const [success, setSucess] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // validate form
    setSelectedDate(selectedDate);
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);

    // data sent without form validaion
    axios
      .post("http://localhost:3001/signup/patient", formData)
      .then((response) => console.log(response))
      .then(setSucess(true))
      .catch((error) => console.log(error));
  };

  return (
    <>
      {success ? (
        <section>
          <h1>Patient Registration completed</h1>
          <p>
            <a href="/login">Login</a>
          </p>
        </section>
      ) : (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="name"
              required
              type="text"
              placeholder="Enter your name"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              onChange={(e) => setPasswordAgain(e.target.value)}
              required
              type="password"
              placeholder="Enter password"
            />
            <PasswordChecklist
              rules={["minLength", "specialChar", "number", "capital", "match"]}
              minLength={5}
              value={password}
              valueAgain={passwordAgain}
              onChange={(isValid) => {
                if (isValid) {
                  setFormData({
                    ...formData,
                    password: password,
                  });
                }
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="address"
              required
              type="text"
              placeholder="Manik Chowk, 226002, Jaunpur, UP"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="phone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="phone"
              required
              type="tel"
              placeholder="+91 XXXXXXXXXX"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="email"
              required
              type="email"
              placeholder="youremail@service.com"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="blood">
            <Form.Label>Blood Group</Form.Label>
            {/* <DatalistInput
              placeholder="Click here to select"
              items={[
                { id: "1", value: "O+" },
                { id: "2", value: "O-" },
                { id: "3", value: "A+" },
                { id: "4", value: "A-" },
                { id: "5", value: "B+" },
                { id: "6", value: "B-" },
                { id: "7", value: "AB+" },
                { id: "8", value: "AB-" },
              ]}
              onSelect={(item) => {
                setFormData({
                  ...formData,
                  type: item.value,
                });
              }}
            /> */}
            <Form.Select onChange={handleChange} name="blood" required>
              <option>Open this select menu</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="gender">
            <Form.Label>Gender</Form.Label>
            {/* <DatalistInput
              placeholder="Click here to select"
              items={[
                { id: "1", value: "Male" },
                { id: "2", value: "Female" },
                { id: "3", value: "Other" },
              ]}
              onSelect={(item) => {
                setFormData({
                  ...formData,
                  type: item.value,
                });
              }}
            /> */}
            <Form.Select onChange={handleChange} name="gender" required>
              <option>Open this select menu</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="dob">
            <Form.Label>Date of birth</Form.Label>
            <Form.Control
              name="date_estb"
              onChange={handleChange}
              required
              type="date"
              placeholder="dd/mm/yyyy"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Create Account
          </Button>
        </Form>
      )}
    </>
  );
}

export default PatientSignup;
