import React from 'react';
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import PageBody from "../components/PageBody";
import { MobileBarBottom, MobileBarTop } from "../components/MobileBar";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name_input: '', email_input: '', desc_input: '', }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  };

  handleSubmit = async event => {
    const api_url = 'https://sj3th9dltj.execute-api.us-east-1.amazonaws.com/sendEmail';

    event.preventDefault();

    await fetch(api_url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: this.state.name_input,
        email: this.state.email_input,
        desc: this.state.desc_input,
      }),
    })
      .then(response => response.json())
      .then(result => console.log("Success response:", result))
      .catch(error => console.error("Error response:", error))
  };

  handleChange = event => {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({[name]: value});
  }

  render() {
    const textTitleClass = "uppercase text-base text-gray-600 font-bold";
    const textInputClass = "w-full bg-gray-300 text-gray-900 mt-2 mb-6 p-3 rounded-lg focus:outline-none focus:bg-blue-200 focus:border-grey-500";
    const submitButtonClass = "uppercase text-sm font-bold tracking-wide bg-blue-800 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:bg-indigo-400";

    return (
      <Layout title="GarethMoores.com: Contact Me" description="GarethMoores.com: Contact Me">
        <MobileBarTop />
        <Sidebar />
        <PageBody title="Contact Me">
          <p className="font-bold text-6xl">Contact Form is not currently working!!!!!</p>

          <form id="contact-form" method="post" onSubmit={this.handleSubmit}>
            <label className={textTitleClass} htmlFor="name-input">Name:</label>
            <input className={textInputClass} onChange={this.handleChange} type="text" id="name-input" name="name_input" placeholder="Enter name" required />
            <br/>

            <label className={textTitleClass} htmlFor="email-input">Email:</label>
            <input className={textInputClass} onChange={this.handleChange} type="text" id="email-input" name="email_input" placeholder="Enter email" required />
            <br/>

            <label className={textTitleClass} htmlFor="desc-input">How can I help you?</label>
            <textarea className={textInputClass} onChange={this.handleChange} id="desc-input" name="desc_input" rows="3" placeholder="Enter your message" required />
            <br/>

            <button type="submit" className={submitButtonClass}>
              Send Message
            </button>
          </form>
        </PageBody>
        <MobileBarBottom />
      </Layout>
    )
  };
}

export default Contact;