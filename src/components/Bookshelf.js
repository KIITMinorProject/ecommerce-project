import React,{ useState } from 'react';
import Product from "./Product";
import { useStateValue } from "../context/StateProvider";
import { Link, useHistory } from "react-router-dom";

const Bookshelf = () => {
    const history = useHistory();
    const [drawer, setDrawer] = useState(false);
    
  return (
    
    <div>
    <div className="home__row">
          <Product
            id="4903850"
            title="Clap When You Land by Elizabeth Acevedo"
            price={199.99}
            rating={3}
            image="https://img.buzzfeed.com/buzzfeed-static/static/2020-12/21/0/asset/f69da90b1e93/sub-buzz-5094-1608511484-18.jpg"
            desc="https://www.goodreads.com/book/show/52516332-clap-when-you-land"
          />
          <Product
            id="23445930"
            title="Grown by Tiffany D. Jackson"
            price={98.99}
            rating={5}
            image="https://img.buzzfeed.com/buzzfeed-static/static/2020-12/21/1/asset/20f9b6998076/sub-buzz-7600-1608513071-1.jpg"
          />
          <Product
            id="3254354345"
            title="Want by Lynn Steger Strong"
            price={598.99}
            rating={4}
            image="https://img.buzzfeed.com/buzzfeed-static/static/2020-12/22/13/asset/0d7df273f391/sub-buzz-7617-1608642227-6.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="I Killed Zoe Spanos by Kit Frick"
            price={199.99}
            rating={3}
            image="https://img.buzzfeed.com/buzzfeed-static/static/2020-12/21/1/asset/8fa865d5bddb/sub-buzz-7667-1608513640-3.jpg"
          />
          <Product
            id="23445930"
            title="You Had Me at Hola by Alexis Daria"
            price={98.99}
            rating={5}
            image="https://img.buzzfeed.com/buzzfeed-static/static/2020-12/21/1/asset/0d7df273f391/sub-buzz-5152-1608513987-12.jpg"
          />
          <Product
            id="3254354345"
            title="Woven in Moonlight by Isabel Ibañez"
            price={598.99}
            rating={4}
            image="https://img.buzzfeed.com/buzzfeed-static/static/2020-12/24/17/asset/0d7df273f391/sub-buzz-11109-1608830847-14.jpg"
          />
        </div>        
        <div className="home__row">
          <Product
            id="4903850"
            title="Lobizona by Romina Garber"
            price={199.99}
            rating={3}
            image="https://img.buzzfeed.com/buzzfeed-static/static/2020-12/21/0/asset/6c2b5f5c75da/sub-buzz-5105-1608511761-14.jpg"
          />
          <Product
            id="23445930"
            title="Mexican Gothic by Silvia Moreno-Garcia"
            price={98.99}
            rating={5}
            image="https://img.buzzfeed.com/buzzfeed-static/static/2020-12/21/0/asset/92a0d962fe43/sub-buzz-5142-1608512275-19.jpg"
          />
          <Product
            id="3254354345"
            title="Felix Ever After by Kacen Callender"
            price={598.99}
            rating={4}
            image="https://img.buzzfeed.com/buzzfeed-static/static/2020-12/21/1/asset/f69da90b1e93/sub-buzz-5139-1608512867-3.jpg"
          />
        </div>
    </div>
  );
};

export default Bookshelf;