'''
Exercício 1
A) Usar strings para criarmos id's é melhor pois tem-se a possibilidade maior de ser únicos 
   e é melhor que números pois nas junções com outros sitemas poderiamos ter id duplicados.

EXERCÍCIO 2
A) O código cria uma const para guardar o nome da tabela e utiliza o knex para se conectar com o
   banco de dados. Em seguida ele cria uma função async para inserir um novo registro na tabela
   "userTableName".
B) CREATE TABLE `Aula55_User` (
  `id` varchar(255) PRIMARY KEY,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
  );

EXERCÍCIOS 3
A) Ela tipifica a chave como sendo uma string pois é o tipo do parâmetro que é solicitado.

EXERCÌCIOS 7
A) O 'as any' faz com que 'payload' aceite qualquer resultado da função 'verify'. É necessário
   pois se o token for inválido ele não retornaria o id.
'''