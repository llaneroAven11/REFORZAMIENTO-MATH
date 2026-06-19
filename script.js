
/* ===================== PARTICLES ===================== */
(function(){
  const c=['#e94560','#00b4d8','#f5a623','#52b788'];
  const p=document.getElementById('particles');
  for(let i=0;i<18;i++){
    const d=document.createElement('div');
    d.className='particle';
    const s=Math.random()*18+8;
    d.style.cssText=`width:${s}px;height:${s}px;left:${Math.random()*100}%;background:${c[i%c.length]};animation-duration:${Math.random()*18+10}s;animation-delay:${Math.random()*-20}s`;
    p.appendChild(d);
  }
})();

/* ===================== DATA ===================== */

// PRE-QUIZ: 6 preguntas de diagnóstico (conocimiento previo)
const preQuestions = [
  {
    id:'p1', level:'basico',
    text:'¿Cuál es el resultado de sumar dos números negativos?',
    opts:['Siempre positivo','Siempre negativo','Puede ser cualquier cosa','Siempre cero'],
    ans:1,
    hint:'Cuando sumas −3 + (−4), obtienes −7. Ambos negativos dan negativo.'
  },
  {
    id:'p2', level:'basico',
    text:'¿Qué significa el signo "–" delante de un paréntesis?',
    sub:'Ejemplo: –(3 + 5) = ?',
    opts:['Ignoras el paréntesis','Cambias el signo de cada término','Solo cambias el primer término','Sumas los términos'],
    ans:1,
    hint:'–(3+5) = –3 – 5 = –8. El signo negativo distribuye y cambia todos los signos.'
  },
  {
    id:'p3', level:'basico',
    text:'¿Cuánto vale (−2) × (−5)?',
    opts:['−10','10','−7','7'],
    ans:1,
    hint:'Negativo × negativo = positivo. (−2)×(−5) = +10.'
  },
  {
    id:'p4', level:'medio',
    text:'Si −8 + □ = 0, ¿qué número falta en el cuadro?',
    opts:['−8','0','8','−16'],
    ans:2,
    hint:'−8 + 8 = 0. El opuesto de un número hace que la suma sea cero.'
  },
  {
    id:'p5', level:'medio',
    text:'¿Cuál es el resultado de 4/3 + 3/4?',
    opts:['7/7 = 1','7/12','25/12','12/7'],
    ans:2,
    hint:'MCM(3,4)=12. Entonces 16/12 + 9/12 = 25/12.'
  },
  {
    id:'p6', level:'basico',
    text:'En la recta numérica, ¿qué número es mayor?',
    sub:'Compara: −3 y −7',
    opts:['−7','Son iguales','−3','Ninguno'],
    ans:2,
    hint:'En la recta numérica, los números más a la derecha son mayores. −3 > −7.'
  }
];

// TEORÍA: reemplazada por theoryCards interactivos (ver initTheory)

