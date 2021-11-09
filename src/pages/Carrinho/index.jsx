import { useEffect, useState, useCallback } from "react";
import { formataValor } from "../../components/Main";
import { useHistory, Link } from "react-router-dom";

export const Carrinho = () => {

    const [produtos,getProdutos] = useState(null);
    const [total,getTotal] = useState(null);
    const history = useHistory();

    function atualizaTotal(carrinho) {
        var total = 0;
        carrinho.forEach(e =>  {
            total = total + e.total;
        })

        getTotal(total);
    }

    useEffect(() => {
        var carrinhoLocal = localStorage.getItem('carrinho');
        var carrinho = null;

        if ( typeof carrinhoLocal == 'string') {
            carrinho = JSON.parse(carrinhoLocal);
        }

        if (carrinho) {
            getProdutos(carrinho);
            atualizaTotal(carrinho);
        }
    },[])

    const remover = useCallback((id) => {
        var carrinho = produtos.filter((e) =>(
            e.id != id
        ))

        localStorage.setItem('carrinho',JSON.stringify(carrinho));

        getProdutos(carrinho);
        atualizaTotal(carrinho);
    },[produtos]);

    const limparCarrinho = useCallback(()=> {
        localStorage.removeItem('carrinho');
        getProdutos([]);
        atualizaTotal([]);  
    },[]);

    function finalizar() {
        history.push('/finalizar');
    }

    return(
        <>
            <h1 className="text-center">Carrinho de Compras</h1>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Nome do Produto</th>
                        <th>Valor Unit.</th>
                        <th>Quantidade</th>
                        <th>Total</th>
                        <th>Excluir</th>
                    </tr>
                </thead>
                <tbody>
                    { produtos ? 
                        produtos.map((item,index) => (
                            <tr>
                                <td>{item.produto}</td>
                                <td>{formataValor(item.valor)}</td>
                                <td>{item.quantidade}</td>
                                <td>{formataValor(item.total)}</td>
                                <td>
                                    <button type="button" className="btn btn-danger" onClick={()=>remover(item.id)}>
                                        X
                                    </button>
                                </td>
                            </tr>
                        ))
                    :
                        <tr>
                            <td colspan="5">
                                <p className="alert alert-danger text-center">
                                    Carrinho vazio
                                </p>
                            </td>
                        </tr>
                    }
                </tbody>

                <tfoot>
                    <tr>
                        <td colSpan="3">VALOR TOTAL: </td>
                        <td>{formataValor(total)}</td>
                        <td></td>
                    </tr>
                </tfoot>
            </table>

            <button type="button" className="btn btn-danger float-start" onClick={()=>limparCarrinho()}>
                Limpar Carrinho
            </button>
            
            <button type="button" className="btn btn-success float-end" onClick={()=>finalizar()}>
                Finalizar Compra
            </button>

            <div className="clearfix"></div>
        </>
    )
}