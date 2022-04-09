import React from 'react';
import { Link, Route, Switch,BrowserRouter,withRouter } from "react-router-dom";
import "./Product.css";
import { useStateValue } from '../context/StateProvider';
import Description from './Description';
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
      
        {/* <BrowserRouter>
    <div>
        <Route exact path="/" component={Product} />
        <Route exact path="/description" component={Description} />
    </div>
  </BrowserRouter> */}

      {/* <Description id={id} price={price} title={title} img={image} rating={rating} /> */}
      {/* <Switch>
        <Route exact path={"/description"}  id={id} price={price} title={title} img={image} rating={rating}></Route>
      </Switch> */}

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