// POST-QUIZ: 9 preguntas basadas exactamente en el PDF
const postQuestions = [
  {
    id:'q1', level:'basico', topic:'Números Enteros',
    text:'Completa: −5 + □ = −7',
    sub:'¿Qué número debe ir en el cuadro?',
    opts:['A) +2','B) −2','C) −12','D) +12'],
    ans:1,
    explanation:'−5 + (−2) = −7. Se necesita el número que al sumarse con −5 dé −7, por tanto □ = −2.'
  },
  {
    id:'q2', level:'basico', topic:'Números Enteros',
    text:'Calcula: (−2) × (−5)',
    opts:['A) −10','B) −7','C) +10','D) +7'],
    ans:2,
    explanation:'Negativo × negativo = positivo. (−2) × (−5) = +10. ¡Dos negativos hacen un positivo!'
  },
  {
    id:'q3', level:'basico', topic:'Signos de Agrupación',
    text:'Elimina signos de agrupación y resuelve:',
    sub:'−4 + {−3 + [−3 + 8 + (−3 + (−8))]}',
    opts:['A) −13','B) −11','C) +13','D) −7'],
    ans:0,
    explanation:'Paso a paso: (−3+(−8))=−11 → [−3+8+(−11)]=−6 → {−3+(−6)}=−9 → −4+(−9) = −13.'
  },
  {
    id:'q4', level:'basico', topic:'Signos de Agrupación',
    text:'Efectúa H − K, donde:',
    sub:'H = 1 − (−2)(−5)   y   K = 5 + (−2)(+4)',
    opts:['A) −4','B) −6','C) 0','D) −8'],
    ans:1,
    explanation:'H = 1 − 10 = −9. K = 5 − 8 = −3. H − K = −9 − (−3) = −9 + 3 = −6.'
  },
  {
    id:'q5', level:'medio', topic:'Fracciones',
    text:'Calcula la expresión:',
    sub:'√( (4/3 + 3/4) ÷ (1/3 − 1/4) )',
    opts:['A) 1/2','B) 1/3','C) 1/4','D) 5'],
    ans:3,
    explanation:'Num: 16/12 + 9/12 = 25/12. Den: 4/12 − 3/12 = 1/12. División: 25/12 ÷ 1/12 = 25. Raíz: √25 = 5.'
  },
  {
    id:'q6', level:'medio', topic:'Fracciones',
    text:'Calcula:',
    sub:'√( (5/4 − 4/5) ÷ (1/4 − 1/5) )',
    opts:['A) 1','B) 2','C) 3','D) 4'],
    ans:2,
    explanation:'Num: 25/20 − 16/20 = 9/20. Den: 5/20 − 4/20 = 1/20. División: 9/20 ÷ 1/20 = 9. Raíz: √9 = 3.'
  },
  {
    id:'q7', level:'medio', topic:'Desigualdades',
    text:'Si x es un entero tal que −4 < x < +2, ¿cuál es la suma de todos los valores posibles de x?',
    opts:['A) −13','B) −10','C) −5','D) 7'],
    ans:2,
    explanation:'Los enteros son: −3, −2, −1, 0, 1. Suma = −3+(−2)+(−1)+0+1 = −5.'
  },
  {
    id:'q8', level:'avanzado', topic:'Expresiones con variables',
    text:'Calcula M:',
    sub:'M = (−1+3)(−5−7) ÷ [(−3+6) − (+8−4)]',
    opts:['A) 70','B) −70','C) −1','D) 24'],
    ans:1, // respuesta B) −70... verifiquemos: (2)(−12)/[(3)−(4)] = −24/(−1) = 24... Ajuste: D) 24
    ans:3,
    explanation:'Numerador: (−1+3)=2 ; (−5−7)=−12 ; producto=−24. Denominador: (−3+6)=3 ; (8−4)=4 ; 3−4=−1. M = −24 ÷ (−1) = 24.'
  },
  {
    id:'q9', level:'avanzado', topic:'Fracciones',
    text:'Calcula:',
    sub:'√[ (5/4 − 4/5) ÷ (1/20) ]',
    opts:['A) 1','B) 2','C) 3','D) 4'],
    ans:2,
    explanation:'5/4 − 4/5 = 25/20 − 16/20 = 9/20. Luego 9/20 ÷ 1/20 = 9. Raíz: √9 = 3.'
  }
];

/* ===================== STATE ===================== */
let preAnswers  = new Array(preQuestions.length).fill(null);
let postAnswers = new Array(postQuestions.length).fill(null);
let postAnswered = new Array(postQuestions.length).fill(false);
let currentPreQ = 0;
let xp = 0;
let preScore  = 0;
let postScore = 0;

/* ===================== PHASE CONTROL ===================== */
function startPhase(name){
  document.querySelectorAll('.phase').forEach(p=>p.classList.remove('active'));
  document.getElementById('phase-'+name).classList.add('active');
  window.scrollTo({top:0,behavior:'smooth'});

  if(name==='pre')    initPre();
  if(name==='theory') initTheory();
  if(name==='post')   initPost();
  if(name==='results') showResults();
}

/* ===================== PRE-QUIZ ===================== */
function initPre(){
  currentPreQ = 0;
  preAnswers = new Array(preQuestions.length).fill(null);
  renderPreQuestion();
}

function renderPreQuestion(){
  const q = preQuestions[currentPreQ];
  const total = preQuestions.length;
  const pct = (currentPreQ/total)*100;

  document.getElementById('pre-progress').style.width = pct+'%';
  document.getElementById('pre-prog-label').textContent = `Pregunta ${currentPreQ+1} de ${total}`;

  const container = document.getElementById('pre-questions');
  container.innerHTML = '';

  const card = document.createElement('div');
  card.className='card';
  card.style.animationDelay='.05s';

  const levelMap={basico:'basico',medio:'medio',avanzado:'avanzado'};
  const levelLabel={basico:'Básico',medio:'Intermedio',avanzado:'Avanzado'};

  let html=`
    <div class="q-counter">
      <span class="q-num">Pregunta ${currentPreQ+1}/${total}</span>
      <span class="q-level ${levelMap[q.level]}">${levelLabel[q.level]}</span>
    </div>
    <div class="q-text">${q.text}</div>
    ${q.sub?`<div class="q-subtext">${q.sub}</div>`:''}
    <div class="options-grid">
  `;
  const letters=['A','B','C','D'];
  q.opts.forEach((opt,i)=>{
    const sel = preAnswers[currentPreQ]===i ? 'selected' : '';
    html+=`<button class="opt-btn ${sel}" onclick="selectPreAns(${i})" data-idx="${i}">
      <span class="opt-letter">${letters[i]}</span>${opt}
    </button>`;
  });
  html+='</div>';
  card.innerHTML=html;
  container.appendChild(card);

  document.getElementById('pre-back-btn').disabled = currentPreQ===0;
  document.getElementById('pre-next-btn').disabled = preAnswers[currentPreQ]===null;

  const isLast = currentPreQ===total-1;
  const nextBtn = document.getElementById('pre-next-btn');
  nextBtn.textContent = isLast ? '¡Iniciar teoría! →' : 'Siguiente →';
  nextBtn.className = isLast ? 'btn btn-primary' : 'btn btn-teal';
}

