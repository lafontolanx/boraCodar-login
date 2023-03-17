import { Login } from './components/Login/login'
import { Container } from './style'
import { GlobalStyle } from './style/GlobalStyle'

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Login />
      <img src="../../public/img.png" alt="Ilustração" />
    </Container>
  )
}

export default App
