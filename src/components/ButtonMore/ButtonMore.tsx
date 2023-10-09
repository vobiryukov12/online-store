interface IButtonMoreProps {
  handleClick: () => void,
  loading: boolean,
}

export function ButtonMore({ handleClick, loading }: IButtonMoreProps) {
  return (
    <div className="text-center catalog-btn">
      <button className="btn btn-outline-primary" disabled={loading ? true : false} onClick={handleClick}>{loading ? 'Загрузка...' : 'Загрузить ещё'}</button>
    </div>
  );
}
