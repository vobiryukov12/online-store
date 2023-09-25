import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const productQuery = searchParams.get('product') || '';
  const [value, setValue] = useState(productQuery);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setValue(value);

    !value && setSearchParams({});
  };

  useEffect(() => {
    setValue(productQuery);
  }, [productQuery]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    value ? setSearchParams({product: value}) : setSearchParams({});
  };

  return (
    <form className="catalog-search-form form-inline" onSubmit={handleSubmit}>
      <input 
        className="form-control" 
        placeholder="Поиск" 
        name="search"
        value={value}
        onChange={handleChange}
      />
    </form>
  );
}
