type pokemon = {
	name: string,
        types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}
//a) 1º) No terminal, eu iria para o diretório onde se encontra o arquivo;
//   2º) digitaria o comando tsc

//b) eu iria para o diretorio src e daria o comando tsc

//c) Configurando o arquivo tsconfig.json, alterando a configuração "rootDir": "./src"
//   e "outDir": "./build". Dessa forma será tranpilado todos os arquivos da pasta "./src" para a pasta "./build"

//d) As seguintes configurações me chamam a atenção:
//  1º - "target": "es5" mudamos para "es5"
//  2º - "rootDir": "./src" definimos a rota de busca dos arquivos .ts para transpilação
//  3º - "sourceMap": true - habilitamos essa opção para mapeamento
//  4º - "outDir": "./build" definimos a pasta para os resultados das tranpilações
