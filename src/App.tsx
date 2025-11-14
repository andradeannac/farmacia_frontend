import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import ListaCategorias from './components/categoria/listacategorias/ListaCategorias'
import FormCategoria from './components/categoria/formcategoria/FormCategoria'
import DeletarCategoria from './components/categoria/deletecategoria/DeletarCategoria'
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
              <Route path="/categorias" element={<ListaCategorias />} />
              <Route path="/cadastrarcategorias" element={<FormCategoria />} />
              <Route path="/editarcategorias/:id" element={<FormCategoria />} />
              <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
              {/*<Route path="/postagens" element={<ListaPostagens />} />
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