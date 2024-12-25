import React from 'react';
import { currencies, currencyCodes } from '../constants/currency';
import { getCurrencySymbol } from '../helpers/calculations';
import { useAppDispatch } from '../app/hooks';
import { setCurrency } from '../app/features/scheduleSlice';

const CurrencyChangerComponent = () => {
  const dispatch=useAppDispatch()
  function handleCurrencyChange(e){
    dispatch(setCurrency(e.target.value))
  }
  return (
    <div className='z-20'>
      <select
        className='select select-ghost font-semibold select-bordered'
        defaultValue='INR' // Set the default selected value here
        onChange={handleCurrencyChange}
      >
        {currencyCodes.map((code, index) => (
          <option key={index} value={code}>
            {`${code} (${getCurrencySymbol(code)})`}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyChangerComponent;
