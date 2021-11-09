import axios from "axios";
import { useEffect, useState } from "react";
import { formataValor } from "../../components/Main";
import { useParams, Link } from "react-router-dom";

export const Categoria = () => {

    const { id } = useParams();
    const [produtos,getProdutos] = useState([]);

    useEffect(() => {
        axios.get('http://react.professorburnes.com.br/categoria/'+id)
        .then((response) => {
            getProdutos(response.data);
        })
    },[id])

    return(
        <>
            <h1 className="text-center">Categoria</h1>
            <div className="container">
                <div className="row">
                    { produtos ?
                        produtos.map((item,index) => (
                        <div className="col-12 col-md-4">
                            <div className="card text-center">
                                <img src={item.imagemp} alt={item.produto} className="w-100"></img>
                                <h2>{item.produto}</h2>
                                { item.promo != 0 ?
                                    <div>
                                    De: <span className="cortado">{formataValor(item.valor)}</span>
                                    <p className="valor">Por: {formataValor(item.promo)}</p>
                                    </div>
                                :
                                    <p className="valor">{formataValor(item.valor)}</p>
                                }
                                <Link to={'/produto/'+item.id} className="btn btn-success w-100">
                                    Detalhes
                                </Link>
                            </div>
                        </div>
                        ))
                    :
                        <p className="alert alert-danger text-center">
                            Não existem produtos
                        </p>
                    }
                </div>
            </div>
        </>
    )
}