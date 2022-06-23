import { useState } from 'react';
import { GuitarType } from '../../types/types';
import { GuitarTabList, GuitarTypeDictionary } from '../../consts';

type GuitarTabsProps = {
  guitar: GuitarType,
};

function GuitarTabs({guitar}: GuitarTabsProps): JSX.Element {
  const [activeTab, setActiveTab] = useState(GuitarTabList.Characteristics);

  return (
    <div className="tabs">
      <button
        className={`button button--medium tabs__button ${activeTab !== GuitarTabList.Characteristics && 'button--black-border'}`}
        onClick={() => setActiveTab(GuitarTabList.Characteristics)}
      >
        Характеристики
      </button>

      <button
        data-testid='description-button'
        className={`button button--medium tabs__button ${activeTab !== GuitarTabList.Description && 'button--black-border'}`}
        onClick={() => setActiveTab(GuitarTabList.Description)}
      >
        Описание
      </button>

      <div className="tabs__content" id="characteristics">
        <table data-testid='characteristics' className={`tabs__table ${activeTab !== GuitarTabList.Characteristics && 'hidden'}`}>
          <tbody>
            <tr className="tabs__table-row">
              <td className="tabs__title">Артикул:</td>
              <td className="tabs__value">{guitar.vendorCode}</td>
            </tr>
            <tr className="tabs__table-row">
              <td className="tabs__title">Тип:</td>
              <td className="tabs__value">{GuitarTypeDictionary.get(guitar.type)}</td>
            </tr>
            <tr className="tabs__table-row">
              <td className="tabs__title">Количество струн:</td>
              <td className="tabs__value">{guitar.stringCount} струнная</td>
            </tr>
          </tbody>
        </table>
        <p data-testid='description' className={`tabs__product-description ${activeTab !== GuitarTabList.Description && 'hidden'}`}>{guitar.description}</p>
      </div>
    </div>
  );
}

export default GuitarTabs;