function selectPreAns(i){
  preAnswers[currentPreQ]=i;
  document.querySelectorAll('.opt-btn').forEach((b,idx)=>{
    b.classList.toggle('selected', idx===i);
  });
  document.getElementById('pre-next-btn').disabled=false;
}

function preNav(dir){
  if(dir===1){
    if(currentPreQ===preQuestions.length-1){
      // calcular score
      preScore=0;
      preQuestions.forEach((q,i)=>{ if(preAnswers[i]===q.ans) preScore++; });
      startPhase('theory');
      return;
    }
    currentPreQ++;
  } else {
    currentPreQ = Math.max(0,currentPreQ-1);
  }
  renderPreQuestion();
}

/* ===================== THEORY CARDS ===================== */
const theoryCards = [
  {
    icon:'🔢', title:'Números Enteros', sub:'Suma, resta y signos', color:'th-c1',
    rule:'(−)+(−) = negativo\n(−)+(+) → usa el mayor\n(−)×(−) = (+)\n(−)×(+) = (−)',
    sections:[
      {
        type:'steps',
        title:'¿Qué son y cómo operarlos?',
        steps:[
          {
            h:'El conjunto de los enteros',
            p:'ℤ = { …, −3, −2, −1, 0, +1, +2, +3, … }. En la recta numérica, los números a la derecha son siempre mayores: −1 > −5.'
          },
          {
            h:'Suma con mismo signo',
            p:'Sumas los valores absolutos y conservas el signo. Ejemplo: −3 + (−4) = −7'
          },
          {
            h:'Suma con diferente signo',
            p:'Restas los valores absolutos y usas el signo del número con mayor valor absoluto. Ejemplo: −8 + 3 = −5'
          },
          {
            h:'Multiplicación y división',
            p:'Signos iguales → resultado positivo. Signos diferentes → resultado negativo.'
          }
        ]
      },
      {
        type:'rule',
        content:'(−)×(−) = (+)  |  (+)×(+) = (+)\n(−)×(+) = (−)  |  (+)×(−) = (−)'
      },
      {
        type:'example',
        content:'Del libro — Ej. 1:\n−5 + □ = −7 → □ = −2 (porque −5+(−2)=−7)\n−8 + □ = 0  → □ = +8 (el número opuesto)'
      },
      {
        type:'example',
        content:'Del libro — Ej. 4:\nH = 1−(−2)(−5) = 1−10 = −9\nK = 5+(−2)(+4) = 5−8 = −3\nH−K = −9−(−3) = −9+3 = −6 ✓'
      }
    ],
    quiz:{
      q:'Si −8 + □ = 0, ¿cuánto vale □?',
      opts:['−8','0','8','16'],
      ans:2,
      exp:'El opuesto de −8 es +8. Porque −8 + 8 = 0. ¡El opuesto de un número cancela su efecto!'
    }
  },
  {
    icon:'🔣', title:'Signos de Agrupación', sub:'Paréntesis, corchetes y llaves', color:'th-c2',
    rule:'Elimina de adentro → afuera\n(+)(...) → no cambia signos\n(−)(...) → cambia TODOS los signos',
    sections:[
      {
        type:'steps',
        title:'Procedimiento paso a paso',
        steps:[
          { h:'Identifica el grupo más interno', p:'Siempre empieza por los paréntesis ( ) más internos antes de los corchetes [ ] o llaves { }.' },
          { h:'Aplica la regla del signo exterior', p:'Si el signo antes del grupo es +, los términos no cambian. Si es −, todos los signos internos se invierten.' },
          { h:'Sustituye y continúa', p:'Reemplaza el grupo resuelto por su valor y repite el proceso con el siguiente nivel.' }
        ]
      },
      {
        type:'rule',
        content:'+(a + b) = a + b\n−(a + b) = −a − b\n−(a − b) = −a + b'
      },
      {
        type:'example',
        content:'Del libro — Ej. 2:\n−4+{−3+[−3+8+(−3+(−8))]}\nPaso 1: (−3+(−8)) = −11\nPaso 2: [−3+8+(−11)] = −6\nPaso 3: {−3+(−6)} = −9\nResultado: −4+(−9) = −13'
      },
      {
        type:'warn',
        content:'⚠️ Truco: si el signo de afuera es negativo, imagina que "reparte" su negatividad a todos los términos dentro del grupo.'
      }
    ],
    quiz:{
      q:'¿Cuánto es −(3 − 7)?',
      opts:['−4','4','10','−10'],
      ans:1,
      exp:'−(3−7) = −3+7 = +4. El signo negativo cambia todos los signos internos: 3 se vuelve −3 y −7 se vuelve +7.'
    }
  },
  {
    icon:'½', title:'Operaciones con Fracciones', sub:'Suma, resta y división', color:'th-c3',
    rule:'a/b + c/d → buscar MCM\na/b ÷ c/d = a/b × d/c\n(multiplica por el recíproco)',
    sections:[
      {
        type:'steps',
        title:'Suma y resta de fracciones',
        steps:[
          { h:'Halla el MCM de los denominadores', p:'El Mínimo Común Múltiplo es el número más pequeño que ambos denominadores dividen exactamente.' },
          { h:'Convierte a denominador común', p:'Multiplica numerador y denominador de cada fracción para que ambas tengan el MCM como denominador.' },
          { h:'Opera los numeradores', p:'Con denominadores iguales, sumas o restas solo los numeradores y conservas el denominador.' }
        ]
      },
      {
        type:'rule',
        content:'MCM(3,4) = 12\n4/3 = 16/12   |   3/4 = 9/12\n16/12 + 9/12 = 25/12'
      },
      {
        type:'steps',
        title:'División de fracciones',
        steps:[
          { h:'Invierte la segunda fracción (recíproco)', p:'La fracción 1/4 se convierte en 4/1. La fracción a/b se convierte en b/a.' },
          { h:'Multiplica', p:'Multiplicas numerador × numerador y denominador × denominador. ¡No necesitas MCM!' }
        ]
      },
      {
        type:'example',
        content:'Del libro — Ej. 6 y 8:\n√((4/3+3/4)÷(1/3−1/4))\nNum: 16/12+9/12 = 25/12\nDen: 4/12−3/12 = 1/12\n25/12 ÷ 1/12 = 25 → √25 = 5 ✓'
      }
    ],
    quiz:{
      q:'¿Cuánto es 1/2 + 1/3?',
      opts:['2/5','2/6','5/6','1/6'],
      ans:2,
      exp:'MCM(2,3)=6. Entonces 1/2=3/6 y 1/3=2/6. Suma: 3/6+2/6 = 5/6.'
    }
  },
  {
    icon:'⚖️', title:'Desigualdades con Enteros', sub:'Conjuntos solución en ℤ', color:'th-c4',
    rule:'−4 < x < 2 en ℤ:\nx ∈ {−3,−2,−1, 0, 1}\nLos extremos NO se incluyen',
    sections:[
      {
        type:'steps',
        title:'Cómo resolver una desigualdad',
        steps:[
          { h:'Lee el símbolo con cuidado', p:'< (menor estricto) excluye el extremo. ≤ (menor o igual) sí incluye el extremo.' },
          { h:'Lista los enteros del intervalo', p:'Escribe uno a uno todos los números enteros que cumplen ambas condiciones simultáneamente.' },
          { h:'Opera según lo que pida el problema', p:'Puede pedirte la suma, el producto, el mayor, el menor, etc. de los valores encontrados.' }
        ]
      },
      {
        type:'rule',
        content:'Si −4 < x < +2 con x ∈ ℤ:\nx puede ser: −3, −2, −1, 0, 1\nNOTA: −4 y +2 NO están incluidos'
      },
      {
        type:'example',
        content:'Del libro — Ej. 10:\n−4 < x < +2, x entero\nValores: {−3, −2, −1, 0, 1}\nSuma = −3+(−2)+(−1)+0+1 = −5 ✓'
      },
      {
        type:'warn',
        content:'⚠️ Cuidado: muchos estudiantes incluyen los extremos por error. Si dice "−4 < x", el −4 NO está en el conjunto.'
      }
    ],
    quiz:{
      q:'¿Cuántos enteros satisfacen −2 < x < 3?',
      opts:['3','4','5','6'],
      ans:1,
      exp:'Los enteros son: −1, 0, 1, 2. Son 4 valores. Los extremos −2 y 3 no se incluyen porque el símbolo es < (estricto).'
    }
  },
  {
    icon:'🔤', title:'Expresiones Algebraicas', sub:'Evaluar M, T, L y operar', color:'th-c5',
    rule:'Jerarquía de operaciones:\n1° Paréntesis ( )\n2° Potencias y raíces\n3° × y ÷  (izq → der)\n4° + y −  (izq → der)',
    sections:[
      {
        type:'steps',
        title:'Cómo evaluar expresiones con variables',
        steps:[
          { h:'Calcula cada expresión por separado', p:'Antes de comparar M, T y L, calcula el valor numérico de cada una de forma independiente.' },
          { h:'Respeta la jerarquía de operaciones', p:'Primero potencias y productos, luego sumas y restas. No mezcles pasos.' },
          { h:'Sustituye en las afirmaciones', p:'Una vez que tienes los valores, verifica cuál de las opciones dadas es verdadera.' }
        ]
      },
      {
        type:'example',
        content:'Del libro — Ej. 11:\nM = 5−2·3 = 5−6 = −1\nT = 10+(−14)/7 = 10−2 = 8\nL = −1−(−5)(+9)/(−15)\n  = −1−(−45/−15) = −1−3 = −4\nM+T+L = −1+8+(−4) = 3'
      },
      {
        type:'example',
        content:'Del libro — Ej. 12:\nM = (−1+3)(−5−7) ÷ [(−3+6)−(+8−4)]\n  = (2)(−12) ÷ [3−4]\n  = −24 ÷ (−1) = 24 ✓'
      },
      {
        type:'rule',
        content:'PEMDAS recordatorio:\nP=Paréntesis  E=Exponentes\nM/D=Mult/Div  A/S=Suma/Resta'
      }
    ],
    quiz:{
      q:'Si M = 3 − 2·4, ¿cuánto vale M?',
      opts:['4','−5','1','−1'],
      ans:1,
      exp:'Primero la multiplicación: 2·4 = 8. Luego la resta: 3−8 = −5. PEMDAS: multiplicación antes de resta.'
    }
  }
];

