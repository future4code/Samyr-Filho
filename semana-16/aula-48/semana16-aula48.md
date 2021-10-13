### Exercício 1
a) Chave estrangeira é a chave primaria da tabela referenciada na tebela principal
b) 
```
INSERT INTO rating (id, comment, rate, movie_id)
VALUES ("001",
		"Muito bom o filme, principalmente o personagem homem que vira mulher!",
        8,
        "001"
		),
        ("002",
		"O roteiro é muito bom",
        7,
        "002"
		),
        ("003",
		"A atuação de José Wilker é sensacional",
        8,
        "003"
		),
        ("004",
		"Engraçadíssimo",
        8,
        "004"
		),
        ("005",
		"Muito engraçado, realidade cômica",
        9,
        "005"
		);
```
c) Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`lovelace-2147744-samyr-filho`.`rating`, CONSTRAINT `rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
   O erro se dá ao tentar incluir um registro com uma chave estrangeira não existente na tabela de referencia

```
INSERT INTO rating (id, comment, rate, movie_id)
VALUES ("001",
		"Muito bom o filme, principalmente o personagem homem que vira mulher!",
        8,
        "008"
		);
```
d)
```
ALTER TABLE Movie
DROP COLUMN rating;
```
e) Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`lovelace-2147744-samyr-filho`.`rating`, CONSTRAINT `rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
   O erro se dá ao tentar deletar um registro que tem seu id em uma outra tabela referenciada (Foreign key)
```
DELETE FROM Movie
WHERE id="001";
```

### Exercício 2
a) É uma tabela que registra para o filme os atores pertencentes à ele e também os filomes que o ator fez, ou seja, vários filmes para vários atores (N:M);
b)
```
INSERT INTO MovieCast ( movie_id, actor_id )
VALUES(
	"001",
    4
),
(
	"001",
    5
),
(
	"002",
    4
),
(
	"001",
    1
),
(
	"003",
    5
),
(
	"003",
    4
),
(
	"004",
    1
);
```
c)Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`lovelace-2147744-samyr-filho`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
  O erro se dá por causa da inexistência de uma das chaves estrangeiras (foreign key)
```
INSERT INTO MovieCast ( movie_id, actor_id )
VALUES(
	"001",
    8
);
```
d)Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`lovelace-2147744-samyr-filho`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
  O erro se dá pois existe na tabela MovieCast um registro com o id do ator (que é uma Foreign key).
```
DELETE FROM Actor
WHERE id=1;
```

### Exercício 3
a) A query faz um SELECT na tabela Movie fazendo a junção com a tabela Rating, listando apenas os registros que satisfaça a condição que está após o ON.
   O operafor ON nos permite fazer uma condição para que seja válidada a listagem;
b)
```
SELECT M.title, M.id, R.rate FROM Movie AS M
RIGHT JOIN rating AS R ON R.movie_id = M.id;
```

### Exercício 4
a)
```
SELECT M.title, M.id, R.rate, R.comment FROM Movie AS M
LEFT JOIN rating AS R ON R.movie_id = M.id;
```
b)
```
SELECT M.id, M.title, MC.actor_id FROM MovieCast AS MC
RIGHT JOIN Movie AS M ON MC.movie_id = M.id;
```
c)
```
SELECT AVG(R.rate), M.id FROM rating AS R
LEFT JOIN Movie AS M ON M.id = R.movie_id
GROUP BY M.id;
```

### Exercício 5
a) Ela nos trás os elencos com seus filmes e o segundo JOIN é necessário pois linka os actor_id's da tabela MovieCast com a tabela Actor traznedo as informações desta
b)
```
SELECT m.id, m.title, a.id, a.name  FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```
c) Error Code: 1054. Unknown column 'm' in 'field list'
  Tem um erro, uma "," foi colocada no lugar de um "."

d)
```
SELECT M.title, A.name, R.rate, R.id, R.comment FROM Movie M
LEFT JOIN rating R ON R.movie_id = M.id
LEFT JOIN MovieCast MC ON M.id = MC.movie_id
JOIN Actor A ON A.id = MC.actor_id;
```

