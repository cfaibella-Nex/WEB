// === NexSocial — Corporate Video scenes.jsx (v8) ===
// 11 escenes · ~58s · estructura definitiva
// Depèn de: animations.jsx

const NX = {
  ink:    '#0f2d1e',
  forest: '#2d6b48',
  mid:    '#3d8a62',
  pale:   '#98be95',
  cream:  '#d4e8d0',
  hero:   '#dff0db',
  white:  '#f5f0e8',
  text:   '#2a3d28',
  muted:  '#4a6858',
};

const PHOTOS = {
  logo_sala:   'img_38.png',                                    // E1
  bosc:        'img_17.jpg',                                    // E2 🌬️
  comunitat:   'elder-group-friends-partying.jpg',              // E3
  plantes:     'hamaca.jpg',                                        // E4 🌬️
  senior:      'senior-women-giving-each-other-high-five.jpg',  // E5
  mans:        'close-up-woman-nature.jpg',                     // E6 🌬️
  natura:      'img_02.jpg',                                    // E7
  grup:        'img_14.jpg',                                    // E8 🌬️
  gestio:      'img_13.jpg',                                    // E9
  platja:      'img_39.jpg',                                    // E10 🌬️
  final_bg:    'img_23.png',                                        // E11 fons
};
const LOGO = 'logo-transparent.png';

// ── Helpers ───────────────────────────────────────────────────────────────

const PhotoBackdrop = ({ src, dur, position='center', side='left', dimL=0.72, dimR=0.18, scaleBase=1.04, scaleEnd=0.05 }) => {
  const { localTime } = useSprite();
  const t = Math.max(0, Math.min(1, localTime / dur));
  const scale = scaleBase + t * scaleEnd;
  const tx = (t - 0.5) * (side === 'right' ? 16 : -16);
  const grad = side === 'left'
    ? `linear-gradient(to right, rgba(25,65,40,${dimL}) 0%, rgba(25,65,40,${dimL*0.5}) 50%, rgba(25,65,40,${dimR}) 100%)`
    : side === 'right'
    ? `linear-gradient(to left,  rgba(25,65,40,${dimL}) 0%, rgba(25,65,40,${dimL*0.5}) 50%, rgba(25,65,40,${dimR}) 100%)`
    : `linear-gradient(180deg, rgba(25,65,40,.08) 0%, rgba(25,65,40,.42) 100%)`;
  return (
    <div style={{ position:'absolute', inset:0, overflow:'hidden', background:NX.ink }}>
      <div style={{
        position:'absolute', inset:0,
        backgroundImage:`url('${src}')`,
        backgroundSize:'cover', backgroundPosition:position,
        transform:`scale(${scale}) translateX(${tx}px)`,
        transformOrigin:'center',
        filter:'saturate(.88) contrast(1.04) brightness(.85)',
        willChange:'transform',
      }}/>
      <div style={{ position:'absolute', inset:0, background:grad }}/>
    </div>
  );
};

