export default function CartElement({ item, quantity }) {
  return (
    <div className="CartElement">
      Item: <div className="Bluetext">{item}</div> | Quantity:{" "}
      <div className="Bluetext">{quantity}</div>
    </div>
  );
}
