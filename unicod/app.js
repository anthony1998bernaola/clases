/*Ejercicio 1: Crear una expresión regular que coincida con cualquier símbolo de moneda
let texto = "AAA$$$";
let expresion = /\p{S}/gu;
console.log(texto.match(expresion))*/
/*Ejercicio 2: Crear una expresión regular que coincida con cualquier
carácter de espacio (incluyendo espacios, tabulaciones y saltos delínea).*/
/*let texto = "A A A  ";
let expresion = /\p{Z}/gu;
console.log(texto.match(expresion))*/

/*Ejercicio 3: Crear una expresión regular que coincida con letras
mayúsculas y minúsculas en scripts latinos y griegos. /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/
let texto = "B AC D 2 E 55ffgfh F G H I J K ## L M N O P Q R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z Α Β Γ Δ Ε Ζ Η Θ Ι Κ Λ Μ Ν Ξ Ο Π Ρ Σ Τ Υ Φ Χ Ψ Ω α β γ δ ε ζ η θ ι κ λ μ ν ξ ο π ρ σ τ υ φ χ ψ ω";
let expresion = /[\p{L}\p{Script=Greek}]/gu;
console.log(texto.match(expresion))*/

/*Ejercicio 4: Crear una expresión regular que coincida con cualquier
letra o número.*/
let texto = "A123 A A  ";
let expresion = /\p{L}\p{N}/gu;
console.log(texto.match(expresion))

