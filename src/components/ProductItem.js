import React from 'react';
import styles from './ProductItem.module.css'

export default function ProductItem(props) {
  return (
  <div className={ styles.productItem }>
    <div><h1>{ props.name }</h1></div>
    <img src={ props.image } />
    <div>${ props.price }</div>
  </div>);
}
