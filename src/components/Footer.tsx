import { Component } from "react";
import "./Footer.scss"

class Footer extends Component {
    render(){
        return(
            <>
                <div className="footer">
                    <span id="copyright">
                        <p>Copyright © 2021. Mãos Destras Ateliê e Armarinho<br/>Todos os direitos reservados</p>
                    </span>
                    <span id="made-by">
                        <p>Feito com ❤ por<br/><a href="https://www.codefire.com.br/" target="_blank">Codefire</a></p>
                    </span>
                </div>
            </>
        );
    }
}

export default Footer;