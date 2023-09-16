import { Section } from "../../components/Section";

export function Cart() {
  return (
    <>
      <Section>
        <h2 className="text-center">Корзина</h2>
        <div className="preloader">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </Section>

      <Section>
        <h2 className="text-center">Оформить заказ</h2>
        <p>Форма оформления заказа</p>
      </Section>
    </>
  );
}
