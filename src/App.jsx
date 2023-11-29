import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {

  return (
    <>
      <Header />
      <section className='container'>
        <div className='apresentação'>
          <p>
            Olá. estou <br/>
            tentando aprender <br/>
            sobre <span>React.</span>
          </p>
          <button className='btn btn-red'>Pagina inicial React</button>
        </div>
        <figure>
          <img className='img-home' src="/developer-red.svg" alt="Imagem de home" />
        </figure>
      </section>
      <Footer />
    </>
  )
}

export default App
