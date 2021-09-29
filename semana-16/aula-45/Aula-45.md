'''
Exercício 1
A)
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
   id - é um Varchar (string) com máximo de 255 caracteres, identificador único não nulo que identifica os registros da tabela;
   name - é uma string com máximo de 255 caracteres para armazenar o nome do ator e não pode ser nulo;
   birth_date - é uma data para armazenar a data de aniversário so ator e não pode ser nula;
   gender - é uma string com máximo de 6 caracteres para armazenar o sexo e não pode ser nulo.
B) 
SHOW DATABASES; - Exibe o nome do Banco de dados
SHOW TABLES; - Exibe as tabelas desse banco de dados
C)DESCRIBE Actor; - Exibe a estrutura da tabela Actor: 
id - é uma Varchar de 255 caracteres e Primary key;
name - é uma Varchar de 255 caracteres não nula;
salary - é um float não nulo;
birth_date - é uma data não nula;
gender - é uma VArchar de 6 caracteres não nula.

Exercício 2
A) INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "mulher"
);
B) INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Reanta Sorra",
  1200000,
  "1963-08-23", 
  "mulher"
);

Error Code: 1062. Duplicate entry '002' for key 'PRIMARY' - Entreda duplicada para uma chave primaria - Ocorreu porque o id já existe

C)INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

Error Code: 1136. Column count doesn't match value count at row 1 - Ocorreu o erro porque existem 3 campos para serem inseridos e 5 valores atribuidos.

D)INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);

Error Code: 1364. Field 'name' doesn't have a default value - O campo 'name' não tem um valor padrão e não pode ser nulo

E) INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);

Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1 - A data tem que estar no formato entre aspas.

F)INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Fabio Junior",
  400000,
  "1949-04-18", 
  "male"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

Exercício 3
A) SELECT * FROM Actor WHERE gender="female";
B)SELECT SALARY FROM Actor WHERE name="Tony Ramos"
C)SELECT * FROM Actor WHERE gender="invalid"; - Não retornou nenhum registro porque não tem nenhum registro com o valor "invalid"
D)SELECT id, name, salary FROM Actor WHERE salary <= 500000;
E)SELECT id, nome from Actor WHERE id = "002" - Error Code: 1054. Unknown column 'nome' in 'field list' - Não existe a coluna "nome" na lista de colunas
SELECT id, name from Actor WHERE id = "002"; - id: "002"   name: "Glória Pires"

Exercício 4
A) Vai selecionar todos os campos da tabela Actor cujo campo name começa com a letra A ou J e o salario seja maior que 300000
B) SELECT * FROM Actor WHERE (NOT (name LIKE "A%")) AND salary > 350000;
C) SELECT * FROM Actor WHERE (name LIKE "%G%") OR (name LIKE "%g%");
D) SELECT * FROM Actor WHERE ((name LIKE "%A%") OR (name LIKE "%a%") OR (name LIKE "%g%") OR (name LIKE "%g%")) and (salary BETWEEN 350000 AND 900000);

Exercício 5
A) CREATE TABLE Filmes (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
sinopse TEXT,
data DATE,
avaliacao INT
); - Foi criado a tabela "filmes' com a chave primária 'id', o campo nome um Varchar de 255 caracteres, o campo 'sinopse' que é TEXT pois não tem limite de caracteres
     e o campo 'avaliacao' que é um inteiro não longo
B) INSERT INTO Filmes (id, name, sinopse, data, avaliacao) 
VALUES ("001", 
		"Se Eu Fosse Você",
        "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
		"2006/01/06",
        7);

C) INSERT INTO Filmes (id, name, sinopse, data, avaliacao) 
VALUES ("002", 
		"Doce de mãe",
        "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
		"2012/12/27",
        10);

D) INSERT INTO Filmes (id, name, sinopse, data, avaliacao) 
VALUES ("003", 
		"Dona Flor e Seus Dois Maridos",
        "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
		"2017/11/02",
        8);

E) INSERT INTO Filmes (id, name, sinopse, data, avaliacao) 
VALUES(
	"004",
    "Deus é Brasileiro",
    "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
    "2003-01-31",
    9
);
Exercício 6
A) SELECT id, name, avaliacao FROM Filmes WHERE id = '002';
B) SELECT * FROM Filmes WHERE name = 'Doce de mãe';
C) SELECT id, name, sinopse FROM Filmes WHERE avaliacao >= 7;

Exercicio 7
A) SELECT * FROM Filmes WHERE name LIKE '%vida%';

B) SELECT * FROM Filmes WHERE name LIKE "%dona%" OR sinopse LIKE "%mulher%";

C) SELECT * FROM Filmes WHERE data < "2021/09/27";

D) SELECT * FROM Filmes WHERE (name LIKE "%dona%" OR sinopse LIKE "%mulher%") AND
			      (data < current_date()) AND
			      (avaliacao > 7);
'''