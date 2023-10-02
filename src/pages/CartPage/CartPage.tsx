import { useContext } from "react";
import { Cart } from "../../components/Cart";
import { OrderForm } from "../../components/OrderForm";
import { Section } from "../../components/Section";
import { CtxData, StateContext } from "../../context/StateContext";

export function CartPage() {
  const { state: { count } } = useContext<CtxData>(StateContext);
  
  return (
    <>
      <Section>
        <h2 className="text-center">Корзина</h2>
        <Cart />
      </Section>

      <Section>
        { count > 0 && <h2 className="text-center">Оформить заказ</h2> }
        <OrderForm />
      </Section>
    </>
  );
}
