import useJsonFetch from "../../hooks/useJsonFetch";
import { IСategory } from "../../models/models";
import { Category } from "../Category";

interface ICategoriesProps {
  selected: number,
  onSelectFilter: (id: number) => void
}

export function Categories({ selected, onSelectFilter }: ICategoriesProps) {
  const [ data ] = useJsonFetch<IСategory[]>(import.meta.env.VITE_CATEGORIES_URL);

  const allСategories = {
    id: 0, title: 'Все'
  };

  return (
    <ul className="catalog-categories nav justify-content-center">
      { data && [allСategories, ...data].map(item => <Category key={item.id} id={item.id} title={item.title} selected={selected} onSelectFilter={onSelectFilter} />)}
    </ul>
  );
}
