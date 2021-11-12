import { useEffect, useState, useCallback } from "react";
import { formataValor } from "../../components/Main";
import { useHistory, Link } from "react-router-dom";

export const SEO = () => {
    
    return(
        <>
            <hr/>
            <div className="col col-md-12 ">
                <div className="border border-rounded">
                    <ul className="list-group">
                        <li className="list-group-item active" aria-current="true" style={{
                            padding: 13,
                            color: "#fff",
                            fontWeight: "bold"
                        }}>SEO do Java Script</li>
                        <li className="list-group-item">
                            <p>A linguagem de programação JavaScript é uma das mais utilizadas no mundo, 
                                com o uso dela foram desenvolvidos os melhores sites que costumamos visitar.
                            </p>
                            <p>Hoje em dia cada vez mais sites estão utilizando o JavaScript no processo de construção de sites. 
                                A linguagem se mostra muito versátil para o desenvolvimento web: através da utilização de frameworks e bibliotecas, 
                                como Angular, Node.js, React e VueJS, conseguimos trabalhar com facilidade conteúdos dinâmicos dentro de páginas web. 
                                Essa solução se mostra muito versátil, principalmente para sites cujas informações mudam com grande frequência. 
                            </p>
                            <p>
                                Você deve estar se perguntando: mas como isso afeta o SEO? Afeta muito! 
                                O olhar do profissional de SEO deve ir além do conteúdo visível da página. 
                                Devemos buscar entender o que está por trás, a arquitetura do site, 
                                como ele foi estruturado e quais linguagens são utilizadas para desenvolvê-lo.
                                A forma como o seu site foi estruturado afeta diretamente como os robôs de indexação (crawlers) dos mecanismos de busca vão interpretar o seu site e, 
                                consequentemente, na sua indexação e posicionamento dentro da busca orgânica.
                                Por isso, se o seu site utiliza Javascript dentro do código, é importante você estar atento em como isso pode impactar na busca orgânica. 
                                Com esses cuidados você vaigarantir que o seu site tenha a melhor performance dentro dos mecanismos de busca.
                            </p>
                            <p>
                                Quando pensamos em sites JavaScript, um dos grandes temores dos especialistas de SEO é como o Google e outros buscadores vão interpretar o seu site. 
                                Historicamente, os robôs tinham dificuldade em interpretar conteúdo não estático, como o JavaScript. 
                                Entretanto, o Googlebot vem evoluindo e hoje em dia já consegue renderizar uma página com JavaScript. 
                                De qualquer maneira, é importante você estar atento às documentações de cada crawler, quais tecnologias são suportadas por ele, e fazendo testes constantes.
                            </p>
                            <p>
                                O Googlebot é o software do Google responsável por descobrir e indexar conteúdo na web. Como existem muitas páginas para indexar, 
                                o Googlebot tem algumas limitações para economizar recursos e conseguir indexar a grande quantidade de páginas que precisa. Uma dessas limitações afeta justamente o JavaScript. 
                                O crawler faz a requisição da página ao servidor, lê e indexa o conteúdo do HTML. 
                                Como a execução do JavaScript para muitas páginas é uma tarefa custosa, o JavaScript da página tem sua execução agendada. Enquanto a indexação do conteúdo recebido no HTML é instantânea, qualquer mudança que o JavaScript faz na página só é percebida pelo robô do Google quando ocorre a execução, o que pode levar até uma semana. Além disso, não existe nem mesmo uma garantia de que todo o JavaScript da página será executado. 
                                Para cada página, o bot oferece um orçamento de execução, que é consumido a cada linha de código executada. 
                                Quando esse orçamento termina, a execução é interrompida e o bot indexa o resultado, que pode ser uma página incompleta.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )

}