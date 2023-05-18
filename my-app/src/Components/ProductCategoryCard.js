import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const cardStyle = css`
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 20px;
    margin: 20px;
    width: 300px;
`;

function ProductCategoryCard ({ category, image, link }){
    return (
        <div css={cardStyle}>
            <img src={image} alt={category} />
            <h2>{category}</h2>
            <a href={link}>Explore {category}</a>
        </div>
    );
}

export default ProductCategoryCard;
