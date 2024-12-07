export const initialState = {
  parkingLots: []
};

export const parkingReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PARKING_LOTS':
      return {parkingLots: action.payload};
    case 'PARK_CAR':
      return {
        ...state,
        parkingLots: state.parkingLots.map(lot =>
          lot.id === action.payload.parkingLot
            ? { ...lot, tickets: [...lot.tickets, { plateNumber: action.payload.plateNumber, position: action.payload.position }] }
            : lot
        )
      };
    case 'FETCH_CAR':
      return {...state, parkingLots: state.parkingLots.filter(lot => lot.plateNumber !== action.payload.plateNumber)};
    default:
      return state;
  }
};