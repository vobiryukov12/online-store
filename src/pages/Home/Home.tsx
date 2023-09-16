import { Section } from "../../components/Section";

export function Home() {
  return (
    <>
      <Section>
        <h2 className="text-center">Хиты продаж!</h2>
        <div className="preloader">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </Section>
      
      <Section>
        <h2 className="text-center">Каталог</h2>
        <div className="preloader">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </Section>
    </>
  );
}
