import { useContext, useEffect, useState } from "react";
import { IForm, IProductCart } from "../../models/models";
import { CtxData, StateContext } from "../../context/StateContext";

export function OrderForm() {
  const [ ordered, setOrdered ] = useState(false);
  const [ alert, setAlert ] = useState(true);
  const [ form, setForm ] = useState<IForm>({
    phone: '',
    address: '',
    agreement: false
  });
  const { phone, address, agreement } = form;

  const { state: { count }, dispatch } = useContext<CtxData>(StateContext);

  const items: IProductCart[] = localStorage.getItem('products') && JSON.parse(localStorage.getItem('products') || '');
  const basicItems = items && items.map(({ number, size, title, counter: count, ...item }) => (
    { count, ...item }
  ));

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = event.target;

    setForm(prevForm => ({
      ...prevForm,
      [name]: type === 'checkbox' ? !agreement : value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setOrdered(true);

    await fetch(import.meta.env.VITE_ORDER_URL, {
      method: 'POST', 
  
      body: JSON.stringify({
        "owner": {
          "phone": phone,
          "address": address,
        },
        "items": basicItems
      }),
  
      headers: {
      'Content-type': 'application/json; charset=UTF-8',
      }
    });

    setForm({
      phone: '',
      address: '',
      agreement: false
    });

    localStorage.removeItem('products');

    dispatch({
      type: 'remove',
      payload: basicItems.length
    });

    dispatch({
      type: 'removeProducts',
      payload: []
    });
  };

  useEffect(() => {
    if (ordered) {
      const timer = setTimeout(() => {
        setAlert(false);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [ordered]);   

  return (
    <>
      { 
        ordered && alert && <div className="alert alert-success" role="alert">
          Заказ офрмлен
        </div>
      }
      { count > 0 && <div className="card" style={{ maxWidth: '30rem', margin: '0 auto' }}>
        <form className="card-body" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="phone">Телефон</label>
            <input 
              className="form-control" 
              id="phone" 
              name="phone" 
              placeholder="Ваш телефон"
              value={phone}
              onChange={handleChange}  
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Адрес доставки</label>
            <input 
              className="form-control" 
              id="address" 
              name="address" 
              placeholder="Адрес доставки"
              value={address}
              onChange={handleChange} 
            />
          </div>
          <div className="form-group form-check">
            <input 
              type="checkbox" 
              className="form-check-input" 
              id="agreement" 
              name="agreement"
              checked={agreement}
              onChange={handleChange} 
            />
            <label className="form-check-label" htmlFor="agreement">Согласен с правилами доставки</label>
          </div>
          <button type="submit" className="btn btn-outline-secondary" disabled={agreement ? false : true}>Оформить</button>
        </form>
      </div>
      }
    </>
  );
}
