import useJsonFetch from "../../hooks/useJsonFetch";
import { IProduct } from "../../models/models";
import { Card } from "../Card";
import { ErrorMessage } from "../ErrorMessage";
import { TemplateTopSalesCards } from "../TemplateTopSalesCards";

export function TopSalesList() {
  const [ data, , , , loading, error ] = useJsonFetch<IProduct[]>(import.meta.env.VITE_TOP_SALES_URL);

  return (
    data 
    ?
    <div className="row card-wrap">
      { data.map(item => (<Card key={item.id} id={item.id} title={item.title} price={item.price} image={item.images[0]} />)) }
    </div>
    :
    <>
      <div className="preloader-container">
        { error && <ErrorMessage error={error} /> }
      </div>
      { loading && <TemplateTopSalesCards /> }
    </>
  );
}
