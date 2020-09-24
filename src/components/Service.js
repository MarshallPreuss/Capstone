import React from 'react';
import { Link } from 'react-router-dom';

const Service = () => {
return(
    <div className="aboutMain">
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
        <a className="nav-link" href="./components/Services">
        <Link to={"/service"} className="homeBut">
      Services
    </Link>
        </a>
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


<h1 className="title">Services</h1>
<p className="aboutDes">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac enim arcu. Sed ullamcorper nibh at diam aliquet vestibulum. Praesent mauris ante, finibus eget malesuada vitae, euismod eget turpis. Sed congue turpis mi, et bibendum libero lacinia in. Nullam efficitur nec mi nec porttitor. Proin at ligula risus. Suspendisse mattis nec magna non tincidunt. Suspendisse vitae lacus suscipit, convallis neque ac, eleifend velit. Ut id velit nisi. Phasellus semper lobortis lacus, quis lobortis nisi rutrum sit amet. Nam porta volutpat massa suscipit tristique. Nam posuere malesuada viverra. Mauris vitae magna cursus, cursus ex eget, varius arcu. Nulla elit enim, venenatis et congue quis, maximus id elit.

Nullam venenatis viverra facilisis. Nulla condimentum lorem enim, ut rutrum turpis fringilla sed. Curabitur sed libero luctus, iaculis turpis a, blandit massa. Donec quis sodales neque. Curabitur velit orci, accumsan sit amet laoreet nec, dictum quis magna. Nunc sagittis, purus eu dictum ultricies, dui magna euismod eros, eget vulputate metus leo quis nunc. Morbi mauris nisl, bibendum vitae dui vel, scelerisque hendrerit nibh. Etiam eget accumsan purus, quis egestas enim. Fusce ex orci, congue at efficitur quis, pulvinar non odio. Phasellus non consectetur lorem. Integer quis mauris viverra, tempus felis sit amet, venenatis felis. Donec hendrerit leo et arcu facilisis maximus. Cras ac sem lectus. Mauris semper ante massa, sit amet vulputate ex imperdiet sit amet. Nam blandit velit felis, in euismod dolor viverra id. Curabitur consectetur felis velit, sed vulputate ante ultricies eget.

Aenean ut nibh a lectus porttitor tincidunt. Quisque convallis ante quam, id interdum nulla placerat id. Fusce convallis commodo porta. Aliquam suscipit eget lectus id rhoncus. In ultricies mi leo. Nunc facilisis dignissim tortor, quis rhoncus lectus pellentesque tempus. Mauris vestibulum lacus a auctor viverra.

Nullam congue condimentum justo eu ultrices. Suspendisse justo sem, tincidunt quis massa sit amet, ornare imperdiet mauris. In malesuada eleifend magna eu rutrum. Fusce eget nunc vitae dolor suscipit ornare. Fusce vitae lectus sollicitudin, consequat nulla ac, dapibus est. Maecenas dapibus, eros in tempus mollis, mauris tortor tempus ipsum, vel posuere quam ligula ut lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean ante metus, imperdiet et mi nec, pharetra posuere metus. Integer luctus, lectus ac efficitur placerat, ante metus iaculis risus, ut sollicitudin est metus vitae nisi. Ut malesuada volutpat turpis. Phasellus tristique egestas tellus, sed dignissim felis interdum nec.

Mauris eu nunc vel est sollicitudin sodales. Nunc id condimentum ipsum. Nulla facilisi. Aenean finibus in ligula ac eleifend. Maecenas pretium vel lectus eu porttitor. Nunc eget velit at ante pellentesque pretium. Fusce lectus risus, luctus eget sapien eget, tempus posuere nunc. Integer in tristique augue. Sed suscipit erat eget nulla pharetra hendrerit.</p>

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

export default Service;