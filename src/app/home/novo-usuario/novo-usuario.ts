import { TipoCadastro } from "./tipo-cadastro";

export interface NovoUsuario {
    UserName:string,
    Email:string,
    Password:string,
    RePassword:string,
    TipoCadastro: TipoCadastro
}

