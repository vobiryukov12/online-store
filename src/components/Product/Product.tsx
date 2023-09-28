import { Link, useParams } from "react-router-dom";
import useJsonFetch from "../../hooks/useJsonFetch";
import { IProductFull } from "../../models/models";
import { useState } from "react";

export function Product() {
  const params = useParams();
  const productId = params.id;
  const [ data ] = useJsonFetch<IProductFull>(`${import.meta.env.VITE_ITEMS_URL}/${productId}`);
  const [ selected, setSelected ] = useState('');
  const [ counter, setCounter ] = useState(1);

  const someAvailableTrue = data && data.sizes.some(item=> item.available === true);

  const increase = () => {
    counter < 10 && setCounter(count => count + 1);
  };
 
  const decrease = () => {
    counter > 1 && setCounter(count => count - 1);
  };

  const handleClick = (size: string) => {
    setSelected(size);
  };

  return (
    data && <section className="catalog-item">
      <h2 className="text-center">{data.title}</h2>
      <div className="row">
        <div className="col-5">
          <img src={data.images[0]} className="img-fluid" alt={data.title} />
        </div>
        <div className="col-7">
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
                <p>
                  Размеры в наличии: {
                    data.sizes.map(item => item.available && <span key={item.size} className={`catalog-item-size ${item.size === selected ? "selected" : ""}`} onClick={() => handleClick(item.size)}>{item.size}</span>)
                  } 
                </p>
                :
                'К сожалению, нет доступных размеров, попробуйте посмотреть позднее'
              }
              {
                someAvailableTrue && 
                <p>Количество: 
                  <span className="btn-group btn-group-sm pl-2">
                    <button className="btn btn-secondary" onClick={decrease}>-</button>
                    <span className="btn btn-outline-primary">{counter}</span>
                    <button className="btn btn-secondary" onClick={increase}>+</button>
                  </span>
                </p>
              }
            </div>

            {
              someAvailableTrue && (selected ? <Link to={'/cart'} className="btn btn-danger btn-block btn-lg">В корзину</Link> : <button className="btn btn-danger btn-block btn-lg" disabled={true}>В корзину</button>)
            }

          </div>
        </div>
      </section>
  );
}
