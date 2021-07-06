```
function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
  const media = (ex + (p1 * 2) + (p2 * 3))/6
  if(media >= 9){
    return 'A'
  } else if ((7.5 <= media) && (media < 9)){
    return 'B'
  } else if ((6 <= media) && (media < 7.5)){
    return 'C'
  } else {
    return 'D'
  }
}
```