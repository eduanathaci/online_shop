import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Route } from 'react-router-dom'

// screens
import Home from './screens/Home'
import Product from './screens/Product'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={Home} exact />
          <Route path="/product/:id" component={Product} />
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
