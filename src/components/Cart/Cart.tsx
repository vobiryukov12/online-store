import { useContext, useState } from "react";
import { CartProduct } from "../CartProduct";
import { IProductCart } from "../../models/models";
import { CtxData, StateContext } from "../../context/StateContext";

export function Cart() {
  const [ products, setProducts ] = useState<IProductCart[]>(
    localStorage.getItem('products') && JSON.parse(localStorage.getItem('products') || '')
  );

  const { dispatch } = useContext<CtxData>(StateContext);

  const totalPrice = products && products.reduce((accum, item) => accum + item.price, 0);

  const handleRemove = (id: number) => {
    const items = products.filter(item => item.id !== id);
    setProducts(items);
    localStorage.setItem('products', JSON.stringify(items));

    dispatch({
      type: 'remove',
      payload: 1
    });
  };

  return (
    products && products.length > 0 ? <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Название</th>
          <th scope="col">Размер</th>
          <th scope="col">Кол-во</th>
          <th scope="col">Стоимость</th>
          <th scope="col">Итого</th>
          <th scope="col">Действия</th>
        </tr>
      </thead>

      <tbody>
        {
          products && products.map(item => <CartProduct 
            id={item.id} 
            number={item.number} 
            key={item.id} 
            title={item.title} 
            price={item.price} 
            size={item.size} 
            counter={item.counter}
            handleRemove={handleRemove}
          />)
        }

        <tr>
          <td colSpan={5} className="text-right">Общая стоимость</td>
          <td>{`${totalPrice} руб.`}</td>
        </tr>
      </tbody>
    </table>
    : 'Здесь пусто'
  );
}