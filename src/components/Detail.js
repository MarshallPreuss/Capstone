import React from 'react';

export const Detail = ({detail}) => {

  function selectCat() {
    //a.title.classList.add("selected");
  
    console.log("a");
  }

  return(
    <article className="Article">
        <h2 className="artTitle">{detail.title}</h2>
        <p className="artPar">{detail.description.substring(0, 100)}</p>
    </article>
  )
}
