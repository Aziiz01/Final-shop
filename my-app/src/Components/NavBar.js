import React, { useState } from 'react';
import NavbarModal from './navbarModal'; 
import {OverlayTrigger, Tooltip } from 'react-bootstrap' ;
import {GiHamburgerMenu,GiLipstick} from 'react-icons/gi';
import{MdOutlineFavorite,MdAccountBox} from 'react-icons/md';
import{BsSearch} from 'react-icons/bs';
import './NavBar.css';
import SearchBar from './SearchBar';


function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [showSearch, setShowSearch] = useState(false); // new state variable for search bar

  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const handleShowOffcanvas = () => {
    setShowOffcanvas(true);
  }

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };


  const renderTooltip = (text) => (
    <Tooltip id="button-tooltip">{text}</Tooltip>
  );



return(
<>
<nav className="navbar ${showSearch ? 'navbar-search-open' : ''} navbar-expand-lg navbar-dark ">
  <a className="navbar-brand" href="/">
    Cosmetics
  </a>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a className="nav-link" href="#">
          Category
        </a>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Category 1
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <span className="text-uppercase text-white">Category 1</span>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      Active
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Link item
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Link item
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-md-4">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      Active
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Link item
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Link item
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-md-4">
                <a
                  target="_blank"
                  href="https://bootstrapcreative.com/resources/a-beginners-guide-to-hubspot-cms/"
                >
                  <img
                    src="img1.jpg"
                    alt="Web Design Guides"
                    className="img-fluid"
                  />
                </a>
                <p className="text-white">Get Free Guides</p>
              </div>

            </div>
          </div>

        </div>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Category 2
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <span className="text-uppercase text-white">Category 2</span>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      Active
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Link item
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Link item
                    </a>
                  </li>
                </ul>
              </div>


              <div className="col-md-4">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      Active
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Link item
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Link item
                    </a>
                  </li>
                </ul>
              </div>


              <div className="col-md-4">
                <a
                  target="_blank"
                  href="https://bootstrapcreative.com/shop/jake-portfolio-hubspot-theme/"
                >
                  <img
                    src="https://i0.wp.com/bootstrapcreative.com/wp-bc/wp-content/uploads/2022/01/jake-portfolio-cover.jpg?w=200&ssl=1"
                    alt="Portfolio Website Templates"
                    className="img-fluid"
                  />
                </a>
                <p className="text-white">Create a Portfolio Website Fast</p>
              </div>


            </div>
          </div>


        </div>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Category 3
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <span className="text-uppercase text-white">Category 3</span>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      Active
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Link item
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Link item
                    </a>
                  </li>
                </ul>
              </div>


              <div className="col-md-4">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      Active
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Link item
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Link item
                    </a>
                  </li>
                </ul>
              </div>


              <div className="col-md-4">
                <a
                  target="_blank"
                  href="https://bootstrapcreative.com/resources/"
                >
                  <img
                    src="https://i0.wp.com/bootstrapcreative.com/wp-bc/wp-content/uploads/2020/09/Filtered-Paint-Image-Instagram-Square.png?w=200&ssl=1"
                    alt="Web Design Resources"
                    className="img-fluid"
                  />
                </a>
                <p className="text-white">Free Web Design Resources</p>
              </div>


            </div>
          </div>


        </div>
      </li>
    </ul> 
  </div>
  <div>
   <div className="navbar-buttons">
       <OverlayTrigger
         placement="bottom"
         overlay={renderTooltip('Wishlist')}
       >
         <button className='btn'>
           <MdOutlineFavorite className='icon' color='white' size={'25px'}/>
         </button>
       </OverlayTrigger>
       <OverlayTrigger
         placement="bottom"
         overlay={renderTooltip('Mon compte')}
       >
         <button className='btn'>
           <MdAccountBox className='icon' color='white' size={'25px'} />
         </button>
       </OverlayTrigger>
       <OverlayTrigger
         placement="bottom"
         overlay={renderTooltip('Recherche')}
       >
         <button className='btn' onClick={toggleSearch}>
           <BsSearch className='icon' color='white' size={'25px'}/>
         </button>
       </OverlayTrigger>
       <OverlayTrigger
         placement="bottom"
         overlay={renderTooltip('Cart')}
       >
         <button className='btn'>
           <GiLipstick className='icon' color='white' size={'25px'} />
         </button>
       </OverlayTrigger>
      </div>
  </div>
      <div className="navbar-hamburger" >
        <button className='ham-btn' onClick={toggleModal}>
          <GiHamburgerMenu size={'35px'}/>
        </button>
      </div>
     {showSearch && <SearchBar />}
     <NavbarModal show={showModal} hide={toggleModal} />
</nav>
</>
);
}
export default Navbar;