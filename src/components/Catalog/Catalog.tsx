import { useEffect, useState } from "react";
import useJsonFetch from "../../hooks/useJsonFetch";
import { IProduct } from "../../models/models";
import { Card } from "../Card";
import { Categories } from "../Categories";
import { ButtonMore } from "../ButtonMore";
import { useSearchParams } from "react-router-dom";

export function Catalog() {
  const [ searchParams ] = useSearchParams();
  const productQuery = searchParams.get('product') || '';
  const query = productQuery ? `&q=${productQuery}` : '';

  const [ categoryId, setCategoryId ] = useState(0);
  const [ data, fetchData, numberOfElements ] = useJsonFetch<IProduct[]>(productQuery ? `${import.meta.env.VITE_ITEMS_URL}?q=${productQuery}` : import.meta.env.VITE_ITEMS_URL);
  const [ offset, setOffset ] = useState(6);

  useEffect(() => {
    setCategoryId(0);
  }, [query]);
  
  const handleSelect = (id: number) => {
    setCategoryId(id);
    setOffset(0);

    fetchData(`${import.meta.env.VITE_ITEMS_URL}?categoryId=${id}${query}`);
  };

  const loadMore = (offset: number) => {
    setOffset(offset);

    fetchData(`${import.meta.env.VITE_ITEMS_URL}?categoryId=${categoryId}&offset=${offset}${query}`, data);
  };

  return (
    <>
      <Categories selected={categoryId} onSelectFilter={handleSelect} />
      
      <div className="row">
        { data && data.map(item => (<Card key={item.id} id={item.id} title={item.title} price={item.price} image={item.images[0]} />)) }
      </div>

      { (data && numberOfElements >= 6) && (<ButtonMore handleClick={() => loadMore(offset + 6)} />) }
    </>
  );
}
