import { Container, Head, Titulo, BemVindo } from "./styles";

function App() {
  return (
    <Container>
      <Head>
        <Titulo>Projeto Styled</Titulo>
      </Head>

      <BemVindo cor="#0000ff" tamanho={55}>
        Bem Vindo ao Sistema
      </BemVindo>
    </Container>
  );
}

export default App;

{
  /* <div className="container">
<header className="header">
  <a className="titulo">Projeto Styled</a>
</header>

<h1>Bem Vindo ao Sistema</h1>

</div> */
}
