import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdDelete, MdAddCircle, MdRemoveCircle } from "react-icons/md";
import { removerReserve, updateAmountReserve } from "../../store/modules/reserve/actions";

import "./style.css";

export default function Reservas() {
  const reserves = useSelector((state) => state.reserve);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removerReserve(id));
  };

  const decrementAmount = (trip) => {
    dispatch(updateAmountReserve(trip.id, trip.amount -1))
  }

  const incrementAmount = (trip) => {
    dispatch(updateAmountReserve(trip.id, trip.amount +1))
  }

  return (
    <div>
      <h1 className="title">Você solicitou {reserves.length} reservas</h1>
      {reserves.map((reserve) => (
        <div key={reserve.id} className="reservas">
          <img src={reserve.image} alt={reserve.title} />
          <strong>{reserve.title}</strong>
          <div id="amount">
            <button type="button" onClick={() => decrementAmount(reserve)}>
              <MdRemoveCircle size={25} color="#191919" />
            </button>
            <input type="text" readOnly value={reserve.amount} />
            <button type="button" onClick={() => incrementAmount(reserve)}>
              <MdAddCircle size={25} color="#191919" />
            </button>
          </div>

          <button onClick={() => handleRemove(reserve.id)} type="button">
            <MdDelete size={20} color="#191919" />
          </button>
        </div>
      ))}

      <footer>
        <button type="button">Solicitar Reservas</button>
      </footer>
    </div>
  );
}
