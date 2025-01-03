import React from 'react'
import './Contact.css'

const Contact = () =>  {
      const [result, setResult] = React.useState("");
    
      const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "f910dea3-5a48-4efc-a055-8b24f19709ee");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };
  return (
    <div className='contact'>
        <div className="contact-col">
<h3>Send us a message <img src='../../src/assets/msg-icon.png'/></h3>
<p >Feel free to reach out through cintact form or find out 
    contact information below.Your feedback,questions,
     and suggestions are important to 
    us as we strive to provide exceptional service to our university community.
</p>
<ul>
    <li> <img src='../../src/assets/mail-icon.png'/>Contact@ giritharan.com</li>
    <li><img src='../../src/assets/phone-icon.png'/>+91 9791827916 </li>
    <li><img src='../../src/assets/location-icon.png'/>3/37,North street,Coimbatore,641 000 </li>

</ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type='text' name='name' placeholder='Enter your name' required/>
                <label>Phone Number</label>
                <input type='tel' name='phone' placeholder='Enter your mobile number' required/>
                <label>Write your message here.</label>
                <textarea name='message' rows="6" placeholder='Enter your message' required/>
                <button type='submit' className='btn dark-btn'>submit Now <img src='../../src/assets/white-arrow.png'/></button>
                
            </form>
            <span>{result}</span>
            
            </div>
      
    </div>
  )
}

export default Contact
