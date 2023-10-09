import { useEffect, useState } from "react";
import useJsonFetch from "../../hooks/useJsonFetch";
import { IProduct } from "../../models/models";
import { Card } from "../Card";
import { Categories } from "../Categories";
import { ButtonMore } from "../ButtonMore";
import { useSearchParams } from "react-router-dom";
import { ErrorMessage } from "../ErrorMessage";
import { TemplateCards } from "../TemplateCards";

export function Catalog() {
  const [ searchParams ] = useSearchParams();
  const productQuery = searchParams.get('product') || '';

  const [ categoryId, setCategoryId ] = useState(0);

  const productQueryParams = new URLSearchParams({q: productQuery}).toString();

  const [ data, fetchData, numberOfElements, setData, loading, error ] = useJsonFetch<IProduct[]>(productQuery ? `${import.meta.env.VITE_ITEMS_URL}?${productQueryParams}` : import.meta.env.VITE_ITEMS_URL);
  const [ offset, setOffset ] = useState(6);

  useEffect(() => {
    setCategoryId(0);
    setData([]);
  }, [productQuery]);
  
  const handleSelect = (id: number) => {
    setCategoryId(id);
    setOffset(0);

    const query = new URLSearchParams({categoryId: String(id)});
    productQuery && query.append('q', productQuery);
    query.toString();

    if (id !== categoryId) {
      setData([]);
      fetchData(`${import.meta.env.VITE_ITEMS_URL}?${query}`);
    }
  };

  const loadMore = (offset: number) => {
    setOffset(offset);

    const query = new URLSearchParams({categoryId: String(categoryId), offset: String(offset)});
    productQuery && query.append('q', productQuery);
    query.toString();
    
    fetchData(`${import.meta.env.VITE_ITEMS_URL}?${query}`);
  };

  return (
    <>
      <Categories selected={categoryId} onSelectFilter={handleSelect} />

      {
        data && data.length > 0
        ?
        <>
          <div className="row card-wrap">
            { data.map(item => (<Card key={item.id} id={item.id} title={item.title} price={item.price} image={item.images[0]} />)) }
          </div>
          { (data && numberOfElements >= 6) && (<ButtonMore loading={loading} handleClick={() => error ? loadMore(offset) : loadMore(offset + 6)} />) }
        </>
        :
        <>
        <div className="preloader-container">
          { error && <ErrorMessage error={error} /> }
          { (productQuery && !loading && !error) && <p>Товаров, соответствующих вашему запросу, не обнаружено</p> }
        </div>
          { loading && <TemplateCards /> }
        </>
      }
    </>
  );
}
