
import React, { useState } from 'react';
import Layout from '../layouts/general';
import '../sass/styles.scss';
import BookNow from '../components/cta/booknow';
import SEO from "../components/seo";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = e => {
    e.preventDefault()
    const myForm = e.target;
    const formData = new FormData(myForm);
    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
    })
        .then(() => {
            document.querySelector('.success').innerText =
                "Thank you for reaching out to us, we'd get back to you shortly.";
            // Clear form fields
            setName('');
            setEmail('');
            setMessage('');
        })
        .catch((error) => document.querySelector('.error').innerText = 'Something went wrong, pls try again.');
};
  return (
    <Layout>
      
      <section className='contact-us-section'>
        <div className='container'>
            <div className='row'>
            <h1>Contact Us</h1>
      <form className='contact-us-form' name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field"
                                onSubmit={handleSubmit} id="contact-form">
                                <input type="hidden" name="form-name" value="contact" />
                                <input type="hidden" name="bot-field" />
                                <div className="row clearfix">
                                    <div className=" form-group">
                                        <label className='col-3 col-sm-2 col-md-1'>Name <span className='required'>*</span></label>
                                        <input  className='col-9 col-sm-10 col-md-11' onChange={({ target }) => setName(target.value)}
                                            type="text"
                                            required
                                            name="name"
                                            value={name}
                                            minLength="3" placeholder="Your Name" />
                                    </div>

                                    <div className="form-group">
                                        <label className='col-3 col-sm-2 col-md-1'>Email <span className='required'>*</span></label>
                                        <input className='col-9 col-sm-10 col-md-11' type="email"
                                            name="email"
                                            value={email}
                                            required
                                            onChange={({ target }) => setEmail(target.value)} placeholder="Your Email" />
                                    </div>

                                    <div className="form-group">
                                        <label className='col-3 col-sm-2 col-md-1'>Message <span className='required'>*</span></label>
                                        <textarea  className='col-9 col-sm-10 col-md-11' name="message" placeholder="Message" required onChange={({ target }) => setMessage(target.value)}
                                            value={message}></textarea>
                                    </div>

                                    <div className="form-group form-button">
                                        <button className="theme-btn btn-style-one" type="submit">
                                            SUBMIT
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <div className="success"></div>
                            <div className="error"></div>
            </div>
        </div>
        <BookNow />
      </section>

</Layout>
    
  );
};

export default Contact;
export const Head = () => (
    <SEO
      title='Contact Us'
      description='Contact Saha Wellness for information'
    />
  );