import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { formataValor } from '../../components/Main';

export const Produto = () => {

    const { id } = useParams();
    const history = useHistory();

    const [produto,getProduto] = useState([]);

    useEffect (()=>{
        axios.get('http://react.professorburnes.com.br/produto/'+id)
        .then((response) => {
            getProduto(response.data[0]);
        })
    },[id])

    function onSubmit(e) {
        e.preventDefault();
        var qtde = e.target.quantidade.value;

        var valor = 0;
        var total = 0;

        produto.promo != 0 ?
            valor = produto.promo 
        :
            valor = produto.valor
        
        total = valor * qtde;

        var obj = {
            id: produto.id,
            produto: produto.produto,
            valor: valor,
            quantidade: qtde,
            total: total
        }

        var carrinhoLocal = localStorage.getItem('carrinho');
        var carrinho = null;

        if (typeof carrinhoLocal == 'string') {
            carrinho = JSON.parse(carrinhoLocal);
        }

        if ( carrinho ) {
            carrinho.push(obj);
            localStorage.setItem('carrinho', JSON.stringify(carrinho));
        } else {
            localStorage.setItem('carrinho', JSON.stringify([obj]));
        }

        history.push('/carrinho');

    }

    return(
        <>
            <h1 className="text-center">{produto.produto}</h1>
            <div className="row">
                <div className="col-12 col-md-4 text-center">
                    <img src={produto.imagemp}
                    alt={produto.produto}
                    className="w-100"></img>

                    {produto.promo != 0 ?
                        <div>
                            De: <span className="cortado">
                                {formataValor(produto.valor)}
                            </span>
                            <p className="valor">
                                Por: {formataValor(produto.promo)}
                            </p>
                        </div>
                    :
                        <p className="valor">
                            {formataValor(produto.valor)}
                        </p>
                    }

                    <hr/>

                    <form name="formComprar" onSubmit={onSubmit}>
                        <input type="number"
                        name="quantidade" id="quantidade"
                        className="form-control w-100" defaulValue={1}
                        ></input>
                        <br/>
                        <button type="submit"
                        className="btn btn-danger w-100">
                            Adicionar
                        </button>
                    </form>

                </div>
                <div className="col-12 col-md-8">
                    <h2 className="text-center">
                        Descrição do Produto
                    </h2>
                    {produto.descricao}
                </div>
            </div>
        </>
    )
}