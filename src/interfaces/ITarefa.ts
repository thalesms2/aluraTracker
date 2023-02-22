import type IProjeto from "./IProjeto";

export default interface ITarefa {
    duracaoEmSegundos: number,
    descricao: string,
    projeto: IProjeto
}