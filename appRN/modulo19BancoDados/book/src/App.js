import React, {useEffect, useState} from 'react';
import {View, Text, Keyboard} from 'react-native';
import Books from './Books';
import {
  Container,
  Logo,
  Title,
  Input,
  CenterView,
  Botao,
  BotaoText,
  List,
} from './styles';

import getRealm from './services/realm';

export default function App() {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [books, setBooks] = useState([]);
  const [idEdit, setIdEdit] = useState(null);
  const [disabledBtn, setDisabledBtn] = useState(false);

  useEffect(() => {
    const loadBooks = async () => {
      const realm = await getRealm();
      const data = realm.objects('Book');
      setBooks(data);
    };
    loadBooks();
  }, []);

  const saveBook = async data => {
    const realm = await getRealm();

    const id =
      realm.objects('Book').sorted('id', true).length > 0
        ? realm.objects('Book').sorted('id', true)[0].id + 1
        : 1;

    const dadosLivro = {
      id: id,
      nome: data.nome,
      preco: data.preco,
    };

    realm.write(() => {
      realm.create('Book', dadosLivro);
    });
  };

  const addBook = async () => {
    if (nome === '' || preco === '') {
      alert('Preencha todos os campos');
      return;
    }
    try {
      const data = {
        nome: nome,
        preco: preco,
      };

      await saveBook(data);
      setNome('');
      setPreco('');
      Keyboard.dismiss();
    } catch (error) {
      alert(error);
    }
  };

  const editarBook = data => {
    setNome(data.nome);
    setPreco(data.preco);
    setIdEdit(data.id);
    setDisabledBtn(true);
  };

  const editBook = async () => {
    if (idEdit === null) {
      alert('Voce não pode editar');
      return;
    }

    const realm = await getRealm();
    const response = {
      id: idEdit,
      nome: nome,
      preco: preco,
    };

    await realm.write(() => {
      realm.create('Book', response, 'modified');
    });

    const dadosAlterados = await realm.objects('Book').sorted('id', false);
    setBooks(dadosAlterados);
    setNome('');
    setPreco('');
    setIdEdit(null);
    setDisabledBtn(false);
    Keyboard.dismiss();
  };

  const excluirBook = async data => {
    const realm = await getRealm();
    const ID = data.id;

    realm.write(() => {
      if (realm.objects('Book').filtered('id =' + ID).length > 0) {
        realm.delete(realm.objects('Book').filtered('id =' + ID));
      }
    });

    const livrosAtuais = realm.objects('Book').sorted('id', false);
    setBooks(livrosAtuais);
  };

  return (
    <Container>
      <Logo>Próximos Livros</Logo>
      <Title>Nome</Title>
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        value={nome}
        onChangeText={text => setNome(text)}
      />

      <Title>Preço</Title>
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        value={preco}
        onChangeText={text => setPreco(text)}
      />

      <CenterView>
        <Botao
          onPress={addBook}
          disabled={disabledBtn}
          style={{opacity: disabledBtn ? 0.1 : 1}}>
          <BotaoText>Cadastrar</BotaoText>
        </Botao>

        <Botao onPress={editBook}>
          <BotaoText>Editar</BotaoText>
        </Botao>
      </CenterView>

      <List
        data={books}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <Books data={item} editar={editarBook} excluir={excluirBook} />
        )}
        showsVerticalScrollIndicator={false}
        keyBoardShouldPersistTaps="handle"
      />
    </Container>
  );
}
