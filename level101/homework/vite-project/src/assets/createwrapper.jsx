export default function CreateWrapper({ children }) {
  return (
    <div style={{ border: "2px solid gray", padding: "10px", marginTop: "10px" }}>
      <h3>თქვენ Create გვერდზე ხართ</h3>
      {children}
    </div>
  );
}