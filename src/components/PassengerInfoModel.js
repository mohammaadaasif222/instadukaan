import React, { useState, useContext } from 'react';
import { observer } from 'mobx-react';
import cartStore from '@/stores/CartStore';

const PassengerInfoModal = () => {
  const [passengerInfo, setPassengerInfo] = useState({});
  const store = useContext(cartStore);

  const handleFormSubmit = () => {
    store.updatePassengerInfo(passengerInfo);
    // Close the modal or navigate back
  };

  return (
    <div className="passenger-info-modal">
      <h2>Passenger Information</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={passengerInfo.name}
            onChange={(e) => setPassengerInfo({ ...passengerInfo, name: e.target.value })}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={passengerInfo.email}
            onChange={(e) => setPassengerInfo({ ...passengerInfo, email: e.target.value })}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default observer(PassengerInfoModal);
