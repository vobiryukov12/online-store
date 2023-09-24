import { Section } from "../../components/Section";
import { Search } from "../../components/Search";
import { Catalog } from "../../components/Catalog";

export function CatalogPage() {
  return (
    <Section>
      <h2 className="text-center">Каталог</h2>

      <Search />

      <Catalog />
    </Section>
  );
}
