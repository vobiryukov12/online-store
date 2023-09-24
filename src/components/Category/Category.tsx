interface IСategoryProps {
  id: number,
  title: string,
  selected: number,
  onSelectFilter: (id: number) => void
}

export function Category({ id, title, selected, onSelectFilter }: IСategoryProps) {
  return (
    <li className="nav-item">
      <span className= {`nav-link ${id === selected ? 'active' : ''}`} onClick={() => onSelectFilter(id)}>{title}</span>
    </li>
  );
}
