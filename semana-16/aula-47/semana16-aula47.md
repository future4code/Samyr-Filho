### Exercício 1
a) A coluna "salary' da tabela 'Actor' será excluida;
b) A coluna 'gender' da tabela 'Actor' será renomeada para 'sex' com VARCHAR com máximo de 6 caracteres
c) A coluna 'gender' da tabela 'Actor' será tipada com VARCHAR com máximo de 255 caracteres
d) A query será:
```
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```
### Exercício 2
a)
```
UPDATE Actor
SET name = "Moacyr Franco", birth_date = "2049-08-06"
WHERE id = "003"
```
b)
```
UPDATE Actor SET name = UPPER(name) WHERE name = "Juliana PAes";
```
```
UPDATE Actor SET name = "Juliana PAes" WHERE name = "JULIANA PAES";
```
c) 
```
UPDATE Actor SET name = "Camila Pittanga", salary = 420000, birth_date = "1977-06-20", gender="famale", type="NoDirector" WHERE id = "005"
```
d) Ele não acusa nenhum erro porém não atualiza registro nenhum pois não encontra o especificado no WEHRE.
```
UPDATE Actor SET name = "Samyr" WHERE id = 8;
```

### Exercício 3
a)
```
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
```
b)
```
DELETE FROM Actor WHERE gender = "male" AND (salary > 1000000);
```
### Exercício 4
a)
```
SELECT MAX(salary) FROM Actor;
```
b)
```
SELECT MIN(salary) FROM Actor WHERE gender = "female";
```

c)
```
SELECT COUNT(*) FROM Actor WHERE gender = "female";
```

d)
```
SELECT SUM(salary) FROM Actor;
```

### Exercício 5
a) O comando agrupa por "gender" e conta quantos registros tem em cada grupo

b)
```
SELECT id, name FROM Actor WHERE gender = "male" ORDER BY name DESC;
```

c)
```
SELECT * FROM Actor WHERE gender = "male" ORDER BY salary;
```

d)
```
SELECT * FROM Actor WHERE gender = "male" ORDER BY salary DESC LIMIT 3;
```

e)
```
SELECT AVG(salary) AS Media_Salario, gender FROM Actor GROUP BY gender;
```

### Exercício 6
a)
```
ALTER TABLE Movie ADD playing_limit_date DATE NOT NULL;
```

b)
```
ALTER TABLE Movie CHANGE rating rating FLOAT;
```

c)
```
UPDATE Movie SET playing_limit_date = "2021-10-30" WHERE id = "001";
UPDATE Movie SET playing_limit_date = "2021-01-30" WHERE id = "002";
```

d)
```
DELETE FROM Movie WHERE id = "004";
UPDATE Movie SET synopsis = "Cansado da humanidade, Deus resolve tirar férias para descansar." WHERE id = "004";
```
O comando não conseguiu atualizar a sinopse porque não encontrou o id que acabou de ser deletado.

### Exercício 7
a)
```
SELECT COUNT(*) FROM Movie WHERE (playing_limit_date >= CURRENT_DATE) AND (rating > 7.5);
```

b)
```
SELECT AVG(rating) FROM Movie;
```

c)
```
SELECT COUNT(*) FROM Movie WHERE playing_limit_date >= CURRENT_DATE;
```

d)
```
SELECT COUNT(*) FROM Movie WHERE release_date >= CURRENT_DATE;
```

e)
```
SELECT MAX(rating) FROM Movie;
```

f)
```
SELECT MIN(rating) FROM Movie;
```

### Exercício 8
a)
```
SELECT * FROM Movie ORDER BY title;
```

b)
```
SELECT * FROM Movie ORDER BY title DESC LIMIT 5;
```

c)
```
SELECT * FROM Movie WHERE (playing_limit_date >= CURRENT_DATE) AND (release_date <= CURRENT_DATE) 
ORDER BY release_date DESC LIMIT 3;
```

d)
```
SELECT * FROM Movie ORDER BY rating DESC LIMIT 3;
```




























