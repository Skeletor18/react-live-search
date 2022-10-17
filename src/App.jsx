import "./style.css";
import { useState } from "react";

import jordan from "./img/air-jordan-1.jpg";
import grinch from "./img/grinch.jpg";
import kniiiCkS from "./img/kniiiCkS.jpg";
import penny from "./img/max-penny.jpg";
import dunk from "./img/nike-dunk-low.jpg";
import svsm from "./img/svsm.jpg";

function App() {
  const [product, setProduct] = useState([
    {
      img: jordan,
      name: "Air Jordan 1",
      price: "$850",
    },

    {
      img: grinch,
      name: "Grinch",
      price: "$100",
    },

    {
      img: kniiiCkS,
      name: "KniiiCkS",
      price: "$540",
    },

    {
      img: penny,
      name: "Max Penny",
      price: "$320",
    },

    {
      img: dunk,
      name: "Nike Dunk Low",
      price: "$290",
    },

    {
      img: svsm,
      name: "Svsm",
      price: "$120",
    },
  ]);

  const [value, setValue] = useState('')

  
  const filterProducts = product.filter((item) => {
    return item.name.toLowerCase().includes(value.toLowerCase())
  })

  return (
    <main>
      <form onSubmit={(e) => e.preventDefault()}>
        <input 
        type="text" 
        placeholder="Введите название кросовок..." 
        onChange={(e) => setValue(e.target.value)}
        />
      </form>

      <div className="main">
        {filterProducts.map((item) => {
          return (
            <div className="cart">
              <div className="img">
                <img src={item.img} alt="1" />
              </div>
              <div className="infa_wrapper">
                <div className="infa">
                  <div>{item.name}</div>
                  <div className="price">{item.price}</div>
                </div>
                <div className="btn_details">
                  <button>Детали</button>
                </div>
              </div>

              <div className="text">
                <p>
                  While there is some confusion regarding which monicker will be
                  the official name come release day, this might just be the
                  most insane sneaker ever put to market.
                </p>

                <button className={"add"}>Добавить в корзину</button>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default App;
