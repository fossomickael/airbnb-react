import React, { Component } from 'react'; 


class Flat extends Component {
   
    render() {
       const src = this.props.flat.imageUrl;
       const title = this.props.flat.name;
       const price = this.props.flat.price;
        return (
            <div className="card-product">
            <img src={src} alt="{title}" />
            <div className="card-product-infos">
            <h2>{title}</h2>
                <p>{price} euros</p>
              </div>
            </div>
        );
      }


}

export default Flat;