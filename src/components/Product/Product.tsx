import { useNavigate, useParams } from "react-router-dom";
import useJsonFetch from "../../hooks/useJsonFetch";
import { useContext, useState } from "react";
import { IProductCart, IProductFull } from "../../models/models";
import { CtxData, StateContext } from "../../context/StateContext";
import { ErrorMessage } from "../ErrorMessage";
import { Loader } from "../Loader";

export function Product() {
  const params = useParams();
  const productId = params.id;
  const [ data, , , , loading, error ] = useJsonFetch<IProductFull>(`${import.meta.env.VITE_ITEMS_URL}/${productId}`);
  const [ selectedSize, setSelectedSize] = useState('');
  const [ counter, setCounter ] = useState(1);
  const navigate = useNavigate();
  const { dispatch } = useContext<CtxData>(StateContext);

  const someAvailableTrue = data && data.sizes.some(item=> item.available === true);

  const increase = () => {
    counter < 10 && setCounter(count => count + 1);
  };
 
  const decrease = () => {
    counter > 1 && setCounter(count => count - 1);
  };

  const handleClick = (size: string) => {
    setSelectedSize(size);
  };

  const handleButtonClick = () => {
    let allItemsCart:IProductCart[] = [];
    const { id, title, price } = data || {} as { id: number, title: string, price: number };
    let containsObject = false;
    const productId = +`${id}-${selectedSize}`.replace(/\D/g, '');

    if (localStorage.getItem('products')) {
      allItemsCart = JSON.parse(localStorage.getItem('products') || '');

      allItemsCart.forEach((item) => {
        if (item.id === productId && item.size === selectedSize) {
          item.counter += counter;
          item.price += price * counter;

          containsObject = true;
        
          localStorage.setItem('products', JSON.stringify(allItemsCart));
        }
      });
    }

    if (!containsObject) {
      dispatch({
        type: 'add',
        payload: 1
      });

      allItemsCart.push(
        {
          id: productId, 
          number: allItemsCart.length + 1, 
          title, 
          price: price * counter, 
          size: selectedSize, 
          counter
        }
      );

      localStorage.setItem('products', JSON.stringify(allItemsCart));
    }

    navigate('/cart');
  };

  return (
    data 
    ? 
    <section className="catalog-item">
      <h2 className="text-center">{data.title}</h2>
      <div className="row product-wrap">
        <div className="col-5 product-img">
          <img src={data.images[0]} className="img-fluid" alt={data.title} />
        </div>
        <div className="col-7 product-information">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>Артикул</td>
                <td>{data.sku}</td>
              </tr>
              <tr>
                <td>Производитель</td>
                <td>{data.manufacturer}</td>
              </tr>
              <tr>
                <td>Цвет</td>
                <td>{data.color}</td>
              </tr>
              <tr>
                <td>Материалы</td>
                <td>{data.material}</td>
              </tr>
              <tr>
                <td>Сезон</td>
                <td>{data.season}</td>
              </tr>
              <tr>
                <td>Повод</td>
                <td>{data.reason}</td>
              </tr>
            </tbody>
          </table>   
            <div className="text-center">
              {
                someAvailableTrue 
                ?
                <div className="product-sizes">
                  <span>Размеры в наличии:</span> {
                    data.sizes.map(item => item.available && <span key={item.size} className={`catalog-item-size ${item.size === selectedSize ? "selected" : ""}`} onClick={() => handleClick(item.size)}>{item.size}</span>)
                  } 
                </div>
                :
                'К сожалению, нет доступных размеров, попробуйте посмотреть позднее'
              }
              {
                someAvailableTrue && 
                <div className="product-count">Количество: 
                  <span className="btn-group btn-group-sm pl-2">
                    <button className="btn btn-secondary" onClick={decrease}>-</button>
                    <span className="btn btn-outline-primary">{counter}</span>
                    <button className="btn btn-secondary" onClick={increase}>+</button>
                  </span>
                </div>
              }
            </div>

            {
              someAvailableTrue && (selectedSize ? <button onClick={handleButtonClick} className="btn btn-danger btn-block btn-lg">В корзину</button> : <button className="btn btn-danger btn-block btn-lg" disabled={true}>В корзину</button>)
            }

          </div>
        </div>
      </section>
      :
      <div className="preloader-container">
        { error && <ErrorMessage error={error} /> }
        { loading && <Loader /> }
      </div>
  );
}
