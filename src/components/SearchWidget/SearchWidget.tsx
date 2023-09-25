import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function SearchWidget() {
  const [isVisible, setIsVisible] = useState(false);
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const handleClick = () => {
    setIsVisible((prev) => !prev);

    if (value) {
      navigate(`/catalog?product=${value}`, {state: {value}});
      setValue('');
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setValue(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    handleClick();
  };

  return (
    <>
      <div data-id="search-expander" className="header-controls-pic header-controls-search" onClick={handleClick}></div>
      <form data-id="search-form" onSubmit={handleSubmit} className={`header-controls-search-form form-inline ${isVisible ? '' : 'invisible'}`}>
        <input 
          className="form-control" 
          placeholder="Поиск" 
          type="search" 
          name="search"
          value={value}
          onChange={handleChange}
        />
      </form>
    </>
  );
}
