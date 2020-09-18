import React from 'react';
import { Link } from 'react-router-dom';
import ItemPage from './ItemPage';
//import CategoryPage from './DetailPage';

const Dashboard = () => (

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
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img className="d-block img-fluid" src="https://i0.wp.com/petchampion.com/wp-content/gallery/dogs-toys-oxford/dogs-toys-toys20.jpg" alt="First slide" width="900" height="300"/>
            </div>
            <div className="carousel-item">
              <img className="d-block img-fluid" src="https://i2.wp.com/petchampion.com/wp-content/gallery/dogs-toys-rubber/dogs-toys-toys7.jpg" alt="Second slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block img-fluid" src="https://hstt.org/sites/default/files/styles/banner_sub/public/banners/btt20160087.jpg?itok=TVQo8-sL" alt="Third slide"/>
            </div>
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

          <ItemPage />

        </div>
        

      </div>
      

    </div>
    

  </div>
  

  
  <footer className="py-5 bg-dark">
    <div className="container">
      <p className="m-0 text-center text-white">Copyright &copy; Animal Palace 2020</p>
    </div>
   
  </footer>

</div>



  )

  export default Dashboard