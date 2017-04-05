# Práctica Evaluar Analizador Descendente Predictivo Recursivo

Este repo contiene el código de partida para la práctica de laboratorio
*Evaluar Analizador Descendente Predictivo Recursivo*

### Forma de trabajo

* Use su portátil o su cuenta en c9 para llevar a cabo los objetivos planteados.
* Esta práctica se divide en objetivos o hitos:  indique al profesor  cuando ha terminado y suba los enlaces a los repos y despliegues.

### Descripción

Esta es la gramática para la que tiene que escribir un analizador recursivo descendente predictivo:

1.  Σ = { ADDOP, MULOP, '(', ')', NUM },
2.  V = {  expression, term, factor }
3.  Productions:
    1.  expression → term ( ADDOP term)* 
    2.  term → factor (MULOP factor)*
    3.  factor → '(' expression ')' | NUM

Donde:

            ADDOP = /[+-]/
            MULOP = /[*\/]/
            ID = /[a-z_]\w*/i
            NUM = /\d+/

### Hitos

1. Use el repo de GitHub dado por la asignación de esta tarea 
2. Escriba un analizador sintáctico para la gramática dada: rellene las partes que faltan en el fichero [public/main.js](https://github.com/ULL-ESIT-PL-1617/evalua-pdr/blob/master/public/main.js)
3. Añada código para que evalúe las expresiones
4. Añada pruebas

### Recursos

* [Apuntes de PL: Análisis Sintáctico Predictivo Recursivo](http://crguezl.github.io/pl-html/node22.html)
* [Repo con una solución a un lenguaje similar](https://github.com/crguezl/prdcalc)
  -  [Despliegue en Heroku](http://predictiveparser.herokuapp.com/)
  - [Fichero main.js con un parser similar al que se solicita](https://github.com/crguezl/prdcalc/blob/master/views/main.js)
* [Campus PL1617: Práctica: Evaluar Analizador Descendente Predictivo Recursivo](https://campusvirtual.ull.es/1617/mod/assign/view.php?id=195888)
* [Analizadores Descendentes Recursivos](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/parsing/recursivodescendente/)
