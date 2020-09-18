import React from 'react';

const About = () => {
return(
    <div className="main">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
<div className="container">
  <a className="navbar-brand" href="#">Animal Palace</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarResponsive">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home
          <span className="sr-only">(current)</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="./components/About">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Services</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contact</a>
      </li>
    </ul>
  </div>
</div>
</nav>

<br/>
<br/>
<br/>

<div className="container">

<div className="row">


<h1>About Us</h1>
<p></p>

</div>

</div>



<footer className="py-5 bg-dark">
<div className="container">
  <p className="m-0 text-center text-white">Copyright &copy; Animal Palace 2020</p>
</div>

</footer>

</div>
)
}

export default About;