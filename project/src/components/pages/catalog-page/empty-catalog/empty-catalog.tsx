function EmptyCatalog(): JSX.Element {
  return (
    <div className="cart__empty" data-testid="empty-message">
      <h2 className="cart__empty-title">Ничего не найдено :(</h2>
    </div>
  );
}

export default EmptyCatalog;
