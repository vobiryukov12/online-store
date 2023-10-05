import { useEffect, useState } from "react";
import useJsonFetch from "../../hooks/useJsonFetch";
import { IProduct } from "../../models/models";
import { Card } from "../Card";
import { Categories } from "../Categories";
import { ButtonMore } from "../ButtonMore";
import { useSearchParams } from "react-router-dom";
import { ErrorMessage } from "../ErrorMessage";
import { Loader } from "../Loader";

export function Catalog() {
  const [ searchParams ] = useSearchParams();
  const productQuery = searchParams.get('product') || '';
  const query = productQuery ? `&q=${productQuery}` : '';

  const [ categoryId, setCategoryId ] = useState(0);
  const [ data, fetchData, numberOfElements, setData, loading, error ] = useJsonFetch<IProduct[]>(productQuery ? `${import.meta.env.VITE_ITEMS_URL}?q=${productQuery}` : import.meta.env.VITE_ITEMS_URL);
  const [ offset, setOffset ] = useState(6);

  useEffect(() => {
    setCategoryId(0);
    setData([]);
  }, [query]);
  
  const handleSelect = (id: number) => {
    setCategoryId(id);
    setOffset(0);

    if (id !== categoryId) {
      setData([]);
      fetchData(`${import.meta.env.VITE_ITEMS_URL}?categoryId=${id}${query}`);
    }
  };

  const loadMore = (offset: number) => {
    setOffset(offset);

    fetchData(`${import.meta.env.VITE_ITEMS_URL}?categoryId=${categoryId}&offset=${offset}${query}`);
  };

  return (
    <>
      <Categories selected={categoryId} onSelectFilter={handleSelect} />

      {
        data && data.length > 0
        ?
        <>
          <div className="row">
            { data.map(item => (<Card key={item.id} id={item.id} title={item.title} price={item.price} image={item.images[0]} />)) }
          </div>
          { (data && numberOfElements >= 6) && (<ButtonMore loading={loading} handleClick={() => error ? loadMore(offset) : loadMore(offset + 6)} />) }
        </>
        :
        <div className="preloader-container">
          { error && <ErrorMessage error={error} /> }
          { loading && <Loader /> }
          { (productQuery && !loading && !error) && <p>Товаров, соответствующих вашему запросу, не обнаружено</p> }
        </div>
      }
    </>
  );
}