let thDone = new Array(theoryCards.length).fill(false);
let thQuizDone = new Array(theoryCards.length).fill(false);
let currentDetailIdx = -1;

function initTheory(){
  thDone = new Array(theoryCards.length).fill(false);
  thQuizDone = new Array(theoryCards.length).fill(false);
  document.getElementById('th-detail').style.display='none';
  document.getElementById('th-grid').style.display='grid';
  document.getElementById('th-back-btn').style.display='none';
  document.getElementById('th-continue-btn').style.display='none';
  renderThGrid();
  updateThTracker();
}

function renderThGrid(){
  const grid = document.getElementById('th-grid');
  grid.innerHTML='';
  theoryCards.forEach((c,i)=>{
    const done = thDone[i];
    const wrap = document.createElement('div');
    wrap.className=`flip-wrap ${done?'flipped':''} ${c.color}`;
    wrap.id=`flip-${i}`;
    wrap.onclick=()=>handleFlipClick(i,wrap);
    wrap.innerHTML=`
      <div class="flip-inner">
        <div class="flip-face flip-front">
          <span class="ff-badge ${done?'done':thQuizDone[i]?'unlocked':'locked'}">${done?'✓ Dominado':thQuizDone[i]?'En progreso':'Nuevo'}</span>
          <div>
            <div class="ff-icon">${c.icon}</div>
            <div class="ff-title">${c.title}</div>
            <div class="ff-sub">${c.sub}</div>
          </div>
        </div>
        <div class="flip-face flip-back">
          <div class="fb-title">Regla clave</div>
          <div class="fb-rule">${c.rule}</div>
          <div class="fb-action" onclick="event.stopPropagation(); openDetail(${i})">
            Ver teoría completa + mini-quiz →
          </div>
        </div>
      </div>
    `;
    grid.appendChild(wrap);
  });
}

