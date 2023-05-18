import React,{Fragment,useState} from 'react'
import "./About.css"
import NavBar from '../NavBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';


const About = () => {
  const [ toggleTab, setToggleTab] = useState(1)
  const toggleState = (index) =>{
    setToggleTab(index)
  }
  return (
    <Fragment>
    <section className="about">

    <div className="row">

    <div className="column">
      <div className="about-img"></div>
    </div>

    <div className="column">

    <div className="tabs">

    <div className={toggleTab === 1 ? "single-tab active-tab": "single-tab"}
    onClick = {() => toggleState(1)}
    >
      <h2>Company</h2>
    </div>

    

    <div className={toggleTab === 3 ? "single-tab active-tab": "single-tab"}
    onClick = {() => toggleState(3)}
    >
      <h2>Contact us</h2>
    </div>
      
    </div>

    <div className="tab-content">

    {/* About Content */}

    <div className={toggleTab === 1 ?"content active-content":"content"}>
      <h2>Fashion Store</h2>
      <p>Fashion Cosmetics is your go-to for beauty products, from makeup to skincare. We offer high-quality, safe, and affordable options, tailored to all skin types and preferences. Discover our range of products, including the latest beauty trends, for a bold or natural look. Thank you for choosing us.
</p>
       
    </div>

       {/* Contact Content */}

    <div className={toggleTab === 3 ?"content active-content":"content"}>

    <div className="exp-column">
      <h3>Facebook</h3>
      <FontAwesomeIcon icon={faFacebook} className="icon"/>
      <span >
      
      <a href="https://www.facebook.com/ghalgaoui.akrem">Fashion Store</a></span>
      
    </div>

    <div className="exp-column">
      <h3>Instagram</h3>
      <FontAwesomeIcon icon={faInstagram} className="instagram-icon" />
      <span><a href="https://www.instagram.com/akrem_ghalgaoui/?hl=fr">Fashion Store</a></span>
    </div>

    <div className="exp-column">
    <h3>N° Tel </h3>
    <FontAwesomeIcon icon={faPhone} className="phone-icon" />
      <span>(+216)21555338</span>
      
    </div>
    
    </div>        
    </div>

    </div>

    </div>

    </section>
    
    </Fragment>
  )
}

export default About