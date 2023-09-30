import { Cart } from "../../components/Cart";
import { Section } from "../../components/Section";

export function CartPage() {
  return (
    <>
      <Section>
        <h2 className="text-center">Корзина</h2>
        <Cart />
      </Section>

      <Section>
        <h2 className="text-center">Оформить заказ</h2>
        <p>Форма оформления заказа</p>
      </Section>
    </>
  );
}
