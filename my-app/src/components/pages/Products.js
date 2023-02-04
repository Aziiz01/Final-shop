import React from 'react';
import '../../App.css'
import Footer from '../Footer';
import NavBar from '../NavBar.js';
import Cards from '../Cards';

function Products() {
    return (
        <>
            <div className='nav'>   
                <NavBar />
            </div>
            <div className='produits'>          
                <Cards/> 
            </div>
            <div className='footer'>
                <Footer/>
            </div>
        </>
        )
}

export default Products;