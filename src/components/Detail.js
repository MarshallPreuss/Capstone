import React from 'react';

import { Link } from 'react-router-dom'

import ReactHtmlParser from 'react-html-parser'

export const Detail = ({detail}) => {


var iC1 = [];
var iC2 = [];

for (var i = 0; i < detail.images.length; i++) {
  //iC1
  if(i > 0) {
    iC1.push( (<li data-target="#carouselExampleIndicators" data-slide-to={i}></li>) );
  } else {
    iC1.push( (<li data-target="#carouselExampleIndicators" data-slide-to={i} className="active"></li>) );
  }
  //iC2
  if(i > 0) {
    iC2.push( (<div className="carousel-item"> <img className="d-block img-fluid" src={detail.images[i]} /> </div>) );
  } else {
    iC2.push( (<div className="carousel-item active"> <img className="d-block img-fluid" src={detail.images[i]} /> </div>) );
  }
}

 return(

  <div className="main">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div className="container">
      <a className="navbar-brand" href="/">Animal Palace</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
            <Link to={"/"} className="homeBut">
      Home
    </Link>
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./components/About">
            <Link to={"/about"} className="homeBut">
      About
    </Link>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./components/Service">
            <Link to={"/service"} className="homeBut">
      Services
    </Link>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <br />
  <br />
  <br />

  <div className="container">

    <div className="row">



      <div className="col-lg-3">

        <h1 className="my-4" className="title"> Animal Palace</h1>
        <div className="list-group">
          <a href="#" className="list-group-item">Toys</a>
          <a href="#" className="list-group-item">Food</a>
          <a href="#" className="list-group-item">Grooming</a>
        </div>

      </div>
      

      <div className="col-lg-9">

        <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
        <ol className="carousel-indicators" >
          {iC1}
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="iC2">{iC2}</div>
        </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>

        <div className="row">

        <div className="col-lg-4 col-md-6 mb-4" >
            <div className="card h-100">
              <a href="#"><img className="card-img-top" src={detail.thumbnail} alt=""/></a>
              <div className="card-body">
                <h4 className="card-title">
                  <a href="#">{detail.title}</a>
                </h4>
                <h5>{detail.price}</h5>
                <p className="card-text"></p>
              </div>
              <div className="card-footer">
                <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
              </div>
            </div>
          </div>

        </div>
        

      </div>
      

    </div>
    

  </div>
  
  { ReactHtmlParser(detail.description) }
  
  <footer className="py-5 bg-dark">
    <div className="container">
      <p className="m-0 text-center text-white">Copyright &copy; Animal Palace 2020</p>
    </div>
   
  </footer>

</div>    
)
}

//export default Details;