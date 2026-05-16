export default function StatCard({ title, value }) {
  return (
    <div style={styles.card}>
      <h4>{title}</h4>
      <h2>{value}</h2>
    </div>
  );
}

const styles = {
  card: {
    background: "#fff",
    padding: 15,
    borderRadius: 10,
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
};