const BreathScene = ({ src, dur, position='center', caption }) => {
  const { localTime } = useSprite();
  const t = Math.max(0, Math.min(1, localTime / dur));

  // ── Parallax: foto i text a velocitats diferents ──
  const scalePhoto = 1.08 + t * 0.04;
  const txPhoto = (t - 0.5) * -22;          // foto es mou lleugerament esquerra
  const txText  = (t - 0.5) * 10;           // text es mou en direcció contrària (menys)

  const opacity = interpolate([0, 0.5, dur-0.6, dur],[0,1,1,0],Easing.easeInOutSine)(localTime);

  // ── Typewriter ──
  const twStart = 0.8;
  const twDur = caption ? caption.length * 0.055 : 0;
  const charsVisible = caption
    ? Math.floor(Math.max(0, (localTime - twStart) / twDur) * caption.length)
    : 0;
  const writingDone = localTime > twStart + twDur + 0.2;
  const cursorOpacity = writingDone ? 0 : Math.round(localTime * 2) % 2 === 0 ? 1 : 0;
  const textOpacity = interpolate([0, twStart, dur-0.8, dur],[0,1,1,0],Easing.easeOutCubic)(localTime);

  // ── Dues línies de text ──
  const words = caption ? caption.split(' ') : [];
  const half = Math.ceil(words.length / 2);
  const part1 = words.slice(0, half).join(' ');
  const part2 = words.slice(half).join(' ');
  const vis1 = Math.min(charsVisible, part1.length);
  const vis2 = Math.max(0, charsVisible - part1.length - 1);

  // ── Línia decorativa: es dibuixa quan acaba el typewriter ──
  const lineStart = twStart + twDur + 0.1;
  const lineProgress = interpolate([lineStart, lineStart + 1.8],[0,1],Easing.easeOutCubic)(localTime);
  const lineOpacity = interpolate([lineStart, lineStart+0.3, dur-0.8, dur],[0,1,1,0])(localTime);

  return (
    <div style={{ position:'absolute', inset:0, overflow:'hidden', background:NX.ink, opacity }}>
      {/* Foto amb parallax propi */}
      <div style={{
        position:'absolute', inset:0,
        backgroundImage:`url('${src}')`,
        backgroundSize:'cover', backgroundPosition:position,
        transform:`scale(${scalePhoto}) translateX(${txPhoto}px)`,
        transformOrigin:'center',
        filter:'saturate(.95) brightness(.90)',
        willChange:'transform',
      }}/>
      <div style={{ position:'absolute', inset:0, background:`linear-gradient(180deg, rgba(25,65,40,.28) 0%, rgba(25,65,40,.50) 100%)` }}/>

      {caption && (
        <div style={{
          position:'absolute', top:64, left:110,
          opacity: textOpacity,
          transform:`translateX(${txText}px)`,  // parallax text
          willChange:'transform',
          fontFamily:"'Cormorant Garamond',serif",
          letterSpacing:'-0.01em',
          lineHeight:1.1,
        }}>
          {/* Línia 1 — blanc pur */}
          <div style={{
            fontSize:88, fontWeight:300, color:'rgba(255,255,255,.92)',
            textShadow:'0 2px 20px rgba(25,65,40,.70)',
            display:'flex', alignItems:'baseline', gap:2,
          }}>
            <span>{part1.slice(0, vis1)}</span>
            {vis1 < part1.length && (
              <span style={{ opacity:cursorOpacity, display:'inline-block', width:2, height:'0.75em', background:NX.pale, marginLeft:3, verticalAlign:'middle', borderRadius:1 }}/>
            )}
          </div>

          {/* Línia 2 — verd pale italic */}
          {vis1 >= part1.length && part2 && (
            <div style={{
              fontSize:88, fontWeight:300, fontStyle:'italic',
              color:NX.pale,
              textShadow:'0 2px 24px rgba(25,65,40,.85), 0 0 40px rgba(25,65,40,.60)',
              display:'flex', alignItems:'baseline', gap:2, marginTop:4,
            }}>
              <span>{part2.slice(0, vis2)}</span>
              {vis2 < part2.length && (
                <span style={{ opacity:cursorOpacity, display:'inline-block', width:2, height:'0.75em', background:NX.pale, marginLeft:3, verticalAlign:'middle', borderRadius:1 }}/>
              )}
            </div>
          )}

          {/* Línia decorativa — es dibuixa quan acaba el typewriter */}
          <div style={{
            marginTop:18,
            height:1.5,
            width: 900,
            background:`linear-gradient(to right, ${NX.cream}, ${NX.hero}, transparent)`,
            transform:`scaleX(${lineProgress})`,
            transformOrigin:'left',
            opacity: lineOpacity,
            borderRadius:1,
          }}/>
        </div>
      )}
    </div>
  );
};

const Rise = ({ inAt=0, outAt, dur=0.65, distance=28, sceneDur, children, style={} }) => {
  const { localTime } = useSprite();
  const end = outAt != null ? outAt : sceneDur - 0.25;
  const opacity = interpolate([0,inAt,inAt+dur,end,sceneDur],[0,0,1,1,0],Easing.easeOutCubic)(localTime);
  const y = interpolate([inAt,inAt+dur],[distance,0],Easing.easeOutCubic)(localTime);
  return <div style={{ opacity, transform:`translateY(${y}px)`, ...style }}>{children}</div>;
};

const Line = ({ inAt=0, sceneDur, color=NX.pale, width=64 }) => {
  const { localTime } = useSprite();
  const scaleX = interpolate([inAt,inAt+0.8],[0,1],Easing.easeOutCubic)(localTime);
  const opacity = interpolate([0,inAt,sceneDur-0.3,sceneDur],[0,1,1,0])(localTime);
  return <div style={{ width, height:1.5, background:color, opacity, transform:`scaleX(${scaleX})`, transformOrigin:'left', marginBottom:28 }}/>;
};

