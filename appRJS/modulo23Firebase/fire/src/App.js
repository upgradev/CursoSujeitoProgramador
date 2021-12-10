import React, { useState } from "react";
import firebase from "./firebaseConnection";
import "./style.css";

function App() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cargo, setCargo] = useState("");
  const [nome, setNome] = useState("");

  const [user, setUser] = useState({});

  const novoUsuario = async () => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, senha)
      .then(async (value) => {
        await firebase
          .firestore()
          .collection("users")
          .doc(value.user.uid)
          .set({
            nome: nome,
            cargo: cargo,
            status: true,
          })
          .then(() => {
            setEmail("");
            setSenha("");
            setCargo("");
            setNome("");
          });
      })
      .catch((err) => {
        if (err.code === "auth/weak-password") {
          alert("senha muito fraca");
        } else if (err.code === "auth/email-already-in-use") {
          alert("Esse email ja foi cadastrado");
        }
      });
  };

  const logout = async () => {
    await firebase.auth().signOut();
    setUser({})
  };

  const login = async () => {
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, senha)
      .then(async (value) => {
        await firebase
          .firestore()
          .collection("users")
          .doc(value.user.uid)
          .get()
          .then((snapshot) => {
            setUser({
              nome: snapshot.data().nome,
              cargo: snapshot.data().cargo,
              status: snapshot.data().status,
              email: value.user.email,
            });
            setEmail("");
            setSenha("");
          });
      })
      .catch((err) => {
        console.log("erro ao logar: " + err);
      });
  };

  return (
    <div className="app">
      <h1>Hello world </h1>
      <br />

      <div className="container">
        <label htmlFor="">Nome</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <label htmlFor="">Cargo</label>
        <input
          type="text"
          value={cargo}
          onChange={(e) => setCargo(e.target.value)}
        />

        <label htmlFor="">Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="">Senha</label>
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <br />
        <button onClick={login}>Login</button>
        <br />
        <button onClick={novoUsuario}>Cadastrar</button>
        <br />
        <button onClick={logout}>Sair da conta</button>
      </div>
      <br />
      <hr />
      <br />

      {Object.keys(user).length > 0 && (

        <div>
          <strong>Olá {user.nome}</strong><br />
          <strong>Cargo: </strong>{user.cargo}<br />
          <strong>Email: </strong>{user.email}<br />
          <strong>Status: </strong>{user.status ? "Ativo" : "Inativo"}<br />
        </div>

      )}

    </div>
  );
}

export default App;
