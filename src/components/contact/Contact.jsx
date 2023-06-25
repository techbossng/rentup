import React from "react"
import img from "../images/pricing.jpg"
import Back from "../common/Back"
import "./contact.css"

const Contact = () => {
  return (
    <>
      <section className='contact mb'>
        <Back name='Contact Us' title='Get Helps & Friendly Support' cover={img} />
        <div className='container'>
            <h4>Fillup The Form</h4> <br />
            <form action="https://formspree.io/f/meqwynvb" method="POST" className="contact-inputs">                   
            <input type="text" name="username" placeholder="Full name"
              autoComplete="off" required />
              <input type="email" name="Email" placeholder="Email"
              autoComplete="off" required />            
            <textarea name="message" cols="30" rows="6" placeholder="Message"  autoComplete="off" required></textarea>
            <button>Submit Request</button>            
           </form>
        </div>        
      </section>
    </>
  )
}

export default Contact