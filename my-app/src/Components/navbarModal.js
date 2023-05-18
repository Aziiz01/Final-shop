import React , {useState} from 'react';
import { Image } from 'react-bootstrap';
 import Modal from 'react-bootstrap/Modal';
import { BsSearch } from 'react-icons/bs'; 
import SearchBar from './SearchBar';
import './navbarModal.css';
import { Link } from 'react-router-dom';


export function MyImage({src}){
  return(

      <div className='cat-img' style={{ height: '100%', width: '100%' }}>
        <Image alt='' src={src} fluid style={{ height: '100%', width: '100%' }}/>
      </div>
  );
}

function NavbarModal(props){
  const [showSearch, setShowSearch] = useState(false); // new state variable for search bar

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  

  return (
    <>
      <Modal show={props.show} fullscreen={true} onHide={props.hide} scrollable={true} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <Modal.Header closeButton>

        </Modal.Header>
        <Modal.Body>
        <div>
            <button className='btn' onClick={toggleSearch}>
              <BsSearch className='icon' color='white' size={'25px'}/>
            </button>
          </div>
          {showSearch && <SearchBar />}
          <div className='modal-body'>
            <div className='link-section'>
              <Link to="/" className='first-link'><h4>HOME</h4></Link>
              <Link to="/products" className='second-link'><h4>PRODUCTS</h4></Link>
              <Link to="/about" className='third-link'><h4>ABOUT</h4></Link>
              <Link to="/account" className='fourth-link'><h4>ACCOUNT</h4></Link>
            </div>
            <div className='categorie-section'>
              <MyImage src='./images/itcosmetics.jpg'/>
              <div className='cat-title'>
                  <Link to="/products/categorie1"> <h4>first categorie</h4></Link>
              </div>

              <MyImage src='./images/fe.jpg'/>
              <div className='cat-title'>
                  <Link to="/products/categorie1"> <h4>second categorie</h4></Link>
              </div>

              <MyImage src='./images/OIP.jpg'/>
              <div className='cat-title'>
                  <Link to="/products/categorie1"> <h4>third categorie</h4></Link>
              </div>

              <MyImage src='./images/R.jpg'/>
              <div className='cat-title'>
                  <Link to="/products/categorie1"> <h4>fourth categorie</h4></Link>
              </div>

              <MyImage src='./images/sq.jpg'/>
              <div className='cat-title'>
                  <Link to="/products/categorie1"> <h4>fifth categorie</h4></Link>
              </div>
            
            </div>
            <div className='other-section' style={{position:'relative'}}>
                <div className='section1'  style={{ height: '100%', width: '100%' }}>
                  <Image alt='img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf6q4QKzQtV3sBSVeDLQTethVG4yBXp7zJIQ&usqp=CAU' fluid style={{ height: '100%', width: '100%' }}/>
                  <Link to="/products/newproduct" className='catBtn1'>
                    <h4>Check this!</h4>
                  </Link>
                </div>
                <div className='section2'  style={{ height: '100%', width: '100%' }}>
                  <Image alt='img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf6q4QKzQtV3sBSVeDLQTethVG4yBXp7zJIQ&usqp=CAU' fluid style={{ height: '100%', width: '100%' }}/>
                  <Link to="/products/categorie4"className='catBtn2'>
                    <h4>Check this!</h4>
                  </Link>
                </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NavbarModal;