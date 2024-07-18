import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import location_icon from '../../assets/location_icon.svg'

const Contact = () => {
  return (
    <div  className='contact'>
    <div className='contact-title'>
    <h1>Get in touch</h1>
    <img src={theme_pattern} />


    </div>
    <div className='contact-section'>
      <div className='contact-left'>
      <h1> lets talk</h1>
      <p> I am always open to discuss new projects, collaborations, and interesting ideas.</p>
      <div className='contact-details' >
        <div className='contact-detail'>
        <img src={mail_icon}/><p>meshackkimaiyo5@gmail.com</p>


        </div>
        <div className='contact-detail'>
        <img src={call_icon} /><p>+254 727463152</p>

        

        </div>
        <div className='contact-detail'>
        <img  src={location_icon} /><p>Nairobi,Kenya</p>
        

        </div>
      </div>
      </div>
      <form className='contact-right'>
      <label htmlFor=''>Your Name</label>
      <input type='text' name='name' placeholder='Enter your name'/>
      <label htmlFor=''>Your Email</label>
      <input type='email' name='email' placeholder='Enter your email'/>
      <label htmlFor=''>Enter Your Message</label>
      <textarea name='message' rows='8' placeholder='Enter your message'/>
      <button type='submit' className='contact-submit'>Send Message</button>


      </form>

    </div>
      
    </div>
  )
}

export default Contact
