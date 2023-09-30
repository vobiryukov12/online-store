import { Link } from "react-router-dom";

interface ICartProductProps {
  id: number, 
  title: string, 
  number: number, 
  price: number, 
  size: string, 
  counter: number, 
  handleRemove: (id: number) => void
}

export function CartProduct({ id, title, number, price, size, counter, handleRemove }: ICartProductProps) {
  return (
    <tr>
      <td scope="row">{number}</td>
      <td><Link to={`/catalog/${id.toString().slice(0, 2)}`}>{title}</Link></td>
      <td>{size}</td>
      <td>{counter}</td>
      <td>{`${price} руб.`}</td>
      <td>{`${price} руб.`}</td>
      <td><button className="btn btn-outline-danger btn-sm" onClick={() => handleRemove(id)}>Удалить</button></td>
    </tr>
  );
}