const Eye = ({ children, color='rgba(255,255,255,.65)' }) => (
  <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:12, letterSpacing:'.28em', textTransform:'uppercase', fontWeight:500, color, marginBottom:18 }}>{children}</div>
);

const TextScene = ({ photo, position='center', side='left', dimL=0.80, dimR=0.16, eyebrow, title, titleSize=83, subtitle, sd }) => (
  <>
    <PhotoBackdrop src={photo} dur={sd} position={position} side={side} dimL={dimL} dimR={dimR}/>
    <div style={{ position:'absolute', inset:0, padding:'0 110px', display:'flex', flexDirection:'column', justifyContent:'center', zIndex:2 }}>
      {eyebrow && <Rise inAt={0.1} sceneDur={sd}><Eye>{eyebrow}</Eye></Rise>}
      <Rise inAt={0.3} sceneDur={sd}>
        <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:titleSize, lineHeight:1.1, color:NX.white, letterSpacing:'-0.01em', marginBottom:4 }}>
          {title}
        </div>
      </Rise>
      <Line inAt={0.55} sceneDur={sd} width={52}/>
      {subtitle && (
        <Rise inAt={0.8} sceneDur={sd}>
          <div style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:'italic', fontSize:41, lineHeight:1.65, color:'rgba(255,255,255,.86)', maxWidth:800 }}>
            {subtitle}
          </div>
        </Rise>
      )}
    </div>
  </>
);


// ══════════════════════════════════════════════════════════════════
// E1 — Obertura · 5.2s · img_38.png
// ══════════════════════════════════════════════════════════════════
const S1_D=8.2; const S1_T=0;
const Scene1 = () => <Sprite start={S1_T} end={S1_T+S1_D+0.3}><S1Inner/></Sprite>;
const S1Inner = () => {
  const sd = S1_D+0.3;
  return (
    <>
      <PhotoBackdrop src={PHOTOS.logo_sala} dur={sd} position="center 38%" side="left" dimL={0.60} dimR={0.10} scaleBase={0.82} scaleEnd={0.02}/>
      <div style={{ position:'absolute', inset:0, padding:'0 110px', display:'flex', flexDirection:'column', justifyContent:'center', zIndex:2 }}>
        <Rise inAt={0.1} sceneDur={sd}>
          <div style={{
            fontFamily:"'Cormorant Garamond',serif",
            fontSize:111, fontWeight:300, letterSpacing:'-0.01em',
            marginBottom:0, lineHeight:1.06, color:'rgba(255,255,255,.92)',
          }}>
            <span style={{ color:'rgba(255,255,255,.92)' }}>Nex</span><em style={{ color:NX.pale, fontStyle:'italic' }}>Social</em>
          </div>
        </Rise>
        <Line inAt={0.25} sceneDur={sd} width={220}/>
        <Rise inAt={0.45} sceneDur={sd}>
          <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:111, lineHeight:1.06, color:'#fff', maxWidth:1000, letterSpacing:'-0.01em', fontWeight:300 }}>
            Cooperativa<br/>de <em style={{ color:NX.pale, fontStyle:'italic', textShadow:'0 2px 20px rgba(25,65,40,.85), 0 0 35px rgba(25,65,40,.60)' }}>Acompañamiento<br/>Sociovital</em>
          </div>
        </Rise>
      </div>
    </>
  );
};


// ══════════════════════════════════════════════════════════════════
// E2 🌬️ — Respiració · 5s · img_17.jpg
// ══════════════════════════════════════════════════════════════════
const S2_D=8.0; const S2_T=S1_T+S1_D;
const Scene2 = () => (
  <Sprite start={S2_T} end={S2_T+S2_D}>
    <BreathScene src={PHOTOS.bosc} dur={S2_D} position="center 45%" caption="Acompañamos cada momento vital"/>
  </Sprite>
);


