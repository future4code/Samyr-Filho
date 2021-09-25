//a)
const minhaString: string = 'Samyr'
// Se atribuirmos um valor number vai dar erro pois tipificamos como string

//b)
const meuNumero: number | string = '5'
// Basta colocar na tipificação o '|' e tipificar também como string

//c)
type pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}
const samyr: pessoa = {
    nome: 'Samyr',
    idade: 56,
    corFavorita: 'Azul'
}
const carla: pessoa = {
    nome: 'Carla',
    idade: 44,
    corFavorita: 'Rosa'
}
const najla: pessoa = {
    nome: 'Najla',
    idade: 22,
    corFavorita: 'Vermelha'
}

//d)
enum coresArcoIris {
    vermelha = 'Vermelha',
    laranja = 'LAranja',
    amarela = 'Amarela',
    verde = 'Verde',
    azul = 'Azul',
    anil = 'Anil',
    violeta = 'Violeta'
}

type pessoa1 = {
    nome: string,
    idade: number,
    corFavorita: coresArcoIris
}
const samyr1: pessoa = {
    nome: 'Samyr',
    idade: 56,
    corFavorita: coresArcoIris.azul
}
const carla1: pessoa = {
    nome: 'Carla',
    idade: 44,
    corFavorita: coresArcoIris.laranja
}
const najla1: pessoa = {
    nome: 'Najla',
    idade: 22,
    corFavorita: coresArcoIris.vermelha
}