import React from 'react';
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import PageBody from "../components/PageBody";
import { useRouter } from "next/router";

export default function Contact() {
  const textTitleClass = "uppercase text-base text-gray-600 font-bold";
  const textInputClass = "w-full bg-gray-300 text-gray-900 mt-2 mb-6 p-3 rounded-lg focus:outline-none focus:bg-blue-200 focus:border-grey-500";
  const submitButtonClass = "uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:bg-indigo-400";
  const router = useRouter();

  const handleSubmit = event => {
    event.preventDefault();


    router.push('/thankyou');
  }

  return (
    <Layout title="GarethMoores.com: Contact Me" description="GarethMoores.com: Contact Me">
      <Sidebar />
      <PageBody>
        <p className="font-bold text-xl pb-6">Contact Me</p>

        <p className="font-bolde text-6xl">Contact Form is not currently working!!!!!</p>

        <form id="contact-form" method="post" onSubmit={handleSubmit}>
          <label className={textTitleClass} htmlFor="name-input">Name:</label>
          <input className={textInputClass} type="text" id="name-input" placeholder="Enter name" required />
          <br/>

          <label className={textTitleClass} htmlFor="email-input">Email:</label>
          <input className={textInputClass} type="text" id="email-input" placeholder="Enter email" required />
          <br/>

          <label className={textTitleClass} htmlFor="description-input">How can I help you?</label>
          <textarea className={textInputClass} id="description-input" rows="3" placeholder="Enter your message" required />
          <br/>

          <div className="g-recaptcha form-control" data-sitekey="6Lc7cVMUAAAAAM1yxf64wrmO8gvi8A1oQ_ead1ys" />

          <button type="submit" className={submitButtonClass}>
            Send Message
          </button>
        </form>
      </PageBody>
    </Layout>
  );
}