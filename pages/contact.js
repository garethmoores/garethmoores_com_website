import React from 'react';
import { withRouter } from 'next/router';
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import PageBody from "../components/PageBody";
import { MobileBarBottom, MobileBarTop } from "../components/MobileBar";
import Link from "next/link";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name_input: '', email_input: '', desc_input: '', }
    {/* Call the email valid to start to prevent an ugly error before the user can attempt to fill out the field. */}
    this.state.emailValid = true;
    this.state.formSubmitted = false;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  };

  handleSubmit = async event => {
    const API_URL = 'https://sj3th9dltj.execute-api.us-east-1.amazonaws.com/sendEmail';

    event.preventDefault();

    if (this.state.emailValid) {
      await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({name: this.state.name_input, email: this.state.email_input, desc: this.state.desc_input})
      })
        .then(handleErrors)
        .then(() => this.state.formSubmitted = true)
        .catch(
          function () {
            alert("Cannot submit contact form. Please contact administrator at admin@garethmoores.com")
          });
    }

    function handleErrors(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    }
  };

  handleChange = event => {
    let name = event.target.name;
    let value = event.target.value;

    if (name === "email_input") {
      if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        this.setState({emailValid: true})
      } else {
        this.setState({emailValid: false})
      }
    }

    this.setState({[name]: value});
  }

  render() {
    const textTitleClass = "uppercase text-base text-gray-600 font-bold";
    const textInputClass = "w-full bg-gray-300 text-gray-900 mt-2 mb-6 p-3 rounded-lg focus:outline-none focus:bg-blue-200 focus:border-grey-500";
    const submitButtonClass = "uppercase text-sm font-bold tracking-wide bg-blue-800 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:bg-indigo-400";

    let emailInputClass;
    if (this.state.emailValid) {
      emailInputClass = "w-full bg-gray-300 text-gray-900 mt-2 mb-6 p-3 rounded-lg focus:outline-none focus:bg-blue-200 focus:border-grey-500";
    } else {
      emailInputClass = "w-full bg-red-300 text-gray-900 mt-2 mb-6 p-3 rounded-lg focus:outline-none focus:bg-blue-200 focus:border-grey-500";
    }

    if (this.state.formSubmitted) {
      return (
        <Layout title="GarethMoores.com: Thank-You" description="GarethMoores.com: Thank-You">
          <MobileBarTop/>
          <Sidebar/>
          <PageBody title="Thank-you for submitting the form.">
            <Link href="/">
              <a className="text-xl">
                Return Home
              </a>
            </Link>
          </PageBody>
          <MobileBarBottom />
        </Layout>
      )
    } else {
      return (
        <Layout title="GarethMoores.com: Contact Me" description="GarethMoores.com: Contact Me">
          <MobileBarTop/>
          <Sidebar/>
          <PageBody title="Contact Me">
            <p className="font-bold text-6xl">Contact Form is not currently working!!!!!</p>

            <form id="contact-form" method="post" onSubmit={this.handleSubmit}>
              <label className={textTitleClass} htmlFor="name-input">Name:</label>
              <input className={textInputClass} onBlur={this.handleChange} type="text" id="name-input" name="name_input"
                     placeholder="Enter name" required/>
              <br/>

              <label className={textTitleClass} htmlFor="email-input">Email:</label>
              <input className={emailInputClass} onBlur={this.handleChange} type="text" id="email-input"
                     name="email_input" placeholder="Enter email" required/>
              {
                this.state.emailValid
                  ? <div>&nbsp;</div>
                  : <div className="font-bold text-sm text-red-600">Email is not valid</div>
              }
              <br/>

              <label className={textTitleClass} htmlFor="desc-input">How can I help you?</label>
              <textarea className={textInputClass} onBlur={this.handleChange} id="desc-input" name="desc_input" rows="3"
                        placeholder="Enter your message" required/>
              <br/>

              <button type="submit" className={submitButtonClass}>
                Send Message
              </button>
            </form>
          </PageBody>
          <MobileBarBottom/>
        </Layout>
      )
    }
  };
}

export default Contact;