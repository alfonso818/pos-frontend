import { useEffect, useState } from "react";
import axios from "axios";

const API =
  "URL_BACKEND_RAILWAY";

export default function App() {

  const [products, setProducts] = useState([]);

  const [form, setForm] = useState({
    name: "",
    stock: "",
    buy_price: "",
    sell_price: ""
  });

  const getProducts = async () => {
    const res = await axios.get(
      `${API}/products`
    );

    setProducts(res.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const addProduct = async () => {
    await axios.post(
      `${API}/products`,
      form
    );

    getProducts();
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>POS APP</h1>

      <input
        placeholder="Nama"
        onChange={(e)=>
          setForm({
            ...form,
            name:e.target.value
          })
        }
      />

      <input
        placeholder="Stock"
        onChange={(e)=>
          setForm({
            ...form,
            stock:e.target.value
          })
        }
      />

      <input
        placeholder="Harga Beli"
        onChange={(e)=>
          setForm({
            ...form,
            buy_price:e.target.value
          })
        }
      />

      <input
        placeholder="Harga Jual"
        onChange={(e)=>
          setForm({
            ...form,
            sell_price:e.target.value
          })
        }
      />

      <button onClick={addProduct}>
        Tambah
      </button>

      <hr />

      {
        products.map((p)=>(
          <div key={p.id}>
            <h3>{p.name}</h3>
            <p>Stock: {p.stock}</p>
            <p>Harga: {p.sell_price}</p>
          </div>
        ))
      }

    </div>
  );
}