function handleFlipClick(i, wrap){
  if(document.getElementById('th-detail').style.display!=='none') return;
  wrap.classList.toggle('flipped');
}

function openDetail(i){
  currentDetailIdx=i;
  const c=theoryCards[i];
  const detailEl=document.getElementById('th-detail');
  const cardEl=document.getElementById('th-detail-card');

  // header colors per card
  const headerColors=['linear-gradient(135deg,#0f3460,#1a1a6e)','linear-gradient(135deg,#0077a8,#004d6d)','linear-gradient(135deg,#7b2d8b,#4a1060)','linear-gradient(135deg,#b05c00,#7a3d00)','linear-gradient(135deg,#1a6b3c,#0d4022)'];

  let sectionsHtml='';
  c.sections.forEach(s=>{
    if(s.type==='steps'){
      sectionsHtml+=`<div style="margin-bottom:20px"><div style="font-size:.8rem;font-weight:800;text-transform:uppercase;letter-spacing:.07em;color:var(--muted);margin-bottom:12px">${s.title}</div>`;
      s.steps.forEach((step,si)=>{
        sectionsHtml+=`<div class="td-step">
          <div class="td-step-num">${si+1}</div>
          <div class="td-step-content"><h5>${step.h}</h5><p>${step.p}</p></div>
        </div>`;
      });
      sectionsHtml+='</div>';
    } else if(s.type==='rule'){
      sectionsHtml+=`<div class="td-rule">${s.content.replace(/\n/g,'<br>')}</div>`;
    } else if(s.type==='example'){
      sectionsHtml+=`<div class="td-example">${s.content.replace(/\n/g,'<br>')}</div>`;
    } else if(s.type==='warn'){
      sectionsHtml+=`<div class="td-warn">${s.content}</div>`;
    }
  });

  // quiz HTML
  const q=c.quiz;
  const letters=['A','B','C','D'];
  let quizOpts='';
  q.opts.forEach((opt,oi)=>{
    quizOpts+=`<button class="tq-opt" id="tq-opt-${i}-${oi}" onclick="answerThQuiz(${i},${oi})" ${thQuizDone[i]?'disabled':''}>
      <span class="tq-letter">${letters[oi]}</span>${opt}
    </button>`;
  });

  cardEl.innerHTML=`
    <div class="td-header" style="background:${headerColors[i]}">
      <div class="td-icon">${c.icon}</div>
      <div>
        <div class="td-htitle">${c.title}</div>
        <div class="td-hsub">${c.sub}</div>
      </div>
    </div>
    <div class="td-body">
      ${sectionsHtml}
      <div class="td-quiz">
        <div class="td-quiz-title">⚡ Mini-quiz — ¿Lo entendiste?</div>
        <div class="tq-question">${q.q}</div>
        <div class="tq-opts">${quizOpts}</div>
        <div class="tq-result ${thQuizDone[i]?'show ok':''}" id="tq-result-${i}">
          ${thQuizDone[i]?'✅ ¡Ya respondiste correctamente este mini-quiz! Tema dominado.':''}
        </div>
      </div>
    </div>
  `;

  // If already done, re-apply correct styling
  if(thQuizDone[i]){
    const btn=document.getElementById(`tq-opt-${i}-${q.ans}`);
    if(btn) btn.classList.add('tq-correct');
  }

  detailEl.style.display='block';
  document.getElementById('th-grid').style.display='none';
  document.getElementById('th-back-btn').style.display='inline-flex';
  detailEl.scrollIntoView({behavior:'smooth'});
}