// ══════════════════════════════════════════════════════════════════
// E3 — Qui som · 5.5s · elder-group-friends.jpg
// ══════════════════════════════════════════════════════════════════
const S3_D=8.5; const S3_T=S2_T+S2_D;
const Scene3 = () => <Sprite start={S3_T} end={S3_T+S3_D+0.3}><S3Inner/></Sprite>;
const S3Inner = () => {
  const sd = S3_D+0.3;
  return (
    <>
      <PhotoBackdrop src={PHOTOS.comunitat} dur={sd} position="center 28%" side="left" dimL={0.82} dimR={0.18}/>
      <div style={{ position:'absolute', inset:0, padding:'0 110px', display:'flex', flexDirection:'column', justifyContent:'center', zIndex:2 }}>
        <Rise inAt={0.1} sceneDur={sd}><Eye>Quiénes somos</Eye></Rise>
        <Line inAt={0.2} sceneDur={sd} width={44}/>
        <Rise inAt={0.35} sceneDur={sd}>
          <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:73, lineHeight:1.12, color:'#fff', maxWidth:860, fontWeight:300, marginBottom:22 }}>
            Somos un nexo de apoyo<br/>
            y <em style={{ color:NX.pale, fontStyle:'italic', textShadow:'0 2px 20px rgba(25,65,40,.85), 0 0 35px rgba(25,65,40,.60)' }}>acompañamiento sociovital</em>
          </div>
        </Rise>
        <Rise inAt={1.2} sceneDur={sd}>
          <div style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:'italic', fontSize:41, lineHeight:1.65, color:'rgba(255,255,255,.78)', maxWidth:860 }}>
            Personas reales, en momentos vitales complejos<br/>Un referente cercano, profesional y multidisciplinar
          </div>
        </Rise>
      </div>
    </>
  );
};


// ══════════════════════════════════════════════════════════════════
// E4 🌬️ — Respiració · 5s · still-life-sustainability.jpg
// ══════════════════════════════════════════════════════════════════
const S4_D=8.0; const S4_T=S3_T+S3_D;
const Scene4 = () => (
  <Sprite start={S4_T} end={S4_T+S4_D}>
    <BreathScene src={PHOTOS.plantes} dur={S4_D} position="center" caption="Contáctanos y disfruta de tu tiempo"/>
  </Sprite>
);


// ══════════════════════════════════════════════════════════════════
// E5 — Acompanyament Sociovital · 5.5s · senior-women-high-five.jpg
// ══════════════════════════════════════════════════════════════════
const S5_D=8.5; const S5_T=S4_T+S4_D;
const Scene5 = () => <Sprite start={S5_T} end={S5_T+S5_D+0.3}><S5Inner/></Sprite>;
const S5Inner = () => {
  const sd = S5_D+0.3;
  return (
    <TextScene
      photo={PHOTOS.senior} sd={sd}
      position="center 30%" side="left" dimL={0.84} dimR={0.16}
      eyebrow="Servicio"
      title={<>Acompañamiento<br/><em style={{ color:NX.pale, fontStyle:'italic', textShadow:'0 2px 24px rgba(25,65,40,.90), 0 0 40px rgba(25,65,40,.70)' }}>Sociovital</em></>}
      titleSize={83}
      subtitle="Cuando necesitamos una mano en el día a día estamos contigo — Queremos ser tu referente de confianza"
    />
  );
};


// ══════════════════════════════════════════════════════════════════
// E6 🌬️ — Respiració · 5s · close-up-woman-nature.jpg
// ══════════════════════════════════════════════════════════════════
const S6_D=8.0; const S6_T=S5_T+S5_D;
const Scene6 = () => (
  <Sprite start={S6_T} end={S6_T+S6_D}>
    <BreathScene src={PHOTOS.mans} dur={S6_D} position="center 40%" caption="Date un respiro y reconecta contigo"/>
  </Sprite>
);


// ══════════════════════════════════════════════════════════════════
// E7 — Acompanyament Emocional i Gestàltic · 5.5s · img_02.jpg
// ══════════════════════════════════════════════════════════════════
const S7_D=8.5; const S7_T=S6_T+S6_D;
const Scene7 = () => <Sprite start={S7_T} end={S7_T+S7_D+0.3}><S7Inner/></Sprite>;
const S7Inner = () => {
  const sd = S7_D+0.3;
  return (
    <TextScene
      photo={PHOTOS.natura} sd={sd}
      position="center 42%" side="left" dimL={0.80} dimR={0.16}
      eyebrow="Servicio"
      title={<>Acompañamiento<br/><em style={{ color:NX.pale, fontStyle:'italic', textShadow:'0 2px 20px rgba(25,65,40,.85), 0 0 35px rgba(25,65,40,.60)' }}>Emocional y Gestáltico</em></>}
      titleSize={77}
      subtitle="Acompañamiento con perspectiva Gestalt — Individual/grupal — Ideal para momentos de cambio vital"
    />
  );
};


