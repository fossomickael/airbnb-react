import React, { Component } from 'react'; 


class Flat extends Component {

   handleClick = () => {
     console.log(this.props.flat.lat);
     console.log(this.props.flat.lng);
      this.props.updateMapFunction(this.props.flat.lat, this.props.flat.lng);

   }
   
    render() {
       const src = this.props.flat.imageUrl;
       const title = this.props.flat.name;
       const price = this.props.flat.price;
        return (
            <div className="card-product" onClick={this.handleClick}>
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