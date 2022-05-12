import { useState } from 'react';
import { GuitarType } from '../../types/types';
import { GuitarTabsList } from '../../consts';

type GuitarTabsProps = {
  guitar: GuitarType,
};

function GuitarTabs({guitar}: GuitarTabsProps): JSX.Element {
  const [activeTab, setActiveTab] = useState(GuitarTabsList.Characteristics);

  return (
    <div className="tabs">
      <button
        className={`button button--medium tabs__button ${activeTab !== GuitarTabsList.Characteristics && 'button--black-border'}`}
        onClick={() => setActiveTab(GuitarTabsList.Characteristics)}
      >
        Характеристики
      </button>

      <button
        data-testid='description-button'
        className={`button button--medium tabs__button ${activeTab !== GuitarTabsList.Description && 'button--black-border'}`}
        onClick={() => setActiveTab(GuitarTabsList.Description)}
      >
        Описание
      </button>

      <div className="tabs__content" id="characteristics">
        <table data-testid='characteristics' className={`tabs__table ${activeTab !== GuitarTabsList.Characteristics && 'hidden'}`}>
          <tbody>
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
          </tbody>
        </table>
        <p data-testid='description' className={`tabs__product-description ${activeTab !== GuitarTabsList.Description && 'hidden'}`}>{guitar.description}</p>
      </div>
    </div>
  );
}

export default GuitarTabs;
