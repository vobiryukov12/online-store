import useJsonFetch from "../../hooks/useJsonFetch";
import { ICategory } from "../../models/models";
import { Category } from "../Category";

interface ICategoriesProps {
  selected: number,
  onSelectFilter: (id: number) => void
}

export function Categories({ selected, onSelectFilter }: ICategoriesProps) {
  const [ data ] = useJsonFetch<ICategory[]>(import.meta.env.VITE_CATEGORIES_URL);

  const allCategories = {
    id: 0, title: 'Все'
  };

  return (
    <ul className="catalog-categories nav justify-content-center">
      { data && [allCategories, ...data].map(item => <Category key={item.id} id={item.id} title={item.title} selected={selected} onSelectFilter={onSelectFilter} />)}
    </ul>
  );
}
