import React from 'react';

const Folio = ({id, title, imgurl, desc}) => {
    
    return (
        <article>
            <h3>{title}</h3>
            <div>
                <img src={imgurl} alt={title} />
            </div>
            <p>{desc}</p>
           
        </article>
    );
};

export default Folio;