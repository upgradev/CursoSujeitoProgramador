import React, { useEffect, useState } from "react";
import firebase from "./firebaseConnection";
import "./style.css";

function App() {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [posts, setPosts] = useState([]);
  const [idPost, setIdPost] = useState("");

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [user, setUser] = useState(false);
  const [userLogged, setUserLogged] = useState({});

  useEffect(() => {
    const loadPosts = async () => {
      await firebase
        .firestore()
        .collection("posts")
        .onSnapshot((doc) => {
          let meusPosts = [];
          doc.forEach((item) => {
            meusPosts.push({
              id: item.id,
              titulo: item.data().titulo,
              autor: item.data().autor,
            });
          });
          setPosts(meusPosts);
        });
    };

    loadPosts();
  }, []);

  useEffect(() => {
    const checkLogin = async () => {
      await firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          //set tem usuario logado
          setUser(true);
          setUserLogged({
            uid: user.uid,
            email: user.email,
          });
        } else {
          // não possui user logado
          setUser(false);
          setUserLogged({});
        }
      });
    };
    checkLogin();
  }, []);

  const handleAdd = async () => {
    await firebase
      .firestore()
      .collection("posts")
      .add({
        titulo: titulo,
        autor: autor,
      })
      .then(() => {
        console.log("dados cadastrados");
        setAutor("");
        setTitulo("");
      })
      .catch((err) => {
        console.log(err);
      });
    // await firebase
    //   .firestore()
    //   .collection("posts")
    //   .doc("12345")
    //   .set({
    //     titulo: titulo,
    //     autor: autor,
    //   })
    //   .then(() => {
    //     console.log("dados cadastrados");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  const buscarPost = async () => {
    await firebase
      .firestore()
      .collection("posts")
      .get()
      .then((snapshot) => {
        let lista = [];

        snapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            titulo: doc.data().titulo,
            autor: doc.data().autor,
          });
        });

        setPosts(lista);
      })
      .catch((err) => {
        console.log(err);
      });

    // await firebase
    //   .firestore()
    //   .collection("posts")
    //   .doc("bMPGBU1ukJ0Ehtq7UaAQ")
    //   .get()
    //   .then((snapshot) => {
    //     setTitulo(snapshot.data().titulo);
    //     setAutor(snapshot.data().autor);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   })
  };

  const editarPost = async () => {
    await firebase
      .firestore()
      .collection("posts")
      .doc(idPost)
      .update({
        titulo: titulo,
        autor: autor,
      })
      .then(() => {
        console.log("dados atualizados com sucesso");
        setIdPost("");
        setTitulo("");
        setAutor("");
      });
  };

  const excluirPost = async (id) => {
    await firebase
      .firestore()
      .collection("posts")
      .doc(id)
      .delete()
      .then(() => {
        alert("Esse post foi excluido!");
      });
  };

  const novoUsuario = async () => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, senha)
      .then((value) => {
        console.log(value);
        setEmail("");
        setSenha("");
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
  };

  const fazerLogin = async () => {
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, senha)
      .then((value) => {
        console.log(value);
        setEmail("");
        setSenha("");
      })
      .catch((err) => {
        console.log("error ao fazer login: " + err);
      });
  };

  return (
    <div className="app">
      <h1>Hello world </h1>
      <br />

      {user && (
        <div>
          <strong>Seja bem vindo você esta logado</strong>
          <br />
          <span>
            {userLogged.uid} - {userLogged.email}
          </span>
          <br />
          <br />
        </div>
      )}

      <div className="container">
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
        <button onClick={fazerLogin}>Fazer login</button>
        <br />
        <button onClick={novoUsuario}>Cadastrar</button>
        <br />
        <button onClick={logout}>Sair da conta</button>
      </div>
      <br />
      <hr />

      <div className="container">
        <h2>Banco de dados</h2>
        <label htmlFor="">ID</label>

        <input
          type="text"
          value={idPost}
          onChange={(e) => setIdPost(e.target.value)}
        />

        <label>Titulo</label>
        <textarea
          type="text"
          name="titulo"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />

        <label>Autor</label>
        <input
          type="text"
          name="autor"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
        />

        <button onClick={handleAdd}>Cadastrar</button>

        <button onClick={buscarPost}>Buscar Post</button>
        <button onClick={editarPost}>Editar</button>
        <br />

        <ul>
          {posts.map((post) => {
            return (
              <li key={post.id}>
                <span>Id: {post.id}</span>
                <br />
                <span>Titulo: {post.titulo}</span>
                <br />
                <span>Autor: {post.autor}</span>
                <br />
                <button onClick={() => excluirPost(post.id)}>
                  Excluir post
                </button>
                <br /> <br />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
