import useJsonFetch from "../../hooks/useJsonFetch";
import { IProduct } from "../../models/models";
import { Card } from "../Card";

export function TopSalesList() {
  const [ data ] = useJsonFetch<IProduct[]>(import.meta.env.VITE_TOP_SALES_URL);

  return (
    <div className="row">
      { data && data.map(item => (<Card key={item.id} id={item.id} title={item.title} price={item.price} image={item.images[0]} />)) }
    </div>
  );
}
