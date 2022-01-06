import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { MdFlightTakeoff } from "react-icons/md";
import "./style.css";

import {addReserve} from '../../store/modules/reserve/actions'

import api from "../../services/api";

export default function Home() {
  const dispatch = useDispatch();

  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const loadApi = async () => {
      const response = await api.get("trips");
      setTrips(response.data);
    };

    loadApi();
  }, []);

  const handleAdd = (trip) => {
    dispatch(addReserve(trip));
  };

  return (
    <div>
      <div className="box">
        {trips.map((trip) => (
          <li key={trip.id}>
            <img src={trip.image} alt={trip.title} />
            <strong>{trip.title}</strong>
            <span>Status: {trip.status ? "Disponível" : "Indisponível"} </span>
            <button type="button" onClick={() => handleAdd(trip)}>
              <div>
                <MdFlightTakeoff size={16} color="#fff" />
              </div>
              <span>Solicitara Reserva</span>
            </button>
          </li>
        ))}
      </div>
    </div>
  );
}
