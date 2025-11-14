import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
// import ListaTemas from './components/tema/listatemas/ListaTemas'
// import FormTema from './components/tema/formtema/FormTema'
// import DeletarTema from './components/tema/deletartema/DeletarTema'
// import ListaPostagens from './components/postagem/listapostagens/ListaPostagens'
// import FormPostagem from './components/postagem/formpostagem/FormPostagem'
// import DeletarPostagem from './components/postagem/deletarpostagem/DeletarPostagem'

function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              {/* <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastrartema" element={<FormTema />} />
              <Route path="/editartema/:id" element={<FormTema />} />
              <Route path="/deletartema/:id" element={<DeletarTema />} />
              <Route path="/postagens" element={<ListaPostagens />} />
              <Route path="/cadastrarpostagem" element={<FormPostagem />} />
              <Route path="/editarpostagem/:id" element={<FormPostagem />} />
              <Route path="/deletarpostagem/:id" element={<DeletarPostagem />} /> */}
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  )
}

export default App