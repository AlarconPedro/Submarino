import { useEffect, useState } from "react";
import { formataValor } from "../../components/Main";
import { Carrinho } from "../Carrinho";

export const Finalizar = () => {

    function formatar(valor) {
        valor = parseFloat(valor);
        var total = valor.toLocaleString('pt-br', {minimumFractionDigits: 2});
        total = String(total);
        total = total.replace(".","");
        total = total.replace(",",".");

        return total;
    }

    const [produtos, getProdutos] = useState(null);
    const [total,getTotal] = useState(null);

    useEffect(()=>{
        var carrinho = localStorage.getItem('carrinho');
        var produtos = null;
        if ( typeof carrinho == 'string' ) {
            var produtos = JSON.parse(carrinho);
        }

        if ( produtos ) getProdutos(produtos);
    },[]);

    return(
        <>
            <h1 className="text-center">Finalizar Compra</h1>

            <form name="pagseguro" method="post"
            className="container" 
            action="https://pagseguro.uol.com.br/v2/checkout/payment.html">
                <h4>Seus Dados</h4>
                <input type="hidden"
                       name="recceiverEmail" 
                       value="suporte@lojamodelo.com.br"/>

                <input type="hidden" name="currency" value="BRL"/>

                <input type="text" name="senderName" className="form-control"
                placeholder="Digite seu Nome Completo" required/>
                
                <input type="email" name="senderEmail" className="form-control"
                placeholder="Digite seu e-mail" required/>

                {
                produtos ? produtos.map((item,index) => (
                        <div>
                            <input type="hidden" value={item.id}
                            name={'itemId'+(index+1)}/>

                            <input type="hidden" value={item.produto} name={'itemDescription'+(index+1)}/>

                            <input type="hidden" value={formatar(item.valor)} name={'itemAmount'+(index+1)}/>

                            <input type="hidden" value={item.quantidade} name={'itemQuantity'+(index+1)}/>
                            <br/>
                        </div>
                    )
                )
                :
                <p>Não existem itens</p>
                }   

                <h4>Itens no Carrinho</h4>
                <table className="table table-borded">
                    <thead>
                        <tr>
                            <th>Nome do Produto</th>
                            <th>Valor Unit.</th>
                            <th>Qtde.</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            produtos ? produtos.map((item, index) => (
                                <tr>
                                    <td>{item.produto}</td>
                                    <td>{formataValor(item.valor)}</td>
                                    <td>{item.quantidade}</td>
                                    <td>{formataValor(item.total)}</td>
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
                            <td colspan="3">VALOR TOTAL :</td>
                            <td>{formataValor(total)}</td>
                            <td></td>
                        </tr>
                    </tfoot>
                </table>
                
                <button type="submit" className="btn btn-success"> 
                    Pagamento
                </button>
            </form>
        </>
    )
}