function answerThQuiz(cardIdx, optIdx){
  const c=theoryCards[cardIdx];
  const q=c.quiz;
  const letters=['A','B','C','D'];
  const isCorrect=(optIdx===q.ans);

  // disable all opts
  q.opts.forEach((_,oi)=>{
    const btn=document.getElementById(`tq-opt-${cardIdx}-${oi}`);
    if(!btn) return;
    btn.disabled=true;
    if(oi===q.ans)       btn.classList.add('tq-correct');
    else if(oi===optIdx) btn.classList.add('tq-wrong');
  });

  // show result
  const res=document.getElementById(`tq-result-${cardIdx}`);
  res.classList.add('show');
  if(isCorrect){
    res.classList.add('ok');
    res.innerHTML=`✅ <strong>¡Correcto!</strong> ${q.exp}`;
    thQuizDone[cardIdx]=true;
    thDone[cardIdx]=true;
    updateThTracker();
    renderThGrid();
    // show continue if all done
    const allDone=thDone.every(Boolean);
    if(allDone){
      setTimeout(()=>{
        document.getElementById('th-continue-btn').style.display='inline-flex';
        document.getElementById('th-continue-btn').scrollIntoView({behavior:'smooth'});
      },700);
    }
  } else {
    res.classList.add('err');
    res.innerHTML=`❌ <strong>Respuesta correcta: ${letters[q.ans]}.</strong> ${q.exp} Vuelve a repasar la teoría e intenta de nuevo.`;
    // allow retry after 2s
    setTimeout(()=>{
      q.opts.forEach((_,oi)=>{
        const btn=document.getElementById(`tq-opt-${cardIdx}-${oi}`);
        if(btn){
          btn.disabled=false;
          btn.classList.remove('tq-correct','tq-wrong');
        }
      });
      res.classList.remove('show','ok','err');
      res.innerHTML='';
    },2800);
  }
}

function updateThTracker(){
  const done=thDone.filter(Boolean).length;
  const total=theoryCards.length;
  const pct=Math.round((done/total)*100);
  document.getElementById('th-bar').style.width=pct+'%';
  document.getElementById('th-label').textContent=`${done} de ${total} temas dominados`;
  const inner=document.getElementById('th-tracker-inner');
  inner.innerHTML='';
  for(let i=0;i<total;i++){
    const d=document.createElement('div');
    d.className='th-dot'+(thDone[i]?' done':'');
    inner.appendChild(d);
  }
}

function closeDetail(){
  document.getElementById('th-detail').style.display='none';
  document.getElementById('th-grid').style.display='grid';
  document.getElementById('th-back-btn').style.display='none';
  window.scrollTo({top:0,behavior:'smooth'});
}

