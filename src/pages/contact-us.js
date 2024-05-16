
import React, { useState } from 'react';
import Layout from '../layouts/general';
import '../sass/styles.scss';

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
  // const data = useStaticQuery(graphql`
  //   {
  //     allContentfulBios {
  //       nodes {
  //         name
  //         image {
  //           url
  //         }
  //         description {
  //           raw
  //         }
  //       }
  //     }
  //   }
  // `);
  // const cases = data.allContentfulBios.nodes;

  return (
    <Layout>
      
      <section>
      <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field"
                                onSubmit={handleSubmit} id="contact-form">
                                <input type="hidden" name="form-name" value="contact" />
                                <input type="hidden" name="bot-field" />
                                <div className="row clearfix">
                                    <div className="col-md-6 col-sm-6 col-xs-12 form-group">
                                        <input onChange={({ target }) => setName(target.value)}
                                            type="text"
                                            required
                                            name="name"
                                            value={name}
                                            minLength="3" placeholder="Your Name *" />
                                    </div>

                                    <div className="col-md-6 col-sm-6 col-xs-12 form-group">
                                        <input type="email"
                                            name="email"
                                            value={email}
                                            required
                                            onChange={({ target }) => setEmail(target.value)} placeholder="Your Email *" />
                                    </div>

                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                                        <textarea name="message" placeholder="Message *" required onChange={({ target }) => setMessage(target.value)}
                                            value={message}></textarea>
                                    </div>

                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                                        <button className="theme-btn btn-style-one" type="submit">
                                            SUBMIT
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <div className="success"></div>
                            <div className="error"></div>
      </section>

</Layout>
    
  );
};

export default Contact;