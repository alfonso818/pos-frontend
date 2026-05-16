import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import axios from "axios";
import { api } from "../api";

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  const [report, setReport] = useState({ omzet: 0, profit: 0 });
  const res = await api.get("/products");

  const fetchData = async () => {
    const p = await axios.get(`${API}/products`);
    const r = await axios.get(`${API}/daily-report`);

    setProducts(p.data);
    setReport(r.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const totalStock = products.reduce(
    (acc, item) => acc + item.stock,
    0
  );

  return (
    <div style={styles.container}>
      <Sidebar />

      <div style={styles.main}>
        <h1 style={styles.title}>Dashboard POS</h1>
        <h3>Welcome, {user?.username} ({user?.role})</h3>

        <div style={styles.grid}>
          <StatCard title="Omset Hari Ini" value={report.omzet} />
          <StatCard title="Profit Hari Ini" value={report.profit} />
          <StatCard title="Total Produk" value={products.length} />
          <StatCard title="Total Stock" value={totalStock} />
        </div>

        <div style={styles.tableBox}>
          <h2>Produk Terbaru</h2>

          <table style={styles.table}>
            <thead>
              <tr>
                <th>Nama</th>
                <th>Stock</th>
                <th>Harga Jual</th>
              </tr>
            </thead>

            <tbody>
              {products.map((p) => (
                <tr key={p.id}>
                  <td>{p.name}</td>
                  <td>{p.stock}</td>
                  <td>{p.sell_price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    fontFamily: "Arial",
    background: "#f4f6f9",
    minHeight: "100vh",
  },
  main: {
    flex: 1,
    padding: 20,
  },
  title: {
    marginBottom: 20,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 15,
    marginBottom: 20,
  },
  tableBox: {
    background: "#fff",
    padding: 15,
    borderRadius: 10,
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
};