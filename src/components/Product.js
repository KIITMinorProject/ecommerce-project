import React from 'react';
import "./Product.css";
import { useStateValue } from '../context/StateProvider';
function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  const rentTheBook = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: (price * 0.5),
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small><strong>₹ </strong></small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />
      <div class="btn">
        <button class="btn1" onClick={addToBasket}><strong>Add to Basket</strong></button>
        <div class="space"></div>
        <button class="btn2" onClick={rentTheBook}><strong>Rent the book</strong></button>
      </div>
    </div>
  );
}
export default Product;
