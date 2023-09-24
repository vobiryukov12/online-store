interface IButtonMoreProps {
  handleClick: () => void
}

export function ButtonMore({ handleClick }: IButtonMoreProps) {
  return (
    <div className="text-center">
      <button className="btn btn-outline-primary" onClick={handleClick}>Загрузить ещё</button>
    </div>
  );
}
