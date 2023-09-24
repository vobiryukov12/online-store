import { Catalog } from "../../components/Catalog";
import { Section } from "../../components/Section";
import { TopSalesList } from "../../components/TopSalesList";

export function Home() {
  return (
    <>
      <Section>
        <h2 className="text-center">Хиты продаж!</h2>
        
        <TopSalesList />
      </Section>
      
      <Section>
        <h2 className="text-center">Каталог</h2>
        
        <Catalog />
      </Section>
    </>
  );
}
