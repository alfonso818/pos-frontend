export default function Sidebar() {
  return (
    <div style={styles.sidebar}>
      <h2 style={{ color: "#fff" }}>POS SYSTEM</h2>

      <div style={styles.menu}>
        <p>📊 Dashboard</p>
        <p>📦 Produk</p>
        <p>💰 Transaksi</p>
        <p>👤 Admin</p>
      </div>
    </div>
  );
}

const styles = {
  sidebar: {
    width: 220,
    background: "#111827",
    color: "#fff",
    padding: 20,
  },
  menu: {
    marginTop: 30,
    display: "flex",
    flexDirection: "column",
    gap: 15,
    cursor: "pointer",
  },
};