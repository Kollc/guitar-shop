import { GuitarType } from '../../types/types';

type GuitarTabsProps = {
  guitar: GuitarType,
};

function GuitarTabs({guitar}: GuitarTabsProps): JSX.Element {
  return (
    <div className="tabs">
      <a className="button button--medium tabs__button" href="#characteristics">Характеристики</a>
      <a className="button button--black-border button--medium tabs__button" href="#description">Описание</a>
      <div className="tabs__content" id="characteristics">
        <table className="tabs__table">
          <tr className="tabs__table-row">
            <td className="tabs__title">Артикул:</td>
            <td className="tabs__value">{guitar.vendorCode}</td>
          </tr>
          <tr className="tabs__table-row">
            <td className="tabs__title">Тип:</td>
            <td className="tabs__value">Электрогитара</td>
          </tr>
          <tr className="tabs__table-row">
            <td className="tabs__title">Количество струн:</td>
            <td className="tabs__value">{guitar.stringCount} струнная</td>
          </tr>
        </table>
        <p className="tabs__product-description hidden">{guitar.description}</p>
      </div>
    </div>
  );
}

export default GuitarTabs;
