import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

const Contact = () => {
  const [user, setUser] = useState({
    firstName:"",lastName:"",phone:"",email:"",address:"",message:""
  });
  let name,value;
  const handleInputs=(e)=>{
      console.log(e);
      name=e.target.name;
      value=e.target.value;

      setUser({...user,[name]:value});
  }
  const History = useHistory()
const PostData=async(e)=>{
  e.preventDefault();
  const { firstName, lastName, phone, email, address, message } = user;

  const res = await fetch("http://localhost:3000/Contact", {
      method: "POST",
      headers: {
          "Content-Type":"application/json"
      },
      body:JSON.stringify({
          firstName, lastName, phone, email, address, message

      })
  });
  const data = res.json()
  if(res.status === 400 || !data)
  {
      alert("Please Fill Data")
  }
  else if(res.status === 200)
  {
      alert("Message received succesfully.We will contact you soon....")
      // window.Location = "/"
      History.push("/");
  }
}

    //   if (res) {
    //     setUserData({
    //       firstName: "",
    //       lastName: "",
    //       phone: "",
    //       email: "",
    //       address: "",
    //       message: "",
    //     });
    //     alert("Message received successfully.We will Contact you soon");
    //     window.location = "/";
    //   } else {
    //     alert("Please complete the form before submitting");
    //   }
    // } else {
    //   alert("Please complete the form before submitting");
    // }
  // };

  return (
    <>
      <section className="contactus-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="contact-leftside col-12 col-lg-5">
                  <h1 className="main-heading fw-bold">
                    Connect With Our <br /> Support Team.
                  </h1>
                  <p className="main-hero-para">
                    Contact us if you have any complain or suggestion.We are happy to hear from you.
                  </p>
                  <figure>
                    <img
                      src="./images/gg.jpg"
                      alt="contatUsImg"
                      className="img-fluid"
                    />
                  </figure>
                </div>

                {/* right side contact form  */}
                <div className="contact-rightside col-12 col-lg-7">
                  <form method="POST">
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="firstName"
                          id=""
                          className="form-control"
                          placeholder="First Name"
                          required="required"
                          value={user.firstName}
                          onChange={handleInputs}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="lastName"
                          id=""
                          className="form-control"
                          placeholder="Last Name"
                          required="required"
                          value={user.lastName}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="phone"
                          id=""
                          className="form-control"
                          placeholder="Phone Number "
                          required="required"
                          value={user.phone}
                          onChange={handleInputs}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="email"
                          id=""
                          className="form-control"
                          placeholder="Email ID"
                          required="required"
                          value={user.email}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 contact-input-feild">
                        <input
                          type="text"
                          name="address"
                          id=""
                          className="form-control"
                          placeholder="Add Address"
                          required="required"
                          value={user.address}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 ">
                        <input
                          type="text"
                          name="message"
                          id=""
                          className="form-control"
                          placeholder="Enter Your Message"
                          required="required"
                          value={user.message}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
                    <div class="form-check form-checkbox-style">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        class="form-check-label"
                        className="main-hero-para">
                        I agree that Sagacity may contact me at the
                        email address or phone number above
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-style w-100"
                      onClick={PostData}>
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