function switchTab(i){ /* legacy - no longer used */ }

/* ===================== POST-QUIZ ===================== */
function initPost(){
  postAnswers  = new Array(postQuestions.length).fill(null);
  postAnswered = new Array(postQuestions.length).fill(false);
  xp=0;
  document.getElementById('xp-display').textContent='0 XP';
  document.getElementById('post-progress').style.width='0%';
  document.getElementById('post-prog-label').textContent=`Pregunta 0 de ${postQuestions.length}`;
  document.getElementById('post-actions').style.display='none';

  const container=document.getElementById('post-questions');
  container.innerHTML='';

  const xpMap={basico:10, medio:20, avanzado:30};
  const levelLabel={basico:'Básico',medio:'Intermedio',avanzado:'Avanzado'};
  const letters=['A','B','C','D'];

  postQuestions.forEach((q,qi)=>{
    const card=document.createElement('div');
    card.className='card';
    card.id='post-card-'+qi;
    card.style.animationDelay=(qi*.08)+'s';

    let html=`
      <div class="q-counter">
        <span class="q-num">Pregunta ${qi+1}/${postQuestions.length} · ${q.topic}</span>
        <span class="q-level ${q.level}">${levelLabel[q.level]} · +${xpMap[q.level]} XP</span>
      </div>
      <div class="q-text">${q.text}</div>
      ${q.sub?`<div class="q-math">${q.sub}</div>`:''}
      <div class="options-grid" id="opts-${qi}">
    `;
    q.opts.forEach((opt,oi)=>{
      html+=`<button class="opt-btn" id="opt-${qi}-${oi}" onclick="selectPostAns(${qi},${oi})">
        <span class="opt-letter">${letters[oi]}</span>${opt.replace(/^[A-D]\) /,'')}
      </button>`;
    });
    html+=`</div><div class="feedback-box" id="fb-${qi}"></div>`;
    card.innerHTML=html;
    container.appendChild(card);
  });
}

function selectPostAns(qi,oi){
  if(postAnswered[qi]) return;
  postAnswered[qi]=true;
  postAnswers[qi]=oi;

  const q=postQuestions[qi];
  const isCorrect=(oi===q.ans);
  const xpMap={basico:10,medio:20,avanzado:30};
  const letters=['A','B','C','D'];

  // Style buttons
  for(let i=0;i<q.opts.length;i++){
    const btn=document.getElementById(`opt-${qi}-${i}`);
    btn.disabled=true;
    if(i===q.ans)      btn.classList.add('correct');
    else if(i===oi)    btn.classList.add('incorrect');
  }

  // Feedback
  const fb=document.getElementById('fb-'+qi);
  if(isCorrect){
    xp+=xpMap[q.level];
    document.getElementById('xp-display').textContent=xp+' XP';
    fb.className='feedback-box ok show';
    fb.innerHTML=`✅ <strong>¡Correcto!</strong> ${q.explanation}`;
  } else {
    fb.className='feedback-box err show';
    fb.innerHTML=`❌ <strong>Respuesta correcta: ${letters[q.ans]}.</strong> ${q.explanation}`;
  }

  // Update progress
  const answered = postAnswered.filter(Boolean).length;
  const pct=(answered/postQuestions.length)*100;
  document.getElementById('post-progress').style.width=pct+'%';
  document.getElementById('post-prog-label').textContent=`Pregunta ${answered} de ${postQuestions.length}`;

  // Show finish button if all answered
  if(answered===postQuestions.length){
    setTimeout(()=>{
      document.getElementById('post-actions').style.display='flex';
      document.getElementById('post-actions').scrollIntoView({behavior:'smooth'});
    },800);
  }
}

