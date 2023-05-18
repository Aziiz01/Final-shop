import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';


const headerStyle = css`
    background-color: #f8f9fa;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

function Header(){
    return (
        <header css={headerStyle}>
            <h1>My Cosmetic Store</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
            </nav>
        </header>
    );
}

export default Header;
