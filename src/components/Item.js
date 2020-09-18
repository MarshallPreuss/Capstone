import React from 'react';

export const Item = ({item}) => {
return(
        <div className="col-lg-4 col-md-6 mb-4" >
            <div className="card h-100">
              <a href="#"><img className="card-img-top" src={item.thumbnail} alt=""/></a>
              <div className="card-body">
                <h4 className="card-title">
                  <a href="#">{item.title}</a>
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