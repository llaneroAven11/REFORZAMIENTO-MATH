export const theoryCards = [
  {
    area: 'arithmetic', icon: '🔢', title: 'Números Enteros', sub: 'Suma, resta y signos', color: 'th-c1',
    rule: '(−)+(−) = negativo\n(−)+(+) → usa el mayor\n(−)×(−) = (+)\n(−)×(+) = (−)',
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
  }
]
