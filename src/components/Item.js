import React from 'react';

import { Link } from 'react-router-dom'

export const Item = ({item}) => {
  var url = "/product/" + item.id
return(
        <div className="col-lg-4 col-md-6 mb-4" >
            <div className="card h-100">
              <a href="#"><img className="card-img-top" src={item.thumbnail} alt=""/></a>
              <div className="card-body">
                <h4 className="card-title">
                  <a href="#">
                  <Link to={`/product/${item.id}`} className="homeBut">
                  {item.title}
                  </Link></a>
                </h4>
                <h5>{item.price}</h5>
                <p className="card-text"></p>
              </div>
              <div className="card-footer">
                <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
              </div>
            </div>
          </div>
)
}

//export default Item;