// ══════════════════════════════════════════════════════════════════
// E8 🌬️ — Respiració · 5s · img_14.jpg
// ══════════════════════════════════════════════════════════════════
const S8_D=8.0; const S8_T=S7_T+S7_D;
const Scene8 = () => (
  <Sprite start={S8_T} end={S8_T+S8_D}>
    <BreathScene src={PHOTOS.grup} dur={S8_D} position="center 35%" caption="Te acompañamos y creamos conexiones"/>
  </Sprite>
);


// ══════════════════════════════════════════════════════════════════
// E9 — Acompanyament Gestió Tràmits · 5.5s · img_13.jpg
// ══════════════════════════════════════════════════════════════════
const S9_D=8.5; const S9_T=S8_T+S8_D;
const Scene9 = () => <Sprite start={S9_T} end={S9_T+S9_D+0.3}><S9Inner/></Sprite>;
const S9Inner = () => {
  const sd = S9_D+0.3;
  return (
    <TextScene
      photo={PHOTOS.gestio} sd={sd}
      position="center 40%" side="left" dimL={0.80} dimR={0.16}
      eyebrow="Servicio"
      title={<>Te acompañamos en la<br/><em style={{ color:NX.pale, fontStyle:'italic', textShadow:'0 2px 20px rgba(25,65,40,.85), 0 0 35px rgba(25,65,40,.60)' }}>Gestión de Trámites Sociales</em></>}
      titleSize={70}
      subtitle="Acompañamos a personas y familias en la gestión de trámites de carácter social y administrativo"
    />
  );
};


// ══════════════════════════════════════════════════════════════════
// E10 🌬️ — Respiració · 5s · img_39.jpg (platja)
// ══════════════════════════════════════════════════════════════════
const S10_D=8.0; const S10_T=S9_T+S9_D;
const Scene10 = () => (
  <Sprite start={S10_T} end={S10_T+S10_D}>
    <BreathScene src={PHOTOS.platja} dur={S10_D} position="center 40%" caption="Primero te escuchamos — Después te acompañamos"/>
  </Sprite>
);


// ══════════════════════════════════════════════════════════════════
// E11 — Final blanc · 5.8s · img_23.png (fons) + logo gran
// ══════════════════════════════════════════════════════════════════
const S11_D=8.8; const S11_T=S10_T+S10_D;
const Scene11 = () => <Sprite start={S11_T} end={S11_T+S11_D}><S11Inner/></Sprite>;
const S11Inner = () => {
  const sd = S11_D;
  const { localTime } = useSprite();
  const bgOpacity = interpolate([0, 0.7],[0,1],Easing.easeOutCubic)(localTime);
  return (
    <>
      {/* img_23 nítida — fons beige càlid */}
      <div style={{ position:'absolute', inset:0, overflow:'hidden', background:'#f5f0e8' }}>
        <div style={{
          position:'absolute', inset:0,
          backgroundImage:`url('img_23.png')`,
          backgroundSize:'cover', backgroundPosition:'center',
          filter:'saturate(.70) brightness(1.0) sepia(.08)',
          transform:'scale(1.02)',
        }}/>
      </div>
      {/* Vel beige/blanc trencat dreta — menys opac */}
      <div style={{ position:'absolute', inset:0, background:`linear-gradient(to left, rgba(245,240,232,0.55) 22%, rgba(245,240,232,0.32) 50%, rgba(245,240,232,0) 100%)` }}/>

      <div style={{ position:'absolute', inset:0, display:'flex', flexDirection:'column', alignItems:'flex-end', justifyContent:'center', paddingRight:120, zIndex:2 }}>
        <Rise inAt={0.3} sceneDur={sd} style={{ textAlign:'right' }}>
          <div style={{ fontFamily:"'League Spartan',sans-serif", fontSize:14, fontWeight:700, letterSpacing:'.20em', color:NX.muted, marginBottom:20, textTransform:'uppercase' }}>NexSocial</div>
        </Rise>
        <Rise inAt={0.5} sceneDur={sd} style={{ textAlign:'right' }}>
          <div style={{ width:60, height:1.5, background:NX.mid, marginBottom:28, marginLeft:'auto' }}/>
        </Rise>
        <Rise inAt={0.7} sceneDur={sd}>
          <div style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:'italic', fontSize:43, color:NX.muted, marginBottom:44, textAlign:'right', maxWidth:640 }}>
            Primera orientación sin compromiso
          </div>
        </Rise>
        <Rise inAt={1.1} sceneDur={sd}>
          <div style={{ display:'flex', flexDirection:'column', alignItems:'flex-end', gap:14 }}>
            <div style={{ background:NX.forest, color:'#fff', fontFamily:"'DM Sans',sans-serif", fontSize:14, fontWeight:600, letterSpacing:'.10em', textTransform:'uppercase', padding:'16px 44px', borderRadius:40, boxShadow:`0 8px 26px rgba(45,107,72,.32)`, marginBottom:6 }}>
              Solicita una llamada
            </div>
            <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:22, fontWeight:500, letterSpacing:'.04em', color:'#2a3d28' }}>www.nexsocial.org</div>
            <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:19, color:'#4a6858', letterSpacing:'.02em' }}>infonex@nexsocial.org</div>
            <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:13, color:'#6a8870', letterSpacing:'.12em', textTransform:'uppercase', marginTop:6 }}>
              Cooperativa de Acompañamiento Sociovital
            </div>
          </div>
        </Rise>
      </div>
    </>
  );
};


