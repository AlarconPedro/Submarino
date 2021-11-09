import { Link } from 'react-router-dom'
import logo from '../images/logo.png';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const Header = () => {

    const [categorias,getCategorias] = useState([]);

    useEffect(() => {
        axios.get('http://react.professorburnes.com.br/categoria')
        .then((response) => {
            getCategorias(response.data);
        })
    },[])

    return (
        <>
           <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand">
                    <img src={logo}></img>
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#menu">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="menu">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>

                        { categorias.map((item,index) => (
                          <li className="nav-item">
                              <Link to={"/categoria/"+item.id} className="nav-link">{item.categoria}</Link>
                            </li>  
                        ))}

                        <li className="nav-item">
                            <Link to="/carrinho" className="nav-link">Carrinho</Link>
                        </li>
                            
                        <li className="nav-item">
                            <Link to="/SEO" className="nav-link">SEO</Link>
                        </li>
                    </ul>
                </div>
            </div>    
           </nav> 
        </>
    )
}

export const Footer = () => {
    return (
        <>
            <footer className="bg-primary">
                <p className="text-center">Desenvolvido por Alarcon a Lenda</p>
            </footer>
        </>
    )
}

export const formataValor = (valor) => {
    valor = parseFloat(valor);
    return valor.toLocaleString('pt-br',{style:'currency', currency:'BRL'});
}