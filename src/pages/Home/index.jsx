import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios'

export const Home = () => {

    function formataValor(valor) {
        valor = parseFloat(valor);
        return valor.toLocaleString('pt-br',{style:'currency', currency:'BRL'});
    }

    const [produtos,getProdutos] = useState([]);

    useEffect ( () => {
        axios.get('http://react.professorburnes.com.br/')
        .then((response) => {
            //console.log(response.data);
            getProdutos(response.data);
        })
    },[])

    return(
        <>
            <h1 className="text-center">Produtos em Destaque</h1>
            <div className="row">
                { produtos.map((item,index) => (
                    <div className="col-12 col-md-4 text-center">
                        <div className="card">
                            <img src={item.imagemp} className="w-100"
                            alt={item.produto}></img>
                            <h5>{item.produto}</h5>
                            {item.promo != 0 ? 
                                <div>
                                    De: <span className="cortado">{formataValor(item.valor)}</span>
                                    <br/>
                                    <p className="valor">
                                    Por: {formataValor(item.promo)}
                                    </p>
                                </div>
                            :
                                <p className="valor">
                                    {formataValor(item.valor)}
                                </p>
                            }
                            <Link to={'/produto/'+item.id}className="btn btn-info">
                                Detalhes
                            </Link>
                        </div>
                    </div>
                ))
                }
            </div>
        </>
    )
}