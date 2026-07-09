export const theoryCards = [
  {
    area: 'arithmetic', icon: '🔢', title: 'Números Enteros', sub: 'Suma, resta y signos', color: 'th-c1',
    rule: '(−)+(−) = negativo\n(−)+(+) → usa el mayor\n(−)×(−) = (+)\n(−)×(+) = (−)',
    video: { id: 'tNxHToZ-LbE', title: 'Suma y resta de números enteros', author: 'Profe Alex' },
    headerBg: 'linear-gradient(135deg,#0f3460,#1a1a6e)',
    sections: [
      {
        type: 'steps',
        title: '¿Qué son y cómo operarlos?',
        steps: [
          { h: 'El conjunto de los enteros', p: 'ℤ = { …, −3, −2, −1, 0, +1, +2, +3, … }. En la recta numérica, los números a la derecha son siempre mayores: −1 > −5.' },
          { h: 'Suma con mismo signo', p: 'Sumas los valores absolutos y conservas el signo. Ejemplo: −3 + (−4) = −7' },
          { h: 'Suma con diferente signo', p: 'Restas los valores absolutos y usas el signo del número con mayor valor absoluto. Ejemplo: −8 + 3 = −5' },
          { h: 'Multiplicación y división', p: 'Signos iguales → resultado positivo. Signos diferentes → resultado negativo.' }
        ]
      },
      { type: 'rule', content: '(−)×(−) = (+)  |  (+)×(+) = (+)\n(−)×(+) = (−)  |  (+)×(−) = (−)' },
      { type: 'example', content: 'Del libro — Ej. 1:\n−5 + □ = −7 → □ = −2 (porque −5+(−2)=−7)\n−8 + □ = 0  → □ = +8 (el número opuesto)' },
      { type: 'example', content: 'Del libro — Ej. 4:\nH = 1−(−2)(−5) = 1−10 = −9\nK = 5+(−2)(+4) = 5−8 = −3\nH−K = −9−(−3) = −9+3 = −6 ✓' }
    ],
    quiz: {
      q: 'Si −8 + □ = 0, ¿cuánto vale □?',
      opts: ['−8', '0', '8', '16'],
      ans: 2,
      exp: 'El opuesto de −8 es +8. Porque −8 + 8 = 0. ¡El opuesto de un número cancela su efecto!'
    }
  },
  {
    area: 'arithmetic', icon: '🔣', title: 'Signos de Agrupación', sub: 'Paréntesis, corchetes y llaves', color: 'th-c2',
    rule: 'Elimina de adentro → afuera\n(+)(...) → no cambia signos\n(−)(...) → cambia TODOS los signos',
    video: { id: 'jdqwzCL_PG0', title: 'Eliminar signos de agrupación', author: 'Profe Alex' },
    headerBg: 'linear-gradient(135deg,#0077a8,#004d6d)',
    sections: [
      {
        type: 'steps', title: 'Procedimiento paso a paso',
        steps: [
          { h: 'Identifica el grupo más interno', p: 'Siempre empieza por los paréntesis ( ) más internos antes de los corchetes [ ] o llaves { }.' },
          { h: 'Aplica la regla del signo exterior', p: 'Si el signo antes del grupo es +, los términos no cambian. Si es −, todos los signos internos se invierten.' },
          { h: 'Sustituye y continúa', p: 'Reemplaza el grupo resuelto por su valor y repite el proceso con el siguiente nivel.' }
        ]
      },
      { type: 'rule', content: '+(a + b) = a + b\n−(a + b) = −a − b\n−(a − b) = −a + b' },
      { type: 'example', content: 'Del libro — Ej. 2:\n−4+{−3+[−3+8+(−3+(−8))]}\nPaso 1: (−3+(−8)) = −11\nPaso 2: [−3+8+(−11)] = −6\nPaso 3: {−3+(−6)} = −9\nResultado: −4+(−9) = −13' },
      { type: 'warn', content: '⚠️ Truco: si el signo de afuera es negativo, imagina que "reparte" su negatividad a todos los términos dentro del grupo.' }
    ],
    quiz: {
      q: '¿Cuánto es −(3 − 7)?',
      opts: ['−4', '4', '10', '−10'],
      ans: 1,
      exp: '−(3−7) = −3+7 = +4. El signo negativo cambia todos los signos internos: 3 se vuelve −3 y −7 se vuelve +7.'
    }
  },
  {
    area: 'arithmetic', icon: '½', title: 'Operaciones con Fracciones', sub: 'Suma, resta y división', color: 'th-c3',
    rule: 'a/b + c/d → buscar MCM\na/b ÷ c/d = a/b × d/c\n(multiplica por el recíproco)',
    video: { id: 'LgMptyzudXU', title: 'Si te parecen difíciles las fracciones', author: 'Profe Alex' },
    headerBg: 'linear-gradient(135deg,#7b2d8b,#4a1060)',
    sections: [
      {
        type: 'steps', title: 'Suma y resta de fracciones',
        steps: [
          { h: 'Halla el MCM de los denominadores', p: 'El Mínimo Común Múltiplo es el número más pequeño que ambos denominadores dividen exactamente.' },
          { h: 'Convierte a denominador común', p: 'Multiplica numerador y denominador de cada fracción para que ambas tengan el MCM como denominador.' },
          { h: 'Opera los numeradores', p: 'Con denominadores iguales, sumas o restas solo los numeradores y conservas el denominador.' }
        ]
      },
      { type: 'rule', content: 'MCM(3,4) = 12\n4/3 = 16/12   |   3/4 = 9/12\n16/12 + 9/12 = 25/12' },
      {
        type: 'steps', title: 'División de fracciones',
        steps: [
          { h: 'Invierte la segunda fracción (recíproco)', p: 'La fracción 1/4 se convierte en 4/1. La fracción a/b se convierte en b/a.' },
          { h: 'Multiplica', p: 'Multiplicas numerador × numerador y denominador × denominador. ¡No necesitas MCM!' }
        ]
      },
      { type: 'example', content: 'Del libro — Ej. 6 y 8:\n√((4/3+3/4)÷(1/3−1/4))\nNum: 16/12+9/12 = 25/12\nDen: 4/12−3/12 = 1/12\n25/12 ÷ 1/12 = 25 → √25 = 5 ✓' }
    ],
    quiz: {
      q: '¿Cuánto es 1/2 + 1/3?',
      opts: ['2/5', '2/6', '5/6', '1/6'],
      ans: 2,
      exp: 'MCM(2,3)=6. Entonces 1/2=3/6 y 1/3=2/6. Suma: 3/6+2/6 = 5/6.'
    }
  },
  {
    area: 'arithmetic', icon: '⚖️', title: 'Desigualdades con Enteros', sub: 'Conjuntos solución en ℤ', color: 'th-c4',
    rule: '−4 < x < 2 en ℤ:\nx ∈ {−3,−2,−1, 0, 1}\nLos extremos NO se incluyen',
    video: { id: 'gMDAtLLW5lM', title: 'Inecuaciones de primer grado', author: 'Daniel Carreón' },
    headerBg: 'linear-gradient(135deg,#b05c00,#7a3d00)',
    sections: [
      {
        type: 'steps', title: 'Cómo resolver una desigualdad',
        steps: [
          { h: 'Lee el símbolo con cuidado', p: '< (menor estricto) excluye el extremo. ≤ (menor o igual) sí incluye el extremo.' },
          { h: 'Lista los enteros del intervalo', p: 'Escribe uno a uno todos los números enteros que cumplen ambas condiciones simultáneamente.' },
          { h: 'Opera según lo que pida el problema', p: 'Puede pedirte la suma, el producto, el mayor, el menor, etc. de los valores encontrados.' }
        ]
      },
      { type: 'rule', content: 'Si −4 < x < +2 con x ∈ ℤ:\nx puede ser: −3, −2, −1, 0, 1\nNOTA: −4 y +2 NO están incluidos' },
      { type: 'example', content: 'Del libro — Ej. 10:\n−4 < x < +2, x entero\nValores: {−3, −2, −1, 0, 1}\nSuma = −3+(−2)+(−1)+0+1 = −5 ✓' },
      { type: 'warn', content: '⚠️ Cuidado: muchos estudiantes incluyen los extremos por error. Si dice "−4 < x", el −4 NO está en el conjunto.' }
    ],
    quiz: {
      q: '¿Cuántos enteros satisfacen −2 < x < 3?',
      opts: ['3', '4', '5', '6'],
      ans: 1,
      exp: 'Los enteros son: −1, 0, 1, 2. Son 4 valores. Los extremos −2 y 3 no se incluyen porque el símbolo es < (estricto).'
    }
  },
  {
    area: 'arithmetic', icon: '🔤', title: 'Expresiones Algebraicas', sub: 'Evaluar M, T, L y operar', color: 'th-c5',
    rule: 'Jerarquía de operaciones:\n1° Paréntesis ( )\n2° Potencias y raíces\n3° × y ÷  (izq → der)\n4° + y −  (izq → der)',
    video: { id: 'pUfQ1kCuRjY', title: 'Valor numérico de expresiones algebraicas', author: 'Profe Alex' },
    headerBg: 'linear-gradient(135deg,#1a6b3c,#0d4022)',
    sections: [
      {
        type: 'steps', title: 'Cómo evaluar expresiones con variables',
        steps: [
          { h: 'Calcula cada expresión por separado', p: 'Antes de comparar M, T y L, calcula el valor numérico de cada una de forma independiente.' },
          { h: 'Respeta la jerarquía de operaciones', p: 'Primero potencias y productos, luego sumas y restas. No mezcles pasos.' },
          { h: 'Sustituye en las afirmaciones', p: 'Una vez que tienes los valores, verifica cuál de las opciones dadas es verdadera.' }
        ]
      },
      { type: 'example', content: 'Del libro — Ej. 11:\nM = 5−2·3 = 5−6 = −1\nT = 10+(−14)/7 = 10−2 = 8\nL = −1−(−5)(+9)/(−15)\n  = −1−(−45/−15) = −1−3 = −4\nM+T+L = −1+8+(−4) = 3' },
      { type: 'example', content: 'Del libro — Ej. 12:\nM = (−1+3)(−5−7) ÷ [(−3+6)−(+8−4)]\n  = (2)(−12) ÷ [3−4]\n  = −24 ÷ (−1) = 24 ✓' },
      { type: 'rule', content: 'PEMDAS recordatorio:\nP=Paréntesis  E=Exponentes\nM/D=Mult/Div  A/S=Suma/Resta' }
    ],
    quiz: {
      q: 'Si M = 3 − 2·4, ¿cuánto vale M?',
      opts: ['4', '−5', '1', '−1'],
      ans: 1,
      exp: 'Primero la multiplicación: 2·4 = 8. Luego la resta: 3−8 = −5. PEMDAS: multiplicación antes de resta.'
    }
  },
  {
    area: 'algebra', icon: '⬆️', title: 'Teoría de Exponentes', sub: 'Leyes de potencias y raíces', color: 'th-c6',
    rule: '$a^m \\cdot a^n = a^{m+n}$\n$\\dfrac{a^m}{a^n}=a^{m-n}\\ (a\\neq 0)$\n$(a^m)^n = a^{m\\cdot n}$\n$a^0=1\\; |\\; a^{-n}=\\dfrac{1}{a^n}$',
    video: { id: 'kN1lgy6fPVU', title: 'Propiedades de las potencias', author: 'Susi Profe' },
    headerBg: 'linear-gradient(135deg,#6b21a8,#3b0764)',
    sections: [
      {
        type: 'steps',
        title: 'Leyes fundamentales de exponentes',
        steps: [
          { h: '1. Producto de igual base',
            p: '$a^m \\cdot a^n = a^{m+n}$. Ej: $2^3 \\cdot 2^4 = 2^{3+4} = 2^7 = 128$.' },
          { h: '2. Cociente de igual base',
            p: '$\\dfrac{a^m}{a^n} = a^{m-n}\\ (a \\neq 0)$. Ej: $\\dfrac{5^6}{5^2} = 5^{6-2} = 5^4 = 625$.' },
          { h: '3. Potencia de una potencia',
            p: '$(a^m)^n = a^{m \\cdot n}$. Ej: $(3^2)^3 = 3^{2 \\cdot 3} = 3^6 = 729$.' },
          { h: '4. Potencia de un producto y cociente',
            p: '$(ab)^n = a^n \\, b^n$ y $\\left(\\dfrac{a}{b}\\right)^n = \\dfrac{a^n}{b^n}\\ (b \\neq 0)$.' },
          { h: '5. Exponente cero, negativo y fraccionario',
            p: '$a^0 = 1$, $a^{-n} = \\dfrac{1}{a^n}$, $a^{\\frac{m}{n}} = \\sqrt[n]{a^m}\\ (a \\neq 0)$. Ej: $2^{-3} = \\dfrac{1}{8}$, $8^{\\frac{2}{3}} = (\\sqrt[3]{8})^2 = 4$.' },
        ]
      },
      {
        type: 'rule',
        content: '$\\boxed{a^m \\cdot a^n = a^{m+n}}$ &nbsp; Producto<br>\n' +
          '$\\boxed{\\dfrac{a^m}{a^n} = a^{m-n}\\ (a \\neq 0)}$ &nbsp; Cociente<br>\n' +
          '$\\boxed{(a^m)^n = a^{m \\cdot n}}$ &nbsp; Potencia de potencia<br>\n' +
          '$\\boxed{(ab)^n = a^n b^n}$ &nbsp; Producto elevado<br>\n' +
          '$\\boxed{\\left(\\dfrac{a}{b}\\right)^n = \\dfrac{a^n}{b^n}\\ (b \\neq 0)}$ &nbsp; Cociente elevado<br>\n' +
          '$\\boxed{a^0 = 1\\ (a \\neq 0)}$ &nbsp; Exponente cero<br>\n' +
          '$\\boxed{a^{-n} = \\dfrac{1}{a^n}\\ (a \\neq 0)}$ &nbsp; Exponente negativo<br>\n' +
          '$\\boxed{a^{\\frac{m}{n}} = \\sqrt[n]{a^m}\\ (n \\neq 0)}$ &nbsp; Exponente fraccionario'
      },
      {
        type: 'example',
        content: '1. $\\dfrac{2^3 \\cdot 2^5}{2^6} = \\dfrac{2^{3+5}}{2^6} = \\dfrac{2^8}{2^6} = 2^{8-6} = 2^2 = \\boxed{4}$'
      },
      {
        type: 'example',
        content: '2. $(3^2)^3 \\cdot 3^{-4} = 3^{2 \\cdot 3} \\cdot 3^{-4} = 3^6 \\cdot 3^{-4} = 3^{6-4} = 3^2 = \\boxed{9}$'
      },
      {
        type: 'example',
        content: '3. $(x^2 y^3)^4 \\div (x^3 y^2)^2 = \\dfrac{x^{2\\cdot4} y^{3\\cdot4}}{x^{3\\cdot2} y^{2\\cdot2}} = \\dfrac{x^8 y^{12}}{x^6 y^4} = x^{8-6} y^{12-4} = \\boxed{x^2 y^8}$'
      },
      {
        type: 'warn',
        content: '$a^0 = 1$ solo si $a \\neq 0$. $0^0$ no está definido. No confundir $(a^m)^n = a^{mn}$ con $a^{m^n}$.'
      }
    ],
    quiz: {
      q: '$\\dfrac{2^3 \\cdot 2^4}{2^5} =$',
      opts: ['$4$', '$8$', '$16$', '$32$'],
      ans: 0,
      exp: '$2^3 \\cdot 2^4 = 2^7$, luego $2^7 \\div 2^5 = 2^2 = 4$.'
    }
  },
  {
    area: 'algebra', icon: '⬆️', title: 'Ecuaciones Exponenciales', sub: 'Resolver potencias con incógnita', color: 'th-c7',
    rule: '$a^{f(x)} = a^{g(x)} \\;\\Rightarrow\\; f(x)=g(x)$\n$2^x=8 \\Rightarrow 2^x=2^3$\n$\\therefore x=3$',
    video: { id: 'iDKX--wp2U4', title: 'Ecuaciones exponenciales | Ej. 8', author: 'julioprofe' },
    headerBg: 'linear-gradient(135deg,#b91c1c,#7f1d1d)',
    sections: [
      {
        type: 'steps',
        title: 'Métodos de resolución',
        steps: [
          { h: '1. Igualar bases',
            p: 'Si $a^{f(x)} = a^{g(x)}$, entonces $f(x) = g(x)$. Ej: $2^{x+1} = 16 \\Rightarrow 2^{x+1} = 2^4 \\Rightarrow x+1 = 4 \\Rightarrow x = 3$.' },
          { h: '2. Cambio de variable',
            p: 'Para $a^{2x} + a^x + c = 0$, sea $t = a^x$, luego $t^2 + t + c = 0$. Resuelve y despeja $x$.' },
          { h: '3. Propiedades auxiliares',
            p: 'Usa $a^0 = 1$, $a^{-n} = \\dfrac{1}{a^n}$, $(a^m)^n = a^{mn}$ para reescribir términos.' },
          { h: '4. Verificación',
            p: 'Comprueba siempre la solución. La base debe cumplir $a > 0$ y $a \\neq 1$.' },
        ]
      },
      {
        type: 'rule',
        content: '$a^{f(x)} = a^{g(x)} \\;\\Longrightarrow\\; f(x) = g(x)$<br><br>\n' +
          'Ej: $2^{x-1} = 8 \\Rightarrow 2^{x-1} = 2^3 \\Rightarrow x-1=3 \\Rightarrow \\boxed{x = 4}$'
      },
      {
        type: 'example',
        content: 'Resuelve $3^{2x-1} = 27$<br>\n' +
          '$27 = 3^3 \\Rightarrow 3^{2x-1} = 3^3 \\Rightarrow 2x-1 = 3$<br>\n' +
          '$\\Rightarrow 2x = 4 \\Rightarrow \\boxed{x = 2}$'
      },
      {
        type: 'example',
        content: 'Resuelve $2^{x+2} - 2^x = 12$<br>\n' +
          '$2^{x+2} - 2^x = 4\\cdot 2^x - 2^x = 3\\cdot 2^x$<br>\n' +
          '$3\\cdot 2^x = 12 \\Rightarrow 2^x = 4 = 2^2 \\Rightarrow \\boxed{x = 2}$'
      },
      {
        type: 'warn',
        content: 'La base $a$ debe cumplir $a > 0$ y $a \\neq 1$. Si $0 < a < 1$, la función es decreciente pero el método de igualar bases sigue siendo válido.'
      }
    ],
    quiz: {
      q: '$2^{x} = 32$, halla $x$',
      opts: ['$4$', '$5$', '$6$', '$16$'],
      ans: 1,
      exp: '$32 = 2^5$, luego $2^x = 2^5 \\Rightarrow x = 5$.'
    }
  },
  {
    area: 'verbalskill', icon: '📖', title: 'Método y Técnicas de Lectura Comprensiva', sub: 'Estrategias para entender y analizar textos', color: 'th-c10',
    rule: '1. Explorar (survey)\n2. Preguntar (question)\n3. Leer (read)\n4. Recitar (recite)\n5. Repasar (review)',
    video: { id: 'rkWb3uAGSSw', title: '8 estrategias para mejorar tu comprensión lectora', author: 'Sapiencia práctica' },
    headerBg: 'linear-gradient(135deg,#2563eb,#1e3a5f)',
    sections: [
      {
        type: 'steps', title: 'Método SQ3R — Lectura activa en 5 pasos',
        steps: [
          { h: '1. Survey (Explorar)', p: 'Antes de leer, hojea el texto: títulos, subtítulos, imágenes, negritas y resúmenes. Hazte una idea general del contenido y su estructura.' },
          { h: '2. Question (Preguntar)', p: 'Convierte cada título o subtítulo en una pregunta. Por ejemplo, si el título es "Las causas de la Revolución", pregúntate: ¿cuáles fueron las causas? Esto fija un propósito de lectura.' },
          { h: '3. Read (Leer)', p: 'Lee activamente buscando responder tus preguntas. Subraya ideas principales, palabras clave y datos relevantes. Toma notas al margen.' },
          { h: '4. Recite (Recitar)', p: 'Sin mirar el texto, explica con tus propias palabras lo que acabas de leer. Puedes hacerlo en voz alta o escribir un breve resumen. Esto fija la información en la memoria.' },
          { h: '5. Review (Repasar)', p: 'Revisa tus notas y responde mentalmente las preguntas iniciales. Repite este proceso periódicamente para retener la información a largo plazo.' },
        ]
      },
      { type: 'rule', content: 'Antes de leer: EXPLORAR + PREGUNTAR\nDurante la lectura: LEER + SUBRAYAR\nDespués de leer: RECITAR + REPASAR\n\nClaves:\n• Idea principal = lo más importante del párrafo\n• Idea secundaria = detalle que complementa\n• Subrayado solo palabras clave (máx. 30%)' },
      { type: 'example', content: 'Ejemplo — Aplicación del SQ3R a un texto:\n\nTexto: "La energía solar es una fuente renovable que aprovecha la radiación del sol. Se obtiene mediante paneles fotovoltaicos que convierten la luz en electricidad. Su uso reduce la emisión de gases contaminantes."\n\nPaso 1 (Explorar): Título → "Energía solar". Subtítulos → "Funcionamiento", "Beneficios".\nPaso 2 (Preguntar): ¿Qué es la energía solar? ¿Cómo funciona? ¿Qué ventajas tiene?\nPaso 3 (Leer): Subrayar "fuente renovable", "paneles fotovoltaicos", "reduce emisiones".\nPaso 4 (Recitar): "La energía solar usa paneles para convertir luz en electricidad sin contaminar."\nPaso 5 (Repasar): ¿Cómo se obtiene? ¿Por qué es limpia?' },
      { type: 'example', content: 'Técnicas complementarias:\n\n• Subrayado: resalta solo lo esencial (ideas principales, fechas, definiciones).\n• Sumillado: escribe al margen una palabra clave que resuma cada párrafo.\n• Mapa conceptual: organiza visualmente las ideas principales y sus relaciones.\n• Resumen: condensa el texto en 3-5 líneas con tus propias palabras.\n• Lectura crítica: cuestiona al autor: ¿es objetivo? ¿qué evidencia presenta?' },
      { type: 'warn', content: '⚠️ Errores comunes: leer pasivamente sin preguntarte nada, subrayar todo el texto (debes seleccionar máximo 30%), confiar solo en la memoria sin tomar notas, y no repasar lo estudiado. La comprensión lectora se entrena con práctica constante.' },
    ],
    quiz: {
      q: '¿Cuál es el primer paso del método SQ3R?',
      opts: ['Leer (Read)', 'Explorar (Survey)', 'Recitar (Recite)', 'Repasar (Review)'],
      ans: 1,
      exp: 'El primer paso es Survey (Explorar): revisar títulos, subtítulos e imágenes para tener una visión general del texto antes de leerlo a profundidad.'
    }
  },
  {
    area: 'mathskill', icon: '🧠', title: 'Planteo de Ecuaciones', sub: 'Traducir problemas a lenguaje algebraico', color: 'th-c9',
    rule: '1. Leer con atención\n2. Identificar datos e incógnita\n3. Traducir a lenguaje algebraico\n4. Resolver la ecuación\n5. Verificar el resultado',
    video: { id: 'byCSSb69A-o', title: 'Planteamiento de Ecuaciones', author: 'Profe AlexZ' },
    headerBg: 'linear-gradient(135deg,#e11d48,#9f1239)',
    sections: [
      {
        type: 'steps', title: 'Pasos para plantear una ecuación',
        steps: [
          { h: '1. Lee el problema con atención', p: 'Identifica de qué trata, qué datos te dan y qué te preguntan. Si es necesario, léelo dos o tres veces.' },
          { h: '2. Identifica la incógnita', p: 'Asigna una letra (x, y, etc.) al valor desconocido que necesitas encontrar. Anota qué representa cada variable.' },
          { h: '3. Traduce al lenguaje algebraico', p: 'Convierte cada frase del problema en una expresión matemática. Palabras clave: "es" → =, "más que" → +, "menos que" → −, "el doble de" → 2·, "la mitad de" → ÷2.' },
          { h: '4. Resuelve la ecuación', p: 'Aplica las reglas de despeje: lo que suma pasa restando, lo que multiplica pasa dividiendo, etc.' },
          { h: '5. Verifica y responde', p: 'Sustituye el valor obtenido en el enunciado original. Asegúrate de que cumple todas las condiciones y responde exactamente lo que te preguntan.' },
        ]
      },
      { type: 'rule', content: '"es" → igual (=)\n"más que" → suma (+)\n"menos que" → resta (−)\n"el doble de" → 2·\n"la mitad de" → ÷2\n"el triple de" → 3·\n"excede en" → diferencia (−)\n"consecutivo" → x, x+1, x+2…' },
      { type: 'example', content: 'Problema: "La suma de tres números consecutivos es 48. Halla el mayor."\n\nPaso 1: Números consecutivos → x, x+1, x+2\nPaso 2: Suma: x + (x+1) + (x+2) = 48\nPaso 3: 3x + 3 = 48 → 3x = 45 → x = 15\nPaso 4: Los números son 15, 16, 17. El mayor es 17.' },
      { type: 'example', content: 'Problema: "El triple de un número aumentado en 8 equivale a 29. Halla el número."\n\nPaso 1: Sea x el número.\nPaso 2: Triple de x → 3x\nPaso 3: Aumentado en 8 → 3x + 8\nPaso 4: Ecuación: 3x + 8 = 29 → 3x = 21 → x = 7\nPaso 5: Verifica: 3(7)+8 = 21+8 = 29 ✓' },
      { type: 'warn', content: '⚠️ No confundas "aumentado en" (+) con "es el doble de" (×). Lee con cuidado cada frase. El error más común es sumar cuando deberías multiplicar o viceversa.' },
    ],
    quiz: {
      q: 'La suma de dos números consecutivos es 37. ¿Cuáles son los números?',
      opts: ['18 y 19', '17 y 20', '15 y 22', '19 y 20'],
      ans: 0,
      exp: 'Sean x y x+1 los números. x + (x+1) = 37 → 2x+1 = 37 → 2x = 36 → x = 18. Los números son 18 y 19.'
    }
  },
  {
    area: 'algebra', icon: '⬆️', title: 'Sistemas de Ecuaciones', sub: 'Resolver 2 ecuaciones con 2 incógnitas', color: 'th-c8',
    rule: '$a_1x+b_1y=c_1$  |  $a_2x+b_2y=c_2$\nSustitución: despejar y reemplazar\nEliminación: sumar ecuaciones',
    video: { id: '3FHhPLVUt9o', title: 'Sistemas de ecuaciones 2×2 por sustitución', author: 'julioprofe' },
    headerBg: 'linear-gradient(135deg,#0d9488,#115e59)',
    sections: [
      {
        type: 'steps',
        title: 'Métodos de resolución',
        steps: [
          { h: '1. Sustitución',
            p: 'Despeja una variable de una ecuación y reemplázala en la otra. Ej: $\\begin{cases} x+y=5 \\\\ 2x-y=1 \\end{cases}$ Despejamos $y=5-x$ y sustituimos en la segunda: $2x-(5-x)=1 \\Rightarrow 3x-5=1 \\Rightarrow x=2$, luego $y=3$.' },
          { h: '2. Eliminación (reducción)',
            p: 'Multiplica cada ecuación para igualar coeficientes de una variable y suma o resta para eliminarla. Ej: $\\begin{cases} 3x+2y=7 \\\\ 5x-2y=1 \\end{cases}$ Sumando: $8x=8 \\Rightarrow x=1$, luego $y=2$.' },
          { h: '3. Igualación',
            p: 'Despeja la misma variable en ambas ecuaciones e iguala las expresiones. Útil cuando ambas tienen el mismo despeje simple.' },
        ]
      },
      {
        type: 'rule',
        content: '<b>Paso a paso (sustitución):</b><br>\n' +
          '1. Despeja $x$ o $y$ en una ecuación<br>\n' +
          '2. Sustituye en la otra ecuación<br>\n' +
          '3. Resuelve la ecuación de una variable<br>\n' +
          '4. Halla la segunda variable<br>\n' +
          '5. Verifica en ambas ecuaciones originales'
      },
      {
        type: 'example',
        content: 'Resuelve por eliminación:<br>\n' +
          '$\\begin{cases} 2x+3y=8 \\\\ 4x-3y=4 \\end{cases}$<br>\n' +
          'Sumando: $6x=12 \\Rightarrow x=2$<br>\n' +
          'Sustituyendo: $2(2)+3y=8 \\Rightarrow 4+3y=8 \\Rightarrow 3y=4 \\Rightarrow y=\\dfrac{4}{3}$<br>\n' +
          '$\\boxed{(x,y)=\\left(2,\\dfrac{4}{3}\\right)}$'
      },
      {
        type: 'example',
        content: 'Resuelve por sustitución:<br>\n' +
          '$\\begin{cases} y=2x+1 \\\\ 3x+2y=9 \\end{cases}$<br>\n' +
          'Sustituimos $y$: $3x+2(2x+1)=9 \\Rightarrow 3x+4x+2=9 \\Rightarrow 7x=7 \\Rightarrow x=1$<br>\n' +
          'Luego $y=2(1)+1=3$ &nbsp; $\\boxed{(1,3)}$'
      },
      {
        type: 'warn',
        content: 'Siempre verifica tu solución sustituyendo en las dos ecuaciones originales. Si no cumple ambas, hay un error.'
      }
    ],
    quiz: {
      q: '$\\begin{cases} x+y=7 \\\\ x-y=3 \\end{cases}$ soluciones:',
      opts: ['$(5,2)$', '$(2,5)$', '$(4,3)$', '$(3,4)$'],
      ans: 0,
      exp: 'Sumando: $2x=10 \\Rightarrow x=5$. Luego $5+y=7 \\Rightarrow y=2$. Solución $(5,2)$.'
    }
  },
  {
    area: 'geometry', icon: '🔺', title: 'Triángulos', sub: 'Clasificación, teoremas y líneas notables', color: 'th-c11',
    rule: '∡ Interiores = 180°\nÁngulo exterior = suma de los dos interiores no adyacentes\nExistencia: a+b>c, b+c>a, a+c>b',
    video: { id: 'I9S1kBXLkBo', title: 'Clasificación de triángulos', author: 'Daniel Carreón' },
    headerBg: 'linear-gradient(135deg,#0d9488,#115e59)',
    sections: [
      {
        type: 'steps',
        title: 'Clasificación de triángulos',
        steps: [
          { h: 'Según sus lados', p: '• Equilátero: 3 lados iguales, 3 ángulos de 60°\n• Isósceles: 2 lados iguales, ángulos base iguales\n• Escaleno: 3 lados diferentes, 3 ángulos diferentes' },
          { h: 'Según sus ángulos', p: '• Acutángulo: 3 ángulos agudos (< 90°)\n• Rectángulo: 1 ángulo recto (= 90°), los otros suman 90°\n• Obtusángulo: 1 ángulo obtuso (> 90°), los otros son agudos' },
        ]
      },
      {
        type: 'rule',
        content: 'Teorema fundamental: La suma de los ángulos interiores de cualquier triángulo es 180°.\n∠A + ∠B + ∠C = 180°\n\nTeorema del ángulo exterior: Un ángulo exterior es igual a la suma de los dos ángulos interiores no adyacentes.\n∠ext = ∠A + ∠B\n\nDesigualdad triangular: En todo triángulo, un lado es menor que la suma de los otros dos y mayor que su diferencia.\na + b > c, b + c > a, a + c > b'
      },
      {
        type: 'steps',
        title: 'Líneas notables',
        steps: [
          { h: 'Altura (h)', p: 'Segmento perpendicular desde un vértice al lado opuesto. Ortocentro: punto de intersección de las tres alturas.' },
          { h: 'Mediana (m)', p: 'Segmento desde un vértice al punto medio del lado opuesto. Baricentro: punto de intersección (divide en razón 2:1).' },
          { h: 'Bisectriz (b)', p: 'Recta que divide al ángulo en dos partes iguales. Incentro: punto de intersección (centro de la circunferencia inscrita).' },
          { h: 'Mediatriz', p: 'Recta perpendicular a un lado en su punto medio. Circuncentro: punto de intersección (centro de la circunferencia circunscrita).' },
        ]
      },
      {
        type: 'rule',
        content: 'Teoremas de bisectrices:\n\n1. Ángulo formado por dos bisectrices interiores:\nx = 90° + (∠A)/2\n\n2. Ángulo formado por dos bisectrices exteriores:\nx = 90° − (∠A)/2\n\n3. Ángulo formado por bisectriz interior y exterior:\nx = (∠A)/2'
      },
      {
        type: 'example',
        content: 'Problema tipo admisión:\n\nEn un triángulo ABC, ∠A = 80° y ∠B = 40°. Halla el ángulo formado por las bisectrices interiores de A y B.\n\nPaso 1: ∠C = 180° − 80° − 40° = 60°\nPaso 2: Bisectriz de A forma 40° con cada lado.\nPaso 3: Bisectriz de B forma 20° con cada lado.\nPaso 4: El ángulo entre ambas bisectrices = 180° − (40°+20°) − (∠C/2) = 120° + 30° = ...\nAlternativa: x = 90° + (∠C)/2 = 90° + 30° = 120° ✓'
      },
      {
        type: 'example',
        content: 'Problema tipo admisión:\n\nLos lados de un triángulo miden 7, 9 y 14. ¿Existe el triángulo?\n\nPaso 1: Desigualdad triangular.\n7 + 9 = 16 > 14 ✓\n9 + 14 = 23 > 7 ✓\n7 + 14 = 21 > 9 ✓\nSí existe, es un triángulo escaleno obtusángulo (14² = 196 > 7²+9² = 130).'
      },
      {
        type: 'warn',
        content: '⚠️ Errores comunes:\n1. Confundir mediana con altura: la mediana va al punto medio, la altura es perpendicular.\n2. Olvidar que la suma de ángulos interiores es siempre 180°, no 360°.\n3. Aplicar Pitágoras solo en triángulos rectángulos, no en cualquier triángulo.\n4. En la desigualdad triangular, verificar TODAS las combinaciones, no solo dos.'
      }
    ],
    quiz: {
      q: 'En un triángulo, dos ángulos miden 70° y 50°. ¿Cuánto mide el tercer ángulo?',
      opts: ['50°', '60°', '70°', '80°'],
      ans: 1,
      exp: '180° − 70° − 50° = 60°. ¡Siempre suma 180°!'
    }
  },
  {
    area: 'algebra', icon: '📊', title: 'Función Real de Variable Real', sub: 'Dominio, rango y regla de correspondencia', color: 'th-c12',
    rule: 'f: A → B  |  ∀x∈A, ∃!y∈B: y=f(x)\nDom(f) = {x ∈ ℝ / f(x) ∈ ℝ}\nRan(f) = {y ∈ ℝ / ∃x: y=f(x)}',
    video: { id: 'c20QWEhBPKs', title: 'Hallar el dominio de una función', author: 'Susi Profe' },
    headerBg: 'linear-gradient(135deg,#d97706,#92400e)',
    sections: [
      {
        type: 'steps',
        title: 'Definición de función',
        steps: [
          { h: '¿Qué es una función?', p: 'Una función f: A → B es una regla de correspondencia que asigna a cada elemento x del conjunto A (dominio) un único elemento y del conjunto B (codominio), denotado como y = f(x).' },
          { h: 'Dominio', p: 'El dominio (Dom f) es el conjunto de todos los valores de x para los cuales la función está definida, es decir, existe f(x) como número real.' },
          { h: 'Rango', p: 'El rango (Ran f) es el conjunto de todos los valores de y que toma la función, es decir, todos los f(x) cuando x recorre el dominio.' },
          { h: 'Regla de correspondencia', p: 'Es la expresión matemática que relaciona x con y, por ejemplo: $f(x) = x^2 + 1$, $g(x) = \\sqrt{x-2}$, $h(x) = \\frac{1}{x-3}$.' },
        ]
      },
      {
        type: 'rule',
        content: 'Función real de variable real:\n\n$f: \\mathbb{R} \\to \\mathbb{R}$ significa que tanto el dominio como el codominio son subconjuntos de los números reales.\n\nPara hallar el dominio:\n• Si hay denominador → denominador $\\neq 0$\n• Si hay raíz par → radicando $\\geq 0$\n• Si hay logaritmo → argumento $> 0$\n\nPara hallar el rango:\n• Despejar $x$ en términos de $y$\n• Analizar qué valores de $y$ producen $x$ real'
      },
      {
        type: 'example',
        content: 'Ejemplo 1: Halla el dominio y rango de $f(x) = x^2 + 1$\n\nDominio: No hay restricciones (no hay denominador, raíz ni log). $\\text{Dom} = \\mathbb{R}$.\n\nRango: $x^2 \\geq 0 \\rightarrow x^2 + 1 \\geq 1 \\rightarrow \\text{Ran} = [1, +\\infty[$\n\nVerificación: Para $y = 5$, $x^2 = 4 \\rightarrow x = \\pm 2$ (existe).\nPara $y = 0$, $x^2 = -1 \\rightarrow$ no existe $x$ real. ✓'
      },
      {
        type: 'example',
        content: 'Ejemplo 2: Halla el dominio y rango de $f(x) = \\sqrt{x - 3}$\n\nDominio: $x - 3 \\geq 0 \\rightarrow x \\geq 3 \\rightarrow \\text{Dom} = [3, +\\infty[$\n\nRango: La raíz cuadrada siempre da valores $\\geq 0$.\n$\\text{Ran} = [0, +\\infty[$\n\nVerificación: Para $x = 7$, $f(7) = \\sqrt{4} = 2$.\nPara $x = 3$, $f(3) = 0$ (mínimo valor). ✓'
      },
      {
        type: 'example',
        content: 'Ejemplo 3: Halla el dominio y rango de $f(x) = \\frac{1}{x - 2}$\n\nDominio: $x - 2 \\neq 0 \\rightarrow x \\neq 2 \\rightarrow \\text{Dom} = \\mathbb{R} - \\{2\\}$\n\nRango: Despejamos $x$:\n$y = \\frac{1}{x-2} \\rightarrow y(x-2) = 1 \\rightarrow yx - 2y = 1 \\rightarrow yx = 1 + 2y \\rightarrow x = \\frac{1+2y}{y}$\nEl denominador $y \\neq 0$. $\\text{Ran} = \\mathbb{R} - \\{0\\}$\n\nVerificación: Para $y = 3$, $x = \\frac{1+6}{3} = \\frac{7}{3}$ (existe).\nPara $y = 0$, no hay $x$ que cumpla. ✓'
      },
      {
        type: 'warn',
        content: '⚠️ Errores comunes:\n1. Confundir rango con codominio: el rango son los valores que realmente toma la función, no todos los posibles.\n2. Olvidar restricciones del dominio: siempre verifica denominadores ($\\neq 0$) y raíces pares ($\\geq 0$).\n3. Decir que $f(x) = \\sqrt{x}$ tiene dominio $\\mathbb{R}$: el dominio es $x \\geq 0$.\n4. Al despejar $x$ para hallar el rango, no considerar que el denominador no puede ser cero.'
      }
    ],
    quiz: {
      q: '¿Cuál es el dominio de $f(x)=\\frac{1}{x-5}$?',
      opts: ['Todos los reales', 'Todo real excepto $x=5$', '$x \\geq 5$', '$x \\leq 5$'],
      ans: 1,
      exp: 'El denominador $x-5 \\neq 0$, entonces $x \\neq 5$. Dom $= \\mathbb{R} - \\{5\\}$.'
    }
  }
]
