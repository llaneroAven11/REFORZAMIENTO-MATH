const universityQuestions = [
  // ── ÁLGEBRA ──
  { id: 'alg_01', universities: ['sanmarcos', 'trujillo', 'sanmartin'], subject: 'álgebra', text: 'Si $f(x) = 2x + 3$, halla $f(5) + f(0)$', opts: ['16', '18', '20', '14'], ans: 0, explanation: '$f(5)=2(5)+3=13$, $f(0)=3$, suma $=16$.' },
  { id: 'alg_02', universities: ['sanmarcos', 'uni', 'trujillo', 'sanmartin'], subject: 'álgebra', text: 'Si $\\frac{x}{3} + \\frac{x}{2} = 10$, halla $x$', opts: ['6', '12', '18', '24'], ans: 1, explanation: '$\\frac{2x+3x}{6}=10 \\Rightarrow 5x=60 \\Rightarrow x=12$.' },
  { id: 'alg_03', universities: ['sanmarcos', 'uni', 'trujillo', 'sanmartin'], subject: 'álgebra', text: 'Resuelve: $5x - 3 = 2x + 9$', opts: ['3', '4', '5', '6'], ans: 1, explanation: '$5x-2x=9+3 \\Rightarrow 3x=12 \\Rightarrow x=4$.' },
  { id: 'alg_04', universities: ['sanmarcos', 'uni'], subject: 'álgebra', text: 'Si $\\frac{2}{3} = \\frac{x}{15}$, halla $x$', opts: ['8', '10', '12', '6'], ans: 1, explanation: '$2\\times15 = 3x \\Rightarrow 30 = 3x \\Rightarrow x=10$.' },
  { id: 'alg_05', universities: ['sanmarcos', 'uni', 'trujillo', 'sanmartin'], subject: 'álgebra', text: 'Si $P(x) = x^2 - 3x + 2$, halla $P(P(1))$', opts: ['0', '2', '4', '6'], ans: 1, explanation: '$P(1)=1-3+2=0$, $P(0)=2$.' },
  { id: 'alg_06', universities: ['sanmarcos', 'uni', 'trujillo'], subject: 'álgebra', text: 'La suma de dos números es 24 y su diferencia es 8. ¿Cuál es el número mayor?', opts: ['14', '16', '18', '20'], ans: 1, explanation: '$x+y=24$, $x-y=8 \\Rightarrow 2x=32 \\Rightarrow x=16$.' },
  { id: 'alg_07', universities: ['sanmarcos', 'uni', 'trujillo', 'sanmartin'], subject: 'álgebra', text: 'Si $x^2 - 9 = 0$, halla el valor positivo de $x$', opts: ['2', '3', '4', '9'], ans: 1, explanation: '$x^2 = 9 \\Rightarrow x = 3$ (valor positivo).' },
  { id: 'alg_08', universities: ['sanmarcos', 'uni', 'trujillo', 'sanmartin'], subject: 'álgebra', text: 'Halla $x$: $2^{x} = 32$', opts: ['4', '5', '6', '3'], ans: 1, explanation: '$2^5 = 32$, por lo tanto $x=5$.' },
  { id: 'alg_09', universities: ['uni', 'trujillo', 'sanmartin'], subject: 'álgebra', text: 'Simplifica: $\\frac{x^2 - 1}{x - 1}$', opts: ['$x-1$', '$x+1$', '$x$', '$1$'], ans: 1, explanation: '$\\frac{(x-1)(x+1)}{x-1} = x+1$, con $x \\neq 1$.' },
  { id: 'alg_10', universities: ['sanmarcos', 'uni', 'trujillo'], subject: 'álgebra', text: 'Resuelve el sistema: $\\begin{cases} x + y = 7 \\\\ x - y = 3 \\end{cases}$', opts: ['$(5,2)$', '$(4,3)$', '$(6,1)$', '$(3,4)$'], ans: 0, explanation: 'Sumando: $2x=10 \\Rightarrow x=5$, luego $5+y=7 \\Rightarrow y=2$.' },
  { id: 'alg_11', universities: ['sanmarcos', 'uni', 'trujillo', 'sanmartin'], subject: 'álgebra', text: 'Si $3x + 2 = 14$, ¿cuánto vale $x$?', opts: ['3', '4', '5', '6'], ans: 1, explanation: '$3x = 12 \\Rightarrow x=4$.' },
  { id: 'alg_12', universities: ['sanmarcos', 'uni', 'trujillo', 'sanmartin'], subject: 'álgebra', text: 'Factoriza: $x^2 + 5x + 6$', opts: ['$(x+2)(x+3)$', '$(x+1)(x+6)$', '$(x-2)(x-3)$', '$(x+5)(x+1)$'], ans: 0, explanation: 'Dos números que suman 5 y multiplican 6: 2 y 3.' },

  // ── ARITMÉTICA ──
  { id: 'ari_01', universities: ['sanmarcos', 'trujillo', 'sanmartin'], subject: 'aritmética', text: '¿Cuál es el 20% de 250?', opts: ['25', '50', '40', '60'], ans: 1, explanation: '$0.20\\times250 = 50$.' },
  { id: 'ari_02', universities: ['sanmarcos', 'uni', 'trujillo', 'sanmartin'], subject: 'aritmética', text: 'Un número más su cuarta parte es 60. Halla el número.', opts: ['40', '48', '45', '50'], ans: 1, explanation: '$x + x/4 = 60 \\Rightarrow 5x/4 = 60 \\Rightarrow x = 48$.' },
  { id: 'ari_03', universities: ['sanmarcos', 'uni', 'trujillo', 'sanmartin'], subject: 'aritmética', text: 'Halla el valor de $1 + 2 + 3 + \\dots + 50$', opts: ['1225', '1275', '1325', '1175'], ans: 1, explanation: '$S = \\frac{50\\times51}{2} = 1275$.' },
  { id: 'ari_04', universities: ['sanmarcos', 'uni', 'trujillo', 'sanmartin'], subject: 'aritmética', text: 'En una granja hay 40 animales entre gallinas y conejos. Si hay 110 patas, ¿cuántos conejos hay?', opts: ['15', '20', '25', '30'], ans: 0, explanation: '$g+c=40$, $2g+4c=110 \\Rightarrow g=40-c$, $2(40-c)+4c=110 \\Rightarrow 80+2c=110 \\Rightarrow c=15$.' },
  { id: 'ari_05', universities: ['sanmarcos', 'uni'], subject: 'aritmética', text: 'Si $\\frac{3}{x} = \\frac{6}{8}$, halla $x$', opts: ['2', '3', '4', '6'], ans: 2, explanation: '$3\\times8 = 6x \\Rightarrow 24 = 6x \\Rightarrow x=4$.' },
  { id: 'ari_06', universities: ['sanmarcos', 'trujillo', 'sanmartin'], subject: 'aritmética', text: 'En una fiesta hay 30 personas. Si cada una saluda a todas las demás, ¿cuántos saludos hay?', opts: ['435', '870', '425', '400'], ans: 0, explanation: '$C(30,2) = \\frac{30\\times29}{2} = 435$.' },
  { id: 'ari_07', universities: ['sanmarcos', 'uni', 'trujillo', 'sanmartin'], subject: 'aritmética', text: '¿Cuánto es $\\frac{3}{4} + \\frac{1}{2}$?', opts: ['$\\frac{4}{6}$', '$\\frac{5}{4}$', '$\\frac{3}{6}$', '$\\frac{4}{8}$'], ans: 1, explanation: '$\\frac{3}{4}+\\frac{2}{4} = \\frac{5}{4}$.' },
  { id: 'ari_08', universities: ['sanmarcos', 'uni', 'trujillo', 'sanmartin'], subject: 'aritmética', text: 'Si un producto cuesta S/80 y tiene un descuento del 15%, ¿cuánto se paga?', opts: ['S/68', 'S/65', 'S/72', 'S/60'], ans: 0, explanation: 'Descuento $= 80\\times0.15 = 12$, total $= 80-12 = 68$.' },
  { id: 'ari_09', universities: ['uni', 'trujillo', 'sanmartin'], subject: 'aritmética', text: '¿Cuál es el MCM de 12 y 18?', opts: ['36', '24', '48', '72'], ans: 0, explanation: '$12=2^2\\times3$, $18=2\\times3^2$, MCM $=2^2\\times3^2=36$.' },
  { id: 'ari_10', universities: ['sanmarcos', 'uni', 'trujillo', 'sanmartin'], subject: 'aritmética', text: 'Reparte S/300 en partes iguales entre 8 personas. ¿Cuánto recibe cada una?', opts: ['S/35.5', 'S/37.5', 'S/40', 'S/32.5'], ans: 1, explanation: '$300 \\div 8 = 37.5$.' },

  // ── GEOMETRÍA ──
  { id: 'geo_01', universities: ['sanmarcos', 'trujillo', 'sanmartin'], subject: 'geometría', text: '¿Cuánto mide el área de un triángulo de base 10 cm y altura 6 cm?', opts: ['60 cm²', '30 cm²', '15 cm²', '45 cm²'], ans: 1, explanation: '$A = \\frac{b \\times h}{2} = \\frac{10 \\times 6}{2} = 30$ cm².' },
  { id: 'geo_02', universities: ['sanmarcos', 'uni', 'trujillo', 'sanmartin'], subject: 'geometría', text: '¿Cuál es el perímetro de un cuadrado de área 36 cm²?', opts: ['18 cm', '24 cm', '36 cm', '12 cm'], ans: 1, explanation: 'Lado $= \\sqrt{36}=6$ cm, perímetro $=4\\times6=24$ cm.' },
  { id: 'geo_03', universities: ['sanmarcos', 'uni', 'trujillo', 'sanmartin'], subject: 'geometría', text: 'Halla el volumen de un cubo de arista 5 cm', opts: ['25 cm³', '125 cm³', '75 cm³', '100 cm³'], ans: 1, explanation: '$V = a^3 = 5^3 = 125$ cm³.' },
  { id: 'geo_04', universities: ['sanmarcos', 'uni', 'trujillo', 'sanmartin'], subject: 'geometría', text: 'Un ángulo mide el triple de su complemento. ¿Cuánto mide?', opts: ['60°', '67.5°', '45°', '30°'], ans: 1, explanation: '$x = 3(90-x) \\Rightarrow x = 270-3x \\Rightarrow 4x=270 \\Rightarrow x=67.5$°.' },
  { id: 'geo_05', universities: ['sanmarcos', 'uni', 'trujillo'], subject: 'geometría', text: '¿Cuánto mide la hipotenusa de un triángulo rectángulo con catetos 3 y 4?', opts: ['5', '6', '7', '8'], ans: 0, explanation: 'Por Pitágoras: $h^2 = 3^2+4^2 = 9+16 = 25 \\Rightarrow h = 5$.' },
  { id: 'geo_06', universities: ['sanmarcos', 'uni', 'trujillo', 'sanmartin'], subject: 'geometría', text: 'El área de un círculo es $\\pi$ cm². ¿Cuánto mide su radio?', opts: ['0.5 cm', '1 cm', '2 cm', '$\\pi$ cm'], ans: 1, explanation: '$A = \\pi r^2 = \\pi \\Rightarrow r^2 = 1 \\Rightarrow r = 1$ cm.' },
  { id: 'geo_07', universities: ['sanmarcos', 'uni', 'trujillo', 'sanmartin'], subject: 'geometría', text: 'Dos ángulos son suplementarios si suman:', opts: ['90°', '180°', '270°', '360°'], ans: 1, explanation: 'Ángulos suplementarios suman 180°.' },
  { id: 'geo_08', universities: ['sanmarcos', 'uni', 'trujillo', 'sanmartin'], subject: 'geometría', text: '¿Cuántas caras tiene un cubo?', opts: ['4', '6', '8', '12'], ans: 1, explanation: 'Un cubo tiene 6 caras.' },
  { id: 'geo_09', universities: ['trujillo', 'sanmartin'], subject: 'geometría', text: 'Si un rectángulo tiene largo 8 cm y ancho 5 cm, ¿cuál es su área?', opts: ['26 cm²', '40 cm²', '30 cm²', '45 cm²'], ans: 1, explanation: '$A = 8\\times5 = 40$ cm².' },

  // ── TRIGONOMETRÍA ──
  { id: 'trig_01', universities: ['sanmarcos', 'uni', 'trujillo', 'sanmartin'], subject: 'trigonometría', text: '¿Cuánto vale $\\sin 30°$?', opts: ['0', '$\\frac{1}{2}$', '$\\frac{\\sqrt{3}}{2}$', '1'], ans: 1, explanation: '$\\sin 30° = 1/2$.' },
  { id: 'trig_02', universities: ['sanmarcos', 'uni', 'trujillo', 'sanmartin'], subject: 'trigonometría', text: '¿Cuánto vale $\\cos 0°$?', opts: ['0', '1', '-1', '$\\frac{1}{2}$'], ans: 1, explanation: '$\\cos 0° = 1$.' },
  { id: 'trig_03', universities: ['sanmarcos', 'uni', 'trujillo'], subject: 'trigonometría', text: '¿Cuál es el valor de $\\tan 45°$?', opts: ['0', '1', '$\\sqrt{3}$', 'Indefinido'], ans: 1, explanation: '$\\tan 45° = 1$.' },
  { id: 'trig_04', universities: ['sanmarcos', 'uni', 'trujillo', 'sanmartin'], subject: 'trigonometría', text: 'En un triángulo rectángulo, la razón $\\frac{\\text{cateto opuesto}}{\\text{hipotenusa}}$ corresponde a:', opts: ['Coseno', 'Seno', 'Tangente', 'Cotangente'], ans: 1, explanation: 'El seno es cateto opuesto sobre hipotenusa.' },
  { id: 'trig_05', universities: ['sanmarcos', 'uni', 'trujillo', 'sanmartin'], subject: 'trigonometría', text: '¿Cuánto vale $\\sin 90°$?', opts: ['0', '1', '$\\frac{1}{2}$', '$\\frac{\\sqrt{2}}{2}$'], ans: 1, explanation: '$\\sin 90° = 1$.' },
  { id: 'trig_06', universities: ['sanmarcos', 'uni', 'trujillo'], subject: 'trigonometría', text: 'Si $\\sin \\theta = \\frac{1}{2}$, ¿cuál es un posible valor de $\\theta$?', opts: ['30°', '45°', '60°', '90°'], ans: 0, explanation: '$\\sin 30° = 1/2$.' },
  { id: 'trig_07', universities: ['sanmarcos', 'uni', 'trujillo', 'sanmartin'], subject: 'trigonometría', text: '¿A cuántos grados equivale $\\pi$ radianes?', opts: ['90°', '180°', '270°', '360°'], ans: 1, explanation: '$\\pi$ rad $= 180°$.' },

  // ── HABILIDAD MATEMÁTICA ──
  { id: 'hm_01', universities: ['sanmarcos', 'uni', 'trujillo', 'sanmartin'], subject: 'habilidad matemática', text: 'En una serie de razones: $\\frac{a}{2} = \\frac{b}{3} = \\frac{c}{5}$ y $a+b+c=60$. Halla $a$', opts: ['10', '12', '15', '18'], ans: 1, explanation: '$a=2k,b=3k,c=5k \\Rightarrow 10k=60 \\Rightarrow k=6 \\Rightarrow a=12$.' },
  { id: 'hm_02', universities: ['sanmarcos', 'uni', 'trujillo', 'sanmartin'], subject: 'habilidad matemática', text: 'Halla el número que sigue: 3, 8, 23, 68, ?', opts: ['203', '198', '208', '213'], ans: 0, explanation: '$3\\times3-1=8$, $8\\times3-1=23$, $23\\times3-1=68$, $68\\times3-1=203$.' },
  { id: 'hm_03', universities: ['sanmarcos', 'uni', 'trujillo', 'sanmartin'], subject: 'habilidad matemática', text: 'Si $a\\oplus b = a^2 - b$, calcula $3\\oplus(2\\oplus1)$', opts: ['10', '8', '12', '6'], ans: 1, explanation: '$2\\oplus1=4-1=3$, $3\\oplus3=9-3=6$.' },
  { id: 'hm_04', universities: ['sanmarcos', 'uni', 'trujillo', 'sanmartin'], subject: 'habilidad matemática', text: 'Si $a\\#b = a + b + ab$, halla $2\\#(3\\#1)$', opts: ['15', '17', '19', '21'], ans: 1, explanation: '$3\\#1=3+1+3=7$, $2\\#7=2+7+14=23$.' },
  { id: 'hm_05', universities: ['sanmarcos', 'uni', 'trujillo', 'sanmartin'], subject: 'habilidad matemática', text: 'Halla el término que falta: 1, 4, 9, 16, 25, ?', opts: ['30', '35', '36', '49'], ans: 2, explanation: 'Son cuadrados perfectos: $1^2,2^2,3^2,4^2,5^2,6^2=36$.' },
  { id: 'hm_06', universities: ['sanmarcos', 'trujillo', 'sanmartin'], subject: 'habilidad matemática', text: '¿Cuántos triángulos hay en la figura? (cuadrícula 2×2 con diagonales)', opts: ['4', '6', '8', '10'], ans: 2, explanation: 'Hay 8 triángulos: 4 pequeños y 4 formados por dos triángulos.' },
  { id: 'hm_07', universities: ['sanmarcos', 'uni', 'trujillo', 'sanmartin'], subject: 'habilidad matemática', text: 'Si hoy es lunes, ¿qué día será en 25 días?', opts: ['Miércoles', 'Jueves', 'Viernes', 'Sábado'], ans: 2, explanation: '$25 \\div 7 = 3$ semanas y 4 días. Lunes + 4 = Viernes.' },
  { id: 'hm_08', universities: ['sanmarcos', 'uni', 'trujillo', 'sanmartin'], subject: 'habilidad matemática', text: 'Un reloj se atrasa 3 minutos cada hora. ¿Cuánto se atrasará en un día?', opts: ['48 min', '60 min', '72 min', '36 min'], ans: 2, explanation: '$3 \\times 24 = 72$ minutos.' },
  { id: 'hm_09', universities: ['sanmarcos', 'uni', 'trujillo'], subject: 'habilidad matemática', text: 'Halla $x$: $3x+5$ es a $x-1$ como 2 es a 1', opts: ['5', '7', '9', '11'], ans: 1, explanation: '$\\frac{3x+5}{x-1} = 2 \\Rightarrow 3x+5=2x-2 \\Rightarrow x=-7$.' },
  { id: 'hm_10', universities: ['trujillo', 'sanmartin', 'sanmarcos'], subject: 'habilidad matemática', text: 'Si $\\frac{4}{a} = \\frac{6}{b} = \\frac{8}{c}$ y $a+b+c=26$, halla $a$', opts: ['6', '8', '10', '12'], ans: 1, explanation: '$4/a=k \\Rightarrow a=4/k$, $b=6/k$, $c=8/k$, $(4+6+8)/k=26 \\Rightarrow 18/k=26 \\Rightarrow k=9/13 \\Rightarrow a=4/(9/13)=52/9$.' },

  // ── HABILIDAD VERBAL ──
  { id: 'hv_01', universities: ['sanmarcos', 'uni', 'trujillo', 'sanmartin'], subject: 'habilidad verbal', text: 'Elija el sinónimo de EFÍMERO:', opts: ['Duradero', 'Pasajero', 'Intenso', 'Constante'], ans: 1, explanation: 'Efímero significa que dura poco tiempo, su sinónimo es pasajero.' },
  { id: 'hv_02', universities: ['sanmarcos', 'uni', 'trujillo', 'sanmartin'], subject: 'habilidad verbal', text: 'Elija el antónimo de ABUNDANCIA:', opts: ['Riqueza', 'Exceso', 'Escasez', 'Plenitud'], ans: 2, explanation: 'Abundancia es gran cantidad; su antónimo es escasez.' },
  { id: 'hv_03', universities: ['sanmarcos', 'uni', 'trujillo', 'sanmartin'], subject: 'habilidad verbal', text: 'Complete la analogía: SOL es a DÍA como LUNA es a...', opts: ['NOCHE', 'CIELO', 'ESTRELLA', 'LUZ'], ans: 0, explanation: 'El SOL ilumina el DÍA, así como la LUNA ilumina la NOCHE.' },
  { id: 'hv_04', universities: ['sanmarcos', 'uni', 'trujillo', 'sanmartin'], subject: 'habilidad verbal', text: 'Elija el antónimo de PRÓDIGO:', opts: ['Generoso', 'Avaro', 'Derrochador', 'Liberal'], ans: 1, explanation: 'Pródigo es quien gasta sin medida; su antónimo es avaro.' },
  { id: 'hv_05', universities: ['sanmarcos', 'uni', 'trujillo', 'sanmartin'], subject: 'habilidad verbal', text: 'Complete: "La _____ es la ciencia que estudia los seres vivos."', opts: ['Física', 'Química', 'Biología', 'Geología'], ans: 2, explanation: 'La Biología es la ciencia que estudia los seres vivos.' },
  { id: 'hv_06', universities: ['sanmarcos', 'uni', 'trujillo', 'sanmartin'], subject: 'habilidad verbal', text: 'Identifique el conector lógico adecuado: "Estudió mucho, _____ no aprobó."', opts: ['además', 'porque', 'sin embargo', 'entonces'], ans: 2, explanation: '"Sin embargo" indica contraste entre estudiar y no aprobar.' },
  { id: 'hv_07', universities: ['sanmarcos', 'uni', 'trujillo', 'sanmartin'], subject: 'habilidad verbal', text: 'Elija el significado de INEFABLE:', opts: ['Que no se puede explicar', 'Que no se puede comer', 'Que no se puede mover', 'Que no se puede oír'], ans: 0, explanation: 'Inefable: que no se puede expresar con palabras.' },
  { id: 'hv_08', universities: ['sanmarcos', 'uni', 'trujillo', 'sanmartin'], subject: 'habilidad verbal', text: 'Elija la palabra correctamente escrita:', opts: ['Exhuberante', 'Exuberante', 'Exuverante', 'Exuberante'], ans: 1, explanation: 'La forma correcta es "exuberante", sin h intermedia.' },
  { id: 'hv_09', universities: ['sanmarcos', 'trujillo', 'sanmartin'], subject: 'habilidad verbal', text: 'Identifique el antónimo de OSAR:', opts: ['Atreverse', 'Temer', 'Desafiar', 'Arriesgar'], ans: 1, explanation: 'Osar es atreverse; su antónimo es temer.' },
  { id: 'hv_10', universities: ['sanmarcos', 'uni', 'trujillo', 'sanmartin'], subject: 'habilidad verbal', text: 'Complete: MANO es a DEDO como ÁRBOL es a...', opts: ['RAÍZ', 'HOJA', 'TRONCO', 'RAMAS'], ans: 3, explanation: 'El DEDO es parte de la MANO, así como las RAMAS son parte del ÁRBOL.' },
]

export function pickUniQuestions(universityId, perSubject = 2) {
  const pool = universityQuestions.filter(q => q.universities.includes(universityId))
  const groups = {}
  for (const q of pool) {
    if (!groups[q.subject]) groups[q.subject] = []
    groups[q.subject].push(q)
  }
  const selected = []
  for (const subject of Object.keys(groups)) {
    const shuffled = groups[subject].sort(() => Math.random() - 0.5)
    const picked = shuffled.slice(0, perSubject)
    selected.push(...picked)
  }
  return selected.sort(() => Math.random() - 0.5).map(shuffleOptions)
}

export function getUniSubjectCounts(universityId) {
  const qs = universityQuestions.filter(q => q.universities.includes(universityId))
  const counts = {}
  for (const q of qs) {
    counts[q.subject] = (counts[q.subject] || 0) + 1
  }
  return counts
}

function shuffleOptions(question) {
  const opts = [...question.opts]
  const correct = question.ans
  for (let i = opts.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [opts[i], opts[j]] = [opts[j], opts[i]]
  }
  const newAns = opts.indexOf(question.opts[correct])
  return { ...question, opts, ans: newAns }
}