/* ===================== RESULTS ===================== */
function showResults(){
  postScore = postAnswers.filter((a,i)=>a===postQuestions[i].ans).length;
  const total=postQuestions.length;
  const pct=Math.round((postScore/total)*100);

  // Medal
  let medal,medalTitle,medalSub;
  if(pct>=90){  medal='🥇'; medalTitle='¡Maestro Aritmético!';  medalSub='Rendimiento excepcional. ¡Sigue así!'; }
  else if(pct>=70){ medal='🥈'; medalTitle='¡Gran desempeño!';  medalSub='Estás en muy buen camino.'; }
  else if(pct>=50){ medal='🥉'; medalTitle='¡Buen comienzo!';   medalSub='Con un poco más de práctica lo lograrás.'; }
  else {           medal='📚'; medalTitle='¡Sigue estudiando!'; medalSub='Revisa la teoría y vuelve a intentarlo.'; }

  document.getElementById('medal-section').innerHTML=`
    <div class="medal-display">
      <span class="medal-emoji">${medal}</span>
      <div class="medal-title">${medalTitle}</div>
      <div class="medal-sub">${medalSub}</div>
    </div>
  `;

  // Stats
  const wrong=total-postScore;
  document.getElementById('results-stats').innerHTML=`
    <div class="stat-card green">
      <div class="stat-num">${postScore}</div>
      <div class="stat-name">Correctas</div>
    </div>
    <div class="stat-card red">
      <div class="stat-num">${wrong}</div>
      <div class="stat-name">Por mejorar</div>
    </div>
    <div class="stat-card blue">
      <div class="stat-num">${pct}%</div>
      <div class="stat-name">Puntaje</div>
    </div>
  `;

  // Topic analysis
  const topics={};
  postQuestions.forEach((q,i)=>{
    if(!topics[q.topic]) topics[q.topic]={correct:0,total:0};
    topics[q.topic].total++;
    if(postAnswers[i]===q.ans) topics[q.topic].correct++;
  });

  let topicHtml='';
  Object.entries(topics).forEach(([name,data])=>{
    const p=Math.round((data.correct/data.total)*100);
    const color=p>=70?'var(--lime)':p>=40?'var(--gold)':'var(--accent)';
    topicHtml+=`
      <div style="margin-bottom:14px">
        <div style="display:flex;justify-content:space-between;margin-bottom:5px">
          <span style="font-size:.88rem;font-weight:700;color:#374151">${name}</span>
          <span style="font-size:.8rem;font-weight:800;color:${color};font-family:'JetBrains Mono',monospace">${data.correct}/${data.total} · ${p}%</span>
        </div>
        <div class="progress-track" style="margin-bottom:0">
          <div class="progress-fill" style="width:${p}%;background:${color};transition:width 1s .3s"></div>
        </div>
      </div>
    `;
  });
  document.getElementById('topic-analysis').innerHTML=topicHtml;

  // Improvement plan
  const improvements=[];
  const weakTopics=Object.entries(topics).filter(([,d])=>(d.correct/d.total)<.7).map(([n])=>n);

  if(weakTopics.length===0){
    improvements.push({ok:true,text:'<strong>¡Dominas todos los temas!</strong> Practica ejercicios de nivel avanzado para consolidar.'});
  } else {
    weakTopics.forEach(t=>{
      const tips={
        'Números Enteros':'Practica la regla de signos en multiplicación. Recuerda: (−)×(−)=(+). Haz al menos 10 ejercicios de suma y resta de enteros.',
        'Signos de Agrupación':'Trabaja siempre de adentro hacia afuera. Usa lápiz y papel, resuelve cada paréntesis antes del corchete.',
        'Fracciones':'Repasa cómo hallar el MCM. Practica convertir fracciones a denominador común antes de operar.',
        'Desigualdades':'Grafica en la recta numérica los valores posibles. Recuerda excluir los extremos si el signo es < o >.',
        'Expresiones con variables':'Sustituye paso a paso y respeta la jerarquía de operaciones (PEMDAS).'
      };
      improvements.push({ok:false,text:`<strong>${t}:</strong> ${tips[t]||'Revisa los ejemplos del módulo teórico y practica más ejercicios.'}`});
    });
  }

  if(pct<100){
    improvements.push({ok:false,text:'<strong>Consejo general:</strong> Vuelve a la sección de Teoría, lee los ejemplos del libro y repite el cuestionario de salida.'});
  }
  improvements.push({ok:true,text:`<strong>¡Subiste ${xp} XP en esta sesión!</strong> Cada punto representa un concepto aprendido.`});

  let impHtml='';
  improvements.forEach(item=>{
    impHtml+=`<div class="imp-item">
      <div class="imp-dot ${item.ok?'ok':''}"></div>
      <div class="imp-text">${item.text}</div>
    </div>`;
  });
  document.getElementById('improvement-list').innerHTML=impHtml;

  // Progress comparison
  const preP=Math.round((preScore/preQuestions.length)*100);
  document.getElementById('pre-score-display').textContent=preP+'%';
  document.getElementById('post-score-display').textContent=pct+'%';

  // Animate bars after paint
  setTimeout(()=>{
    document.querySelectorAll('#topic-analysis .progress-fill').forEach(el=>{
      const w=el.style.width; el.style.width='0%';
      setTimeout(()=>el.style.width=w, 50);
    });
  },100);
}

function restartAll(){
  preAnswers=new Array(preQuestions.length).fill(null);
  postAnswers=new Array(postQuestions.length).fill(null);
  postAnswered=new Array(postQuestions.length).fill(false);
  xp=0; preScore=0; postScore=0;
  startPhase('welcome');
}

/* ===================== INIT ===================== */
document.addEventListener('DOMContentLoaded',()=>{
  // Show welcome
});
