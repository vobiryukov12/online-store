import { Section } from "../../components/Section";
import { Search } from "../../components/Search";

export function Catalog() {
  return (
    <Section>
      <h2 className="text-center">Каталог</h2>

      <Search />

      <div className="preloader">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </Section>
  );
}
