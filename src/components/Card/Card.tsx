import { Link } from "react-router-dom";

interface ICardProps {
  id: number,
  title: string,
  price: number,
  image: string
}

export function Card({ id, title, price, image }: ICardProps) {
  return (
    <div className="col-4">
      <div className="card">
        <div className="card-img-wrap">
          <img src={image} className="card-img-top" alt={title} />
        </div>
        <div className="card-body">
          <p className="card-text">{title}</p>
          <p className="card-text">{`${price} руб.`}</p>
          <Link to={`/catalog/${id}`} className="btn btn-outline-primary">Заказать</Link>
        </div>
      </div>
    </div>
  );
}