// ── Progrés ────────────────────────────────────────────────────────────────
const Progress = () => {
  const t = useTime();
  const scenes = [
    {s:S1_T, e:S2_T,  b:false},
    {s:S2_T, e:S3_T,  b:true },
    {s:S3_T, e:S4_T,  b:false},
    {s:S4_T, e:S5_T,  b:true },
    {s:S5_T, e:S6_T,  b:false},
    {s:S6_T, e:S7_T,  b:true },
    {s:S7_T, e:S8_T,  b:false},
    {s:S8_T, e:S9_T,  b:true },
    {s:S9_T, e:S10_T, b:false},
    {s:S10_T,e:S11_T, b:true },
    {s:S11_T,e:S11_T+S11_D, b:false},
  ];
  const onLight = t >= S11_T;
  return (
    <div style={{ position:'absolute', left:110, bottom:50, display:'flex', gap:7, zIndex:10 }}>
      {scenes.map(({s,e,b},i) => {
        const p = Math.max(0,Math.min(1,(t-s)/(e-s)));
        const active = t>=s && t<e, done = t>=e;
        return (
          <div key={i} style={{ width:b?18:36, height:2, background:onLight?'rgba(15,45,30,.20)':'rgba(255,255,255,.20)', position:'relative', borderRadius:1 }}>
            <div style={{ position:'absolute',inset:0, width:`${p*100}%`, background:active?(onLight?NX.forest:NX.pale):(done?(onLight?'rgba(45,107,72,.45)':'rgba(152,190,149,.50)'):'transparent'), borderRadius:1 }}/>
          </div>
        );
      })}
    </div>
  );
};

const SigMark = () => {
  const t = useTime();
  const onLight = t >= S11_T;
  return (
    <div style={{ position:'absolute', top:32, right:42, padding:'5px 13px', background:onLight?'rgba(45,107,72,.10)':'rgba(152,190,149,.13)', border:onLight?'1px solid rgba(45,107,72,.22)':'1px solid rgba(152,190,149,.28)', borderRadius:7, zIndex:11, backdropFilter:'blur(4px)', transition:'all .5s' }}>
      <div style={{ fontFamily:"'League Spartan',sans-serif", fontSize:11, fontWeight:700, letterSpacing:'.14em', color:onLight?NX.forest:NX.pale, transition:'color .5s' }}>NEXSOCIAL</div>
    </div>
  );
};


// ── Root ───────────────────────────────────────────────────────────────────
const VIDEO_DURATION = S11_T + S11_D;

const RestartBridge = () => {
  const { setTime } = useTimeline();
  React.useEffect(() => {
    window.__nexRestart = () => setTime(0);
    return () => { delete window.__nexRestart; };
  }, [setTime]);
  return null;
};

const NexSocialVideo = () => (
  <div style={{ position:'absolute', inset:0, background:NX.ink, overflow:'hidden' }}>
    <RestartBridge/>
    <Scene1/><Scene2/><Scene3/><Scene4/><Scene5/><Scene6/>
    <Scene7/><Scene8/><Scene9/><Scene10/><Scene11/>
    <SigMark/>
    <Progress/>
  </div>
);

window.NexSocialVideo = NexSocialVideo;
window.VIDEO_DURATION = VIDEO_DURATION;
