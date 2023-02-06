import React from 'react';
import '../../App.css'
import Footer from '../Footer';
import NavBar from '../NavBar.js';
import Cards from '../Cards';

function Products() {
    return (
        <>
               
            <NavBar />
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