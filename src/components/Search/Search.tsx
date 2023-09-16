import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

export function Search() {
  const location = useLocation();
  const locationState = location.state ? location.state.value : '';
  const [value, setValue] = useState(locationState);
  const [searchParams, setSearchParams] = useSearchParams();
  
  const productQuery = searchParams.get('product') || '';

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setValue(value);
  };

  useEffect(() => {
    setValue(locationState);
  }, [locationState]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSearchParams({product: value});
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
