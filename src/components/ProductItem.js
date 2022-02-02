import React from 'react';

export default function ProductItem(props) {
  return (
  <div className="productItem">
    <div><h1>{ props.name }</h1></div>
    <img src={ props.image } />
    <div>${ props.price }</div>
  </div>);
}
