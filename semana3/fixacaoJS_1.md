```
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
const salarioFixo = 2000
const mediaVAlorCarroVendido = valorTotalVendas / qtdeCarrosVendidos
const comissao = (qtdeCarrosVendidos * 100) + (valorTotalVendas * 0.05)
return salarioFixo + comissao
}
```