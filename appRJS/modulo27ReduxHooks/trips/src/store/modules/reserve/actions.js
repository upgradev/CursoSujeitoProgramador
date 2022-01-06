// escuta pelo saga
export function addReserveRequest(id) {
  return {
    type: "ADD_RESERVE_REQUEST",
    id: id,
  };
}

export function addReserveSuccess(trip) {
  return {
    type: "ADD_RESERVE_SUCCESS",
    trip: trip,
  };
}

export function removerReserve(id) {
  return {
    type: "REMOVE_RESERVE",
    id,
  };
}

// request pelo sagas Sucesss pelo reducer
export function updateAmountRequest(id, amount) {
  return {
    type: "UPDATE_RESERVE_REQUEST",
    id,
    amount,
  };
}

export function updateAmountSuccess(id, amount) {
  return {
    type: "UPDATE_RESERVE_SUCCESS",
    id,
    amount,
  };
}
