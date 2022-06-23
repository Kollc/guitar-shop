import { useMemo } from 'react';
import { GuitarType } from '../../types/types';
import CardItem from '../card-item/card-item';

type CardListProps = {
  guitars: GuitarType[],
}

function CardList({guitars}: CardListProps): JSX.Element {
  return (
    <div className="cards catalog__cards" data-testid='guitars-list'>
      {useMemo(() => guitars.map((guitar) => <CardItem key={guitar.id} guitar={guitar}/>), [guitars])}
    </div>
  );
}

export default CardList;
