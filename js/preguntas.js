var bancoPreguntas = [
  {
    "id": 1,
    "pregunta": "Un cliente entra muy enfadado a tu local quejándose a gritos de un defecto en un producto, espantando a otros clientes.",
    "opciones": [
      "Le escuchas con calma, le das la razón y le ofreces un reemplazo inmediato.",
      "Le dices que primero vas a atender a los demás clientes y que espere su turno.",
      "Lo ignoras y sigues atendiendo a los demás hasta que se calme solo."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 5,
        "feedback": "Pierdes el coste de un producto, pero salvas tu reputación frente al resto (0€ impacto)."
      },
      {
        "movimientos": [
          { "dinero": -87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -10,
        "feedback": "El cliente se siente ignorado, continúa montando un escándalo y varios clientes abandonan el local sin comprar (-87.77€)."
      },
      {
        "movimientos": [
          { "dinero": -43.88, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "El cliente grita todavía más, genera mal ambiente y deja una reseña muy negativa (-43.88€)."
      }
    ]
  },
  {
    "id": 2,
    "pregunta": "Tu proveedor principal te notifica de un día para otro que sus tarifas suben un 10% por la inflación.",
    "opciones": [
      "Absorbes el coste sin subir tus precios por miedo a perder clientes.",
      "Cambias de proveedor de inmediato eligiendo al primero que encuentras en internet.",
      "Negocias un punto intermedio con él y ajustas levemente tus precios de venta."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -100.86, "categoria_pnl": "Suministros" }
        ],
        "reputacion": 0,
        "feedback": "Tu margen de beneficio se hunde al asumir tú toda la subida de costes (-100.86€)."
      },
      {
        "movimientos": [
          { "dinero": -150.0, "categoria_pnl": "Suministros" }
        ],
        "reputacion": -5,
        "feedback": "El nuevo proveedor te envía mercancía de mala calidad y pierdes dinero (-150€)."
      },
      {
        "movimientos": [],
        "reputacion": 2,
        "feedback": "Mantienes la salud financiera de tu negocio sin grandes sobresaltos (0€)."
      }
    ]
  },
  {
    "id": 3,
    "pregunta": "Una supuesta agencia de marketing te llama ofreciéndote un paquete mágico para hacerte viral por 400€.",
    "opciones": [
      "Les pagas los 400€ sin buscar referencias, necesitas clientes ya.",
      "Rechazas la oferta y decides invertir 50€ probando anuncios por tu cuenta.",
      "Les dices que sí, pero que te cobren a final de mes según resultados. (La agencia rechaza)."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -400.0, "categoria_pnl": "Publicidad" }
        ],
        "reputacion": -2,
        "feedback": "Resulta ser una estafa o un servicio inútil con bots (-400€)."
      },
      {
        "movimientos": [
          { "dinero": 10.0, "categoria_pnl": "Publicidad" }
        ],
        "reputacion": 3,
        "feedback": "Aprendes lo básico de marketing y atraes clientes reales (-50€ inversión +60€ por los nuevos clientes)."
      },
      {
        "movimientos": [],
        "reputacion": 0,
        "feedback": "No pierdes dinero, pero tampoco haces nada para crecer (0€)."
      }
    ]
  },
  {
    "id": 4,
    "pregunta": "En plena ola de calor, el aire acondicionado de tu local se estropea.",
    "opciones": [
      "Llamas al servicio de mantenimiento que incluye tu seguro de comercio.",
      "Compras tres ventiladores industriales baratos para salir del paso.",
      "No haces nada."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 2,
        "feedback": "El seguro lo cubre y el técnico lo arregla esa misma tarde (0€)."
      },
      {
        "movimientos": [
          { "dinero": -150.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": 0,
        "feedback": "Gastas dinero en parches que no resuelven el problema del todo (-150€)."
      },
      {
        "movimientos": [
          { "dinero": -131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Los clientes entran, sudan y se van rápidamente sin comprar (-131.65€)."
      }
    ]
  },
  {
    "id": 5,
    "pregunta": "Llegas al final del trimestre y tienes que liquidar el IGIC. Te das cuenta de que te has gastado ese dinero en otras cosas.",
    "opciones": [
      "Pides un microcrédito rápido por internet con intereses abusivos.",
      "Presentas el impuesto fuera de plazo cuando consigas el dinero.",
      "Solicitas un aplazamiento o fraccionamiento a través de tu gestor."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -350.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -2,
        "feedback": "Pagas comisiones enormes que ahogan tu liquidez el mes siguiente (-350€)."
      },
      {
        "movimientos": [
          { "dinero": -400.0, "categoria_pnl": "Impuestos" }
        ],
        "reputacion": -10,
        "feedback": "El retraso genera recargos e intereses por presentar el impuesto fuera de plazo (-400€)."
      },
      {
        "movimientos": [],
        "reputacion": 2,
        "feedback": "Gestionas la situación por la vía legal y obtienes un aplazamiento. Evitas sanciones (0€ este mes)."
      }
    ]
  },
  {
    "id": 6,
    "pregunta": "Un producto específico lleva meses acumulando polvo en las estanterías sin venderse.",
    "opciones": [
      "Lo dejas ahí, algún día lo comprará alguien.",
      "Haces una promoción de liquidación a precio de coste para sacarlo ya.",
      "Lo tiras a la basura por frustración."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 0,
        "feedback": "Ocupa espacio valioso que podrías usar para productos rentables (Coste de oportunidad de 0€)."
      },
      {
        "movimientos": [
          { "dinero": 43.88, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 2,
        "feedback": "Recuperas el dinero invertido y liberas espacio en tu negocio (+43.88€ extra)."
      },
      {
        "movimientos": [
          { "dinero": -100.86, "categoria_pnl": "Suministros" }
        ],
        "reputacion": -2,
        "feedback": "Pierdes el 100% de la inversión que hiciste en ese producto (-100.86€)."
      }
    ]
  },
  {
    "id": 7,
    "pregunta": "El Ayuntamiento lanza una ayuda de 400€ para digitalización, pero el papeleo es tedioso y te llevará unas tres horas.",
    "opciones": [
      "Decides no solicitar la ayuda porque prefieres centrarte en otras tareas del negocio.",
      "Contratas una gestoría para que prepare y presente toda la documentación.",
      "Dedicas una tarde a preparar y presentar la solicitud tú mismo."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 0,
        "feedback": "Renuncias a una ayuda que habría supuesto un ingreso adicional para el negocio (0€)."
      },
      {
        "movimientos": [
          { "dinero": 100.0, "categoria_pnl": "Subvenciones" }
        ],
        "reputacion": 0,
        "feedback": "Obtienes la subvención, pero el coste de la gestoría reduce el beneficio neto (+100€)."
      },
      {
        "movimientos": [
          { "dinero": 400.0, "categoria_pnl": "Subvenciones" }
        ],
        "reputacion": 5,
        "feedback": "Inviertes unas horas en el trámite y consigues la ayuda íntegra (+400€)."
      }
    ]
  },
  {
    "id": 8,
    "pregunta": "Descubres que tu producto estrella tiene un margen de beneficio microscópico; apenas ganas unos céntimos al venderlo.",
    "opciones": [
      "Lo sigues vendiendo igual por miedo a que los clientes se enfaden.",
      "Lo subes de precio un 15% explicándole el motivo de calidad a los clientes.",
      "Lo eliminas radicalmente del catálogo de la noche a la mañana."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 0,
        "feedback": "Trabajas muchísimo para no ganar absolutamente nada (0€ extra)."
      },
      {
        "movimientos": [
          { "dinero": 131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 2,
        "feedback": "Pierdes a los clientes que solo buscan precio, pero ganas rentabilidad (+131.65€)."
      },
      {
        "movimientos": [
          { "dinero": -87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Tus clientes se van a la competencia al no encontrar lo que buscan (-87.77€)."
      }
    ]
  },
  {
    "id": 9,
    "pregunta": "Un influencer local te amenaza con dejarte una mala reseña si no le das tus servicios gratis.",
    "opciones": [
      "Cedes al chantaje para evitar problemas.",
      "Le insultas públicamente en las redes sociales de tu negocio.",
      "Le rechazas amablemente, documentas la charla y sigues con tu día."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -150.0, "categoria_pnl": "Publicidad" }
        ],
        "reputacion": -2,
        "feedback": "Regalas tu trabajo y te conviertes en un blanco fácil para aprovechados (-150€)."
      },
      {
        "movimientos": [
          { "dinero": -175.54, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -10,
        "feedback": "Entras en una guerra online que espanta a clientes reales (-175.54€)."
      },
      {
        "movimientos": [],
        "reputacion": 5,
        "feedback": "Te mantienes firme, proteges tu caja y evitas dramas (0€)."
      }
    ]
  },
  {
    "id": 10,
    "pregunta": "Tienes un excedente de caja inesperado este mes de 500€.",
    "opciones": [
      "Te lo gastas en una buena cena para celebrar que eres tu propio jefe.",
      "Lo dejas en la cuenta bancaria del negocio como fondo de emergencia.",
      "Compras mobiliario nuevo que realmente no te hace falta ahora mismo."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -500.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": 0,
        "feedback": "Descapitalizas la empresa retirando fondos innecesariamente (-500€ de tu cuenta)."
      },
      {
        "movimientos": [],
        "reputacion": 2,
        "feedback": "Ganas estabilidad. Cuando llegue un imprevisto, estarás preparado (0€)."
      },
      {
        "movimientos": [
          { "dinero": -500.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": 0,
        "feedback": "Inmovilizas liquidez en un activo que no te genera ventas inmediatas (-500€)."
      }
    ]
  },
  {
    "id": 11,
    "pregunta": "El datáfono (TPV) para cobrar con tarjeta deja de funcionar de repente un sábado por la mañana.",
    "opciones": [
      "Pones un cartel de 'Solo Efectivo' y no haces nada más.",
      "Gritas y golpeas la máquina por la frustración.",
      "Activas el cobro por Bizum temporalmente mientras llamas al soporte técnico."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Hoy en día mucha gente no lleva efectivo; pierdes ventas a raudales (-131.65€)."
      },
      {
        "movimientos": [
          { "dinero": -200.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -5,
        "feedback": "Rompes la máquina y el banco te cobra la penalización por rotura (-200€)."
      },
      {
        "movimientos": [],
        "reputacion": 3,
        "feedback": "Salvas casi todas las ventas ofreciendo una alternativa rápida (0€)."
      }
    ]
  },
  {
    "id": 12,
    "pregunta": "Un cortocircuito en el cuadro eléctrico provoca un pequeño incendio de madrugada. Afecta al mobiliario y a equipos vitales.",
    "opciones": [
      "Tratas de arreglar todo por tu cuenta con amigos y compras material de segunda mano sin factura.",
      "Llamas inmediatamente a la aseguradora para activar tu póliza de comercio y enviar a los peritos.",
      "Pides un préstamo personal rápido de alto riesgo para contratar a la primera empresa de reformas."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -3000.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -5,
        "feedback": "La reparación queda mal, pierdes ventas y el coste lo asumes íntegro (-3.000€)."
      },
      {
        "movimientos": [
          { "dinero": -200.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": 5,
        "feedback": "El seguro responde. Solo asumes la franquicia y reabres rápido bajo normativa (-200€)."
      },
      {
        "movimientos": [
          { "dinero": -2500.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": 0,
        "feedback": "Solucionas el problema, pero el coste total te ahoga financieramente (-2.500€)."
      }
    ]
  },
  {
    "id": 13,
    "pregunta": "Una organización benéfica local te pide una colaboración para un sorteo solidario del barrio.",
    "opciones": [
      "Donas amablemente un producto o bono a cambio de que pongan tu logo en el cartel.",
      "Te niegas. Son unos caraduras que no aportan nada.",
      "Das 300€ en efectivo de la caja del negocio."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 8,
        "feedback": "Haces networking local y atraes a nuevos vecinos que valoran tu gesto (+87.77€)."
      },
      {
        "movimientos": [
          { "dinero": -87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -10,
        "feedback": "El boca a boca en el barrio te perjudica por tu mala actitud (-87.77€)."
      },
      {
        "movimientos": [
          { "dinero": -300.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": 5,
        "feedback": "Haces una buena obra, pero pierdes liquidez que el negocio necesita operativamente (-300€)."
      }
    ]
  },
  {
    "id": 14,
    "pregunta": "Abre un competidor justo enfrente vendiendo lo mismo pero mucho más barato.",
    "opciones": [
      "Entras en pánico y bajas todos tus precios al mínimo.",
      "Hablas mal de ellos a todo el que entra por la puerta.",
      "Te centras en dar un mejor servicio al cliente y mantener tu calidad."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -175.54, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 0,
        "feedback": "Destruyes tus márgenes y entras en una guerra de precios que no puedes ganar (-175.54€)."
      },
      {
        "movimientos": [
          { "dinero": -87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -8,
        "feedback": "Das imagen de envidioso y poco profesional; los clientes huyen (-87.77€)."
      },
      {
        "movimientos": [
          { "dinero": 43.88, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Algunos se van por precio, pero los buenos clientes se quedan por tu valor (+43.88€)."
      }
    ]
  },
  {
    "id": 15,
    "pregunta": "Te das cuenta de que pasas 4 horas a la semana haciendo papeleo que odias y no entiendes del todo.",
    "opciones": [
      "Sigues haciéndolo tú para 'ahorrar', cometiendo pequeños errores en los impuestos.",
      "Contratas a una gestoría online por 50€ al mes para que lo automatice todo.",
      "Dejas de hacer el papeleo y lo acumulas en una caja."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -150.0, "categoria_pnl": "Impuestos" }
        ],
        "reputacion": -2,
        "feedback": "Hacienda te penaliza por errores formales frecuentes en tus modelos (-150€)."
      },
      {
        "movimientos": [
          { "dinero": -50.0, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 3,
        "feedback": "Inviertes 50€ en Asesoría, pero ganas horas para generar más ventas netas."
      },
      {
        "movimientos": [
          { "dinero": -4000.0, "categoria_pnl": "Impuestos" }
        ],
        "reputacion": -10,
        "feedback": "El caos administrativo te lleva a inspecciones y multas severas (-4000€)."
      }
    ]
  },
  {
    "id": 16,
    "pregunta": "Tienes un pico inesperado de muchísimo trabajo durante tres días seguidos.",
    "opciones": [
      "Trabajas horas extra, sacas el trabajo y analizas si es una tendencia real o solo suerte.",
      "Contratas inmediatamente a un empleado fijo con contrato indefinido.",
      "Cierras antes de tiempo porque estás muy cansado."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 175.54, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Aprovechas el pico para hacer caja sin comprometer tus costes futuros (+175.54€)."
      },
      {
        "movimientos": [
          { "dinero": -500.0, "categoria_pnl": "Personal y SS" }
        ],
        "reputacion": 0,
        "feedback": "El trabajo baja la semana siguiente y ahora tienes un coste laboral insostenible (-500€)."
      },
      {
        "movimientos": [
          { "dinero": -131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Dejas ir a clientes dispuestos a pagarte en tu mejor momento (-131.65€)."
      }
    ]
  },
  {
    "id": 17,
    "pregunta": "Un inspector de Trabajo se presenta por sorpresa en tu negocio.",
    "opciones": [
      "Intentas no dejarle pasar poniendo excusas.",
      "Le recibes con calma; tu asesoría se encargó de tener toda la documentación en regla.",
      "Le dejas pasar, sabiendo que no tienes el seguro obligatorio al día."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -500.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -10,
        "feedback": "Obstruir una inspección conlleva una sanción automática (-500€)."
      },
      {
        "movimientos": [],
        "reputacion": 5,
        "feedback": "Todo está correcto. Trámite superado gracias a ser precavido (0€)."
      },
      {
        "movimientos": [
          { "dinero": -350.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -5,
        "feedback": "Te cae una sanción administrativa por incumplimiento de normativas básicas (-350€)."
      }
    ]
  },
  {
    "id": 18,
    "pregunta": "Un gran cliente (una empresa local) te pide un pedido enorme, pero exige un descuento del 40%.",
    "opciones": [
      "Aceptas rápido emocionado por el volumen de la venta.",
      "Rechazas indignado sin dar opciones.",
      "Haces números. Si al 40% pierdes dinero, ofreces un 15% como contraoferta firme."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -2,
        "feedback": "Vendes mucho pero a pérdidas. El desgaste hace que te cueste dinero trabajar (-131.65€)."
      },
      {
        "movimientos": [],
        "reputacion": -2,
        "feedback": "Pierdes una negociación que podría haber sido buena (0€)."
      },
      {
        "movimientos": [
          { "dinero": 175.54, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "El cliente acepta el 15%. Mantienes rentabilidad y facturas un gran volumen (+175.54€)."
      }
    ]
  },
  {
    "id": 19,
    "pregunta": "Tu conexión a internet y el teléfono fijo fallan durante 48 horas seguidas.",
    "opciones": [
      "Compartes datos desde tu móvil personal de forma temporal para que la empresa siga operando.",
      "Te vas a casa y pones un cartel de 'Cerrado por avería de WiFi'.",
      "Contratas de urgencia a una segunda operadora de internet con permanencia."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 20.0, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 3,
        "feedback": "Eres resolutivo y consigues que el impacto en ventas sea mínimo (20.00€)."
      },
      {
        "movimientos": [
          { "dinero": -87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Pierdes dos días enteros de facturación por un problema solucionable con el móvil (-87.77€)."
      },
      {
        "movimientos": [
          { "dinero": -150.0, "categoria_pnl": "Servicios" }
        ],
        "reputacion": -2,
        "feedback": "Duplicas tus gastos fijos de telecomunicaciones atándote a un contrato anual (-150€)."
      }
    ]
  },
  {
    "id": 20,
    "pregunta": "Un cliente fiel te comenta, con buena intención, que la fachada de tu negocio da un aspecto descuidado.",
    "opciones": [
      "Te lo tomas como un ataque personal. Qué sabrá él.",
      "Pides un presupuesto de 800€ para un cartel de diseño en 3D luminoso.",
      "Compras pintura, limpias a fondo los cristales y mejoras la imagen con muy poco dinero."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -43.88, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -8,
        "feedback": "El cliente se siente ofendido, no vuelve y le dice a sus amigos que no vayan (-43.88€)."
      },
      {
        "movimientos": [
          { "dinero": -800.0, "categoria_pnl": "Publicidad" }
        ],
        "reputacion": 2,
        "feedback": "Haces una mejora brutal, pero gastas demasiada liquidez en estética en lugar de operativas (-400€)."
      },
      {
        "movimientos": [
          { "dinero": 87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Mejoras tu imagen de marca limpiando, atraes nuevos clientes y cuidas la caja (+87.77€)."
      }
    ]
  },
  {
    "id": 21,
    "pregunta": "Llegas por la mañana y encuentras la fachada de tu negocio llena de grafitis vandálicos.",
    "opciones": [
      "Llamas a tu seguro de comercio que incluye cobertura por actos vandálicos.",
      "Vas a la ferretería, compras disolventes especiales y pasas la mañana limpiando.",
      "Contratas a una empresa de limpieza de fachadas de urgencia."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 3,
        "feedback": "El seguro se encarga de todo sin coste adicional para ti (0€)."
      },
      {
        "movimientos": [
          { "dinero": -50.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": 0,
        "feedback": "Gastas dinero en materiales y pierdes tiempo de ventas (-50€)."
      },
      {
        "movimientos": [
          { "dinero": -300.0, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 2,
        "feedback": "Solucionas el problema rápido pero a un precio de urgencia muy elevado (-300€)."
      }
    ]
  },
  {
    "id": 22,
    "pregunta": "Una empresa local te contacta interesada en hacer un pedido enorme de tus productos/servicios para sus empleados.",
    "opciones": [
      "Les dices que el precio es el que hay y no haces descuentos.",
      "Les ofreces un descuento por volumen (B2B) si pagan una parte por adelantado.",
      "Les ofreces un detalle gratuito muy pequeño con el pedido."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": -2,
        "feedback": "La empresa busca a otro proveedor más flexible (0€ extra)."
      },
      {
        "movimientos": [
          { "dinero": 131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Aseguras una gran venta que mejora tu facturación mensual de golpe (+131.65€)."
      },
      {
        "movimientos": [
          { "dinero": 43.88, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 2,
        "feedback": "Aceptan el trato, pero no quedan tan fidelizados como con un descuento corporativo (+43.88€)."
      }
    ]
  },
  {
    "id": 23,
    "pregunta": "El ordenador principal donde llevas la caja y la contabilidad no enciende.",
    "opciones": [
      "Entras en pánico y compras el modelo más caro y rápido de la tienda de informática.",
      "Lo llevas a un técnico para una reparación de urgencia en 24 horas.",
      "Utilizas un portátil antiguo que tenías en casa mientras usas la garantía del estropeado."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -500.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": 0,
        "feedback": "Haces un gasto desproporcionado que afecta a tu liquidez (-500€)."
      },
      {
        "movimientos": [
          { "dinero": -150.0, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 2,
        "feedback": "Pagas el recargo de urgencia del técnico (-150€)."
      },
      {
        "movimientos": [],
        "reputacion": 3,
        "feedback": "Resuelves el problema con recursos propios y cero coste (0€)."
      }
    ]
  },
  {
    "id": 24,
    "pregunta": "Una revista local quiere hacerte una breve entrevista gratuita sobre tu emprendimiento.",
    "opciones": [
      "Aceptas y ofreces un código de descuento exclusivo para los lectores de la revista.",
      "Aceptas la entrevista y hablas solo de ti, sin estrategia de ventas.",
      "Rechazas la entrevista porque te da vergüenza salir en prensa."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Mides el retorno de la publicidad y atraes a muchos lectores a tu negocio (+131.65€)."
      },
      {
        "movimientos": [
          { "dinero": 43.88, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 2,
        "feedback": "Ganas algo de visibilidad, pero poca gente da el paso de ir a comprar (+43.88€)."
      },
      {
        "movimientos": [],
        "reputacion": 0,
        "feedback": "Dejas pasar una oportunidad de oro para hacer marketing gratuito (0€)."
      }
    ]
  },
  {
    "id": 25,
    "pregunta": "Recibes una carta de la Seguridad Social reclamando una deuda por un error informático de ellos.",
    "opciones": [
      "Metes la carta en un cajón y la ignoras porque sabes que tú pagaste bien.",
      "Llamas inmediatamente, presentas tu recibo bancario y pides la anulación.",
      "Pagas el recargo rápidamente por miedo a tener problemas con la administración."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -500.0, "categoria_pnl": "Personal y SS" }
        ],
        "reputacion": -5,
        "feedback": "Te embargan la cuenta por ignorar el aviso, sumando intereses y recargos (-500€)."
      },
      {
        "movimientos": [],
        "reputacion": 5,
        "feedback": "Inviertes una hora al teléfono pero evitas cualquier pago injusto (0€)."
      },
      {
        "movimientos": [
          { "dinero": -50.0, "categoria_pnl": "Personal y SS" }
        ],
        "reputacion": 0,
        "feedback": "Pierdes dinero asumiendo un error que no era tuyo (-50€)."
      }
    ]
  },
  {
    "id": 26,
    "pregunta": "El gimnasio de la calle de atrás tiene mucho tránsito de gente que encaja con tu cliente ideal.",
    "opciones": [
      "No haces nada, esperas que pasen por tu puerta por casualidad.",
      "Le pides permiso al dueño para dejar unos folletos en recepción.",
      "Creas una alianza: los socios del gimnasio tienen ventajas en tu negocio y viceversa."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 0,
        "feedback": "Tu volumen de clientes se mantiene igual (0€ extra)."
      },
      {
        "movimientos": [
          { "dinero": 43.88, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 2,
        "feedback": "Algunos curiosos cogen el folleto y te visitan (+43.88€)."
      },
      {
        "movimientos": [
          { "dinero": 175.54, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Creas un flujo constante de clientes nuevos y fidelizados (+175.54€)."
      }
    ]
  },
  {
    "id": 27,
    "pregunta": "Te das cuenta de que necesitas formarte mejor en ventas y gestión de clientes.",
    "opciones": [
      "Te apuntas a un programa de formación subvencionado por la Cámara de Comercio.",
      "Compras un curso online grabado de precio asequible.",
      "Contratas a un coach de negocios premium que promete milagros."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 5,
        "feedback": "Adquieres conocimientos valiosos aprovechando las ayudas públicas (0€ gasto extra)."
      },
      {
        "movimientos": [
          { "dinero": -50.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": 3,
        "feedback": "Es una inversión modesta pero útil a largo plazo (-50€)."
      },
      {
        "movimientos": [
          { "dinero": -400.0, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 0,
        "feedback": "Haces un desembolso enorme que ahoga las cuentas de tu mes (-400€)."
      }
    ]
  },
  {
    "id": 28,
    "pregunta": "Se prevé una semana entera de lluvias intensas y sabes que la calle estará vacía.",
    "opciones": [
      "Te resignas a tener una mala semana de ventas.",
      "Lanzas una campaña online de 'Días de Lluvia' con ofertas especiales o envío a domicilio.",
      "Pones un cartel en la puerta ofreciendo refugio y café."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": -2,
        "feedback": "Las ventas caen estrepitosamente por la falta de tránsito (0€ extra)."
      },
      {
        "movimientos": [
          { "dinero": 131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Eres proactivo, mitigas la caída de visitas y salvas la semana (+131.65€)."
      },
      {
        "movimientos": [
          { "dinero": 43.88, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 3,
        "feedback": "Ganas algo de simpatía local, pero generas pocas ventas reales (+43.88€)."
      }
    ]
  },
  {
    "id": 29,
    "pregunta": "Revisando las cuentas, ves que la compañía de internet te ha cobrado dos veces la misma factura.",
    "opciones": [
      "Ordenas al banco devolver el recibo sin avisar a la compañía.",
      "Lo dejas pasar porque te da pereza pelearte con atención al cliente.",
      "Llamas y pones una reclamación formal hasta que te abonan la diferencia."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -400.0, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Te cortan la línea por impago, no puedes usar datáfonos y pierdes ventas masivas (-400€)."
      },
      {
        "movimientos": [
          { "dinero": -200.0, "categoria_pnl": "Servicios" }
        ],
        "reputacion": -2,
        "feedback": "Regalas tu dinero por falta de gestión administrativa (-200€)."
      },
      {
        "movimientos": [],
        "reputacion": 3,
        "feedback": "Defiendes tu tesorería y recuperas lo que es tuyo mediante los canales correctos (0€)."
      }
    ]
  },
  {
    "id": 30,
    "pregunta": "Un negocio de tu mismo sector situado a pocas calles acaba de cerrar permanentemente.",
    "opciones": [
      "Lanzas una campaña segmentada dando la bienvenida a los clientes huérfanos de esa zona.",
      "Pones un anuncio genérico en tus redes sociales.",
      "No haces nada, supones que ya vendrán solos."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 4,
        "feedback": "Captas rápidamente la cuota de mercado que ha quedado libre en el barrio (+131.65€)."
      },
      {
        "movimientos": [
          { "dinero": 43.88, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 1,
        "feedback": "Consigues atraer a unos pocos clientes perdidos que vieron tu post (+43.88€)."
      },
      {
        "movimientos": [],
        "reputacion": 0,
        "feedback": "La competencia más avispada se lleva a esos clientes (0€ extra)."
      }
    ]
  },
  {
    "id": 31,
    "pregunta": "Entra en vigor una nueva normativa que prohíbe el uso de tus bolsas y envases actuales por no ser ecológicos.",
    "opciones": [
      "Tiras todo tu stock a la basura y compras envases ecológicos premium.",
      "Te acoges a la moratoria legal de 6 meses para gastar tu stock actual antes de comprar los nuevos.",
      "Compras de inmediato bolsas de papel básicas para sustituirlas."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -500.0, "categoria_pnl": "Suministros" }
        ],
        "reputacion": 2,
        "feedback": "Haces un gasto innecesario y precipitado tirando material válido (-500€)."
      },
      {
        "movimientos": [],
        "reputacion": 5,
        "feedback": "Optimizas tus recursos usando la ley y la moratoria a tu favor (0€ impacto inmediato)."
      },
      {
        "movimientos": [
          { "dinero": -100.0, "categoria_pnl": "Suministros" }
        ],
        "reputacion": 2,
        "feedback": "Cumples la norma pronto, pero pierdes el dinero invertido en el stock antiguo (-100€)."
      }
    ]
  },
  {
    "id": 32,
    "pregunta": "El Ayuntamiento anuncia subvenciones directas para pymes locales que cumplan ciertos requisitos. Tú los cumples.",
    "opciones": [
      "No la solicitas porque piensas que eso nunca toca.",
      "La solicitas fuera de plazo y solo te dan un pequeño accésit.",
      "Preparas la documentación con tiempo y la presentas impecable el primer día."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 0,
        "feedback": "Pierdes una inyección de capital por pura falta de proactividad (0€)."
      },
      {
        "movimientos": [
          { "dinero": 150.0, "categoria_pnl": "Subvenciones" }
        ],
        "reputacion": 2,
        "feedback": "Consigues algo de ayuda, pero pierdes el grueso de la subvención por la tardanza (+150€)."
      },
      {
        "movimientos": [
          { "dinero": 400.0, "categoria_pnl": "Subvenciones" }
        ],
        "reputacion": 5,
        "feedback": "Obtienes la ayuda máxima para impulsar la liquidez de tu empresa (+400€)."
      }
    ]
  },
  {
    "id": 33,
    "pregunta": "Una herramienta clave para tu trabajo diario se rompe de repente.",
    "opciones": [
      "Buscas el ticket de compra y gestionas la sustitución gratuita mediante la garantía legal.",
      "Compras una de segunda mano por internet para salir del paso.",
      "Compras el modelo más moderno y caro de la tienda para que no vuelva a pasar."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 5,
        "feedback": "Eres organizado, encuentras la factura y no te cuesta un céntimo (0€)."
      },
      {
        "movimientos": [
          { "dinero": -80.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": 0,
        "feedback": "Gastas dinero extra y te arriesgas a que la máquina usada se vuelva a romper pronto (-80€)."
      },
      {
        "movimientos": [
          { "dinero": -400.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -2,
        "feedback": "Desequilibras tus gastos del mes por un impulso tecnológico (-400€)."
      }
    ]
  },
  {
    "id": 34,
    "pregunta": "Un cliente muy leal te trae a tres amigos que terminan consumiendo en tu negocio.",
    "opciones": [
      "Le das las gracias educadamente al cobrarles a todos.",
      "Lanzas en ese momento un programa de referidos: 'Por cada amigo que traigas, 10% para ambos'.",
      "Le haces un pequeño descuento del 5% solo a él en esa compra."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 2,
        "feedback": "Es de buena educación, pero no incentivas a que lo vuelva a hacer sistemáticamente (0€)."
      },
      {
        "movimientos": [
          { "dinero": 131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Creas un sistema escalable que convierte a tus clientes en embajadores (+131.65€)."
      },
      {
        "movimientos": [
          { "dinero": 43.88, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 3,
        "feedback": "Es un buen detalle puntual, pero no genera un efecto llamada duradero (+43.88€)."
      }
    ]
  },
  {
    "id": 35,
    "pregunta": "Una tubería general del edificio revienta inundando tu local, arruinando inventario y obligándote a cerrar una semana.",
    "opciones": [
      "Contratas obreros sin experiencia para hacerlo barato, pero la obra queda mal y se retrasa la apertura.",
      "Asumes tú los costes pagando a profesionales para abrir cuanto antes sin involucrar a terceros.",
      "Llamas a tu seguro al día y a los peritos; la aseguradora cubre la obra y el lucro cesante."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -3000.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -10,
        "feedback": "Lo barato sale caro. Pierdes clientes, material y sufres una inspección (-3.000€)."
      },
      {
        "movimientos": [
          { "dinero": -2500.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": 0,
        "feedback": "Eres profesional, pero sufres un varapalo financiero brutal por no usar los seguros (-2.500€)."
      },
      {
        "movimientos": [],
        "reputacion": 5,
        "feedback": "El siniestro está cubierto. Una buena póliza salva la vida de tu negocio (0€ en tesorería)."
      }
    ]
  },
  {
    "id": 36,
    "pregunta": "Empieza la temporada alta de turismo en tu ciudad.",
    "opciones": [
      "Te alías con guías turísticos y hoteles locales para que te recomienden a cambio de una pequeña comisión.",
      "Pones un cartel de 'Welcome' en la puerta y traduces la lista de precios.",
      "No haces nada diferente, sigues trabajando solo con tu clientela habitual."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 175.54, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Creas canales de venta indirectos que te traen clientes todos los días (+175.54€)."
      },
      {
        "movimientos": [
          { "dinero": 43.88, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 2,
        "feedback": "Facilitas la compra a los turistas que pasan justo por delante (+43.88€)."
      },
      {
        "movimientos": [],
        "reputacion": 0,
        "feedback": "Desaprovechas proactivamente el mayor pico de consumo de la temporada (0€ extra)."
      }
    ]
  },
  {
    "id": 37,
    "pregunta": "Durante un pico de trabajo, un cliente intenta pagar un producto con un billete falso de 50€.",
    "opciones": [
      "Lo aceptas rápido sin mirar porque hay cola en la caja.",
      "Lo pasas por el detector que compraste, lo rechazas amablemente y el cliente paga con tarjeta.",
      "Lo aceptas dudando, y al ir al banco te lo retienen y pierdes el dinero y el producto."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -50.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -2,
        "feedback": "Regalas tu producto y asumes la pérdida en tu cuadre de caja (-50€)."
      },
      {
        "movimientos": [],
        "reputacion": 5,
        "feedback": "Un protocolo de seguridad sencillo te salva de una estafa sin causar dramas (0€)."
      },
      {
        "movimientos": [
          { "dinero": -150.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -5,
        "feedback": "El banco te requisa el dinero. Has sido víctima de fraude por ineficiencia (-150€)."
      }
    ]
  },
  {
    "id": 38,
    "pregunta": "Alguien hace una reseña en vídeo de tu negocio en TikTok y se hace viral en la ciudad.",
    "opciones": [
      "Te alegras pero sigues trabajando como si nada.",
      "Le das 'Me gusta' al vídeo y dejas un comentario de agradecimiento.",
      "Creas un código promocional con el nombre del tiktoker para medir y captar a toda esa audiencia."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 0,
        "feedback": "Es un momento de fama efímero que no aprovechas para traducirlo en ventas (0€)."
      },
      {
        "movimientos": [
          { "dinero": 43.88, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 2,
        "feedback": "Quedas bien públicamente y atraes a algunos curiosos despistados (+43.88€)."
      },
      {
        "movimientos": [
          { "dinero": 175.54, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Capitalizas el tráfico viral transformando reproducciones en ventas reales y medidas (+175.54€)."
      }
    ]
  },
  {
    "id": 39,
    "pregunta": "Te toca pasar la revisión anual obligatoria de los extintores del local.",
    "opciones": [
      "Llamas a la empresa porque ya tenías agendado y pagado el plan anual de mantenimiento.",
      "Llamas corriendo a última hora a una empresa que te cobra recargo por urgencia.",
      "Se te olvida, recibes una inspección y te sancionan por no tener la revisión al día."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 5,
        "feedback": "Eres un gestor diligente. Cumples la ley sin afectar tu tesorería mensual (0€ impacto imprevisto)."
      },
      {
        "movimientos": [
          { "dinero": -60.0, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 0,
        "feedback": "La mala planificación te cuesta dinero extra de urgencia (-60€)."
      },
      {
        "movimientos": [
          { "dinero": -500.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -5,
        "feedback": "Infracción grave de las normativas de seguridad con su correspondiente multa (-500€)."
      }
    ]
  },
  {
    "id": 40,
    "pregunta": "Se acerca la campaña comercial más importante del año (Navidad, Black Friday, etc.).",
    "opciones": [
      "Pones la decoración de siempre y esperas que la gente compre.",
      "Creas 'packs de regalo' listos para llevar y subes tu ticket medio por cliente.",
      "No haces ninguna campaña, tú vendes lo mismo todo el año."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 43.88, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 2,
        "feedback": "Te contagias un poco del espíritu, pero no destacas sobre el resto (+43.88€)."
      },
      {
        "movimientos": [
          { "dinero": 131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Facilitas la vida al cliente y aumentas tu rentabilidad empaquetando productos (+131.65€)."
      },
      {
        "movimientos": [],
        "reputacion": -2,
        "feedback": "Pierdes cuota de mercado frente a competidores que sí son proactivos y visibles (0€)."
      }
    ]
  },
  {
    "id": 41,
    "pregunta": "Un cliente habitual te pide que le guardes un pedido grande, pero pasan los días y no viene a recogerlo ni te paga.",
    "opciones": [
      "Pierdes la oportunidad de vender el producto a otros porque 'tienes que ser fiel al cliente'.",
      "Te enfadas, lo bloqueas en el teléfono y tiras el producto a la basura por rabia.",
      "Le llamas dando un ultimátum amable de 24 horas y, si no responde, lo pones a la venta."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -150.0, "categoria_pnl": "Suministros" }
        ],
        "reputacion": -2,
        "feedback": "El producto se queda en el almacén o pierde valor de temporada (-150€)."
      },
      {
        "movimientos": [
          { "dinero": -300.0, "categoria_pnl": "Suministros" }
        ],
        "reputacion": -5,
        "feedback": "Pierdes al cliente para siempre y el dinero del producto (-300€)."
      },
      {
        "movimientos": [],
        "reputacion": 3,
        "feedback": "Eres profesional, salvas la venta con otro cliente y mantienes tus ingresos (0€)."
      }
    ]
  },
  {
    "id": 42,
    "pregunta": "Un comercial te ofrece un expositor llamativo para la zona de cajas con artículos de 'compra impulsiva'.",
    "opciones": [
      "Aceptas y colocas artículos baratos que todo el mundo coge al pagar.",
      "Lo pones, pero lo llenas de productos caros que nadie compra por impulso.",
      "Rechazas el expositor porque piensas que 'quita mucho espacio visual'."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 2,
        "feedback": "Aumentas el ticket medio de casi todos tus clientes de forma fácil (+131.65€)."
      },
      {
        "movimientos": [],
        "reputacion": 0,
        "feedback": "Ocupa espacio pero no genera ventas adicionales (0€ extra)."
      },
      {
        "movimientos": [],
        "reputacion": 0,
        "feedback": "Dejas pasar una de las mejores tácticas de venta del comercio minorista (0€ extra)."
      }
    ]
  },
  {
    "id": 43,
    "pregunta": "Al hacer el arqueo (contar el dinero) al final del día, descubres que faltan 20€ en la caja.",
    "opciones": [
      "Implementas un sistema de claves en el datáfono/caja para saber siempre quién cobra.",
      "Gritas a todos los empleados acusándoles de robo, creando un clima terrible.",
      "Lo repones de tu bolsillo en secreto para no generar tensión en el equipo."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 2,
        "feedback": "Asumes la pequeña pérdida, pero profesionalizas la empresa para que no vuelva a pasar (0€ a largo plazo)."
      },
      {
        "movimientos": [
          { "dinero": -131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Los empleados se desmotivan totalmente y la productividad se hunde (-131.65€ indirectos)."
      },
      {
        "movimientos": [
          { "dinero": -50.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -2,
        "feedback": "El problema volverá a pasar porque no has puesto ningún control (-50€)."
      }
    ]
  },
  {
    "id": 44,
    "pregunta": "Hay un evento masivo (un evento deportivo, un concierto o una cabalgata) en la ciudad este fin de semana.",
    "opciones": [
      "Cierras el negocio porque crees que habrá demasiado lío en la calle.",
      "Pones una pizarra aludiendo al evento, pero ofreces los mismos productos de siempre.",
      "Creas un 'Menú/Pack Evento' temático y rápido para los que van o vuelven con prisas."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": -2,
        "feedback": "Pierdes el fin de semana de más tránsito del año (0€ extra)."
      },
      {
        "movimientos": [
          { "dinero": 43.88, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 2,
        "feedback": "Ganas un poco de simpatía, pero no agilizas las ventas drásticamente (+43.88€)."
      },
      {
        "movimientos": [
          { "dinero": 175.54, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Adaptas tu oferta al flujo de gente y multiplicas tus ventas rápidas (+175.54€)."
      }
    ]
  },
  {
    "id": 45,
    "pregunta": "Te llega una notificación del banco avisando de que tu cuenta se ha quedado al descubierto (saldo negativo) por unos pagos imprevistos.",
    "opciones": [
      "Reclamas, negocias y cubres el descubierto ese mismo día transfiriendo dinero de tu colchón.",
      "Lo dejas en negativo un par de días hasta que cobre algún cliente.",
      "Ignoras el aviso pensando que es un correo de spam o publicidad del banco."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 2,
        "feedback": "Evitas las altísimas comisiones de descubierto reaccionando de forma ágil (0€)."
      },
      {
        "movimientos": [
          { "dinero": -60.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -2,
        "feedback": "El banco te aplica la comisión por posiciones deudoras inmediatamente (-60€)."
      },
      {
        "movimientos": [
          { "dinero": -150.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -5,
        "feedback": "Los intereses de demora y las comisiones se acumulan peligrosamente (-150€)."
      }
    ]
  },
  {
    "id": 46,
    "pregunta": "Un cliente llega buscando un producto o servicio muy específico que tú no ofreces en tu negocio.",
    "opciones": [
      "Le dices 'no tenemos eso aquí' y sigues mirando el móvil.",
      "Le recomiendas un negocio vecino que sí lo tiene.",
      "Le ofreces una alternativa tuya, explicándole los beneficios, y consigues cerrar la venta."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": -2,
        "feedback": "El cliente se va y no aporta nada a tu negocio (0€ extra)."
      },
      {
        "movimientos": [],
        "reputacion": 3,
        "feedback": "Haces un favor al vecino, que a la larga te devolverá (0€ directo, pero ganas red)."
      },
      {
        "movimientos": [
          { "dinero": 131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Conviertes un 'no' en una venta gracias a tus habilidades comerciales (+131.65€)."
      }
    ]
  },
  {
    "id": 47,
    "pregunta": "La puerta del baño de clientes (o del probador) se ha roto y no cierra bien.",
    "opciones": [
      "Pones un cartel de 'Averiado' y lo dejas así durante semanas para ahorrar.",
      "Llamas al seguro o a un técnico para que lo arregle esa misma tarde.",
      "Intentas arreglarla tú con cinta y apaños rápidos, y un cliente se queda encerrado."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -43.88, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Ofreces una imagen pésima y los clientes lo comentan negativamente (-43.88€)."
      },
      {
        "movimientos": [],
        "reputacion": 3,
        "feedback": "Usas bien los recursos de mantenimiento y el negocio sigue perfecto (0€)."
      },
      {
        "movimientos": [
          { "dinero": -150.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -8,
        "feedback": "Tienes que compensar al cliente enfadado y pagar al cerrajero de urgencia (-150€)."
      }
    ]
  },
  {
    "id": 48,
    "pregunta": "Te proponen vender tus productos a través de una conocida aplicación local de reparto a domicilio que cobra un 30% de comisión.",
    "opciones": [
      "Aceptas sin calcular tus márgenes y trabajas el doble para ganar lo mismo.",
      "Aceptas, pero ajustando los precios en la app para proteger tu rentabilidad tras la comisión.",
      "Te niegas porque las aplicaciones te parecen una estafa moderna."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 2,
        "feedback": "Vendes más, pero te cuesta dinero porque la comisión se come tu beneficio neto (0€ extras)."
      },
      {
        "movimientos": [
          { "dinero": 175.54, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Abres un nuevo canal de ventas muy rentable porque los números cuadran (+175.54€)."
      },
      {
        "movimientos": [],
        "reputacion": -2,
        "feedback": "Renuncias a adaptarte a los nuevos hábitos de consumo de la gente (0€ extra)."
      }
    ]
  },
  {
    "id": 49,
    "pregunta": "Descargas cajas de tu proveedor y te das cuenta de que la mercancía viene rota, pero ya has firmado el albarán al repartidor.",
    "opciones": [
      "Llamas inmediatamente al proveedor, envías fotos y te acoges a las 24h de reclamación comercial.",
      "La pones a la venta rebajada para intentar recuperar al menos algo de dinero.",
      "La tiras a la basura y asumes la pérdida total porque ya firmaste el papel."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 3,
        "feedback": "Conoces tus derechos: el proveedor te repone la mercancía sin coste (0€)."
      },
      {
        "movimientos": [
          { "dinero": -87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Vendes productos defectuosos, dañando tu margen y tu reputación (-87.77€)."
      },
      {
        "movimientos": [
          { "dinero": -200.0, "categoria_pnl": "Suministros" }
        ],
        "reputacion": -2,
        "feedback": "Desperdicias dinero por no conocer cómo funcionan los seguros de transporte (-200€)."
      }
    ]
  },
  {
    "id": 50,
    "pregunta": "Un inspector del Ayuntamiento se presenta exigiendo ver tu licencia de actividad actualizada tras la última pequeña reforma que hiciste.",
    "opciones": [
      "Intentas ofrecerle dinero en efectivo para que 'haga la vista gorda'.",
      "Sacas tu carpeta legal y le muestras que tu gestoría lo presentó todo en plazo y forma.",
      "Reconoces que se te olvidó presentar los papeles, pero pasas de su aviso y no haces nada."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -3000.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -10,
        "feedback": "(Fallo muy grave) Sobornar es delito. Sanción administrativa máxima y posible cierre (-3.000€)."
      },
      {
        "movimientos": [],
        "reputacion": 5,
        "feedback": "Eres un profesional que tiene su administración al día. El inspector se marcha satisfecho (0€)."
      },
      {
        "movimientos": [
          { "dinero": -2000.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -8,
        "feedback": "La inspección deriva en un expediente sancionador con agravante por ignorar el requerimiento (-2.000€)."
      }
    ]
  },
  {
    "id": 51,
    "pregunta": "Te das cuenta de que tu competencia cobra 15€ por un servicio 'extra' que tú llevas tiempo regalando con tus ventas.",
    "opciones": [
      "Lo sigues regalando por miedo a que los clientes se enfaden.",
      "Lo empiezas a cobrar de golpe y sin avisar a los clientes habituales.",
      "Creas un 'Paquete Premium' que lo incluye cobrándolo, y ofreces una opción básica gratuita."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 0,
        "feedback": "Sigues infravalorando tu tiempo y perdiendo una vía clara de ingresos (0€ extra)."
      },
      {
        "movimientos": [
          { "dinero": -87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -8,
        "feedback": "Los clientes habituales se sienten traicionados y dejan malas reseñas (-87.77€)."
      },
      {
        "movimientos": [
          { "dinero": 131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Aumentas tu ticket medio inteligentemente dando opciones justas al cliente (+131.65€)."
      }
    ]
  },
  {
    "id": 52,
    "pregunta": "Te olvidas de pedir facturas de varios gastos de la empresa y solo tienes los tickets de la tarjeta sin tus datos fiscales.",
    "opciones": [
      "Te inventas unas facturas en un documento falso para que cuadre el IGIC.",
      "Contactas con los proveedores rápidamente para que te las reenvíen con tus datos.",
      "Le pasas los tickets al gestor así, aunque no se pueda deducir el IGIC."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -500.0, "categoria_pnl": "Impuestos" }
        ],
        "reputacion": -10,
        "feedback": "El fraude documental conlleva multas severísimas por parte de la Agencia Tributaria (-500€)."
      },
      {
        "movimientos": [],
        "reputacion": 3,
        "feedback": "Haces los deberes administrativos y salvas tu liquidación trimestral (0€)."
      },
      {
        "movimientos": [
          { "dinero": -300.0, "categoria_pnl": "Impuestos" }
        ],
        "reputacion": -2,
        "feedback": "Pierdes dinero en impuestos que te correspondía deducirte legalmente (-300€)."
      }
    ]
  },
  {
    "id": 53,
    "pregunta": "Notas que mucha gente entra, compra una vez, pero rara vez vuelve a tu negocio.",
    "opciones": [
      "Piensas que es normal y no haces nada.",
      "Empiezas a pedir correos a mano, pero luego nunca les envías nada.",
      "Lanzas una tarjeta de fidelidad: 'Sella 9 veces y tu 10ª compra es gratis'."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": -2,
        "feedback": "Pierdes la oportunidad de retener clientes, que es más barato que captar nuevos (0€ extra)."
      },
      {
        "movimientos": [
          { "dinero": 43.88, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 0,
        "feedback": "Recopilas datos inútiles sin una estrategia detrás (+43.88€ mínimos)."
      },
      {
        "movimientos": [
          { "dinero": 175.54, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Aumentas drásticamente la repetición de compra de tus clientes (+175.54€)."
      }
    ]
  },
  {
    "id": 54,
    "pregunta": "Un empleado te pide un anticipo de su nómina porque tiene un problema económico urgente en casa.",
    "opciones": [
      "Se lo das en mano, en efectivo, sin dejar ningún documento firmado por compasión.",
      "Le haces firmar un recibo de anticipo legal para descontarlo correctamente en su próxima nómina.",
      "Le dices agresivamente que eso no es problema de la empresa."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -200.0, "categoria_pnl": "Personal y SS" }
        ],
        "reputacion": -2,
        "feedback": "El dinero no queda registrado contablemente y no puedes justificarlo; lo pierdes (-200€)."
      },
      {
        "movimientos": [],
        "reputacion": 5,
        "feedback": "Ayudas al trabajador de forma segura y legal, ganando su lealtad (0€)."
      },
      {
        "movimientos": [
          { "dinero": -87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "El empleado se desmotiva enormemente, rinde fatal y atiende mal a los clientes (-87.77€ indirectos)."
      }
    ]
  },
  {
    "id": 55,
    "pregunta": "Llega el 'Blue Monday' (considerado el día más triste del año) y sabes que la calle estará de bajón.",
    "opciones": [
      "Lanzas una campaña alegre en redes y tu escaparate, ofreciendo algo divertido para levantar el ánimo.",
      "Te quejas con los otros comerciantes de lo mal que están las ventas.",
      "Pones música un poco más alta en el local y ofreces un caramelo al cobrar."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Creas un ambiente que contrasta con el día, atrayendo a la gente (+131.65€)."
      },
      {
        "movimientos": [],
        "reputacion": -2,
        "feedback": "Tu negatividad no suma clientes a la caja (0€ extra)."
      },
      {
        "movimientos": [
          { "dinero": 43.88, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 2,
        "feedback": "Es un detalle agradable, pero no genera tráfico suficiente desde el exterior (+43.88€)."
      }
    ]
  },
  {
    "id": 56,
    "pregunta": "Entra un grupo de jóvenes haciendo mucho ruido, mirando hacia todos lados y comportándose de forma muy sospechosa.",
    "opciones": [
      "Te pones nervioso, miras el móvil y dejas que se muevan a sus anchas.",
      "Les echas a gritos acusándoles preventivamente, asustando a los clientes buenos.",
      "Te acercas proactivamente, saludas con una sonrisa y ofreces ayuda directa sin apartarte de ellos."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -150.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -2,
        "feedback": "Te hurtan varios productos valiosos mientras estabas distraído (-150€)."
      },
      {
        "movimientos": [
          { "dinero": -43.88, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -8,
        "feedback": "Quedas como alguien agresivo y los verdaderos clientes huyen asustados (-43.88€)."
      },
      {
        "movimientos": [],
        "reputacion": 4,
        "feedback": "Disuades cualquier intento de hurto mediante la 'atención invasiva amable' (0€, previenes el robo)."
      }
    ]
  },
  {
    "id": 57,
    "pregunta": "Un cliente acaba de decirte que se lleva el producto o servicio más barato de todo tu catálogo.",
    "opciones": [
      "Le ofreces un complemento útil que cuesta poco, explicándole cómo mejorará su compra (Venta cruzada).",
      "Le miras con decepción por ser 'tacaño' y le cobras de mala gana.",
      "Le cobras rápidamente sin decirle apenas una palabra para atender al siguiente."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Haces 'Cross-Selling'. Aumentas el valor de la compra y el cliente se va más satisfecho (+131.65€)."
      },
      {
        "movimientos": [
          { "dinero": -87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "El cliente se siente juzgado y no volverá a pisar tu negocio (-87.77€ futuros)."
      },
      {
        "movimientos": [],
        "reputacion": -2,
        "feedback": "Consigues la venta básica, pero dejas dinero encima de la mesa (0€ extra)."
      }
    ]
  },
  {
    "id": 58,
    "pregunta": "El vehículo de tu empresa, tu máquina principal o tu aire acondicionado empieza a hacer un ruido metálico extraño.",
    "opciones": [
      "Le subes el volumen a la radio (o lo ignoras) para no escucharlo, porque 'ahora no tienes tiempo'.",
      "Sigues usándolo a diario esperando a que deje de funcionar del todo.",
      "Paras un momento y lo llevas al técnico inmediatamente para una revisión preventiva."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -400.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": 0,
        "feedback": "El motor revienta a los pocos días, obligándote a comprar equipo nuevo (-400€)."
      },
      {
        "movimientos": [
          { "dinero": -300.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -2,
        "feedback": "Te deja tirado en mitad de un pedido y pagas reparaciones urgentes y grúa (-300€)."
      },
      {
        "movimientos": [],
        "reputacion": 3,
        "feedback": "Era una pieza suelta barata. Previenes un desastre y alargas la vida de tu equipo (0€)."
      }
    ]
  },
  {
    "id": 59,
    "pregunta": "El instituto del barrio te invita a dar una charla de 20 minutos a los estudiantes sobre cómo es emprender.",
    "opciones": [
      "Vas de mala gana, no preparas nada y hablas mal de los impuestos.",
      "Pones una excusa y no vas porque crees que es una pérdida de tiempo.",
      "Preparas una charla muy inspiradora y al final ofreces un descuento a las familias del instituto."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": -8,
        "feedback": "Quedas mal ante futuras generaciones y profesores de tu zona (0€ impacto, pero pésima fama)."
      },
      {
        "movimientos": [],
        "reputacion": -2,
        "feedback": "Desaprovechas una oportunidad gratuita de hacer relaciones públicas locales (0€ extra)."
      },
      {
        "movimientos": [
          { "dinero": 175.54, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 8,
        "feedback": "Haces marketing de guerrilla: los jóvenes se lo cuentan a sus padres y consigues clientes (+175.54€)."
      }
    ]
  },
  {
    "id": 60,
    "pregunta": "Recibes un correo urgente con el logo de tu banco, diciendo que tu cuenta está bloqueada y debes hacer clic en un enlace.",
    "opciones": [
      "No haces clic. Llamas a tu gestor del banco usando el número oficial y descubres que es un fraude (Phishing).",
      "Te asustas, haces clic en el enlace desde el móvil e introduces tus contraseñas.",
      "Reenvías el enlace al ordenador de la tienda para abrirlo allí tranquilamente."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 3,
        "feedback": "Proteges la seguridad cibernética de tu empresa y no sufres ninguna pérdida (0€)."
      },
      {
        "movimientos": [
          { "dinero": -400.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -5,
        "feedback": "Te roban dinero de la cuenta bancaria de tu negocio en minutos por la estafa (-400€)."
      },
      {
        "movimientos": [
          { "dinero": -500.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -8,
        "feedback": "Infectas el sistema de caja con malware que roba datos de tus clientes (-500€)."
      }
    ]
  },
  {
    "id": 61,
    "pregunta": "Notas que uno de tus empleados (o tú mismo si trabajas solo) está muy desmotivado y rinde por debajo de lo normal.",
    "opciones": [
      "Gritas y exiges más esfuerzo amenazando con el despido.",
      "Te sientas a hablar, escuchas qué ocurre y ajustas las tareas para mejorar el clima.",
      "Lo ignoras pensando que ya se le pasará."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -300.0, "categoria_pnl": "Personal y SS" }
        ],
        "reputacion": -8,
        "feedback": "El estrés empeora todo, el empleado se da de baja por ansiedad (-300€)."
      },
      {
        "movimientos": [],
        "reputacion": 5,
        "feedback": "Recuperas la productividad y el buen ambiente sin gastar dinero (0€)."
      },
      {
        "movimientos": [
          { "dinero": -87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "La mala actitud se contagia a los clientes, que dejan de comprar (-87.77€)."
      }
    ]
  },
  {
    "id": 62,
    "pregunta": "Tu proveedor te entrega un pedido, pero te das cuenta de que ha incluido productos de menor calidad cobrándolos a precio normal.",
    "opciones": [
      "Llamas inmediatamente, exiges el cambio o el reembolso por la diferencia.",
      "Te los quedas y los vendes al mismo precio esperando que nadie se dé cuenta.",
      "Le insultas por teléfono y rompes la relación comercial de golpe."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 4,
        "feedback": "Haces valer tus derechos comerciales y recuperas tu dinero (0€)."
      },
      {
        "movimientos": [
          { "dinero": -131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -10,
        "feedback": "Los clientes se dan cuenta, reclaman y pierdes reputación (-131.65€)."
      },
      {
        "movimientos": [
          { "dinero": -200.0, "categoria_pnl": "Suministros" }
        ],
        "reputacion": -2,
        "feedback": "Te quedas sin mercancía clave para vender el resto de la semana (-200€)."
      }
    ]
  },
  {
    "id": 63,
    "pregunta": "Un cliente entra buscando un regalo, pero está muy indeciso y no sabe qué llevarse.",
    "opciones": [
      "Le dejas solo para que 'mire tranquilo' y te pones a hacer otras cosas.",
      "Le ofreces lo más barato que tienes para que se decida rápido.",
      "Le haces tres preguntas clave y le preparas un 'pack regalo' personalizado de mayor valor."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": -2,
        "feedback": "El cliente se agobia y se va sin comprar nada (0€ extra)."
      },
      {
        "movimientos": [
          { "dinero": 43.88, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 0,
        "feedback": "Haces una venta, pero con un margen de beneficio ridículo (+43.88€)."
      },
      {
        "movimientos": [
          { "dinero": 175.54, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Haces una labor de venta excelente y aumentas el ticket medio (+175.54€)."
      }
    ]
  },
  {
    "id": 64,
    "pregunta": "Descubres una pequeña fuga de agua en el baño del local. Apenas gotea, pero es constante.",
    "opciones": [
      "Llamas al fontanero hoy mismo para que la repare.",
      "Pones un cubo debajo y te olvidas del tema por un par de meses.",
      "Intentas arreglarla tú mismo con cinta adhesiva y un tutorial de internet."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 2,
        "feedback": "Pagas una reparación mínima preventiva (0€ a largo plazo)."
      },
      {
        "movimientos": [
          { "dinero": -100.0, "categoria_pnl": "Servicios" }
        ],
        "reputacion": -2,
        "feedback": "La factura del agua a final de mes te da un susto terrible (-100€)."
      },
      {
        "movimientos": [
          { "dinero": -250.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -5,
        "feedback": "Rompes la tubería principal y tienes que cerrar medio día por inundación (-250€)."
      }
    ]
  },
  {
    "id": 65,
    "pregunta": "Una radio local te ofrece una cuña publicitaria muy barata, pero tienes que enviarles el audio grabado hoy mismo.",
    "opciones": [
      "Contratas corriendo a un estudio carísimo para que lo grabe.",
      "Escribes un guion claro y lo grabas tú mismo con el móvil en una habitación silenciosa.",
      "Rechazas la oferta porque 'hoy no tienes tiempo'."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -150.0, "categoria_pnl": "Publicidad" }
        ],
        "reputacion": 2,
        "feedback": "Gastas más en el estudio exprés que en la propia publicidad (-150€)."
      },
      {
        "movimientos": [
          { "dinero": 131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Eres resolutivo. El anuncio suena natural y atrae clientes locales (+131.65€)."
      },
      {
        "movimientos": [],
        "reputacion": 0,
        "feedback": "Pierdes una gran oportunidad de marketing a bajo coste (0€)."
      }
    ]
  },
  {
    "id": 66,
    "pregunta": "Recibes un email oficial de un supuesto 'Registro de Marcas' exigiéndote 150€ urgentes para no perder el nombre de tu empresa.",
    "opciones": [
      "Pagas inmediatamente por miedo a perder tu marca comercial.",
      "Haces clic en el enlace del correo para rellenar tus datos bancarios.",
      "Lo consultas con tu asesor y descubres que es una estafa muy común."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -150.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -2,
        "feedback": "Das tu dinero a unos estafadores (-150€)."
      },
      {
        "movimientos": [
          { "dinero": -300.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -5,
        "feedback": "Te roban los datos de la tarjeta y te vacían parte de la cuenta (-300€)."
      },
      {
        "movimientos": [],
        "reputacion": 3,
        "feedback": "Eres cauto, consultas con expertos y proteges tu caja (0€)."
      }
    ]
  },
  {
    "id": 67,
    "pregunta": "Es un sábado muy concurrido y te das cuenta de que te has quedado sin monedas ni billetes pequeños para dar el cambio.",
    "opciones": [
      "Pones un cartel de 'Solo cobramos con importe exacto o tarjeta'.",
      "Cierras la puerta 10 minutos para ir al negocio de al lado o al banco a cambiar billetes.",
      "Dices a los clientes que se vayan a buscar cambio y luego vuelvan."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Pierdes a los clientes que solo llevan efectivo y necesitan cambio (-131.65€)."
      },
      {
        "movimientos": [],
        "reputacion": 2,
        "feedback": "Solucionas el problema rápidamente y sigues vendiendo el resto del día (0€)."
      },
      {
        "movimientos": [
          { "dinero": -87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -8,
        "feedback": "Ofreces un mal servicio al cliente; casi ninguno vuelve (-87.77€)."
      }
    ]
  },
  {
    "id": 68,
    "pregunta": "Un cliente habitual entra en tu negocio visiblemente triste y te cuenta que acaba de tener un problema familiar grave.",
    "opciones": [
      "Le ofreces un vaso de agua, le escuchas 5 minutos y le das ánimos.",
      "Le dices fríamente que 'aquí se viene a comprar, no a llorar'.",
      "Lo ignoras y te pones a ordenar estanterías."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 10,
        "feedback": "Ganas un cliente fiel para toda la vida por tu empatía y buen trato (+87.77€ a largo plazo)."
      },
      {
        "movimientos": [
          { "dinero": -131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -10,
        "feedback": "El cliente se ofende profundamente y habla muy mal de tu falta de humanidad (-131.65€)."
      },
      {
        "movimientos": [],
        "reputacion": -5,
        "feedback": "Pierdes la oportunidad de fidelizar a alguien en un momento clave (0€ extra)."
      }
    ]
  },
  {
    "id": 69,
    "pregunta": "Encuentras un nuevo proveedor que te vende exactamente el mismo producto que el actual, pero un 10% más barato.",
    "opciones": [
      "Te gastas todo el dinero que te vas a ahorrar en decoración innecesaria.",
      "Bajas tus precios de venta de inmediato para igualar la rebaja.",
      "Mantienes tus precios de venta y aprovechas para sanear tu margen de beneficio."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -100.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": 0,
        "feedback": "Pierdes la liquidez generada en cosas que no aportan valor (-100€)."
      },
      {
        "movimientos": [],
        "reputacion": 2,
        "feedback": "Trabajas lo mismo pero sigues teniendo poco colchón financiero (0€ extra de beneficio)."
      },
      {
        "movimientos": [
          { "dinero": 131.65, "categoria_pnl": "Suministros" }
        ],
        "reputacion": 2,
        "feedback": "Excelente decisión: tu empresa ahora gana más dinero (ahorro en compras equivalente a +131.65€ de margen)."
      }
    ]
  },
  {
    "id": 70,
    "pregunta": "Estás haciendo la compra para tu casa y piensas en meter el ticket a nombre de la empresa para desgravarte el IGIC, aunque es ilegal.",
    "opciones": [
      "Separas las compras personales de las de la empresa y cumples la ley.",
      "Metes el ticket en la contabilidad de la empresa para ahorrarte unos euros.",
      "Vas más allá y compras una tele para tu salón con la tarjeta del negocio."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 5,
        "feedback": "Duermes tranquilo. Una contabilidad limpia te evita sustos con la ley (0€)."
      },
      {
        "movimientos": [
          { "dinero": -300.0, "categoria_pnl": "Impuestos" }
        ],
        "reputacion": -5,
        "feedback": "Hacienda detecta el gasto no deducible y te pone una sanción (-300€)."
      },
      {
        "movimientos": [
          { "dinero": -500.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -10,
        "feedback": "Falta grave fiscal que te cuesta una multa importante y descapitaliza el negocio (-500€)."
      }
    ]
  },
  {
    "id": 71,
    "pregunta": "Ves que hay un tema (trend) haciéndose muy viral en redes sociales que encaja perfectamente con el tono de tu negocio.",
    "opciones": [
      "Haces un vídeo enfadado criticando a los que siguen las modas.",
      "Haces un vídeo o publicación rápida y simpática subiéndote a la tendencia ese mismo día.",
      "Ignoras las redes sociales, piensas que son solo para jóvenes."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -8,
        "feedback": "Das una imagen amargada y generas rechazo en tu comunidad (-87.77€)."
      },
      {
        "movimientos": [
          { "dinero": 175.54, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 8,
        "feedback": "El algoritmo te premia, el vídeo llega a muchísima gente local y consigues ventas (+175.54€)."
      },
      {
        "movimientos": [],
        "reputacion": -2,
        "feedback": "No pierdes, pero dejas de ganar visibilidad gratuita (0€ extra)."
      }
    ]
  },
  {
    "id": 72,
    "pregunta": "Una bombilla en la zona principal de clientes lleva días parpadeando de forma muy molesta.",
    "opciones": [
      "La dejas así hasta que se funda del todo para ahorrar.",
      "Intentas cambiar la instalación de los cables tú mismo sin cortar la luz.",
      "Compras una bombilla LED nueva y la cambias en cinco minutos."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -43.88, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -4,
        "feedback": "El parpadeo da dolor de cabeza y los clientes salen rápido de la tienda (-43.88€)."
      },
      {
        "movimientos": [
          { "dinero": -150.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -2,
        "feedback": "Provocas un cortocircuito que funde toda la línea de luces (-150€)."
      },
      {
        "movimientos": [],
        "reputacion": 2,
        "feedback": "Mantienes un entorno agradable y cómodo para la compra (0€ impacto)."
      }
    ]
  },
  {
    "id": 73,
    "pregunta": "Un músico callejero se instala justo en la puerta de tu local a tocar la guitarra.",
    "opciones": [
      "Le ofreces un café y le pides amablemente que toque música alegre para atraer buen rollo.",
      "Llamas a la policía inmediatamente para que le multen.",
      "Le gritas que se vaya porque te está 'robando clientes'."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 8,
        "feedback": "La música en vivo atrae a paseantes que se paran a mirar tu escaparate (+131.65€)."
      },
      {
        "movimientos": [],
        "reputacion": -5,
        "feedback": "Quedas como el 'villano' del barrio ante los vecinos que miran (0€, pero mala fama)."
      },
      {
        "movimientos": [
          { "dinero": -87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -10,
        "feedback": "Das un espectáculo lamentable y la gente de la calle te boicotea (-87.77€)."
      }
    ]
  },
  {
    "id": 74,
    "pregunta": "Por un error al hacer el pedido, te llegan 100 unidades de un producto perecedero o de moda en lugar de 10.",
    "opciones": [
      "Entras en pánico y tiras el exceso a la basura para que no ocupe lugar.",
      "Lanzas inmediatamente una campaña flash '2x1' o un 'Sorteo Especial' masivo.",
      "Lo escondes en el almacén esperando que algún día se venda solo."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -400.0, "categoria_pnl": "Suministros" }
        ],
        "reputacion": 0,
        "feedback": "Asumes una pérdida total de dinero por no intentar venderlo (-400€)."
      },
      {
        "movimientos": [
          { "dinero": 87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Eres rápido: recuperas la inversión, haces ruido en redes y atraes gente (+87.77€)."
      },
      {
        "movimientos": [
          { "dinero": -200.0, "categoria_pnl": "Suministros" }
        ],
        "reputacion": -2,
        "feedback": "El producto caduca o pasa de moda y tienes que tirarlo igual semanas después (-200€)."
      }
    ]
  },
  {
    "id": 75,
    "pregunta": "Un antiguo empleado (o un proveedor con el que rompiste relaciones) te pone una demanda judicial reclamándote una cantidad enorme de dinero de forma injusta.",
    "opciones": [
      "Ignoras las cartas del juzgado porque 'tú tienes razón y no has hecho nada malo'.",
      "Contratas al abogado más barato y rápido de internet, que se olvida de presentar los plazos.",
      "Acudes a tu gestoría legal o usas la protección jurídica de tu seguro para que lo frenen."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -3000.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -10,
        "feedback": "Al no presentarte, te condenan en rebeldía y te embargan la cuenta (-3.000€)."
      },
      {
        "movimientos": [
          { "dinero": -2500.0, "categoria_pnl": "Servicios" }
        ],
        "reputacion": -5,
        "feedback": "Una mala defensa legal te cuesta la condena y las altísimas costas del juicio (-2.500€)."
      },
      {
        "movimientos": [],
        "reputacion": 5,
        "feedback": "Los profesionales demuestran que es una demanda sin base y ganan el caso (0€ impacto)."
      }
    ]
  },
  {
    "id": 76,
    "pregunta": "Te das cuenta de que el competidor de la otra calle ha copiado exactamente tu decoración y tus ofertas.",
    "opciones": [
      "Vas a su local a gritarle delante de sus clientes.",
      "Te lo tomas como un halago y dedicas tu energía a innovar con algo nuevo.",
      "Copias sus precios a la baja para vengarte."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -10,
        "feedback": "Haces el ridículo, pierdes el tiempo y te arriesgas a una denuncia (-87.77€)."
      },
      {
        "movimientos": [
          { "dinero": 131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Mientras él copia lo viejo, tú sacas una novedad que atrae a todo el mundo (+131.65€)."
      },
      {
        "movimientos": [
          { "dinero": -131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -2,
        "feedback": "Entras en una guerra de precios destructiva donde ambos perdéis margen (-131.65€)."
      }
    ]
  },
  {
    "id": 77,
    "pregunta": "El programa informático que usas en tu negocio te pide hacer una 'Actualización Importante' que tardará 1 hora.",
    "opciones": [
      "Le das a 'Actualizar' justo después de cerrar el local por la tarde.",
      "Le das a 'Actualizar' el viernes a las 12:00 del mediodía con la tienda llena.",
      "Lo ignoras para siempre porque no quieres perder tiempo."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 2,
        "feedback": "El sistema se actualiza de forma segura sin interrumpir las ventas (0€)."
      },
      {
        "movimientos": [
          { "dinero": -175.54, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "El ordenador se bloquea una hora, no puedes cobrar y los clientes se marchan (-175.54€)."
      },
      {
        "movimientos": [
          { "dinero": -150.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -8,
        "feedback": "Meses después sufres un fallo de seguridad y pierdes toda la base de datos (-150€)."
      }
    ]
  },
  {
    "id": 78,
    "pregunta": "Te invitan a un encuentro de empresarios (networking) de tu ciudad a las 7:00 de la mañana.",
    "opciones": [
      "Vas, pero te quedas en un rincón quejándote de los madrugones.",
      "Apagas el despertador y te quedas durmiendo, tu cama es más importante.",
      "Vas con tus tarjetas de visita, hablas con otros negocios y buscas colaboraciones."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -43.88, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Das una impresión pésima y nadie quiere hacer negocios contigo (-43.88€)."
      },
      {
        "movimientos": [],
        "reputacion": 0,
        "feedback": "Descansas, pero pierdes oportunidades de hacer contactos clave (0€ extra)."
      },
      {
        "movimientos": [
          { "dinero": 175.54, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Consigues cerrar un acuerdo para proveer a otra empresa local (+175.54€)."
      }
    ]
  },
  {
    "id": 79,
    "pregunta": "Empieza el frío del invierno y el local está helado.",
    "opciones": [
      "Compras dos estufas eléctricas baratas que consumen una barbaridad y las dejas encendidas.",
      "Inviertes en aislar las puertas y enciendes el aire acondicionado en modo calor eficiente.",
      "No pones calefacción para ahorrar dinero."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -100.0, "categoria_pnl": "Servicios" }
        ],
        "reputacion": -2,
        "feedback": "La factura de la luz se dispara por usar aparatos ineficientes (-100€)."
      },
      {
        "movimientos": [],
        "reputacion": 4,
        "feedback": "El local es acogedor y el gasto energético se mantiene controlado y eficiente (0€)."
      },
      {
        "movimientos": [
          { "dinero": -131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Los clientes no entran porque hace más frío dentro que en la calle (-131.65€)."
      }
    ]
  },
  {
    "id": 80,
    "pregunta": "¡Buenas noticias! Has terminado de pagar el préstamo inicial del negocio y ahora tienes 200€ extra cada mes.",
    "opciones": [
      "Lo destinas a engordar tu fondo de emergencias o a una campaña de marketing mensual.",
      "Te subes el sueldo inmediatamente en 200€ para celebrar.",
      "Pides otro préstamo rápidamente para comprar un capricho personal."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 5,
        "feedback": "Reinviertes inteligentemente y el negocio se vuelve mucho más fuerte financieramente (0€)."
      },
      {
        "movimientos": [
          { "dinero": -200.0, "categoria_pnl": "Personal y SS" }
        ],
        "reputacion": 0,
        "feedback": "Descapitalizas el negocio rápido extrayendo dividendos. Si bajan las ventas, estarás en problemas (-200€ de liquidez)."
      },
      {
        "movimientos": [
          { "dinero": -300.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -5,
        "feedback": "Vuelves a ahogar a la empresa con deuda innecesaria que no genera ventas (-300€)."
      }
    ]
  },
  {
    "id": 81,
    "pregunta": "Un cliente te pide que le hagas el trabajo gratis a cambio de 'darle mucha visibilidad a tu negocio' entre sus amigos.",
    "opciones": [
      "Aceptas pensando que la publicidad boca a boca siempre es buena.",
      "Le insultas por menospreciar tu trabajo y le echas del local.",
      "Le explicas educadamente que no puedes trabajar gratis, pero le ofreces un trato justo."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -150.0, "categoria_pnl": "Publicidad" }
        ],
        "reputacion": -2,
        "feedback": "Regalas tu trabajo y los 'amigos' que trae también quieren cosas gratis (-150€)."
      },
      {
        "movimientos": [
          { "dinero": -43.88, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -8,
        "feedback": "Quedas como alguien agresivo y dañas tu reputación local (-43.88€)."
      },
      {
        "movimientos": [],
        "reputacion": 5,
        "feedback": "Haces valer tu profesionalidad. No pierdes dinero ni reputación (0€)."
      }
    ]
  },
  {
    "id": 82,
    "pregunta": "Se acercan las fiestas del pueblo y todos tus empleados (o tú mismo) quieren cogerse esos días libres.",
    "opciones": [
      "Deniegas todas las vacaciones de golpe generando un cabreo monumental.",
      "Organizas turnos rotativos equitativos con antelación para poder abrir.",
      "Cierras el negocio toda la semana porque 'es lo que hay'."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "El equipo trabaja de muy mal humor, trata mal al cliente y bajan las ventas (-131.65€)."
      },
      {
        "movimientos": [
          { "dinero": 131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Abres en los días clave, el equipo está contento y la caja se llena (+131.65€)."
      },
      {
        "movimientos": [
          { "dinero": -175.54, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -2,
        "feedback": "Pierdes la semana de mayores ventas del mes en tu localidad (-175.54€)."
      }
    ]
  },
  {
    "id": 83,
    "pregunta": "Tu proveedor se equivoca y te envía por error una caja con productos mucho más caros de los que pediste y pagaste.",
    "opciones": [
      "Le llamas de inmediato para avisarle del error y gestionar la devolución.",
      "Te los quedas callado y los vendes para sacar más margen de beneficio.",
      "Los vendes al precio de tus productos baratos para quitártelos de encima."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 8,
        "feedback": "El proveedor te agradece la honestidad, consolidas la relación y te hace un descuento futuro (0€ impacto inmediato)."
      },
      {
        "movimientos": [
          { "dinero": -300.0, "categoria_pnl": "Suministros" }
        ],
        "reputacion": -8,
        "feedback": "El proveedor hace inventario, se da cuenta y te exige el pago con recargo y enfado (-300€)."
      },
      {
        "movimientos": [
          { "dinero": -200.0, "categoria_pnl": "Suministros" }
        ],
        "reputacion": -5,
        "feedback": "Desaprovechas el producto, y luego el proveedor te lo reclama igual (-200€)."
      }
    ]
  },
  {
    "id": 84,
    "pregunta": "Descubres que un competidor está copiando las fotos de tus redes sociales y usándolas como si fueran suyas.",
    "opciones": [
      "Haces una publicación furiosa insultándole públicamente.",
      "Le envías un mensaje privado formal pidiendo que las retire y empiezas a poner marcas de agua (tu logo) en las fotos.",
      "Lo ignoras, total, internet es libre."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -8,
        "feedback": "Empiezas una guerra en redes que da mala imagen a ambos (-87.77€)."
      },
      {
        "movimientos": [],
        "reputacion": 5,
        "feedback": "Proteges tu marca con elegancia y evitas que se aprovechen de tu trabajo (0€)."
      },
      {
        "movimientos": [
          { "dinero": -131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -2,
        "feedback": "El competidor se lleva a tus clientes haciéndoles creer que ofrece lo mismo que tú (-131.65€)."
      }
    ]
  },
  {
    "id": 85,
    "pregunta": "El coste de una de tus materias primas clave (ej. café, papel, aceite) sube de golpe en el mercado internacional.",
    "opciones": [
      "Ajustas ligeramente tus precios e introduces un nuevo producto más rentable para compensar.",
      "Te tragas el coste y no tocas nada por miedo a la reacción de la gente.",
      "Compras una alternativa de bajísima calidad para mantener tu margen intacto."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 2,
        "feedback": "Haces buena ingeniería de negocio. Proteges tu margen y el cliente lo entiende (+87.77€)."
      },
      {
        "movimientos": [
          { "dinero": -131.65, "categoria_pnl": "Suministros" }
        ],
        "reputacion": 0,
        "feedback": "Tu rentabilidad se hunde drásticamente a final de mes por no repercutir el coste (-131.65€)."
      },
      {
        "movimientos": [
          { "dinero": -175.54, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -10,
        "feedback": "Los clientes notan el bajón radical de calidad y no vuelven a comprar (-175.54€)."
      }
    ]
  },
  {
    "id": 86,
    "pregunta": "Un empleado (o un buen cliente si trabajas solo) te da una idea brillante para mejorar un servicio de tu negocio.",
    "opciones": [
      "Robas la idea, la aplicas y dices que se te ocurrió a ti.",
      "Escuchas la idea, dices 'ya veremos' y no haces nada.",
      "La aplicas reconociendo su mérito y le das una pequeña recompensa o bono."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -8,
        "feedback": "La persona se siente traicionada, creas un enemigo y un clima tóxico (-87.77€ indirectos)."
      },
      {
        "movimientos": [],
        "reputacion": -2,
        "feedback": "Pierdes una oportunidad de oro para innovar gratis en tu negocio (0€ extra)."
      },
      {
        "movimientos": [
          { "dinero": 175.54, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 8,
        "feedback": "Fomentas la lealtad y la mejora continua. La idea funciona genial (+175.54€)."
      }
    ]
  },
  {
    "id": 87,
    "pregunta": "Hay un corte de luz en todo el barrio que dura unas tres horas en plena tarde.",
    "opciones": [
      "Sacas papel y boli, anotas las ventas, cobras en efectivo y enciendes velas si es seguro.",
      "Echas el cierre de inmediato y te vas a tu casa.",
      "Te pones a llamar a la compañía eléctrica gritando a la operadora."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Eres resolutivo. Haces caja manual y das un servicio que los demás han cerrado (+87.77€)."
      },
      {
        "movimientos": [
          { "dinero": -131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -2,
        "feedback": "Pierdes media tarde de facturación de forma irrecuperable (-131.65€)."
      },
      {
        "movimientos": [
          { "dinero": -50.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -5,
        "feedback": "Gritas a un trabajador que no tiene la culpa y pierdes ventas igual por inacción (-50€ de tiempo perdido)."
      }
    ]
  },
  {
    "id": 88,
    "pregunta": "Te llama un comercial muy agresivo diciéndote que si no le pagas hoy mismo, tu negocio desaparecerá de Google.",
    "opciones": [
      "Te asustas y le das los datos de la tarjeta para pagar 200€.",
      "Te pones a discutir con él durante media hora intentando tener la razón.",
      "Le cuelgas el teléfono y bloqueas el número al ver que es una estafa."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -200.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -2,
        "feedback": "Has caído en el clásico fraude del falso posicionamiento web (-200€)."
      },
      {
        "movimientos": [],
        "reputacion": -2,
        "feedback": "Pierdes 30 minutos valiosos de atención al cliente en tu local discutiendo (0€ directos, pero pierdes tiempo)."
      },
      {
        "movimientos": [],
        "reputacion": 2,
        "feedback": "Proteges tu tiempo y tu dinero de forma eficaz ante intentos de extorsión (0€)."
      }
    ]
  },
  {
    "id": 89,
    "pregunta": "Un cliente habitual, de total confianza, se da cuenta de que se ha dejado la cartera tras consumir o empaquetar su producto.",
    "opciones": [
      "Llamas a la policía o le tratas como a un delincuente.",
      "Le dices que no se preocupe, que te haga un Bizum cuando llegue a casa o te lo traiga mañana.",
      "Le obligas a quedarse fregando o limpiando el local."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -10,
        "feedback": "Humillas a un buen cliente que jamás volverá a pisar tu local (-131.65€ futuros)."
      },
      {
        "movimientos": [
          { "dinero": 43.88, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 8,
        "feedback": "El cliente paga esa tarde, se siente muy agradecido y te recomienda a más gente (+43.88€)."
      },
      {
        "movimientos": [
          { "dinero": -87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -8,
        "feedback": "Quedas como un tirano absurdo y pierdes al cliente de por vida (-87.77€)."
      }
    ]
  },
  {
    "id": 90,
    "pregunta": "Toca renovar el contrato de alquiler del local y el propietario te avisa de que quiere subir la cuota un 15%.",
    "opciones": [
      "Aceptas sin rechistar porque buscar otro sitio da mucha pereza.",
      "Te sientas a negociar: le ofreces un 5% de subida o firmar por más años a cambio de congelar el precio.",
      "Te ofendes, sacas tus cosas ese mismo día y te quedas en la calle."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -131.65, "categoria_pnl": "Alquiler" }
        ],
        "reputacion": 0,
        "feedback": "Tus gastos fijos se disparan y tu margen de beneficio se ahoga (-131.65€ en alquiler)."
      },
      {
        "movimientos": [],
        "reputacion": 5,
        "feedback": "Llegas a un acuerdo razonable que protege tus cuentas (0€ de impacto grave)."
      },
      {
        "movimientos": [
          { "dinero": -500.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -10,
        "feedback": "Cierras el negocio abruptamente, perdiendo miles de euros e interrumpiendo ventas (-500€ de impacto menor)."
      }
    ]
  },
  {
    "id": 91,
    "pregunta": "Varios clientes jóvenes te preguntan si aceptas un nuevo método de pago móvil que se ha puesto muy de moda.",
    "opciones": [
      "Investiga cómo funciona, ves que la comisión es baja y lo implementas.",
      "Les respondes con desdén que tú solo usas 'dinero de verdad'.",
      "Compras una máquina carísima de un comercial que dice tener la exclusiva de ese pago."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Te adaptas al mercado y captas a un público más joven que valora la rapidez (+131.65€)."
      },
      {
        "movimientos": [
          { "dinero": -87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Quedas obsoleto y los clientes jóvenes se van a la competencia (-87.77€)."
      },
      {
        "movimientos": [
          { "dinero": -300.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -2,
        "feedback": "Caes en una trampa de ventas por no informarte antes (-300€)."
      }
    ]
  },
  {
    "id": 92,
    "pregunta": "Recibes una carta certificada urgente de Hacienda. Te exigen devolver una subvención del año pasado porque no presentaste la memoria justificativa a tiempo.",
    "opciones": [
      "Pagas de inmediato a un asesor fiscal experto para intentar un recurso de reposición legal.",
      "Metes la carta en un cajón pensando que si no firmas nada más, se olvidarán.",
      "Tratas de falsificar fechas en documentos antiguos para presentarlos ahora."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -300.0, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 2,
        "feedback": "Pierdes dinero en el abogado, pero logras frenar el embargo masivo (-300€)."
      },
      {
        "movimientos": [
          { "dinero": -3000.0, "categoria_pnl": "Impuestos" }
        ],
        "reputacion": -10,
        "feedback": "Hacienda no olvida. Te embargan la subvención íntegra más recargos e intereses (-3.000€)."
      },
      {
        "movimientos": [
          { "dinero": -2500.0, "categoria_pnl": "Impuestos" }
        ],
        "reputacion": -10,
        "feedback": "El fraude se detecta y la multa por falsedad documental liquida tu tesorería (-2.500€)."
      }
    ]
  },
  {
    "id": 93,
    "pregunta": "Notas que los gastos de material de oficina (o consumibles básicos) han subido mucho. Descubres que se están malgastando.",
    "opciones": [
      "Despides a todo el equipo por ladrones (o cierras tu negocio de rabia si estás solo).",
      "Lo ignoras, pensar en eso te da dolor de cabeza.",
      "Estableces una política clara de uso de materiales y haces un control de inventario semanal."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -400.0, "categoria_pnl": "Personal y SS" }
        ],
        "reputacion": -8,
        "feedback": "Tomas una medida desproporcionada que paraliza la empresa por completo (-400€)."
      },
      {
        "movimientos": [
          { "dinero": -100.0, "categoria_pnl": "Suministros" }
        ],
        "reputacion": -2,
        "feedback": "La fuga de dinero continúa sangrando tus beneficios lentamente (-100€)."
      },
      {
        "movimientos": [],
        "reputacion": 5,
        "feedback": "Cortas el problema de raíz con gestión pura. Optimizas tus costes (0€)."
      }
    ]
  },
  {
    "id": 94,
    "pregunta": "El Ayuntamiento decide levantar la calle de tu local para cambiar las tuberías. Tienes una zanja en la puerta durante una semana.",
    "opciones": [
      "Te quejas amargamente en Facebook pero no haces nada más.",
      "Pones carteles divertidos indicando cómo entrar y ofreces reparto a domicilio sin coste extra.",
      "Cierras la tienda toda la semana por el ruido y el polvo."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -2,
        "feedback": "El acceso es difícil y los clientes pasan de largo (-131.65€)."
      },
      {
        "movimientos": [
          { "dinero": 87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 8,
        "feedback": "Eres resiliente. Los clientes valoran tu esfuerzo y salvas las ventas mediante envíos (+87.77€)."
      },
      {
        "movimientos": [
          { "dinero": -175.54, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Pierdes una semana completa de facturación mientras los gastos fijos siguen igual (-175.54€)."
      }
    ]
  },
  {
    "id": 95,
    "pregunta": "Se celebra en otra ciudad la feria más importante de tu sector. La entrada cuesta 200€ más el viaje.",
    "opciones": [
      "No vas, te parece un gasto inútil y prefieres quedarte viendo la tele.",
      "Vas, pero te pasas el día bebiendo en el bar del evento sin hablar con nadie.",
      "Inviertes el dinero, planificas a qué proveedores visitar y traes nuevas ideas."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": -2,
        "feedback": "Te quedas estancado sin conocer las novedades que sí aplicará tu competencia (0€)."
      },
      {
        "movimientos": [
          { "dinero": -200.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -5,
        "feedback": "Has tirado el dinero del viaje y la entrada a la basura de forma improductiva (-200€)."
      },
      {
        "movimientos": [
          { "dinero": 300.0, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Consigues un nuevo proveedor que mejora tus márgenes para el resto del año (+300€ en ventas indirectas)."
      }
    ]
  },
  {
    "id": 96,
    "pregunta": "El equipo infantil de fútbol del barrio te pide si puedes patrocinar sus camisetas por 100€.",
    "opciones": [
      "Aceptas encantado: es un buen apoyo al barrio y publicidad local muy barata.",
      "Te emocionas y decides donarles 500€ aunque no los tengas.",
      "Les dices de muy malas formas que tú no regalas el dinero a niños."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 8,
        "feedback": "Ganas el favor de las familias del equipo, que empiezan a comprar en tu negocio (+131.65€)."
      },
      {
        "movimientos": [
          { "dinero": -400.0, "categoria_pnl": "Publicidad" }
        ],
        "reputacion": 5,
        "feedback": "Es un gesto noble, pero financieramente irresponsable para tus cuentas actuales (-400€)."
      },
      {
        "movimientos": [
          { "dinero": -87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -8,
        "feedback": "Los padres del equipo se enteran de tus malas formas y dejan de venir (-87.77€)."
      }
    ]
  },
  {
    "id": 97,
    "pregunta": "Recibes una reseña online de 1 estrella de un cliente que claramente ha confundido tu local con el de enfrente.",
    "opciones": [
      "Pagas a una empresa de dudosa legalidad para que borre la reseña.",
      "Te desesperas pero la dejas ahí sin decir nada.",
      "Respondes muy educadamente explicando la confusión y pidiendo a la plataforma que la revise."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -100.0, "categoria_pnl": "Publicidad" }
        ],
        "reputacion": -5,
        "feedback": "Te estafan, la reseña sigue ahí y tú tienes menos dinero (-100€)."
      },
      {
        "movimientos": [
          { "dinero": -43.88, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -2,
        "feedback": "Otros usuarios leen la mala reseña y se llevan una impresión equivocada (-43.88€)."
      },
      {
        "movimientos": [],
        "reputacion": 5,
        "feedback": "Quien lee la respuesta ve tu profesionalidad. La plataforma acaba borrándola (0€)."
      }
    ]
  },
  {
    "id": 98,
    "pregunta": "Una ola de calor sin precedentes está haciendo que algunos de tus productos (o herramientas) sufran daños si no haces algo.",
    "opciones": [
      "Los vendes igualmente, ocultando que están un poco en mal estado.",
      "Ajustas rápidamente el aire acondicionado y redistribuyes el almacén para protegerlos.",
      "Tiras todo al contenedor por pánico a una intoxicación o rotura total."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -175.54, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -10,
        "feedback": "Recibes quejas gravísimas, devoluciones y pierdes credibilidad local (-175.54€)."
      },
      {
        "movimientos": [],
        "reputacion": 5,
        "feedback": "La factura de luz sube un poco, pero salvas todo el inventario de forma segura (0€)."
      },
      {
        "movimientos": [
          { "dinero": -300.0, "categoria_pnl": "Suministros" }
        ],
        "reputacion": -2,
        "feedback": "Asumes unas pérdidas gigantescas sin haber intentado salvar el material (-300€)."
      }
    ]
  },
  {
    "id": 99,
    "pregunta": "Llevas semanas trabajando sin descanso y te sientes agotado. Piensas en cerrar un par de horas antes todos los días.",
    "opciones": [
      "Estudias las horas de menos afluencia y ajustas el horario oficialmente de forma estratégica.",
      "Cierras de forma aleatoria cuando te apetece, sin avisar en ningún sitio.",
      "Te inflas a bebidas energéticas y sigues hasta reventar."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 2,
        "feedback": "Descansas más sin afectar a la rentabilidad, ya que cortas las horas 'muertas' (0€)."
      },
      {
        "movimientos": [
          { "dinero": -131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -8,
        "feedback": "Los clientes vienen, ven cerrado y se cabrean. Das imagen de inestabilidad (-131.65€)."
      },
      {
        "movimientos": [
          { "dinero": -150.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -5,
        "feedback": "Cometes un error grave por falta de sueño que te cuesta caro en salud y dinero (-150€)."
      }
    ]
  },
  {
    "id": 100,
    "pregunta": "Un cliente súper leal te trae una caja de bombones y una tarjeta para agradecerte tu buen servicio de todo el año.",
    "opciones": [
      "Lo rechazas diciendo que la ética profesional te impide aceptar regalos.",
      "Lo aceptas agradecido, te sacas una foto con él (si le parece bien) y lo subes a redes.",
      "Le dices en broma que preferirías que te hubiera dado el dinero en efectivo."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -43.88, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Haces sentir mal al cliente que venía con toda su ilusión (-43.88€)."
      },
      {
        "movimientos": [
          { "dinero": 131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 8,
        "feedback": "Fidelizas a la persona de por vida y demuestras en redes el amor de tus clientes (+131.65€)."
      },
      {
        "movimientos": [
          { "dinero": -87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -10,
        "feedback": "Resultas de muy mal gusto, el cliente se ofende y dejas una pésima imagen (-87.77€)."
      }
    ]
  },
  {
    "id": 101,
    "pregunta": "Un cliente fiel te comenta en privado que tu principal competidor ha bajado sus precios un 20% esta semana.",
    "opciones": [
      "Entras en pánico e igualas su rebaja inmediatamente en todos tus productos.",
      "Mantienes tus precios, pero mejoras la experiencia de compra y recuerdas el valor de tu calidad.",
      "Te enfadas con el cliente por decírtelo y le dices que se vaya a comprar allí."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -175.54, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Destruyes tus márgenes de beneficio por una promoción temporal del rival (-175.54€)."
      },
      {
        "movimientos": [],
        "reputacion": 5,
        "feedback": "Pierdes algún cliente sensible al precio, pero mantienes la rentabilidad sana (0€)."
      },
      {
        "movimientos": [
          { "dinero": -87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -8,
        "feedback": "Pierdes a un cliente leal que solo intentaba ayudarte (-87.77€)."
      }
    ]
  },
  {
    "id": 102,
    "pregunta": "Detectas una pequeña plaga (ej. hormigas o cucarachas) cerca del almacén de tu local.",
    "opciones": [
      "Compras un spray barato en el supermercado y echas un poco por encima.",
      "Lo ignoras, total, están en el almacén y los clientes no las ven.",
      "Llamas a una empresa profesional de control de plagas para erradicar el problema de raíz."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -150.0, "categoria_pnl": "Servicios" }
        ],
        "reputacion": -2,
        "feedback": "El problema vuelve a los pocos días y daña parte de tu inventario (-150€)."
      },
      {
        "movimientos": [
          { "dinero": -500.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -10,
        "feedback": "Un cliente ve un insecto, te denuncia a sanidad y te cae una inspección (-500€)."
      },
      {
        "movimientos": [],
        "reputacion": 3,
        "feedback": "Actúas como un profesional, evitas daños mayores y mantienes la higiene (0€)."
      }
    ]
  },
  {
    "id": 103,
    "pregunta": "Un comercial te ofrece introducir una nueva línea de productos que no tiene nada que ver con lo que vendes habitualmente.",
    "opciones": [
      "Haces un pedido gigantesco porque el comercial te jura que 'se vende solo'.",
      "Pides una pequeña muestra de prueba para ver cómo reaccionan tus clientes habituales.",
      "Lo rechazas de malas formas diciéndole que no te haga perder el tiempo."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -400.0, "categoria_pnl": "Suministros" }
        ],
        "reputacion": 0,
        "feedback": "Te quedas con mercancía invendible que ocupa espacio en tu almacén (-400€)."
      },
      {
        "movimientos": [
          { "dinero": 87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 3,
        "feedback": "Minimizas el riesgo. Resulta que gusta y consigues una nueva línea de ingresos (+87.77€)."
      },
      {
        "movimientos": [],
        "reputacion": -2,
        "feedback": "Dejas pasar una oportunidad sin siquiera analizarla (0€)."
      }
    ]
  },
  {
    "id": 104,
    "pregunta": "Un empleado te pide un aumento de sueldo argumentando que lleva un año en la empresa y hace bien su trabajo.",
    "opciones": [
      "Le dices directamente que no, que si no le gusta, la puerta es muy grande.",
      "Le concedes el aumento inmediatamente sin mirar las cuentas del negocio.",
      "Revisas los números y le ofreces un pequeño aumento base más un bonus por objetivos de ventas."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "El empleado se desmotiva, baja su rendimiento y acaba yéndose (-131.65€ indirectos)."
      },
      {
        "movimientos": [
          { "dinero": -300.0, "categoria_pnl": "Personal y SS" }
        ],
        "reputacion": 2,
        "feedback": "Aumentas tus costes fijos peligrosamente sin exigir mayor rendimiento a cambio (-300€)."
      },
      {
        "movimientos": [
          { "dinero": 131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Consigues que gane más solo si la empresa también gana más. Win-Win (+131.65€)."
      }
    ]
  },
  {
    "id": 105,
    "pregunta": "Recibes un aviso de que los impuestos municipales de basuras y vados han subido este año.",
    "opciones": [
      "Lo pagas puntualmente actualizando tu previsión de gastos fijos mensuales.",
      "Devuelves el recibo del banco porque nadie te había avisado por carta certificada.",
      "Vas al Ayuntamiento a gritarle al funcionario de ventanilla."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 2,
        "feedback": "Eres un gestor responsable. Absorbes el golpe planificando bien (0€ impacto imprevisto)."
      },
      {
        "movimientos": [
          { "dinero": -150.0, "categoria_pnl": "Impuestos" }
        ],
        "reputacion": -2,
        "feedback": "Se generan recargos de apremio e intereses de demora por impago de impuestos (-150€)."
      },
      {
        "movimientos": [
          { "dinero": -50.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -5,
        "feedback": "Pierdes tiempo, haces el ridículo y el recibo sigue sin pagarse, sumando recargos (-50€)."
      }
    ]
  },
  {
    "id": 106,
    "pregunta": "Termina el periodo de prueba gratuito de la herramienta de software que usas para facturar y toca pagar la suscripción anual.",
    "opciones": [
      "Vuelves a hacer las facturas a mano en Word para ahorrarte el dinero de la suscripción.",
      "Pagas la suscripción anual porque te ahorra horas de trabajo administrativo a la semana.",
      "Creas una cuenta nueva con otro email falso para tener otro mes gratis, perdiendo tu historial."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -2,
        "feedback": "Pierdes muchísimo tiempo en tareas manuales y cometes errores en los cobros (-87.77€ de ineficiencia)."
      },
      {
        "movimientos": [
          { "dinero": 87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 3,
        "feedback": "Inviertes en productividad. El tiempo ahorrado lo dedicas a vender más (+87.77€ netos)."
      },
      {
        "movimientos": [
          { "dinero": -200.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -5,
        "feedback": "Pierdes datos de clientes vitales, y el desorden te hace perder facturas (-200€)."
      }
    ]
  },
  {
    "id": 107,
    "pregunta": "Un cliente habitual y muy educado te pide devolver un artículo porque se equivocó, pero han pasado dos días del plazo legal de devolución.",
    "opciones": [
      "Te ciñes estrictamente a las reglas y le dices que es imposible.",
      "Le insultas por intentar engañarte con los plazos.",
      "Haces una excepción comercial por ser buen cliente, cambiándoselo por un vale de tienda."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -43.88, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -3,
        "feedback": "Ganas una pequeña batalla legal, pero pierdes a un cliente recurrente (-43.88€ futuros)."
      },
      {
        "movimientos": [
          { "dinero": -131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -8,
        "feedback": "El cliente indignado pone quejas en todas tus redes sociales (-131.65€)."
      },
      {
        "movimientos": [
          { "dinero": 131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Retienes el dinero en el negocio (vale) y fidelizas al cliente para siempre (+131.65€ futuros)."
      }
    ]
  },
  {
    "id": 108,
    "pregunta": "El internet de tu local se cae y el sistema de cobro en la nube deja de funcionar justo en hora punta.",
    "opciones": [
      "Cierras la tienda hasta que vuelva el internet.",
      "Usas la conexión compartida de tu teléfono móvil de forma rápida para seguir operando.",
      "Le dices a los clientes que dejen sus cosas y se vayan."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -175.54, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Pierdes ventas clave durante tu hora más fuerte del día (-175.54€)."
      },
      {
        "movimientos": [],
        "reputacion": 4,
        "feedback": "Eres resolutivo y salvas la facturación de la mañana (0€)."
      },
      {
        "movimientos": [
          { "dinero": -131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -8,
        "feedback": "Ofreces una imagen de caos y los clientes se van a la competencia (-131.65€)."
      }
    ]
  },
  {
    "id": 109,
    "pregunta": "Organizas un pequeño evento o promoción en la puerta de tu negocio y justo ese día diluvia.",
    "opciones": [
      "Mueves el evento al interior de tu local rápidamente y lo anuncias en redes como algo más 'exclusivo'.",
      "Cancelas todo sin avisar y dejas que se estropee el material.",
      "Te quedas fuera mojándote para hacerte la víctima ante los que pasan."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Salvas la situación con creatividad y consigues un buen pico de ventas bajo techo (+131.65€)."
      },
      {
        "movimientos": [
          { "dinero": -250.0, "categoria_pnl": "Publicidad" }
        ],
        "reputacion": -5,
        "feedback": "Pierdes toda la inversión en promoción y decepcionas a quien iba a ir (-250€)."
      },
      {
        "movimientos": [],
        "reputacion": -2,
        "feedback": "Das lástima, pero nadie se para a comprar bajo la lluvia (0€ extra)."
      }
    ]
  },
  {
    "id": 110,
    "pregunta": "Te llega un cargo del banco de 150€ por 'retraso en el pago' a un proveedor importante.",
    "opciones": [
      "Lo asumes, cambias tu sistema de alertas para que no vuelva a pasar y pagas al día.",
      "Te enfadas, no pagas la penalización y dejas de cogerle el teléfono al proveedor.",
      "Pagas el recargo, pero sigues llevando los vencimientos de cabeza sin apuntarlos."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 2,
        "feedback": "Aprendes la lección administrativa. Asumes el pago y evitas futuros desastres (0€ impacto futuro)."
      },
      {
        "movimientos": [
          { "dinero": -175.54, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -8,
        "feedback": "El proveedor te corta el suministro y te quedas sin género para vender (-175.54€)."
      },
      {
        "movimientos": [
          { "dinero": -150.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -2,
        "feedback": "La mala organización hace que te vuelva a pasar lo mismo el mes siguiente (-150€)."
      }
    ]
  },
  {
    "id": 111,
    "pregunta": "Tu proveedor más importante y económico cierra su negocio de forma repentina por jubilación.",
    "opciones": [
      "Dejas tu negocio una temporada porque crees que no vas a poder sin él.",
      "Compras a la desesperada al proveedor más caro del mercado para tener mercancía mañana.",
      "Hablas con varios proveedores alternativos y negocias un buen acuerdo a medio plazo."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -877.68, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -10,
        "feedback": "Renuncias ante el primer obstáculo grave de la cadena de suministro (-877.68€)."
      },
      {
        "movimientos": [
          { "dinero": -175.54, "categoria_pnl": "Suministros" }
        ],
        "reputacion": 0,
        "feedback": "Destrozas tus márgenes de beneficio por actuar con prisas y sin negociar (-175.54€)."
      },
      {
        "movimientos": [],
        "reputacion": 5,
        "feedback": "Resuelves la crisis manteniendo tus costes estables (0€)."
      }
    ]
  },
  {
    "id": 112,
    "pregunta": "Varios clientes se han quejado esta semana de que la música de tu local está demasiado alta y no pueden hablar.",
    "opciones": [
      "Bajas el volumen inmediatamente y buscas una lista de reproducción más ambiental.",
      "Les dices que es el estilo de tu negocio y que si no les gusta, no vengan.",
      "Pones la música aún más alta para demostrar quién manda."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Mejoras la experiencia de usuario y consigues que los clientes pasen más tiempo y gasten más (+87.77€)."
      },
      {
        "movimientos": [
          { "dinero": -87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Los clientes buscan un lugar más cómodo y tus ventas caen (-87.77€)."
      },
      {
        "movimientos": [
          { "dinero": -175.54, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -10,
        "feedback": "Pierdes a la mitad de tu clientela y recibes quejas de los vecinos (-175.54€)."
      }
    ]
  },
  {
    "id": 113,
    "pregunta": "Una organización benéfica del barrio te pide poner una pequeña hucha solidaria en tu mostrador.",
    "opciones": [
      "Te niegas porque 'afea la estética del mostrador'.",
      "La pones, e incluso te comprometes a donar 5 céntimos por cada compra que hagas tú.",
      "Robas disimuladamente las monedas de la hucha para hacer caja."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": -2,
        "feedback": "Pierdes una oportunidad sencilla de mostrar Responsabilidad Social Corporativa (0€)."
      },
      {
        "movimientos": [
          { "dinero": 131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 8,
        "feedback": "Los clientes valoran tu compromiso con el barrio y te eligen frente a otras opciones (+131.65€)."
      },
      {
        "movimientos": [
          { "dinero": -500.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -10,
        "feedback": "Te descubren. Ruina total de tu reputación; el barrio entero te boicotea (-500€)."
      }
    ]
  },
  {
    "id": 114,
    "pregunta": "Se viraliza una noticia muy polémica sobre un tema político en tu ciudad. La gente está muy dividida.",
    "opciones": [
      "Usas la cuenta oficial de tu empresa para insultar a uno de los bandos.",
      "Haces un post largo defendiendo tu postura política personal.",
      "Mantienes la neutralidad en las redes de tu negocio y sigues publicando sobre tus productos."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -175.54, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -10,
        "feedback": "Sufres un linchamiento digital y boicot masivo (-175.54€)."
      },
      {
        "movimientos": [
          { "dinero": -131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Automáticamente pierdes a la mitad de tus clientes que no piensan como tú (-131.65€)."
      },
      {
        "movimientos": [],
        "reputacion": 3,
        "feedback": "Un negocio atiende a todos. Mantienes tus ventas alejándote de polémicas innecesarias (0€)."
      }
    ]
  },
  {
    "id": 115,
    "pregunta": "Abres el ordenador del negocio y ves un mensaje rojo: Tus archivos y la base de datos de clientes han sido secuestrados (Ransomware). Te exigen 2.500€.",
    "opciones": [
      "Pagas el rescate inmediatamente por pánico a perder tus datos.",
      "Ignoras el aviso, sigues usando el ordenador infectado y pierdes los datos de los clientes.",
      "No pagas. Activas tu seguro de ciberriesgos y restauras la copia de seguridad (backup)."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -2500.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -2,
        "feedback": "Los criminales cobran y nunca te devuelven los archivos. Pérdida doble (-2.500€)."
      },
      {
        "movimientos": [
          { "dinero": -3000.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -10,
        "feedback": "Te cae una multa colosal de Protección de Datos por negligencia (-3.000€)."
      },
      {
        "movimientos": [],
        "reputacion": 5,
        "feedback": "Estar preparado te salva la vida. Recuperas tu negocio sin ceder al chantaje (0€ impacto en capital)."
      }
    ]
  },
  {
    "id": 116,
    "pregunta": "Un cliente quiere hacerte un encargo muy grande, pero te exige que se lo entregues en un envoltorio y formato especial que no sueles usar.",
    "opciones": [
      "Analizas los costes del envoltorio extra y le pasas un presupuesto ajustado que mantenga tu margen.",
      "Te niegas en rotundo porque 'las cosas se hacen como tú dices'.",
      "Aceptas hacerlo por el mismo precio base, pagando tú los extras de tu bolsillo."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 175.54, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Consigues un gran pedido siendo flexible, pero sin perder dinero (+175.54€)."
      },
      {
        "movimientos": [],
        "reputacion": -2,
        "feedback": "Pierdes un gran cliente por falta de adaptabilidad comercial (0€)."
      },
      {
        "movimientos": [
          { "dinero": -131.65, "categoria_pnl": "Suministros" }
        ],
        "reputacion": 0,
        "feedback": "Haces el pedido gigante pero pierdes dinero en cada unidad entregada (-131.65€ en margen)."
      }
    ]
  },
  {
    "id": 117,
    "pregunta": "Compras un programa informático nuevo, pero requiere un par de días de formación para ti y tu equipo.",
    "opciones": [
      "Dices que no hay tiempo para aprender, así que nadie usa el programa que acabas de pagar.",
      "Organizas turnos para que todos se formen poco a poco sin cerrar el negocio.",
      "Obligas a los empleados a estudiar los manuales en su casa fuera de su horario."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -200.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -2,
        "feedback": "Has tirado el dinero del software a la basura por mala gestión del cambio (-200€)."
      },
      {
        "movimientos": [
          { "dinero": 87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "La transición es suave. Pronto todos trabajan más rápido y mejor (+87.77€)."
      },
      {
        "movimientos": [
          { "dinero": -87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Tienes problemas legales laborales y un equipo muy cabreado que atiende mal (-87.77€)."
      }
    ]
  },
  {
    "id": 118,
    "pregunta": "Ha sido una semana muy lenta y apenas has vendido nada, pero se acercan los pagos de final de mes (alquiler, nóminas).",
    "opciones": [
      "Haces una 'Venta Flash' de 48h enviando un aviso a todos tus clientes VIP para inyectar liquidez.",
      "Te deprimes, cierras antes y te vas a casa a lamentarte.",
      "Dejas de pagar el alquiler sin avisar al propietario."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 175.54, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 3,
        "feedback": "Eres proactivo. Generas un pico de ventas rápido que salva los pagos del mes (+175.54€)."
      },
      {
        "movimientos": [
          { "dinero": -131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -3,
        "feedback": "La inacción agrava el problema y te quedas sin dinero para los pagos (-131.65€)."
      },
      {
        "movimientos": [
          { "dinero": -250.0, "categoria_pnl": "Alquiler" }
        ],
        "reputacion": -5,
        "feedback": "El propietario te cobra recargos y la relación se vuelve tensa y amenazante (-250€)."
      }
    ]
  },
  {
    "id": 119,
    "pregunta": "Un proveedor de embalajes te ofrece cajas de cartón personalizadas con tu logo por un coste extra muy pequeño.",
    "opciones": [
      "Rechazas la oferta, las cajas lisas y aburridas cumplen su función.",
      "Aceptas. Sabes que el empaquetado (packaging) mejora la imagen de tu marca.",
      "Compras las cajas pero les subes el precio a los clientes de forma exagerada para cobrarles el logo."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 0,
        "feedback": "Ahorras unos céntimos, pero pierdes oportunidades de publicidad móvil pasiva (0€)."
      },
      {
        "movimientos": [
          { "dinero": 87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 4,
        "feedback": "Tu marca se ve más premium, generando recuerdo en los clientes (+87.77€ futuros)."
      },
      {
        "movimientos": [
          { "dinero": -131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Los clientes se quejan de la subida injustificada de precios y dejan de comprar (-131.65€)."
      }
    ]
  },
  {
    "id": 120,
    "pregunta": "Recibes una hoja de reclamaciones de Consumo de un cliente descontento que exige una indemnización.",
    "opciones": [
      "La rompes y la tiras a la basura, total, nadie va a venir a comprobarlo.",
      "Le escribes por WhatsApp para que la retire.",
      "La tramitas legalmente, aportas tus pruebas y contestas en el plazo indicado por la ley."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -500.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -8,
        "feedback": "Ocultar o destruir una hoja de reclamaciones oficial conlleva multas altísimas (-500€)."
      },
      {
        "movimientos": [
          { "dinero": -400.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -10,
        "feedback": "El cliente se siente amenazado y aporta los mensajes a Consumo, te sancionan (-400€)."
      },
      {
        "movimientos": [],
        "reputacion": 3,
        "feedback": "Eres profesional. La mediación da la razón a quien la tiene sin multas extra (0€)."
      }
    ]
  },
  {
    "id": 121,
    "pregunta": "Revisando la contabilidad, ves que un proveedor te ha pasado al banco dos veces la misma factura por error.",
    "opciones": [
      "Devuelves el recibo desde la app del banco sin decir nada.",
      "Llamas al proveedor, le explicas el error y gestionas el abono de forma amistosa.",
      "Lo dejas pasar pensando que ya se compensará en el próximo pedido."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Su sistema automático bloquea tus envíos por 'impago' y te quedas sin stock (-131.65€ en ventas)."
      },
      {
        "movimientos": [],
        "reputacion": 5,
        "feedback": "Recuperas tu dinero rápido y mantienes una relación comercial excelente (0€)."
      },
      {
        "movimientos": [
          { "dinero": -200.0, "categoria_pnl": "Suministros" }
        ],
        "reputacion": 0,
        "feedback": "Regalas liquidez que tu negocio necesita para operar este mes (-200€)."
      }
    ]
  },
  {
    "id": 122,
    "pregunta": "Una ONG muy conocida te pide una donación económica para una campaña local importante.",
    "opciones": [
      "Gritas al voluntario diciendo que tú también necesitas caridad.",
      "Donas 500€ en efectivo de la caja, aunque vas justo para pagar el alquiler.",
      "Te disculpas por no dar efectivo, pero donas un lote de tus productos para una rifa benéfica."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -8,
        "feedback": "Das una imagen deplorable y los vecinos que lo ven dejan de ir (-87.77€)."
      },
      {
        "movimientos": [
          { "dinero": -500.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": 5,
        "feedback": "Descapitalizas el negocio y te metes en problemas para pagar tus facturas (-500€)."
      },
      {
        "movimientos": [
          { "dinero": 87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 8,
        "feedback": "Ayudas a la causa, el coste para ti es mínimo y ganas excelente publicidad local (+87.77€)."
      }
    ]
  },
  {
    "id": 123,
    "pregunta": "Un cliente resbala y se hace daño en tu local porque el suelo estaba mojado y no pusiste el cartel de 'Precaución'.",
    "opciones": [
      "Le echas la culpa por no mirar por dónde pisa.",
      "Le atiendes, te disculpas y das parte a tu seguro de Responsabilidad Civil.",
      "Le ofreces 50€ de tu bolsillo para que no te denuncie."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -500.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -10,
        "feedback": "El cliente te demanda y tienes que pagar los gastos médicos de tu bolsillo (-500€)."
      },
      {
        "movimientos": [],
        "reputacion": 5,
        "feedback": "Actúas con profesionalidad, el seguro cubre los gastos médicos y la indemnización (0€)."
      },
      {
        "movimientos": [
          { "dinero": -300.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -5,
        "feedback": "Rechaza el dinero, te demanda igual y usará tu oferta como prueba de culpa (-300€)."
      }
    ]
  },
  {
    "id": 124,
    "pregunta": "Recibes un comentario público en redes sociales diciendo: 'Me encanta lo que hacéis, pero sois muy caros'.",
    "opciones": [
      "Respondes amablemente explicando la calidad de tus materiales y el trato personalizado.",
      "Borras el comentario y bloqueas al usuario inmediatamente.",
      "Bajas tus precios un 20% al día siguiente para contentarle."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Educas a tu audiencia. Otros leen tu respuesta y valoran más tu trabajo (+87.77€)."
      },
      {
        "movimientos": [
          { "dinero": -43.88, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "El usuario se enfada y escribe reseñas negativas en otras plataformas (-43.88€)."
      },
      {
        "movimientos": [
          { "dinero": -175.54, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -2,
        "feedback": "Destruyes tu margen de beneficio intentando agradar a alguien que solo busca precio (-175.54€)."
      }
    ]
  },
  {
    "id": 125,
    "pregunta": "Te das cuenta de que tienes varios productos que están a punto de pasar de temporada o caducar.",
    "opciones": [
      "Los dejas en el almacén hasta que se estropeen del todo y los tiras.",
      "Haces un 'Pack Sorpresa' a precio reducido o una promoción 2x1 para recuperar costes.",
      "Intentas venderlos a precio normal ocultando que están a punto de caducar."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -150.0, "categoria_pnl": "Suministros" }
        ],
        "reputacion": 0,
        "feedback": "Asumes una pérdida total de la mercancía, tirando dinero a la basura (-150€)."
      },
      {
        "movimientos": [
          { "dinero": 131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Recuperas la liquidez invertida y atraes a clientes que buscan gangas (+131.65€)."
      },
      {
        "movimientos": [
          { "dinero": -175.54, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -10,
        "feedback": "Los clientes se dan cuenta, pierdes su confianza y te exigen devoluciones (-175.54€)."
      }
    ]
  },
  {
    "id": 126,
    "pregunta": "Llevas meses abriendo tu negocio de lunes a domingo. Estás completamente agotado y cometes errores.",
    "opciones": [
      "Decides cerrar el día de menos ventas de la semana para descansar y recargar pilas.",
      "Sigues abriendo todos los días; si cierras un día, te arruinas.",
      "Contratas a tres personas para los fines de semana sin revisar tu presupuesto."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 43.88, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 3,
        "feedback": "Cierras un día flojo, pero tu productividad mejora tanto que vendes más el resto de la semana (+43.88€)."
      },
      {
        "movimientos": [
          { "dinero": -87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Por puro agotamiento atiendes mal y te equivocas en los pedidos (-87.77€)."
      },
      {
        "movimientos": [
          { "dinero": -500.0, "categoria_pnl": "Personal y SS" }
        ],
        "reputacion": 0,
        "feedback": "Los costes laborales se disparan y hunden los beneficios del mes (-500€)."
      }
    ]
  },
  {
    "id": 127,
    "pregunta": "Un negocio vecino te propone pagar a medias un anuncio en una revista local que leen muchos de vuestros clientes potenciales.",
    "opciones": [
      "Aceptas, compartís los gastos y hacéis una promoción conjunta.",
      "Le dices que sí, pero en el último momento te niegas a pagar tu parte.",
      "Rechazas la oferta y pagas tú solo una página entera para no compartir protagonismo."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 175.54, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Reduces costes de marketing a la mitad y logras un gran impacto cruzado (+175.54€)."
      },
      {
        "movimientos": [
          { "dinero": -131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -8,
        "feedback": "El vecino avisa a otros comercios de tu mala fe y te aíslan en el barrio (-131.65€)."
      },
      {
        "movimientos": [
          { "dinero": -300.0, "categoria_pnl": "Publicidad" }
        ],
        "reputacion": -2,
        "feedback": "Haces un gasto enorme en publicidad tradicional que reduce tu liquidez inmediata (-300€)."
      }
    ]
  },
  {
    "id": 129,
    "pregunta": "Una tormenta eléctrica provoca una subida de tensión que quema el ordenador principal y el datáfono.",
    "opciones": [
      "Compras equipos de segunda mano sin factura para salir del paso.",
      "Llamas a tu seguro de comercio, que incluye cobertura por daños eléctricos.",
      "Cierras el negocio hasta que consigas ahorrar para equipos nuevos."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -200.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -2,
        "feedback": "Los equipos fallan a los dos días y tienes que volver a comprar (-200€)."
      },
      {
        "movimientos": [],
        "reputacion": 5,
        "feedback": "El seguro te repone los equipos o te abona su valor, y puedes seguir trabajando (0€)."
      },
      {
        "movimientos": [
          { "dinero": -175.54, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Pierdes ventas masivas por estar inoperativo durante semanas (-175.54€)."
      }
    ]
  },
  {
    "id": 130,
    "pregunta": "Un temporal histórico provoca graves inundaciones en tu zona. El lodo entra en tu negocio y destruye todo el inventario y mobiliario.",
    "opciones": [
      "Pides un préstamo exprés con intereses abusivos del 25% para reformar todo rápido y por tu cuenta.",
      "No tenías seguro para ahorrar 30€ al mes. Pierdes todo e intentas limpiar tú solo.",
      "Tienes tu póliza al día. Das parte al Consorcio de Compensación de Seguros para que te indemnicen."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -2500.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -2,
        "feedback": "Consigues abrir, pero la deuda te asfixia durante los próximos años (-2.500€)."
      },
      {
        "movimientos": [
          { "dinero": -3000.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -5,
        "feedback": "Pierdes años de ahorros y trabajo. La ruina total recae sobre ti (-3.000€)."
      },
      {
        "movimientos": [],
        "reputacion": 5,
        "feedback": "Estar legal y asegurado te salva de la quiebra. El Consorcio responde y te compensan (0€ en tesorería)."
      }
    ]
  },
  {
    "id": 131,
    "pregunta": "Un cliente quiere comprarte mucha mercancía, pero quiere pagarte 2.000€ en efectivo (billetes), lo cual supera el límite legal actual.",
    "opciones": [
      "Le explicas el límite legal y le ofreces pagar una parte en efectivo y el resto con tarjeta o transferencia.",
      "Coges el dinero rápidamente sin hacer factura.",
      "Le gritas que si es un mafioso y le echas de la tienda."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 175.54, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Aseguras la gran venta cumpliendo con la normativa fiscal (+175.54€)."
      },
      {
        "movimientos": [
          { "dinero": -400.0, "categoria_pnl": "Impuestos" }
        ],
        "reputacion": -8,
        "feedback": "Hacienda detecta el ingreso anómalo y te cae una sanción por incumplir la ley antifraude (-400€)."
      },
      {
        "movimientos": [
          { "dinero": -131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -10,
        "feedback": "Pierdes la mejor venta del mes por no saber gestionar la situación con tacto (-131.65€)."
      }
    ]
  },
  {
    "id": 132,
    "pregunta": "Quieres poner música popular en tu local para ambientar, pero sabes que para hacerlo legalmente debes pagar a la entidad de derechos de autor.",
    "opciones": [
      "La pones igualmente de Spotify pensando que 'nadie se va a dar cuenta'.",
      "Cobras a los clientes un recargo inventado del 2% por 'ambientación musical'.",
      "Pagas la tarifa comercial (unos pocos euros al mes) para estar dentro de la ley."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -300.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -5,
        "feedback": "Un inspector se presenta y te pone una multa con efecto retroactivo (-300€)."
      },
      {
        "movimientos": [
          { "dinero": -131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -10,
        "feedback": "Los clientes se sienten estafados al ver el ticket y no vuelven (-131.65€)."
      },
      {
        "movimientos": [],
        "reputacion": 5,
        "feedback": "Tienes música, buen ambiente y cero problemas legales (0€)."
      }
    ]
  },
  {
    "id": 133,
    "pregunta": "Aparece una nueva red social que se vuelve muy popular en tu ciudad. Tu cliente ideal está usándola.",
    "opciones": [
      "Te haces un perfil de empresa gratuito y subes un par de promociones para probar.",
      "Pagas 500€ a un supuesto 'gurú' de internet para que te gestione esa red.",
      "Pasas olímpicamente, ya tienes bastante con tener WhatsApp."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Llegas rápido a la nueva audiencia antes que tu competencia, con coste cero (+131.65€)."
      },
      {
        "movimientos": [
          { "dinero": -500.0, "categoria_pnl": "Publicidad" }
        ],
        "reputacion": -2,
        "feedback": "El 'gurú' resulta ser un novato y tiras el dinero a la basura (-500€)."
      },
      {
        "movimientos": [],
        "reputacion": -2,
        "feedback": "Pierdes visibilidad y la competencia te adelanta por la derecha (0€ extra)."
      }
    ]
  },
  {
    "id": 134,
    "pregunta": "Mañana tienes un evento especial en tu negocio y te das cuenta de que no has impreso folletos ni promociones.",
    "opciones": [
      "Los pides por internet a China porque valen 10€, aunque tarden un mes en llegar.",
      "Vas a la imprenta de tu barrio, pagas un poco más, pero los tienes en 2 horas listos para mañana.",
      "Cancelas el evento entero por no tener los folletos."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Llega el evento, no tienes publicidad y no aparece casi nadie (-87.77€)."
      },
      {
        "movimientos": [
          { "dinero": 131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Pagas un sobrecoste justificado que te salva el evento y atrae clientes (+131.65€)."
      },
      {
        "movimientos": [
          { "dinero": -100.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -8,
        "feedback": "Pierdes la inversión inicial del evento y enfadas a los clientes (-100€)."
      }
    ]
  },
  {
    "id": 135,
    "pregunta": "Un cliente te encarga un producto o servicio a medida que te llevará el triple de horas de trabajo que uno normal.",
    "opciones": [
      "Le cobras lo mismo que por el servicio normal porque quieres caerle bien.",
      "Le rechazas el pedido diciendo que es demasiado difícil para ti.",
      "Le presentas un presupuesto más alto que refleja de forma justa las horas y material extra."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 0,
        "feedback": "Trabajas muchas horas perdiendo dinero. Tu margen de beneficio se hunde (-131.65€ en rentabilidad)."
      },
      {
        "movimientos": [],
        "reputacion": 0,
        "feedback": "Pierdes una venta importante y el cliente busca a otro profesional (0€)."
      },
      {
        "movimientos": [
          { "dinero": 175.54, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Valoras tu tiempo. El cliente acepta y consigues una venta muy rentable (+175.54€)."
      }
    ]
  },
  {
    "id": 136,
    "pregunta": "Notas un ambiente raro. Hay chismes, cotilleos y mal rollo entre tus empleados (o proveedores si estás solo).",
    "opciones": [
      "Te reúnes con todos de forma profesional para atajar el problema, aclarar las cosas y mejorar el clima.",
      "Te unes a los chismes y hablas mal de la gente a sus espaldas.",
      "Despides al azar a una persona para que sirva de escarmiento."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 5,
        "feedback": "Ejerces liderazgo. El ambiente mejora y la productividad vuelve a la normalidad (0€)."
      },
      {
        "movimientos": [
          { "dinero": -131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -8,
        "feedback": "Destruyes el equipo, nadie confía en ti y el servicio al cliente empeora (-131.65€)."
      },
      {
        "movimientos": [
          { "dinero": -500.0, "categoria_pnl": "Personal y SS" }
        ],
        "reputacion": -10,
        "feedback": "Te enfrentas a una demanda por despido improcedente que te cuesta muy cara (-500€)."
      }
    ]
  },
  {
    "id": 137,
    "pregunta": "El contrato de tu local comercial dice que debes pintar la fachada exterior cada dos años, y ya ha llegado el momento.",
    "opciones": [
      "Ignoras el contrato, la pintura aún se ve 'más o menos bien'.",
      "Contratas a un pintor local o compras la pintura para hacerlo tú mismo un domingo.",
      "Contratas a una firma de arquitectos de lujo para que rediseñen el concepto exterior."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -400.0, "categoria_pnl": "Alquiler" }
        ],
        "reputacion": -5,
        "feedback": "El propietario te denuncia por incumplimiento de contrato y te penaliza (-400€)."
      },
      {
        "movimientos": [
          { "dinero": -100.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": 2,
        "feedback": "Cumples tu contrato, inviertes poco dinero y mantienes el local impecable (-100€)."
      },
      {
        "movimientos": [
          { "dinero": -500.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": 0,
        "feedback": "Haces un gasto desmesurado que te deja sin efectivo para operar el mes (-500€)."
      }
    ]
  },
  {
    "id": 138,
    "pregunta": "Un cliente intenta devolver un producto que claramente ha sido usado o dañado por él mismo, exigiendo el dinero.",
    "opciones": [
      "Se lo aceptas y le devuelves el dinero por miedo a que monte un escándalo.",
      "Le insultas y le llamas estafador delante de todo el mundo.",
      "Te niegas educada pero firmemente, mostrándole la política de devoluciones visible en tu mostrador."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -100.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -2,
        "feedback": "Asumes una pérdida injusta y te conviertes en objetivo de clientes abusivos (-100€)."
      },
      {
        "movimientos": [
          { "dinero": -87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -10,
        "feedback": "Creas un ambiente terrible y espantas a los clientes reales que estaban comprando (-87.77€)."
      },
      {
        "movimientos": [],
        "reputacion": 5,
        "feedback": "Proteges tus márgenes haciendo valer tus normas comerciales (0€)."
      }
    ]
  },
  {
    "id": 139,
    "pregunta": "Tienes una idea genial para un nuevo servicio, pero para lanzarlo necesitas gastar 300€ en materiales.",
    "opciones": [
      "Lanzas una 'preventa' a tus mejores clientes. Si hay interés y compran, usas ese dinero para los materiales.",
      "Gastas los 300€ inmediatamente sin consultarlo con nadie.",
      "Desechas la idea porque tienes miedo de gastar un solo euro."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 175.54, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Validas la idea sin riesgo financiero. Ganas dinero antes de gastarlo (+175.54€)."
      },
      {
        "movimientos": [
          { "dinero": -300.0, "categoria_pnl": "Suministros" }
        ],
        "reputacion": 0,
        "feedback": "Nadie lo compra y te comes los 300€ de materiales en el almacén (-300€)."
      },
      {
        "movimientos": [],
        "reputacion": 0,
        "feedback": "Te estancas. La falta de innovación hace que pierdas algo de cuota de mercado (0€)."
      }
    ]
  },
  {
    "id": 140,
    "pregunta": "Recibes un correo de tu proveedor de software de gestión avisando de una subida de tarifas para el próximo mes.",
    "opciones": [
      "Te enfadas, cancelas la suscripción y vuelves a llevar la empresa con libretas de papel.",
      "No haces nada y aceptas el nuevo precio sin mirar más.",
      "Comparas tres alternativas en el mercado. Encuentras otra igual de buena por el precio antiguo y migras."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -2,
        "feedback": "Pierdes muchísimo tiempo en gestión manual, el desorden te hace perder dinero (-87.77€)."
      },
      {
        "movimientos": [
          { "dinero": -43.88, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 0,
        "feedback": "Tus costes fijos aumentan mes a mes, reduciendo tu beneficio (-43.88€)."
      },
      {
        "movimientos": [],
        "reputacion": 5,
        "feedback": "Ejerces como un buen gerente. Controlas tus gastos y mantienes las herramientas (0€)."
      }
    ]
  },
  {
    "id": 141,
    "pregunta": "Un proveedor te ofrece un lote de productos rebajados al 50%, pero te das cuenta de que caducan o se quedan obsoletos la semana que viene.",
    "opciones": [
      "Rechazas la oferta con amabilidad, el riesgo de no venderlos a tiempo es muy alto.",
      "Compras todo el lote y cruzas los dedos para venderlos a precio normal.",
      "Los compras y los congelas/guardas quitando la fecha de caducidad."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 3,
        "feedback": "Tienes buen criterio de inventario. No asumes riesgos innecesarios (0€)."
      },
      {
        "movimientos": [
          { "dinero": -250.0, "categoria_pnl": "Suministros" }
        ],
        "reputacion": -2,
        "feedback": "No logras venderlos a tiempo y tienes que tirar casi todo el lote (-250€)."
      },
      {
        "movimientos": [
          { "dinero": -500.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -10,
        "feedback": "Incurres en un delito contra la salud/consumo y te cae una denuncia grave (-500€)."
      }
    ]
  },
  {
    "id": 142,
    "pregunta": "Uno de tus empleados se equivoca al cobrar y le cobra de menos a un cliente, perdiendo 50€ de la caja.",
    "opciones": [
      "Le descuentas los 50€ de su nómina de forma ilegal para que aprenda la lección.",
      "Asumes el error del negocio, pero implementas un nuevo protocolo para revisar los cobros y formas al empleado.",
      "Le despides de manera fulminante esa misma tarde."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -400.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -8,
        "feedback": "El empleado te denuncia a Inspección de Trabajo y la multa es severa (-400€)."
      },
      {
        "movimientos": [
          { "dinero": -50.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": 5,
        "feedback": "Pierdes los 50€ de caja, pero mejoras tus procesos y la lealtad de tu equipo (-50€)."
      },
      {
        "movimientos": [
          { "dinero": -500.0, "categoria_pnl": "Personal y SS" }
        ],
        "reputacion": -10,
        "feedback": "Te enfrentas a un despido improcedente que te cuesta miles de euros (-500€)."
      }
    ]
  },
  {
    "id": 143,
    "pregunta": "Empiezas a notar que de vez en cuando faltan pequeños artículos de exposición en tu local (pequeños hurtos).",
    "opciones": [
      "Colocas la mercancía pequeña cerca de la caja, instalas un par de espejos y pones un cartel disuasorio.",
      "Cierras la tienda al público y solo atiendes a través de una ventanilla.",
      "Lo ignoras, asumiendo que los robos son parte inevitable de tener un negocio."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 3,
        "feedback": "Con una inversión mínima, reduces drásticamente los hurtos (0€ impacto a largo plazo)."
      },
      {
        "movimientos": [
          { "dinero": -175.54, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -8,
        "feedback": "Arruinas la experiencia de compra y tus ventas se desploman (-175.54€)."
      },
      {
        "movimientos": [
          { "dinero": -150.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -2,
        "feedback": "Los ladrones ven que es fácil y el 'boca a boca' hace que te roben más cada semana (-150€ de pérdida)."
      }
    ]
  },
  {
    "id": 144,
    "pregunta": "Un cliente te pide fraccionar el pago de una compra muy pequeña en varios meses.",
    "opciones": [
      "Aceptas, le das el producto y apuntas en una libreta que te debe dinero.",
      "Te ríes de él en su cara por pedir pagar a plazos algo tan barato.",
      "Le explicas con cortesía que por política de empresa no financiáis importes tan pequeños."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -50.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -2,
        "feedback": "El esfuerzo administrativo de cobrarle te cuesta más que la propia venta, y al final no paga (-50€)."
      },
      {
        "movimientos": [
          { "dinero": -87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -8,
        "feedback": "El cliente se siente humillado, se va y deja una reseña nefasta (-87.77€)."
      },
      {
        "movimientos": [],
        "reputacion": 3,
        "feedback": "Pierdes esa micro-venta pero mantienes tu operativa limpia y profesional (0€)."
      }
    ]
  },
  {
    "id": 145,
    "pregunta": "Recibes una llamada anónima diciéndote que un competidor está hablando mal de tu negocio a los vecinos.",
    "opciones": [
      "Vas a su negocio a amenazarle.",
      "Ignoras los rumores y lanzas una campaña enfocada en mostrar testimonios reales de tus clientes felices.",
      "Empiezas a hablar mal de él también a todo el que entra en tu local."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -10,
        "feedback": "Te graban con el móvil y quedas como un lunático en internet (-131.65€)."
      },
      {
        "movimientos": [
          { "dinero": 87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 8,
        "feedback": "Respondes con valor. Tus clientes te defienden y tu reputación sale reforzada (+87.77€)."
      },
      {
        "movimientos": [
          { "dinero": -87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Creas un ambiente tóxico en tu propio negocio que incomoda a la gente (-87.77€)."
      }
    ]
  },
  {
    "id": 146,
    "pregunta": "Es fin de mes, las cuentas cuadran, pero un familiar te pide que le saques un 'sueldecito' de la caja de la empresa porque lo necesita.",
    "opciones": [
      "Le das el dinero directamente de la caja porque la familia es lo primero.",
      "Lo pones en nómina falsa aunque no trabaje para justificar la salida de dinero.",
      "Le explicas que la caja de la empresa no es tu bolsillo personal y le ayudas desde tus ahorros privados si puedes."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -200.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": 0,
        "feedback": "Descuadras la contabilidad y te quedas sin liquidez para impuestos (-200€)."
      },
      {
        "movimientos": [
          { "dinero": -500.0, "categoria_pnl": "Personal y SS" }
        ],
        "reputacion": -10,
        "feedback": "Cometes un fraude a la Seguridad Social que te puede costar el negocio (-500€)."
      },
      {
        "movimientos": [],
        "reputacion": 5,
        "feedback": "Mantienes una clara separación entre patrimonio empresarial y personal (0€)."
      }
    ]
  },
  {
    "id": 147,
    "pregunta": "Un pequeño medio digital local te ofrece un espacio para publicar un artículo patrocinado sobre tu negocio.",
    "opciones": [
      "Aceptas y escribes un artículo útil dando consejos sobre tu sector, mencionando tu negocio al final.",
      "Aceptas pero pones solo un cartel gigante con tus precios.",
      "Te niegas porque crees que los medios locales no sirven para nada."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Aportas valor, te posicionas como experto y atraes clientes de calidad (+131.65€)."
      },
      {
        "movimientos": [
          { "dinero": -100.0, "categoria_pnl": "Publicidad" }
        ],
        "reputacion": -2,
        "feedback": "A nadie le gusta leer publicidad pura; gastas dinero y no atraes a nadie (-100€)."
      },
      {
        "movimientos": [],
        "reputacion": 0,
        "feedback": "Pierdes una forma barata de llegar a tu comunidad (0€)."
      }
    ]
  },
  {
    "id": 148,
    "pregunta": "Te llega el recibo del seguro del local anual de golpe y no contabas con ello en tus previsiones de este mes.",
    "opciones": [
      "Devuelves el recibo porque este mes prefieres gastarte ese dinero en otras cosas.",
      "Lo pagas usando tu fondo de emergencia y anotas en tu calendario fraccionarlo el año que viene.",
      "Cancelas el seguro definitivamente para ahorrar dinero a partir de ahora."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -100.0, "categoria_pnl": "Seguros" }
        ],
        "reputacion": -2,
        "feedback": "Te quedas sin cobertura y la compañía te exige el pago con recargos (-100€)."
      },
      {
        "movimientos": [],
        "reputacion": 5,
        "feedback": "Absorbes el golpe gracias a tu colchón financiero y aprendes a presupuestar (0€)."
      },
      {
        "movimientos": [
          { "dinero": -500.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -10,
        "feedback": "Dejas tu negocio expuesto al 100% de riesgo de ruina ante un siniestro no cubierto (-500€ de valor en riesgo)."
      }
    ]
  },
  {
    "id": 149,
    "pregunta": "Notas que varios clientes te piden últimamente que ofrezcas opciones 'Eco' o 'Sostenibles' en tus productos o envases.",
    "opciones": [
      "Les dices que eso son modas tontas y que tú no vas a cambiar.",
      "Sigues con lo mismo pero pones pegatinas verdes diciendo que es 'Eco' aunque sea mentira (Greenwashing).",
      "Buscas un proveedor sostenible e introduces una línea 'Eco' un poco más cara para quien la demande."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Pierdes cuota de mercado frente a competidores que sí escuchan al cliente (-87.77€)."
      },
      {
        "movimientos": [
          { "dinero": -400.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -10,
        "feedback": "Te descubren, estalla una crisis de reputación y te denuncian por publicidad engañosa (-400€)."
      },
      {
        "movimientos": [
          { "dinero": 131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 8,
        "feedback": "Satisfaces una demanda real y abres una nueva vía de negocio con buen margen (+131.65€)."
      }
    ]
  },
  {
    "id": 150,
    "pregunta": "Una denuncia anónima hace que se presenten Inspectores de Sanidad/Consumo y de Trabajo simultáneamente en tu negocio.",
    "opciones": [
      "Tienes el local sin desinfectar. Intentas sobornar al inspector jefe para que se vaya.",
      "Te pones a llorar pidiendo clemencia porque 'eres un pequeño emprendedor que no sabe de papeles'.",
      "Les abres la puerta tranquilo. Tienes las nóminas al día, el plan de riesgos laborales en regla y el local cumple la normativa."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -3000.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -10,
        "feedback": "Cierre inmediato del local y multas que arruinan tu vida entera (-3.000€)."
      },
      {
        "movimientos": [
          { "dinero": -2500.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -8,
        "feedback": "La ignorancia de la ley no exime de su cumplimiento. Multas acumuladas graves (-2.500€)."
      },
      {
        "movimientos": [],
        "reputacion": 10,
        "feedback": "El esfuerzo de ser legal da sus frutos. Pasas la inspección sin una sola sanción (0€)."
      }
    ]
  },
  {
    "id": 151,
    "pregunta": "Hay un error en la cadena de producción o servicio y entregas varios pedidos con defectos a clientes importantes.",
    "opciones": [
      "Asumes tu error rápidamente, pides disculpas y repones el pedido costeándolo tú.",
      "Culpas públicamente a tus proveedores para no quedar mal tú.",
      "Dejas de cogerles el teléfono esperando que se olviden del tema."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -50.0, "categoria_pnl": "Suministros" }
        ],
        "reputacion": 8,
        "feedback": "Pierdes margen hoy, pero tu honestidad hace que confíen aún más en ti para el futuro (-50€)."
      },
      {
        "movimientos": [
          { "dinero": -131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Los clientes se dan cuenta de que no asumes responsabilidades y se van a otro lado (-131.65€)."
      },
      {
        "movimientos": [
          { "dinero": -175.54, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -10,
        "feedback": "Te ponen hojas de reclamaciones y el daño reputacional es enorme (-175.54€)."
      }
    ]
  },
  {
    "id": 152,
    "pregunta": "El escaparate o la fachada de tu negocio lleva semanas muy sucia por culpa de unas obras en la calle.",
    "opciones": [
      "Le pagas a un joven del barrio para que la limpie por 5€ sin factura.",
      "Pones un cartel quejándote del Ayuntamiento y lo dejas sucio.",
      "Dedicas media hora a manguerear y limpiar tú mismo (o tu equipo) la entrada al llegar por la mañana."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -100.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -5,
        "feedback": "Fomentas la economía sumergida y si se cae de la escalera, tienes un problema legal (-100€)."
      },
      {
        "movimientos": [
          { "dinero": -87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "La imagen es lúgubre, la gente no entra y las ventas caen (-87.77€)."
      },
      {
        "movimientos": [],
        "reputacion": 5,
        "feedback": "Mantienes el local atractivo y la gente sigue entrando con normalidad (0€)."
      }
    ]
  },
  {
    "id": 153,
    "pregunta": "Te llega un presupuesto para renovar todo el mobiliario. Es un gasto muy alto, pero tu local se ve viejo.",
    "opciones": [
      "Pides un préstamo bancario a largo plazo para pagarlo porque confías ciegamente en que venderás más.",
      "Analizas tus ahorros y decides renovar solo las dos zonas más críticas del local de forma estratégica.",
      "Gastas toda la liquidez de la cuenta corriente de la empresa para pagarlo de golpe."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -200.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": 0,
        "feedback": "Te sobreendeudas asumiendo cuotas mensuales que ahogan tu rentabilidad futura (-200€)."
      },
      {
        "movimientos": [
          { "dinero": 87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Lavas la cara al negocio sin comprometer la seguridad de tu caja fuerte (+87.77€)."
      },
      {
        "movimientos": [
          { "dinero": -400.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -2,
        "feedback": "Te quedas a cero y, al primer imprevisto, no puedes pagar ni los sueldos (-400€)."
      }
    ]
  },
  {
    "id": 154,
    "pregunta": "Descubres que puedes importar una materia prima desde otro país a mitad de precio, pero tarda 40 días en llegar.",
    "opciones": [
      "Rompes con tu proveedor local al momento y lo pides todo fuera para ganar más.",
      "Haces un pequeño pedido de prueba para comprobar la calidad y fiabilidad de los envíos aduaneros.",
      "Lo rechazas porque 'todo lo que viene de fuera es malo'."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -175.54, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "El envío se retrasa en aduanas, te quedas sin stock y tu negocio se paraliza (-175.54€)."
      },
      {
        "movimientos": [],
        "reputacion": 3,
        "feedback": "Exploras una vía para aumentar tu margen de forma segura y controlada (0€ impacto ahora)."
      },
      {
        "movimientos": [],
        "reputacion": -2,
        "feedback": "Cierras la puerta a la mejora de tus costes por prejuicios sin fundamento (0€)."
      }
    ]
  },
  {
    "id": 155,
    "pregunta": "Hay un partido de fútbol importantísimo (o un evento de gran interés televisivo) y la calle se vacía completamente a las 19:00h.",
    "opciones": [
      "Te pasas toda la tarde mirando el móvil aburrido hasta la hora de cierre.",
      "Aprovechas esas horas muertas para hacer inventario, limpiar a fondo y organizar la semana.",
      "Cierras el local y te vas tú también a ver el partido sin avisar en la puerta."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 0,
        "feedback": "Pierdes tiempo de vida productiva y sigues igual (0€)."
      },
      {
        "movimientos": [
          { "dinero": 43.88, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Optimizas un tiempo muerto, ahorrando horas extra en el futuro (+43.88€ indirectos)."
      },
      {
        "movimientos": [
          { "dinero": -87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -8,
        "feedback": "Alguien va expresamente a tu negocio, lo encuentra cerrado y se queja en Google (-87.77€)."
      }
    ]
  },
  {
    "id": 156,
    "pregunta": "Un creador de contenido de la ciudad te ofrece hacerte fotos y vídeos profesionales mensuales a cambio de 150€ al mes.",
    "opciones": [
      "Aceptas y los subes a tus perfiles, mejorando brutalmente la imagen digital de tu marca.",
      "Le dices que tú ya tienes un teléfono con buena cámara y que no le necesitas.",
      "Le contratas pero nunca subes los vídeos por falta de tiempo."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 175.54, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 8,
        "feedback": "Tu negocio destaca por encima de la competencia en redes y atraes público de mayor poder adquisitivo (+175.54€)."
      },
      {
        "movimientos": [],
        "reputacion": -2,
        "feedback": "Tu imagen digital sigue viéndose casera y poco profesional (0€)."
      },
      {
        "movimientos": [
          { "dinero": -150.0, "categoria_pnl": "Publicidad" }
        ],
        "reputacion": -2,
        "feedback": "Tiras 150€ a la basura cada mes por no ejecutar la estrategia (-150€)."
      }
    ]
  },
  {
    "id": 157,
    "pregunta": "Llegas por la mañana y te encuentras que ha habido un intento de robo por la noche. Forzaron la cerradura pero no consiguieron entrar.",
    "opciones": [
      "Cambias la cerradura inmediatamente y pides presupuesto para una alarma o cámara.",
      "Le pones celo y cinta americana a la cerradura rota y abres con normalidad.",
      "Duermes en la tienda los próximos días para vigilar."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -100.0, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 3,
        "feedback": "Aseguras tu medio de vida de forma inteligente (-100€ del cerrajero, pero evitas la ruina)."
      },
      {
        "movimientos": [
          { "dinero": -500.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -8,
        "feedback": "A la noche siguiente vuelven y te vacían el local entero (-500€)."
      },
      {
        "movimientos": [
          { "dinero": -131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Agotas tu salud física y mental, atiendes fatal y acabas enfermando (-131.65€)."
      }
    ]
  },
  {
    "id": 158,
    "pregunta": "Te llega un cliente de muy mal humor porque tuvo un mal día en su trabajo, y te habla de forma un poco brusca.",
    "opciones": [
      "Entras al trapo, le devuelves los malos modos y acabáis discutiendo a gritos.",
      "Mantienes la calma, le das un servicio impecable y rápido sin tomarlo como algo personal.",
      "Te niegas a atenderle y le pides que abandone el local."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -8,
        "feedback": "Creas un conflicto enorme que afecta al resto de clientes presentes (-87.77€)."
      },
      {
        "movimientos": [
          { "dinero": 43.88, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "El cliente se calma, agradece internamente tu paciencia y acaba comprando (+43.88€)."
      },
      {
        "movimientos": [
          { "dinero": -43.88, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Pierdes una venta segura por un problema de ego comercial (-43.88€)."
      }
    ]
  },
  {
    "id": 159,
    "pregunta": "Te das cuenta de que pasas mucho tiempo explicando exactamente lo mismo a casi todos los clientes (cómo funciona algo, tarifas, horarios...).",
    "opciones": [
      "Creas cartelería clara en la tienda y una sección de 'Preguntas Frecuentes' en tu web/Instagram.",
      "Empiezas a cobrar a la gente por darles información.",
      "Sigues perdiendo saliva y tiempo explicando lo mismo uno a uno."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Automatizas la información, el cliente compra más rápido y tú ganas tiempo para vender más (+131.65€)."
      },
      {
        "movimientos": [
          { "dinero": -131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -10,
        "feedback": "Nadie quiere pagar por preguntar, se ofenden y se van a la competencia (-131.65€)."
      },
      {
        "movimientos": [],
        "reputacion": -2,
        "feedback": "Creas cuellos de botella en la atención y vendes menos por hora (0€)."
      }
    ]
  },
  {
    "id": 160,
    "pregunta": "¡Sorpresa! El Ayuntamiento te ha concedido el premio anual al 'Mejor Pequeño Comercio/Negocio' de tu categoría.",
    "opciones": [
      "Pones el premio en un rincón donde no se ve y no dices nada a nadie por vergüenza.",
      "Haces un post muy arrogante diciendo que siempre supiste que eras mejor que la competencia.",
      "Compartes el premio en redes y en la tienda agradeciendo a tus clientes, porque sin ellos no sería posible."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 0,
        "feedback": "Desaprovechas una oportunidad brutal de 'prueba social' y credibilidad (0€)."
      },
      {
        "movimientos": [
          { "dinero": -87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -8,
        "feedback": "Creas antipatía y pareces un egocéntrico; los clientes sienten rechazo (-87.77€)."
      },
      {
        "movimientos": [
          { "dinero": 175.54, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 10,
        "feedback": "Fortaleces el sentido de comunidad. Los clientes se sienten parte del premio y compran más (+175.54€)."
      }
    ]
  },
  {
    "id": 161,
    "pregunta": "Hay una hora punta inesperada, se forma una cola enorme en la caja y los clientes empiezan a resoplar de impaciencia.",
    "opciones": [
      "Te agobias, te pones nervioso y empiezas a hablarles mal para que se den prisa.",
      "Les dices que si tienen prisa, vuelvan en otro momento.",
      "Pides disculpas por la espera con una sonrisa, agilizas el cobro e invitas a un pequeño detalle o descuento para su próxima visita."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -8,
        "feedback": "El estrés hace que cometas errores en la caja y los clientes se van molestos (-87.77€)."
      },
      {
        "movimientos": [
          { "dinero": -131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -10,
        "feedback": "Varios clientes te toman la palabra, dejan los productos y se van a la competencia (-131.65€)."
      },
      {
        "movimientos": [
          { "dinero": 87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 8,
        "feedback": "Transformas una mala experiencia en fidelización pura. Salvas todas las ventas (+87.77€ futuros)."
      }
    ]
  },
  {
    "id": 162,
    "pregunta": "Un colegio del barrio te pregunta si los niños pueden hacer una breve visita a tu negocio para conocer cómo funciona un comercio/empresa local.",
    "opciones": [
      "Les echas porque los niños 'solo estorban y rompen cosas'.",
      "Les haces un mini-tour divertido de 15 minutos y les das un folleto con un pequeño descuento para sus familias.",
      "Les dices que sí, pero les quieres cobrar entrada como si fuera un museo."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -43.88, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -8,
        "feedback": "Te ganas la antipatía de los profesores y los padres del barrio (-43.88€)."
      },
      {
        "movimientos": [
          { "dinero": 131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 10,
        "feedback": "Los niños llegan a casa emocionados. Los padres acuden el fin de semana a comprarte (+131.65€)."
      },
      {
        "movimientos": [],
        "reputacion": -5,
        "feedback": "El colegio cancela la visita indignado por tu actitud pesetera (0€)."
      }
    ]
  },
  {
    "id": 163,
    "pregunta": "Un cliente tropieza sin querer y rompe un artículo o daña un equipo importante en tu local.",
    "opciones": [
      "Le gritas en público y le exiges que te pague el daño en efectivo en ese mismo momento.",
      "Te echas a llorar en la trastienda asumiendo la pérdida.",
      "Te aseguras de que el cliente esté bien, le tranquilizas y gestionas la rotura a través de tu seguro."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -10,
        "feedback": "Creas un drama enorme. El cliente no vuelve jamás y la gente del local se siente incómoda (-131.65€)."
      },
      {
        "movimientos": [
          { "dinero": -150.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -2,
        "feedback": "Asumes una pérdida innecesaria por no usar las herramientas de tu negocio (-150€)."
      },
      {
        "movimientos": [],
        "reputacion": 5,
        "feedback": "El seguro responde. Ganas el respeto del cliente y no pierdes dinero (0€)."
      }
    ]
  },
  {
    "id": 164,
    "pregunta": "Repasando los gastos del banco, descubres que pagas suscripciones a tres programas informáticos diferentes que sirven prácticamente para lo mismo.",
    "opciones": [
      "Cancelas absolutamente todos y vuelves a llevar el control en una libreta para ahorrar.",
      "Lo dejas estar porque te da pereza aprender a cancelar las suscripciones.",
      "Haces una auditoría rápida, eliges el programa más completo y cancelas los otros dos."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 0,
        "feedback": "Ahorras suscripciones, pero pierdes decenas de horas en tareas manuales y cometes errores (-87.77€ en ineficiencia)."
      },
      {
        "movimientos": [
          { "dinero": -100.0, "categoria_pnl": "Servicios" }
        ],
        "reputacion": -2,
        "feedback": "Sigues sangrando liquidez mes a mes en gastos fantasma innecesarios (-100€)."
      },
      {
        "movimientos": [
          { "dinero": 43.88, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 2,
        "feedback": "Optimizas tus costes fijos mensuales. Eres un buen gestor (+43.88€ de ahorro real)."
      }
    ]
  },
  {
    "id": 165,
    "pregunta": "Es plena ola de calor y el uniforme corporativo que exiges a tu personal es demasiado grueso y caluroso.",
    "opciones": [
      "Flexibilizas la norma, compras polos corporativos de algodón transpirable y les dejas ir cómodos.",
      "Exiges que mantengan el uniforme rígido porque 'la imagen de la empresa es lo primero'.",
      "Les dices que vengan en bañador o en tirantes si quieren."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -50.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": 5,
        "feedback": "Inviertes un poco, pero mantienes la productividad y la buena actitud de tu equipo (-50€)."
      },
      {
        "movimientos": [
          { "dinero": -87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Los empleados rinden mal por el calor sofocante y dan mal servicio (-87.77€)."
      },
      {
        "movimientos": [
          { "dinero": -131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -8,
        "feedback": "Pierdes por completo la imagen profesional de tu negocio, generando desconfianza (-131.65€)."
      }
    ]
  },
  {
    "id": 166,
    "pregunta": "El local de al lado empieza unas reformas. El ruido y el polvo están afectando la experiencia en tu negocio.",
    "opciones": [
      "Cierras tu negocio durante el mes que duren las obras.",
      "Vas a pelearte con los albañiles y les amenazas con llamar a la policía a diario.",
      "Hablas con el dueño de la obra para coordinar horas ruidosas, pones música agradable y ofreces un detalle extra a tus clientes."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -175.54, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 0,
        "feedback": "Pierdes un mes entero de facturación mientras tus gastos fijos continúan (-175.54€)."
      },
      {
        "movimientos": [
          { "dinero": -43.88, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Te ganas enemigos en el vecindario y las obras siguen molestando igual (-43.88€)."
      },
      {
        "movimientos": [],
        "reputacion": 5,
        "feedback": "Mitigas el impacto con creatividad, empatía y mantienes tus ventas a flote (0€)."
      }
    ]
  },
  {
    "id": 167,
    "pregunta": "Recibes una reseña muy destructiva en internet, pero al buscar el nombre, ves que esa persona jamás ha sido cliente tuyo (posible ataque).",
    "opciones": [
      "Le respondes educadamente diciendo que no consta en tu base de datos y reportas la reseña a Google.",
      "Entras en pánico y pagas a una web pirata para que te borre la reseña.",
      "Te enfadas muchísimo y publicas insultos en todas tus redes."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 5,
        "feedback": "Desmontas la mentira de forma profesional. La plataforma acaba eliminando la reseña falsa (0€)."
      },
      {
        "movimientos": [
          { "dinero": -100.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -2,
        "feedback": "Te estafan, pierdes dinero y la reseña sigue publicada (-100€)."
      },
      {
        "movimientos": [
          { "dinero": -131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -10,
        "feedback": "Un arrebato público daña tu imagen de marca más que la propia reseña falsa (-131.65€)."
      }
    ]
  },
  {
    "id": 168,
    "pregunta": "Tu principal empresa de paquetería (o reparto) se pone en huelga durante una semana clave.",
    "opciones": [
      "Cancelas todos los pedidos y dejas de vender online o a domicilio esa semana.",
      "Cierras tu local por las mañanas para repartir tú mismo los paquetes a pie.",
      "Contratas temporalmente a una mensajería local alternativa, aunque te cueste un pelín más."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -175.54, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Congelas una fuente principal de ingresos por falta de cintura comercial (-175.54€)."
      },
      {
        "movimientos": [
          { "dinero": -131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -2,
        "feedback": "Pierdes ventas en tienda física por estar cerrado mientras repartes (-131.65€)."
      },
      {
        "movimientos": [
          { "dinero": 87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "El pequeño sobrecoste logístico te salva la campaña y cumples con tus clientes (+87.77€)."
      }
    ]
  },
  {
    "id": 169,
    "pregunta": "Tienes un empleado excelente, pero te pide modificar un poco su horario por un problema temporal de conciliación familiar.",
    "opciones": [
      "Le despides por falta de compromiso con la empresa.",
      "Le dices que no, que el horario es sagrado.",
      "Analizas la carga de trabajo, le ofreces un ajuste flexible y pides su compromiso en las horas punta."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -500.0, "categoria_pnl": "Personal y SS" }
        ],
        "reputacion": -8,
        "feedback": "Asumes los enormes gastos de un despido improcedente y pierdes talento valioso (-500€)."
      },
      {
        "movimientos": [
          { "dinero": -87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "El empleado se desmotiva, rinde menos o acaba pidiendo una baja por estrés (-87.77€)."
      },
      {
        "movimientos": [
          { "dinero": 87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 8,
        "feedback": "Ganas una lealtad inquebrantable. El empleado rinde mejor que nunca (+87.77€ en eficiencia)."
      }
    ]
  },
  {
    "id": 170,
    "pregunta": "Recibes un email idéntico al de tu proveedor habitual. Te adjunta una factura de 2.800€ y te dice que han cambiado de número de cuenta bancaria (IBAN).",
    "opciones": [
      "Para ser rápido y eficiente, pagas inmediatamente al nuevo IBAN.",
      "Crees que es un virus, apagas el ordenador y lo llevas al técnico a formatear perdiendo tus datos.",
      "Desconfías de los cambios de IBAN por email. Llamas por teléfono a tu proveedor al número de siempre para verificarlo."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -2800.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -5,
        "feedback": "Has caído en el 'Fraude del CEO'. Pierdes el dinero en una cuenta hacker y el proveedor sigue sin cobrar (-2.800€)."
      },
      {
        "movimientos": [
          { "dinero": -300.0, "categoria_pnl": "Servicios" }
        ],
        "reputacion": -2,
        "feedback": "La paranoia te hace borrar todo tu sistema sin hacer copias de seguridad (-300€ en recuperar datos)."
      },
      {
        "movimientos": [],
        "reputacion": 5,
        "feedback": "Tu protocolo de ciberseguridad y doble factor humano salvan el negocio de una estafa gravísima (0€)."
      }
    ]
  },
  {
    "id": 171,
    "pregunta": "¡Felicidades! Se cumple tu primer aniversario desde que abriste el negocio.",
    "opciones": [
      "Te coges el dinero de la caja y te vas de fin de semana para celebrarlo.",
      "Haces un evento de agradecimiento en el local con promociones para tus clientes más fieles.",
      "No haces nada, es un día más de trabajo."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -300.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": 0,
        "feedback": "Dejas tu negocio sin fondos operativos (cash flow) por un capricho personal (-300€ de liquidez)."
      },
      {
        "movimientos": [
          { "dinero": 175.54, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 8,
        "feedback": "Creas comunidad, atraes ventas extraordinarias y reafirmas tu marca localmente (+175.54€)."
      },
      {
        "movimientos": [],
        "reputacion": 0,
        "feedback": "Desaprovechas una de las mejores y más baratas excusas de marketing del año (0€ extra)."
      }
    ]
  },
  {
    "id": 172,
    "pregunta": "Analizando tus ventas, te das cuenta de que los martes tu negocio está completamente vacío.",
    "opciones": [
      "Te pasas los martes quejándote de lo mal que está la economía.",
      "Decides cerrar los martes sin analizar si te compensa más reestructurar tus descansos.",
      "Creas la promoción 'Martes Locos' u ofreces talleres/servicios exclusivos solo para ese día."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": -2,
        "feedback": "Sigues pagando gastos fijos (luz, alquiler) sin generar ingresos nuevos (0€)."
      },
      {
        "movimientos": [
          { "dinero": -43.88, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -2,
        "feedback": "Pierdes clientes despistados sin una estrategia real detrás (-43.88€)."
      },
      {
        "movimientos": [
          { "dinero": 131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Mueves el volumen de clientes, dinamizas el stock y salvas el peor día de la semana (+131.65€)."
      }
    ]
  },
  {
    "id": 173,
    "pregunta": "Un competidor que cierra te ofrece venderte una máquina muy útil para tu negocio de segunda mano, a muy buen precio.",
    "opciones": [
      "Le dices que la compre y pides un préstamo altísimo sin pensar.",
      "Le pides a un técnico de confianza que la revise por 40€ antes de cerrar el trato.",
      "La compras a ciegas y al contado porque 'es una ganga increíble'."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -200.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": 0,
        "feedback": "Te sobreendeudas asumiendo intereses por algo que a lo mejor ni funciona bien (-200€)."
      },
      {
        "movimientos": [
          { "dinero": 87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 3,
        "feedback": "Inviertes 40€ pero te aseguras de hacer una compra excelente que mejorará el servicio (+87.77€ indirectos)."
      },
      {
        "movimientos": [
          { "dinero": -400.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -2,
        "feedback": "La máquina estaba rota. Has comprado chatarra y perdido toda tu liquidez de golpe (-400€)."
      }
    ]
  },
  {
    "id": 174,
    "pregunta": "Tu proveedor de bolsas/packaging se ha quedado sin stock. Tienes que entregar pedidos y no tienes cómo envolverlos.",
    "opciones": [
      "Les dices a los clientes que se lo lleven en la mano o en las cajas sucias del almacén.",
      "Vas a una tienda local y compras un empaquetado un poco más caro y bonito para salir del paso.",
      "Cancelas las ventas del día porque 'no puedes entregar el producto'."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -8,
        "feedback": "Das una imagen cutre y nefasta. Los clientes se sienten menospreciados (-131.65€)."
      },
      {
        "movimientos": [
          { "dinero": 43.88, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Asumes un sobrecoste pequeño, pero das un toque premium temporal que sorprende gratamente (+43.88€)."
      },
      {
        "movimientos": [
          { "dinero": -175.54, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Pierdes ventas reales por no saber improvisar ante un problema menor logístico (-175.54€)."
      }
    ]
  },
  {
    "id": 175,
    "pregunta": "Es festivo local pero muchos comercios han decidido abrir. Tú no modificaste tus horarios en Google My Business.",
    "opciones": [
      "Lo actualizas desde el móvil, publicas en redes y pones un cartel físico bien visible en la puerta.",
      "Cierras y te vas a tu casa, dejando que los clientes lleguen y se encuentren la puerta cerrada.",
      "Abres, pero como nadie lo sabía, te pasas el día sin que entre nadie."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 3,
        "feedback": "Tienes una comunicación excelente. Los clientes saben a qué atenerse sin frustrarse (0€)."
      },
      {
        "movimientos": [
          { "dinero": -87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Das imagen de dejadez. El cliente que va a propósito se frustra y se va a la competencia (-87.77€)."
      },
      {
        "movimientos": [
          { "dinero": -150.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": 0,
        "feedback": "Pagas sueldos y luz en un día vacío por no haber hecho marketing informativo (-150€)."
      }
    ]
  },
  {
    "id": 176,
    "pregunta": "Vas a lanzar un producto/servicio nuevo y necesitas fotos para tus redes sociales y tu web.",
    "opciones": [
      "Inviertes 100€ en un fotógrafo freelance local para que saque lo mejor del producto.",
      "Robas imágenes de un competidor en internet y las pones como si fueran tuyas.",
      "Haces fotos oscuras y borrosas en el almacén porque 'lo importante es el interior'."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 175.54, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Las fotos profesionales transmiten confianza y disparan el interés de tus clientes (+175.54€)."
      },
      {
        "movimientos": [
          { "dinero": -400.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -10,
        "feedback": "Te descubren y recibes una denuncia inmediata por infracción de derechos de autor (-400€)."
      },
      {
        "movimientos": [
          { "dinero": -87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -2,
        "feedback": "Tu producto parece malo y barato. Nadie lo quiere comprar (-87.77€)."
      }
    ]
  },
  {
    "id": 177,
    "pregunta": "Un cliente quiere devolver un artículo, pero no trae el ticket de compra en papel.",
    "opciones": [
      "Le tratas de ladrón y le dices que sin papel no hay devolución posible.",
      "Usas tu sistema informático, buscas la transacción con su tarjeta o tarjeta de fidelidad, y emites un vale.",
      "Le devuelves el dinero en efectivo sin pedir ninguna prueba para quitarte el problema."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -8,
        "feedback": "Te pones a la defensiva y pierdes a un cliente por ser inflexible con tu propia tecnología (-87.77€)."
      },
      {
        "movimientos": [],
        "reputacion": 5,
        "feedback": "Demuestras estar digitalizado. Solucionas el problema del cliente y retienes el dinero (0€)."
      },
      {
        "movimientos": [
          { "dinero": -100.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -2,
        "feedback": "Dejas la puerta abierta a fraudes continuos y descuadras gravemente tu caja diaria (-100€)."
      }
    ]
  },
  {
    "id": 178,
    "pregunta": "Un cliente ha atascado el baño de tu local (o causado una pequeña inundación accidental).",
    "opciones": [
      "Gritas al cliente exigiéndole que lo limpie él mismo con la fregona.",
      "Cierras el negocio el resto del día porque te da demasiado asco limpiarlo.",
      "Clausuras el baño temporalmente, lo limpias rápido (o llamas a tu seguro) y sigues atendiendo con calma."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -10,
        "feedback": "Creas un drama enorme. El cliente huye y los demás se van incómodos (-131.65€)."
      },
      {
        "movimientos": [
          { "dinero": -175.54, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Pierdes ventas valiosas por un contratiempo operativo común que deberías saber resolver (-175.54€)."
      },
      {
        "movimientos": [],
        "reputacion": 5,
        "feedback": "Actúas como un líder resolutivo. Proteges la operativa de tu empresa y no pierdes caja (0€)."
      }
    ]
  },
  {
    "id": 179,
    "pregunta": "Hay un retraso en las carreteras y tu proveedor de mercancía clave te avisa de que tardará dos días más en llegar.",
    "opciones": [
      "Tienes un 'Stock de Seguridad' (margen de inventario mínimo) bien calculado, así que sigues vendiendo.",
      "Haces un pedido urgente a otro país que tarda aún más en llegar por aduanas.",
      "Te quedas sin producto, cierras y pones un cartel culpando al proveedor."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 5,
        "feedback": "Una buena gestión de inventario hace que los clientes ni noten el problema logístico (0€)."
      },
      {
        "movimientos": [
          { "dinero": -150.0, "categoria_pnl": "Suministros" }
        ],
        "reputacion": -2,
        "feedback": "Tiras el dinero en envíos exprés inútiles y sigues sin poder vender el producto estrella (-150€)."
      },
      {
        "movimientos": [
          { "dinero": -131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Dar excusas en un cartel no te devuelve las ventas perdidas ni da buena imagen (-131.65€)."
      }
    ]
  },
  {
    "id": 180,
    "pregunta": "Un cliente experto en tu sector te hace una pequeña corrección técnica sobre un producto de forma amable.",
    "opciones": [
      "Te ofendes y le dices que el jefe eres tú.",
      "Agradeces la corrección, aprendes de él y mejoras tu discurso de venta para el futuro.",
      "Le ignoras, no tienes por qué escuchar a nadie."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Tu arrogancia te hace perder ventas de clientes que saben perfectamente lo que buscan (-87.77€)."
      },
      {
        "movimientos": [
          { "dinero": 87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "La humildad es rentable. Mejoras como profesional y ese cliente vuelve a comprarte (+87.77€ futuros)."
      },
      {
        "movimientos": [],
        "reputacion": -2,
        "feedback": "Te estancas y la competencia que sí escucha acaba adelantándote poco a poco (0€)."
      }
    ]
  },
  {
    "id": 181,
    "pregunta": "Un proveedor nuevo te ofrece una materia prima o producto casi idéntico al que usas, pero muchísimo más barato y sin marca conocida.",
    "opciones": [
      "Cambias de inmediato toda tu producción/inventario al producto barato para ganar más dinero.",
      "Pides una pequeña muestra, la pruebas internamente y decides si mantiene tus estándares de calidad.",
      "Le dices agresivamente que tú solo vendes primeras marcas y le echas."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -8,
        "feedback": "La calidad resulta ser pésima, los clientes se quejan y devuelven los productos (-131.65€)."
      },
      {
        "movimientos": [],
        "reputacion": 5,
        "feedback": "Eres prudente. Si funciona, mejorarás tu margen; si no, no pierdes nada (0€, proteges tu calidad)."
      },
      {
        "movimientos": [],
        "reputacion": -2,
        "feedback": "Pierdes una oportunidad de investigar cómo abaratar costes (0€)."
      }
    ]
  },
  {
    "id": 182,
    "pregunta": "Un cliente te pide que le hagas el servicio o le vendas el producto 'sin factura' para ahorrarse el IGIC.",
    "opciones": [
      "Le explicas educadamente que tu negocio es 100% legal y que emitir factura es obligatorio.",
      "Aceptas encantado, así tú también te ahorras declarar esa venta a Hacienda.",
      "Le cobras el IGIC pero no haces la factura, quedándote tú con el dinero extra."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Mantienes la integridad de tu negocio. El cliente acepta a regañadientes pero compra (+87.77€ limpios y legales)."
      },
      {
        "movimientos": [
          { "dinero": -300.0, "categoria_pnl": "Impuestos" }
        ],
        "reputacion": -8,
        "feedback": "Fomentas la economía sumergida y asumes un riesgo fiscal enorme (-300€ por posible inspección)."
      },
      {
        "movimientos": [
          { "dinero": -500.0, "categoria_pnl": "Impuestos" }
        ],
        "reputacion": -10,
        "feedback": "Cometes un fraude doble que destruirá tu negocio si te descubren (-500€ en sanciones)."
      }
    ]
  },
  {
    "id": 183,
    "pregunta": "Un negocio vecino se queja de que tus cajas de cartón están ocupando parte de su fachada cuando las sacas a reciclar.",
    "opciones": [
      "Le dices que la calle es de todos y que las seguirás dejando ahí.",
      "Tiras las cajas sin doblar en cualquier contenedor para no verle la cara.",
      "Pides disculpas, doblas bien los cartones y acuerdas con él un lugar que no moleste a nadie."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -150.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -5,
        "feedback": "El vecino te denuncia al Ayuntamiento por invasión de la vía pública (-150€)."
      },
      {
        "movimientos": [
          { "dinero": -200.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -5,
        "feedback": "Te cae una multa por reciclaje indebido y ensuciar la calle (-200€)."
      },
      {
        "movimientos": [],
        "reputacion": 5,
        "feedback": "Cuidas las relaciones vecinales, lo cual es vital para el comercio local (0€)."
      }
    ]
  },
  {
    "id": 184,
    "pregunta": "Analizando un día de mucho trabajo, te das cuenta de que hay un 'cuello de botella': una sola persona cobrando en la caja mientras la cola crece.",
    "opciones": [
      "Cierras la puerta para que no entre más gente hasta que se vacíe la cola.",
      "Inviertes en un segundo terminal de cobro (TPV) móvil o reorganizas al equipo para que alguien más pueda cobrar.",
      "Pones un cartel pidiendo a los clientes que tengan paciencia."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -175.54, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Dejas dinero literalmente en la calle y ahuyentas a la gente (-175.54€)."
      },
      {
        "movimientos": [
          { "dinero": 175.54, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Agilizas las operaciones, los clientes se van felices y facturas mucho más por hora (+175.54€)."
      },
      {
        "movimientos": [
          { "dinero": -87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -3,
        "feedback": "La gente odia esperar; algunos abandonan sus compras en el mostrador (-87.77€)."
      }
    ]
  },
  {
    "id": 185,
    "pregunta": "Uno de tus empleados te comenta en privado que otro compañero se pasa el día mirando el móvil y no atiende a los clientes.",
    "opciones": [
      "Te reúnes con el empleado señalado, revisas las normas de uso del móvil y le pones objetivos claros.",
      "Despides al empleado señalado inmediatamente sin preguntar su versión.",
      "Le dices al empleado que se quejó que no sea un chivato y que se meta en sus asuntos."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 5,
        "feedback": "Ejerces tu rol de gerente. Corriges el problema a tiempo y la productividad vuelve a subir (0€)."
      },
      {
        "movimientos": [
          { "dinero": -400.0, "categoria_pnl": "Personal y SS" }
        ],
        "reputacion": -8,
        "feedback": "Te cae una demanda por despido improcedente y destrozas la moral del resto (-400€)."
      },
      {
        "movimientos": [
          { "dinero": -131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "El empleado trabajador se desmotiva y el empleado vago sigue haciéndote perder ventas (-131.65€)."
      }
    ]
  },
  {
    "id": 186,
    "pregunta": "Recibes un correo electrónico que parece de tu compañía de luz diciendo que tienes una factura impagada y te cortarán el suministro hoy mismo.",
    "opciones": [
      "Pagas el recibo rápidamente introduciendo tu tarjeta en el enlace que te mandan.",
      "Entras en pánico y echas el cierre por miedo a que se apague todo.",
      "Ignoras el correo, accedes a tu cuenta real desde la web oficial de tu compañía y confirmas que todo está pagado."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -300.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -2,
        "feedback": "Has sido víctima de phishing. Los estafadores te roban el dinero y clonan tu tarjeta (-300€)."
      },
      {
        "movimientos": [
          { "dinero": -131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Pierdes todo un día de facturación por no saber mantener la calma (-131.65€)."
      },
      {
        "movimientos": [],
        "reputacion": 4,
        "feedback": "Proteges tus finanzas con sentido común y educación digital (0€)."
      }
    ]
  },
  {
    "id": 187,
    "pregunta": "Tu equipo (o tú mismo) lleva meses trabajando duro. Notas que hace falta un poco de motivación y hacer piña.",
    "opciones": [
      "Organizas un desayuno especial o una pequeña actividad de equipo ('Team Building') pagada por la empresa.",
      "Les dices que den las gracias de tener un trabajo.",
      "Les prometes una cena enorme, pero a última hora la cancelas por 'motivos de presupuesto'."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 8,
        "feedback": "Inviertes poco dinero pero el equipo vuelve con una energía increíble que dispara las ventas (+131.65€)."
      },
      {
        "movimientos": [
          { "dinero": -87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -8,
        "feedback": "Generas un ambiente tóxico. La falta de reconocimiento hace que la atención al cliente empeore (-87.77€)."
      },
      {
        "movimientos": [
          { "dinero": -131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -10,
        "feedback": "Destruyes por completo la confianza de tu plantilla hacia ti (-131.65€)."
      }
    ]
  },
  {
    "id": 188,
    "pregunta": "Hay un día de fiesta local en tu barrio y la calle se llena de gente que normalmente no pasa por ahí.",
    "opciones": [
      "Cierras y te vas de fiesta tú también, el negocio puede esperar.",
      "Decoras la puerta, pones música acorde a la fiesta y ofreces un producto gancho a la gente que pasea.",
      "Te enfadas por el ruido y cierras la persiana a la mitad para que no te molesten."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": -2,
        "feedback": "Pierdes una gran oportunidad de visibilidad gratuita y posibles ventas (0€)."
      },
      {
        "movimientos": [
          { "dinero": 175.54, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 8,
        "feedback": "Eres comercialmente agresivo. Captas clientes nuevos y tu caja revienta de alegría (+175.54€)."
      },
      {
        "movimientos": [
          { "dinero": -87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Espantas a los pocos clientes que querían entrar (-87.77€)."
      }
    ]
  },
  {
    "id": 189,
    "pregunta": "Hoy es uno de esos días donde una tormenta espantosa de viento y lluvia no deja a nadie salir a la calle.",
    "opciones": [
      "Te pasas el día mirando el reloj y quejándote de tu mala suerte.",
      "Cierras el local de forma improvisada, y un cliente que iba a recoger un pedido no puede hacerlo.",
      "Aprovechas que no hay nadie para hacer inventario, cuadrar números y hacer limpieza a fondo."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": -2,
        "feedback": "Pierdes el día y tu actitud decae para el resto de la semana (0€)."
      },
      {
        "movimientos": [
          { "dinero": -131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -8,
        "feedback": "El cliente se enfada muchísimo, te exige una devolución y deja una mala reseña (-131.65€)."
      },
      {
        "movimientos": [
          { "dinero": 43.88, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Rentabilizas el tiempo al máximo. Ahorras horas extra y preparas el negocio (+43.88€ de productividad)."
      }
    ]
  },
  {
    "id": 190,
    "pregunta": "Notas que los clientes vienen una vez, pero les cuesta acordarse de volver el mes siguiente.",
    "opciones": [
      "Creas un pequeño programa de puntos sencillo (tarjeta física o digital) para incentivar su vuelta.",
      "Inviertes 500€ en anuncios genéricos esperando que alguien nuevo venga.",
      "Los interrogas de forma pesada cuando están en la caja preguntándoles cuándo volverán."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 8,
        "feedback": "Aumentas la retención de clientes. Vuelven más rápido y recomiendan a sus amigos (+131.65€)."
      },
      {
        "movimientos": [
          { "dinero": -300.0, "categoria_pnl": "Publicidad" }
        ],
        "reputacion": 0,
        "feedback": "Gastas demasiado en captar nuevos en vez de cuidar a los que ya tienes (-300€)."
      },
      {
        "movimientos": [
          { "dinero": -87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Los clientes se sienten acosados y deciden no volver (-87.77€)."
      }
    ]
  },
  {
    "id": 191,
    "pregunta": "Tu equipo de trabajo (ordenadores, hornos, furgoneta, datáfonos...) lleva un año sin revisión.",
    "opciones": [
      "Esperas pacientemente a que se rompan del todo para comprar unos nuevos.",
      "Intentas abrir y engrasar tú los equipos viendo un vídeo de YouTube aunque no seas experto.",
      "Llamas a un técnico para hacer un mantenimiento preventivo general que te cuesta unos 80€."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -400.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -2,
        "feedback": "El equipo principal se rompe un viernes por la tarde y tienes que paralizar la empresa (-400€)."
      },
      {
        "movimientos": [
          { "dinero": -250.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -2,
        "feedback": "Estropeas un componente clave y te anulan la garantía oficial de la marca (-250€)."
      },
      {
        "movimientos": [],
        "reputacion": 5,
        "feedback": "Inviertes inteligentemente. Alargas la vida útil de tus herramientas de trabajo (0€)."
      }
    ]
  },
  {
    "id": 192,
    "pregunta": "Un cliente se deja olvidado en el mostrador un objeto de mucho valor (un móvil, una cartera, unas gafas caras).",
    "opciones": [
      "Te lo quedas pensando que 'quien se fue a la villa perdió su silla'.",
      "Lo guardas a buen recaudo y usas tu base de datos para intentar contactarle por teléfono o email rápidamente.",
      "Lo dejas encima del mostrador sin vigilancia hasta que vuelva a por ello."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -500.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -10,
        "feedback": "Eres denunciado por apropiación indebida y manchas el nombre de tu empresa (-500€)."
      },
      {
        "movimientos": [
          { "dinero": 131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 10,
        "feedback": "El cliente vuelve, se emociona por tu honestidad y se convierte en embajador leal (+131.65€)."
      },
      {
        "movimientos": [
          { "dinero": -87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Otro cliente lo roba. El cliente original te culpa a ti de negligencia (-87.77€)."
      }
    ]
  },
  {
    "id": 193,
    "pregunta": "Te llega la factura de la electricidad y casi te da un infarto. Sigue subiendo sin parar.",
    "opciones": [
      "Llamas a tres compañías distintas, comparas tarifas y cambias a una más eficiente con horarios adaptados a tu negocio.",
      "Pagas resignado porque 'todas las compañías son iguales'.",
      "Decides trabajar casi a oscuras para ahorrar, quitando las luces del escaparate y del rótulo."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 87.77, "categoria_pnl": "Suministros" }
        ],
        "reputacion": 3,
        "feedback": "Ejerces de gestor. Reduces tus costes fijos mensuales y mejoras tu rentabilidad (+87.77€ de ahorro)."
      },
      {
        "movimientos": [
          { "dinero": -150.0, "categoria_pnl": "Suministros" }
        ],
        "reputacion": 0,
        "feedback": "Sigues sangrando liquidez mes a mes sin necesidad (-150€)."
      },
      {
        "movimientos": [
          { "dinero": -131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Tu negocio parece cerrado o triste. Los clientes dejan de entrar (-131.65€)."
      }
    ]
  },
  {
    "id": 194,
    "pregunta": "Un cliente importantísimo te exige que le entregues un pedido gigante para 'mañana a primera hora', algo humanamente imposible.",
    "opciones": [
      "Le dices que sí por miedo a perderle, aunque sabes que no vas a cumplir.",
      "Te pasas toda la noche trabajando sin dormir, al día siguiente haces mal el trabajo y te equivocas.",
      "Le hablas con honestidad, le explicas los plazos de calidad y llegas a un acuerdo razonable para ambos."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -175.54, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -8,
        "feedback": "Incumples la promesa. El cliente se siente engañado y no te vuelve a comprar nunca (-175.54€)."
      },
      {
        "movimientos": [
          { "dinero": -300.0, "categoria_pnl": "Suministros" }
        ],
        "reputacion": -5,
        "feedback": "El cliente devuelve el pedido por estar mal hecho y tú acabas perdiendo dinero y tiempo (-300€)."
      },
      {
        "movimientos": [
          { "dinero": 131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 8,
        "feedback": "Ganas el respeto del cliente por tu seriedad y cierras una venta excelente (+131.65€)."
      }
    ]
  },
  {
    "id": 195,
    "pregunta": "Tienes una inspección sorpresa de la Agencia Tributaria. Han detectado que usas un software de 'doble uso' para borrar ventas en efectivo y no pagar IGIC.",
    "opciones": [
      "Intentas borrar los archivos del ordenador delante del inspector antes de que los copie.",
      "La inspección encuentra las pruebas. Tú niegas todo y dices que es culpa de tu gestor informático.",
      "Estás totalmente tranquilo. Trabajas con un software de facturación certificado legalmente y declaras todas tus ventas."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -3000.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -10,
        "feedback": "Obstrucción a la justicia y destrucción de pruebas. La ruina penal de tu negocio (-3.000€)."
      },
      {
        "movimientos": [
          { "dinero": -2500.0, "categoria_pnl": "Impuestos" }
        ],
        "reputacion": -10,
        "feedback": "Eres el responsable final del fraude fiscal de tu empresa. Sanción demoledora (-2.500€)."
      },
      {
        "movimientos": [],
        "reputacion": 5,
        "feedback": "Tu ética empresarial te salva. La inspección se cierra sin sanciones (0€)."
      }
    ]
  },
  {
    "id": 196,
    "pregunta": "El Ayuntamiento decide peatonalizar la calle de tu negocio. Durante las obras no podrán entrar coches.",
    "opciones": [
      "Organizas una recogida de firmas furiosa e intentas paralizar las obras del Ayuntamiento.",
      "Te quejas a los clientes todos los días sobre cómo 'el Ayuntamiento quiere arruinarte'.",
      "Aprovechas la ocasión: potencias tus redes sociales, ofreces envío y te preparas para los peatones."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": -2,
        "feedback": "Pierdes tiempo, energía y no consigues parar las obras. (0€, pero pierdes ventas por inacción)."
      },
      {
        "movimientos": [
          { "dinero": -87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Aburres a los pocos clientes que van y generas un aura muy negativa (-87.77€)."
      },
      {
        "movimientos": [
          { "dinero": 131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 8,
        "feedback": "Adaptas tu estrategia. Bajan las ventas físicas pero las salvas por internet y creces (+131.65€)."
      }
    ]
  },
  {
    "id": 197,
    "pregunta": "Se organiza un encuentro de comerciantes (networking) de tu zona para potenciar el consumo en el barrio.",
    "opciones": [
      "Vas con las pilas cargadas, llevas tarjetas y propones hacer promociones conjuntas con otros locales.",
      "No vas porque consideras a todos los demás como enemigos y competencia.",
      "Vas solo por la comida gratis y te quedas en una esquina sin hablar con nadie."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 175.54, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 8,
        "feedback": "Creas sinergias brutales. Los vecinos empiezan a recomendarte mutuamente (+175.54€)."
      },
      {
        "movimientos": [],
        "reputacion": -2,
        "feedback": "Te aíslas comercialmente. Mientras otros crecen juntos, tú te estancas (0€)."
      },
      {
        "movimientos": [
          { "dinero": -43.88, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Das una impresión antisocial y desaprovechas una oportunidad clave (-43.88€)."
      }
    ]
  },
  {
    "id": 198,
    "pregunta": "Llega la época de pagar el Impuesto de Sociedades o la Declaración de la Renta y te sale bastante a pagar porque el negocio ha ido bien.",
    "opciones": [
      "Entras en shock, no tienes liquidez y pides un crédito urgente porque te gastaste todo.",
      "Lo pagas tranquilamente porque llevas todo el año separando un % de tus beneficios en una cuenta.",
      "Ocultas ingresos a última hora sacando dinero de la caja y borrando tickets."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -250.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -2,
        "feedback": "La mala previsión te obliga a pagar intereses abusivos al banco (-250€)."
      },
      {
        "movimientos": [],
        "reputacion": 5,
        "feedback": "Tienes educación financiera. Cumples tus obligaciones sin sudar una gota (0€ impacto sorpresivo)."
      },
      {
        "movimientos": [
          { "dinero": -400.0, "categoria_pnl": "Impuestos" }
        ],
        "reputacion": -10,
        "feedback": "Te descubren en un cruce de datos con el banco y te sancionan duramente (-400€)."
      }
    ]
  },
  {
    "id": 199,
    "pregunta": "Al revisar el inventario a fin de mes, descubres que hay una discrepancia enorme entre lo que dice tu ordenador y lo que hay en el almacén.",
    "opciones": [
      "Te pasas el fin de semana haciendo un inventario manual exhaustivo y corriges los procesos.",
      "Le echas la culpa al ordenador y decides dejar de usar el programa de inventario.",
      "Cambias los números a mano en el sistema para que 'cuadre' y te olvidas del problema."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 87.77, "categoria_pnl": "Suministros" }
        ],
        "reputacion": 3,
        "feedback": "Encuentras el fallo (hurtos o mal registro) y lo cortas de raíz (+87.77€ en ahorro/eficiencia)."
      },
      {
        "movimientos": [
          { "dinero": -150.0, "categoria_pnl": "Suministros" }
        ],
        "reputacion": -5,
        "feedback": "El descontrol de stock hace que vendas cosas que no tienes (-150€)."
      },
      {
        "movimientos": [
          { "dinero": -200.0, "categoria_pnl": "Suministros" }
        ],
        "reputacion": -5,
        "feedback": "El 'agujero' en el inventario sigue creciendo y perdiendo dinero sin que te des cuenta (-200€)."
      }
    ]
  },
  {
    "id": 200,
    "pregunta": "Has cerrado unas semanas con ventas excepcionales y tienes un volumen de beneficios (liquidez) muy por encima de lo habitual en la cuenta de la empresa.",
    "opciones": [
      "Sacas casi todo el dinero para comprarte un coche de alta gama a nivel personal y aparentar éxito rápido.",
      "Repartes inmediatamente todo el excedente entre tú y tus socios, dejando la cuenta de la empresa casi a cero.",
      "Guardas una parte como fondo de reserva, repartes un pequeño bonus al equipo y destinas el resto a mejoras del negocio."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -500.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -5,
        "feedback": "Descapitalizas la empresa de forma temeraria. Al primer imprevisto, no tendrás cómo responder (-500€ de liquidez)."
      },
      {
        "movimientos": [],
        "reputacion": -2,
        "feedback": "Dejas el negocio sin capacidad de maniobra operativa ni de inversión para seguir creciendo (0€ de crecimiento)."
      },
      {
        "movimientos": [
          { "dinero": 175.54, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 10,
        "feedback": "¡Gran decisión! Eres un gerente previsor. El negocio se capitaliza, el equipo se motiva y creces de forma sostenible (+175.54€)."
      }
    ]
  },
  {
    "id": 201,
    "pregunta": "¡Llega Bad Bunny a tu tienda! Entra con sus guardaespaldas y empieza a mirar productos.",
    "opciones": [
      "Te desmayas de la emoción, te pones a gritar y cierras la puerta para que no salga.",
      "Le sacas fotos a escondidas para venderlas a una revista de cotilleos.",
      "Le tratas como a un cliente VIP normal, le regalas un detalle y le pides si puede etiquetarte en una historia de Instagram."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -331.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Asustas a la estrella, sus guardaespaldas te apartan y se van sin comprar nada (-331.65€ en ventas perdidas)."
      },
      {
        "movimientos": [
          { "dinero": -500.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -10,
        "feedback": "Te cae una demanda por invasión a la privacidad y vulneración de derechos de imagen (-500€)."
      },
      {
        "movimientos": [
          { "dinero": 175.54, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 10,
        "feedback": "La historia se hace viral. Tu local se llena de fans al día siguiente comprando lo mismo que él (+175.54€)."
      }
    ]
  },
  {
    "id": 202,
    "pregunta": "Un grupo de adolescentes entra en tu local, pone un trípode y empieza a grabar un baile de TikTok ocupando todo el pasillo principal.",
    "opciones": [
      "Les echas tres gritos por bloquear el paso a los 'clientes de verdad'.",
      "Te pones detrás de ellos a bailar con uno de tus productos en la mano para salir en el vídeo.",
      "Les ignoras, pero dejas que bloqueen el pasillo durante 45 minutos."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -43.88, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -8,
        "feedback": "Te graban echándoles, te suben a TikTok como 'el dueño amargado' y te hunden a reseñas negativas (-43.88€)."
      },
      {
        "movimientos": [
          { "dinero": 131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 8,
        "feedback": "El vídeo se hace viral localmente, la gente aplaude tu sentido del humor y ganas clientes jóvenes (+131.65€)."
      },
      {
        "movimientos": [
          { "dinero": -87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -2,
        "feedback": "No ganas publicidad, pero los clientes reales se van porque no pueden pasar a comprar (-87.77€)."
      }
    ]
  },
  {
    "id": 203,
    "pregunta": "Entra una cliente hiper-exigente y exige hablar con el encargado porque el color de la pared le da malas vibras.",
    "opciones": [
      "Le das un producto gratis simplemente para que se calle y se vaya.",
      "Te pones a discutir a gritos con ella sobre psicología del color y le insultas.",
      "Usas el humor y mucha diplomacia, le das la razón de forma irónica y desvías su atención hacia una oferta."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -100.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -2,
        "feedback": "La clienta se sale con la suya y volverá a quejarse para llevarse más cosas gratis (-100€)."
      },
      {
        "movimientos": [
          { "dinero": -87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -8,
        "feedback": "El escándalo asusta a tres clientes normales que estaban comprando y se van (-87.77€)."
      },
      {
        "movimientos": [],
        "reputacion": 5,
        "feedback": "Desactivas la bomba con inteligencia emocional. No pierdes dinero y el resto de clientes aplaude en silencio (0€)."
      }
    ]
  },
  {
    "id": 204,
    "pregunta": "Un perrito callejero muy simpático se cuela en la tienda buscando refugio por la lluvia.",
    "opciones": [
      "Le pones un cuenco con agua, le sacas una foto para Instagram buscando a su dueño y le dejas en una esquinita.",
      "Lo sacas a la calle.",
      "Lo ignoras completamente mientras muerde el mobiliario."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 10,
        "feedback": "La historia se hace viral, el dueño aparece y todo el barrio te felicita viniendo a comprar (+87.77€)."
      },
      {
        "movimientos": [
          { "dinero": -131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -10,
        "feedback": "Das una imagen cruel y un cliente animalista te denuncia en redes (-131.65€)."
      },
      {
        "movimientos": [
          { "dinero": -150.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -2,
        "feedback": "El perrito por aburrimiento destroza parte de tu inventario expuesto (-150€)."
      }
    ]
  },
  {
    "id": 205,
    "pregunta": "Un localizador de escenarios entra y te dice que Netflix quiere grabar una escena de su nueva serie en tu negocio mañana.",
    "opciones": [
      "Negocias un alquiler justo por el día de cierre y exiges que el nombre de tu local salga en los créditos.",
      "Les pides 1 millón de euros porque sabes que Netflix tiene mucho dinero.",
      "Les dices que no, que tú no cierras tu negocio por 'peliculitas'."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 900.0, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 10,
        "feedback": "Cobras el alquiler del espacio y la serie te da una publicidad brutal de por vida (+900€ netos)."
      },
      {
        "movimientos": [],
        "reputacion": -2,
        "feedback": "Se ríen en tu cara y se van al negocio de la competencia (0€, pero pierdes una gran oportunidad)."
      },
      {
        "movimientos": [],
        "reputacion": 0,
        "feedback": "Proteges tu día de trabajo habitual, pero desaprovechas una anécdota y un marketing increíble (0€)."
      }
    ]
  },
  {
    "id": 206,
    "pregunta": "Un grupo de turistas te confunde con un actor famosísimo y te empiezan a pedir autógrafos.",
    "opciones": [
      "Falsificas la firma del actor en libretas y les intentas cobrar 50€ a cada uno.",
      "Les hablas mal y les dices que se compren gafas.",
      "Te ríes, les dices la verdad, pero les firmas con el nombre de tu local y les das un descuento."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -300.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -10,
        "feedback": "Incurres en un fraude, se dan cuenta y llaman a la policía local (-300€)."
      },
      {
        "movimientos": [
          { "dinero": -43.88, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Quedas como un antipático y los turistas se van a la tienda de al lado (-43.88€)."
      },
      {
        "movimientos": [
          { "dinero": 87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 8,
        "feedback": "La broma les hace tanta gracia que deciden comprarte recuerdos a ti (+87.77€)."
      }
    ]
  },
  {
    "id": 207,
    "pregunta": "Tu peor ex-pareja entra en la tienda de la mano de su nueva pareja a comprar algo.",
    "opciones": [
      "Te escondes debajo del mostrador y le pides a un cliente que cobre por ti.",
      "Respiras hondo, eres extremadamente profesional y encima logras hacerles una técnica de 'upselling' (venta cruzada).",
      "Les cobras el doble por los productos usando una tarifa 'de venganza'."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Haces el ridículo, la tienda es un caos y pierdes ventas de otros clientes (-87.77€)."
      },
      {
        "movimientos": [
          { "dinero": 87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "La venganza es el éxito. Haces la mejor venta del día y te quedas con la cabeza muy alta (+87.77€)."
      },
      {
        "movimientos": [
          { "dinero": -200.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -8,
        "feedback": "Piden la hoja de reclamaciones por estafa de precios. Te metes en un buen lío legal (-200€)."
      }
    ]
  },
  {
    "id": 208,
    "pregunta": "Una persona disfrazada de 'vidente' entra y te dice que tu local tiene un fantasma que espanta a las ventas.",
    "opciones": [
      "Le pagas 150€ para que queme incienso y haga una limpieza espiritual.",
      "Le das la vuelta a la situación y lanzas una promoción en redes: 'Nuestro producto es tan bueno que hasta los fantasmas vienen a comprarlo'.",
      "Te asustas de verdad y cierras el local dos días seguidos, hasta que te aseguras de que no hay ningún fantasma."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -150.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -2,
        "feedback": "Acabas de ser estafado por un charlatán (-150€)."
      },
      {
        "movimientos": [
          { "dinero": 131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 8,
        "feedback": "Usas el Storytelling para hacer marketing divertido. La gente viene por la anécdota (+131.65€)."
      },
      {
        "movimientos": [
          { "dinero": -175.54, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "La superstición te cuesta dos días de facturación real (-175.54€)."
      }
    ]
  },
  {
    "id": 209,
    "pregunta": "Un cliente habitual rasca un Rasca-y-Gana en la puerta, se entera de que ha ganado 20.000€ y entra gritando de alegría.",
    "opciones": [
      "Le felicitas con efusividad y le recomiendas en broma que celebre llevándose tu producto más exclusivo.",
      "Le exiges que te dé una comisión porque lo rascó en la puerta de tu local.",
      "Intentas quitarle el boleto de las manos en un forcejeo."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 1000.54, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 8,
        "feedback": "En su euforia, te hace caso y te compra el artículo más caro de la tienda de un plumazo (+1000.54€)."
      },
      {
        "movimientos": [
          { "dinero": -43.88, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -8,
        "feedback": "Quedas como un usurero y el cliente, que ahora es rico, no volverá nunca (-43.88€)."
      },
      {
        "movimientos": [
          { "dinero": -500.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -10,
        "feedback": "Te denuncia por intento de robo. Un desastre total (-500€)."
      }
    ]
  },
  {
    "id": 211,
    "pregunta": "Un cliente entra con un loro en el hombro. El loro empieza a repetir tus precios, pero diciendo que todo vale 'un euro'.",
    "opciones": [
      "Te pones a discutir a gritos con el loro diciéndole que miente.",
      "Te ríes a carcajadas, grabas al loro para tu TikTok y ofreces un 5% de descuento a todos los que vengan con mascotas ese día.",
      "Te asustas del pájaro, te encierras en el almacén y llamas a control de animales."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -43.88, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Discutir con un animal te hace parecer un loco ante los demás clientes (-43.88€)."
      },
      {
        "movimientos": [
          { "dinero": 231.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 8,
        "feedback": "El vídeo del loro mentiroso se hace viral y tu promo 'pet-friendly' es un exitazo (+231.65€)."
      },
      {
        "movimientos": [
          { "dinero": -107.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -2,
        "feedback": "Cierras el local por un miedo irracional y pierdes las ventas de la mañana (-107.77€)."
      }
    ]
  },
  {
    "id": 212,
    "pregunta": "Alguien intenta grabar el reto viral de comerse una 'patata picante' en tu tienda, pero empieza a asfixiarse y toser.",
    "opciones": [
      "Te ríes, sacas tu móvil para grabarle y no le ayudas.",
      "Le ayudas dándole agua/leche gratis y te aseguras de que esté bien.",
      "Le ofreces una botella de agua pero le cobras 20€ aprovechando la desesperación."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -175.54, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -10,
        "feedback": "Omisión de socorro. El vídeo se sube a redes y tu negocio queda como un lugar cruel (-175.54€)."
      },
      {
        "movimientos": [
          { "dinero": 87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 8,
        "feedback": "El influencer sube el vídeo agradeciéndote que le salvaste la vida. Ganas miles de seguidores locales (+87.77€)."
      },
      {
        "movimientos": [
          { "dinero": -200.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -10,
        "feedback": "Te tachan de estafador usurero en internet y sufres un boicot brutal (-200€)."
      }
    ]
  },
  {
    "id": 213,
    "pregunta": "Entra una persona vestida con ropa de la época victoriana, muy confundida, preguntándote 'en qué siglo estamos'.",
    "opciones": [
      "Llamas corriendo a urgencias pensando que tiene un brote psicótico.",
      "Le ignoras por completo pensando que es un loco más del barrio.",
      "Le sigues la corriente, le dices que es el siglo XXI y le intentas vender tus productos como 'artefactos del futuro'."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -43.88, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -2,
        "feedback": "Era un actor de una obra de teatro local. Pierdes el tiempo y pasas un mal rato (-43.88€)."
      },
      {
        "movimientos": [],
        "reputacion": 0,
        "feedback": "No pasa absolutamente nada, otra venta perdida por falta de salero (0€)."
      },
      {
        "movimientos": [
          { "dinero": 131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "El actor (y sus compañeros de teatro que miraban fuera) se parten de risa y te compran medio local (+131.65€)."
      }
    ]
  },
  {
    "id": 214,
    "pregunta": "¡Sorpresa! 20 personas empiezan a cantar y bailar de golpe en medio de tu negocio. ¡Es un Flashmob!",
    "opciones": [
      "Sacas el móvil, haces un directo en Instagram etiquetando tu ubicación y animas a la gente de fuera a entrar.",
      "Llamas a la policía por escándalo público e invasión de la propiedad.",
      "Te escondes debajo de la mesa de la caja por vergüenza."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 175.54, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 10,
        "feedback": "El marketing de guerrilla sale gratis. Capitalizas el evento y todos acaban consumiendo (+175.54€)."
      },
      {
        "movimientos": [
          { "dinero": -131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -8,
        "feedback": "Quedas como un 'Grinch' amargado y el barrio entero te coge manía (-131.65€)."
      },
      {
        "movimientos": [],
        "reputacion": -2,
        "feedback": "Pasa el momento y no sacas ningún tipo de provecho económico (0€)."
      }
    ]
  },
  {
    "id": 215,
    "pregunta": "Un cliente empieza a llorar desconsoladamente frente a la caja porque la canción de la radio de tu local le recuerda a su ex.",
    "opciones": [
      "Le cambias la música por un Heavy Metal a todo volumen para que se le pase.",
      "Le ofreces un pañuelo de papel, le dices unas palabras amables y le haces un 5% de 'descuento de desamor'.",
      "Le dices que si va a llorar, que por favor lo haga fuera que espanta a los clientes."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Asustas al cliente y al resto de personas en la tienda (-87.77€)."
      },
      {
        "movimientos": [
          { "dinero": 87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Con empatía consigues no solo tranquilizarle, sino cerrar la venta con una fidelidad eterna (+87.77€ futuros)."
      },
      {
        "movimientos": [
          { "dinero": -131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -8,
        "feedback": "Los demás clientes presencian tu falta de corazón y se van sin comprar (-131.65€)."
      }
    ]
  },
  {
    "id": 216,
    "pregunta": "La ciudad ha organizado un 'Simulacro de Apocalipsis Zombie' (juego de rol en vivo). Varios actores huyen y se meten en tu local pidiendo refugio.",
    "opciones": [
      "Coges la fregona y te lías a escobazos con todos ellos pensando que te quieren robar.",
      "Cierras el local asustado, perdiendo la tarde de ventas.",
      "Les das refugio, te pintas un poco de sangre falsa con un boli rojo y ofreces 'suministros de supervivencia' al público."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -200.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -8,
        "feedback": "Haces daño a un actor, te denuncian y rompes mercancía en la pelea (-200€)."
      },
      {
        "movimientos": [
          { "dinero": -87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -2,
        "feedback": "Te pierdes una tarde de compras muy transitada por el evento en la calle (-87.77€)."
      },
      {
        "movimientos": [
          { "dinero": 175.54, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 8,
        "feedback": "Te adaptas a la gamificación del barrio. Los participantes compran en tu 'refugio' a raudales (+175.54€)."
      }
    ]
  },
  {
    "id": 218,
    "pregunta": "Un niño de 5 años pierde de vista a su madre y empieza a gritar como una sirena de ambulancia en medio de tu negocio.",
    "opciones": [
      "Usas el sistema de altavoces (o levantas la voz amablemente) para buscar a la madre mientras calmas al niño ofreciéndole una pegatina o un vaso de agua.",
      "Te entra un ataque de pánico y te encierras en el baño hasta que se arregle.",
      "Le dejas un megáfono al niño para que grite más fuerte."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 43.88, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 8,
        "feedback": "La madre llega, te agradece infinito cómo cuidaste a su hijo y te hace una compra (+43.88€)."
      },
      {
        "movimientos": [
          { "dinero": -87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -8,
        "feedback": "El caos se apodera del local y los demás clientes huyen (-87.77€)."
      },
      {
        "movimientos": [
          { "dinero": -131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -10,
        "feedback": "El ruido es ensordecedor, los cristales vibran y el caos espanta a todo el barrio (-131.65€)."
      }
    ]
  },
  {
    "id": 219,
    "pregunta": "Un chico con un sombrero de papel de aluminio te dice que no va a comprar nada porque tus productos 'están controlados por el 5G'.",
    "opciones": [
      "Te pones a insultarle y le echas a patadas.",
      "Le das la razón, le engañas diciéndole que tienes un producto 'Anti-5G' y se lo cobras al triple de precio.",
      "Le dices con humor que en tu local no hay cobertura, te ríes con él y consigues que se relaje y compre algo básico."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -43.88, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Montas un escándalo innecesario que daña tu tranquilidad y la de los demás (-43.88€)."
      },
      {
        "movimientos": [],
        "reputacion": -10,
        "feedback": "Le estafas, su familia se entera, te denuncian y tienes que devolver el dinero (0€)."
      },
      {
        "movimientos": [
          { "dinero": 87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Con mano izquierda, consigues hacer una venta hasta a la persona más complicada (+87.77€)."
      }
    ]
  },
  {
    "id": 220,
    "pregunta": "Dos clientas están en la zona de cajas contando el cotilleo (chisme) más espectacular e increíble que has escuchado sobre el alcalde.",
    "opciones": [
      "Dejas de atender al resto de clientes para pegar la oreja e interrumpes para preguntar detalles.",
      "Les mandas callar bruscamente porque 'esto es un sitio respetable'.",
      "Les ofreces probar un producto nuevo mientras sigues cobrando rápido a los demás para no perder el ritmo (y escuchando de fondo)."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Las colas se hacen enormes, la gente se enfada por tu lentitud y se marchan (-131.65€)."
      },
      {
        "movimientos": [
          { "dinero": -87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -8,
        "feedback": "Las clientas se ofenden por tu rudeza, dejan los productos en la mesa y no vuelven (-87.77€)."
      },
      {
        "movimientos": [
          { "dinero": 131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Mantienes la productividad, el servicio es excelente y encima vendes el producto de prueba (+131.65€)."
      }
    ]
  },
  {
    "id": 222,
    "pregunta": "Recibes un billete de 100€ muy sospechoso (crees que es falso), pero la máquina detectora está rota.",
    "opciones": [
      "Lo aceptas de todas formas para no hacer esperar a la cola.",
      "Lo rechazas pidiendo otra forma de pago con mucha educación, alegando que no tienes cambio.",
      "Lo retienes, te niegas a devolvérselo y llamas a la policía a gritos."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -100.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -2,
        "feedback": "El billete era falso. El banco te lo retira y asumes la pérdida íntegra (-100€)."
      },
      {
        "movimientos": [],
        "reputacion": 3,
        "feedback": "Evitas la estafa con mano izquierda y sin generar un conflicto público (0€)."
      },
      {
        "movimientos": [
          { "dinero": -131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -8,
        "feedback": "El billete era falso, pero el cliente, que es muy buen cliente no lo sabía. No volverá jamás a tu tienda por haberlo humillado y habla mal de tu negocio (-131.65€)."
      }
    ]
  },
  {
    "id": 223,
    "pregunta": "Te das cuenta de que el banco te está cobrando una comisión doble por el mantenimiento del datáfono desde hace tres meses.",
    "opciones": [
      "Pones una reclamación formal al banco aportando tus extractos y exiges la devolución.",
      "Das de baja el datáfono de inmediato y vuelves a cobrar solo en efectivo.",
      "No haces nada porque 'los bancos siempre ganan' y te da pereza el papeleo."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 131.65, "categoria_pnl": "Costos Financieros" }
        ],
        "reputacion": 2,
        "feedback": "Haces valer tus derechos. El banco reconoce el error y te abona lo cobrado de más (+131.65€)."
      },
      {
        "movimientos": [
          { "dinero": -175.54, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Quitar el pago con tarjeta te hace perder a la mitad de tus clientes modernos (-175.54€)."
      },
      {
        "movimientos": [
          { "dinero": -150.0, "categoria_pnl": "Costos Financieros" }
        ],
        "reputacion": -2,
        "feedback": "Regalas el dinero de tu empresa a una multinacional por inacción (-150€)."
      }
    ]
  },
  {
    "id": 224,
    "pregunta": "Un joven del barrio entra desesperado pidiéndote si puede pegar en el cristal un cartel buscando a su gato perdido.",
    "opciones": [
      "Le cobras 10€ por el espacio en tu escaparate.",
      "Se lo pones en un lugar destacado y además le haces una foto para subirla a las redes de tu negocio.",
      "Le dices que no, que esos carteles arruinan la estética premium de la tienda."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -10,
        "feedback": "Eres un miserable. El chico se lo cuenta a sus padres y te hacen boicot vecinal (-87.77€)."
      },
      {
        "movimientos": [
          { "dinero": 87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 10,
        "feedback": "Ganas el corazón del barrio. La gente entra a preguntarte por el gato y de paso te compran (+87.77€)."
      },
      {
        "movimientos": [],
        "reputacion": -2,
        "feedback": "Mantienes la estética, pero quedas como alguien poco solidario en la comunidad (0€)."
      }
    ]
  },
  {
    "id": 225,
    "pregunta": "Te contacta una empresa por teléfono ofreciéndote cambiar de compañía de luz con un '50% de descuento asegurado'.",
    "opciones": [
      "Aceptas dando tus datos al instante porque necesitas abaratar costes urgentes.",
      "Pides que te envíen la oferta por correo para leer la letra pequeña y compararla tranquilamente.",
      "Les insultas por interrumpir tu trabajo y les cuelgas."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -200.0, "categoria_pnl": "Suministros" }
        ],
        "reputacion": -2,
        "feedback": "Te meten unos cargos ocultos y permanencia abusiva. El recibo sube en vez de bajar (-200€)."
      },
      {
        "movimientos": [],
        "reputacion": 2,
        "feedback": "Eres un gestor prudente. Descubres que era un engaño comercial y evitas la trampa (0€)."
      },
      {
        "movimientos": [],
        "reputacion": -2,
        "feedback": "Evitas la estafa, pero perder los nervios te deja de mal humor para atender clientes (0€)."
      }
    ]
  },
  {
    "id": 226,
    "pregunta": "Una señora te pide si puede dejarte unas bolsas pesadas de la compra 'cinco minutitos' mientras va a la tienda de enfrente.",
    "opciones": [
      "Aceptas amablemente y se las pones en un rincón seguro detrás de la caja.",
      "Te niegas diciendo que tú no eres una consigna pública.",
      "Aceptas pero le cobras 5€ por el 'servicio de guardamaletas'."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 43.88, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "La señora vuelve, te lo agradece en el alma y por compromiso te hace una pequeña compra (+43.88€)."
      },
      {
        "movimientos": [
          { "dinero": -43.88, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Pierdes la oportunidad de fidelizar a alguien del barrio por no hacer un pequeño favor (-43.88€)."
      },
      {
        "movimientos": [
          { "dinero": -87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -8,
        "feedback": "La señora se ofende, se lleva sus bolsas y le dice a todo el mundo lo usurero que eres (-87.77€)."
      }
    ]
  },
  {
    "id": 227,
    "pregunta": "La comisión de fiestas del barrio te invita a ser 'Patrocinador Oficial' de las verbenas aportando 200€.",
    "opciones": [
      "Aceptas y te aseguras de que tu logo esté bien visible en el escenario y en los folletos.",
      "Rechazas porque lo ves como un gasto inútil que no te traerá clientes directos.",
      "Aceptas pero luego se te olvida enviar el logo y no apareces en ninguna parte."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 175.54, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 8,
        "feedback": "Todo el barrio asocia tu marca con la fiesta. Consigues una reputación e ingresos enormes (+175.54€)."
      },
      {
        "movimientos": [],
        "reputacion": -2,
        "feedback": "Ahorras el dinero, pero eres el único negocio de la calle que no colaboró con el barrio (0€)."
      },
      {
        "movimientos": [
          { "dinero": -200.0, "categoria_pnl": "Publicidad" }
        ],
        "reputacion": -2,
        "feedback": "Pagas el patrocinio pero tiras el dinero a la basura por mala gestión administrativa (-200€)."
      }
    ]
  },
  {
    "id": 228,
    "pregunta": "Se te atasca gravemente el desagüe y el agua del baño empieza a salir hacia la zona de clientes.",
    "opciones": [
      "Cierras la tienda todo el día y contratas de urgencia al fontanero más caro de Google.",
      "Pones toallas viejas, cierras la llave de paso general y avisas a la asistencia de tu seguro.",
      "Te haces el loco y obligas a los clientes a saltar el charco de agua sucia."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -400.0, "categoria_pnl": "Servicios" }
        ],
        "reputacion": -2,
        "feedback": "Te dejas llevar por el pánico, cierras y gastas una fortuna innecesaria (-400€)."
      },
      {
        "movimientos": [],
        "reputacion": 5,
        "feedback": "Contienes la avería. El seguro te envía un profesional gratis y puedes seguir operando (0€)."
      },
      {
        "movimientos": [
          { "dinero": -175.54, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -10,
        "feedback": "Das una imagen repugnante. Los clientes huyen y te ponen una reseña de asco (-175.54€)."
      }
    ]
  },
  {
    "id": 229,
    "pregunta": "Un cliente intenta devolver un producto que huele fatal a tabaco y perfume; claramente lo ha usado en una fiesta y quiere el dinero.",
    "opciones": [
      "Se lo devuelves rápidamente para no montar un numerito.",
      "Le dices con firmeza y educación que el artículo presenta signos claros de uso y no cumple la política de devoluciones.",
      "Te pones a oler el producto delante de todos riéndote de su cara."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -87.77, "categoria_pnl": "Suministros" }
        ],
        "reputacion": -2,
        "feedback": "Acabas de comprar de vuelta un producto invendible que tendrás que tirar (-87.77€)."
      },
      {
        "movimientos": [],
        "reputacion": 5,
        "feedback": "Proteges tu negocio. El cliente se indigna un poco, pero sabe que le has pillado (0€)."
      },
      {
        "movimientos": [
          { "dinero": -131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -8,
        "feedback": "Avergüenzas a una persona públicamente. La tensión asusta al resto de clientes (-131.65€)."
      }
    ]
  },
  {
    "id": 230,
    "pregunta": "Una excavadora en la calle rompe accidentalmente una tubería principal de gas. La policía acordona y desaloja toda tu manzana durante 5 días.",
    "opciones": [
      "Te enfrentas a la policía diciendo que a ti nadie te cierra el negocio y te metes a la fuerza.",
      "Cierras resignado, pero activas el reparto a domicilio desde tu casa o haces campañas de venta aplazada por redes sociales.",
      "Llamas a tu corredor de seguros para activar la cláusula de 'Lucro Cesante' (pérdida de beneficios) por fuerza mayor."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -3000.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -10,
        "feedback": "Cometes un delito de desobediencia en una emergencia. Arresto, cierre y multa (-3.000€)."
      },
      {
        "movimientos": [
          { "dinero": -1000.0, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Eres un luchador, pero las ventas se desploman sin la tienda física abierta (-1.000€)."
      },
      {
        "movimientos": [],
        "reputacion": 8,
        "feedback": "Estar bien asegurado salva tu año. Te indemnizan por los días cerrados y no pierdes liquidez (0€)."
      }
    ]
  },
  {
    "id": 231,
    "pregunta": "Revisando las cámaras o el stock, descubres a un empleado dándole productos gratis a sus amigos en sus turnos.",
    "opciones": [
      "Le despides de forma fulminante y justificada aportando las pruebas legales.",
      "Le dejas pasar con una advertencia verbal para que no se enfade.",
      "Le cobras a él los productos multiplicados por tres deduciéndolo de su nómina."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 5,
        "feedback": "Cortas un robo interno con las herramientas legales correctas (0€ impacto, salvas rentabilidad)."
      },
      {
        "movimientos": [
          { "dinero": -150.0, "categoria_pnl": "Suministros" }
        ],
        "reputacion": -5,
        "feedback": "El empleado sabe que no tienes autoridad y lo seguirá haciendo de forma más discreta (-150€)."
      },
      {
        "movimientos": [
          { "dinero": -500.0, "categoria_pnl": "Personal y SS" }
        ],
        "reputacion": -8,
        "feedback": "Cobrar 'multas' en nómina es ilegal. Te demanda a Inspección de Trabajo y te sancionan (-500€)."
      }
    ]
  },
  {
    "id": 232,
    "pregunta": "Te llega un pedido enorme de inventario que estabas esperando, pero al abrir las cajas huelen a humedad y moho.",
    "opciones": [
      "Rechazas el pedido en la puerta sin firmar y exiges al proveedor uno nuevo y urgente.",
      "Te lo quedas, lo limpias con trapos y esperas que los clientes no lo noten.",
      "Te lo quedas y pides al proveedor un 50% de descuento por venir defectuoso."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 5,
        "feedback": "Proteges la calidad de tu marca. El proveedor asume su error logístico (0€)."
      },
      {
        "movimientos": [
          { "dinero": -175.54, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -10,
        "feedback": "Los clientes lo notan perfectamente, piden devoluciones masivas y hablan mal de ti (-175.54€)."
      },
      {
        "movimientos": [
          { "dinero": -87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Bajas tu calidad por dinero. Vender algo malo aunque te cueste barato daña tu imagen (-87.77€)."
      }
    ]
  },
  {
    "id": 233,
    "pregunta": "Pones un cartel en la puerta con un chiste que a ti te parece muy gracioso, pero resulta que ofende a mucha gente del barrio.",
    "opciones": [
      "Te disculpas sinceramente, quitas el cartel y explicas que no mediste bien las consecuencias.",
      "Le dices a todo el que se queje que son unos amargados y que les falta sentido del humor.",
      "Le haces una foto al ofendido y te ríes de él en redes sociales."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 5,
        "feedback": "Rectificar es de sabios. Desactivas la crisis de relaciones públicas al instante (0€)."
      },
      {
        "movimientos": [
          { "dinero": -131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -8,
        "feedback": "Atacas a tus clientes potenciales. Se organizan para dejar de ir a comprarte (-131.65€)."
      },
      {
        "movimientos": [
          { "dinero": -300.0, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -10,
        "feedback": "Te ganas un linchamiento digital y una posible demanda por derecho al honor (-300€ en pérdidas)."
      }
    ]
  },
  {
    "id": 234,
    "pregunta": "Llevas todo el día trabajando solo, tienes muchísima hambre y necesitas ir al baño urgentemente.",
    "opciones": [
      "Pones un cartel de 'Vuelvo en 10 minutos', te encierras en la trastienda, solucionas tus necesidades y vuelves.",
      "Te pones a comerte un bocadillo de tortilla enorme mientras atiendes y cobras en la caja.",
      "Cierras dos horas enteras porque consideras que tienes derecho a descansar a tu ritmo."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 3,
        "feedback": "La gente entiende que eres humano. Esperan 10 minutos sin problema (0€)."
      },
      {
        "movimientos": [
          { "dinero": -43.88, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -8,
        "feedback": "Atiendes masticando. Das una imagen poco higiénica y muy poco profesional (-43.88€)."
      },
      {
        "movimientos": [
          { "dinero": -87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Pierdes dos horas completas de facturación un día laborable de forma injustificada (-87.77€)."
      }
    ]
  },
  {
    "id": 236,
    "pregunta": "Llega la campaña de rebajas. Tu competencia pone carteles gigantes de 'Hasta -70%'.",
    "opciones": [
      "Haces lo mismo, pero antes inflas los precios artificialmente (práctica ilegal).",
      "Ofreces descuentos reales y transparentes solo en los productos que puedes permitirte o quieres liquidar.",
      "Entras en pánico y vendes todos tus productos a pérdidas para que no te ganen."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -400.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -10,
        "feedback": "Consumo detecta la estafa de inflar precios y te pone una sanción ejemplarizante (-400€)."
      },
      {
        "movimientos": [
          { "dinero": 131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Generas confianza, liberas stock antiguo y mantienes la rentabilidad sana (+131.65€)."
      },
      {
        "movimientos": [
          { "dinero": -200.0, "categoria_pnl": "Suministros" }
        ],
        "reputacion": 0,
        "feedback": "Tienes la tienda llena, pero estás perdiendo dinero en cada producto que vendes (-200€ en margen)."
      }
    ]
  },
  {
    "id": 237,
    "pregunta": "Empieza a oler muy mal en la calle. Un contenedor de basura cercano se ha roto y está derramando líquidos justo hacia tu puerta.",
    "opciones": [
      "Llamas al Ayuntamiento repetidamente dando avisos hasta que mandan una brigada especial de limpieza.",
      "Lo ignoras diciendo que la calle no es tu problema.",
      "Echas lejía a lo loco en la acera y provocas unas manchas blancas gigantes en la vía pública."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 5,
        "feedback": "Insistes en los canales oficiales y consigues que adecenten la zona sin exponerte (0€)."
      },
      {
        "movimientos": [
          { "dinero": -131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "El olor es tan asqueroso que nadie quiere pasar por delante ni entrar a comprar (-131.65€)."
      },
      {
        "movimientos": [
          { "dinero": -150.0, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -5,
        "feedback": "El Ayuntamiento te manda una multa por dañar el pavimento público con productos químicos corrosivos (-150€)."
      }
    ]
  },
  {
    "id": 238,
    "pregunta": "¡Hito desbloqueado! Tu cuenta de Instagram/TikTok acaba de llegar a los 10.000 seguidores.",
    "opciones": [
      "No le das ninguna importancia, los 'likes' no pagan facturas.",
      "Haces un gran sorteo para celebrarlo y pedir a tu comunidad que recomiende tu marca a un amigo.",
      "Te vienes arriba y te compras 10.000 seguidores falsos con bots para parecer aún más grande."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 0,
        "feedback": "Desaprovechas un hito excelente para fidelizar y mostrar tu crecimiento (0€ extra)."
      },
      {
        "movimientos": [
          { "dinero": 175.54, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 10,
        "feedback": "Creas un ruido mediático brutal en el barrio, el sorteo te trae clientes masivos (+175.54€)."
      },
      {
        "movimientos": [
          { "dinero": -100.0, "categoria_pnl": "Publicidad" }
        ],
        "reputacion": -8,
        "feedback": "El algoritmo detecta los bots, bloquea tu alcance y tus clientes se dan cuenta del engaño (-100€)."
      }
    ]
  },
  {
    "id": 239,
    "pregunta": "Una clienta viene a pagarte una compra de 15€ dándote un bote lleno exclusivamente de monedas de 1, 2 y 5 céntimos.",
    "opciones": [
      "Le dices de forma desagradable que no eres un banco y le echas.",
      "Aceptas el dinero con una sonrisa y paciencia, total, ¡es dinero legal y te sirve de cambio!",
      "Cuentas el dinero a regañadientes, resoplando fuerte y mirando el reloj constantemente."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -43.88, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -8,
        "feedback": "La señora se va ofendida, no te hace la compra y te critica con las vecinas (-43.88€)."
      },
      {
        "movimientos": [
          { "dinero": 43.88, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 8,
        "feedback": "La señora agradece tu paciencia, se vuelve cliente fiel y encima ahora tienes mucho cambio en la caja (+43.88€ futuros)."
      },
      {
        "movimientos": [],
        "reputacion": -5,
        "feedback": "Haces sentir muy incómoda a la clienta, que preferirá ir a otro lado la próxima vez (0€)."
      }
    ]
  },
  {
    "id": 240,
    "pregunta": "Llega la hora de abrir y por una avería mundial, TODOS los sistemas de pago con tarjeta en España (como Redsys) se han caído.",
    "opciones": [
      "Avisas amablemente al entrar con un cartel: 'Hoy la tecnología falla, cobramos en Efectivo o Bizum'.",
      "Dejas que la gente compre y cuando llegan a la caja, si no tienen efectivo, les haces dejar los productos bruscamente.",
      "Te pones a llorar frente a los clientes porque la tecnología siempre te boicotea."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 5,
        "feedback": "Eres proactivo. Los clientes saben a qué atenerse y sacan efectivo antes de entrar (0€ de pérdida)."
      },
      {
        "movimientos": [
          { "dinero": -131.65, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -8,
        "feedback": "Generas colas, cabreos y la gente abandona carritos llenos que luego debes ordenar (-131.65€)."
      },
      {
        "movimientos": [
          { "dinero": -87.77, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Tu falta de resiliencia y liderazgo transmite muchísima inseguridad a los compradores (-87.77€)."
      }
    ]
  },
  {
    "id": 241,
    "formato": "correo",
    "remitente": "Cabildo",
    "email": "ayudas@cabildo.es",
    "destinatario": "Tu empresa",
    "fecha": "12 de marzo de 2026 · 09:34",
    "asunto": "Convocatoria de ayudas al emprendimiento",
    "mensaje": "Buenos días,\n\nLe informamos de que se ha abierto una convocatoria de ayudas para empresas de nueva creación.\n\nDispone de 15 días para presentar la documentación requerida.\n\nPuede consultar toda la información en la sede electrónica.",
    "firma": "Atentamente,\n\nÁrea de Promoción Económica\nCabildo",
    "adjunto": "Convocatoria_Ayudas_2026.pdf",
    "opciones": [
      "Preparar toda la documentación y presentar la solicitud.",
      "Esperar unos días antes de revisarlo.",
      "Ignorar el correo porque es mucho papeleo."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 1200, "categoria_pnl": "Subvenciones" }
        ],
        "reputacion": 2,
        "feedback": "Obtienes una ayuda económica para impulsar tu negocio."
      },
      {
        "movimientos": [
          { "dinero": 400, "categoria_pnl": "Subvenciones" }
        ],
        "reputacion": 0,
        "feedback": "La solicitud llega tarde y recibes una ayuda menor."
      },
      {
        "movimientos": [],
        "reputacion": -2,
        "feedback": "Pierdes la oportunidad de acceder a la subvención."
      }
    ]
  },
  {
    "id": 242,
    "formato": "correo",
    "remitente": "Agencia Creativa 'El Faro'",
    "email": "hola@agenciaelfaro.es",
    "destinatario": "Tu empresa",
    "fecha": "03 de agosto de 2026 · 11:15",
    "asunto": "Propuesta de campaña publicitaria local",
    "mensaje": "Hola, equipo.\n\nTras nuestra reunión de la semana pasada, os adjuntamos la propuesta formal para la campaña de buzoneo y anuncios en redes sociales enfocada en captar clientes de los barrios cercanos.\n\nSi damos el visto bueno hoy, podemos lanzar los anuncios el próximo lunes.\n\nQuedo a la espera de vuestra confirmación.",
    "firma": "Saludos,\n\nCarlos Mendoza\nDirector de Cuentas",
    "adjunto": "Propuesta_Comercial_Agosto.pdf",
    "opciones": [
      "Aprobar la campaña completa sin cambios para maximizar el alcance.",
      "Solicitar solo la parte de redes sociales para abaratar costes.",
      "Rechazar la propuesta por falta de presupuesto actual."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -800, "categoria_pnl": "Publicidad" },
          { "dinero": 1800, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "La campaña funciona. Aunque inviertes 800 € en publicidad, consigues aumentar las ventas y recuperar la inversión con beneficio."
      },
      {
        "movimientos": [
          { "dinero": -300, "categoria_pnl": "Publicidad" },
          { "dinero": 700, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 3,
        "feedback": "La campaña en redes sociales tiene un coste reducido y genera nuevas ventas."
      },
      {
        "movimientos": [],
        "reputacion": 0,
        "feedback": "No inviertes en publicidad y las ventas se mantienen sin cambios."
      }
    ]
  },
  {
    "id": 243,
    "formato": "correo",
    "remitente": "Departamento de Seguridad Bancaria",
    "email": "alertas@bancocentral-seguridad.com",
    "destinatario": "Tu empresa",
    "fecha": "14 de agosto de 2026 · 16:42",
    "asunto": "URGENTE: Verifique sus credenciales bancarias",
    "mensaje": "Estimado cliente,\n\nHemos detectado un inicio de sesión inusual en su cuenta corporativa desde una ubicación no reconocida.\n\nPor motivos de seguridad, hemos suspendido temporalmente sus transferencias salientes. Para restaurar el servicio, descargue el documento adjunto, rellene sus credenciales y reenvíelo a la mayor brevedad.",
    "firma": "Departamento de Prevención de Fraude\nSu Entidad Bancaria",
    "adjunto": "Formulario_Desbloqueo.exe",
    "opciones": [
      "Descargar el adjunto y enviar los datos rápidamente para no bloquear los pagos.",
      "Llamar al número habitual de tu banco para verificar si el correo es real.",
      "Marcar como spam e ignorarlo por completo."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -1500, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -4,
        "feedback": "¡Has caído en un ataque de phishing! Te han robado fondos de la cuenta antes de que pudieras bloquearla."
      },
      {
        "movimientos": [],
        "reputacion": 2,
        "feedback": "Excelente reflejo. Tu banco te confirma que era una estafa y te ayudan a bloquear remitentes sospechosos."
      },
      {
        "movimientos": [],
        "reputacion": 0,
        "feedback": "Evitas la estafa con éxito, aunque no llegas a reportarla al banco para que tomen medidas."
      }
    ]
  },
  {
    "id": 244,
    "formato": "correo",
    "remitente": "Instalaciones Clima S.L.",
    "email": "revisiones@climasl.com",
    "destinatario": "Tu empresa",
    "fecha": "01 de septiembre de 2026 · 08:30",
    "asunto": "Aviso de mantenimiento anual de aire acondicionado",
    "mensaje": "Buenos días,\n\nLe contactamos porque este mes caduca la revisión anual obligatoria de sus equipos de climatización comercial.\n\nAdjuntamos el presupuesto para la revisión estándar (limpieza básica y cambio de filtros). Si desean contratar la revisión premium, indíquennoslo en su respuesta.",
    "firma": "Atentamente,\n\nEquipo de Mantenimiento\nInstalaciones Clima S.L.",
    "adjunto": "Presupuesto_Mantenimiento_2026.pdf",
    "opciones": [
      "Contratar la revisión estándar requerida por ley.",
      "Contratar la revisión premium para una limpieza más profunda.",
      "Ignorar el correo para ahorrar este gasto, total el aire funciona bien."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -120, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 0,
        "feedback": "Cumples con la normativa vigente y los equipos funcionan correctamente sin gastar de más."
      },
      {
        "movimientos": [
          { "dinero": -250, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 1,
        "feedback": "El aire es más puro y los filtros duran más, aunque el coste ha sido bastante superior al necesario."
      },
      {
        "movimientos": [
          { "dinero": -600, "categoria_pnl": "Impuestos" }
        ],
        "reputacion": -5,
        "feedback": "Mala decisión. Tienes una inspección rutinaria de sanidad, detectan la falta de revisión y te sancionan con una multa."
      }
    ]
  },
  {
    "id": 245,
    "formato": "correo",
    "remitente": "Inmobiliaria Centro",
    "email": "gestion@inmocentro.es",
    "destinatario": "Tu empresa",
    "fecha": "05 de octubre de 2026 · 10:00",
    "asunto": "Renovación de contrato de alquiler",
    "mensaje": "Estimado inquilino,\n\nLe recordamos que su contrato de arrendamiento del local comercial finaliza el próximo mes.\n\nAdjuntamos la propuesta de renovación por 5 años más. Debido a la inflación, la nueva cuota mensual tendrá un incremento del 5%. Si decide no renovar, debe notificarlo antes de 15 días.",
    "firma": "Atentamente,\n\nDepartamento de Contratos\nInmobiliaria Centro",
    "adjunto": "Borrador_Renovacion_2026.pdf",
    "opciones": [
      "Aceptar la renovación con la subida del 5%.",
      "Intentar negociar para que la subida sea solo del 2%.",
      "Rechazar y empezar a buscar un local más barato urgentemente."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -100, "categoria_pnl": "Alquiler" }
        ],
        "reputacion": 0,
        "feedback": "Aceptas sin más. Mantienes el local pero tus costes fijos aumentan considerablemente."
      },
      {
        "movimientos": [
          { "dinero": -40, "categoria_pnl": "Alquiler" }
        ],
        "reputacion": 1,
        "feedback": "Buena gestión. Consigues reducir el impacto de la subida apelando a tu buen historial de pagos."
      },
      {
        "movimientos": [
          { "dinero": -800, "categoria_pnl": "Otros Gastos" },
          { "dinero": -300, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -3,
        "feedback": "Las prisas son malas. La mudanza express y los trámites te cuestan una fortuna y pierdes clientela habitual."
      }
    ]
  },
  {
    "id": 246,
    "formato": "correo",
    "remitente": "Lucía Fernández (Empleada)",
    "email": "l.fernandez@tuempresa.com",
    "destinatario": "Gerencia",
    "fecha": "12 de octubre de 2026 · 14:20",
    "asunto": "Solicitud de revisión salarial",
    "mensaje": "Hola,\n\nTras llevar más de dos años en la empresa asumiendo cada vez más responsabilidades, me gustaría solicitar una reunión para revisar mi salario.\n\nCreo que mi rendimiento ha sido positivo y me encantaría seguir creciendo con vosotros.\n\nQuedo a la espera de poder comentarlo.",
    "firma": "Un saludo,\n\nLucía Fernández\nEncargada de Turno",
    "adjunto": null,
    "opciones": [
      "Ignorar el correo y hacer como que no lo has visto.",
      "Concederle un aumento del 10% inmediatamente para que esté contenta.",
      "Programar una reunión para acordar un aumento progresivo por objetivos."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -150, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -4,
        "feedback": "Lucía se desmotiva enormemente y su rendimiento cae. El ambiente laboral empeora."
      },
      {
        "movimientos": [
          { "dinero": -150, "categoria_pnl": "Personal y SS" }
        ],
        "reputacion": 2,
        "feedback": "Lucía está muy feliz, pero asumes un coste fijo elevado sin ligarlo a los resultados de la empresa."
      },
      {
        "movimientos": [
          { "dinero": -50, "categoria_pnl": "Personal y SS" },
          { "dinero": 150, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 4,
        "feedback": "Gran liderazgo. Reconoces su valor y acuerdas una mejora salarial justa que la motiva a vender más."
      }
    ]
  },
  {
    "id": 247,
    "formato": "correo",
    "remitente": "Energía Insular",
    "email": "facturacion@energiainsular.es",
    "destinatario": "Tu empresa",
    "fecha": "20 de octubre de 2026 · 09:15",
    "asunto": "Aviso de cambio de tarifas eléctricas",
    "mensaje": "Estimado cliente,\n\nLe informamos que a partir del próximo trimestre, las tarifas de su plan 'Negocio Plus' sufrirán modificaciones debido al ajuste del mercado mayorista.\n\nEn el documento adjunto detallamos los nuevos tramos horarios. Le recomendamos revisar su consumo para optimizar su factura.",
    "firma": "Atención al Cliente,\nEnergía Insular",
    "adjunto": "Nuevas_Tarifas_Luz.pdf",
    "opciones": [
      "Comprar enchufes inteligentes e instaurar medidas de ahorro en el local.",
      "Quejarse en redes sociales sobre la compañía eléctrica.",
      "No hacer nada, la luz hay que pagarla igual."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -100, "categoria_pnl": "Compras/Materiales" },
          { "dinero": 40, "categoria_pnl": "Suministros" }
        ],
        "reputacion": 2,
        "feedback": "Haces una pequeña inversión inicial en eficiencia que empieza a compensar la subida tarifaria."
      },
      {
        "movimientos": [],
        "reputacion": -2,
        "feedback": "Tu queja no sirve de nada, das mala imagen pública y la próxima factura será altísima."
      },
      {
        "movimientos": [
          { "dinero": -120, "categoria_pnl": "Suministros" }
        ],
        "reputacion": 0,
        "feedback": "Tus facturas de luz se disparan este mes por no adaptar tus horarios de alto consumo."
      }
    ]
  },
  {
    "id": 248,
    "formato": "correo",
    "remitente": "Seguros Protección Total",
    "email": "agente@protecciontotal.com",
    "destinatario": "Tu empresa",
    "fecha": "02 de noviembre de 2026 · 11:30",
    "asunto": "Oferta de ampliación de cobertura: Daños por agua y eléctricos",
    "mensaje": "Hola,\n\nRevisando su póliza actual, notamos que no tiene cubierta la indemnización por lucro cesante en caso de daños eléctricos graves.\n\nPor solo 25€ más al mes, podemos incluir esta cobertura que le salvaría de pérdidas operativas en caso de avería de maquinaria.",
    "firma": "Saludos cordiales,\n\nMarcos Ruiz\nTu Agente de Seguros",
    "adjunto": "Propuesta_Ampliacion.pdf",
    "opciones": [
      "Aceptar la ampliación para estar más tranquilos.",
      "Rechazar la oferta, es un gasto innecesario ahora mismo.",
      "Pedir presupuestos a otras dos aseguradoras antes de decidir."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -25, "categoria_pnl": "Seguros" }
        ],
        "reputacion": 1,
        "feedback": "Estás más protegido, pero has aceptado la primera oferta sin comprobar si el precio es competitivo."
      },
      {
        "movimientos": [],
        "reputacion": 0,
        "feedback": "Ahorras dinero hoy, pero asumes un riesgo importante si hay una subida de tensión."
      },
      {
        "movimientos": [
          { "dinero": -15, "categoria_pnl": "Seguros" }
        ],
        "reputacion": 3,
        "feedback": "Excelente. Comparas precios y consigues la misma cobertura en otra aseguradora por menos dinero."
      }
    ]
  },
  {
    "id": 249,
    "formato": "correo",
    "remitente": "Banco del Comercio",
    "email": "financiacion@bancocomercio.es",
    "destinatario": "Tu empresa",
    "fecha": "15 de noviembre de 2026 · 08:45",
    "asunto": "Tiene un Préstamo Preconcedido de 15.000€",
    "mensaje": "Estimado cliente,\n\nDado su excelente historial crediticio, le informamos que tiene a su disposición un préstamo preconcedido de hasta 15.000€ para inversiones en su negocio, con un tipo de interés preferente.\n\nPuede activarlo en 1 clic desde su banca online.",
    "firma": "Atentamente,\nDirector de Sucursal\nBanco del Comercio",
    "adjunto": null,
    "opciones": [
      "Pedirlo inmediatamente para tener dinero en caja 'por si acaso'.",
      "Usarlo para renovar el mobiliario viejo que da mala imagen.",
      "Ignorar el correo, no necesitas deuda ahora mismo."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -150, "categoria_pnl": "Costos Financieros" }
        ],
        "reputacion": -2,
        "feedback": "Pides dinero sin un plan. Ahora tienes que pagar intereses mensuales por un capital que no está produciendo."
      },
      {
        "movimientos": [
          { "dinero": -100, "categoria_pnl": "Costos Financieros" },
          { "dinero": 300, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 4,
        "feedback": "Inviertes de forma inteligente. El local luce mucho mejor y atrae más clientes, compensando el coste financiero."
      },
      {
        "movimientos": [],
        "reputacion": 2,
        "feedback": "Mantienes tu deuda a raya. Sabes que pedir prestado sin necesidad es un error financiero."
      }
    ]
  },
  {
    "id": 250,
    "formato": "correo",
    "remitente": "Gestoría Fiscal López & Asociados",
    "email": "laboral@lopezasociados.es",
    "destinatario": "Tu empresa",
    "fecha": "01 de diciembre de 2026 · 13:10",
    "asunto": "Novedad Normativa: Registro de jornada obligatorio",
    "mensaje": "Hola,\n\nTe escribimos para recordarte que ha entrado en vigor una actualización sobre el registro de jornada. Las inspecciones de trabajo se han intensificado.\n\nNecesitamos que implantes un sistema digital de fichaje antes del día 15. Podemos encargarnos nosotros de instalar el software por 30€/mes.",
    "firma": "Tu Asesor Laboral\nLópez & Asociados",
    "adjunto": null,
    "opciones": [
      "Contratar el software de la gestoría para no complicarte.",
      "Buscar una App gratuita o más barata en internet para llevar el registro.",
      "Seguir apuntando las horas en un papel, no creo que vengan a inspeccionar."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -30, "categoria_pnl": "Asesoría" }
        ],
        "reputacion": 1,
        "feedback": "Cumples la ley rápido, pero asumes el precio alto de la gestoría sin buscar alternativas."
      },
      {
        "movimientos": [
          { "dinero": -5, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 2,
        "feedback": "Encuentras una App económica y fácil de usar. Cumples con la ley optimizando tus gastos."
      },
      {
        "movimientos": [
          { "dinero": -800, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -5,
        "feedback": "¡Inspección sorpresa! El registro en papel estaba incompleto y te ponen una multa grave."
      }
    ]
  },
  {
    "id": 251,
    "formato": "correo",
    "remitente": "Suministros Globales",
    "email": "ventas@suministrosglobales.com",
    "destinatario": "Tu empresa",
    "fecha": "10 de diciembre de 2026 · 10:22",
    "asunto": "Catálogo 2027 y oferta de bienvenida",
    "mensaje": "Estimado gerente,\n\nSomos Suministros Globales, un nuevo distribuidor en la zona. Nos gustaría ser su proveedor.\n\nNuestros precios en consumibles son un 20% más bajos que la media del mercado, aunque nuestros plazos de entrega son de 7 días (frente a los 2 días de su proveedor actual).",
    "firma": "Equipo de Ventas\nSuministros Globales",
    "adjunto": "Catalogo_2027.pdf",
    "opciones": [
      "Cambiar todos los pedidos al nuevo proveedor inmediatamente.",
      "Hacer un pedido pequeño de prueba para comprobar la calidad.",
      "Borrar el correo, prefieres la rapidez de tu proveedor de siempre."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -100, "categoria_pnl": "Compras/Materiales" },
          { "dinero": -300, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -3,
        "feedback": "Ahorraste dinero, pero los productos son de mala calidad y el retraso en la entrega te deja sin stock."
      },
      {
        "movimientos": [
          { "dinero": -30, "categoria_pnl": "Compras/Materiales" }
        ],
        "reputacion": 2,
        "feedback": "Eres prudente. Pruebas el género y descubres que sirve para productos no urgentes, diversificando proveedores."
      },
      {
        "movimientos": [],
        "reputacion": 0,
        "feedback": "Te quedas como estás. Ganas en seguridad logística pero pierdes una posible vía de ahorro."
      }
    ]
  },
  {
    "id": 252,
    "formato": "correo",
    "remitente": "Asociación de Vecinos 'El Barrio'",
    "email": "asociacion@elbarrio.org",
    "destinatario": "Tu empresa",
    "fecha": "18 de diciembre de 2026 · 17:05",
    "asunto": "Patrocinio Fiestas del Barrio",
    "mensaje": "Hola vecinos,\n\nComo cada año, estamos organizando las fiestas del barrio. Nos gustaría saber si su comercio estaría interesado en colaborar con un donativo de 50€ para el sorteo solidario.\n\nA cambio, pondremos el logo de su negocio en el cartel oficial de las fiestas.",
    "firma": "La Junta Directiva\nAsociación de Vecinos 'El Barrio'",
    "adjunto": null,
    "opciones": [
      "Colaborar con los 50€ y enviarles el logo.",
      "Donar productos de tu tienda en lugar de dinero.",
      "Rechazar la invitación amablemente por falta de presupuesto."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -50, "categoria_pnl": "Publicidad" },
          { "dinero": 100, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 3,
        "feedback": "Apoyas al barrio y mejoras tu imagen local, lo que se traduce en nuevos clientes de la zona."
      },
      {
        "movimientos": [
          { "dinero": -20, "categoria_pnl": "Compras/Materiales" },
          { "dinero": 120, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "¡Jugada maestra! Entregas productos que a ti te cuestan menos, das a conocer tu mercancía y quedas genial."
      },
      {
        "movimientos": [],
        "reputacion": -1,
        "feedback": "Ahorras, pero los vecinos notan tu falta de implicación comunitaria."
      }
    ]
  },
  {
    "id": 253,
    "formato": "correo",
    "remitente": "Soporte TPV",
    "email": "soporte@sistematpv.com",
    "destinatario": "Tu empresa",
    "fecha": "15 de enero de 2027 · 09:00",
    "asunto": "Actualización de software obligatoria",
    "mensaje": "Estimado cliente,\n\nEl sistema de caja actual quedará obsoleto a finales de mes por cambios en la normativa de facturación.\n\nDebe adquirir la actualización v5.0 (Coste: 120€) para seguir emitiendo tickets legalmente. De lo contrario, el sistema se bloqueará el día 1 de febrero.",
    "firma": "Soporte Técnico\nSistema TPV",
    "adjunto": "Instrucciones_Update.pdf",
    "opciones": [
      "Pagar la actualización de inmediato para no tener problemas.",
      "Esperar al último día por si hay alguna oferta o rebaja.",
      "Ignorarlo e intentar emitir facturas a mano si se bloquea."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -120, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 1,
        "feedback": "Resuelves el problema técnico sin interrumpir las ventas de tu negocio."
      },
      {
        "movimientos": [
          { "dinero": -120, "categoria_pnl": "Servicios" },
          { "dinero": -50, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -1,
        "feedback": "Pagas lo mismo, pero el sistema se actualiza en pleno horario comercial y generas colas que te hacen perder ventas."
      },
      {
        "movimientos": [
          { "dinero": -300, "categoria_pnl": "Operativos (Ventas)" },
          { "dinero": -150, "categoria_pnl": "Servicios" }
        ],
        "reputacion": -6,
        "feedback": "El sistema se bloquea. Pierdes ventas, cobras mal y acabas pagando un técnico de urgencia más caro."
      }
    ]
  },
  {
    "id": 254,
    "formato": "correo",
    "remitente": "Carlos Martínez (Empleado)",
    "email": "c.martinez@tuempresa.com",
    "destinatario": "Gerencia",
    "fecha": "05 de febrero de 2027 · 07:15",
    "asunto": "Baja médica",
    "mensaje": "Hola,\n\nTe escribo desde urgencias. He tenido una mala caída y me he roto el tobillo. El médico me ha dado la baja por al menos un mes.\n\nAdjunto el parte médico. Lo siento mucho por dejaros colgados justo en estas fechas.",
    "firma": "Saludos,\nCarlos",
    "adjunto": "Parte_Baja_Carlos.pdf",
    "opciones": [
      "Contratar a alguien por una ETT temporalmente para cubrirle.",
      "Repartir las horas de Carlos entre el resto del equipo pagando horas extra.",
      "No hacer nada y que los empleados que están asuman el doble de trabajo por el mismo sueldo."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -400, "categoria_pnl": "Personal y SS" }
        ],
        "reputacion": 2,
        "feedback": "Mantienes el nivel de servicio y cuidas a tu equipo evitando que se saturen, aunque es la opción más cara."
      },
      {
        "movimientos": [
          { "dinero": -250, "categoria_pnl": "Personal y SS" }
        ],
        "reputacion": 1,
        "feedback": "El trabajo sale adelante, pero el equipo está muy cansado por las horas extra."
      },
      {
        "movimientos": [
          { "dinero": -300, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Ahorras en nóminas, pero el servicio empeora drásticamente, pierdes clientes y el equipo está furioso."
      }
    ]
  },
  {
    "id": 255,
    "formato": "correo",
    "remitente": "Club de Fútbol Local",
    "email": "directiva@cflocal.es",
    "destinatario": "Tu empresa",
    "fecha": "18 de febrero de 2027 · 12:40",
    "asunto": "Propuesta de Patrocinio Deportivo",
    "mensaje": "Buenas tardes,\n\nEl equipo del pueblo ha subido de categoría. Estamos buscando empresas locales que quieran patrocinar la nueva equipación.\n\nPor 300€, el logo de su empresa aparecerá en la manga de las camisetas durante toda la temporada.",
    "firma": "Atentamente,\nPresidente del Club",
    "adjunto": "Dossier_Patrocinio.pdf",
    "opciones": [
      "Aceptar y pagar los 300€ para ganar visibilidad local.",
      "Proponer un acuerdo: ofrecerles un descuento del 10% a los socios del club a cambio de un cartel en el campo.",
      "Ignorar la propuesta."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -300, "categoria_pnl": "Publicidad" },
          { "dinero": 150, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 4,
        "feedback": "Mejoras mucho tu imagen pública, pero es un gasto publicitario que tardará en retornar por completo."
      },
      {
        "movimientos": [
          { "dinero": -50, "categoria_pnl": "Publicidad" },
          { "dinero": 350, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Cierras un acuerdo brillante. Captas fidelidad de todo el club y sus familias sin apenas gasto inicial."
      },
      {
        "movimientos": [],
        "reputacion": 0,
        "feedback": "Evitas gastos, pero pierdes una buena oportunidad de integrarte en la comunidad local."
      }
    ]
  },
  {
    "id": 256,
    "formato": "correo",
    "remitente": "Hotel Costa",
    "email": "compras@hotelcosta.es",
    "destinatario": "Tu empresa",
    "fecha": "03 de marzo de 2027 · 11:05",
    "asunto": "Solicitud de presupuesto para suministro recurrente",
    "mensaje": "Estimados señores,\n\nEstamos buscando un nuevo proveedor local para suministrar lotes de productos a nuestras habitaciones.\n\n¿Podrían hacernos un presupuesto para servir 50 lotes semanales con un 10% de descuento sobre su precio de tienda?",
    "firma": "Departamento de Compras\nHotel Costa",
    "adjunto": null,
    "opciones": [
      "Aceptar y aplicarles el 10% de descuento para asegurar la venta grande.",
      "Rechazar la oferta. No haces descuentos a nadie, el precio es el que es.",
      "Negociar el 10% de descuento pero solo si firman un compromiso de 6 meses."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 300, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 2,
        "feedback": "Consigues una buena venta inicial, pero no has garantizado que te vuelvan a comprar la próxima semana."
      },
      {
        "movimientos": [],
        "reputacion": -1,
        "feedback": "Pierdes un cliente corporativo enorme por no ser flexible con tus márgenes comerciales."
      },
      {
        "movimientos": [
          { "dinero": 450, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 4,
        "feedback": "Excelente visión comercial. Aseguras ingresos recurrentes B2B cediendo un poco de margen."
      }
    ]
  },
  {
    "id": 257,
    "formato": "correo",
    "remitente": "Banco del Comercio",
    "email": "notificaciones@bancocomercio.es",
    "destinatario": "Tu empresa",
    "fecha": "01 de abril de 2027 · 08:00",
    "asunto": "Liquidación de intereses - Cuenta Remunerada",
    "mensaje": "Hola,\n\nLe comunicamos que se ha procedido a la liquidación de intereses de su Cuenta Empresas Remunerada correspondiente al último trimestre.\n\nTiene el extracto disponible en su área de cliente.",
    "firma": "Atención al Cliente\nBanco del Comercio",
    "adjunto": "Extracto_Intereses.pdf",
    "opciones": [
      "Reinvertir esos intereses en mejorar una pequeña partida de marketing.",
      "Sacar el dinero y gastarlo en una cena de empresa improvisada.",
      "Dejarlo en la cuenta para que siga generando interés compuesto."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 45, "categoria_pnl": "Financieros" },
          { "dinero": -30, "categoria_pnl": "Publicidad" },
          { "dinero": 150, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 2,
        "feedback": "Inviertes inteligentemente los ingresos pasivos en crecimiento activo, generando más ventas."
      },
      {
        "movimientos": [
          { "dinero": 45, "categoria_pnl": "Financieros" },
          { "dinero": -80, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": 3,
        "feedback": "El equipo lo agradece, pero te has gastado más dinero del que generaste en intereses."
      },
      {
        "movimientos": [
          { "dinero": 45, "categoria_pnl": "Financieros" }
        ],
        "reputacion": 1,
        "feedback": "Gestión conservadora y eficaz. Dejas que tus reservas financieras crezcan por sí solas."
      }
    ]
  },
  {
    "id": 258,
    "formato": "correo",
    "remitente": "Ministerio de Digitalización",
    "email": "info@kitdigital.gob.es",
    "destinatario": "Tu empresa",
    "fecha": "12 de mayo de 2027 · 10:30",
    "asunto": "Resolución de la ayuda Kit Digital",
    "mensaje": "Estimado solicitante,\n\nNos complace informarle que su solicitud para el bono de digitalización ha sido APROBADA por un importe de 2.000€.\n\nDebe seleccionar un agente digitalizador antes de 3 meses para consumir el bono en creación de web, redes sociales o software de gestión.",
    "firma": "Dirección General\nMinisterio de Digitalización",
    "adjunto": "Resolucion_Favorable.pdf",
    "opciones": [
      "Gastar el bono en una tienda online nueva para expandir ventas.",
      "Gastar el bono en mejorar el software interno de inventario.",
      "Dejar pasar el plazo, estás demasiado ocupado gestionando la tienda física."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 2000, "categoria_pnl": "Subvenciones" },
          { "dinero": -2000, "categoria_pnl": "Servicios" },
          { "dinero": 600, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 4,
        "feedback": "Aprovechas la subvención (valor positivo y gasto neutral) para abrir una nueva línea de ingresos digitales."
      },
      {
        "movimientos": [
          { "dinero": 2000, "categoria_pnl": "Subvenciones" },
          { "dinero": -2000, "categoria_pnl": "Servicios" },
          { "dinero": 200, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 2,
        "feedback": "Optimizas tu gestión interna sin coste, lo que reduce tus errores y mejora tus procesos a largo plazo."
      },
      {
        "movimientos": [],
        "reputacion": -2,
        "feedback": "Pierdes 2.000€ gratis por falta de organización y tiempo."
      }
    ]
  },
  {
    "id": 259,
    "formato": "correo",
    "remitente": "Agencia Tributaria",
    "email": "avisos@correo.aeat.es",
    "destinatario": "Tu empresa",
    "fecha": "20 de julio de 2027 · 09:45",
    "asunto": "Aviso de notificación electrónica",
    "mensaje": "La Agencia Tributaria ha puesto a su disposición una nueva notificación.\n\nConcepto: Requerimiento de información sobre deducciones aplicadas en el ejercicio anterior.\n\nDispone de 10 días hábiles para acceder a la Sede Electrónica y aportar la documentación justificativa.",
    "firma": "Agencia Estatal de Administración Tributaria",
    "adjunto": null,
    "opciones": [
      "Reenviar el correo urgentemente a tu gestoría para que preparen los papeles.",
      "Entrar tú mismo, subir un par de facturas al azar y cruzar los dedos.",
      "No abrir la notificación oficial para 'ganar tiempo' hasta el mes que viene."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -40, "categoria_pnl": "Asesoría" }
        ],
        "reputacion": 1,
        "feedback": "Pagas un extra a tu asesor, pero presentas todo correctamente y Hacienda cierra el requerimiento sin sanción."
      },
      {
        "movimientos": [
          { "dinero": -300, "categoria_pnl": "Impuestos" }
        ],
        "reputacion": -3,
        "feedback": "La documentación era insuficiente. Te anulan la deducción y te imponen una sanción por negligencia."
      },
      {
        "movimientos": [
          { "dinero": -600, "categoria_pnl": "Impuestos" }
        ],
        "reputacion": -5,
        "feedback": "Error gravísimo. Si no abres la notificación, Hacienda te da por notificado igual y te sancionan por obstrucción."
      }
    ]
  },
  {
    "id": 260,
    "formato": "correo",
    "remitente": "Administración de Fincas",
    "email": "comunidad@fincas-sur.es",
    "destinatario": "Tu empresa",
    "fecha": "10 de agosto de 2027 · 16:20",
    "asunto": "Aprobación de derrama extraordinaria",
    "mensaje": "Estimado propietario/inquilino,\n\nEn la junta de ayer se aprobó una derrama obligatoria para arreglar la fachada del edificio. \n\nAl local comercial le corresponde abonar una cuota extra de 150€ durante los próximos 3 meses.",
    "firma": "Administrador\nFincas Sur",
    "adjunto": "Acta_Reunion.pdf",
    "opciones": [
      "Pagar la derrama sin rechistar desde la cuenta del negocio.",
      "Revisar el contrato de alquiler para ver si le corresponde pagarlo al propietario.",
      "Negarse a pagar amenazando con denunciar a la comunidad."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -150, "categoria_pnl": "Alquiler" }
        ],
        "reputacion": 0,
        "feedback": "Pagas un gasto que igual no te correspondía, perdiendo liquidez a lo tonto."
      },
      {
        "movimientos": [],
        "reputacion": 2,
        "feedback": "Revisas el contrato y efectivamente, las derramas estructurales las asume el dueño. Te ahorras el gasto."
      },
      {
        "movimientos": [
          { "dinero": -250, "categoria_pnl": "Asesoría" }
        ],
        "reputacion": -4,
        "feedback": "Te metes en un conflicto legal innecesario. Acabas pagando abogados y dando mala imagen a los vecinos."
      }
    ]
  },
  {
    "id": 261,
    "formato": "correo",
    "remitente": "Aguas del Municipio",
    "email": "incidencias@aguasmunicipales.com",
    "destinatario": "Tu empresa",
    "fecha": "25 de septiembre de 2027 · 06:30",
    "asunto": "Aviso de corte de suministro",
    "mensaje": "Aviso Urgente:\n\nDebido a una rotura grave en la red principal, el suministro de agua en su calle estará cortado hoy desde las 08:00 hasta las 18:00 horas.\n\nRogamos disculpen las molestias.",
    "firma": "Servicio de Mantenimiento",
    "adjunto": null,
    "opciones": [
      "Cerrar el negocio todo el día; sin agua no se puede trabajar ni ir al baño.",
      "Comprar garrafas de agua para lo básico y seguir operando con ciertas limitaciones.",
      "Abrir normal y decirle a los clientes y empleados que aguanten sin ir al servicio."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -350, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -1,
        "feedback": "Cierras por precaución, perdiendo toda la facturación de un día entero de ventas."
      },
      {
        "movimientos": [
          { "dinero": -15, "categoria_pnl": "Compras/Materiales" },
          { "dinero": 150, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 4,
        "feedback": "Demuestras gran capacidad de adaptación. Inviertes poco, mantienes el negocio abierto y salvas gran parte de las ventas del día."
      },
      {
        "movimientos": [
          { "dinero": -50, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -6,
        "feedback": "El ambiente es insalubre. Un empleado se queja a Sanidad y los clientes se van escandalizados."
      }
    ]
  },
  {
    "id": 262,
    "formato": "correo",
    "remitente": "Seguridad Privada Pro",
    "email": "alertas@seguridadpro.es",
    "destinatario": "Tu empresa",
    "fecha": "14 de octubre de 2027 · 03:15",
    "asunto": "Salto de Alarma - Zona Escaparate",
    "mensaje": "ALERTA DEL SISTEMA:\n\nSe ha detectado un impacto violento en el cristal principal (Zona 1) a las 03:12 AM.\n\nNuestro vigilante acudirá en 15 minutos. ¿Desea que llamemos a la policía?",
    "firma": "Central Receptora de Alarmas",
    "adjunto": null,
    "opciones": [
      "Autorizar llamar a la policía e ir corriendo al local en pijama.",
      "No hacer nada, seguro que ha sido el viento o un pájaro.",
      "Llamar a tu seguro antes que a la policía para ver qué te cubre."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -100, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": 2,
        "feedback": "Alguien rompió el cristal, pero gracias a tu rápida acción la policía espantó a los ladrones antes de que robaran mercancía."
      },
      {
        "movimientos": [
          { "dinero": -1200, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -4,
        "feedback": "Eran ladrones. Vaciaron la caja fuerte y se llevaron inventario porque nadie apareció a tiempo."
      },
      {
        "movimientos": [
          { "dinero": -800, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -1,
        "feedback": "Pierdes un tiempo valioso de madrugada al teléfono. Los ladrones escapan con parte de la mercancía."
      }
    ]
  },
  {
    "id": 263,
    "formato": "correo",
    "remitente": "Sello de Calidad 'Comercio Excelente'",
    "email": "auditoria@comercioexcelente.org",
    "destinatario": "Tu empresa",
    "fecha": "05 de noviembre de 2027 · 11:20",
    "asunto": "Invitación para auditoría voluntaria",
    "mensaje": "Hola,\n\nLe invitamos a someter su negocio a nuestra auditoría anual de calidad. Si supera nuestros estándares en atención, limpieza y sostenibilidad, obtendrá el sello 'Comercio Excelente 2028' para colocar en su puerta.\n\nEl coste del proceso de certificación es de 250€.",
    "firma": "Comité Evaluador",
    "adjunto": "Criterios_Auditoria.pdf",
    "opciones": [
      "Pagar y prepararse para la auditoría para conseguir prestigio.",
      "Rechazar amablemente, tu prestigio lo dan tus clientes, no una pegatina.",
      "Pagar pero no hacer ningún cambio, confiando en que pasas de sobra."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -250, "categoria_pnl": "Servicios" },
          { "dinero": 400, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 6,
        "feedback": "Consigues el sello. Los clientes lo notan, tu negocio se posiciona como el mejor de la zona y atraes más público."
      },
      {
        "movimientos": [],
        "reputacion": 0,
        "feedback": "Ahorras el coste, pero tu competencia sí consigue el sello y destacan más que tú."
      },
      {
        "movimientos": [
          { "dinero": -250, "categoria_pnl": "Servicios" }
        ],
        "reputacion": -2,
        "feedback": "Suspendes la auditoría por no prepararte. Has tirado el dinero a la basura."
      }
    ]
  },
  {
    "id": 264,
    "formato": "correo",
    "remitente": "Transportes Veloces",
    "email": "logistica@transportesveloces.com",
    "destinatario": "Tu empresa",
    "fecha": "20 de diciembre de 2027 · 15:45",
    "asunto": "Retrasos por huelga de transporte",
    "mensaje": "Estimado cliente,\n\nLamentamos informarle que debido a la huelga nacional de transportistas, su pedido de mercancía para la campaña de Navidad se retrasará indefinidamente.\n\nEstá actualmente bloqueado en nuestro centro logístico central.",
    "firma": "Dpto. Logística",
    "adjunto": null,
    "opciones": [
      "Buscar a un mayorista local y comprarle aunque sea un 30% más caro para tener género.",
      "Esperar a que acabe la huelga, la gente entenderá que no tienes stock.",
      "Coger tu propia furgoneta y conducir 300km hasta el centro logístico para recogerlo tú."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -400, "categoria_pnl": "Compras/Materiales" },
          { "dinero": 800, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 4,
        "feedback": "Tu margen de beneficio cae bastante, pero eres la única tienda con stock en Navidad. Vendes mucho y fidelizas."
      },
      {
        "movimientos": [
          { "dinero": -800, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Te quedas sin stock en la semana más importante del año. Los clientes se van a la competencia enfadados."
      },
      {
        "movimientos": [
          { "dinero": -150, "categoria_pnl": "Otros Gastos" },
          { "dinero": -400, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -1,
        "feedback": "El piquete de la huelga te pincha una rueda. Pierdes tiempo, dinero del viaje y el género sigue sin llegar a tiempo para las ventas fuertes."
      }
    ]
  },
  {
    "id": 265,
    "formato": "correo",
    "remitente": "Sanidad y Consumo",
    "email": "inspecciones@sanidad.gob.es",
    "destinatario": "Tu empresa",
    "fecha": "10 de enero de 2028 · 09:30",
    "asunto": "Notificación de Inspección Rutinaria",
    "mensaje": "Estimado titular,\n\nLe comunicamos que la próxima semana un inspector de Sanidad y Consumo visitará sus instalaciones para comprobar el cumplimiento de la normativa de higiene y etiquetado.\n\nRogamos tengan a su disposición los manuales de APPCC y el registro de alérgenos actualizados.",
    "firma": "Departamento de Inspección\nMinisterio de Sanidad y Consumo",
    "adjunto": null,
    "opciones": [
      "Pagar unas horas extra al personal para hacer una limpieza profunda y revisar todo antes de la visita.",
      "Contratar a tu asesoría para que envíen a un experto que revise los papeles el día antes.",
      "No hacer nada especial, confías en que todo está suficientemente limpio en el día a día."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -120, "categoria_pnl": "Personal y SS" }
        ],
        "reputacion": 2,
        "feedback": "Inviertes en tu equipo. Pasan la inspección con nota y sin multas, ganando tranquilidad."
      },
      {
        "movimientos": [
          { "dinero": -250, "categoria_pnl": "Asesoría" }
        ],
        "reputacion": 1,
        "feedback": "El asesor encuentra un par de errores documentales a tiempo. Pasas la inspección, pero el coste ha sido alto."
      },
      {
        "movimientos": [
          { "dinero": -600, "categoria_pnl": "Impuestos" }
        ],
        "reputacion": -4,
        "feedback": "El inspector encuentra productos mal etiquetados y suciedad acumulada. Recibes una sanción administrativa."
      }
    ]
  },
  {
    "id": 266,
    "formato": "correo",
    "remitente": "Marta Gómez (Empleada)",
    "email": "m.gomez@tuempresa.com",
    "destinatario": "Gerencia",
    "fecha": "22 de enero de 2028 · 16:45",
    "asunto": "Problemas de convivencia en el turno de tarde",
    "mensaje": "Hola,\n\nTe escribo porque la situación en el turno de tarde con mi compañero Luis se está volviendo insostenible. No colabora en las tareas de cierre y me contesta mal delante de los clientes.\n\nMe gustaría que intervengas, porque me está generando mucha ansiedad venir a trabajar.",
    "firma": "Marta Gómez\nAtención al Cliente",
    "adjunto": null,
    "opciones": [
      "Reunirte con ambos por separado para mediar y establecer normas claras de convivencia.",
      "Despedir a Luis inmediatamente para atajar el problema de raíz.",
      "Decirle a Marta que son cosas de compañeros y que lo solucionen entre ellos."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 3,
        "feedback": "Actúas como un buen líder. Inviertes tiempo en mediación y logras mejorar el clima laboral sin costes extra."
      },
      {
        "movimientos": [
          { "dinero": -1200, "categoria_pnl": "Personal y SS" }
        ],
        "reputacion": -2,
        "feedback": "El despido improcedente de Luis te cuesta una indemnización cara y genera miedo en el resto del equipo."
      },
      {
        "movimientos": [
          { "dinero": -300, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Marta coge la baja por ansiedad y el mal ambiente en la tienda espanta a los clientes habituales."
      }
    ]
  },
  {
    "id": 267,
    "formato": "correo",
    "remitente": "Software TPV Pro",
    "email": "suscripciones@tpvpro.com",
    "destinatario": "Tu empresa",
    "fecha": "03 de febrero de 2028 · 10:00",
    "asunto": "Renovación Anual y Nuevas Tarifas",
    "mensaje": "Hola,\n\nLe recordamos que su suscripción anual al software de caja finaliza en 15 días. \nEste año, nuestra tarifa básica sube a 300€ anuales. Sin embargo, si se pasa al 'Plan Premium' por 450€, le incluiremos el módulo de fidelización de clientes con tarjetas de puntos.",
    "firma": "Equipo de Facturación\nTPV Pro",
    "adjunto": null,
    "opciones": [
      "Renovar el plan básico por 300€, ya que no necesitas más funciones.",
      "Contratar el Plan Premium por 450€ para intentar retener más clientes con los puntos.",
      "Cancelar la suscripción y buscar un software gratuito, aunque tengas que migrar todos los datos a mano."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -300, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 0,
        "feedback": "Mantienes el servicio esencial, asumiendo la subida normal del coste sin innovar."
      },
      {
        "movimientos": [
          { "dinero": -450, "categoria_pnl": "Servicios" },
          { "dinero": 300, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Inviertes en fidelización. Los clientes adoran las tarjetas de puntos y tus ventas recurrentes suben, amortizando la diferencia."
      },
      {
        "movimientos": [
          { "dinero": -800, "categoria_pnl": "Otros Gastos" },
          { "dinero": -200, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -4,
        "feedback": "El software gratis falla, pierdes el historial de ventas y la migración manual bloquea la tienda dos días."
      }
    ]
  },
  {
    "id": 268,
    "formato": "correo",
    "remitente": "Cliente Descontento",
    "email": "cliente.enfadado@gmail.com",
    "destinatario": "Tu empresa",
    "fecha": "14 de febrero de 2028 · 12:15",
    "asunto": "Queja formal: Producto defectuoso",
    "mensaje": "A quien corresponda,\n\nCompré un artículo en su tienda ayer para un regalo importante y al abrirlo estaba totalmente roto. Es una vergüenza que vendan cosas en este estado.\n\nExijo la devolución inmediata de mi dinero o pondré una reclamación en Consumo y una reseña de 1 estrella.",
    "firma": "Javier Ruiz",
    "adjunto": "Foto_Producto_Roto.jpg",
    "opciones": [
      "Pedirle disculpas, devolverle el dinero íntegro e invitarle a un descuento en su próxima compra.",
      "Devolverle solo el dinero, de forma fría y sin asumir la culpa, pues tú no fabricas el producto.",
      "Negarte a devolver el dinero acusándole de haberlo roto él al sacarlo de la caja."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -45, "categoria_pnl": "Operativos (Ventas)" },
          { "dinero": 120, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 3,
        "feedback": "Pierdes el dinero del producto inicialmente, pero tu excelente atención al cliente transforma a un detractor en un cliente fiel que te recomienda."
      },
      {
        "movimientos": [
          { "dinero": -30, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 0,
        "feedback": "Cumples la ley y devuelves el dinero, pero el cliente se va frío y no volverá a pisar tu tienda."
      },
      {
        "movimientos": [
          { "dinero": -200, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -6,
        "feedback": "Te pone una reseña terrible con fotos que hace que docenas de potenciales clientes no entren a tu negocio, perdiendo ventas futuras."
      }
    ]
  },
  {
    "id": 269,
    "formato": "correo",
    "remitente": "Ayuntamiento - Medio Ambiente",
    "email": "sostenibilidad@ayuntamiento.es",
    "destinatario": "Tu empresa",
    "fecha": "05 de marzo de 2028 · 11:30",
    "asunto": "Campaña de Reciclaje Comercial",
    "mensaje": "Estimados comerciantes,\n\nEl Ayuntamiento lanza una campaña para incentivar la separación de residuos. \nLos locales que contraten a un gestor de residuos homologado (coste medio: 40€/mes) recibirán una bonificación del 30% en su impuesto municipal de basuras a final de año.",
    "firma": "Concejalía de Medio Ambiente",
    "adjunto": "Bases_Campaña.pdf",
    "opciones": [
      "Contratar al gestor para ser más ecológico y conseguir la bonificación fiscal.",
      "Seguir tirando la basura al contenedor normal de la calle gratis como hasta ahora.",
      "Contratar al gestor pero cancelar a los dos meses para intentar engañar al sistema."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -40, "categoria_pnl": "Servicios" },
          { "dinero": 100, "categoria_pnl": "Impuestos" }
        ],
        "reputacion": 4,
        "feedback": "Aumentas tus gastos fijos de servicios, pero mejoras tu imagen verde y logras ahorrar en impuestos a final de año."
      },
      {
        "movimientos": [
          { "dinero": -50, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -1,
        "feedback": "No gastas nada en gestores hoy, pero la policía local empieza a multar a comercios que saturan los contenedores públicos, y te cae una a ti."
      },
      {
        "movimientos": [
          { "dinero": -200, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -3,
        "feedback": "El Ayuntamiento cruza datos, te retira la bonificación y te sanciona severamente por intento de fraude."
      }
    ]
  },
  {
    "id": 270,
    "formato": "correo",
    "remitente": "Gestoría Fiscal López & Asociados",
    "email": "fiscal@lopezasociados.es",
    "destinatario": "Tu empresa",
    "fecha": "25 de marzo de 2028 · 10:05",
    "asunto": "Oportunidad: Deducción por donativos",
    "mensaje": "Hola,\n\nRevisando vuestra contabilidad de cara al cierre trimestral, veo que los beneficios son altos. Os recuerdo que si hacéis una donación a una ONG registrada antes de fin de mes, podréis deducir hasta un 35% de ese importe en el Impuesto de Sociedades.\n\n¿Queréis que gestionemos algún donativo?",
    "firma": "Tu Asesor Fiscal",
    "adjunto": null,
    "opciones": [
      "Donar 500€ a una ONG local para ayudar a la comunidad y desgravar.",
      "No donar nada, prefieres tener el dinero líquido en la cuenta aunque pagues más impuestos.",
      "Intentar camuflar un gasto personal como si fuera un donativo falso."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -500, "categoria_pnl": "Otros Gastos" },
          { "dinero": 175, "categoria_pnl": "Impuestos" }
        ],
        "reputacion": 5,
        "feedback": "Haces una buena obra. Tu reputación sube en el barrio y recuperarás parte del dinero (175€) como ahorro en impuestos."
      },
      {
        "movimientos": [],
        "reputacion": 0,
        "feedback": "Decisión conservadora. Mantienes liquidez total, pero acabarás pagando la cuota íntegra a Hacienda."
      },
      {
        "movimientos": [
          { "dinero": -1000, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -6,
        "feedback": "Una inspección rutinaria detecta el fraude. Te cae una multa severa y dañas tu historial con Hacienda."
      }
    ]
  },
  {
    "id": 271,
    "formato": "correo",
    "remitente": "Marta Vlogs (Influencer)",
    "email": "colaboraciones@martavlogs.com",
    "destinatario": "Tu empresa",
    "fecha": "12 de abril de 2028 · 15:20",
    "asunto": "Propuesta de colaboración en Instagram",
    "mensaje": "¡Hola equipo!\n\nSoy Marta, creadora de contenido de estilo de vida en la ciudad (45k seguidores). Me encanta vuestro negocio y me gustaría proponeros una colaboración.\n\nPor una tarifa de 150€ y un lote de vuestros productos, grabaré un Reel visitando vuestro local y lo publicaré recomendándoos a mi audiencia.",
    "firma": "Marta Vlogs",
    "adjunto": "Media_Kit_Marta.pdf",
    "opciones": [
      "Aceptar y pagarle los 150€ + el lote de productos.",
      "Contraofertar: ofrecerle solo los productos gratis a cambio de una historia, sin pago en metálico.",
      "Rechazar la oferta y decirle que los seguidores no pagan las facturas."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -150, "categoria_pnl": "Publicidad" },
          { "dinero": -30, "categoria_pnl": "Compras/Materiales" },
          { "dinero": 200, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 4,
        "feedback": "El vídeo tiene éxito y atrae a gente joven. Consigues ventas, pero el coste inicial de dinero y material fue alto."
      },
      {
        "movimientos": [
          { "dinero": -30, "categoria_pnl": "Compras/Materiales" },
          { "dinero": 150, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 3,
        "feedback": "Excelente negociación. Ella acepta el canje por productos. Consigues buena publicidad a un coste bajísimo."
      },
      {
        "movimientos": [
          { "dinero": -150, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -2,
        "feedback": "Te ofende en privado y habla mal de tu trato en sus redes. Pierdes potenciales ventas de clientes jóvenes del barrio."
      }
    ]
  },
  {
    "id": 272,
    "formato": "correo",
    "remitente": "Extintores y Seguridad S.L.",
    "email": "mantenimiento@extintores-seguridad.es",
    "destinatario": "Tu empresa",
    "fecha": "04 de mayo de 2028 · 08:45",
    "asunto": "Retimbrado obligatorio de extintores",
    "mensaje": "Buenos días,\n\nLe contactamos para avisar que este mes corresponde realizar el retimbrado obligatorio a los 3 extintores de su local, por haber cumplido 5 años desde su fabricación.\n\nEl coste de la operación, recogida e instalación de equipos de sustitución temporal es de 90€.",
    "firma": "Servicio Técnico",
    "adjunto": null,
    "opciones": [
      "Aprobar el presupuesto de 90€ para cumplir con la normativa contra incendios.",
      "Buscar a otra empresa para intentar ahorrar 10€, aunque tarden semanas en venir.",
      "Ignorar el correo, los extintores se ven nuevos por fuera."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -90, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 1,
        "feedback": "Cumples la ley y mantienes el local seguro para tus empleados y clientes sin complicaciones."
      },
      {
        "movimientos": [
          { "dinero": -80, "categoria_pnl": "Servicios" }
        ],
        "reputacion": -1,
        "feedback": "Por ahorrar 10€, estás dos semanas sin extintores válidos, arriesgándote gravemente en caso de accidente o inspección."
      },
      {
        "movimientos": [
          { "dinero": -500, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -4,
        "feedback": "Sanidad y el seguro detectan que no has pasado la revisión obligatoria. Te multan severamente y amenazan con cancelar la póliza."
      }
    ]
  },
  {
    "id": 273,
    "formato": "correo",
    "remitente": "Distribuidora Nacional",
    "email": "ofertas@distribuidoranacional.com",
    "destinatario": "Tu empresa",
    "fecha": "18 de mayo de 2028 · 11:10",
    "asunto": "LIQUIDACIÓN: Descuento del 40% en artículos de baja rotación",
    "mensaje": "Estimado cliente,\n\nEstamos liquidando stock de temporada pasada. Le ofrecemos un palet de mercancía variada con un 40% de descuento sobre el precio de coste habitual. \n\nEl lote completo sale a 400€, ideal para poner una cesta de 'Todo a 2€' en su mostrador.",
    "firma": "Departamento de Ventas",
    "adjunto": "Listado_Liquidacion.pdf",
    "opciones": [
      "Comprar el palet completo por 400€ para maximizar el margen de beneficio en tienda.",
      "Ignorar la oferta, no quieres convertir tu tienda en un 'todo a cien' de saldo.",
      "Comprar el palet e intentar venderlo como si fuera mercancía de nueva temporada a precio completo."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -400, "categoria_pnl": "Compras/Materiales" }
        ],
        "reputacion": -1,
        "feedback": "Compras mucho género, pero ocupa espacio, tarda en venderse y da una imagen un poco desordenada y barata a tu local."
      },
      {
        "movimientos": [],
        "reputacion": 2,
        "feedback": "Buena estrategia. Mantienes la coherencia de tu marca y proteges tu liquidez frente a ofertas tentadoras pero inútiles."
      },
      {
        "movimientos": [
          { "dinero": -400, "categoria_pnl": "Compras/Materiales" },
          { "dinero": -300, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Los clientes se dan cuenta de que vendes saldos viejos a precio de oro. Pierdes tu credibilidad comercial y un buen puñado de ventas."
      }
    ]
  },
  {
    "id": 274,
    "formato": "correo",
    "remitente": "Control de Plagas 'El Exterminador'",
    "email": "avisos@controlplagas.es",
    "destinatario": "Tu empresa",
    "fecha": "02 de junio de 2028 · 09:55",
    "asunto": "Aviso de fumigación preventiva en la zona",
    "mensaje": "Hola,\n\nLes informamos que se ha detectado un foco de plagas (cucarachas) en los conductos municipales de su calle. \n\nLes recomendamos realizar un tratamiento preventivo de sellado y fumigación perimetral en su local para evitar que entren. El coste es de 130€.",
    "firma": "Equipo Técnico",
    "adjunto": null,
    "opciones": [
      "Contratar el servicio inmediatamente para prevenir antes que curar.",
      "Comprar sprays en el supermercado por 15€ y echarlos tú mismo en las esquinas.",
      "No hacer nada, tu local siempre está muy limpio y no entrarán."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -130, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 1,
        "feedback": "Gasto justificado. Proteges tu mercancía y evitas un desastre sanitario en tu negocio."
      },
      {
        "movimientos": [
          { "dinero": -15, "categoria_pnl": "Compras/Materiales" },
          { "dinero": -100, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -3,
        "feedback": "Los sprays domésticos no sirven contra una plaga. Acabas viendo insectos durante el horario comercial y espantas a varios clientes."
      },
      {
        "movimientos": [
          { "dinero": -800, "categoria_pnl": "Otros Gastos" },
          { "dinero": -400, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -7,
        "feedback": "La plaga entra de lleno. Tienes que cerrar dos días, tirar mercancía y pagar una fumigación de urgencia carísima."
      }
    ]
  },
  {
    "id": 275,
    "formato": "correo",
    "remitente": "Plataforma Reseñas Online",
    "email": "moderacion@resenasonline.com",
    "destinatario": "Tu empresa",
    "fecha": "20 de junio de 2028 · 14:30",
    "asunto": "Alerta: Nueva reseña de 1 estrella",
    "mensaje": "Hola,\n\nHas recibido una nueva opinión sobre tu negocio:\n⭐ (1/5)\n\"El peor sitio al que he ido. Me atendieron fatal y el producto es basura. Si me pagan 50€ quito este comentario.\" - Usuario Anonimo99",
    "firma": "Equipo de Moderación",
    "adjunto": null,
    "opciones": [
      "Pagarle los 50€ al chantajista para que borre el comentario y no manche tu nota media.",
      "Denunciar la reseña a la plataforma por extorsión y contestar educadamente desmintiendo los hechos.",
      "Contestar a la reseña insultándole a él y perdiendo los papeles."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -50, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -1,
        "feedback": "Cediste al chantaje. Ahora el usuario lo volverá a hacer bajo otro nombre y eres un blanco fácil continuo."
      },
      {
        "movimientos": [],
        "reputacion": 3,
        "feedback": "Actitud profesional. La plataforma revisa tu reporte, borra la reseña falsa y sales indemne de la situación."
      },
      {
        "movimientos": [
          { "dinero": -300, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Tu respuesta agresiva y desproporcionada se hace viral en el barrio. Has dañado seriamente la reputación de tu marca."
      }
    ]
  },
  {
    "id": 276,
    "formato": "correo",
    "remitente": "Cámara de Comercio",
    "email": "formacion@camaracomercio.org",
    "destinatario": "Tu empresa",
    "fecha": "11 de julio de 2028 · 10:15",
    "asunto": "Curso bonificado de 'Atención al Cliente Digital'",
    "mensaje": "Estimado socio,\n\nLe informamos de que se ha abierto el plazo para el curso presencial de 'Atención al Cliente en Redes Sociales' para sus empleados.\n\nEl coste es de 200€, pero es 100% bonificable a través de los seguros sociales del próximo mes. Implica que el empleado acuda 2 mañanas completas al curso.",
    "firma": "Dpto. Formación Contínua",
    "adjunto": "Temario_Curso.pdf",
    "opciones": [
      "Apuntar a tu mejor empleado. Cuesta cuadrar turnos, pero mejorará la atención.",
      "No apuntar a nadie. No puedes permitirte perder a un empleado dos mañanas completas.",
      "Apuntar al empleado, cobrar la bonificación, pero decirle que no vaya y se quede trabajando."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -200, "categoria_pnl": "Personal y SS" },
          { "dinero": 200, "categoria_pnl": "Subvenciones" },
          { "dinero": 150, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 4,
        "feedback": "Gran inversión a coste cero real. El empleado vuelve motivado, aplicáis lo aprendido y la captación online de clientes mejora muchísimo."
      },
      {
        "movimientos": [],
        "reputacion": 0,
        "feedback": "No asumes riesgos organizativos, pero tu equipo se queda atrás en habilidades digitales respecto a la competencia."
      },
      {
        "movimientos": [
          { "dinero": -1000, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -6,
        "feedback": "Cometes fraude en la formación bonificada. Inspección de Trabajo cruza datos y te sanciona con una multa altísima."
      }
    ]
  },
  {
    "id": 277,
    "formato": "correo",
    "remitente": "Nuevo Centro Comercial 'Plaza'",
    "email": "aperturas@ccplaza.com",
    "destinatario": "Tu empresa",
    "fecha": "01 de agosto de 2028 · 12:00",
    "asunto": "Inauguración Próxima",
    "mensaje": "¡Hola vecino!\n\nLe escribimos para presentarnos. El mes que viene inauguramos el nuevo centro comercial a solo 3 calles de su local. Tendremos grandes franquicias y mucho ocio.\n\nEsperamos dinamizar el barrio y que todos salgamos ganando.",
    "firma": "Dirección CC Plaza",
    "adjunto": null,
    "opciones": [
      "Invertir 300€ en un rediseño del escaparate y lanzar una campaña de fidelización para no perder clientes.",
      "No hacer nada, crees que tus clientes son fieles y no se irán a la franquicia grande.",
      "Entrar en pánico y bajar todos los precios de tu tienda un 20% para competir."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -300, "categoria_pnl": "Publicidad" },
          { "dinero": 400, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 3,
        "feedback": "Tu negocio se ve moderno, retienes a tu gente y encima atraes a parte del público nuevo que visita el barrio atraído por el centro comercial."
      },
      {
        "movimientos": [
          { "dinero": -500, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 0,
        "feedback": "La novedad del centro comercial arrasa y tus clientes te olvidan un poco. Pierdes facturación este mes por inacción."
      },
      {
        "movimientos": [
          { "dinero": -800, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -2,
        "feedback": "Guerra de precios inútil. Trabajas el doble de horas y esfuerzo para ganar la mitad, destruyendo tus márgenes comerciales."
      }
    ]
  },
  {
    "id": 278,
    "formato": "correo",
    "remitente": "Banco del Comercio",
    "email": "comisiones@bancocomercio.es",
    "destinatario": "Tu empresa",
    "fecha": "15 de septiembre de 2028 · 08:30",
    "asunto": "Actualización de comisiones de mantenimiento",
    "mensaje": "Estimado cliente,\n\nLe informamos que a partir del día 1 del próximo mes, la comisión de mantenimiento de su cuenta de empresa pasará de 15€ a 45€ trimestrales.\n\nPara evitar esta comisión, deberá domiciliar el pago de los Seguros Sociales y mantener un saldo medio superior a 10.000€.",
    "firma": "Su Oficina Bancaria",
    "adjunto": null,
    "opciones": [
      "Aceptar y pagar los 45€ trimestrales para no complicarte la vida cambiando cosas.",
      "Llamar al gestor del banco, amenazar con llevarte la cuenta y exigir que te quiten la comisión.",
      "Cumplir las condiciones, domiciliando los pagos requeridos para evitar la comisión."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -45, "categoria_pnl": "Costos Financieros" }
        ],
        "reputacion": 0,
        "feedback": "Asumes un gasto bancario innecesario por pura dejadez."
      },
      {
        "movimientos": [
          { "dinero": -50, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -1,
        "feedback": "El banco no cede ante amenazas y te invita a cerrar la cuenta. Pierdes energía y asumes pequeños costes burocráticos migrando todo a otra entidad."
      },
      {
        "movimientos": [],
        "reputacion": 2,
        "feedback": "Excelente gestión financiera. Aprovechas las herramientas a tu alcance, cambias unas domiciliaciones y eliminas gastos bancarios superfluos."
      }
    ]
  },
  {
    "id": 279,
    "formato": "correo",
    "remitente": "Ofimática Central",
    "email": "pedidos@ofimaticacentral.com",
    "destinatario": "Tu empresa",
    "fecha": "10 de octubre de 2028 · 11:20",
    "asunto": "Alerta de Stock: Papel de tickets térmico",
    "mensaje": "Hola,\n\nLe escribimos porque hemos notado que no ha hecho su pedido trimestral de rollos de papel térmico para su caja registradora.\n\nActualmente hay rotura de stock en fábrica. Si hace el pedido hoy (60€), se lo reservamos para la entrega del viernes. Si espera, no habrá disponibilidad hasta fin de mes.",
    "firma": "Ventas y Distribución",
    "adjunto": null,
    "opciones": [
      "Hacer el pedido de 60€ inmediatamente para no quedarte sin papel de tickets.",
      "No pedirlo. Crees que tienes rollos suficientes en el almacén para aguantar.",
      "Cambiar el sistema para enviar solo tickets por email, ahorrando en papel."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -60, "categoria_pnl": "Suministros" }
        ],
        "reputacion": 1,
        "feedback": "Aseguras el material necesario para trabajar sin sobresaltos ni roturas de stock."
      },
      {
        "movimientos": [
          { "dinero": -150, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -3,
        "feedback": "Te quedas sin papel un sábado a media mañana. Tienes problemas para cobrar formalmente y das una imagen pésima a los clientes."
      },
      {
        "movimientos": [
          { "dinero": -10, "categoria_pnl": "Servicios" },
          { "dinero": 40, "categoria_pnl": "Suministros" }
        ],
        "reputacion": 4,
        "feedback": "Inviertes un poco en configurar tu TPV digitalmente, pero ahorras suministros a largo plazo y tu clientela agradece la iniciativa ecológica."
      }
    ]
  },
  {
    "id": 280,
    "formato": "correo",
    "remitente": "Seguros Protección Total",
    "email": "siniestros@protecciontotal.com",
    "destinatario": "Tu empresa",
    "fecha": "22 de noviembre de 2028 · 16:05",
    "asunto": "Resolución de Siniestro - Rotura de Toldo",
    "mensaje": "Estimado asegurado,\n\nEn respuesta a su parte sobre la rotura del toldo exterior por el temporal de viento, le informamos de que el perito ha tasado el daño en 800€.\n\nNo obstante, su póliza incluye una franquicia de 200€ que debe abonar usted. Procedemos a ingresarle los 600€ restantes.",
    "firma": "Dpto. Siniestros",
    "adjunto": "Tasacion_Pericial.pdf",
    "opciones": [
      "Aceptar el dinero, pagar tus 200€ y que te instalen el toldo nuevo ya.",
      "Quedarte con los 600€ del seguro, quitar los restos del toldo roto y no poner uno nuevo.",
      "Discutir con el seguro para no pagar la franquicia, retrasando la reparación."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -200, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": 2,
        "feedback": "El seguro cubre el grueso (600€) y tú pagas tu parte de franquicia. El local vuelve a lucir perfecto rápidamente y sigues trabajando normal."
      },
      {
        "movimientos": [
          { "dinero": 600, "categoria_pnl": "Financieros" },
          { "dinero": -300, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -4,
        "feedback": "Ganas liquidez hoy, pero la fachada del negocio se ve calva y descuidada, alejando a clientes exigentes día a día."
      },
      {
        "movimientos": [
          { "dinero": -150, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -2,
        "feedback": "Pasas semanas con el toldo roto colgando mientras te peleas inútilmente. Has firmado la franquicia, es legal, y mientras tanto das mala imagen."
      }
    ]
  },
  {
    "id": 281,
    "formato": "correo",
    "remitente": "Proveedor 'Delicias S.L.'",
    "email": "navidad@delicias.es",
    "destinatario": "Tu empresa",
    "fecha": "01 de diciembre de 2028 · 09:15",
    "asunto": "Cestas de Navidad para empleados",
    "mensaje": "Hola,\n\nComo cada año, les enviamos nuestro catálogo de cestas y lotes de Navidad para sus empleados.\n\nEl Lote Clásico (Embutidos, vino y turrones) cuesta 45€ por trabajador. Hagan su pedido antes del puente para garantizar la entrega.",
    "firma": "Dpto. Comercial",
    "adjunto": "Catalogo_Navidad.pdf",
    "opciones": [
      "Comprar las cestas de 45€ para agradecer al equipo su esfuerzo anual.",
      "Organizar una cena de picoteo informal en el local que te cueste unos 15€ por persona.",
      "No regalar nada este año, los gastos están siendo muy altos."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -135, "categoria_pnl": "Personal y SS" }
        ],
        "reputacion": 4,
        "feedback": "El equipo valora muchísimo el detalle clásico. Aumentas la retención de talento y la fidelidad laboral."
      },
      {
        "movimientos": [
          { "dinero": -45, "categoria_pnl": "Personal y SS" }
        ],
        "reputacion": 2,
        "feedback": "Una opción económica pero efectiva. Haces equipo, aunque algunos echan de menos el aguinaldo material."
      },
      {
        "movimientos": [],
        "reputacion": -3,
        "feedback": "Ahorras, pero el ambiente se enrarece. Los empleados sienten que su esfuerzo del año no se ha valorado nada."
      }
    ]
  },
  {
    "id": 282,
    "formato": "correo",
    "remitente": "Agencia de Marketing 'Click'",
    "email": "seo@agenciaclick.com",
    "destinatario": "Tu empresa",
    "fecha": "15 de enero de 2029 · 11:45",
    "asunto": "Aviso: Tu ficha de Google está perdiendo visibilidad",
    "mensaje": "Buenos días,\n\nSomos una agencia local. Hemos analizado tu presencia online y tu ficha de Google Maps está perdiendo posiciones frente a tu competencia. \n\nTe ofrecemos un servicio de optimización SEO local y respuesta profesional a reseñas por 100€ al mes, sin permanencia.",
    "firma": "Equipo Click",
    "opciones": [
      "Contratar el servicio un par de meses para ver si realmente traen más clientes.",
      "Aprovechar su aviso para dedicar tú mismo 2 horas semanales a actualizar fotos y responder reseñas gratis.",
      "Ignorarlo. Quien quiera buscarte en internet, ya te encontrará."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -100, "categoria_pnl": "Publicidad" },
          { "dinero": 150, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 2,
        "feedback": "Pagas por algo útil, la visibilidad mejora, pero delegas una tarea que podrías hacer tú fácilmente."
      },
      {
        "movimientos": [
          { "dinero": 100, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 4,
        "feedback": "Excelente actitud proactiva. Mejoras tu posicionamiento digital sin gastar un euro, solo con tu propio trabajo."
      },
      {
        "movimientos": [
          { "dinero": -300, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -2,
        "feedback": "Desapareces de las primeras búsquedas y las ventas caen porque la gente se va a la competencia más visible."
      }
    ]
  },
  {
    "id": 283,
    "formato": "correo",
    "remitente": "Unión de Comerciantes",
    "email": "socios@unioncomerciantes.org",
    "destinatario": "Tu empresa",
    "fecha": "05 de febrero de 2029 · 10:20",
    "asunto": "Campaña conjunta 'San Valentín en tu Barrio'",
    "mensaje": "Estimado socio,\n\nLa asociación va a lanzar una campaña publicitaria en radio y marquesinas para fomentar las compras locales por San Valentín.\n\nParticipar cuesta 75€. Su negocio será mencionado en la cuña de radio y recibirá cartelería oficial para el escaparate.",
    "firma": "Junta Directiva",
    "adjunto": "Dossier_SanValentin.pdf",
    "opciones": [
      "Pagar los 75€ y adornar el escaparate para atraer a los románticos rezagados.",
      "No participar y hacer tu propia promoción imprimiendo unos folletos por 20€.",
      "Ignorar la fecha. No crees que tu negocio sea el típico para regalos de enamorados."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -75, "categoria_pnl": "Publicidad" },
          { "dinero": 200, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 3,
        "feedback": "Buena inversión. Te sumas a la fuerza del grupo y recuperas la inversión con varias ventas adicionales."
      },
      {
        "movimientos": [
          { "dinero": -20, "categoria_pnl": "Publicidad" },
          { "dinero": 50, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 1,
        "feedback": "Haces ruido por tu cuenta. Ganas algo de venta, pero te pierdes la credibilidad de la campaña oficial."
      },
      {
        "movimientos": [],
        "reputacion": -1,
        "feedback": "Dejas pasar un pico de consumo brutal. Tus vecinos hacen caja y tú tienes una semana muy floja."
      }
    ]
  },
  {
    "id": 284,
    "formato": "correo",
    "remitente": "Inspección de Trabajo",
    "email": "notificaciones@mites.gob.es",
    "destinatario": "Tu empresa",
    "fecha": "18 de marzo de 2029 · 08:00",
    "asunto": "Requerimiento de Cuadrantes Horarios",
    "mensaje": "Notificación Electrónica Oficial:\n\nSe le requiere para que en el plazo de 5 días hábiles aporte el registro de jornada firmado de todos sus trabajadores, correspondiente a los últimos 6 meses.\n\nEl incumplimiento de este requerimiento conlleva sanciones graves.",
    "firma": "Ministerio de Trabajo y Economía Social",
    "opciones": [
      "Descargar los registros de tu App de fichaje, revisarlos con la gestoría y enviarlos tranquilos.",
      "Ponerte histérico porque no los tienes, y obligar a los empleados a firmar 6 meses de hojas falsas hoy mismo.",
      "Ignorar el correo pensando que como es automático, nadie lo va a revisar de verdad."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -30, "categoria_pnl": "Asesoría" }
        ],
        "reputacion": 2,
        "feedback": "Tu buena gestión previa da frutos. Pagas un pequeño trámite al asesor, envías todo perfecto y cierran el expediente."
      },
      {
        "movimientos": [],
        "reputacion": -5,
        "feedback": "Los empleados están muy cabreados y uno de ellos se chiva a la inspección. Estás en un lío legal monumental."
      },
      {
        "movimientos": [
          { "dinero": -2000, "categoria_pnl": "Impuestos" }
        ],
        "reputacion": -7,
        "feedback": "Desastre absoluto. Ignorar a Trabajo se considera obstrucción. Te sancionan con 2.000€ y una inspección presencial."
      }
    ]
  },
  {
    "id": 285,
    "formato": "correo",
    "remitente": "Carlos Martínez (Empleado)",
    "email": "c.martinez@tuempresa.com",
    "destinatario": "Gerencia",
    "fecha": "05 de mayo de 2029 · 09:10",
    "asunto": "Solicitud de anticipo de nómina",
    "mensaje": "Hola,\n\nTe escribo para pedirte un favor personal. He tenido una avería muy grande en el coche y necesito pagarla esta semana para poder venir a trabajar. \n\n¿Sería posible solicitar un anticipo de 400€ de la nómina de este mes?",
    "firma": "Gracias de antemano,\nCarlos",
    "opciones": [
      "Concederle el anticipo sin problemas, descontándolo a final de mes.",
      "Denegárselo argumentando que la política de la empresa no permite anticipos.",
      "Prestarle el dinero de tu propio bolsillo para no tocar la contabilidad del negocio."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 3,
        "feedback": "El empleado está muy agradecido y comprometido. El dinero sale ahora pero se ajusta en la nómina (impacto neto 0€ en el trimestre)."
      },
      {
        "movimientos": [],
        "reputacion": -3,
        "feedback": "Carlos tiene que pedir un microcrédito carísimo. Viene a trabajar estresado y su rendimiento cae en picado."
      },
      {
        "movimientos": [
          { "dinero": -400, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": 1,
        "feedback": "Mezclas finanzas personales con el negocio. A nivel contable es un desastre y asumes un riesgo innecesario."
      }
    ]
  },
  {
    "id": 286,
    "formato": "correo",
    "remitente": "Cámara de Comercio",
    "email": "eventos@camaracomercio.org",
    "destinatario": "Tu empresa",
    "fecha": "20 de mayo de 2029 · 11:30",
    "asunto": "Participación en Feria de Muestras Local",
    "mensaje": "Estimado comercio,\n\nEl próximo mes se celebra la Feria Anual de Muestras en el recinto ferial. Disponer de un stand de 3x3 metros para exponer y vender sus productos tiene un coste de 350€ por todo el fin de semana.\n\nEs un escaparate excelente por el que pasarán más de 10.000 personas.",
    "firma": "Organización Feria de Muestras",
    "adjunto": "Plano_Stands_2029.pdf",
    "opciones": [
      "Alquilar el stand y llevar a tu mejor personal para intentar vender a tope.",
      "Rechazar la oferta, es mucho esfuerzo logístico y prefieres centrarte en tu local.",
      "Alquilar el stand, pero ir tú solo sin mercancía, solo para repartir tarjetas de visita."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -350, "categoria_pnl": "Publicidad" },
          { "dinero": 950, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "¡Un éxito rotundo! Recuperas la inversión del stand y generas grandes beneficios por ventas directas, además de darte a conocer."
      },
      {
        "movimientos": [],
        "reputacion": 0,
        "feedback": "Te ahorras el dinero y el cansancio, pero pierdes una de las mejores oportunidades de networking del año."
      },
      {
        "movimientos": [
          { "dinero": -350, "categoria_pnl": "Publicidad" }
        ],
        "reputacion": -1,
        "feedback": "La gente pasa de largo al ver un stand vacío. Pagas el alquiler para nada y repartes muy pocas tarjetas."
      }
    ]
  },
  {
    "id": 287,
    "formato": "correo",
    "remitente": "Distribuidora 'El Sol' (Proveedores)",
    "email": "concurso@distribuidoraelsol.com",
    "destinatario": "Tu empresa",
    "fecha": "03 de junio de 2029 · 08:45",
    "asunto": "Comunicado oficial: Concurso de Acreedores",
    "mensaje": "Estimados clientes,\n\nLamentamos comunicarles que Distribuidora 'El Sol' ha entrado en concurso de acreedores. Se paralizan todos los envíos de forma inmediata.\n\nSi tienen pedidos pagados por adelantado, deberán contactar con el administrador concursal para entrar en la lista de devoluciones.",
    "firma": "Administración Concursal",
    "adjunto": "Auto_Juzgado.pdf",
    "opciones": [
      "Buscar a la desesperada un nuevo proveedor local, aunque sea más caro, para no quedar sin stock.",
      "Llenar tu web de reclamaciones públicas contra ellos esperando presionar para que te envíen la mercancía.",
      "Esperar tranquilamente a que el juez resuelva para ver si te devuelven el dinero o mandan el pedido."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -200, "categoria_pnl": "Compras/Materiales" }
        ],
        "reputacion": 2,
        "feedback": "Pierdes margen de beneficio al comprar más caro de urgencia, pero mantienes tu tienda abastecida y tus clientes no notan nada."
      },
      {
        "movimientos": [
          { "dinero": -400, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -3,
        "feedback": "Tus quejas no sirven de nada. Pierdes el dinero adelantado, te quedas sin stock y das mala imagen de desesperación."
      },
      {
        "movimientos": [
          { "dinero": -400, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -2,
        "feedback": "El proceso tarda años. Mientras tanto, tus estanterías están vacías y los clientes se van a la competencia."
      }
    ]
  },
  {
    "id": 288,
    "formato": "correo",
    "remitente": "Prevención de Riesgos Laborales S.L.",
    "email": "revisiones@prl-seguro.es",
    "destinatario": "Tu empresa",
    "fecha": "14 de junio de 2029 · 10:15",
    "asunto": "Actualización de botiquines y evaluación",
    "mensaje": "Hola,\n\nNos ponemos en contacto con usted porque según nuestro registro, el botiquín de su empresa tiene el material caducado y la evaluación de riesgos no contempla la nueva maquinaria.\n\nEl coste de reposición del botiquín y la visita del técnico evaluador es de 85€.",
    "firma": "Dpto. Revisiones PRL",
    "opciones": [
      "Aprobar el presupuesto de 85€ para tener la Prevención de Riesgos al día.",
      "Ir tú mismo a la farmacia, gastar 15€ en tiritas y obviar la visita del técnico.",
      "Ignorar el correo porque nunca pasa nada y tus empleados son muy cuidadosos."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -85, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 1,
        "feedback": "Cumples estrictamente la ley, garantizando un entorno seguro para tu plantilla."
      },
      {
        "movimientos": [
          { "dinero": -15, "categoria_pnl": "Compras/Materiales" }
        ],
        "reputacion": -2,
        "feedback": "Ahorraste dinero, pero si hay un accidente grave con la nueva maquinaria, el seguro no te cubrirá por falta de evaluación."
      },
      {
        "movimientos": [
          { "dinero": -1200, "categoria_pnl": "Impuestos" }
        ],
        "reputacion": -5,
        "feedback": "Una inspección de trabajo te sanciona duramente por no tener el Plan de Prevención de Riesgos actualizado."
      }
    ]
  },
  {
    "id": 289,
    "formato": "correo",
    "remitente": "Comisión de Fiestas Locales",
    "email": "info@fiestaslocales.es",
    "destinatario": "Tu empresa",
    "fecha": "02 de julio de 2029 · 12:00",
    "asunto": "Corte de calle por verbena popular",
    "mensaje": "Aviso a los comerciantes de la Calle Mayor:\n\nCon motivo de las fiestas patronales, la calle permanecerá cortada al tráfico y al paso peatonal normal (se montarán escenarios) durante todo el viernes y sábado próximo.\n\nDisculpen las molestias.",
    "firma": "Comisión de Fiestas",
    "adjunto": "Bando_Alcaldia.pdf",
    "opciones": [
      "Cerrar la tienda esos dos días, dar descanso al personal y evitar pagar luz para nada.",
      "Abrir y poner un stand en la puerta (con permiso) para vender bebidas frías y productos a los fiesteros.",
      "Abrir normal, quejándote todo el día de que la música no deja trabajar."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -150, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 0,
        "feedback": "Decisión prudente, pero pierdes la facturación de dos días comerciales importantes."
      },
      {
        "movimientos": [
          { "dinero": 500, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 4,
        "feedback": "¡Visión de lince! Te adaptas a la situación, aprovechas el tráfico de la verbena y haces el agosto."
      },
      {
        "movimientos": [
          { "dinero": -50, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -3,
        "feedback": "Nadie entra a comprar por el ruido y las vallas, y tú te ganas fama de gruñón en el barrio."
      }
    ]
  },
  {
    "id": 290,
    "formato": "correo",
    "remitente": "Agencia de Residuos",
    "email": "normativa@agenciaresiduos.org",
    "destinatario": "Tu empresa",
    "fecha": "18 de julio de 2029 · 09:30",
    "asunto": "Nueva Normativa de Envases Sostenibles",
    "mensaje": "Estimado comercio,\n\nLe recordamos que a partir del próximo mes entra en vigor la ley que prohíbe el uso de bolsas de plástico de un solo uso no reciclables, así como ciertos envases.\n\nDeberá sustituirlos por alternativas compostables o de papel certificado, bajo pena de sanción.",
    "firma": "Agencia Estatal de Residuos",
    "adjunto": "Guia_Normativa.pdf",
    "opciones": [
      "Comprar bolsas de papel ecológico inmediatamente, aunque cuesten un 30% más, y cobrar 5 céntimos a los clientes por ellas.",
      "Comprar las bolsas de papel, pero regalarlas asumiendo tú el coste para que el cliente no se queje.",
      "Intentar gastar primero las 5.000 bolsas de plástico viejo que tienes en el almacén a escondidas."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -30, "categoria_pnl": "Suministros" },
          { "dinero": 40, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 2,
        "feedback": "Te adaptas rápido a la ley. Cobrar la bolsa compensa el sobrecoste y reduce el consumo innecesario, mejorando tu imagen verde."
      },
      {
        "movimientos": [
          { "dinero": -80, "categoria_pnl": "Suministros" }
        ],
        "reputacion": 1,
        "feedback": "El cliente está contento, pero el margen de tus ventas se reduce significativamente al regalar bolsas caras."
      },
      {
        "movimientos": [
          { "dinero": -600, "categoria_pnl": "Impuestos" }
        ],
        "reputacion": -4,
        "feedback": "Un cliente te denuncia por darle plástico prohibido. Recibes una multa ecotasa."
      }
    ]
  },
  {
    "id": 291,
    "formato": "correo",
    "remitente": "DeliverApp Express",
    "email": "comercial@deliverapp.com",
    "destinatario": "Tu empresa",
    "fecha": "05 de agosto de 2029 · 11:10",
    "asunto": "Únete a nuestra plataforma de envíos a domicilio",
    "mensaje": "¡Hola!\n\nLleva tus productos a toda la ciudad en menos de 30 minutos. Te ofrecemos unirte a DeliverApp. \nSolo cobramos una comisión del 25% por cada pedido realizado a través de la app. Te entregamos la tablet de recepción de pedidos gratis.",
    "firma": "Equipo de Expansión DeliverApp",
    "opciones": [
      "Aceptar, subir los precios en la App un 20% para compensar su alta comisión y llegar a nuevos clientes.",
      "Aceptar manteniendo los mismos precios que en tienda para ser muy competitivos.",
      "Rechazar la oferta, un 25% de comisión se come todo el margen de beneficio de tu producto."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 150, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 2,
        "feedback": "Estrategia perfecta. Aumentas ventas atrayendo público digital sin destrozar tus márgenes de beneficio."
      },
      {
        "movimientos": [
          { "dinero": -80, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 4,
        "feedback": "Vendes muchísimo, pero con el 25% de comisión pierdes dinero con cada envío debido a los costes fijos."
      },
      {
        "movimientos": [],
        "reputacion": -1,
        "feedback": "Proteges tu margen, pero te cierras la puerta a un canal de venta clave hoy en día."
      }
    ]
  },
  {
    "id": 292,
    "formato": "correo",
    "remitente": "Banco del Comercio",
    "email": "empresas@bancocomercio.es",
    "destinatario": "Tu empresa",
    "fecha": "20 de agosto de 2029 · 08:35",
    "asunto": "Nueva Tarifa Plana para tu TPV",
    "mensaje": "Estimado cliente,\n\nVemos que tiene un gran volumen de cobros con tarjeta. Le proponemos cambiar su tarifa actual de TPV (0.8% de comisión por venta) a nuestra nueva 'Tarifa Plana TPV': 40€ al mes fijos, sin importar cuánto facture.\n\nPuede activar la tarifa plana desde la banca online.",
    "firma": "Dpto. Medios de Pago",
    "opciones": [
      "Aceptar la tarifa plana. 40€ parece poco sabiendo todo lo que facturas con tarjeta.",
      "Revisar tus ventas con tarjeta del mes pasado, hacer cálculos y decidir en base a los números reales.",
      "Ignorar al banco, siempre intentan colarte tarifas peores."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -40, "categoria_pnl": "Costos Financieros" }
        ],
        "reputacion": 0,
        "feedback": "Aceptas a ciegas. Resulta que facturas menos de 5.000€ en tarjeta al mes y la comisión antigua del 0.8% te salía más barata."
      },
      {
        "movimientos": [
          { "dinero": 20, "categoria_pnl": "Costos Financieros" }
        ],
        "reputacion": 2,
        "feedback": "Buena gestión. Haces números, descubres que te ahorras dinero y cambias de tarifa reduciendo costes financieros."
      },
      {
        "movimientos": [
          { "dinero": -15, "categoria_pnl": "Costos Financieros" }
        ],
        "reputacion": 0,
        "feedback": "Pagas de más por desconfiado. La tarifa plana te hubiera ahorrado comisiones los meses de alta facturación."
      }
    ]
  },
  {
    "id": 293,
    "formato": "correo",
    "remitente": "Técnico Climatización",
    "email": "aviso@climasur.es",
    "destinatario": "Tu empresa",
    "fecha": "15 de septiembre de 2029 · 14:20",
    "asunto": "Presupuesto avería Aire Acondicionado",
    "mensaje": "Hola,\n\nTras revisar la máquina de aire acondicionado que no enfría, el compresor está quemado.\n\nOpción A: Reparar el compresor viejo por 450€ (sin garantía de que dure mucho).\nOpción B: Instalar una máquina nueva, más eficiente energéticamente por 1.200€.",
    "firma": "Juan - Técnico ClimaSur",
    "adjunto": "Presupuestos.pdf",
    "opciones": [
      "Pagar 1.200€ por la máquina nueva, solicitando financiarla a plazos.",
      "Pagar los 450€ del parche para salir del paso este verano, el dinero está justo.",
      "Comprar tres ventiladores de aspas por 60€ y ponerlos por la tienda."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          {
            "dinero": -1200,
            "categoria_pnl": "Servicios"
          }
        ],
        "reputacion": 3,
        "feedback": "Gasto fuerte, pero definitivo. Aseguras el confort de clientes y ahorras en la factura de la luz cada mes."
      },
      {
        "movimientos": [
          {
            "dinero": -450,
            "categoria_pnl": "Servicios"
          }
        ],
        "reputacion": 0,
        "feedback": "La reparación barata falla a los dos meses y acabas teniendo que comprar la máquina nueva igualmente."
      },
      {
        "movimientos": [
          {
            "dinero": -60,
            "categoria_pnl": "Otros Gastos"
          }
        ],
        "reputacion": -5,
        "feedback": "El calor en la tienda es insoportable. Los clientes entran y se van inmediatamente sin comprar nada."
      }
    ]
  },
  {
    "id": 294,
    "formato": "correo",
    "remitente": "Comisaría Policía Local",
    "email": "alertas@policialocal.es",
    "destinatario": "Tu empresa",
    "fecha": "05 de octubre de 2029 · 09:05",
    "asunto": "Alerta en el comercio local: Billetes falsos",
    "mensaje": "Aviso urgente a comerciantes:\n\nSe ha detectado una red que está introduciendo billetes falsos de 50€ de muy alta calidad en los negocios del barrio. \n\nRecomendamos extremar las precauciones, adquirir rotuladores o máquinas detectoras y avisar al 092 en caso de sospecha.",
    "firma": "Unidad de Delincuencia Local",
    "opciones": [
      "Comprar urgentemente una máquina detectora de billetes homologada por 40€.",
      "Avisar a los empleados para que miren bien los billetes al trasluz y ya está.",
      "Poner un cartel diciendo 'No se aceptan billetes de 50€ ni superiores'."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -40, "categoria_pnl": "Compras/Materiales" }
        ],
        "reputacion": 1,
        "feedback": "Gasto pequeño e inteligente. Detectáis un billete falso esa misma tarde, ahorrándoos 50€ de pérdida."
      },
      {
        "movimientos": [
          { "dinero": -100, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -2,
        "feedback": "Los empleados con prisa no miran bien al trasluz y te cuelan dos billetes falsos de 50€."
      },
      {
        "movimientos": [
          { "dinero": -150, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -4,
        "feedback": "Pierdes ventas de alto valor porque los clientes no tienen cambio y se sienten tratados como delincuentes."
      }
    ]
  },
  {
    "id": 295,
    "formato": "correo",
    "remitente": "Universidad Local",
    "email": "practicas@universidad.edu",
    "destinatario": "Tu empresa",
    "fecha": "20 de octubre de 2029 · 11:30",
    "asunto": "Programa de Prácticas de Estudiantes",
    "mensaje": "Estimada empresa,\n\nAbrimos el programa de prácticas curriculares. Tenemos a estudiantes de Administración de Empresas buscando comercio local para hacer 100 horas de prácticas.\n\nNo hay obligación de pagar salario, pero se debe asignar un tutor que les enseñe el funcionamiento del negocio.",
    "firma": "Dpto. Orientación Profesional",
    "adjunto": "Convenio_Practicas.pdf",
    "opciones": [
      "Aceptar al estudiante y dedicar tiempo a enseñarle para que sea una ayuda real.",
      "Aceptar al estudiante solo para ponerle a hacer las tareas de limpieza pesadas gratis.",
      "Rechazarlo, enseñar a alguien que se va en un mes te quita demasiado tiempo."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 50, "categoria_pnl": "Personal y SS" }
        ],
        "reputacion": 5,
        "feedback": "El estudiante aprende rápido y te mejora varias hojas de Excel de gestión. Gran sinergia y excelente imagen social."
      },
      {
        "movimientos": [],
        "reputacion": -5,
        "feedback": "El estudiante te denuncia a la universidad por explotación. Te vetan del programa y dañas tu reputación."
      },
      {
        "movimientos": [],
        "reputacion": 0,
        "feedback": "Ahorras tiempo a corto plazo, pero pierdes la oportunidad de conocer a alguien con ideas frescas para el negocio."
      }
    ]
  },
  {
    "id": 296,
    "formato": "correo",
    "remitente": "Teleoperadora Nacional",
    "email": "empresas@teleoperadora.com",
    "destinatario": "Tu empresa",
    "fecha": "02 de noviembre de 2029 · 10:20",
    "asunto": "Fin de permanencia y nueva oferta",
    "mensaje": "Hola,\n\nTu permanencia en el pack 'Internet + Fijo Negocios' ha finalizado. A partir de ahora tu cuota mensual pasa automáticamente al precio estándar de 75€/mes (antes 45€/mes).\n\nSi firmas otra permanencia de 24 meses te lo dejamos en 65€/mes.",
    "firma": "Dpto. Fidelización",
    "opciones": [
      "Firmar la permanencia de 24 meses para que te bajen a 65€ rápido.",
      "Ignorar el correo, estás ocupado y pagarás los 75€/mes sin darte cuenta.",
      "Llamar a otra compañía de la competencia y portar las líneas por una oferta de 35€/mes."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -65, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 0,
        "feedback": "Te atas por dos años y sigues pagando bastante más caro que cuando tenías la oferta inicial."
      },
      {
        "movimientos": [
          { "dinero": -75, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 0,
        "feedback": "El clásico impuesto a la dejadez. Empiezas a pagar muchísimo más cada mes por el mismo servicio."
      },
      {
        "movimientos": [
          { "dinero": -35, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 2,
        "feedback": "Gestión impecable. Estar sin permanencia te permitió irte a la competencia y reducir gastos estructurales."
      }
    ]
  },
  {
    "id": 297,
    "formato": "correo",
    "remitente": "Gestoría Fiscal López & Asociados",
    "email": "noticias@lopezasociados.es",
    "destinatario": "Tu empresa",
    "fecha": "18 de noviembre de 2029 · 12:45",
    "asunto": "Urgente: Nueva Tasa Municipal por 'Uso de vía pública' de los rótulos",
    "mensaje": "Hola,\n\nEl Ayuntamiento acaba de aprobar una tasa que grava a todos los comercios que tengan rótulos salientes o letreros que ocupen la acera.\n\nTu rótulo mide 2 metros, por lo que te toca pagar unos 180€ anuales, salvo que lo retires y pongas uno plano pegado a la pared.",
    "firma": "Tu Asesoría",
    "adjunto": "Boletin_Ayuntamiento.pdf",
    "opciones": [
      "Pagar la tasa anual de 180€ y mantener el rótulo saliente que se ve desde toda la calle.",
      "Contratar a un operario por 300€ para que quite el rótulo y esquivar la tasa.",
      "No pagar la tasa, pensando que al ser una norma nueva no la van a vigilar."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          {
            "dinero": -180,
            "categoria_pnl": "Impuestos"
          }
        ],
        "reputacion": 2,
        "feedback": "Pagas el impuesto, pero el letrero saliente trae a muchos clientes despistados. Vale la pena mantener la visibilidad."
      },
      {
        "movimientos": [
          {
            "dinero": -300,
            "categoria_pnl": "Servicios"
          },
          {
            "dinero": -150,
            "categoria_pnl": "Operativos (Ventas)"
          }
        ],
        "reputacion": -2,
        "feedback": "Pagas un dineral por quitarlo y ahora tu tienda es invisible desde lejos. Pierdes ventas de paso."
      },
      {
        "movimientos": [
          {
            "dinero": -400,
            "categoria_pnl": "Impuestos"
          }
        ],
        "reputacion": -4,
        "feedback": "Te llega un recargo de apremio por no pagar la tasa a tiempo, más la obligación de retirarlo."
      }
    ]
  },
  {
    "id": 298,
    "formato": "correo",
    "remitente": "Centro Comercial 'Plaza'",
    "email": "gerencia@ccplaza.com",
    "destinatario": "Tu empresa",
    "fecha": "05 de diciembre de 2029 · 10:10",
    "asunto": "Propuesta de Stand Navideño",
    "mensaje": "Estimado comercio local,\n\nTenemos un espacio (pop-up store) libre en el pasillo principal de nuestro centro comercial para la campaña de Navidad (del 15 de dic al 5 de ene). \n\nEl precio especial para comerciantes del barrio es de 800€. Supone una exposición diaria a 15.000 personas.",
    "firma": "Gerencia CC Plaza",
    "adjunto": "Condiciones_PopUp.pdf",
    "opciones": [
      "Aceptar, contratar refuerzos y llevar tus mejores productos al centro comercial.",
      "Rechazar por ser muy caro, en tu local de siempre ya venderás suficiente en Navidad.",
      "Aceptar pero atenderlo tú solo, cerrando tu local habitual para no pagar sueldos."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -800, "categoria_pnl": "Alquiler" },
          { "dinero": 2000, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Riesgo alto, recompensa alta. Arrasas en ventas navideñas impulsivas y das a conocer tu marca a un público nuevo."
      },
      {
        "movimientos": [],
        "reputacion": 0,
        "feedback": "Decisión conservadora. Mantienes tus ventas normales, pero pierdes una ventana de exposición gigante."
      },
      {
        "movimientos": [
          { "dinero": -800, "categoria_pnl": "Alquiler" },
          { "dinero": 400, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -4,
        "feedback": "Cierras tu local habitual enfadando a tus clientes fieles, y te desbordas en el stand tú solo atendiendo mal."
      }
    ]
  },
  {
    "id": 299,
    "formato": "correo",
    "remitente": "Cliente Anónimo",
    "email": "cliente.satisfecho@hotmail.com",
    "destinatario": "Tu empresa",
    "fecha": "22 de enero de 2030 · 16:30",
    "asunto": "He resbalado en la entrada de su tienda",
    "mensaje": "Buenas tardes,\n\nEsta mañana entré a su tienda, el suelo estaba recién fregado sin señalizar y me caí de espaldas. Me he hecho daño en la cadera.\n\nNo quiero líos de juicios. Si me abonan 300€ para cubrir mis gastos de fisioterapia, no denunciaré a su seguro de responsabilidad civil.",
    "firma": "Un saludo",
    "adjunto": "Parte_Urgencias.pdf",
    "opciones": [
      "Pagarle los 300€ para que se calle y no afecte a la cuota de tu seguro.",
      "Avisar inmediatamente a tu seguro para que ellos gestionen la reclamación de forma legal.",
      "Responder diciendo que él entró corriendo, que es su culpa y que no le pagas nada."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -300, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -2,
        "feedback": "El cliente cobra y luego te denuncia igual. Has regalado el dinero por no usar los cauces legales."
      },
      {
        "movimientos": [],
        "reputacion": 2,
        "feedback": "Haces lo correcto. Tu seguro de responsabilidad civil se encarga de verificar el daño y pagarlo si procede."
      },
      {
        "movimientos": [
          { "dinero": -1500, "categoria_pnl": "Asesoría" }
        ],
        "reputacion": -5,
        "feedback": "Te demanda. Como no tenías cartel de suelo mojado, el juez te condena a pagar una indemnización altísima y costas."
      }
    ]
  },
  {
    "id": 300,
    "formato": "correo",
    "remitente": "Agencia Tributaria",
    "email": "noreply@correo.aeat.es",
    "destinatario": "Tu empresa",
    "fecha": "14 de febrero de 2030 · 08:00",
    "asunto": "Aviso de Pago: IVA Trimestral",
    "mensaje": "Estimado contribuyente,\n\nLe recordamos que el día 20 finaliza el plazo para el pago domiciliado de su declaración trimestral de IVA. \n\nEl importe resultante de su autoliquidación asciende a: 1.850€. Asegúrese de disponer de saldo en la cuenta.",
    "firma": "Agencia Estatal de Administración Tributaria",
    "opciones": [
      "Asegurarte de que hay fondos en la cuenta para que te cobren el día 20.",
      "Entrar en la banca online y devolver el recibo porque este mes andas justo de liquidez.",
      "Pedir un préstamo rápido al 20% de interés porque habías gastado el dinero del IVA en mercancía."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -1850, "categoria_pnl": "Impuestos" }
        ],
        "reputacion": 2,
        "feedback": "Gestión responsable. El IVA nunca fue tuyo, es del estado. Lo pagas sin recargos."
      },
      {
        "movimientos": [
          { "dinero": -2220, "categoria_pnl": "Impuestos" }
        ],
        "reputacion": -5,
        "feedback": "Devolver el recibo de Hacienda es un suicidio financiero. Te meten un 20% de recargo de apremio automático."
      },
      {
        "movimientos": [
          { "dinero": -1850, "categoria_pnl": "Impuestos" },
          { "dinero": -150, "categoria_pnl": "Costos Financieros" }
        ],
        "reputacion": -3,
        "feedback": "Pagas, pero asumes intereses altísimos por haber utilizado un dinero (el IVA) que no te pertenecía."
      }
    ]
  },
  {
    "id": 301,
    "formato": "correo",
    "remitente": "Comercio Competencia",
    "email": "gerencia@elrival.com",
    "destinatario": "Tu empresa",
    "fecha": "05 de marzo de 2030 · 11:20",
    "asunto": "Propuesta de traspaso de mercancía por jubilación",
    "mensaje": "Hola,\n\nComo sabes, mi tienda de la calle de atrás cierra por jubilación el mes que viene. \n\nMe queda bastante mercancía de alta calidad en el almacén (valorada en unos 2.000€ P.V.P). Si me das 500€ en efectivo hoy, te lo llevas todo en cajas. Es una ganga.",
    "firma": "Manolo - Antiguo Rival",
    "adjunto": "Fotos_Mercancia.zip",
    "opciones": [
      "Cerrar el trato al instante. Por 500€ vas a sacar un beneficio tremendo.",
      "Pedirle que te haga una factura formal y listado detallado para que entre legalmente en tu inventario.",
      "No comprarlo, es de la competencia y no quieres vender sus marcas."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -500, "categoria_pnl": "Compras/Materiales" }
        ],
        "reputacion": -4,
        "feedback": "Compraste en negro. No puedes justificar la entrada de mercancía, te arriesgas a multas y los clientes no tienen garantía de lo que compran."
      },
      {
        "movimientos": [
          { "dinero": -500, "categoria_pnl": "Compras/Materiales" },
          { "dinero": 1500, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 3,
        "feedback": "Excelente visión. Consigues un margen de venta altísimo haciendo las cosas bien a nivel contable y absorbes clientes de la competencia."
      },
      {
        "movimientos": [],
        "reputacion": 0,
        "feedback": "Dejas pasar una oportunidad de rentabilidad pura por orgullo, mientras otro negocio vecino la aprovecha."
      }
    ]
  },
  {
    "id": 302,
    "formato": "correo",
    "remitente": "Sindicato de Estibadores",
    "email": "prensa@sindicato.org",
    "destinatario": "Tu empresa",
    "fecha": "18 de abril de 2030 · 09:15",
    "asunto": "Aviso de huelga indefinida en Puertos",
    "mensaje": "Comunicado de prensa:\n\nInformamos a las empresas que debido al fracaso de las negociaciones colectivas, el sector portuario comenzará una huelga indefinida a partir del día 1 del próximo mes.\n\nHabrá bloqueos en el suministro de mercancía internacional.",
    "firma": "Comité de Huelga",
    "opciones": [
      "Hacer un pedido masivo a tus proveedores internacionales hoy mismo para acumular stock antes de la huelga.",
      "Contactar con proveedores locales alternativos (aunque sean más caros) para no depender de los puertos.",
      "No hacer nada, las huelgas suelen desconvocarse en el último momento."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -800, "categoria_pnl": "Compras/Materiales" }
        ],
        "reputacion": 0,
        "feedback": "Inmovilizas mucha liquidez. Tienes stock, pero tus cuentas bancarias tiemblan para pagar nóminas este mes."
      },
      {
        "movimientos": [
          { "dinero": -200, "categoria_pnl": "Compras/Materiales" }
        ],
        "reputacion": 4,
        "feedback": "Gestión resiliente. Reduces riesgos logísticos confiando en proveedores nacionales, garantizando suministro estable para tus clientes."
      },
      {
        "movimientos": [
          { "dinero": -600, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -3,
        "feedback": "La huelga se hace efectiva. Te quedas sin tus productos estrella durante semanas y las ventas caen en picado."
      }
    ]
  },
  {
    "id": 303,
    "formato": "correo",
    "remitente": "Diseñadora Freelance",
    "email": "laura.designs@gmail.com",
    "destinatario": "Tu empresa",
    "fecha": "02 de mayo de 2030 · 13:45",
    "asunto": "Propuesta de rediseño de marca",
    "mensaje": "¡Hola equipo!\n\nSoy Laura, diseñadora gráfica de la zona. He visto que vuestro logo y la estética exterior de la tienda están un poco desfasados.\n\nOs propongo un rebranding completo (logo, colores, tipografía para carteles y redes) por 250€. Modernizaría muchísimo vuestra imagen.",
    "firma": "Laura Gómez\nDiseñadora Freelance",
    "adjunto": "Portfolio_Laura.pdf",
    "opciones": [
      "Contratar el rebranding por 250€ para rejuvenecer la marca y atraer a un público más joven.",
      "Pedirle amablemente que te baje el precio a 100€ a cambio de dejarle poner su firma en tu escaparate.",
      "Ofenderte y decirle que el logo lo hizo tu sobrino hace años y no lo vas a cambiar."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -250, "categoria_pnl": "Servicios" },
          { "dinero": 400, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 4,
        "feedback": "La nueva imagen es todo un éxito. La tienda luce moderna, limpia y consigues revitalizar tu presencia, atrayendo más público."
      },
      {
        "movimientos": [
          { "dinero": -100, "categoria_pnl": "Servicios" }
        ],
        "reputacion": -2,
        "feedback": "Acepta de mala gana. Hace un trabajo a medias, sin esfuerzo y tener 'diseñado por Laura' en el escaparate no queda nada profesional."
      },
      {
        "movimientos": [],
        "reputacion": -1,
        "feedback": "Te quedas con una imagen anticuada que empieza a alejar a las nuevas generaciones de clientes."
      }
    ]
  },
  {
    "id": 304,
    "formato": "correo",
    "remitente": "Inspección de Trabajo",
    "email": "citas@mites.gob.es",
    "destinatario": "Tu empresa",
    "fecha": "20 de mayo de 2030 · 08:30",
    "asunto": "Resolución de Inspección - Resultado Favorable",
    "mensaje": "Estimado contribuyente,\n\nLe comunicamos que el expediente sancionador abierto tras la visita de la inspección el mes pasado ha sido CERRADO.\n\nSe ha comprobado que el registro de jornada y los contratos están en perfecto orden. No procede sanción alguna.",
    "firma": "Ministerio de Trabajo y Economía Social",
    "adjunto": "Resolucion_Expediente.pdf",
    "opciones": [
      "Alegrarte en silencio y seguir con el día a día del negocio.",
      "Enviar un mensaje de agradecimiento a tu asesoría por su buen trabajo y mantenerles la cuota.",
      "Invitar a los empleados a desayunar ese día para celebrar que estáis haciendo las cosas bien juntos."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 1,
        "feedback": "Cierras el asunto con tranquilidad, validando tu buena gestión y cumplimiento normativo."
      },
      {
        "movimientos": [],
        "reputacion": 2,
        "feedback": "Cuidas la relación con tu gestoría, garantizando que se seguirán esforzando por tener todo al día."
      },
      {
        "movimientos": [
          { "dinero": -15, "categoria_pnl": "Personal y SS" }
        ],
        "reputacion": 5,
        "feedback": "Gasto mínimo de enorme impacto. Creas un ambiente de confianza, transparencia y equipo. Gran liderazgo."
      }
    ]
  },
  {
    "id": 305,
    "formato": "correo",
    "remitente": "Distribuciones Rápidas",
    "email": "incidencias@distribucionesrapidas.es",
    "destinatario": "Tu empresa",
    "fecha": "15 de junio de 2030 · 09:12",
    "asunto": "Error en su pedido #4092",
    "mensaje": "Buenos días,\n\nLe pedimos disculpas, pero por un error informático en nuestro almacén, el pedido que recibirá hoy no contiene los productos de gama alta que solicitó, sino los de gama económica.\n\nPodemos tramitar la devolución y enviarle los correctos la semana que viene, o puede quedarse esta mercancía con un 50% de descuento.",
    "firma": "Dpto. Logística",
    "opciones": [
      "Quedarse la mercancía con el descuento para venderla barata como oferta especial.",
      "Devolverla y esperar una semana sin stock de esos productos clave.",
      "Quedarse la mercancía barata e intentar venderla al precio de la gama alta."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -100, "categoria_pnl": "Compras/Materiales" },
          { "dinero": 250, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 2,
        "feedback": "Aprovechas el descuento para hacer una promoción. Mantienes el flujo de caja y los clientes agradecen la oferta económica."
      },
      {
        "movimientos": [
          { "dinero": -250, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 0,
        "feedback": "Te quedas sin productos clave toda una semana y pierdes ventas importantes por falta de stock."
      },
      {
        "movimientos": [
          { "dinero": 150, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -6,
        "feedback": "Ganas dinero a corto plazo, pero los clientes se dan cuenta del engaño. Tu reputación cae en picado y te exigen devoluciones."
      }
    ]
  },
  {
    "id": 306,
    "formato": "correo",
    "remitente": "Soporte Internet Pro",
    "email": "averias@internetpro.com",
    "destinatario": "Tu empresa",
    "fecha": "28 de junio de 2030 · 11:45",
    "asunto": "Corte de servicio por obras en la calle",
    "mensaje": "Estimado cliente,\n\nDebido a unas obras en el alcantarillado municipal, el cable de fibra óptica de su calle ha sido seccionado. \nEstimamos que la reparación tardará al menos 48 horas. Durante este tiempo no dispondrá de internet ni teléfono fijo.",
    "firma": "Servicio Técnico",
    "opciones": [
      "Comprar un router 4G portátil por 60€ para que funcione el TPV y la música de la tienda.",
      "Cerrar la tienda esos dos días, ya que sin internet no puedes cobrar con tarjeta.",
      "Poner un cartel de 'Solo Efectivo' y cruzar los dedos."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -60, "categoria_pnl": "Suministros" },
          { "dinero": 300, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 1,
        "feedback": "Inversión rápida que salva el fin de semana. El negocio sigue funcionando con normalidad y no pierdes ventas."
      },
      {
        "movimientos": [
          { "dinero": -400, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -2,
        "feedback": "Cierras por un problema menor. Pierdes muchísimo dinero en ventas que podrías haber salvado fácilmente."
      },
      {
        "movimientos": [
          { "dinero": -150, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -1,
        "feedback": "Pierdes ventas impulsivas porque mucha gente hoy en día ya no lleva efectivo encima para pagar."
      }
    ]
  },
  {
    "id": 307,
    "formato": "correo",
    "remitente": "Seguridad y Alarmas",
    "email": "novedades@seguridadalarmas.es",
    "destinatario": "Tu empresa",
    "fecha": "05 de julio de 2030 · 10:00",
    "asunto": "Oferta: Cámaras de videovigilancia",
    "mensaje": "Hola,\n\nTras los recientes hurtos en comercios de su zona, le ofrecemos instalar un sistema de 4 cámaras HD en su local por un pago único de 250€.\nIncluye los carteles obligatorios de zona videovigilada y acceso desde su móvil.",
    "firma": "Comercial de Zona",
    "adjunto": "Presupuesto_Camaras.pdf",
    "opciones": [
      "Instalarlas para disuadir a los ladrones y controlar el local desde casa.",
      "No instalarlas, crees que dan sensación de desconfianza a tus clientes habituales.",
      "Comprar cámaras falsas de plástico por 20€ y pegarlas en el techo."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -250, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 1,
        "feedback": "Mejoras la seguridad. Los robos de pequeños artículos desaparecen y el equipo trabaja más tranquilo."
      },
      {
        "movimientos": [
          { "dinero": -150, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": 0,
        "feedback": "Esa misma semana te roban género valorado en 150€. Te arrepientes de no haber puesto las cámaras."
      },
      {
        "movimientos": [
          { "dinero": -20, "categoria_pnl": "Compras/Materiales" },
          { "dinero": -150, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -3,
        "feedback": "Los ladrones profesionales saben distinguir las falsas al instante. Te roban y encima quedas en ridículo ante tu equipo."
      }
    ]
  },
  {
    "id": 308,
    "formato": "correo",
    "remitente": "Gestoría Fiscal López & Asociados",
    "email": "laboral@lopezasociados.es",
    "destinatario": "Tu empresa",
    "fecha": "18 de agosto de 2030 · 14:20",
    "asunto": "Subida del Salario Mínimo Interprofesional",
    "mensaje": "Estimado cliente,\n\nLe informamos que el Gobierno ha aprobado una subida del SMI del 5%, con efectos retroactivos desde el 1 de enero.\nDeberemos abonar los atrasos a sus dos empleados de base en la nómina de este mes. El coste extra total será de 300€.",
    "firma": "Dpto. Laboral",
    "adjunto": "BOE_Subida_SMI.pdf",
    "opciones": [
      "Abonar la cantidad legalmente sin quejas y explicar la subida al equipo.",
      "Intentar reducirles las horas en contrato para compensar el sobrecoste salarial.",
      "Abonarlo pero quitarles el plus de transporte para que te cueste lo mismo."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -300, "categoria_pnl": "Personal y SS" }
        ],
        "reputacion": 3,
        "feedback": "Cumples la ley limpiamente. El equipo agradece la transparencia, cobran lo que les toca y su motivación aumenta."
      },
      {
        "movimientos": [
          { "dinero": -50, "categoria_pnl": "Asesoría" },
          { "dinero": -200, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Cambiar los contratos a la baja enfurece al personal. Su productividad cae drásticamente y el ambiente es tóxico."
      },
      {
        "movimientos": [
          { "dinero": -1500, "categoria_pnl": "Impuestos" }
        ],
        "reputacion": -6,
        "feedback": "Te denuncian. El plus era un derecho adquirido. La Inspección te sanciona y te obliga a pagar el doble por infracción grave."
      }
    ]
  },
  {
    "id": 309,
    "formato": "correo",
    "remitente": "Radio Local FM",
    "email": "publicidad@radiolocal.fm",
    "destinatario": "Tu empresa",
    "fecha": "02 de septiembre de 2030 · 11:15",
    "asunto": "Campaña de Vuelta al Cole",
    "mensaje": "¡Hola!\n\nLlega septiembre y la ciudad vuelve a la rutina. Le ofrecemos una campaña publicitaria en nuestra emisora: 5 cuñas diarias durante una semana en prime-time matutino por 180€.\n\nLlegará directamente a los padres y madres que van en coche al trabajo.",
    "firma": "Dpto. Publicidad",
    "opciones": [
      "Contratar la campaña para reactivar las ventas tras el verano.",
      "Contraofertar: Ofrecerles 100€ por emitirlas solo en el horario de tarde.",
      "Ignorar el correo, crees que la radio ya no la escucha nadie."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -180, "categoria_pnl": "Publicidad" },
          { "dinero": 400, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 4,
        "feedback": "La cuña es pegadiza. Muchas familias del barrio te escuchan en el coche y las ventas de la semana se disparan notablemente."
      },
      {
        "movimientos": [
          { "dinero": -100, "categoria_pnl": "Publicidad" },
          { "dinero": 120, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 1,
        "feedback": "Te aceptan la oferta, pero por la tarde hay menos tráfico. Ganas algo de visibilidad, pero sin el gran impacto de la mañana."
      },
      {
        "movimientos": [],
        "reputacion": 0,
        "feedback": "Ahorras el dinero, pero el arranque de septiembre es más flojo de lo esperado frente a los vecinos que sí invirtieron."
      }
    ]
  },
  {
    "id": 310,
    "formato": "correo",
    "remitente": "Propietario del Local",
    "email": "arrendador@fincas.es",
    "destinatario": "Tu empresa",
    "fecha": "15 de septiembre de 2030 · 09:30",
    "asunto": "Obras en la fachada del edificio",
    "mensaje": "Estimado inquilino,\n\nLe informo que la comunidad de propietarios va a iniciar unas obras de rehabilitación de la fachada la próxima semana.\nInstalarán andamios que taparán su escaparate y rótulo durante al menos un mes. No podemos evitarlo por motivos de seguridad.",
    "firma": "El Propietario",
    "opciones": [
      "Hablar con los obreros para que dejen libre la puerta y colgar una lona llamativa que diga 'ABIERTO por obras'.",
      "Exigirle al propietario una rebaja del alquiler del 50% este mes bajo amenaza de irte.",
      "Asumir que nadie entrará, dar vacaciones al personal y abrir solo por las mañanas."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -50, "categoria_pnl": "Publicidad" }
        ],
        "reputacion": 3,
        "feedback": "La lona funciona genial. Salvas el mes; los clientes entran y valoran tu actitud resolutiva y positiva frente a las adversidades."
      },
      {
        "movimientos": [],
        "reputacion": -2,
        "feedback": "El propietario se niega. Creas una relación muy tensa y al final tienes los andamios igual sin haber hecho nada por vender."
      },
      {
        "movimientos": [
          { "dinero": -400, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -3,
        "feedback": "Reduces el horario drásticamente, y tus ventas se desploman. Algunos clientes creen que has cerrado definitivamente."
      }
    ]
  },
  {
    "id": 311,
    "formato": "correo",
    "remitente": "Banco del Comercio",
    "email": "alertas@bancocomercio.es",
    "destinatario": "Tu empresa",
    "fecha": "05 de octubre de 2030 · 08:00",
    "asunto": "Aviso de Descubierto en Cuenta",
    "mensaje": "URGENTE:\n\nLe comunicamos que el cargo de los Seguros Sociales ha dejado su cuenta en números rojos (-145.20€).\n\nSi no regulariza el saldo antes de las 14:00h, se le aplicará una comisión por reclamación de posiciones deudoras de 39€.",
    "firma": "Oficina Principal",
    "opciones": [
      "Hacer una transferencia inmediata desde tu cuenta personal para cubrir el hueco.",
      "Llamar al gestor del banco para pedirle que retenga el cargo hasta mañana que ingreses la caja.",
      "Ignorarlo, no tienes dinero personal y asumes que te cobrarán la comisión."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 1,
        "feedback": "Mezclas finanzas personales y profesionales. Salvas la comisión temporalmente, pero descuadras tu contabilidad."
      },
      {
        "movimientos": [],
        "reputacion": 2,
        "feedback": "Buena relación bancaria. El gestor lo retiene por cortesía comercial y te salvas de la comisión sin poner dinero tuyo de urgencia."
      },
      {
        "movimientos": [
          { "dinero": -39, "categoria_pnl": "Costos Financieros" }
        ],
        "reputacion": -1,
        "feedback": "Pagas una comisión bancaria penalizadora y abusiva por falta de previsión y liquidez en la cuenta."
      }
    ]
  },
  {
    "id": 312,
    "formato": "correo",
    "remitente": "Comercial de Energía",
    "email": "ofertas@energiaverde.com",
    "destinatario": "Tu empresa",
    "fecha": "20 de octubre de 2030 · 12:15",
    "asunto": "Instalación de placas solares gratuitas",
    "mensaje": "Estimado comercio,\n\nLe ofrecemos instalar paneles solares en el tejado de su local a COSTE CERO. A cambio, usted firma un contrato de permanencia de 5 años consumiendo nuestra energía a una tarifa fija.\n\nAhorrará un 20% mensual en su factura de luz actual desde el primer día.",
    "firma": "Consultor Energético",
    "adjunto": "Contrato_Solar.pdf",
    "opciones": [
      "Aceptar y firmar el contrato para ser más ecológicos y ahorrar a largo plazo.",
      "Llevar el contrato a tu gestoría para que revisen la 'letra pequeña' antes de firmar nada.",
      "Borrar el correo. Nadie regala nada, seguro que es una estafa piramidal."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -300, "categoria_pnl": "Suministros" }
        ],
        "reputacion": -2,
        "feedback": "Había trampa. La tarifa fija era muy alta en horas comerciales. Acabas pagando más de luz que antes de tener las placas instaladas."
      },
      {
        "movimientos": [
          { "dinero": -30, "categoria_pnl": "Asesoría" },
          { "dinero": 150, "categoria_pnl": "Suministros" }
        ],
        "reputacion": 3,
        "feedback": "Bien jugado. El asesor descubre las cláusulas abusivas, negociáis una tarifa justa y logras un ahorro real mensual y ecológico."
      },
      {
        "movimientos": [],
        "reputacion": 0,
        "feedback": "Esquivas un posible engaño por desconfianza, pero mantienes tu factura de la luz intacta y dependes de energía tradicional."
      }
    ]
  },
  {
    "id": 313,
    "formato": "correo",
    "remitente": "Elena (Gestoría López)",
    "email": "contabilidad@lopezasociados.es",
    "destinatario": "Tu empresa",
    "fecha": "12 de noviembre de 2030 · 09:40",
    "asunto": "Facturas sin justificar",
    "mensaje": "Hola,\n\nEstoy cerrando el trimestre y veo que has pasado 120€ en gastos de restaurantes en fin de semana y una factura de 50€ de una consola de videojuegos.\n\nHacienda no va a admitir esto como gasto de la empresa. ¿Lo meto como gasto no deducible o prefieres retirarlo de la contabilidad?",
    "firma": "Elena - Contable",
    "opciones": [
      "Decirle que lo retire, te equivocaste de tarjeta al pagar y lo asumes personalmente.",
      "Decirle que lo meta como deducible y que se invente que fue una comida de negocios.",
      "Enfadarte y decirle que para eso le pagas, para que te desgrave todo lo que compras."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -170, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": 2,
        "feedback": "Eres honesto. El dinero salió de la caja de la empresa por error, así que lo regularizas contablemente sin cometer fraude ni arriesgar multas."
      },
      {
        "movimientos": [
          { "dinero": -400, "categoria_pnl": "Impuestos" }
        ],
        "reputacion": -4,
        "feedback": "Fraude detectado. Una revisión rutinaria de Hacienda pilla la factura de la consola, te sanciona y te anula la deducción."
      },
      {
        "movimientos": [],
        "reputacion": -5,
        "feedback": "La contable se niega tajantemente a cometer fraude y renuncia a llevarte los papeles este trimestre por tu actitud prepotente."
      }
    ]
  },
  {
    "id": 314,
    "formato": "correo",
    "remitente": "Software TPV Pro",
    "email": "actualizaciones@tpvpro.com",
    "destinatario": "Tu empresa",
    "fecha": "01 de diciembre de 2030 · 10:10",
    "asunto": "Migración a la nube obligatoria",
    "mensaje": "Estimado cliente,\n\nEl próximo año dejamos de dar soporte al programa instalado en su ordenador. Debe migrar a nuestra plataforma en la nube (Cloud TPV).\n\nLa migración de todos sus productos e historial tiene un coste de 80€, y la nueva cuota mensual pasará a ser de 25€/mes.",
    "firma": "Dpto. Sistemas",
    "opciones": [
      "Pagar la migración (80€) para no perder el historial y adaptarte al nuevo sistema.",
      "No pagar, instalar tú mismo un programa gratis de internet y empezar el inventario desde cero.",
      "Ignorar el correo y seguir usando el programa viejo aunque no tenga soporte."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          {
            "dinero": -80,
            "categoria_pnl": "Servicios"
          }
        ],
        "reputacion": 1,
        "feedback": "Asumes el coste técnico, pero el sistema en la nube es rápido, seguro y descubres que puedes ver las ventas desde casa en tiempo real."
      },
      {
        "movimientos": [
          {
            "dinero": -250,
            "categoria_pnl": "Personal y SS"
          }
        ],
        "reputacion": -2,
        "feedback": "Te pasas tres madrugadas metiendo códigos de barras a mano. Estás agotado y hay fallos de precios al abrir la tienda."
      },
      {
        "movimientos": [
          {
            "dinero": -600,
            "categoria_pnl": "Servicios"
          },
          {
            "dinero": -200,
            "categoria_pnl": "Operativos (Ventas)"
          }
        ],
        "reputacion": -5,
        "feedback": "El ordenador se estropea en plena campaña. El programa viejo no tenía copia de seguridad y pierdes toda tu contabilidad y bloqueas las ventas."
      }
    ]
  },
  {
    "id": 315,
    "formato": "correo",
    "remitente": "Servicios Integrales de Limpieza",
    "email": "comercial@limpiezaintegral.es",
    "destinatario": "Tu empresa",
    "fecha": "14 de enero de 2031 · 11:30",
    "asunto": "Servicio de Limpieza de Cristales y Rótulos",
    "mensaje": "Hola,\n\nEl invierno ha dejado su escaparate y su rótulo llenos de manchas de lluvia y barro. Un escaparate sucio aleja a los clientes.\n\nLe ofrecemos una limpieza profesional exterior en altura con pértiga y productos repelentes de agua por solo 45€.",
    "firma": "Equipo de Limpieza",
    "opciones": [
      "Contratar el servicio por 45€ para dar una imagen impecable.",
      "Comprar un limpiacristales por 5€ y decirle a un empleado que salga con una escalera a limpiarlo.",
      "Dejarlo así, cuando llueva otra vez ya se limpiará un poco."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -45, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 3,
        "feedback": "El local brilla. La gente se para a ver el escaparate porque se ve perfectamente el interior, mejorando la imagen de marca."
      },
      {
        "movimientos": [
          { "dinero": -5, "categoria_pnl": "Compras/Materiales" },
          { "dinero": -1500, "categoria_pnl": "Seguros" }
        ],
        "reputacion": -5,
        "feedback": "¡Desastre! El empleado se resbala y cae de la escalera. Tienes una baja médica, inspección de trabajo y una culpa moral terrible."
      },
      {
        "movimientos": [
          { "dinero": -80, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -3,
        "feedback": "El local parece abandonado o de baja calidad frente al resto de la calle. Pierdes clientes por mala imagen exterior."
      }
    ]
  },
  {
    "id": 316,
    "formato": "correo",
    "remitente": "Colegio Público 'El Roble'",
    "email": "direccion@ceipelroble.edu",
    "destinatario": "Tu empresa",
    "fecha": "05 de febrero de 2031 · 09:20",
    "asunto": "Patrocinio equipo infantil",
    "mensaje": "Estimado comercio del barrio,\n\nEstamos buscando pequeños patrocinios para comprar las nuevas equipaciones del equipo infantil del colegio.\n\nAportando 60€, el logo de su tienda aparecerá en el pantalón de los niños y en el cartel del torneo. Es por una buena causa.",
    "firma": "AMPA del Colegio",
    "opciones": [
      "Donar los 60€ con gusto para apoyar al deporte escolar del barrio.",
      "Ofrecer un descuento del 15% en tu tienda para los socios del AMPA en lugar de dar dinero.",
      "Decir que la economía está mal y no puedes permitirte ese gasto."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -60, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": 4,
        "feedback": "Haces una buena labor social, apoyas al equipo local, quedas genial y ganas mucha simpatía duradera en el vecindario."
      },
      {
        "movimientos": [
          { "dinero": -20, "categoria_pnl": "Publicidad" },
          { "dinero": 150, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "¡Estrategia comercial brillante! Te ganas a todos los padres del colegio, que empiezan a comprar en tu tienda masivamente gracias al descuento."
      },
      {
        "movimientos": [],
        "reputacion": -1,
        "feedback": "No donas nada, los padres lo comentan a la salida del colegio y prefieren ir a comprar a la tienda del vecino que sí patrocinó al equipo."
      }
    ]
  },
  {
    "id": 317,
    "formato": "correo",
    "remitente": "Cámara de Comercio",
    "email": "concursos@camaracomercio.org",
    "destinatario": "Tu empresa",
    "fecha": "20 de marzo de 2031 · 10:45",
    "asunto": "Concurso 'Mejor Escaparate de Primavera'",
    "mensaje": "¡Participe en el certamen anual!\n\nInscribir a su comercio tiene un coste de 25€ para gastos de gestión. Un jurado pasará por las calles valorando la originalidad y el diseño.\n\nEl ganador se lleva un premio de 500€ en metálico y un reportaje en el periódico local.",
    "firma": "Organización del Concurso",
    "adjunto": "Bases_Escaparates.pdf",
    "opciones": [
      "Pagar los 25€, gastar otros 50€ en materiales florales y esforzarte al máximo en el diseño.",
      "Pagar los 25€ y apuntarte sin tocar el escaparate actual, a ver si hay suerte.",
      "No participar, crees que siempre ganan los mismos amiguismos."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -75, "categoria_pnl": "Publicidad" },
          { "dinero": 500, "categoria_pnl": "Subvenciones" },
          { "dinero": 200, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 6,
        "feedback": "¡GANASTE! Te llevas el premio económico, el reportaje te trae decenas de clientes nuevos y todo el barrio habla de lo bonita que está la tienda."
      },
      {
        "movimientos": [
          { "dinero": -25, "categoria_pnl": "Publicidad" }
        ],
        "reputacion": 0,
        "feedback": "Tiras 25€ a la basura. El jurado pasa, nota tu nulo esfuerzo y quedas de los últimos en la votación."
      },
      {
        "movimientos": [],
        "reputacion": 0,
        "feedback": "No pierdes dinero, pero tu tienda se ve triste y sosa en comparación con el resto de comercios de la calle que sí se engalanaron."
      }
    ]
  },
  {
    "id": 318,
    "formato": "correo",
    "remitente": "Proveedor Informático",
    "email": "ventas@pc-total.es",
    "destinatario": "Tu empresa",
    "fecha": "10 de abril de 2031 · 15:30",
    "asunto": "Oferta: Renovación de equipos informáticos",
    "mensaje": "Hola,\n\nEl ordenador de caja que nos compró hace 6 años ya está obsoleto y podría fallar en cualquier momento.\n\nTenemos una oferta limitada: un nuevo ordenador TPV táctil, rápido y con cajón portamonedas por 650€ (IVA incluido).",
    "firma": "Comercial PC-Total",
    "adjunto": "Presupuesto_Equipo.pdf",
    "opciones": [
      "Comprarlo inmediatamente, es vital que la caja cobre rápido y no se cuelgue.",
      "Esperar a que el ordenador viejo se rompa del todo para cambiarlo, hay que estirar las cosas.",
      "Buscar en una tienda de segunda mano un ordenador viejo por 150€."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          {
            "dinero": -650,
            "categoria_pnl": "Suministros"
          }
        ],
        "reputacion": 2,
        "feedback": "Gran inversión preventiva. Ahora cobras el doble de rápido, las colas desaparecen y no tienes el estrés de que falle el sistema."
      },
      {
        "movimientos": [
          {
            "dinero": -800,
            "categoria_pnl": "Servicios"
          },
          {
            "dinero": -200,
            "categoria_pnl": "Operativos (Ventas)"
          }
        ],
        "reputacion": -4,
        "feedback": "El ordenador muere un viernes por la tarde en pleno pico de ventas. Cierras la tienda, pierdes clientes y pagas urgencias carísimas por uno nuevo."
      },
      {
        "movimientos": [
          {
            "dinero": -150,
            "categoria_pnl": "Suministros"
          },
          {
            "dinero": -100,
            "categoria_pnl": "Operativos (Ventas)"
          }
        ],
        "reputacion": -2,
        "feedback": "El ordenador de segunda mano va lentísimo, se cuelga constantemente con tu software de tienda y los clientes desesperan en la cola esperando el ticket."
      }
    ]
  },
  {
    "id": 319,
    "formato": "correo",
    "remitente": "Ayuntamiento - Urbanismo",
    "email": "notificaciones@ayuntamiento.es",
    "destinatario": "Tu empresa",
    "fecha": "25 de mayo de 2031 · 08:15",
    "asunto": "Sanción por ocupación indebida de la vía pública",
    "mensaje": "Notificación Oficial:\n\nEn la inspección realizada el día 20, se comprobó que su negocio tenía un expositor de productos ocupando parte de la acera sin la correspondiente licencia municipal.\n\nSe le impone una sanción administrativa de 150€ (reducida a 75€ por pronto pago).",
    "firma": "Dpto. Sanciones",
    "adjunto": "Multa_Ocupacion.pdf",
    "opciones": [
      "Pagar los 75€ rápido, retirar el expositor y aceptar la culpa.",
      "Recurrir la multa (pagando 50€ al asesor) alegando que solo era un ratito.",
      "No pagarla ni retirar el expositor, consideras que el ayuntamiento solo quiere robar."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -75, "categoria_pnl": "Impuestos" }
        ],
        "reputacion": 1,
        "feedback": "Pagas el error pronto con descuento y aprendes la lección sobre la normativa de licencias de vía pública."
      },
      {
        "movimientos": [
          { "dinero": -125, "categoria_pnl": "Asesoría" },
          { "dinero": -75, "categoria_pnl": "Impuestos" }
        ],
        "reputacion": 0,
        "feedback": "Pierdes el recurso porque los inspectores adjuntaron fotos claras. Acabas pagando al asesor y la multa completa sin descuento."
      },
      {
        "movimientos": [
          { "dinero": -400, "categoria_pnl": "Impuestos" }
        ],
        "reputacion": -3,
        "feedback": "Te embargan la cuenta por no pagar la sanción a tiempo y la policía local te requisa el expositor de la acera por reincidente."
      }
    ]
  },
  {
    "id": 320,
    "formato": "correo",
    "remitente": "Comercial de Seguros",
    "email": "agente@segurosrapidos.es",
    "destinatario": "Tu empresa",
    "fecha": "08 de junio de 2031 · 11:50",
    "asunto": "Ampliación Cobertura: Responsabilidad Cibernética",
    "mensaje": "Estimado asegurado,\n\nViendo que maneja datos de clientes y cobra con tarjeta, le recomendamos incluir la cobertura de 'Ciberseguridad y Protección de Datos' por 60€ extra al año.\n\nLe protegerá de posibles multas si su sistema sufre un hackeo o fuga de datos.",
    "firma": "Tu Agente Asesor",
    "opciones": [
      "Contratar la ampliación de 60€ por precaución.",
      "No contratarla. A ti quién te va a hackear, si eres una tienda pequeña.",
      "Decir que sí, pero revisar tú mismo tus contraseñas y software en lugar de pagar el seguro."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -60, "categoria_pnl": "Seguros" }
        ],
        "reputacion": 1,
        "feedback": "Asumes un pequeño coste anual por tranquilidad. Si alguna vez pasa algo grave con los datos de clientes, estarás respaldado."
      },
      {
        "movimientos": [
          { "dinero": -800, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -6,
        "feedback": "Un malware aleatorio roba tu base de datos de clientes. La Agencia de Protección de Datos te multa fuertemente y los clientes pierden toda la confianza."
      },
      {
        "movimientos": [],
        "reputacion": 3,
        "feedback": "Eres proactivo. Mejoras tu ciberseguridad internamente con buenas prácticas (antivirus, 2FA, contraseñas fuertes). Ahorras el seguro y minimizas el riesgo real."
      }
    ]
  },
  {
    "id": 321,
    "formato": "correo",
    "remitente": "Laura, Clienta Habitual",
    "email": "laura92@gmail.com",
    "destinatario": "Tu empresa",
    "fecha": "20 de julio de 2031 · 16:20",
    "asunto": "Sugerencia sobre vuestro horario",
    "mensaje": "Hola,\n\nMe encanta vuestra tienda, pero últimamente nunca puedo ir a comprar. Trabajo hasta las 19:30h y veo que vosotros cerráis a las 20:00h en punto. \n\nSería genial si algún día abrierais un poco más tarde para los que salimos a esa hora.",
    "firma": "Un saludo, Laura",
    "adjunto": null,
    "opciones": [
      "Atrasar el horario media hora (abrir más tarde y cerrar a las 20:30h) para captar al público de salida de oficinas.",
      "Mantener tu horario de siempre, no puedes cambiar todo por una clienta.",
      "Pagar horas extras a los empleados para abrir de forma ininterrumpida."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 120, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 4,
        "feedback": "Excelente decisión. Captas una franja horaria nueva muy rentable sin aumentar costes laborales."
      },
      {
        "movimientos": [],
        "reputacion": -1,
        "feedback": "Te mantienes inflexible. Laura y otros en su situación empiezan a comprar en internet."
      },
      {
        "movimientos": [
          { "dinero": -150, "categoria_pnl": "Personal y SS" },
          { "dinero": 80, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 1,
        "feedback": "Ganas algunas ventas más, pero el coste de las horas extra se come todo tu margen de beneficio."
      }
    ]
  },
  {
    "id": 322,
    "formato": "correo",
    "remitente": "Compañía de Aguas",
    "email": "facturacion@aguaslocales.com",
    "destinatario": "Tu empresa",
    "fecha": "05 de agosto de 2031 · 09:05",
    "asunto": "Aviso de posible fuga de agua",
    "mensaje": "Estimado abonado,\n\nNuestro sistema de telelectura ha detectado un consumo continuado inusual en su contador durante las noches de toda la última semana.\n\nEs altamente probable que tenga una fuga interna oculta. Le recomendamos revisarlo, su próxima factura será muy alta si no lo soluciona.",
    "firma": "Atención al Cliente",
    "adjunto": null,
    "opciones": [
      "Llamar a un fontanero de urgencia (120€) para que revise y arregle la fuga rápido.",
      "Cerrar la llave de paso cada noche y esperar a que el casero lo arregle la semana que viene.",
      "Ignorarlo. Tienes tarifa plana de agua en el alquiler, a ti no te cuesta más."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          {
            "dinero": -120,
            "categoria_pnl": "Servicios"
          }
        ],
        "reputacion": 2,
        "feedback": "Resolutivo. Gastas en el fontanero, arregla el inodoro que perdía agua y te salvas de un susto mayor."
      },
      {
        "movimientos": [
          {
            "dinero": -50,
            "categoria_pnl": "Servicios"
          }
        ],
        "reputacion": -1,
        "feedback": "Ahorras en el fontanero, pero una mañana se te olvida cerrar la llave y la tienda se inunda levemente."
      },
      {
        "movimientos": [
          {
            "dinero": -300,
            "categoria_pnl": "Otros Gastos"
          }
        ],
        "reputacion": -3,
        "feedback": "El contrato decía 'consumo razonable'. El casero te pasa la factura astronómica y si no pagas, te demanda."
      }
    ]
  },
  {
    "id": 323,
    "formato": "correo",
    "remitente": "Consultoría de Precios",
    "email": "info@pricingconsultants.com",
    "destinatario": "Tu empresa",
    "fecha": "18 de septiembre de 2031 · 11:30",
    "asunto": "Auditoría de tu estrategia de precios",
    "mensaje": "Hola,\n\nHemos hecho un estudio de mercado encubierto en su tienda. Conclusión: Sus productos estrella son demasiado baratos. Está perdiendo margen de beneficio y dando sensación de baja calidad.\n\nSi sube el precio un 10%, perderá algunos clientes, pero ganará más dinero al final de mes.",
    "firma": "Dpto. Consultoría",
    "adjunto": "Informe_Mistery_Shopper.pdf",
    "opciones": [
      "Subir los precios un 10% valientemente para mejorar tu margen de beneficio.",
      "Hacer una subida muy pequeña del 2% por si acaso se enfadan los clientes.",
      "No subir nada por miedo a perder ventas, a la gente le gusta lo barato."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 250, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 1,
        "feedback": "Te atreves y funciona. Vendes un poco menos en volumen, pero ganas mucho más dinero en neto."
      },
      {
        "movimientos": [
          { "dinero": 40, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 0,
        "feedback": "Ganas un poco más, pero tu miedo te impide alcanzar la rentabilidad que tu negocio realmente merece."
      },
      {
        "movimientos": [],
        "reputacion": -2,
        "feedback": "Te estancas. Tienes que trabajar muchísimas horas vendiendo volumen para poder pagar los gastos fijos."
      }
    ]
  },
  {
    "id": 324,
    "formato": "correo",
    "remitente": "Protección Civil",
    "email": "alertas@112.es",
    "destinatario": "Tu empresa",
    "fecha": "02 de octubre de 2031 · 07:15",
    "asunto": "Alerta Roja por Lluvias Torrenciales",
    "mensaje": "ALERTA A LA POBLACIÓN Y COMERCIOS:\n\nSe decreta Alerta Roja por precipitaciones extremas en las próximas horas. Riesgo alto de inundaciones en bajos comerciales.\n\nSe ruega asegurar puertas, colocar barreras si disponen de ellas y evitar la actividad si no es estrictamente necesaria.",
    "firma": "Centro de Coordinación de Emergencias",
    "adjunto": null,
    "opciones": [
      "Comprar sacos de arena rápido (30€), sellar las puertas y subir la mercancía del suelo, aunque no abras hoy.",
      "Abrir normal y poner unas toallas viejas en la puerta, seguro que no es para tanto.",
      "No ir. Quedarte durmiendo en casa porque hace mal tiempo."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          {
            "dinero": -30,
            "categoria_pnl": "Suministros"
          }
        ],
        "reputacion": 3,
        "feedback": "Inversión providencial. La calle se inunda, pero los sacos y tu previsión salvan toda tu mercancía y maquinaria."
      },
      {
        "movimientos": [
          {
            "dinero": -1500,
            "categoria_pnl": "Servicios"
          },
          {
            "dinero": -300,
            "categoria_pnl": "Operativos (Ventas)"
          }
        ],
        "reputacion": -2,
        "feedback": "El agua entra, arruina muebles de abajo, mercancía y te toca cerrar 3 días para limpiar barro."
      },
      {
        "movimientos": [
          {
            "dinero": -800,
            "categoria_pnl": "Servicios"
          },
          {
            "dinero": -150,
            "categoria_pnl": "Operativos (Ventas)"
          }
        ],
        "reputacion": -1,
        "feedback": "Al no preparar nada el día anterior, el agua entra en el almacén y te estropea cajas de producto almacenado."
      }
    ]
  },
  {
    "id": 325,
    "formato": "whatsapp",
    "remitente": "Carlos (Encargado)",
    "estado": "escribiendo...",
    "mensajes": [
      { "emisor": "remitente", "texto": "Jefe, he abierto la tienda pero tenemos un problema.", "hora": "08:05" },
      { "emisor": "remitente", "texto": "Se ha ido la luz en toda la manzana y los datáfonos no van. Hay clientes esperando para pagar.", "hora": "08:06" }
    ],
    "opciones": [
      "Decirles que solo aceptáis efectivo y apuntar las ventas a mano.",
      "Cerrar la persiana hasta que vuelva la luz para evitar caos de inventario.",
      "Regalar café/agua a los clientes en la puerta mientras esperáis a que vuelva."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 20, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -2,
        "feedback": "Salvas algunas ventas, pero muchos no llevan efectivo y se van molestos por las molestias."
      },
      {
        "movimientos": [
          { "dinero": -50, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -3,
        "feedback": "Pierdes todas las ventas de la mañana y los clientes sienten que falta profesionalidad."
      },
      {
        "movimientos": [
          { "dinero": -15, "categoria_pnl": "Suministros" }
        ],
        "reputacion": 5,
        "feedback": "Pierdes un poco en inventario regalado, pero la gente se toma el apagón con humor y ganas fidelidad."
      }
    ]
  },
  {
    "id": 326,
    "formato": "whatsapp",
    "remitente": "Marta (Gestoría)",
    "estado": "en línea",
    "mensajes": [
      { "emisor": "remitente", "texto": "¡Hola! Oye, nos faltan las facturas de proveedores de este trimestre.", "hora": "11:30" },
      { "emisor": "remitente", "texto": "El plazo en Hacienda acaba a las 14:00h. Si no las subes ya, nos cae recargo del 20%.", "hora": "11:31" }
    ],
    "opciones": [
      "Dejar todo lo que estás haciendo y buscar las facturas durante dos horas.",
      "Asumir el recargo porque estás atendiendo una reunión clave de ventas.",
      "Pagar el servicio 'exprés' a la gestoría para que ellos las rescaten de tu portal online."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": -1,
        "feedback": "Desatiendes un poco tu local, pero envías todo a tiempo. Cero multas."
      },
      {
        "movimientos": [
          { "dinero": -300, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": 0,
        "feedback": "La reunión de ventas no cubre el tremendo palo que te mete Hacienda por el retraso."
      },
      {
        "movimientos": [
          { "dinero": -80, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 1,
        "feedback": "Gastas dinero extra en gestión, pero te salvas de la multa y sacas adelante tus tareas de hoy."
      }
    ]
  },
  {
    "id": 327,
    "formato": "whatsapp",
    "remitente": "Elena (Clienta VIP)",
    "estado": "en línea",
    "mensajes": [
      { "emisor": "remitente", "texto": "Estoy indignada. El pedido que me llegó ayer venía roto y lo necesito para esta tarde.", "hora": "12:30" },
      { "emisor": "remitente", "texto": "Y no me cogen el teléfono en la tienda. ¡Soluciónamelo ya!", "hora": "12:31" }
    ],
    "opciones": [
      "Pedirle disculpas y enviarle un mensajero urgente con un reemplazo y un detalle.",
      "Decirle que abra una incidencia en la web y que se resolverá en 48 horas.",
      "Echarle la culpa a la empresa de transporte y devolverle el dinero directamente."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -40, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 6,
        "feedback": "Asumes un sobrecoste logístico, pero Elena queda tan sorprendida por la rapidez que te recomienda a sus contactos."
      },
      {
        "movimientos": [],
        "reputacion": -6,
        "feedback": "La burocracia enfurece a la clienta. Pierdes a una compradora recurrente y te deja una pésima reseña."
      },
      {
        "movimientos": [
          { "dinero": -100, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -3,
        "feedback": "Al cliente no le importa de quién es la culpa. Pierdes la venta y su confianza para siempre."
      }
    ]
  },
  {
    "id": 328,
    "formato": "whatsapp",
    "remitente": "Mario (Proveedor Cervezas)",
    "estado": "escribiendo...",
    "mensajes": [
      { "emisor": "remitente", "texto": "Buenas. Sintiéndolo mucho, a partir del lunes subimos un 12% la tarifa de barriles por los costes de transporte.", "hora": "09:15" }
    ],
    "opciones": [
      "Subir tus propios precios al cliente final un 12% de forma inmediata el lunes.",
      "Absorber el coste temporalmente reduciendo tu margen de beneficio.",
      "Negociar con Mario comprar más volumen al mes a cambio de que te congele el precio antiguo."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 100, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "El aumento repentino espanta a tu clientela habitual, bajando drásticamente el volumen de consumo."
      },
      {
        "movimientos": [
          { "dinero": -150, "categoria_pnl": "Suministros" }
        ],
        "reputacion": 2,
        "feedback": "Tus clientes están felices, pero tus márgenes se hunden. Peligra tu viabilidad a medio plazo."
      },
      {
        "movimientos": [],
        "reputacion": 3,
        "feedback": "Buena jugada. Mantienes precios y demuestras habilidad negociadora, aunque ahora tendrás menos espacio en el almacén."
      }
    ]
  },
  {
    "id": 329,
    "formato": "whatsapp",
    "remitente": "Laura (Agencia Marketing)",
    "estado": "en línea",
    "mensajes": [
      { "emisor": "remitente", "texto": "Me acaba de escribir un tiktoker de gastronomía local con 50k seguidores.", "hora": "16:45" },
      { "emisor": "remitente", "texto": "Nos ofrece venir, grabar un vídeo y subirlo hoy mismo por 200€. ¿Le damos luz verde?", "hora": "16:46" }
    ],
    "opciones": [
      "Aceptar y transferirle los 200€ de inmediato.",
      "Ofrecerle pagarle 100€ fijos + un 10% por cada cliente que traiga con su código.",
      "Rechazar. Esos seguidores seguro que son bots o niños que no gastan."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -200, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 2,
        "feedback": "Ganas algo de visibilidad, pero no consigues suficientes clientes hoy para amortizar los 200€ de golpe."
      },
      {
        "movimientos": [
          { "dinero": -100, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 4,
        "feedback": "Minimizas el riesgo. El tiktoker se motiva para vender más y ambos ganáis dinero."
      },
      {
        "movimientos": [],
        "reputacion": 0,
        "feedback": "Ahorras dinero, pero tu marca sigue siendo invisible para un montón de gente en tu propia ciudad."
      }
    ]
  },
  {
    "id": 330,
    "formato": "whatsapp",
    "remitente": "Dueño del Local",
    "estado": "escribiendo...",
    "mensajes": [
      { "emisor": "remitente", "texto": "Hola. Te escribo porque el Ayuntamiento me ha notificado una multa de 300€ por la lona publicitaria que tienes en la acera.", "hora": "10:05" },
      { "emisor": "remitente", "texto": "O la pagas tú y la quitas, o te la paso en el próximo recibo del alquiler.", "hora": "10:06" }
    ],
    "opciones": [
      "Pagarla rápido aprovechando el 50% de descuento por pronto pago y quitar el cartel.",
      "Pelearte con el dueño diciendo que la acera es pública y negarte a pagar.",
      "Dejar el cartel puesto porque atrae a mucha gente y pagar los 300€ asumiéndolo como gasto de marketing."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -150, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": 1,
        "feedback": "Duele, pero es lo pragmático. Pagas la mitad, retiras el cartel y mantienes buena relación con tu casero."
      },
      {
        "movimientos": [
          { "dinero": -300, "categoria_pnl": "Servicios" }
        ],
        "reputacion": -3,
        "feedback": "El dueño te lo cobra igual en el alquiler, se enfada contigo y te amenaza con no renovarte el año que viene."
      },
      {
        "movimientos": [
          { "dinero": -600, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -2,
        "feedback": "Mala idea. A la semana siguiente pasa otro inspector y te pone una sanción por reincidencia del doble de importe."
      }
    ]
  },
  {
    "id": 331,
    "formato": "whatsapp",
    "remitente": "David (Dependiente)",
    "estado": "en línea",
    "mensajes": [
      { "emisor": "remitente", "texto": "Jefe, sé que es un apuro enorme, pero se me ha roto el motor del coche y no tengo para arreglarlo.", "hora": "10:15" },
      { "emisor": "remitente", "texto": "¿Habría posibilidad de que me adelantes 300€ de la nómina de este mes?", "hora": "10:16" }
    ],
    "opciones": [
      "Hacerle la transferencia de 300€ ahora mismo sin hacer preguntas.",
      "Dárselo, pero decirle que a cambio tiene que hacer el inventario del sábado gratis.",
      "Denegarlo explicando que la política de caja de la empresa prohíbe estrictamente los anticipos."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 4,
        "feedback": "Técnicamente no pierdes dinero (es su sueldo). Te ganas la lealtad absoluta de David, que trabajará más motivado."
      },
      {
        "movimientos": [],
        "reputacion": -6,
        "feedback": "Abusas de su necesidad. David acaba buscando otro empleo en cuanto puede y habla muy mal de ti por ahí."
      },
      {
        "movimientos": [],
        "reputacion": -2,
        "feedback": "La política es la política, pero David tiene que pedir un microcrédito al banco y su estrés afecta a su trato con el cliente."
      }
    ]
  },
  {
    "id": 332,
    "formato": "whatsapp",
    "remitente": "Raúl (Community Manager)",
    "estado": "escribiendo...",
    "mensajes": [
      { "emisor": "remitente", "texto": "¡Alarma! Nos acaban de poner una reseña de 1 estrella en Google: 'Pésimo servicio, local asqueroso y personal grosero'.", "hora": "11:45" },
      { "emisor": "remitente", "texto": "Ojo, el usuario no tiene foto y ayer casi no tuvimos clientes. Huele a competencia.", "hora": "11:46" }
    ],
    "opciones": [
      "Responder con mucha elegancia pidiendo disculpas y detalles para investigar el 'supuesto' incidente.",
      "Responder agresivamente acusándole de ser un cobarde de la competencia intentando hundiros.",
      "Decirle a Raúl que pague 50€ en una web para que nos inyecten 10 reseñas falsas de 5 estrellas hoy mismo."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 3,
        "feedback": "Tu respuesta elegante demuestra clase ante otros usuarios. Al final, reportas la reseña y Google la borra por falsa."
      },
      {
        "movimientos": [],
        "reputacion": -5,
        "feedback": "Entras al trapo de manera chulesca. Los clientes reales que leen tu respuesta se asustan de tu actitud y no van."
      },
      {
        "movimientos": [
          { "dinero": -50, "categoria_pnl": "Servicios" }
        ],
        "reputacion": -8,
        "feedback": "Pésima decisión. Google detecta los bots de las reseñas falsas, penaliza tu perfil y bajas al último puesto en las búsquedas."
      }
    ]
  },
  {
    "id": 333,
    "formato": "whatsapp",
    "remitente": "Seur (Repartidor)",
    "estado": "en línea",
    "mensajes": [
      { "emisor": "remitente", "texto": "Llevo la máquina de café nueva. Estoy en su calle pero esto está en obras y no puedo aparcar el furgón.", "hora": "13:40" },
      { "emisor": "remitente", "texto": "Si no sales a ayudarme a descargarla en 2 minutos me marcho y ya veremos cuándo se la entrego.", "hora": "13:41" }
    ],
    "opciones": [
      "Dejar sola la caja un momento y salir corriendo a buscarle por la calle para cargar con ella.",
      "Decirle que es su trabajo entregarla en la puerta y que si se va, le pones una queja a la central.",
      "Llamarle, calmarle, indicarle un hueco en la calle de atrás y decirle que vas con una carretilla a ayudar."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -40, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -2,
        "feedback": "Dejas la caja abierta sin vigilancia. Te roban un par de cosas de las estanterías por las prisas."
      },
      {
        "movimientos": [
          { "dinero": -100, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -1,
        "feedback": "El repartidor se enfada y se va. Te quedas sin máquina de café todo el fin de semana perdiendo muchísimos ingresos."
      },
      {
        "movimientos": [],
        "reputacion": 2,
        "feedback": "La mano izquierda y empatía funcionan. Trabajáis en equipo, la máquina entra entera y el repartidor se va contento."
      }
    ]
  },
  {
    "id": 334,
    "formato": "whatsapp",
    "remitente": "Sofía (Caja)",
    "estado": "escribiendo...",
    "mensajes": [
      { "emisor": "remitente", "texto": "Jefa, un cliente mayor me acaba de pagar con un billete de 50€ que se nota a la legua que es falso.", "hora": "19:05" },
      { "emisor": "remitente", "texto": "El señor sigue aquí mirando unas cosas. ¿Qué hago?", "hora": "19:06" }
    ],
    "opciones": [
      "Salir, llevarte al señor a un lado discretamente y pedirle otra forma de pago explicándole el problema.",
      "Decirle a Sofía que lo meta en la caja para no montar una escena, ya se lo colaréis a alguien con el cambio.",
      "Bloquear la puerta y llamar a la policía inmediatamente por falsificación de moneda."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 2,
        "feedback": "Gestión impecable. El cliente mayor se disculpa muerto de vergüenza (le habían engañado a él) y paga con tarjeta."
      },
      {
        "movimientos": [
          { "dinero": -50, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -5,
        "feedback": "Ese billete no te lo acepta el banco. Pierdes los 50€ y además cruzas una línea ética muy fea con tus empleados."
      },
      {
        "movimientos": [],
        "reputacion": -4,
        "feedback": "Viene la policía, interrogan al anciano llorando delante de todos los clientes. Creas una escena horrible en el local."
      }
    ]
  },
  {
    "id": 335,
    "formato": "whatsapp",
    "remitente": "Marta (Limpieza)",
    "estado": "en línea",
    "mensajes": [
      { "emisor": "remitente", "texto": "Jefa, ha reventado el lavabo del baño de los clientes. Está saliendo agua a chorros por el pasillo.", "hora": "18:20" }
    ],
    "opciones": [
      "Cortar el agua general, cerrar el baño y llamar al fontanero de urgencias de tu seguro (franquicia alta).",
      "Decirle a Marta que ponga todas las toallas que encuentre y que vaya fregando mientras termináis el turno.",
      "Ir tú mismo con unas herramientas, buscar un tutorial en YouTube e intentar apretar la tubería."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -150, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 2,
        "feedback": "Cuesta caro llamar a urgencias y pierdes dinero, pero evitas dañar el suelo de madera y actúas como un profesional."
      },
      {
        "movimientos": [
          { "dinero": -400, "categoria_pnl": "Servicios" }
        ],
        "reputacion": -6,
        "feedback": "El agua se filtra al local de abajo. El seguro te sube la cuota, pagas los daños del vecino y un cliente resbala."
      },
      {
        "movimientos": [
          { "dinero": -600, "categoria_pnl": "Servicios" }
        ],
        "reputacion": -4,
        "feedback": "Haces demasiada fuerza y partes la tubería principal. El local se inunda entero. Zapatero a tus zapatos."
      }
    ]
  },
  {
    "id": 336,
    "formato": "whatsapp",
    "remitente": "Andrés (Informático)",
    "estado": "escribiendo...",
    "mensajes": [
      { "emisor": "remitente", "texto": "La licencia anual de nuestro software de TPV caduca a medianoche.", "hora": "11:15" },
      { "emisor": "remitente", "texto": "Podemos renovar el básico por 100€, o el Premium (que nos da analíticas de qué horas vendemos más) por 250€.", "hora": "11:16" }
    ],
    "opciones": [
      "Renovar el plan básico de 100€. Ahora mismo no quieres gastos extra.",
      "Invertir los 250€ en el plan Premium para tener datos de negocio y mejorar las ventas.",
      "No pagar nada y que instale mañana un programa gratuito que ha visto en internet."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -100, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 0,
        "feedback": "Mantienes lo que tienes. Todo funciona sin problemas, pero te estancas operativamente sin innovar."
      },
      {
        "movimientos": [
          { "dinero": -250, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 4,
        "feedback": "Esos datos te revelan que los martes de 16 a 18h no vendes nada. Ajustas turnos y recuperas la inversión en dos meses."
      },
      {
        "movimientos": [
          { "dinero": -50, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "El software gratuito está lleno de bugs, se cuelga en plena hora punta y tienes que regalar cosas por las demoras."
      }
    ]
  },
  {
    "id": 337,
    "formato": "whatsapp",
    "remitente": "Pablo (Almacén)",
    "estado": "en línea",
    "mensajes": [
      { "emisor": "remitente", "texto": "El palet grande de merchandising de verano ha llegado... pero se han equivocado de color. Nos han mandado verde fosforito.", "hora": "11:10" }
    ],
    "opciones": [
      "No firmar el albarán, devolverlo y exigir el color correcto aunque tardes 3 semanas en tener producto.",
      "Quedártelas y lanzar hoy una campaña agresiva en Instagram vendiéndolo como 'Edición Limitada Neón'.",
      "Quedártelas pero echarle una bronca brutal a Pablo por no haber estado atento al camión."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -200, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -1,
        "feedback": "Haces lo correcto legalmente, pero pasas el inicio del verano sin stock y la gente compra en otra parte."
      },
      {
        "movimientos": [
          { "dinero": 150, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 4,
        "feedback": "Creatividad frente a la crisis. A los jóvenes les encanta el color flúor y lo agotas en tres días. ¡Brillante!"
      },
      {
        "movimientos": [],
        "reputacion": -6,
        "feedback": "Pablo no tiene culpa de lo que meten en las cajas desde la fábrica. Destruyes su moral injustamente."
      }
    ]
  },
  {
    "id": 338,
    "formato": "whatsapp",
    "remitente": "Asociación Comerciantes (Grupo)",
    "estado": "en línea",
    "mensajes": [
      { "emisor": "remitente", "texto": "Presidente: 'Chicos, se nos ha quedado libre un hueco en el anuncio del periódico local del domingo. Quien lo quiera, que me pase 150€ ahora mismo'.", "hora": "13:20" }
    ],
    "opciones": [
      "Ser el primero en contestar y mandar el Bizum de 150€ rápido.",
      "Ignorar el mensaje. Nadie lee el periódico un domingo de verano.",
      "Escribir por privado al presidente ofreciéndole 75€ y quejado de que siempre es todo muy caro."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -150, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 5,
        "feedback": "El anuncio dominical te trae a varias familias completas durante la semana siguiente. Rentabilidad total."
      },
      {
        "movimientos": [],
        "reputacion": 0,
        "feedback": "Te guardas el dinero, pero tus competidores de la calle se llevan todo el protagonismo del fin de semana."
      },
      {
        "movimientos": [],
        "reputacion": -3,
        "feedback": "Al presidente no le gustan los regateos cutres por privado. Se lo da a otro y quedas como un tacaño en la asociación."
      }
    ]
  },
  {
    "id": 339,
    "formato": "whatsapp",
    "remitente": "Ana (Encargada Tarde)",
    "estado": "escribiendo...",
    "mensajes": [
      { "emisor": "remitente", "texto": "Jefa, no aguanto más a Marcos. No hace nada, me contesta mal y llevamos toda la tarde discutiendo a voces.", "hora": "17:30" },
      { "emisor": "remitente", "texto": "O lo despides ahora mismo, o te dejo yo las llaves en el mostrador y me voy.", "hora": "17:31" }
    ],
    "opciones": [
      "Despedir a Marcos por teléfono para que Ana se quede tranquila y no cerrar la tienda.",
      "Ir tú en persona de inmediato, separarles en otra sala y escuchar a los dos antes de hacer nada.",
      "Decirle a Ana que cierre la boca, que se ponga a trabajar y que sois mayorcitos para niñerías."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -600, "categoria_pnl": "Personal y SS" }
        ],
        "reputacion": -2,
        "feedback": "Despedir en caliente sin escuchar te cuesta una fuerte indemnización y un ambiente tenso."
      },
      {
        "movimientos": [],
        "reputacion": 5,
        "feedback": "Pones orden como un líder real. Hablando se entiende la gente: Marcos estaba pasando un drama familiar. Lo arreglas."
      },
      {
        "movimientos": [
          { "dinero": -100, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -6,
        "feedback": "Ana cumple su amenaza y se va. Tienes que cerrar la tienda perdiendo ventas y dando una imagen nefasta."
      }
    ]
  },
  {
    "id": 340,
    "formato": "whatsapp",
    "remitente": "Soporte Ciberseguridad",
    "estado": "en línea",
    "mensajes": [
      { "emisor": "remitente", "texto": "Hemos detectado tres intentos fallidos de entrar en el servidor de tu base de datos de clientes.", "hora": "09:40" },
      { "emisor": "remitente", "texto": "Por favor, por 120€ anuales te activamos el 'Escudo Pro' para bloquear estas IPs y que no haya fugas.", "hora": "09:41" }
    ],
    "opciones": [
      "Contratar el 'Escudo Pro' de inmediato enviando los 120€.",
      "No pagar nada, pero obligar a toda tu plantilla a cambiar las contraseñas hoy y activar doble factor.",
      "Ignorar el mensaje. Seguro que es puro spam para venderte un servicio que no necesitas."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -120, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 1,
        "feedback": "Pagas por tranquilidad rápida. El sistema funciona, pero sigues teniendo contraseñas débiles en tu equipo."
      },
      {
        "movimientos": [],
        "reputacion": 3,
        "feedback": "La ciberhigiene básica salva negocios. Cortas de raíz el problema gratis y educas a tus empleados."
      },
      {
        "movimientos": [
          { "dinero": -500, "categoria_pnl": "Servicios" }
        ],
        "reputacion": -8,
        "feedback": "Un desastre. Entran a tu base de datos, roban emails de clientes y te enfrentas a multas por Protección de Datos."
      }
    ]
  },
  {
    "id": 341,
    "formato": "whatsapp",
    "remitente": "Inmobiliaria Sur",
    "estado": "escribiendo...",
    "mensajes": [
      { "emisor": "remitente", "texto": "Buenos días. Te escribimos para recordarte que tu contrato de alquiler hace los 3 años el mes que viene.", "hora": "12:00" },
      { "emisor": "remitente", "texto": "La propiedad exige una subida de 250€ al mes para renovar. Nos dices algo.", "hora": "12:01" }
    ],
    "opciones": [
      "Aceptar la subida de 250€ sin decir ni pío por miedo a perder el local.",
      "Exigir firmar a cambio un contrato de 5 años fijos si vas a pagar 250€ más, o amenazas con irte.",
      "Montar en cólera, insultar a la de la inmobiliaria por ladrones e impagar el siguiente mes."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -250, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 0,
        "feedback": "Tragas con todo. Tus gastos fijos suben, tu margen baja y en un año te la volverán a jugar."
      },
      {
        "movimientos": [
          { "dinero": -100, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 3,
        "feedback": "Negociación dura pero justa. Cierras en 100€ de subida y garantizas el local 5 años sin sorpresas."
      },
      {
        "movimientos": [
          { "dinero": -1000, "categoria_pnl": "Servicios" }
        ],
        "reputacion": -5,
        "feedback": "Te metes en un lío legal de desahucios, honorarios de abogados y estrés brutal. Casi quiebras."
      }
    ]
  },
  {
    "id": 342,
    "formato": "whatsapp",
    "remitente": "Luis (Dependiente)",
    "estado": "escribiendo...",
    "mensajes": [
      { "emisor": "remitente", "texto": "Jefa, huele a quemado desde hace un rato cerca del cuadro eléctrico de la entrada.", "hora": "14:15" },
      { "emisor": "remitente", "texto": "El plástico está hasta caliente. ¿Qué hacemos?", "hora": "14:16" }
    ],
    "opciones": [
      "Decirle a Luis que apague los plomos generales, eche a la gente y llame al electricista de urgencias.",
      "Decirle que no será nada grave, seguro es algo de la calle, que abra la puerta para que ventile.",
      "Decirle que coja un cubo de agua y lo tire encima del cuadro para ir enfriando los cables."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -200, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 2,
        "feedback": "Cierras el local y pierdes dinero en urgencias, pero la rápida actuación evita un incendio gravísimo."
      },
      {
        "movimientos": [
          { "dinero": -2000, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -8,
        "feedback": "Sale ardiendo el panel en 20 minutos. Se quema mercancía, los clientes salen asustados y cierras una semana."
      },
      {
        "movimientos": [
          { "dinero": -5000, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -10,
        "feedback": "¡Agua y electricidad! Luis sufre una descarga fuerte. Te enfrentas a un juicio laboral por negligencia temible."
      }
    ]
  },
  {
    "id": 343,
    "formato": "whatsapp",
    "remitente": "Organizador Boda",
    "estado": "en línea",
    "mensajes": [
      { "emisor": "remitente", "texto": "Hola, estoy desesperado. El proveedor que me tenía que traer los regalos para los invitados de mi boda me ha dejado tirado.", "hora": "09:30" },
      { "emisor": "remitente", "texto": "La boda es a las 18:00 de hoy. ¿Me puedes preparar 80 paquetes de los tuyos para esta tarde? Te pago por adelantado.", "hora": "09:31" }
    ],
    "opciones": [
      "Decirle que sí, movilizar a todo tu equipo a hacer paquetes como locos y cancelar tu descanso.",
      "Cobrarle un 50% extra por la urgencia. Sabes que está desesperado y aceptará cualquier precio.",
      "Decirle que lo sientes mucho pero que logísticamente es imposible sacarlo en tan pocas horas."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 400, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 8,
        "feedback": "Es una paliza, pero lo logras. Salvas su boda. Él sube fotos a redes agradeciéndotelo y ganas mucha fama."
      },
      {
        "movimientos": [
          { "dinero": 600, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -4,
        "feedback": "Ganas más dinero rápido, pero el organizador se siente extorsionado por aprovecharte de su urgencia."
      },
      {
        "movimientos": [],
        "reputacion": 0,
        "feedback": "No asumes riesgos, pero pierdes una inyección de capital estupenda y una historia genial de marketing."
      }
    ]
  },
  {
    "id": 344,
    "formato": "whatsapp",
    "remitente": "Sandra (Ventas)",
    "estado": "escribiendo...",
    "mensajes": [
      { "emisor": "remitente", "texto": "Jefe, he mirado un billete muy barato y me quiero ir a Tailandia las dos primeras semanas de Diciembre.", "hora": "15:00" },
      { "emisor": "remitente", "texto": "Ya sé que es nuestra temporada más fuerte y estamos a tope, pero necesito desconectar. ¿Puedo?", "hora": "15:01" }
    ],
    "opciones": [
      "Decirle que sí. Su salud mental importa más, aunque el resto del equipo trabaje el doble.",
      "Denegarle las vacaciones apelando al sentido común, pero prometerle un plus económico si hace la campaña fuerte.",
      "Denegárselo bruscamente diciéndole que en diciembre aquí no se va nadie y punto."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -150, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -4,
        "feedback": "El resto de la plantilla se resiente, sienten que hay favoritismo y la calidad de atención baja muchísimo en Diciembre."
      },
      {
        "movimientos": [
          { "dinero": -80, "categoria_pnl": "Personal y SS" }
        ],
        "reputacion": 3,
        "feedback": "Firmeza con empatía. Sandra entiende que es el peor momento, pero el incentivo la motiva a posponer su viaje."
      },
      {
        "movimientos": [],
        "reputacion": -5,
        "feedback": "Ganas operatividad, pero pierdes a Sandra. Hace su trabajo sin ganas y busca activamente cómo dar el salto a otro lado."
      }
    ]
  },
  {
    "id": 345,
    "formato": "whatsapp",
    "remitente": "Marta (Gestoría)",
    "estado": "escribiendo...",
    "mensajes": [
      { "emisor": "remitente", "texto": "Hola, revisando las facturas del proveedor de limpieza veo que os han cobrado 500€ de más este mes.", "hora": "10:15" },
      { "emisor": "remitente", "texto": "¿Reclamo yo la devolución o hablas tú con ellos directamente?", "hora": "10:16" }
    ],
    "opciones": [
      "Que lo reclame la gestoría formalmente por correo electrónico.",
      "Llamar tú al proveedor en tono amistoso para aclarar el malentendido.",
      "Dejarlo pasar este mes para no tensar la relación, ya lo compensaréis en el siguiente pedido."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 500, "categoria_pnl": "Suministros" }
        ],
        "reputacion": -1,
        "feedback": "Recuperas el dinero, pero el proveedor se siente ofendido por el tono burocrático y legal del correo de la gestoría."
      },
      {
        "movimientos": [
          { "dinero": 500, "categoria_pnl": "Suministros" }
        ],
        "reputacion": 2,
        "feedback": "Un error informático del proveedor. Te piden mil disculpas, te devuelven el dinero y la relación sale reforzada."
      },
      {
        "movimientos": [
          { "dinero": -500, "categoria_pnl": "Suministros" }
        ],
        "reputacion": 0,
        "feedback": "El proveedor nunca lo compensa. Regalas 500€ a otra empresa por miedo al conflicto."
      }
    ]
  },
  {
    "id": 346,
    "formato": "whatsapp",
    "remitente": "Sonia (Caja)",
    "estado": "en línea",
    "mensajes": [
      { "emisor": "remitente", "texto": "Jefe, sé que entro a trabajar en una hora, pero mi hijo se ha puesto malísimo con fiebre.", "hora": "15:05" },
      { "emisor": "remitente", "texto": "No tengo con quién dejarlo. ¿Podemos cerrar la tienda esta tarde?", "hora": "15:06" }
    ],
    "opciones": [
      "Decirle que se quede con su hijo y cerrar la tienda perdiendo las ventas de la tarde.",
      "Decirle que lo sientes mucho, pero que busque una solución porque no puedes cerrar el negocio.",
      "Decirle que se quede con su hijo y doblar tú el turno acudiendo a cubrir su puesto."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -200, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 1,
        "feedback": "Sonia te lo agradece, pero perder una tarde entera de facturación es un lujo que la caja nota bastante."
      },
      {
        "movimientos": [],
        "reputacion": -6,
        "feedback": "Sonia va a trabajar, pero está llorando en la caja. Los clientes se sienten muy incómodos y ella no te lo perdonará."
      },
      {
        "movimientos": [],
        "reputacion": 5,
        "feedback": "Liderazgo con el ejemplo. Acabas reventado de trabajar tantas horas, pero te ganas la lealtad eterna de tu empleada y no pierdes ventas."
      }
    ]
  },
  {
    "id": 347,
    "formato": "whatsapp",
    "remitente": "Cliente Desconocido",
    "estado": "escribiendo...",
    "mensajes": [
      { "emisor": "remitente", "texto": "Hola, creo que me he dejado la cartera en el mostrador hace diez minutos.", "hora": "11:20" },
      { "emisor": "remitente", "texto": "¿Podéis mirar si está ahí? Llevo todo el dinero del mes.", "hora": "11:21" }
    ],
    "opciones": [
      "Revisar, confirmar que está y guardarla en la caja fuerte hasta que vuelva.",
      "Revisar, no verla y decirle que probablemente se la han robado en la calle.",
      "Revisar las cámaras de seguridad para ver quién se la ha llevado (no está en el mostrador)."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 40, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 4,
        "feedback": "La cartera estaba ahí. El cliente vuelve aliviado y te deja una buena propina en el bote."
      },
      {
        "movimientos": [],
        "reputacion": -2,
        "feedback": "El cliente se va a la policía. Luego descubres que la cartera se había caído detrás de una estantería por tu dejadez."
      },
      {
        "movimientos": [
          { "dinero": 60, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 6,
        "feedback": "Descubres que otro cliente se la llevó. Llamas a la policía aportando la grabación y el cliente te agradece la proactividad enormemente."
      }
    ]
  },
  {
    "id": 348,
    "formato": "whatsapp",
    "remitente": "Antonio (Almacén)",
    "estado": "en línea",
    "mensajes": [
      { "emisor": "remitente", "texto": "Jefe, ha fallado la cámara frigorífica principal. Tenemos mercancía perecedera dentro.", "hora": "08:30" },
      { "emisor": "remitente", "texto": "Si no viene un técnico en menos de 2 horas, habrá que tirarlo todo a la basura.", "hora": "08:31" }
    ],
    "opciones": [
      "Pagar el suplemento de urgencia extrema (150€) para que un técnico vuele hacia allí.",
      "Esperar al técnico normal que no cobra suplemento, pero tarda unas 4 horas.",
      "Decirle a Antonio que saque todo y lo intente vender hoy mismo con un 50% de descuento."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -150, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 0,
        "feedback": "El técnico llega a tiempo. Pagas el suplemento, pero salvas miles de euros en inventario. Bien gestionado."
      },
      {
        "movimientos": [
          { "dinero": -800, "categoria_pnl": "Suministros" }
        ],
        "reputacion": -2,
        "feedback": "Lo barato sale caro. El técnico llega, pero ya se ha roto la cadena de frío y tienes que tirar todo el producto."
      },
      {
        "movimientos": [
          { "dinero": -400, "categoria_pnl": "Suministros" }
        ],
        "reputacion": 2,
        "feedback": "Vendes bastante, pero el caos logístico es brutal y al final terminas tirando la otra mitad del stock."
      }
    ]
  },
  {
    "id": 349,
    "formato": "whatsapp",
    "remitente": "Local Influencer (@FoodieTFE)",
    "estado": "escribiendo...",
    "mensajes": [
      { "emisor": "remitente", "texto": "¡Hola equipo! Voy a ir a hacer una reseña a vuestra tienda con mi fotógrafo.", "hora": "13:00" },
      { "emisor": "remitente", "texto": "Normalmente mis tarifas son de intercambio: me llevo 100€ en producto gratis y os subo 3 stories.", "hora": "13:01" }
    ],
    "opciones": [
      "Aceptar el trato. 100€ en producto (a precio de coste es menos) a cambio de visibilidad.",
      "Ofrecerle el producto gratis solo si hace un post fijo en su feed, no solo stories.",
      "Denegarlo amablemente diciendo que no hacéis colaboraciones gratuitas."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -50, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 2,
        "feedback": "Las stories duran 24h. Tienes un pico de gente al día siguiente, pero se diluye rápido."
      },
      {
        "movimientos": [
          { "dinero": -50, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 6,
        "feedback": "El influencer acepta. El post queda fijo en su perfil y te trae clientes nuevos durante varios meses. Buena negociación."
      },
      {
        "movimientos": [],
        "reputacion": -1,
        "feedback": "El influencer se pica y habla sutilmente mal de tu marca en un directo. A veces el orgullo sale caro."
      }
    ]
  },
  {
    "id": 350,
    "formato": "whatsapp",
    "remitente": "Laura (Clienta Fiel)",
    "estado": "en línea",
    "mensajes": [
      { "emisor": "remitente", "texto": "Oye, me acaba de decir la chica de la tienda de la competencia que vosotros compráis en el mercadillo de saldos.", "hora": "18:45" },
      { "emisor": "remitente", "texto": "Me he quedado a cuadros. Es mentira, ¿verdad?", "hora": "18:46" }
    ],
    "opciones": [
      "Tranquilizar a Laura, agradecerle el aviso y no entrar en guerras con la competencia.",
      "Publicar un comunicado incendiario en redes sociales desmintiendo el bulo y atacando al competidor.",
      "Presentarte en la tienda del competidor para cantarle las cuarenta en persona."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 3,
        "feedback": "Ignoras el ruido. Laura confía en ti y la competencia queda como envidiosa y poco profesional ante sus propios clientes."
      },
      {
        "movimientos": [],
        "reputacion": -4,
        "feedback": "El efecto Streisand. Al darle bombo en redes, mucha gente que no sabía el rumor empieza a dudar de ti."
      },
      {
        "movimientos": [
          { "dinero": -50, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -6,
        "feedback": "Pierdes el tiempo, abandonas tu tienda y un cliente graba vuestra discusión. Tu imagen queda por los suelos."
      }
    ]
  },
  {
    "id": 351,
    "formato": "whatsapp",
    "remitente": "Vodafone Empresas",
    "estado": "escribiendo...",
    "mensajes": [
      { "emisor": "remitente", "texto": "Estimado cliente, sufrimos una caída masiva de fibra en su zona. El tiempo estimado de resolución es de 6 horas.", "hora": "10:10" }
    ],
    "opciones": [
      "Compartir los datos móviles de tu teléfono personal para que el TPV siga funcionando.",
      "Cerrar la tienda hasta que vuelva el internet, ya que no podéis cobrar con tarjeta.",
      "Decirle a los clientes que el TPV no va y que vayan al cajero más cercano a sacar efectivo."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -5, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 2,
        "feedback": "Reacción rápida y resolutiva. Agotas tus datos personales, pero la caja sigue sonando sin que el cliente note el problema."
      },
      {
        "movimientos": [
          { "dinero": -200, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -3,
        "feedback": "El competidor de la esquina sí está abierto. Pierdes ventas y clientes."
      },
      {
        "movimientos": [
          { "dinero": -80, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -1,
        "feedback": "La mitad de los clientes no vuelve del cajero y pierdes ventas por impulso."
      }
    ]
  },
  {
    "id": 352,
    "formato": "whatsapp",
    "remitente": "Javier (Encargado)",
    "estado": "en línea",
    "mensajes": [
      { "emisor": "remitente", "texto": "¡Alarma! Acaba de entrar un inspector de Sanidad. Quiere ver los registros de limpieza y control de plagas.", "hora": "11:30" },
      { "emisor": "remitente", "texto": "¿Dónde dejaste la carpeta azul? No la encuentro.", "hora": "11:31" }
    ],
    "opciones": [
      "Decirle que le dé largas al inspector mientras corres hacia el local con otra copia.",
      "Explicarle exactamente por teléfono que está en el segundo cajón del despacho y confiar en él.",
      "Pedirle al inspector que vuelva mañana porque tú (el gerente) no estás presente."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -150, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -3,
        "feedback": "El inspector se da cuenta de que le estáis entreteniendo, se enfada y os pone una falta leve por obstrucción."
      },
      {
        "movimientos": [],
        "reputacion": 2,
        "feedback": "Javier encuentra la carpeta, el inspector comprueba que todo está en regla y felicita a la tienda por la organización."
      },
      {
        "movimientos": [
          { "dinero": -300, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -4,
        "feedback": "La inspección no avisa ni se pospone. Te cae una sanción inmediata por negarte a la revisión."
      }
    ]
  },
  {
    "id": 353,
    "formato": "whatsapp",
    "remitente": "Pedro (Repartidor propio)",
    "estado": "escribiendo...",
    "mensajes": [
      { "emisor": "remitente", "texto": "Jefe, me han dado un golpe con la furgoneta de la empresa. Yo estoy bien, pero la puerta no cierra.", "hora": "14:20" },
      { "emisor": "remitente", "texto": "El otro conductor asume la culpa, pero tengo 10 pedidos más que entregar hoy.", "hora": "14:21" }
    ],
    "opciones": [
      "Decirle que anule los pedidos, haga el parte amistoso y lleve la furgoneta al taller.",
      "Hacer el parte, decirle que vuelva al local, y pagar un Uber XL (50€) para repartir tú lo que queda.",
      "Decirle que siga repartiendo como pueda con la puerta atada con una cuerda."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -120, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -4,
        "feedback": "Los clientes de la tarde se quedan sin su pedido. Generas quejas y devoluciones masivas."
      },
      {
        "movimientos": [
          { "dinero": -50, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 3,
        "feedback": "Te dejas 50€ en el Uber, pero cumples con todos los clientes a tiempo a pesar del accidente. Excelente servicio."
      },
      {
        "movimientos": [
          { "dinero": -400, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -5,
        "feedback": "La policía local para a Pedro, le inmovilizan el vehículo y te multan por riesgo contra la seguridad vial."
      }
    ]
  },
  {
    "id": 354,
    "formato": "whatsapp",
    "remitente": "Sistema de Alarmas",
    "estado": "en línea",
    "mensajes": [
      { "emisor": "remitente", "texto": "[AVISO AUTOMÁTICO] Movimiento detectado en almacén - Fuera de horario laboral. 23:45h.", "hora": "23:45" }
    ],
    "opciones": [
      "Llamar a la policía inmediatamente para que envíen una patrulla.",
      "Llamar a tu encargado (que tiene llaves) por si ha ido a buscar algo olvidado.",
      "Ignorarlo, probablemente sea un ratón o un fallo del sensor."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": -2,
        "feedback": "La patrulla llega con sirenas. Era el de la limpieza que cambió el turno y se te olvidó. Susto innecesario y quedas mal con él."
      },
      {
        "movimientos": [],
        "reputacion": 1,
        "feedback": "Era tu encargado que había olvidado su cartera. Aclaras la situación en 2 minutos sin movilizar recursos públicos."
      },
      {
        "movimientos": [
          { "dinero": -800, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -4,
        "feedback": "No era un ratón. Entraron a robar por una ventana y te vaciaron la caja de cambio y dos ordenadores."
      }
    ]
  },
  {
    "id": 355,
    "formato": "whatsapp",
    "remitente": "Ana (Caja)",
    "estado": "escribiendo...",
    "mensajes": [
      { "emisor": "remitente", "texto": "Una señora mayor acaba de resbalar porque el suelo estaba recién fregado y no pusimos el cartel.", "hora": "10:30" },
      { "emisor": "remitente", "texto": "Dice que le duele la cadera y está muy enfadada.", "hora": "10:31" }
    ],
    "opciones": [
      "Llamar a una ambulancia para asegurarte de que está bien y ofrecerte a pagar los gastos médicos si los hay.",
      "Decirle a Ana que le dé un vale de 50€ para la tienda para que se calme y no denuncie.",
      "Negar la responsabilidad diciendo que ella llevaba zapatos resbaladizos."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -30, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 4,
        "feedback": "Tu seguro cubre el incidente leve. La señora aprecia tu preocupación sincera y el trato humano."
      },
      {
        "movimientos": [
          { "dinero": -50, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -3,
        "feedback": "Parece un soborno. La señora se ofende más, coge el vale y aun así pone una hoja de reclamaciones."
      },
      {
        "movimientos": [
          { "dinero": -2000, "categoria_pnl": "Servicios" }
        ],
        "reputacion": -8,
        "feedback": "La señora te demanda. Sin el cartel de suelo mojado, tienes las de perder en el juicio y el seguro se lava las manos."
      }
    ]
  },
  {
    "id": 356,
    "formato": "whatsapp",
    "remitente": "Luis (Dependiente)",
    "estado": "en línea",
    "mensajes": [
      { "emisor": "remitente", "texto": "Los del local de al lado han empezado obras con taladradoras. El ruido es insoportable.", "hora": "11:00" },
      { "emisor": "remitente", "texto": "Los clientes entran y se van a los 10 segundos porque no se puede ni hablar.", "hora": "11:01" }
    ],
    "opciones": [
      "Ir al local de al lado, montar un pollo y exigir que paren inmediatamente.",
      "Comprar unos tapones para los oídos para Luis y aguantar el tirón hoy.",
      "Ir a hablar con el jefe de obra y negociar amistosamente que hagan el ruido más fuerte a la hora del cierre."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -100, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -2,
        "feedback": "Tienen licencia de obra, no puedes pararles. El ruido sigue, tú quedas como un loco y pierdes ventas todo el día."
      },
      {
        "movimientos": [
          { "dinero": -150, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -4,
        "feedback": "Luis está bien con los tapones, pero los clientes huyen de tu tienda por la contaminación acústica."
      },
      {
        "movimientos": [
          { "dinero": -20, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 3,
        "feedback": "El encargado de la obra empatiza y deja las rozas para las 14:00h cuando tú cierras. Salvas la mañana de ventas."
      }
    ]
  },
  {
    "id": 357,
    "formato": "whatsapp",
    "remitente": "Portal Tienda Online",
    "estado": "en línea",
    "mensajes": [
      { "emisor": "remitente", "texto": "NUEVO PEDIDO #8849. Importe: 1.500€. Envío urgente a un buzón internacional.", "hora": "14:15" }
    ],
    "opciones": [
      "Procesarlo y enviarlo de inmediato, es la mejor venta de la semana.",
      "Retener el pedido y pedirle por email foto del DNI y tarjeta al comprador para verificar su identidad.",
      "Cancelar el pedido directamente, seguro que es una estafa."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -1500, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -2,
        "feedback": "Era una tarjeta robada. El banco real hace un 'chargeback' (retroceso) y pierdes el producto y el dinero."
      },
      {
        "movimientos": [],
        "reputacion": 2,
        "feedback": "Al pedirle la documentación, el estafador cancela el pedido y desaparece. Te salvaste de un fraude enorme por estar atento."
      },
      {
        "movimientos": [],
        "reputacion": -1,
        "feedback": "Puede que fuera una estafa, pero cancelarlo sin preguntar bloquea clientes legítimos a veces."
      }
    ]
  },
  {
    "id": 358,
    "formato": "whatsapp",
    "remitente": "Elena (Trabajadora)",
    "estado": "escribiendo...",
    "mensajes": [
      { "emisor": "remitente", "texto": "Jefe, quería decírtelo a ti primero: estoy embarazada de 3 meses.", "hora": "17:00" },
      { "emisor": "remitente", "texto": "El médico me ha dicho que no coja peso, pero quiero seguir trabajando hasta el final.", "hora": "17:01" }
    ],
    "opciones": [
      "Felicitarla, adaptarle el puesto para que esté sentada en caja y no en almacén.",
      "Sugerirle sutilmente que se coja ya la baja porque en este negocio hay que moverse rápido.",
      "Echarla, pagando el despido improcedente antes de que coja la baja de maternidad."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 6,
        "feedback": "Elena rinde genial en caja, se siente valorada y el resto de la plantilla ve que eres un jefe humano."
      },
      {
        "movimientos": [
          { "dinero": -100, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -4,
        "feedback": "Se coge la baja por estrés al sentirse presionada. Tienes que contratar un reemplazo antes de tiempo."
      },
      {
        "movimientos": [
          { "dinero": -3000, "categoria_pnl": "Servicios" }
        ],
        "reputacion": -10,
        "feedback": "Despido nulo por discriminación. Te obligan a readmitirla, pagar salarios de tramitación y tu imagen pública muere."
      }
    ]
  },
  {
    "id": 359,
    "formato": "whatsapp",
    "remitente": "Carlos (Vecino del Local)",
    "estado": "en línea",
    "mensajes": [
      { "emisor": "remitente", "texto": "Hola, paso por tu tienda. Te han hecho un grafiti enorme en la persiana y la fachada esta noche.", "hora": "07:30" }
    ],
    "opciones": [
      "Pagar de tu bolsillo (200€) a una empresa de limpieza urgente para borrarlo antes de abrir.",
      "Dejarlo ahí y denunciar a la policía a ver si el seguro se hace cargo dentro de unas semanas.",
      "Subir una foto a Instagram riéndote de lo feo que es y pedir ayuda a artistas locales para pintar un mural encima."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -200, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 1,
        "feedback": "Mantienes la fachada limpia, pero el gasto es tuyo y la semana que viene podrían volver a pintar."
      },
      {
        "movimientos": [],
        "reputacion": -3,
        "feedback": "Tu tienda da aspecto de abandono durante un mes. Los clientes de alto poder adquisitivo dejan de entrar."
      },
      {
        "movimientos": [
          { "dinero": -100, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 7,
        "feedback": "¡Genialidad! Financias un mural urbano guapísimo que se vuelve viral. Conviertes un acto vandálico en publicidad positiva."
      }
    ]
  },
  {
    "id": 360,
    "formato": "whatsapp",
    "remitente": "Sofía (Almacén)",
    "estado": "escribiendo...",
    "mensajes": [
      { "emisor": "remitente", "texto": "Jefe, un TikToker famoso acaba de subir un vídeo usando nuestro producto estrella.", "hora": "20:15" },
      { "emisor": "remitente", "texto": "Están entrando 10 pedidos por minuto en la web, ¡nos quedamos sin stock en una hora!", "hora": "20:16" }
    ],
    "opciones": [
      "Poner un cartel de 'Agotado' en la web en cuanto se acaben y ya pedirás más mañana.",
      "Subir el precio un 30% en la web para frenar un poco y sacar mucho más margen.",
      "Llamar al proveedor ahora mismo (de noche) pidiendo un palet urgente pagando un extra logístico."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 150, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 0,
        "feedback": "Vendes el stock actual, pero dejas cientos de ventas escapar por no ser ágil reponiendo."
      },
      {
        "movimientos": [
          { "dinero": 200, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "La gente se da cuenta en redes de que has subido el precio en pleno boom. Te tachan de especulador y cancelan masivamente."
      },
      {
        "movimientos": [
          { "dinero": 400, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 4,
        "feedback": "Pagas más al proveedor, pero logras abastecer el pico viral. Optimizas la oportunidad al máximo facturando el triple."
      }
    ]
  },
  {
    "id": 361,
    "formato": "whatsapp",
    "remitente": "ONG Barrio Solidario",
    "estado": "en línea",
    "mensajes": [
      { "emisor": "remitente", "texto": "Hola, estamos recogiendo productos y donativos para las familias afectadas por el incendio del edificio de ayer.", "hora": "11:00" },
      { "emisor": "remitente", "texto": "¿Estaríais dispuestos a colaborar con algo de mercancía?", "hora": "11:01" }
    ],
    "opciones": [
      "Donar 100€ en productos de primera necesidad de tu stock de forma anónima.",
      "Donar 100€ pero llamar a la prensa local para que os hagan una foto entregándolo.",
      "Decir que la empresa no pasa por un buen momento y rechazar colaborar."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -50, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 5,
        "feedback": "Donas silenciosamente. El barrio lo descubre de todos modos por el boca a boca y te ganas el corazón de la comunidad."
      },
      {
        "movimientos": [
          { "dinero": -50, "categoria_pnl": "Servicios" }
        ],
        "reputacion": -2,
        "feedback": "El postureo solidario se nota mucho. La gente critica que uses la desgracia ajena para hacerte publicidad barata."
      },
      {
        "movimientos": [],
        "reputacion": -3,
        "feedback": "Te ahorras el dinero, pero el tejido vecinal se decepciona con tu falta de empatía local."
      }
    ]
  },
  {
    "id": 362,
    "formato": "whatsapp",
    "remitente": "Fabricante de Papel",
    "estado": "escribiendo...",
    "mensajes": [
      { "emisor": "remitente", "texto": "Lamentamos comunicarle que entramos en concurso de acreedores. El pedido que pagó por adelantado no será entregado.", "hora": "09:30" }
    ],
    "opciones": [
      "Contratar un abogado para denunciarlos por estafa inmediatamente.",
      "Dar el dinero por perdido y buscar rápidamente un proveedor alternativo aunque sea más caro.",
      "Ir a la nave del fabricante con una furgoneta para llevarte material por la fuerza como compensación."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -300, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 0,
        "feedback": "En un concurso de acreedores cobrarás el último dentro de 5 años. Pierdes más dinero en el abogado."
      },
      {
        "movimientos": [
          { "dinero": -150, "categoria_pnl": "Suministros" }
        ],
        "reputacion": 2,
        "feedback": "Un palo duro. Asumes la pérdida como empresario, cambias de proveedor rápido y aseguras que tu tienda no se quede sin bolsas."
      },
      {
        "movimientos": [
          { "dinero": -500, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -8,
        "feedback": "Acabas detenido por robo y allanamiento. Que ellos deban dinero no te da derecho a cometer un delito."
      }
    ]
  },
  {
    "id": 363,
    "formato": "whatsapp",
    "remitente": "Hacienda (Notificación SMS)",
    "estado": "en línea",
    "mensajes": [
      { "emisor": "remitente", "texto": "Agencia Tributaria: Tiene un requerimiento de información sobre el ejercicio fiscal pasado en su Sede Electrónica.", "hora": "12:00" }
    ],
    "opciones": [
      "No abrirlo por si acaso. Si no firmas la carta certificada, creen que no te has enterado.",
      "Entrar corriendo, intentar responder tú mismo a los documentos sin tener mucha idea técnica.",
      "Reenviarle el SMS a tu gestoría y autorizar una factura de 50€ para que lo gestionen ellos bien."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -400, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -2,
        "feedback": "Hacienda asume que estás notificado en la sede electrónica (ahora es obligatorio). Por no responder a tiempo, multa y recargo."
      },
      {
        "movimientos": [
          { "dinero": -200, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": 0,
        "feedback": "Te equivocas en un epígrafe al responder. Detectan un fallo y levantan un acta de inspección más profunda."
      },
      {
        "movimientos": [
          { "dinero": -50, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 3,
        "feedback": "Los profesionales para los temas técnicos. La gestoría entrega un justificante rutinario y archivan el expediente en dos días sin multa."
      }
    ]
  },
  {
    "id": 364,
    "formato": "whatsapp",
    "remitente": "Raúl (Tu mejor vendedor)",
    "estado": "escribiendo...",
    "mensajes": [
      { "emisor": "remitente", "texto": "Jefe, tenemos que hablar. La tienda de enfrente me ofrece 300€ más al mes y puesto de encargado.", "hora": "18:40" },
      { "emisor": "remitente", "texto": "Yo estoy bien aquí, pero es una mejora muy grande. Te doy la oportunidad de igualarlo si quieres que me quede.", "hora": "18:41" }
    ],
    "opciones": [
      "Igualarle la oferta de 300€ más al mes para retenerlo cueste lo que cueste.",
      "Decirle con total transparencia que no puedes asumir 300€ más, pero ofrecerle el 5% de las ventas que él consiga.",
      "Decirle que es un traidor por negociar con la competencia y despedirle hoy mismo."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -300, "categoria_pnl": "Personal y SS" }
        ],
        "reputacion": -2,
        "feedback": "Cedes al chantaje. Además, el resto de la plantilla se entera, se ofende y te exigen subidas también. Entras en quiebra en meses."
      },
      {
        "movimientos": [],
        "reputacion": 4,
        "feedback": "Pagas por rendimiento. Raúl se queda, se motiva para vender más y ambos ganáis sin aumentar tus costes fijos mensuales."
      },
      {
        "movimientos": [
          { "dinero": -200, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -4,
        "feedback": "Se va a la competencia y se lleva a gran parte de tus clientes recurrentes que le compraban por el trato personal."
      }
    ]
  },
  {
    "id": 365,
    "formato": "whatsapp",
    "remitente": "Marcos (Vecino del barrio)",
    "estado": "en línea",
    "mensajes": [
      { "emisor": "remitente", "texto": "¡Hola vecino! Oye, voy a hacer una compra grande en tu tienda esta tarde.", "hora": "12:15" },
      { "emisor": "remitente", "texto": "¿Me haces un 20% de descuento por ser del barrio de toda la vida? Entre nosotros nos tenemos que ayudar.", "hora": "12:16" }
    ],
    "opciones": [
      "Aceptar el 20% de descuento directo para asegurar esa venta grande hoy.",
      "Ofrecerle darse de alta gratis en vuestro programa de fidelidad que da un 5% en todas las compras.",
      "Decirle que los precios son fijos para todo el mundo y que no haces rebajas a nadie."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -20, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 1,
        "feedback": "Haces la venta, pero te quedas casi sin margen comercial y ahora Marcos siempre esperará chollos."
      },
      {
        "movimientos": [],
        "reputacion": 3,
        "feedback": "No cedes al chantaje emocional, pero le ofreces una alternativa profesional. Se hace socio y compra igual."
      },
      {
        "movimientos": [
          { "dinero": -50, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -2,
        "feedback": "Marcos se ofende por tu excesiva frialdad, no va a comprar y además habla mal de ti a otros vecinos."
      }
    ]
  },
  {
    "id": 366,
    "formato": "whatsapp",
    "remitente": "David (Dependiente)",
    "estado": "escribiendo...",
    "mensajes": [
      { "emisor": "remitente", "texto": "Jefe, me acaban de regalar unas entradas VIP para un concierto esta noche. Empieza a las 20:00.", "hora": "16:00" },
      { "emisor": "remitente", "texto": "Mi turno acaba a las 21:00. ¿Me puedo ir una hora antes? ¡Es la oportunidad de mi vida!", "hora": "16:01" }
    ],
    "opciones": [
      "Decirle que no. El cuadrante es sagrado y tiene que cumplir su horario.",
      "Decirle que sí, pero que él mismo se encargue de buscar un compañero que le cubra esa hora.",
      "Decirle que sí y acercarte tú a la tienda a cubrirle esa última hora para que disfrute."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": -3,
        "feedback": "Cumples las reglas, pero David trabaja esa hora desmotivado y enfadado. El clima laboral empeora."
      },
      {
        "movimientos": [],
        "reputacion": 3,
        "feedback": "Fomentas el compañerismo y la autogestión. Él consigue el cambio con un compañero y se va súper feliz."
      },
      {
        "movimientos": [],
        "reputacion": 2,
        "feedback": "Eres muy generoso, pero pierdes tu tiempo libre y malacostumbras a la plantilla a que tú salves todos sus caprichos."
      }
    ]
  },
  {
    "id": 367,
    "formato": "whatsapp",
    "remitente": "Sara (Encargada)",
    "estado": "en línea",
    "mensajes": [
      { "emisor": "remitente", "texto": "Jefe, los de la competencia acaban de copiar literalmente nuestro pack estrella.", "hora": "10:30" },
      { "emisor": "remitente", "texto": "Hasta han copiado los textos. Lo han puesto 2€ más barato que nosotros. ¿Qué hacemos?", "hora": "10:31" }
    ],
    "opciones": [
      "Bajar vuestro precio 3€ inmediatamente para volver a ser los más baratos.",
      "Mantener el precio, pero añadir al pack un pequeño regalo simbólico o asesoramiento que ellos no tengan.",
      "Escribir en redes sociales quejándote públicamente de que os copian."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -150, "categoria_pnl": "Descuentos" }
        ],
        "reputacion": 0,
        "feedback": "Entras en una guerra de precios. Vendes lo mismo pero con un margen ridículo. Pierdes dinero a la larga."
      },
      {
        "movimientos": [
          { "dinero": -20, "categoria_pnl": "Marketing" }
        ],
        "reputacion": 4,
        "feedback": "Aportas valor real en vez de bajar precios. El cliente nota la calidad y te sigue eligiendo."
      },
      {
        "movimientos": [],
        "reputacion": -4,
        "feedback": "Dar pena en redes sociales da mala imagen. Solo consigues hacerle publicidad gratis a tu competidor."
      }
    ]
  },
  {
    "id": 368,
    "formato": "whatsapp",
    "remitente": "Aviso Tienda Online",
    "estado": "en línea",
    "mensajes": [
      { "emisor": "remitente", "texto": "ALERTA: Se han vendido 40 unidades del artículo X en los últimos 5 minutos.", "hora": "02:15" },
      { "emisor": "remitente", "texto": "Motivo: Error tipográfico en precio. Está publicado a 1,90€ en lugar de 19,00€.", "hora": "02:16" }
    ],
    "opciones": [
      "Cancelar todos los pedidos por 'falta de stock' y devolverles el dinero de 1,90€ a todos.",
      "Asumir el error humano. Enviar los productos y publicar en redes la metedura de pata con humor.",
      "Enviarles otra cosa parecida pero más barata sin avisar, esperando que no se quejen."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": -6,
        "feedback": "Te salvas de la quiebra, pero te cae una lluvia de malas valoraciones en Trustpilot por cancelar compras válidas."
      },
      {
        "movimientos": [
          { "dinero": -680, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 8,
        "feedback": "Te comes una pérdida económica seria, pero tu honestidad se hace viral y ganas cientos de clientes nuevos fieles."
      },
      {
        "movimientos": [
          { "dinero": -50, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -10,
        "feedback": "La peor decisión. Denuncias por estafa en Consumo y reputación por los suelos."
      }
    ]
  },
  {
    "id": 369,
    "formato": "whatsapp",
    "remitente": "Recepción Almacén",
    "estado": "escribiendo...",
    "mensajes": [
      { "emisor": "remitente", "texto": "Nos acaba de llegar el pedido mensual del proveedor de bebidas.", "hora": "11:00" },
      { "emisor": "remitente", "texto": "Ojo, dos palets enteros de zumos caducan en exactamente 7 días. ¿Firmo el albarán?", "hora": "11:01" }
    ],
    "opciones": [
      "No firmar y hacer que el camión se lleve esos dos palets exigiendo unos con fecha larga.",
      "Firmar y sacar una oferta urgente en redes de '2x1 por tiempo límite' para liquidarlos rápido.",
      "Firmar y venderlos a precio normal. A la gente no le importa si el zumo está recién caducado."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 2,
        "feedback": "Te plantas. El proveedor asume el error, te mandará los correctos mañana y no comprometes tu calidad."
      },
      {
        "movimientos": [
          { "dinero": -100, "categoria_pnl": "Descuentos" }
        ],
        "reputacion": 0,
        "feedback": "Salvas la situación con marketing, pero regalas margen de beneficio por un error que no era tuyo."
      },
      {
        "movimientos": [
          { "dinero": -400, "categoria_pnl": "Suministros" }
        ],
        "reputacion": -8,
        "feedback": "Varios clientes se dan cuenta y se quejan de que vendes cosas a punto de pasarse. Pierdes credibilidad."
      }
    ]
  },
  {
    "id": 370,
    "formato": "whatsapp",
    "remitente": "Luis (Dependiente)",
    "estado": "en línea",
    "mensajes": [
      { "emisor": "remitente", "texto": "Jefe, ha entrado un señor con una placa. Es un Inspector de Trabajo.", "hora": "13:10" },
      { "emisor": "remitente", "texto": "Pide el registro de fichajes horario de todo el personal de este mes impreso.", "hora": "13:11" }
    ],
    "opciones": [
      "Decirle a Luis que se lo imprima directamente desde el sistema informático sin tocar nada.",
      "Decirle que entretenga al inspector mientras tú modificas rápido un par de horas extras de ayer.",
      "Decirle a un empleado que no tiene contrato que se esconda en el baño hasta que el inspector se vaya."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 2,
        "feedback": "Todo transparente y en regla. El inspector revisa todo en 5 minutos y se va sin poner ni una pega."
      },
      {
        "movimientos": [
          { "dinero": -1000, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -3,
        "feedback": "El sistema informático registra a qué hora modificas los datos. El inspector lo pilla y te cruje vivo."
      },
      {
        "movimientos": [
          { "dinero": -3000, "categoria_pnl": "Servicios" }
        ],
        "reputacion": -8,
        "feedback": "Al empleado le da un ataque de ansiedad en el baño, hace ruido, el inspector lo descubre y tienes un lío penal tremendo."
      }
    ]
  },
  {
    "id": 371,
    "formato": "whatsapp",
    "remitente": "Sofía (Limpieza)",
    "estado": "escribiendo...",
    "mensajes": [
      { "emisor": "remitente", "texto": "Con la tromba de agua que está cayendo, tenemos una gotera importante justo en la entrada de la tienda.", "hora": "18:40" },
      { "emisor": "remitente", "texto": "El suelo es una pista de patinaje. ¿Qué hago?", "hora": "18:41" }
    ],
    "opciones": [
      "Cerrar la tienda un par de horas antes por causa de fuerza mayor para evitar accidentes.",
      "Poner un cubo, secar alrededor y poner los tres carteles de 'Suelo Mojado' a la vista.",
      "Ignorarlo y decirle a Sofía que siga pasando la fregona cada 5 minutos."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -150, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 0,
        "feedback": "Evitas riesgos, pero pierdes las ventas de toda la tarde por una simple gotera manejable."
      },
      {
        "movimientos": [
          { "dinero": -10, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 2,
        "feedback": "Actúas con responsabilidad civil y mantienes el negocio abierto de forma segura hasta que deje de llover."
      },
      {
        "movimientos": [
          { "dinero": -500, "categoria_pnl": "Servicios" }
        ],
        "reputacion": -5,
        "feedback": "Sofía no da abasto. Al final un cliente resbala, tienes que usar el seguro y la tarde es un desastre."
      }
    ]
  },
  {
    "id": 372,
    "formato": "whatsapp",
    "remitente": "Aviso RedSys",
    "estado": "en línea",
    "mensajes": [
      { "emisor": "remitente", "texto": "INCIDENCIA GENERAL: Caída del servicio de pagos con tarjeta a nivel nacional. Duración indeterminada.", "hora": "14:00" }
    ],
    "opciones": [
      "Decirle al personal que cobre exclusivamente en efectivo hasta nuevo aviso.",
      "Poner un cartel rápido ofreciendo Bizum al móvil de la empresa como alternativa oficial de pago.",
      "Fiarle a los clientes conocidos apuntando lo que se llevan en una libreta para que paguen mañana."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -80, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -1,
        "feedback": "Hoy en día poca gente lleva suelto. Pierdes un montón de ventas porque no ofreces alternativas tecnológicas."
      },
      {
        "movimientos": [
          { "dinero": 20, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 3,
        "feedback": "¡Reflejos rápidos! Salvas el 80% de las ventas mediante Bizum mientras tus competidores de la calle pierden dinero."
      },
      {
        "movimientos": [
          { "dinero": -150, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 0,
        "feedback": "La mitad de los que apuntaste en la libreta 'se olvidan' de venir a pagar al día siguiente."
      }
    ]
  },
  {
    "id": 373,
    "formato": "whatsapp",
    "remitente": "Ana (Caja)",
    "estado": "escribiendo...",
    "mensajes": [
      { "emisor": "remitente", "texto": "¡Jefe, acaba de entrar el cantante más famoso del país! Va con gorra pero es él.", "hora": "17:30" },
      { "emisor": "remitente", "texto": "Sus guardaespaldas me dicen que cierre la puerta y no deje entrar a nadie mientras él compra.", "hora": "17:31" }
    ],
    "opciones": [
      "Obedecer al guardaespaldas, echar el cierre temporalmente y hacerle la pelota.",
      "Decirle a Ana que le explique educadamente que no pueden cerrar, pero que le atenderán súper rápido.",
      "Decirle a Ana que le haga fotos disimuladamente y las suba ya al Instagram de la tienda."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -50, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -2,
        "feedback": "El famoso compra dos tonterías, pero los clientes habituales de tu barrio se quedan en la calle indignados."
      },
      {
        "movimientos": [
          { "dinero": 50, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 4,
        "feedback": "Mantienes tu dignidad comercial. Él lo entiende, compra tranquilo y te deja una propina tremenda por el buen trato."
      },
      {
        "movimientos": [],
        "reputacion": -6,
        "feedback": "El famoso pilla a Ana haciendo las fotos, se enfada muchísimo, deja las cosas y se marcha. Pésima imagen."
      }
    ]
  },
  {
    "id": 374,
    "formato": "whatsapp",
    "remitente": "Comercial de Publicidad",
    "estado": "en línea",
    "mensajes": [
      { "emisor": "remitente", "texto": "Hola, somos la agencia 'TopSEO'. Por solo 300€ mensuales te prometemos salir los primeros en Google.", "hora": "11:20" },
      { "emisor": "remitente", "texto": "Si no firmas hoy, se lo ofrecemos a la tienda de enfrente.", "hora": "11:21" }
    ],
    "opciones": [
      "Firmar hoy mismo por miedo a que se lo den a tu competencia.",
      "Bloquear el número. Sabes reconocer a los vendehúmos y las tácticas de presión barata.",
      "Insultarle por intentar engañarte con tácticas agresivas."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -300, "categoria_pnl": "Marketing" }
        ],
        "reputacion": 0,
        "feedback": "Tiras 300€ a la basura. El SEO orgánico tarda meses, las agencias serias no prometen imposibles en 24h."
      },
      {
        "movimientos": [],
        "reputacion": 1,
        "feedback": "Buena decisión. Te ahorras dinero y un dolor de cabeza evitando a piratas de la publicidad."
      },
      {
        "movimientos": [],
        "reputacion": -2,
        "feedback": "Nunca pierdas las formas. El comercial publica tu insulto en un foro local y quedas como un grosero."
      }
    ]
  },
  {
    "id": 375,
    "formato": "whatsapp",
    "remitente": "Pedro (Encargado)",
    "estado": "escribiendo...",
    "mensajes": [
      { "emisor": "remitente", "texto": "Jefe, un cliente muy habitual (pero muy mayor) se queja de que la música está muy alta.", "hora": "18:05" },
      { "emisor": "remitente", "texto": "El problema es que la playlist la pusiste tú y al resto de gente joven de la tienda le gusta. ¿La bajo?", "hora": "18:06" }
    ],
    "opciones": [
      "Bajar un poco el volumen, la comodidad de todos los clientes es lo primero.",
      "Decirle a Pedro que no la baje. No vas a cambiar tu concepto de tienda por una sola persona.",
      "Ponerla un poco más alta todavía para invitar al cliente a que se marche pronto."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 3,
        "feedback": "Empatía comercial. Los jóvenes ni notan que la bajaste, pero el señor mayor lo agradece enormemente y vuelve."
      },
      {
        "movimientos": [],
        "reputacion": -2,
        "feedback": "El señor se siente ignorado y no vuelve más. A veces el exceso de 'branding' mata la hospitalidad."
      },
      {
        "movimientos": [
          { "dinero": -30, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Comportamiento muy tóxico. Varios clientes se dan cuenta de la mala fe y abandonan la tienda."
      }
    ]
  },
  {
    "id": 376,
    "formato": "whatsapp",
    "remitente": "Alerta Meteorológica",
    "estado": "en línea",
    "mensajes": [
      { "emisor": "remitente", "texto": "Aviso oficial: Ola de calor extrema (42º) para hoy a partir de las 14:00h.", "hora": "09:00" },
      { "emisor": "remitente", "texto": "Teniendo en cuenta que nuestro aire acondicionado lleva fallando una semana, ¿qué hacemos?", "hora": "09:01" }
    ],
    "opciones": [
      "Comprar 4 ventiladores industriales (200€) y regalar botellitas de agua fría a los que entren.",
      "Aguantar como campeones sudando. No te vas a gastar dinero por un día suelto de calor.",
      "Llamar al técnico de urgencia 24h pagando la tarifa premium (500€) para que lo arregle ya."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -220, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 5,
        "feedback": "Respuesta ágil. Hace calor, pero el detalle del agua fría y los ventiladores hace que los clientes te perdonen la vida."
      },
      {
        "movimientos": [
          { "dinero": -150, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -4,
        "feedback": "La tienda es un horno. La gente entra y sale literalmente corriendo. Tus empleados se marean trabajando."
      },
      {
        "movimientos": [
          { "dinero": -500, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 0,
        "feedback": "Lo arreglan, pero el sablazo económico de la urgencia destroza los beneficios de toda la semana."
      }
    ]
  },
  {
    "id": 377,
    "formato": "whatsapp",
    "remitente": "Amazon Logistics",
    "estado": "escribiendo...",
    "mensajes": [
      { "emisor": "remitente", "texto": "Hola, tengo un paquete para el vecino del 3ºB pero no está en casa.", "hora": "12:15" },
      { "emisor": "remitente", "texto": "¿Podéis recogerlo en la tienda y guardárselo hasta la tarde?", "hora": "12:16" }
    ],
    "opciones": [
      "Recogerlo encantado. Guardar paquetes no te cuesta nada y haces un favor.",
      "Rechazarlo. Tu tienda no es un almacén de paquetería de terceros.",
      "Recogerlo pero decirle al repartidor que le cobrarás 1€ al vecino por el servicio de custodia."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 4,
        "feedback": "Hacer vecindad es vital. El del 3ºB baja a por el paquete por la tarde y de paso te compra un par de cosas por agradecimiento."
      },
      {
        "movimientos": [],
        "reputacion": -1,
        "feedback": "Estás en tu derecho, pero quedas como un borde. El vecino se entera de que no quisiste cogerlo y no te vuelve a hablar."
      },
      {
        "movimientos": [
          { "dinero": 1, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "El vecino se queda a cuadros con tu actitud pesetera. Ganas 1€ y pierdes la reputación del barrio entero."
      }
    ]
  },
  {
    "id": 378,
    "formato": "whatsapp",
    "remitente": "Carlos (Caja)",
    "estado": "en línea",
    "mensajes": [
      { "emisor": "remitente", "texto": "Jefe, un chaval me acaba de pagar con dos billetes de 20€ que tienen manchas de tinta roja en el borde.", "hora": "19:20" },
      { "emisor": "remitente", "texto": "Tienen pinta de ser de los que manchan en los cajeros cuando los roban. ¿Se los cojo?", "hora": "19:21" }
    ],
    "opciones": [
      "Rechazarlos amablemente diciendo que están estropeados y pedirle otra forma de pago.",
      "Cogerlos y meternos en la caja, el dinero es dinero y seguro que en el banco no se fijan.",
      "Bloquear la puerta y decirle que has llamado a la policía por intento de blanqueo."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 1,
        "feedback": "Gestión prudente. El chaval (que seguramente no sabía nada) paga con el móvil y tú te evitas problemas en el banco."
      },
      {
        "movimientos": [
          { "dinero": -40, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -1,
        "feedback": "Pésima idea. El banco retiene esos billetes tintados al hacer el ingreso porque sospechan que son robados y pierdes los 40€."
      },
      {
        "movimientos": [],
        "reputacion": -4,
        "feedback": "Montas una película de acción ridícula. Resulta que el chaval llevaba un bolígrafo rojo roto en el bolsillo."
      }
    ]
  },
  {
    "id": 379,
    "formato": "whatsapp",
    "remitente": "Equipo de Tienda (Grupo)",
    "estado": "escribiendo...",
    "mensajes": [
      { "emisor": "remitente", "texto": "Hoy ha sido el día de mayor facturación del año y no hemos parado ni para comer.", "hora": "21:30" },
      { "emisor": "remitente", "texto": "Jefe, estamos agotados pero súper contentos con el récord.", "hora": "21:31" }
    ],
    "opciones": [
      "Enviarles 50€ por Bizum para que se pidan unas pizzas al cerrar a cuenta de la empresa.",
      "Felicitarles con muchos emojis de aplausos y decirles que mañana más y mejor.",
      "Decirles que está muy bien, pero recordarles que para eso se les paga una nómina a fin de mes."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -50, "categoria_pnl": "Personal y SS" }
        ],
        "reputacion": 6,
        "feedback": "Te gastas 50€, pero es la mejor inversión del mundo. El equipo se siente ultra valorado y se dejan la piel por ti."
      },
      {
        "movimientos": [],
        "reputacion": 1,
        "feedback": "Las felicitaciones están bien, pero tras un palizón récord, las palabras vacías saben a poco."
      },
      {
        "movimientos": [],
        "reputacion": -5,
        "feedback": "Eres un jefe tóxico. Destruyes toda la moral del equipo en un segundo y empiezan a mirar ofertas de trabajo."
      }
    ]
  },
  {
    "id": 380,
    "formato": "whatsapp",
    "remitente": "Ana (Marketing)",
    "estado": "en línea",
    "mensajes": [
      { "emisor": "remitente", "texto": "Me acabo de dar cuenta de que mi primo (el que nunca ha venido a la tienda) nos ha dejado una reseña de 5 estrellas en Google.", "hora": "10:10" },
      { "emisor": "remitente", "texto": "Y encima ha exagerado diciendo que somos la mejor multinacional de la ciudad. Canta bastante a falso. ¿La dejo?", "hora": "10:11" }
    ],
    "opciones": [
      "Decirle a Ana que le pida a su primo que la borre para mantener la autenticidad.",
      "Dejarla. Toda estrella de 5 suma a la media, no hay que ser tiquis miquis.",
      "Decirle que le pida a más primos que pongan reseñas iguales para inflar la nota."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 2,
        "feedback": "Valoras la honestidad. Los clientes reales confían más en un perfil que no parece artificial o exagerado."
      },
      {
        "movimientos": [],
        "reputacion": -1,
        "feedback": "Cualquiera que la lea nota que es familiar o amigo. Resta profesionalidad al conjunto de reseñas."
      },
      {
        "movimientos": [
          { "dinero": -50, "categoria_pnl": "Marketing" }
        ],
        "reputacion": -6,
        "feedback": "El algoritmo de Google detecta el aluvión de reseñas falsas, suspende tu ficha de negocio y desapareces de los mapas."
      }
    ]
  },
  {
    "id": 381,
    "formato": "whatsapp",
    "remitente": "Comercial de Luz",
    "estado": "escribiendo...",
    "mensajes": [
      { "emisor": "remitente", "texto": "Tenemos una tarifa plana para pymes que le reduce la factura de la luz un 40%.", "hora": "11:45" },
      { "emisor": "remitente", "texto": "Solo tiene que contestar a este mensaje con un SÍ para aceptar las condiciones (permanencia 5 años).", "hora": "11:46" }
    ],
    "opciones": [
      "Pedirle que envíe el contrato completo en PDF para revisarlo con tu gestor antes de decidir.",
      "Contestar SÍ. Un 40% de ahorro directo en luz es irrechazable hoy en día.",
      "Ignorar olímpicamente y bloquear el número por spam."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -10, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 1,
        "feedback": "Tu gestor lee la letra pequeña y ve que había cláusulas abusivas ocultas. Haces las cosas con cabeza y te salvas."
      },
      {
        "movimientos": [
          { "dinero": -600, "categoria_pnl": "Suministros" }
        ],
        "reputacion": -2,
        "feedback": "Caíste en la trampa. Te bajan un 40% el primer mes y luego te aplican servicios extra altísimos por 5 años."
      },
      {
        "movimientos": [],
        "reputacion": 0,
        "feedback": "Eres muy desconfiado, que a veces es bueno, pero puede que hayas perdido una oportunidad real de ahorro por no ni leerla."
      }
    ]
  },
  {
    "id": 382,
    "formato": "whatsapp",
    "remitente": "Javier (Dependiente)",
    "estado": "en línea",
    "mensajes": [
      { "emisor": "remitente", "texto": "Jefe, hay un cliente en la tienda que claramente ha bebido mucho. No es violento, pero está molestando a los demás clientes hablándoles sin parar.", "hora": "18:20" },
      { "emisor": "remitente", "texto": "La gente se está marchando incómoda. ¿Qué hago?", "hora": "18:21" }
    ],
    "opciones": [
      "Que Javier se acerque, le ofrezca un vaso de agua y le pida muy amablemente que tiene que abandonar el local.",
      "Llamar a la policía local directamente sin mediar palabra para que se lo lleven.",
      "Decirle a Javier que no haga nada, que si no hace daño acabará cansándose y marchándose."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 3,
        "feedback": "Mano izquierda y control de sala. El hombre se bebe el agua, pide perdón y se marcha pacíficamente. Los demás clientes valoran la gestión."
      },
      {
        "movimientos": [],
        "reputacion": -2,
        "feedback": "Aparecen agentes, la situación se tensa y montas un espectáculo policial en tu local que asusta a los compradores normales."
      },
      {
        "movimientos": [
          { "dinero": -80, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -3,
        "feedback": "El hombre no se va. Los clientes buenos sí se van despavoridos sin comprar. Pierdes dinero por no querer actuar."
      }
    ]
  },
  {
    "id": 383,
    "formato": "whatsapp",
    "remitente": "Marta (Almacén)",
    "estado": "escribiendo...",
    "mensajes": [
      { "emisor": "remitente", "texto": "Madre mía, qué desastre. He tropezado con la carretilla y he tirado entera una estantería de productos de cristal.", "hora": "10:05" },
      { "emisor": "remitente", "texto": "Todo destrozado, habrá como 300€ en pérdidas. Lo siento muchísimo.", "hora": "10:06" }
    ],
    "opciones": [
      "Calmar a Marta, decirle que lo importante es que ella no se haya cortado y dar parte al seguro de comercio.",
      "Decirle que, por su tremenda torpeza, se lo vas a descontar de la nómina de este mes.",
      "Obligarla a que se quede fuera de su horario laboral a limpiarlo todo a fondo como castigo."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -50, "categoria_pnl": "Suministros" }
        ],
        "reputacion": 4,
        "feedback": "El seguro cubre casi todo. Marta, al ver que te preocupas por ella en vez de por el dinero, se vuelve tu empleada más leal."
      },
      {
        "movimientos": [],
        "reputacion": -8,
        "feedback": "Es ilegal descontar roturas accidentales de la nómina. Te denuncia a Magistratura de Trabajo y pierdes con multazo."
      },
      {
        "movimientos": [
          { "dinero": -150, "categoria_pnl": "Suministros" }
        ],
        "reputacion": -5,
        "feedback": "El rencor no repara cristales. Marta se coge la baja por estrés y te quedas sin empleada en pleno pico de trabajo."
      }
    ]
  },
  {
    "id": 384,
    "formato": "whatsapp",
    "remitente": "Asociación Cáncer Infantil",
    "estado": "en línea",
    "mensajes": [
      { "emisor": "remitente", "texto": "Hola, este viernes es nuestra cuestación anual. ¿Nos permitiría dejar un cartel en su escaparate y una hucha en el mostrador?", "hora": "12:00" }
    ],
    "opciones": [
      "Aceptar encantado y decirles que tú mismo harás la primera aportación a la hucha.",
      "Decirles que no quieres poner el cartel porque te 'afea' el escaparatismo de tu marca.",
      "Decirles que aceptas, pero que quieres un 5% de lo que recaude la hucha por prestarles el espacio."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -10, "categoria_pnl": "Marketing" }
        ],
        "reputacion": 6,
        "feedback": "Ayudas a una gran causa. Tus clientes ven la hucha, valoran tu responsabilidad social y mejora la imagen corporativa."
      },
      {
        "movimientos": [],
        "reputacion": -3,
        "feedback": "Las voluntarias de la ONG, que son vecinas del barrio, se quedan pasmadas con tu frialdad comercial y dejan de comprarte."
      },
      {
        "movimientos": [],
        "reputacion": -10,
        "feedback": "Una respuesta absolutamente miserable. Las voluntarias lo difunden por grupos de WhatsApp y sufres un boicot barrial severo."
      }
    ]
  },
  {
    "id": 385,
    "formato": "noticia",
    "medio": "Diario de la Ciudad",
    "titular": "El Ayuntamiento aprueba peatonalizar la calle comercial principal el próximo mes.",
    "noticia": "Las obras comenzarán en breve. Se prohibirá el paso de vehículos privados para fomentar el comercio local a pie, aunque algunos comerciantes temen problemas logísticos y caída de clientes de las afueras.",
    "opciones": [
      "Invertir ya en rediseñar el escaparate y poner carteles en la acera para captar al nuevo flujo de peatones.",
      "Unirte a la protesta de otros comerciantes que exigen paralizar la obra porque 'sin coches no hay clientes'.",
      "Ignorar la noticia, la gente seguirá comprando igual vengan andando o en coche."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -150, "categoria_pnl": "Publicidad" },
          { "dinero": 300, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 4,
        "feedback": "Visión de futuro. Te adaptas rápido, captas al público peatonal y tus ventas en tienda física suben a medio plazo."
      },
      {
        "movimientos": [],
        "reputacion": -3,
        "feedback": "Pierdes el tiempo en quejas inútiles. La obra se hace igual y te pilla sin estrategia para atraer a los paseantes, perdiendo tirón."
      },
      {
        "movimientos": [],
        "reputacion": 0,
        "feedback": "No haces nada. Sobrevives, pero pierdes la oportunidad de oro de destacar cuando abran la calle a los peatones."
      }
    ]
  },
  {
    "id": 386,
    "formato": "noticia",
    "medio": "Economía Hoy",
    "titular": "Convocada huelga nacional de transportistas para la próxima semana.",
    "noticia": "Se prevén graves desabastecimientos en comercios minoristas y supermercados debido a la paralización total del sector del transporte por carretera en protesta por el precio del combustible.",
    "opciones": [
      "Hacer un pedido masivo hoy mismo a tus proveedores principales para llenar el almacén por si acaso.",
      "No hacer nada. Los medios siempre exageran con estas huelgas y luego no pasa nada.",
      "Subir los precios de tu stock actual un 20% escudándote en la escasez inminente."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -400, "categoria_pnl": "Compras/Materiales" },
          { "dinero": 700, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 2,
        "feedback": "Inviertes liquidez en stock, pero aciertas. La huelga dura 10 días, tu competencia se queda vacía y tú arrasas en ventas."
      },
      {
        "movimientos": [
          { "dinero": -200, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -2,
        "feedback": "La huelga fue real. Te quedas sin producto estrella a los tres días y tienes que cerrar parcialmente la tienda perdiendo ventas."
      },
      {
        "movimientos": [
          { "dinero": 150, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -6,
        "feedback": "Ganas dinero extra a corto plazo, pero tus clientes habituales se dan cuenta de la especulación y pierdes su confianza para siempre."
      }
    ]
  },
  {
    "id": 387,
    "formato": "noticia",
    "medio": "Motor & Ciudad",
    "titular": "Entra en vigor la nueva Zona de Bajas Emisiones (ZBE).",
    "noticia": "Las furgonetas antiguas de reparto sin etiqueta ambiental ya no podrán acceder al centro de la ciudad. Las cámaras automáticas impondrán multas de hasta 200€ por infracción a los comercios no adaptados.",
    "opciones": [
      "Vender la furgoneta diésel de la empresa y pedir un préstamo para una furgoneta 100% eléctrica.",
      "Contratar a una empresa externa de reparto en bicicleta para los pedidos del centro de la ciudad.",
      "Seguir usando la furgoneta vieja y meter el coste de las multas como 'gasto operativo'."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -500, "categoria_pnl": "Costos Financieros" }
        ],
        "reputacion": 3,
        "feedback": "Es una buena idea ecológica, pero te descapitalizas brutalmente de golpe y el pago mensual del préstamo con sus intereses te ahoga."
      },
      {
        "movimientos": [
          { "dinero": -80, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 5,
        "feedback": "Solución ágil y barata. Mantienes tus envíos contratando servicios de última milla, mejoras tu imagen ecológica local y no te endeudas."
      },
      {
        "movimientos": [
          { "dinero": -600, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -4,
        "feedback": "Las cámaras automáticas te fríen a multas. Pagas muchísimo más asumiendo sanciones tontas que buscando una alternativa."
      }
    ]
  },
  {
    "id": 388,
    "formato": "noticia",
    "medio": "Boletín Laboral",
    "titular": "Aprobado el aumento del Salario Mínimo Interprofesional.",
    "noticia": "La medida entra en vigor mañana. Todos los comercios deberán ajustar las nóminas de sus empleados base, lo que supone un reto para la viabilidad de los pequeños márgenes del sector retail.",
    "opciones": [
      "Ajustar las nóminas de inmediato asumiendo el recorte en tu margen de beneficios de la empresa.",
      "Subir todos los precios de tu tienda un 5% para compensar el gasto extra en salarios.",
      "Despedir al empleado más nuevo para cuadrar los números con el resto de la plantilla."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -150, "categoria_pnl": "Personal y SS" }
        ],
        "reputacion": 3,
        "feedback": "Cumples la ley sin tocar precios, pero tu margen operativo sufre y tu viabilidad a final de año peligra si no ajustas ingresos."
      },
      {
        "movimientos": [
          { "dinero": -150, "categoria_pnl": "Personal y SS" },
          { "dinero": 200, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -1,
        "feedback": "Es duro, pero es la realidad empresarial. Traspasas el coste macroeconómico al consumidor para mantener el negocio a flote de forma sana."
      },
      {
        "movimientos": [
          { "dinero": -800, "categoria_pnl": "Personal y SS" },
          { "dinero": -300, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -6,
        "feedback": "Pagas despido y sobrecargas de trabajo al resto de empleados, hundiéndoles la moral. Pierdes muchísima eficiencia operativa y ventas."
      }
    ]
  },
  {
    "id": 389,
    "formato": "noticia",
    "medio": "Alerta Sanitaria",
    "titular": "Sanidad advierte: El ingrediente 'X' podría tener efectos secundarios graves.",
    "noticia": "Un reciente estudio desaconseja el uso de este componente, habitual en muchos de los productos más vendidos. Las autoridades recomiendan a los consumidores leer las etiquetas y evitarlo.",
    "opciones": [
      "Retirar el producto temporalmente y buscar un proveedor que haga una versión sin ese ingrediente.",
      "Poner un cartel enorme defendiendo tu producto y diciendo que el estudio está manipulado.",
      "Venderlo rápido con un 50% de descuento para limpiar stock antes de que la noticia llegue a más gente."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -150, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 6,
        "feedback": "Pierdes ventas del stock actual ahora, pero tu responsabilidad te corona como marca segura. A la larga la versión 'Sin X' arrasará."
      },
      {
        "movimientos": [],
        "reputacion": -8,
        "feedback": "Ir contra la ciencia en salud pública es un suicidio de marketing. Te cancelan en redes sociales y te hunden a críticas justificadas."
      },
      {
        "movimientos": [
          { "dinero": 100, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -6,
        "feedback": "Recuperas dinero sucio, pero te delatas como alguien a quien le importa cero la salud de sus clientes. Pésimo movimiento ético."
      }
    ]
  },
  {
    "id": 390,
    "formato": "noticia",
    "medio": "Portal Pyme",
    "titular": "Abierto el plazo: Ayudas directas de 2.000€ para la digitalización de comercios.",
    "noticia": "El Ministerio habilita hoy los fondos. La adjudicación será por estricto orden de llegada telemática. Las gestorías locales avisan de un colapso inminente en la web gubernamental.",
    "opciones": [
      "Pagar los 100€ a la gestoría sin dudarlo para asegurar que lo meten rápido y bien.",
      "Intentar hacerlo tú mismo gratis entrando con tu certificado digital ahora mismo.",
      "Pasar del tema. Esas ayudas luego siempre te obligan a hacer papeleos infinitos."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -100, "categoria_pnl": "Asesoría" },
          { "dinero": 2000, "categoria_pnl": "Subvenciones" }
        ],
        "reputacion": 2,
        "feedback": "Inviertes 100€ en el asesor para ganar 2000€. Su software entra en el cupo antes del colapso y recibes la inyección de capital."
      },
      {
        "movimientos": [
          { "dinero": -50, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -1,
        "feedback": "La web del Ministerio se colapsa, te tiras horas perdiendo tiempo de tu trabajo real, y cuando logras entrar los fondos se han agotado."
      },
      {
        "movimientos": [],
        "reputacion": 0,
        "feedback": "Te ahorras problemas burocráticos, pero dejas pasar capital gratuito que tu competencia sí aprovechará para modernizarse."
      }
    ]
  },
  {
    "id": 391,
    "formato": "noticia",
    "medio": "El Diario Local",
    "titular": "Cierra por sorpresa la gran franquicia multinacional del centro comercial.",
    "noticia": "La conocida marca de retail baja la persiana de sus locales en la ciudad tras declarar la quiebra. Cientos de clientes locales se quedan repentinamente huérfanos de su proveedor habitual.",
    "opciones": [
      "Lanzar hoy mismo una campaña en Instagram: 'Si eres cliente de [Franquicia], ven y te damos un 10% de dto'.",
      "No hacer nada, esos clientes ya llegarán solos a tu tienda poco a poco.",
      "Ir a los locales cerrados a pegar carteles de tu tienda en sus cristaleras vacías."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -30, "categoria_pnl": "Publicidad" },
          { "dinero": 200, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "¡Reflejos de lince! Inviertes poco, pero captas rápidamente a los 'huérfanos' de la multinacional y aumentas tu base de clientes recurrentes."
      },
      {
        "movimientos": [],
        "reputacion": 0,
        "feedback": "Pierdes la ventana de oportunidad. Tu competencia más cercana es quien lanza la oferta primero y se lleva a casi todos esos clientes perdidos."
      },
      {
        "movimientos": [
          { "dinero": -150, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -4,
        "feedback": "Ganas visibilidad de la peor manera. La policía local te multa por ensuciar la cristalera de la franquicia quebrada de forma ilegal."
      }
    ]
  },
  {
    "id": 392,
    "formato": "noticia",
    "medio": "CiberSeguridad News",
    "titular": "Hackeo masivo detectado en el popular software de caja registradora 'CajaPro'.",
    "noticia": "Expertos recomiendan a los comercios desconectar los equipos de internet inmediatamente. Los piratas informáticos están robando datos bancarios de los clientes finales en tiempo real.",
    "opciones": [
      "Desconectar el TPV del wifi y pasar el resto de la tarde cobrando a mano y sumando con calculadora.",
      "Ignorar la alerta, tienes antivirus en el ordenador de la tienda y no crees que pase nada.",
      "Cerrar la tienda por motivos de seguridad técnica hasta mañana."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -20, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 2,
        "feedback": "El cobro a mano ralentiza la cola y algún impaciente se va, pero proteges los datos bancarios de tus clientes totalmente. Actúas con ética."
      },
      {
        "movimientos": [
          { "dinero": -1500, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -8,
        "feedback": "El antivirus no para fallos de servidor externo. Te roban datos de clientes y la Agencia de Protección de Datos te clava una sanción administrativa."
      },
      {
        "movimientos": [
          { "dinero": -300, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -2,
        "feedback": "Cerrar es matar moscas a cañonazos. Proteges la red pero pierdes un dineral en facturación por no saber adaptar la operativa del negocio a mano."
      }
    ]
  },
  {
    "id": 393,
    "formato": "noticia",
    "medio": "Mercados Financieros",
    "titular": "El Euríbor rompe su máximo histórico y encarece brutalmente los préstamos a pymes.",
    "noticia": "Los comercios con créditos a tipo variable verán disparada su cuota mensual a partir del próximo mes, asfixiando su liquidez a corto plazo y paralizando futuras inversiones.",
    "opciones": [
      "Llamar al banco y renegociar tu préstamo para pasarlo a tipo fijo asumiendo una pequeña penalización (100€).",
      "No tocar nada y cruzar los dedos para que el mes que viene los tipos de interés bajen solos.",
      "Subir los precios de la tienda un 15% de golpe mañana para compensar el sablazo que te va a dar el banco."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -100, "categoria_pnl": "Costos Financieros" }
        ],
        "reputacion": 2,
        "feedback": "Pagas la penalización, pero amarras tu tranquilidad financiera. Te evitas meses de insomnio e incertidumbre por las subidas de cuotas."
      },
      {
        "movimientos": [
          { "dinero": -400, "categoria_pnl": "Costos Financieros" }
        ],
        "reputacion": 0,
        "feedback": "Mala apuesta. El euríbor sigue subiendo y la cuota de tu préstamo, al no estar protegida, te come todos los beneficios operativos del trimestre."
      },
      {
        "movimientos": [
          { "dinero": 150, "categoria_pnl": "Operativos (Ventas)" },
          { "dinero": -400, "categoria_pnl": "Costos Financieros" }
        ],
        "reputacion": -7,
        "feedback": "Los clientes se espantan por la subida radical e injustificada de tus precios. Ganas algo hoy, pero te hunden los intereses igual y destrozas tu marca a la larga."
      }
    ]
  },
  {
    "id": 394,
    "formato": "noticia",
    "medio": "Tendencias Laborales",
    "titular": "La jornada de 4 días a la semana gana fuerza: Los empleados del comercio local la exigen.",
    "noticia": "Sindicatos y plantillas presionan para probar este modelo, prometiendo mayor productividad a cambio de cerrar un día más o concentrar turnos. Los pequeños empresarios tienen dudas.",
    "opciones": [
      "Negarte rotundamente. En comercio es imposible abrir 6 días a la semana y que ellos trabajen 4.",
      "Aceptar la prueba piloto, contratando a una persona a media jornada para cubrir los huecos que dejen.",
      "Ofrecerles un punto medio negociado: mantener los 5 días pero salir 1 hora antes todos los viernes."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": -4,
        "feedback": "Un 'no' directo sin alternativa enfada a la plantilla, que siente que no escuchas sus legítimas peticiones sobre conciliación laboral."
      },
      {
        "movimientos": [
          { "dinero": -600, "categoria_pnl": "Personal y SS" }
        ],
        "reputacion": 4,
        "feedback": "Ellos están superfelices, pero el sobrecoste salarial estructural de cubrir sus turnos con más personal destroza la rentabilidad de tu negocio en la cuenta final."
      },
      {
        "movimientos": [
          { "dinero": -30, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Brillante negociación. Demuestras flexibilidad directiva y ganas su lealtad eterna asumiendo apenas la pérdida de la última hora floja del viernes."
      }
    ]
  },
  {
    "id": 395,
    "formato": "noticia",
    "medio": "Medio Ambiente Web",
    "titular": "Decretada alerta por sequía severa: Prohibido usar agua para limpieza exterior.",
    "noticia": "El bando municipal prohíbe taxativamente limpiar fachadas, aceras o escaparates comerciales con agua corriente bajo pena de multas de hasta 3.000 euros para los infractores.",
    "opciones": [
      "Comprar un sistema de limpieza en seco y productos especiales para mantener tu escaparate limpio (80€).",
      "Seguir limpiando con manguera a las 6:00 de la mañana cuando nadie te ve.",
      "Dejar de limpiar el escaparate hasta que llueva, aunque se llene de polvo y parezca abandonado."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -80, "categoria_pnl": "Suministros" }
        ],
        "reputacion": 3,
        "feedback": "Pagas los productos ecológicos, pero tu escaparate sigue brillando. Además, pones un cartel presumiendo de 'limpieza sin agua' que gusta mucho al cliente cívico."
      },
      {
        "movimientos": [
          { "dinero": -3000, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -5,
        "feedback": "Un vecino ecologista te graba por la mañana y denuncia. Te cae la multa máxima municipal y tu reputación local queda gravemente manchada de incivismo."
      },
      {
        "movimientos": [
          { "dinero": -150, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -4,
        "feedback": "Ahorras agua, pero el aspecto mugriento de tus cristales acaba ahuyentando a los clientes. En el retail local la estética exterior comercial importa y mucho."
      }
    ]
  },
  {
    "id": 396,
    "formato": "noticia",
    "medio": "Deportes 24h",
    "titular": "¡Histórico! El equipo de baloncesto de la ciudad gana la liga europea en el último segundo.",
    "noticia": "Se espera una celebración multitudinaria en las calles de la ciudad durante todo el día de mañana. La euforia se apodera de los vecinos tras esta gesta deportiva.",
    "opciones": [
      "No hacer nada especial, tu negocio no tiene nada que ver con el baloncesto ni los deportes.",
      "Madrugar mañana, comprar banderines del equipo y lanzar un 'Código Campeones' en tus redes sociales.",
      "Poner en tus redes: 'Mucho baloncesto pero las calles están sucias, a ver si el Ayuntamiento limpia'."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 0,
        "feedback": "Dejas pasar la oportunidad. Eres puro negocio, pero demuestras cero conexión emocional con la ciudad y su gente durante un hito histórico."
      },
      {
        "movimientos": [
          { "dinero": -15, "categoria_pnl": "Publicidad" },
          { "dinero": 120, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 6,
        "feedback": "Te sumas a la euforia colectiva. Gastas poquísimo, caes inmensamente simpático al barrio y el código de descuento trae ventas festivas inesperadas."
      },
      {
        "movimientos": [],
        "reputacion": -8,
        "feedback": "Ser el 'Grinch' amargado en un día de alegría colectiva es un error fatal de Relaciones Públicas. Recibes un boicot de clientes indignados con tu actitud."
      }
    ]
  },
  {
    "id": 397,
    "formato": "noticia",
    "medio": "Global Trade",
    "titular": "Colapso aduanero en Asia: El precio de los contenedores marítimos se multiplica por cuatro.",
    "noticia": "La crisis portuaria encarece brutalmente los costes de importación de envases, plásticos y mercancías en general. Los minoristas buscan desesperadamente alternativas.",
    "opciones": [
      "Pagar el sobrecoste asiático por miedo a quedarte sin envases, destrozando tus márgenes de beneficio.",
      "Buscar un proveedor nacional de urgencia. Es un 15% más caro de lo normal, pero mucho más barato que el sobrecoste asiático.",
      "No pedir nada y, cuando se te acaben los envases, darle los productos a los clientes en bolsas de basura."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -800, "categoria_pnl": "Suministros" }
        ],
        "reputacion": 0,
        "feedback": "Te hundes en sobrecostes logísticos internacionales por inercia y miedo al cambio, ahogando la cuenta bancaria de tu Pyme durante meses."
      },
      {
        "movimientos": [
          { "dinero": -150, "categoria_pnl": "Suministros" }
        ],
        "reputacion": 4,
        "feedback": "Agilidad directiva. Cambias de proveedor rápidamente a uno local, asumes un coste menor, mantienes el stock y encima promueves el comercio nacional."
      },
      {
        "movimientos": [
          { "dinero": -300, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -9,
        "feedback": "Una chapuza épica. Los clientes se sienten insultados con tu 'solución' creativa e higiénica inaceptable, rechazan la compra in situ y no vuelven jamás."
      }
    ]
  },
  {
    "id": 398,
    "formato": "noticia",
    "medio": "Tech Radar",
    "titular": "Apagón mundial programado: WhatsApp y Facebook cerrarán 12 horas mañana.",
    "noticia": "Las grandes tecnológicas harán un mantenimiento crítico de servidores. Los comercios que dependen exclusivamente de estas redes para reservas y atención al cliente quedarán incomunicados.",
    "opciones": [
      "Cerrar la recepción de pedidos online mañana y dar el día por perdido hasta que vuelva la conexión.",
      "Mandar un email masivo a tu base de datos hoy avisando y dando un número para llamadas de teléfono clásico.",
      "Confiar en que sea un rumor sensacionalista o que lo arreglen rápido sin afectar a tu zona."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -250, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -1,
        "feedback": "Tiras la toalla demasiado rápido. Un negocio debe tener siempre un plan B de comunicación en lugar de paralizarse ante fallos técnicos de terceros."
      },
      {
        "movimientos": [
          { "dinero": 150, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Eres el único comercio que previene el problema en la ciudad. Tus clientes te llaman por el canal clásico gracias a tu aviso, salvando la facturación del día."
      },
      {
        "movimientos": [
          { "dinero": -150, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -3,
        "feedback": "El apagón ocurre tal y como dijeron. Los clientes intentan contactarte sin éxito, se frustran enormemente y asumen erróneamente que has cerrado permanentemente."
      }
    ]
  },
  {
    "id": 399,
    "formato": "noticia",
    "medio": "Portal Joven",
    "titular": "Lanzado el 'Bono Joven Comercio': 100€ gratis para gastar en tiendas locales.",
    "noticia": "Los jóvenes de 18 años recibirán esta inyección estatal. Los comercios interesados deben registrarse en la plataforma del ministerio, asumiendo un proceso algo burocrático.",
    "opciones": [
      "Invertir 2 horas en el aburrido papeleo para adherirte al programa oficial hoy mismo.",
      "Pasar del tema, es mucha burocracia del Estado y luego tardan meses en pagarte los bonos.",
      "Subir los precios de los productos juveniles 10€ para sacarles más rentabilidad a esos bonos gratis."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 300, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 3,
        "feedback": "El papeleo renta. Eres de las primeras tiendas adheridas en la lista oficial y tu local se llena de gente joven inyectando liquidez del estado en tu caja."
      },
      {
        "movimientos": [],
        "reputacion": 0,
        "feedback": "Por pura pereza ante la burocracia, le regalas en bandeja un segmento entero de nueva clientela joven y dinero público a tu competencia."
      },
      {
        "movimientos": [
          { "dinero": -50, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -6,
        "feedback": "Los jóvenes comparan los precios del catálogo oficial. Ven que te has querido aprovechar subiendo precios y hacen una campaña durísima contra ti en TikTok."
      }
    ]
  },
  {
    "id": 400,
    "formato": "noticia",
    "medio": "Gaceta Económica",
    "titular": "La inflación interanual supera el 8% y hunde el poder adquisitivo de los consumidores.",
    "noticia": "Las familias recortan gastos drásticamente. Los pequeños comercios se debaten entre subir precios, bajar calidades o estrechar sus márgenes hasta el límite de la quiebra.",
    "opciones": [
      "Bajar drásticamente la calidad de tus productos (usando materia prima barata) para no tener que subir precios.",
      "Mantener precios intactos asumiendo tú la pérdida de margen, esperando que la crisis pase rápido.",
      "Lanzar una nueva línea de productos 'Básicos' más asequible, manteniendo tu línea premium a su precio real."
    ],
    "correcta": 2,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -200, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -8,
        "feedback": "El cliente perdona un aumento justificado de precio, pero nunca un bajón de calidad a escondidas (shrinkflation). Destruyes por completo tu imagen de marca."
      },
      {
        "movimientos": [
          { "dinero": -500, "categoria_pnl": "Compras/Materiales" }
        ],
        "reputacion": 2,
        "feedback": "Tus clientes están contentos con tus precios, pero en la práctica estás trabajando gratis. Tu caja operativa se desangra absorbiendo el coste de tus proveedores."
      },
      {
        "movimientos": [
          { "dinero": 150, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 4,
        "feedback": "Gran estrategia directiva anti-crisis. Te adaptas al bolsillo dañado de muchos diversificando la oferta, y mantienes la rentabilidad general sin perder estatus."
      }
    ]
  },
  {
    "id": 401,
    "formato": "noticia",
    "medio": "Alerta Consumo",
    "titular": "Aviso legal: Obligatorio cobrar todas las bolsas de papel y plástico desde hoy.",
    "noticia": "Se acabaron las excepciones. Inspección de Consumo iniciará una campaña sorpresa en comercios locales para asegurar el cobro. Multas desde 2.000€ a los locales que las regalen.",
    "opciones": [
      "Cumplir la ley inmediatamente y configurar el sistema para cobrar 10 céntimos por bolsa.",
      "Regalar la bolsa de estrangis a los clientes 'de toda la vida' para que no se enfaden contigo.",
      "Camuflar el precio de la bolsa subiéndole 10 céntimos al producto más barato de la tienda."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 20, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -1,
        "feedback": "Algún cliente mayor se queja por el céntimo, pero le echas la culpa a la ley. Evitas disgustos y de paso cubres el coste puro del material de la bolsa."
      },
      {
        "movimientos": [
          { "dinero": -2000, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": 2,
        "feedback": "Mala suerte épica. Un inspector de consumo que venía disfrazado de cliente normal ve cómo regalas la bolsa y te levanta un acta con la multa máxima."
      },
      {
        "movimientos": [],
        "reputacion": -3,
        "feedback": "Crees ser el empresario más listo del barrio, pero el tique de caja debe desglosar explícitamente el impuesto de la bolsa. Incurres en un problema fiscal absurdo."
      }
    ]
  },
  {
    "id": 402,
    "formato": "noticia",
    "medio": "Futuro Tech",
    "titular": "Una nueva Inteligencia Artificial promete responder reseñas y dudas sola.",
    "noticia": "El software automatizado, que cuesta 50€ al mes, se integra con las redes del comercio y atiende a los clientes 24/7. Algunos dueños temen la deshumanización del servicio de proximidad.",
    "opciones": [
      "Contratar la IA (50€/mes) y despedir a la persona humana que te llevaba las redes sociales.",
      "Contratar la IA (50€/mes) pero como apoyo interno para que tu equipo atienda más rápido, sin despedir a nadie.",
      "Prohibir el uso de Inteligencias Artificiales en la empresa porque quitan el ansiado 'toque humano'."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 450, "categoria_pnl": "Personal y SS" },
          { "dinero": -50, "categoria_pnl": "Servicios" },
          { "dinero": -300, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -6,
        "feedback": "Ahorras un sueldo echando a un humano, pero la IA sufre alucinaciones respondiendo locuras a clientes cabreados, causando una fuga masiva de confianza."
      },
      {
        "movimientos": [
          { "dinero": -50, "categoria_pnl": "Servicios" },
          { "dinero": 200, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 4,
        "feedback": "Visión ganadora. Integras innovación técnica con control humano de calidad. Mejora brutalmente el tiempo de respuesta y tus ventas online repuntan fuerte."
      },
      {
        "movimientos": [],
        "reputacion": -1,
        "feedback": "Te estancas tecnológicamente dominado por el miedo a lo nuevo. Mientras tanto, tu competencia empieza a captar clientes de madrugada gracias a sus bots automatizados."
      }
    ]
  },
  {
    "id": 403,
    "formato": "noticia",
    "medio": "Meteo Alerta",
    "titular": "Ola de frío polar extremo: Alerta Roja por nieve y hielo en la ciudad este fin de semana.",
    "noticia": "Las autoridades recomiendan a los ciudadanos no salir de sus casas ante la peligrosa bajada térmica. Se prevé que el comercio a pie de calle sufra un desplome total de visitas.",
    "opciones": [
      "Potenciar fuertemente tus anuncios de entrega a domicilio y comprar cadenas para tu furgoneta.",
      "Abrir la tienda física normal y encender la calefacción a tope esperando que venga alguien de paso.",
      "Cerrar directamente el negocio todo el fin de semana, nadie va a salir de casa con alerta roja."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -40, "categoria_pnl": "Compras/Materiales" },
          { "dinero": 300, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Nadie pisa la calle física, pero como potencias el canal online, los pedidos a domicilio se disparan entre gente aburrida. Salvas el fin de semana logísticamente."
      },
      {
        "movimientos": [
          { "dinero": -120, "categoria_pnl": "Suministros" }
        ],
        "reputacion": -2,
        "feedback": "Terco como una mula. Gastas una fortuna en luz térmica calentando un local a donde no entra ni un alma. Es un día de pérdidas financieras absolutas."
      },
      {
        "movimientos": [
          { "dinero": -150, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 0,
        "feedback": "Cierras todo. Ahorras la luz y proteges a tus empleados de patinar en el hielo, pero pierdes radicalmente toda oportunidad de hacer caja online ese día."
      }
    ]
  },
  {
    "id": 404,
    "formato": "noticia",
    "medio": "Turismo Local",
    "titular": "Desvían un megacrucero por tormenta: 6.000 turistas desembarcarán mañana.",
    "noticia": "El puerto recibirá de imprevisto una auténtica avalancha de turistas internacionales con ganas de consumir y pasear. El tejido comercial de la ciudad dispone de menos de 24 horas para prepararse.",
    "opciones": [
      "Doblar la plantilla de mañana, traducir unos carteles rápidos al inglés y sacar género llamativo al escaparate.",
      "Ignorarlo, tu producto es muy local y los cruceristas solo buscan postales, imanes de nevera y cerveza.",
      "Subir los precios de toda la tienda un 40% durante las 6 horas que dure la escala del barco."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -80, "categoria_pnl": "Personal y SS" },
          { "dinero": 500, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 3,
        "feedback": "Te preparas bien para la marea extranjera. Muchos turistas que bajan a dar una vuelta compran tus productos gracias a lo llamativo y bien traducido de tu entrada."
      },
      {
        "movimientos": [],
        "reputacion": 0,
        "feedback": "Visión cortoplacista. Ves pasar literalmente a miles de personas con carteras europeas y americanas por tu puerta y no rascas ni un euro por no adaptar tu exposición al idioma."
      },
      {
        "movimientos": [
          { "dinero": 50, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Ganas un poco más con dos ventas aisladas, pero tus clientes locales que pasaban por allí ven la estafa tarifaria en las etiquetas y se indignan profundamente."
      }
    ]
  },
  {
    "id": 405,
    "formato": "noticia",
    "medio": "Diseño & Empresa",
    "titular": "La Inteligencia Artificial revoluciona la creación de logotipos y campañas.",
    "noticia": "Cada vez más pymes despiden a sus agencias de marketing y usan IA generativa para crear sus carteles, publicidades y catálogos a coste casi cero. El sector del diseño protesta.",
    "opciones": [
      "Cancelar tu contrato con la agencia de diseño local y generar todos tus carteles con IA gratis.",
      "Mantener a tu agencia de diseño humana, valorando la originalidad y el trato cercano.",
      "Usar IA para robar el diseño exacto de una multinacional y ponerle el nombre de tu tienda."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 150, "categoria_pnl": "Servicios" },
          { "dinero": -100, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -2,
        "feedback": "Ahorras en el servicio del diseñador hoy, pero la IA hace unos carteles genéricos sin alma. Tus publicaciones aburren y pierdes el enganche que tenías con tu marca visual."
      },
      {
        "movimientos": [
          { "dinero": -150, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 4,
        "feedback": "Decisión firme en favor de la calidad. Tu marca sigue destacando por tener creatividad local real y encima la agencia que retienes te recomienda con entusiasmo a otros."
      },
      {
        "movimientos": [
          { "dinero": -1000, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -8,
        "feedback": "Error fatal. La multinacional, que usa rastreadores automáticos, detecta el plagio que generaste con la IA. Te fulminan con un aviso legal reclamando daños."
      }
    ]
  },
  {
    "id": 406,
    "formato": "noticia",
    "medio": "Cripto Mercados",
    "titular": "Auge imparable: El 15% de los jóvenes ya exige poder pagar en criptomonedas.",
    "noticia": "El uso de Bitcoin y otras criptomonedas para compras cotidianas deja de ser ciencia ficción. Los comercios pioneros están atrayendo a una nueva ola de clientes tecnológicos.",
    "opciones": [
      "Instalar una pasarela de pago segura de criptomonedas (50€) que te convierte el saldo a euros automáticamente.",
      "Ignorar la moda. Las criptomonedas son demasiado volátiles y no te fías del sistema.",
      "Aceptar pagos en criptos directamente a tu billetera personal para evadir impuestos."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -50, "categoria_pnl": "Servicios" },
          { "dinero": 200, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Eres el primero de tu calle en hacerlo. Sales en un blog de tecnología local y ganas una oleada de clientes geek con mucho dinero."
      },
      {
        "movimientos": [],
        "reputacion": 0,
        "feedback": "No asumes riesgos, pero te quedas atrás en innovación. Ese 15% de jóvenes se va a comprar a la competencia."
      },
      {
        "movimientos": [
          { "dinero": -2000, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -7,
        "feedback": "Hacienda detecta el flujo de caja oculto. Te enfrentas a una sanción por economía sumergida y fraude fiscal."
      }
    ]
  },
  {
    "id": 407,
    "formato": "noticia",
    "medio": "Boletín Oficial",
    "titular": "Nuevo 'Impuesto al Plástico' para envases no reutilizables.",
    "noticia": "El Gobierno aprueba una tasa de 0,45€ por cada kilo de envase plástico de un solo uso que entreguen los comercios. Los inspectores ya están revisando facturas de proveedores.",
    "opciones": [
      "Cambiar todos tus envases a papel kraft reciclado hoy mismo, aunque sean más frágiles.",
      "Mantener el plástico pero empezar a cobrarle el impuesto directamente al cliente final en el ticket.",
      "Seguir usando plástico y no declarar los kilos reales que gastas para ahorrarte el impuesto."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -100, "categoria_pnl": "Suministros" }
        ],
        "reputacion": 4,
        "feedback": "Adaptación brillante. Te evitas la burocracia del impuesto y das una imagen totalmente ecológica a tu clientela."
      },
      {
        "movimientos": [
          { "dinero": -50, "categoria_pnl": "Impuestos" }
        ],
        "reputacion": -3,
        "feedback": "Tus productos de repente son más caros por el sobrecoste del envase. Los clientes se quejan de tu falta de alternativas verdes."
      },
      {
        "movimientos": [
          { "dinero": -800, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -5,
        "feedback": "Una auditoría cruza tus datos de compra con tu proveedor. Te pillan mintiendo en la declaración de plásticos y te sancionan."
      }
    ]
  },
  {
    "id": 408,
    "formato": "noticia",
    "medio": "Viral Hub",
    "titular": "Un influencer local con 500k seguidores arremete contra el comercio de barrio.",
    "noticia": "En su último vídeo, el creador de contenido se burla de las tiendas físicas, diciendo que son 'caras, antiguas y huelen a rancio', recomendando comprar todo por Amazon.",
    "opciones": [
      "Hacer un dúo (video respuesta) divertido en TikTok demostrando la frescura y calidad de tus productos.",
      "Unirte a otros comerciantes para pagar a un abogado y demandarlo por difamación.",
      "Entrar en sus comentarios a insultarle y llamarle 'nini' que no sabe lo que es trabajar."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 250, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 8,
        "feedback": "Le das la vuelta a la tortilla magistralmente. Tu humor desarma su crítica, el vídeo se viraliza y la gente va a tu tienda a apoyarte."
      },
      {
        "movimientos": [
          { "dinero": -200, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 0,
        "feedback": "Pierdes tiempo y dinero. La demanda no prospera porque su vídeo es 'libertad de expresión y opinión'. Te quedas frustrado."
      },
      {
        "movimientos": [
          { "dinero": -100, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -7,
        "feedback": "Caes en su trampa. Sus seguidores se organizan para hundir tu tienda en Google con cientos de reseñas falsas de 1 estrella."
      }
    ]
  },
  {
    "id": 409,
    "formato": "noticia",
    "medio": "Transporte y Logística",
    "titular": "Crisis en Correos: Huelga encubierta paraliza el reparto de paquetería.",
    "noticia": "Miles de paquetes se amontonan en los centros logísticos. Los negocios locales que envían productos a otras ciudades ven cómo sus tiempos de entrega pasan de 2 a 15 días.",
    "opciones": [
      "Contratar temporalmente una empresa de mensajería privada urgente, asumiendo tú el sobrecoste.",
      "Avisar a los clientes de que los pedidos llegarán tarde y ofrecerles cancelarlos si no quieren esperar.",
      "No decir nada, enviar por Correos igual y echarles la culpa cuando el cliente se queje de la tardanza."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -150, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 5,
        "feedback": "Pierdes dinero en cada envío, pero tus clientes flipan con que su paquete llegue a tiempo en plena crisis nacional. Fidelidad ganada."
      },
      {
        "movimientos": [
          { "dinero": -100, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 1,
        "feedback": "Eres honesto, pero muchos clientes prefieren cancelar la compra. Pierdes ventas pero mantienes tu reputación intacta."
      },
      {
        "movimientos": [],
        "reputacion": -6,
        "feedback": "Al cliente le da igual de quién sea la culpa, te compró a ti. Las quejas por mal servicio te hunden las valoraciones online."
      }
    ]
  },
  {
    "id": 410,
    "formato": "noticia",
    "medio": "Comercio Hoy",
    "titular": "El 'Black Friday' se adelanta: Las grandes superficies empiezan sus ofertas un mes antes.",
    "noticia": "El pánico a la falta de consumo hace que las multinacionales revienten los precios desde principios de noviembre. Los pequeños comercios temen no vender nada a precio normal.",
    "opciones": [
      "Adelantar tú también los descuentos a todo el stock para no quedarte atrás.",
      "Ignorar el Black Friday y lanzar una campaña de 'Compra Consciente' fomentando la calidad sobre la cantidad.",
      "Comprar productos de muy baja calidad para venderlos muy baratos y parecer que haces descuentazos."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -300, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 0,
        "feedback": "Entras en la rueda de los grandes y regalas tu margen de beneficio. Vendes mucho, pero al hacer cuentas apenas ganas dinero."
      },
      {
        "movimientos": [
          { "dinero": -50, "categoria_pnl": "Publicidad" },
          { "dinero": 150, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 6,
        "feedback": "Nadas a contracorriente con elegancia. Atraes al público harto del consumismo extremo y defiendes el valor real de tu producto."
      },
      {
        "movimientos": [
          { "dinero": 100, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -8,
        "feedback": "Es una estafa encubierta. La gente compra, pero al ver la pésima calidad, exigen devoluciones y destrozan tu imagen."
      }
    ]
  },
  {
    "id": 411,
    "formato": "noticia",
    "medio": "Info Empleo",
    "titular": "Nueva Subvención Local: 1.500€ por contratar a mayores de 50 años.",
    "noticia": "El Ayuntamiento lanza un plan de rescate para el talento senior. Cubren gran parte de la seguridad social del primer año para combatir el edadismo laboral.",
    "opciones": [
      "Aprovechar y contratar a una persona con mucha experiencia en tu sector para que te organice la tienda.",
      "Preferir seguir contratando a gente de 20 años sin experiencia porque cobran menos sueldo base.",
      "Contratar a tu padre/madre para cobrar la ayuda aunque no vaya a trabajar a la tienda."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -500, "categoria_pnl": "Personal y SS" },
          { "dinero": 1500, "categoria_pnl": "Subvenciones" }
        ],
        "reputacion": 4,
        "feedback": "El talento senior es oro puro. Cobra sueldo de convenio, pero su experiencia te ahorra errores caros y el Ayuntamiento te da la ayuda."
      },
      {
        "movimientos": [],
        "reputacion": -1,
        "feedback": "Dejas escapar capital público por prejuicios de edad. Te pierdes la oportunidad de profesionalizar más tu negocio."
      },
      {
        "movimientos": [
          { "dinero": -3000, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -9,
        "feedback": "Fraude de ley clamoroso. Inspección de trabajo descubre la contratación ficticia de familiares y te mete un multazo."
      }
    ]
  },
  {
    "id": 412,
    "formato": "noticia",
    "medio": "Tech Segura",
    "titular": "Oleada de Ransomware: Hackers secuestran los ordenadores de decenas de pymes locales.",
    "noticia": "Los ciberdelincuentes cifran todos los archivos de las empresas y exigen un rescate en Bitcoin de 1.000€ para devolver el acceso. Muchas tiendas han perdido toda su contabilidad.",
    "opciones": [
      "Pagar 80€ hoy mismo por un servicio de copia de seguridad automática en la nube (Cloud Backup).",
      "Comprar un disco duro externo y enchufarlo para copiar las cosas a mano cuando te acuerdes.",
      "Ignorarlo. Tienes un ordenador Mac y dicen que esos no tienen virus nunca."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -80, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 2,
        "feedback": "Inversión inteligente. Días después recibes un intento de ataque, pero lo ignoras porque tienes todo a salvo en la nube."
      },
      {
        "movimientos": [
          { "dinero": -40, "categoria_pnl": "Suministros" },
          { "dinero": -300, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -2,
        "feedback": "Te olvidas de hacer la copia un mes entero. Entra el virus y pierdes la facturación de las últimas cuatro semanas. Un desastre."
      },
      {
        "movimientos": [
          { "dinero": -1000, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -5,
        "feedback": "El mito cae. El ransomware te bloquea todo el sistema. Acabas pagando el rescate a los hackers por desesperación."
      }
    ]
  },
  {
    "id": 413,
    "formato": "noticia",
    "medio": "Tendencias Urbanas",
    "titular": "El auge de las 'Pop-Up Stores': Las marcas nativas digitales saltan a la calle.",
    "noticia": "Marcas famosas que solo vendían por internet están alquilando locales vacíos durante fines de semana sueltos para crear eventos de venta física explosivos.",
    "opciones": [
      "Contactar a una marca digital complementaria a la tuya y cederles un rincón de tu tienda un sábado.",
      "Quejarte en la asociación de vecinos de que estos alquileres fugaces hunden el comercio tradicional.",
      "Intentar tú montar una pop-up en otra ciudad alquilando un local, asumiendo un riesgo enorme de capital."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 250, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 7,
        "feedback": "Sinergia brutal. Les cobras un pequeño alquiler, su legión de fans hace cola en tu puerta y de paso te compran a ti."
      },
      {
        "movimientos": [],
        "reputacion": -2,
        "feedback": "Llorar por el éxito ajeno no llena tu caja. Pierdes la oportunidad de innovar y pareces envidioso."
      },
      {
        "movimientos": [
          { "dinero": -600, "categoria_pnl": "Alquiler" }
        ],
        "reputacion": 0,
        "feedback": "Sobrepasas tus límites operativos. Alquilas fuera, nadie te conoce allí y los gastos de transporte y dietas te arruinan el mes."
      }
    ]
  },
  {
    "id": 414,
    "formato": "noticia",
    "medio": "El Tiempo Local",
    "titular": "Alerta Naranja: Inundaciones previstas para este sábado en toda la provincia.",
    "noticia": "Una DANA (Gota Fría) extremadamente severa se acerca. Se espera que las calles comerciales queden anegadas. Protección Civil pide asegurar sótanos y plantas bajas.",
    "opciones": [
      "Gastar 100€ de urgencia en tablones y sacos de arena para sellar la entrada y elevar tu mercancía del suelo.",
      "Cerrar la tienda, pero dejar todo como está confiando en que tu calle tiene buenas alcantarillas.",
      "Mantener abierto a toda costa. Si llueve mucho la gente entrará a refugiarse y comprará."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -100, "categoria_pnl": "Otros gastos" }
        ],
        "reputacion": 2,
        "feedback": "Te salvas por los pelos. El agua llega a la puerta, pero tu barrera resiste. Tu stock de miles de euros queda intacto."
      },
      {
        "movimientos": [
          { "dinero": -1200, "categoria_pnl": "Compras/Materiales" }
        ],
        "reputacion": 0,
        "feedback": "El alcantarillado colapsa. Entra un palmo de barro en la tienda y destroza todo el inventario que estaba en el suelo."
      },
      {
        "movimientos": [
          { "dinero": -200, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -6,
        "feedback": "Nadie sale de casa. Pones en riesgo tu vida y la de tus empleados por avaricia pura. Quedas atrapado en la tienda."
      }
    ]
  },
  {
    "id": 415,
    "formato": "noticia",
    "medio": "Sucesos de la Ciudad",
    "titular": "Banda organizada de 'Mecheras' roba miles de euros en la zona comercial.",
    "noticia": "Grupos coordinados entran en masa a los locales pequeños, distraen a los dependientes y vacían estanterías enteras ocultando la mercancía en bolsas forradas de aluminio.",
    "opciones": [
      "Instalar un sistema de arcos antihurto y etiquetas magnéticas en la puerta (300€).",
      "Implementar la regla interna de atender siempre a los clientes de uno en uno, pidiendo a los demás que esperen.",
      "Dejar de exponer mercancía y vender solo por catálogo detrás del mostrador."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -300, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 2,
        "feedback": "Inversión en seguridad pasiva. Intentan robarte, el arco pita, salen corriendo y salvas mucha mercancía."
      },
      {
        "movimientos": [
          { "dinero": -150, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -3,
        "feedback": "La lentitud en la atención hace que los clientes normales se desesperen y se vayan sin comprar."
      },
      {
        "movimientos": [
          { "dinero": -400, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -6,
        "feedback": "El comercio visual muere. Si la gente no puede tocar y ver los productos, huyen. Tus ventas caen en picado."
      }
    ]
  },
  {
    "id": 416,
    "formato": "noticia",
    "medio": "Gaceta Municipal",
    "titular": "Ordenanza de Paisaje Urbano: Prohibidos los carteles luminosos intermitentes.",
    "noticia": "El Ayuntamiento declara la guerra a la contaminación lumínica. Todos los comercios tienen 72 horas para retirar las famosas 'cruces' LED intermitentes o enfrentarse a multas inmediatas.",
    "opciones": [
      "Desconectar tu cartel LED y pagar a un rotulista (150€) para hacer uno fijo pintado a mano, elegante.",
      "Apagar el cartel pero dejarlo colgado por si algún día cambian de opinión y vuelven a dejar encenderlo.",
      "Seguir usándolo de noche alegando que no te habías enterado de la nueva normativa."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -150, "categoria_pnl": "Publicidad" }
        ],
        "reputacion": 6,
        "feedback": "El nuevo rótulo le da un toque 'boutique' y premium a tu local. Atraes a un público de mayor poder adquisitivo."
      },
      {
        "movimientos": [
          { "dinero": -50, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -2,
        "feedback": "Tener un aparato gigante apagado y roto colgado en la fachada da una sensación de dejadez brutal a tu negocio."
      },
      {
        "movimientos": [
          { "dinero": -500, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -4,
        "feedback": "La ignorancia de la ley no exime de su cumplimiento. La patrulla de barrio te multa y te obligan a desinstalarlo en el acto."
      }
    ]
  },
  {
    "id": 417,
    "formato": "noticia",
    "medio": "Sanidad al Día",
    "titular": "Macro-operación de Sanidad: Inspecciones sorpresa a los purificadores de aire.",
    "noticia": "Tras la pandemia, sigue siendo obligatorio en ciertos locales mantener medidores de CO2 operativos y filtros limpios. Los inspectores andan revisando cuadernos de mantenimiento.",
    "opciones": [
      "Comprar filtros nuevos de alta calidad hoy mismo (60€) y rellenar el cuaderno de registro oficial.",
      "Limpiar los filtros viejos pasándoles un plumero y falsificar las fechas en el cuaderno de registro.",
      "Esconder el purificador en el almacén y decir que tu local tiene 'ventilación natural'."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -60, "categoria_pnl": "Suministros" }
        ],
        "reputacion": 3,
        "feedback": "El inspector entra, ve todo impecable, te da la enhorabuena y pasas la auditoría en cinco minutos."
      },
      {
        "movimientos": [
          { "dinero": -800, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -5,
        "feedback": "Falsedad documental. El medidor del inspector pita a los diez segundos. Te cae una multa administrativa severa."
      },
      {
        "movimientos": [
          { "dinero": -600, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -3,
        "feedback": "Tu local por metros cuadrados no califica para 'ventilación natural'. Te sancionan por esconder equipos obligatorios."
      }
    ]
  },
  {
    "id": 418,
    "formato": "noticia",
    "medio": "El Observador Local",
    "titular": "Gentrificación extrema: Los vecinos tradicionales abandonan el barrio por los precios.",
    "noticia": "La subida de los alquileres expulsa a las familias de siempre. El barrio se llena de apartamentos turísticos y un nuevo perfil de residente flotante.",
    "opciones": [
      "Cambiar rápidamente tu mix de productos hacia souvenirs, básicos de viaje y formatos pequeños.",
      "Mantenerte fiel a tu producto tradicional para apoyar a la resistencia vecinal que aún queda.",
      "Bajar tus precios para intentar que los vecinos de toda la vida no se vayan por tu culpa."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 200, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -2,
        "feedback": "Eres un mercenario de los negocios. Pierdes alma vecinal, pero salvas tu empresa adaptándote a la cruda realidad demográfica."
      },
      {
        "movimientos": [
          { "dinero": -250, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Ganas aplausos de la resistencia vecinal, pero los aplausos no pagan las facturas. Tu base de clientes disminuye drásticamente."
      },
      {
        "movimientos": [
          { "dinero": -400, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 2,
        "feedback": "La culpa de que se vayan es de las hipotecas, no de tus lechugas. Bajar precios solo te arruina a ti sin frenar la gentrificación."
      }
    ]
  },
  {
    "id": 419,
    "formato": "noticia",
    "medio": "Suministros Globales",
    "titular": "Escasez de papel térmico: Los rollos de ticket de caja se agotan en Europa.",
    "noticia": "Por un problema en las fábricas de celulosa, no hay rollos para las impresoras de recibos. El precio de las existencias actuales se dispara un 400%.",
    "opciones": [
      "Pagar el precio desorbitado (120€ por una caja) porque es obligatorio dar ticket impreso por ley.",
      "Pasar a un sistema de 'Ticket Digital' enviando los recibos por email o SMS a los clientes gratuitamente.",
      "Dejar de dar tickets por completo y si alguien te lo pide decirle que la máquina está rota."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -120, "categoria_pnl": "Suministros" }
        ],
        "reputacion": 0,
        "feedback": "Cumples la ley, pero tu inmovilismo tecnológico te hace pagar una fortuna por algo que deberías haber digitalizado ya."
      },
      {
        "movimientos": [
          { "dinero": -10, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 6,
        "feedback": "Digitalización forzosa. Solucionas el problema, ahorras papel para siempre y encima captas emails para tu base de datos."
      },
      {
        "movimientos": [
          { "dinero": -1500, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -5,
        "feedback": "No entregar comprobante de compra es una infracción grave contra los derechos del consumidor. Te denuncian y te multan."
      }
    ]
  },
  {
    "id": 420,
    "formato": "noticia",
    "medio": "Debate Comercial",
    "titular": "Campaña vecinal para eliminar el 'Cierre por Siesta' de los comercios.",
    "noticia": "Miles de ciudadanos firman para pedir que las tiendas del centro no cierren de 14:00 a 17:00, alegando que es su único rato libre para comprar tras el trabajo.",
    "opciones": [
      "Cambiar a jornada continua (ininterrumpida) organizando turnos rotativos con tu equipo.",
      "Negarte y defender el derecho al descanso. El barrio es caluroso y a esa hora no sale nadie.",
      "Abrir a mediodía, pero solo para clientes que paguen una 'suscripción VIP' mensual."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 150, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 6,
        "feedback": "Te adaptas a la vida moderna. Captas a todos los oficinistas y padres que compran a mediodía mientras tu competencia duerme."
      },
      {
        "movimientos": [],
        "reputacion": -2,
        "feedback": "Proteges la tradición, pero pierdes oportunidades de venta. Muchos clientes enfadados empiezan a ir a los centros comerciales."
      },
      {
        "movimientos": [],
        "reputacion": -8,
        "feedback": "Una idea elitista y ofensiva que genera rechazo inmediato. La gente hace capturas de tu anuncio y te ridiculiza en redes."
      }
    ]
  },
  {
    "id": 421,
    "formato": "noticia",
    "medio": "Red Eléctrica Info",
    "titular": "Cortes de luz rotativos programados ante el riesgo de apagón general.",
    "noticia": "El colapso de las centrales obliga al Gobierno a programar cortes de 2 horas diarias por distritos. A tu calle le toca el apagón todos los días de 18:00 a 20:00 (hora punta).",
    "opciones": [
      "Invertir en un Sistema de Alimentación Ininterrumpida (SAI) potente (200€) para luces y TPV.",
      "Hacer promoción de 'Tardes Románticas', llenando la tienda de velas y cobrando en efectivo.",
      "Cerrar la tienda a las 18:00 todos los días asumiendo las pérdidas, sin luz no se trabaja."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -200, "categoria_pnl": "Suministros" }
        ],
        "reputacion": 2,
        "feedback": "Solución técnica cara pero efectiva. Vendes normal mientras tu calle entera está a oscuras."
      },
      {
        "movimientos": [
          { "dinero": -15, "categoria_pnl": "Suministros" },
          { "dinero": 95, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 8,
        "feedback": "Genialidad absoluta. Aprovechas el apagón para crear una experiencia única que la gente sube a Instagram. Vendes casi todo tu stock."
      },
      {
        "movimientos": [
          { "dinero": -250, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -1,
        "feedback": "Tiras la toalla en la mejor hora del día. Pierdes muchísimo dinero en facturación a lo largo de la semana."
      }
    ]
  },
  {
    "id": 422,
    "formato": "noticia",
    "medio": "Redes Vivas",
    "titular": "Un gato callejero adopta la puerta de un negocio local y se hace viral.",
    "noticia": "Un fotógrafo publica un hilo en Twitter sobre 'Bigotes', un simpático gato que pasa las mañanas durmiendo en tu escaparate. El tuit llega a 2 millones de personas.",
    "opciones": [
      "Adoptar al gato oficialmente como mascota de la tienda, ponerle una cama bonita y hacerle merch.",
      "Echar al gato con una escoba. Te espanta a los clientes con alergia y ensucia el cristal.",
      "Llamar a la perrera para que se lo lleven, no quieres problemas de sanidad en la puerta."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -30, "categoria_pnl": "Suministros" },
          { "dinero": 280, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 10,
        "feedback": "Capitalizas la viralidad con buen corazón. Decenas de personas vienen a la tienda solo para ver a 'Bigotes' y acaban comprando."
      },
      {
        "movimientos": [],
        "reputacion": -9,
        "feedback": "Alguien te graba echando al famoso gato a escobazos. Te conviertes en el villano de internet y sufres el escarnio público."
      },
      {
        "movimientos": [],
        "reputacion": -5,
        "feedback": "Los animalistas que viralizaron la foto se enteran de que llamaste a la perrera. Llenan tus reseñas de comentarios de odio."
      }
    ]
  },
  {
    "id": 423,
    "formato": "noticia",
    "medio": "Business Insider Local",
    "titular": "Espionaje Comercial: Se filtra el plan de expansión de tu mayor competidor.",
    "noticia": "Un ex-empleado descontento de la competencia publica un documento con los productos secretos y estrategias que van a lanzar en Navidad. Todos en el sector lo están leyendo.",
    "opciones": [
      "Estudiar el documento a fondo para copiar sus mejores ideas antes de que ellos las lancen.",
      "No leerlo por ética empresarial y centrarte en tu propio negocio sin mirar al vecino.",
      "Mandarles un correo anónimo extorsionándoles para no darle los documentos a la prensa."
    ],
    "correcta": 1,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -150, "categoria_pnl": "Servicios" }
        ],
        "reputacion": -4,
        "feedback": "Copiar a destiempo te hace parecer un imitador torpe. El competidor sospecha y te envía un burofax amenazando con demandas por robo intelectual."
      },
      {
        "movimientos": [],
        "reputacion": 5,
        "feedback": "Integridad pura. El que se obsesiona con la competencia, pierde el foco en su propio cliente. Tú sigues a lo tuyo y triunfas de forma auténtica."
      },
      {
        "movimientos": [
          { "dinero": -1000, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -10,
        "feedback": "Cometes un delito de chantaje. La competencia contacta a la brigada de delitos telemáticos, rastrean tu IP y te detienen."
      }
    ]
  },
  {
    "id": 424,
    "formato": "noticia",
    "medio": "Asociación PYME",
    "titular": "El 'Síndrome del Empleado Quemado' dispara las bajas médicas en el comercio.",
    "noticia": "Un informe alerta de la pésima salud mental de los trabajadores del sector por la presión de ventas y clientes difíciles. Piden a los dueños tomar medidas de choque urgentes.",
    "opciones": [
      "Invertir 100€ en organizar una cena o actividad divertida de teambuilding fuera de la tienda para liberar estrés.",
      "Decirle a tu equipo: 'Si alguien está estresado, ahí tiene la puerta que hay mucha gente buscando trabajo'.",
      "No hacer nada, es su obligación profesional aguantar el estrés a cambio de su sueldo."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -100, "categoria_pnl": "Personal y SS" },
          { "dinero": 150, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "El equipo vuelve el lunes súper unido y relajado. Ganas empatía, su productividad sube y la facturación aumenta gracias al buen ambiente."
      },
      {
        "movimientos": [
          { "dinero": -500, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -8,
        "feedback": "Liderazgo tóxico de manual. Tu mejor empleado renuncia en el acto dejándote tirado en plena campaña, hundiendo tus ventas."
      },
      {
        "movimientos": [
          { "dinero": -200, "categoria_pnl": "Personal y SS" }
        ],
        "reputacion": -2,
        "feedback": "Ignoras el fuego hasta que arde. Un par de empleados se dan de baja por ansiedad y tienes que asumir los costes de reemplazo y paradas."
      }
    ]
  },
  {
    "id": 425,
    "formato": "noticia",
    "medio": "Diario Económico",
    "titular": "Sanidad aprueba una ley para endurecer el etiquetado de alérgenos en comercios.",
    "noticia": "Todos los establecimientos deberán detallar en letra clara e visible la presencia de trazas de frutos secos, gluten y lactosa en sus productos expuestos. Se anuncian inspecciones severas a partir del próximo mes.",
    "opciones": [
      "Contratar a una empresa de cartelería técnica (120€) para renovar y adaptar todas las etiquetas del local a la normativa.",
      "Imprimir tú mismo unas notas sencillas a mano y pegarlas sobre los mostradores para salir del paso.",
      "Ignorar la medida hasta que venga un inspector a avisarte formalmente."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -120, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 4,
        "feedback": "Inversión impecable. Cumples la normativa al milímetro y los clientes con intolerancias aplauden tu profesionalidad."
      },
      {
        "movimientos": [
          { "dinero": -10, "categoria_pnl": "Suministros" }
        ],
        "reputacion": -1,
        "feedback": "Cumples de forma cutre. Evitas la multa, pero la imagen de la tienda se ve poco cuidada y casera."
      },
      {
        "movimientos": [
          { "dinero": -600, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -5,
        "feedback": "Sanidad realiza una inspección sorpresa. Te aplican una multa grave por no haber adaptado el etiquetado a tiempo."
      }
    ]
  },
  {
    "id": 426,
    "formato": "noticia",
    "medio": "Canal Comercio",
    "titular": "Se dispara el coste del cartón y embalaje un 30% por el cierre de varias papeleras.",
    "noticia": "La escasez de materia prima obliga a los proveedores a encarecer los precios de las cajas de envío y envoltorios. Los pequeños comercios buscan alternativas desesperadamente.",
    "opciones": [
      "Pedir a tus clientes que traigan sus propias bolsas y reutilizar cajas usadas para los envíos.",
      "Asumir la subida pagando más dinero a tu proveedor habitual sin cambiar tus procesos.",
      "Empezar a empaquetar los productos en bolsas de basura baratas para ahorrar costes."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 5,
        "feedback": "Estrategia sostenible. Ahorras el sobrecoste y los clientes valoran tu iniciativa ecológica de reutilización."
      },
      {
        "movimientos": [
          { "dinero": -150, "categoria_pnl": "Suministros" }
        ],
        "reputacion": 0,
        "feedback": "Absorbes el impacto financiero de la crisis del cartón sin aportar soluciones creativas, reduciendo tu margen."
      },
      {
        "movimientos": [
          { "dinero": -20, "categoria_pnl": "Suministros" },
          { "dinero": -200, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -8,
        "feedback": "Imagen penosa. Los clientes sienten que entregas los pedidos sin cuidado y las ventas caen drásticamente."
      }
    ]
  },
  {
    "id": 427,
    "formato": "noticia",
    "medio": "Actualidad Pyme",
    "titular": "El Gobierno lanza incentivos fiscales para comercios que instalen luces LED eficientes.",
    "noticia": "Se subvencionará hasta el 50% de la inversión a los negocios que renueven sus sistemas de iluminación por alternativas de bajo consumo antes de que acabe el trimestre.",
    "opciones": [
      "Invertir 300€ en renovar toda la iluminación del local y solicitar la ayuda oficial inmediatamente.",
      "No cambiar nada; la iluminación actual funciona bien y no quieres gastar liquidez ahora.",
      "Cambiar solo un par de bombillas del escaparate e intentar pedir la subvención completa falsificando la factura."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -300, "categoria_pnl": "Suministros" },
          { "dinero": 150, "categoria_pnl": "Subvenciones" },
          { "dinero": 40, "categoria_pnl": "Suministros" }
        ],
        "reputacion": 3,
        "feedback": "Aprovechas la ayuda pública, modernizas la luz de tu local y consigues reducir tu factura eléctrica mensual."
      },
      {
        "movimientos": [],
        "reputacion": 0,
        "feedback": "Dejas pasar una oportunidad de ahorro estructural y sigues pagando más de la cuenta en electricidad."
      },
      {
        "movimientos": [
          { "dinero": -1000, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -6,
        "feedback": "La administración audita la solicitud, detecta la falsificación y te sanciona severamente por intento de fraude."
      }
    ]
  },
  {
    "id": 428,
    "formato": "noticia",
    "medio": "Sucesos Locales",
    "titular": "Alarma en la zona comercial por una ola de robos nocturnos con alunizaje.",
    "noticia": "Una banda de delincuentes está utilizando vehículos para estrellarlos contra los escaparates de las tiendas a altas horas de la madrugada y saquear el interior en segundos.",
    "opciones": [
      "Instalar pivotes de seguridad homologados y un cierre reforzado en la puerta (400€).",
      "Confiar en el seguro de comercio habitual y no gastar nada en protecciones físicas.",
      "Dejar las luces interiores encendidas toda la noche para disuadir a los ladrones."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -400, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 2,
        "feedback": "Inversión preventiva perfecta. Intentan asaltar tu calle días después, pero tu persiana reforzada resiste el impacto."
      },
      {
        "movimientos": [
          { "dinero": -1500, "categoria_pnl": "Otros Gastos" },
          { "dinero": -500, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -3,
        "feedback": "Te asaltan el local. El seguro tarda semanas en pagar, pierdes inventario y debes cerrar varios días por reparaciones."
      },
      {
        "movimientos": [
          { "dinero": -80, "categoria_pnl": "Suministros" }
        ],
        "reputacion": -1,
        "feedback": "Las luces no disuaden a los alunizadores. Además de aumentar tu factura de la luz, el riesgo de robo sigue intacto."
      }
    ]
  },
  {
    "id": 429,
    "formato": "noticia",
    "medio": "Gaceta de Innovación",
    "titular": "Las pantallas digitales interactivas en escaparates aumentan las ventas un 25%.",
    "noticia": "Según un estudio sectorial, los comercios que sustituyen los carteles impresos de papel por pantallas con catálogo dinámico logran retener a más transeúntes y multiplicar sus pedidos.",
    "opciones": [
      "Alquilar una pantalla profesional para el escaparate por 100€ al mes para promocionar tus productos estrella.",
      "Seguir con tus carteles de papel hechos e impresos en la tienda como siempre.",
      "Poner un televisor viejo de tu casa en la ventana conectado a un USB con fotos de mala calidad."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -100, "categoria_pnl": "Publicidad" },
          { "dinero": 300, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 4,
        "feedback": "El escaparate dinámico atrae las miradas de los paseantes, dinamiza la entrada a la tienda y dispara tus ventas."
      },
      {
        "movimientos": [],
        "reputacion": 0,
        "feedback": "Te mantienes en tu zona de confort sin innovar, mientras la tienda vecina capta la atención de la calle."
      },
      {
        "movimientos": [
          { "dinero": -50, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -3,
        "feedback": "El televisor casero se ve reflejado y cutre con la luz del día, transmitiendo una imagen poco profesional del negocio."
      }
    ]
  },
  {
    "id": 430,
    "formato": "noticia",
    "medio": "Vocero Comunitario",
    "titular": "El Ayuntamiento convoca la 'Semana de la Movilidad Sostenible'.",
    "noticia": "Se invita a las tiendas locales a colaborar ofreciendo ventajas a los clientes que acudan a comprar en bicicleta o transporte público durante los próximos siete días.",
    "opciones": [
      "Lanzar un 10% de descuento a quienes muestren su billete de bus o casco de bici e instalar un aparcabicis en la puerta (50€).",
      "Aceptar colaborar de palabra pero no aplicar ningún descuento ni acción real en la tienda.",
      "Criticar la iniciativa en redes afirmando que esas medidas entorpecen la llegada de clientes en coche."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -50, "categoria_pnl": "Publicidad" },
          { "dinero": 150, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 6,
        "feedback": "Gran visibilidad. Te ganas la simpatía del colectivo ciclista y el flujo extra de clientes compensa con creces el descuento."
      },
      {
        "movimientos": [],
        "reputacion": -2,
        "feedback": "Los clientes que acuden esperando la promoción se sienten engañados al ver que no aplicas ventajas reales."
      },
      {
        "movimientos": [],
        "reputacion": -5,
        "feedback": "Quedas como un comercio anticuado y opuesto a la sostenibilidad, ganándote críticas en los foros del barrio."
      }
    ]
  },
  {
    "id": 431,
    "formato": "noticia",
    "medio": "Empresa & Futuro",
    "titular": "Aprobada la ley de reducción de plazos de pago a proveedores para pymes.",
    "noticia": "La nueva normativa sancionará a las empresas que tarden más de 30 días en liquidar las facturas pendientes a sus proveedores habituales, buscando evitar problemas de liquidez en cadena.",
    "opciones": [
      "Revisar tus cuentas y abonar 200€ pendientes de facturas pasadas para estar dentro del plazo legal.",
      "Ignorar el plazo y esperar a que el proveedor te envíe un requerimiento formal para pagar.",
      "Pedir al proveedor que te rehaga las facturas con fecha falsa de este mes para ganar tiempo."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -200, "categoria_pnl": "Compras/Materiales" }
        ],
        "reputacion": 3,
        "feedback": "Cumples la ley, mantienes impecable tu historial de pagos y tus proveedores te priorizan en los suministros."
      },
      {
        "movimientos": [
          { "dinero": -50, "categoria_pnl": "Costos Financieros" }
        ],
        "reputacion": -2,
        "feedback": "El proveedor se molesta por el retraso y te aplica intereses de demora fijados por la nueva ley."
      },
      {
        "movimientos": [
          { "dinero": -400, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -6,
        "feedback": "Inspección detecta las facturas alteradas y te impone una sanción por irregularidad contable."
      }
    ]
  },
  {
    "id": 432,
    "formato": "noticia",
    "medio": "Consumo Digital",
    "titular": "Campaña de concienciación contra las reseñas falsas compradas en internet.",
    "noticia": "Las plataformas de opiniones han comenzado a penalizar de oficio a los comercios que utilicen servicios de compra de valoraciones positivas con el cierre permanente de sus perfiles públicos.",
    "opciones": [
      "Lanzar un sorteo transparente de un lote de productos entre los clientes reales que dejen una opinión sincera.",
      "Contratar un paquete económico de reseñas en una web externa antes de que endurezcan más los controles.",
      "Borrar todos tus perfiles en redes y mapas para no exponerte a valoraciones de ningún tipo."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -30, "categoria_pnl": "Publicidad" }
        ],
        "reputacion": 5,
        "feedback": "Estrategia ética. Consigues opiniones 100% reales de clientes satisfechos que elevan tu puntuación orgánica."
      },
      {
        "movimientos": [
          { "dinero": -60, "categoria_pnl": "Publicidad" }
        ],
        "reputacion": -8,
        "feedback": "El algoritmo detecta la compra de perfiles falsos, bloquea tu ficha en Google y pierdes visibilidad total."
      },
      {
        "movimientos": [
          { "dinero": -150, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -3,
        "feedback": "Desaparecer de internet te hace invisible para los nuevos vecinos, reduciendo el volumen de ventas de la tienda."
      }
    ]
  },
  {
    "id": 433,
    "formato": "noticia",
    "medio": "Suministros Hoy",
    "titular": "Fuerte subida del precio del café, azúcar y consumibles por problemas de cosecha.",
    "noticia": "Los distribuidores anuncian incrementos de hasta el 20% en las materias primas básicas a partir de la próxima semana debido a condiciones meteorológicas adversas en los países de origen.",
    "opciones": [
      "Comprar hoy un stock de reserva de consumibles al precio antiguo para cubrir los próximos tres meses.",
      "Aceptar la subida sin modificar tus compras y reducir tu margen de beneficio por producto.",
      "Sustituir los consumibles habituales por otros de calidad muy inferior sin informar al cliente."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -250, "categoria_pnl": "Compras/Materiales" }
        ],
        "reputacion": 2,
        "feedback": "Anticipación financiera brillante. Aseguras tu stock a coste antiguo y proteges tus márgenes durante meses."
      },
      {
        "movimientos": [
          { "dinero": -100, "categoria_pnl": "Compras/Materiales" }
        ],
        "reputacion": 0,
        "feedback": "No reaccionas a tiempo y tus costes operativos aumentan semana a semana reduciendo tu beneficio neto."
      },
      {
        "movimientos": [
          { "dinero": -150, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -7,
        "feedback": "Los clientes habituales notan el bajón de calidad inmediatamente y empiezan a marcharse a la competencia."
      }
    ]
  },
  {
    "id": 434,
    "formato": "noticia",
    "medio": "Diario de la Salud",
    "titular": "Sanidad lanza una inspección masiva de los sistemas de climatización comercial.",
    "noticia": "Se comprobará el estado de limpieza de conductos, rejillas y certificados de desinfección en establecimientos abiertos al público para garantizar la calidad del aire.",
    "opciones": [
      "Contratar una revisión preventiva de conductos y certificado oficial con una empresa técnica (90€).",
      "Limpiar las rejillas exteriores con un paño y esperar que no pidan el certificado oficial.",
      "Apagar el sistema de aire durante la inspección y decir que no lo utilizáis."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -90, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 2,
        "feedback": "Pasas la inspección sin contratiempos. El certificado oficial expedido te garantiza tranquilidad legal."
      },
      {
        "movimientos": [
          { "dinero": -300, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -3,
        "feedback": "El inspector exige la documentación técnica obligatoria. Al no tenerla al día, te imponen una sanción."
      },
      {
        "movimientos": [
          { "dinero": -500, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -5,
        "feedback": "Tratar de eludir la inspección genera sospechas. Revisan la instalación a fondo y te multan por incumplimiento."
      }
    ]
  },
  {
    "id": 435,
    "formato": "noticia",
    "medio": "Finanzas & Pymes",
    "titular": "Las comisiones por cobro con tarjeta aumentarán un 0,5% el próximo mes.",
    "noticia": "Las principales entidades bancarias reestructuran sus tarifas para pequeños comercios. Se aconseja revisar los contratos de TPV o buscar alternativas con mejores condiciones en el mercado.",
    "opciones": [
      "Negociar con tu banco un cambio de modalidad a tarifa plana de TPV para congelar tus gastos de cobro.",
      "Empezar a exigir un gasto mínimo de 10€ para permitir el pago con tarjeta en la tienda.",
      "Asumir el aumento de comisiones sin realizar ninguna gestión ni cambio."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 30, "categoria_pnl": "Costos Financieros" }
        ],
        "reputacion": 1,
        "feedback": "Buena gestión bancaria. Consigues optimizar tus costes financieros y evitar la subida de comisiones."
      },
      {
        "movimientos": [
          { "dinero": -100, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -4,
        "feedback": "Imponer un importe mínimo molesta a los clientes que realizan compras pequeñas, perdiendo ventas por impulso."
      },
      {
        "movimientos": [
          { "dinero": -60, "categoria_pnl": "Costos Financieros" }
        ],
        "reputacion": 0,
        "feedback": "Tu pasividad hace que la factura bancaria mensual aumente de forma silenciosa pero constante."
      }
    ]
  },
  {
    "id": 436,
    "formato": "noticia",
    "medio": "Barrio & Vecinos",
    "titular": "Un socavón en la vía principal obligará a cortar el tráfico durante dos semanas.",
    "noticia": "Las obras de reparación de las tuberías generales interrumpirán el paso de vehículos frente a los comercios de la zona. Las aceras seguirán abiertas pero el tránsito peatonal será más incómodo.",
    "opciones": [
      "Ofrecer envíos a domicilio gratuitos en el barrio durante las obras para salvar las ventas de los vecinos.",
      "Cerrar la tienda durante las dos semanas de obras para no asumir costes de apertura en días flojos.",
      "Quejarte diariamente a los obreros de la calle exigiendo que trabajen más rápido."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -40, "categoria_pnl": "Servicios" },
          { "dinero": 200, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Reacción Comercial excelente. El servicio a domicilio salva la facturación del mes y el barrio agradece el esfuerzo."
      },
      {
        "movimientos": [
          { "dinero": -400, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -2,
        "feedback": "Cerrar por completo frena todos tus ingresos mientras tus gastos fijos (alquiler, suministros) siguen corriendo."
      },
      {
        "movimientos": [],
        "reputacion": -3,
        "feedback": "Tus enfrentamientos con los trabajadores generan tensión en la puerta del local y dan mala imagen al público."
      }
    ]
  },
  {
    "id": 437,
    "formato": "noticia",
    "medio": "Tecno Retail",
    "titular": "Lanzan un software público gratuito para gestionar el inventario del comercio local.",
    "noticia": "La consejería de Comercio pone a disposición de las Pymes una herramienta digital en la nube sin coste para evitar descuadres de stock y controlar caducidades.",
    "opciones": [
      "Invertir un par de tardes en registrar tus productos en el nuevo sistema gratuito para mejorar el control.",
      "Seguir llevando el control de stock de forma visual en la tienda como has hecho siempre.",
      "Contratar a un informático privado caro (300€) para que cree un programa a medida sin usar el público."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 3,
        "feedback": "Optimizas tu gestión operativa sin gastar un euro. Acabas con los descuadres por productos extraviados."
      },
      {
        "movimientos": [
          { "dinero": -80, "categoria_pnl": "Compras/Materiales" }
        ],
        "reputacion": 0,
        "feedback": "El control manual falla. Sufres descuadres de caja e inventario por no sistematizar tu almacén."
      },
      {
        "movimientos": [
          { "dinero": -300, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 0,
        "feedback": "Gastas liquidez de forma innecesaria cuando existía una alternativa oficial gratuita perfectamente funcional."
      }
    ]
  },
  {
    "id": 438,
    "formato": "noticia",
    "medio": "Gaceta de Empleo",
    "titular": "Se incrementan los controles sobre la formación obligatoria en PRL.",
    "noticia": "Trabajo comprobará que todos los empleados de comercios cara al público hayan realizado el curso anual de Prevención de Riesgos Laborales correspondiente a su puesto.",
    "opciones": [
      "Inscribir a tus empleados en el curso oficial bonificado a través de la Seguridad Social sin coste neto.",
      "Comprar diplomas falsos en internet por 20€ para enseñarlos si llega una inspección.",
      "Ignorar el aviso confiando en que tu local no tiene maquinaria peligrosa."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -100, "categoria_pnl": "Personal y SS" },
          { "dinero": 100, "categoria_pnl": "Subvenciones" }
        ],
        "reputacion": 3,
        "feedback": "Gestión impecable. Formas a tu equipo sin coste neto gracias a las bonificaciones y cumples la ley."
      },
      {
        "movimientos": [
          { "dinero": -20, "categoria_pnl": "Otros Gastos" },
          { "dinero": -1200, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -7,
        "feedback": "Trabajo detecta la falsificación de los títulos y te impone una sanción grave por fraude documental."
      },
      {
        "movimientos": [
          { "dinero": -600, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -4,
        "feedback": "Una inspección te requiere la documentación. Al no tener los cursos al día, te sancionan por omisión de PRL."
      }
    ]
  },
  {
    "id": 439,
    "formato": "noticia",
    "medio": "Mercado & Consumo",
    "titular": "Tendencia en alza: Los clientes prefieren comercios con packaging compostable.",
    "noticia": "Los hábitos de compra muestran que el 60% de los consumidores eligen tiendas que no utilicen plástico en sus envoltorios de regalo o bolsas, valorando el compromiso ambiental.",
    "opciones": [
      "Sustituir tus envoltorios por opciones de papel reciclado y cinta de tela ecológica (60€).",
      "Seguir entregando bolsas de plástico convencionales de saldo porque son más baratas.",
      "Cobrar un suplemento de 1€ a los clientes que pidan envoltorio de regalo ecológico."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -60, "categoria_pnl": "Suministros" }
        ],
        "reputacion": 5,
        "feedback": "Excelente acogida. La presentación sostenible de los productos atrae a nuevos clientes concienciados."
      },
      {
        "movimientos": [],
        "reputacion": -3,
        "feedback": "Tu imagen de marca se percibe anticuada frente a otros comercios del barrio que sí se han adaptado."
      },
      {
        "movimientos": [
          { "dinero": -40, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -2,
        "feedback": "Cobrar un precio abusivo por el embalaje enfada a los compradores en el momento del pago."
      }
    ]
  },
  {
    "id": 440,
    "formato": "noticia",
    "medio": "Semanario Local",
    "titular": "Se organiza el primer 'Mercadillo de Comercio de Proximidad' en la plaza central.",
    "noticia": "La asociación de comerciantes habilitará puestos temporales para que las tiendas del barrio expongan sus productos durante el fin de semana a miles de visitantes.",
    "opciones": [
      "Reservar un puesto por 80€ y llevar tu stock más atractivo con un par de dependientes.",
      "Decidir no acudir para no desatender tu establecimiento habitual durante el fin de semana.",
      "Montar una mesa pirata en la calle sin pagar la tasa de inscripción de la asociación."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -80, "categoria_pnl": "Publicidad" },
          { "dinero": 400, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 6,
        "feedback": "Éxito de ventas y captación. Das a conocer tu negocio a cientos de vecinos que no conocían tu local."
      },
      {
        "movimientos": [],
        "reputacion": 0,
        "feedback": "Ahorras el alquiler de la caseta, pero pierdes el evento de dinamización comercial más importante del año."
      },
      {
        "movimientos": [
          { "dinero": -150, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -5,
        "feedback": "La organización y la policía local te obligan a retirar la mesa no autorizada y te aplican una sanción."
      }
    ]
  },
  {
    "id": 441,
    "formato": "noticia",
    "medio": "Diario Tributario",
    "titular": "Hacienda intensifica las verificaciones del software de facturación de las Pymes.",
    "noticia": "Se comprobará que todos los programas de caja registradora impidan la alteración de registros de ventas ya emitidos, sancionando el uso de sistemas no homologados.",
    "opciones": [
      "Contactar a tu proveedor de TPV para confirmar que el software cumple el reglamento y está certificado.",
      "Seguir usando un programa muy antiguo sin actualizar porque nunca te ha dado problemas.",
      "Empezar a borrar facturas a mano a final de día para pagar menos impuestos de caja."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 2,
        "feedback": "Verificación preventiva correcta. Compruebas que tu sistema cumple la ley y te aseguras de trabajar sin riesgos."
      },
      {
        "movimientos": [
          { "dinero": -500, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -3,
        "feedback": "Una auditoría fiscal detecta que tu software carece del módulo de trazabilidad obligatorio y te multa."
      },
      {
        "movimientos": [
          { "dinero": -2000, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -8,
        "feedback": "Fraude contable grave. Inspección detecta las alteraciones manuales de facturas y te aplica una sanción muy dura."
      }
    ]
  },
  {
    "id": 442,
    "formato": "noticia",
    "medio": "Mundo Digital",
    "titular": "Aumentan las compras mediante 'Bizum en Comercio' en las tiendas físicas.",
    "noticia": "Los pagos instantáneos por móvil crecen un 40% este año. La facilidad para el cliente contrasta con la necesidad de adaptar la caja para recibir las confirmaciones de saldo.",
    "opciones": [
      "Dar de alta el servicio profesional de Bizum Negocios en tu banco (20€ de configuración) e integrarlo en la caja.",
      "Decir a los clientes que te hagan transferencias a tu número de teléfono personal sin control de caja.",
      "Rechazar este tipo de cobros y exigir únicamente tarjeta física o billetes."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -20, "categoria_pnl": "Servicios" },
          { "dinero": 120, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 4,
        "feedback": "Agilidad en el punto de venta. Agilizas los cobros a la gente joven y aseguras ventas que de otro modo perderías."
      },
      {
        "movimientos": [
          { "dinero": -50, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -2,
        "feedback": "Mezclas las finanzas de la empresa con tu cuenta personal, provocando descuadres en la contabilidad."
      },
      {
        "movimientos": [
          { "dinero": -80, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -1,
        "feedback": "Pierdes clientes jóvenes que ya no llevan dinero encima ni tarjetas físicas y prefieren pagar con el móvil."
      }
    ]
  },
  {
    "id": 443,
    "formato": "noticia",
    "medio": "Urbanismo & Ciudad",
    "titular": "Se aprueba la reforma para renovar el alcantarillado y la pavimentación de la zona.",
    "noticia": "Las obras levantarán la acera frente a los comercios durante una semana. Se instalarán pasarelas metálicas para permitir el acceso peatonal a las puertas.",
    "opciones": [
      "Colocar carteles luminosos bien visibles y limpiafondos en la entrada para facilitar el paso seguro de clientes.",
      "Cerrar el establecimiento durante la semana de obras para no lidiar con el polvo y el ruido.",
      "Protestar diariamente a los operarios obstaculizando las maquinarias de la calle."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -30, "categoria_pnl": "Suministros" }
        ],
        "reputacion": 3,
        "feedback": "Mantienes el negocio operativo y seguro. Los clientes aprecian las facilidades de acceso pese a la obra."
      },
      {
        "movimientos": [
          { "dinero": -300, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 0,
        "feedback": "Cerrar una semana completa destruye tus ingresos del mes mientras tus costes fijos se mantienen."
      },
      {
        "movimientos": [],
        "reputacion": -4,
        "feedback": "Generas tensiones innecesarias con los trabajadores y la policía local te advierte por obstrucción."
      }
    ]
  },
  {
    "id": 444,
    "formato": "noticia",
    "medio": "Sector Retail",
    "titular": "Estudio confirma que la música ambiental adecuada incrementa el ticket medio.",
    "noticia": "Los establecimientos que utilizan hilo musical legal con licencias de gestión de autor logran que los clientes permanezcan más tiempo en el local y consuman un 15% más.",
    "opciones": [
      "Contratar una suscripción a una plataforma de música comercial homologada para negocios (15€/mes).",
      "Poner la radio convencional a todo volumen con anuncios de la competencia de fondo.",
      "Poner música de tu teléfono sin pagar licencias de comunicación pública confiando en que no te auditen."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -15, "categoria_pnl": "Servicios" },
          { "dinero": 100, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 3,
        "feedback": "Ambiente comercial profesional. La música adecuada mejora la experiencia de compra y suben las ventas."
      },
      {
        "movimientos": [],
        "reputacion": -2,
        "feedback": "Los anuncios de la radio interrumpe el ambiente del local y en ocasiones se escuchan cuñas de otros comercios."
      },
      {
        "movimientos": [
          { "dinero": -400, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -3,
        "feedback": "Un inspector de la entidad de derechos de autor detecta la reproducción no autorizada y te exige el pago de la multa."
      }
    ]
  },
  {
    "id": 445,
    "formato": "noticia",
    "medio": "Eco Comercio",
    "titular": "Obligatorio instalar puntos de reciclaje segregado en todos los establecimientos de más de 50m².",
    "noticia": "La nueva ley de residuos exige a los comercios disponer de contenedores diferenciados para clientes y empleados. Se dará un margen de 15 días antes de comenzar las inspecciones municipales.",
    "opciones": [
      "Adquirir un juego de papeleras de reciclaje homologadas e instalarlas en la zona de paso (70€).",
      "Poner varias cajas de cartón usadas con carteles escritos a mano para salir del paso.",
      "Ignorar la medida al considerar que en tu local casi no se generan residuos de papel o plástico."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -70, "categoria_pnl": "Suministros" }
        ],
        "reputacion": 4,
        "feedback": "Cumples la ley de residuos y das una imagen limpia y responsable con el medio ambiente a tu clientela."
      },
      {
        "movimientos": [
          { "dinero": -10, "categoria_pnl": "Suministros" }
        ],
        "reputacion": -2,
        "feedback": "Evitas la sanción inicial, pero las cajas se ven descuidadas y dan mal aspecto a la entrada del local."
      },
      {
        "movimientos": [
          { "dinero": -500, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -5,
        "feedback": "Inspección municipal revisa el local tras acabar el plazo y te sanciona por incumplir la ordenanza de residuos."
      }
    ]
  },
  {
    "id": 446,
    "formato": "noticia",
    "medio": "Mundo Empresarial",
    "titular": "Aumento repentino en los costes de las licencias del software de gestión TPV.",
    "noticia": "Los principales proveedores informáticos de terminales de punto de venta aplican un incremento del 15% en sus suscripciones anuales debido al encarecimiento del mantenimiento de servidores.",
    "opciones": [
      "Aceptar la renovación anual para garantizar que tu sistema siga actualizado y con soporte técnico continuo.",
      "Cambiar a un programa gratuito de internet sin soporte técnico ni copias de seguridad automáticas.",
      "Negarte a renovar la licencia y seguir trabajando con la versión caducada sin conexión a la red."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -115, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 1,
        "feedback": "Garantizas el correcto funcionamiento del software de cobro y evitas problemas de caídas del sistema."
      },
      {
        "movimientos": [
          { "dinero": -150, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -4,
        "feedback": "El programa gratis sufre bloqueos constantes durante los cobros y genera largas colas de clientes molestos."
      },
      {
        "movimientos": [
          { "dinero": -400, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -5,
        "feedback": "El software se desconfigura al no actualizarse, pierde la base de datos de ventas y debes pagar a un técnico."
      }
    ]
  },
  {
    "id": 447,
    "formato": "noticia",
    "medio": "Diario de la Ciudad",
    "titular": "El Ayuntamiento anuncia la creación de un nuevo aparcamiento subterráneo cerca de la zona comercial.",
    "noticia": "Las obras facilitarán el acceso de vehículos a largo plazo, pero provocarán desvíos peatonales durante los próximos meses. Se invita a los comercios a realizar promociones para incentivar las visitas.",
    "opciones": [
      "Ofrecer 1 hora de parking gratuito a los clientes que superen un ticket mínimo de compra (coste estimado: 50€/mes).",
      "Exigir en prensa que se detengan las obras de construcción del aparcamiento.",
      "Reducir tu horario comercial mientras duren los trabajos en la calle para no pagar gastos de luz extra."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -50, "categoria_pnl": "Publicidad" },
          { "dinero": 250, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Estrategia comercial excelente. Neutralizas el impacto de las obras y aumentas el gasto medio por ticket."
      },
      {
        "movimientos": [],
        "reputacion": -2,
        "feedback": "Tus protestas públicas no detienen las obras y los clientes prefieren ir a otros comercios con soluciones."
      },
      {
        "movimientos": [
          { "dinero": -300, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -3,
        "feedback": "Al recortar horarios pierdes a la clientela habitual que acudía al salir del trabajo, desplomando tu facturación."
      }
    ]
  },
  {
    "id": 448,
    "formato": "noticia",
    "medio": "Sucesos Hoy",
    "titular": "Aviso policial: Aumenta la circulación de billetes falsos de 20€ en establecimientos locales.",
    "noticia": "La Jefatura de Policía alerta a los comerciantes tras detectar una remesa de billetes falsos de alta calidad. Recomiendan el uso de detectores UV o rotuladores térmicos en cada transacción.",
    "opciones": [
      "Comprar un detector automático de billetes falsos homologado para el mostrador (45€).",
      "Instruir a los dependientes para que comprueben los billetes manualmente al trasluz.",
      "Poner un cartel indicando que no se aceptan billetes de 20€ bajo ningún concepto."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -45, "categoria_pnl": "Suministros" }
        ],
        "reputacion": 2,
        "feedback": "Evitas colar billetes falsos en la caja. El equipo cobra con rapidez y total seguridad."
      },
      {
        "movimientos": [
          { "dinero": -60, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -1,
        "feedback": "Con las prisas de las horas punta, los empleados no detectan dos billetes falsos que acaban en la caja."
      },
      {
        "movimientos": [
          { "dinero": -200, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Rechazar un billete tan común provoca que muchos compradores dejen sus productos y se vayan a la competencia."
      }
    ]
  },
  {
    "id": 449,
    "formato": "noticia",
    "medio": "Tendencias Retail",
    "titular": "El 'Live Shopping' por redes sociales se consolida como un nuevo canal de ventas masivo.",
    "noticia": "Cada vez más pequeños comercios utilizan emisiones en directo para mostrar sus productos en tiempo real, resolver dudas de clientes y vender directamente durante la transmisión.",
    "opciones": [
      "Adquirir un aro de luz y un soporte móvil (30€) para realizar un directo semanal mostrando novedades.",
      "Ignorar esta tendencia por considerar que la venta en directo no encaja con tu estilo tradicional.",
      "Pagar 400€ a una agencia de publicidad para que organicen la emisión en directo por ti."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -30, "categoria_pnl": "Publicidad" },
          { "dinero": 180, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Cercanía e innovación. Conectas con nuevos clientes y consigues ventas extra directas a través del canal online."
      },
      {
        "movimientos": [],
        "reputacion": 0,
        "feedback": "No asumes gastos, pero te pierdes un canal de promoción moderno que tu competencia sí aprovecha."
      },
      {
        "movimientos": [
          { "dinero": -400, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 1,
        "feedback": "La emisión queda muy profesional, pero el elevado coste del servicio externo deja sin margen las ventas del directo."
      }
    ]
  },
  {
    "id": 450,
    "formato": "noticia",
    "medio": "Gaceta Fiscal",
    "titular": "Hacienda endurece el control sobre la deducción de gastos de vehículos de empresa.",
    "noticia": "La Agencia Tributaria exigirá justificantes exhaustivos (hojas de ruta, partes de visita) para admitir la deducción del combustible y mantenimiento de los vehículos comerciales.",
    "opciones": [
      "Contratar a tu gestoría la revisión y ajuste de los registros de kilometraje del vehículo (40€).",
      "Seguir deduciendo el 100% de la gasolina sin llevar registro alguno de los desplazamientos.",
      "Dejar de deducir cualquier gasto de transporte para evitar cualquier posible requerimiento futuro."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -40, "categoria_pnl": "Asesoría" }
        ],
        "reputacion": 2,
        "feedback": "Organización contable impecable. Garantizas las deducciones fiscales de forma 100% legal y segura."
      },
      {
        "movimientos": [
          { "dinero": -400, "categoria_pnl": "Impuestos" }
        ],
        "reputacion": -4,
        "feedback": "Hacienda rechaza las deducciones no justificadas en la inspección y te exige el pago con recargo."
      },
      {
        "movimientos": [
          { "dinero": -150, "categoria_pnl": "Impuestos" }
        ],
        "reputacion": 0,
        "feedback": "Decisión demasiado miedosa. Pagas más impuestos de la cuenta al renunciar a deducciones legítimas."
      }
    ]
  },
  {
    "id": 451,
    "formato": "noticia",
    "medio": "Mundo Trabajo",
    "titular": "Entra en vigor el nuevo registro obligatorio de planes de igualdad en pymes.",
    "noticia": "Las empresas deberán contar con un protocolo formalizado contra el acoso y medidas de conciliación laboral. Las inspecciones de Trabajo comenzarán de forma inminente.",
    "opciones": [
      "Encargar a una consultora laboral la redacción e implantación del plan adaptado a tu local (150€).",
      "Descargar un borrador genérico de internet, firmarlo tú mismo y guardarlo en un cajón sin registrarlo.",
      "No hacer nada apelando a que al tener pocos empleados no necesitas ningún documento formal."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -150, "categoria_pnl": "Asesoría" }
        ],
        "reputacion": 4,
        "feedback": "Implantación legal correcta. Evitas multas y mejoras el protocolo interno de trabajo en la empresa."
      },
      {
        "movimientos": [
          { "dinero": -500, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -3,
        "feedback": "Inspección de Trabajo revisa el plan, detecta que no cumple los requisitos mínimos y te sanciona."
      },
      {
        "movimientos": [
          { "dinero": -1000, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -5,
        "feedback": "Incumplimiento normativo. Te imponen una multa grave por carecer del protocolo obligatorio."
      }
    ]
  },
  {
    "id": 452,
    "formato": "noticia",
    "medio": "Clima & Servicios",
    "titular": "Previsión de olas de calor intensas durante el próximo mes de verano.",
    "noticia": "Las altas temperaturas reducirán el tránsito peatonal en las horas centrales del día. Los expertos recomiendan adaptar los espacios de venta con zonas de refresco para no perder clientes.",
    "opciones": [
      "Instalar una máquina dispensadora de agua para clientes y programar el aire acondicionado a 24°C (80€).",
      "Bajar la potencia del aire acondicionado para ahorrar en la factura eléctrica de este mes.",
      "Cerrar las puertas del local y no permitir la entrada a clientes que no vayan a comprar inmediatamente."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -80, "categoria_pnl": "Suministros" },
          { "dinero": 120, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Atención al cliente de 10. La gente entra al local a resguardarse del calor y aprovecha para realizar compras."
      },
      {
        "movimientos": [
          { "dinero": -100, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -4,
        "feedback": "El bochorno dentro de la tienda es insoportable. Los compradores abandonan el local a los pocos segundos."
      },
      {
        "movimientos": [],
        "reputacion": -8,
        "feedback": "La mala atención en la puerta se vuelve viral en las opiniones de Google y perjudica gravemente tu reputación."
      }
    ]
  },
  {
    "id": 453,
    "formato": "noticia",
    "medio": "Sector Consumo",
    "titular": "Aumentan las reclamaciones de consumidores por falta de claridad en las devoluciones.",
    "noticia": "Consumo recuerda que las condiciones de cambio, plazos y devolución de dinero deben estar expuestas por escrito en el ticket y en un cartel visible en el mostrador.",
    "opciones": [
      "Encargar la impresión de carteles claros sobre la política de devoluciones para el mostrador y caja (25€).",
      "Explicar las condiciones solo de forma verbal a los clientes que pregunten al pagar.",
      "Eliminar la posibilidad de cualquier devolución para evitar disputas de caja."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -25, "categoria_pnl": "Publicidad" }
        ],
        "reputacion": 3,
        "feedback": "Transparencia total. Evitas malentendidos en caja y garantizas el cumplimiento de las exigencias de Consumo."
      },
      {
        "movimientos": [
          { "dinero": -100, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -3,
        "feedback": "Un cliente exige la hoja de reclamaciones por falta de información visible y te cae una sanción leve."
      },
      {
        "movimientos": [
          { "dinero": -250, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -7,
        "feedback": "La negativa absoluta a realizar cambios o devoluciones genera desconfianza y aleja a los compradores habituales."
      }
    ]
  },
  {
    "id": 454,
    "formato": "noticia",
    "medio": "Tecnología Comercial",
    "titular": "Crecimiento del uso de etiquetas QR en escaparates para la venta fuera de horario.",
    "noticia": "Los comercios que añaden códigos QR en sus cristales permiten a los peatones comprar el producto mostrado en el escaparate a través de la web aunque la tienda esté cerrada.",
    "opciones": [
      "Generar e instalar vinilos con códigos QR vinculados a tu tienda online en los cristales del escaparate (35€).",
      "Prescindir de esta tecnología por considerar que nadie compra escaneando códigos en la calle.",
      "Pegar hojas impresas con tu número de teléfono personal para que te llamen a cualquier hora de la noche."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -35, "categoria_pnl": "Publicidad" },
          { "dinero": 140, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 4,
        "feedback": "Innovación en el punto de venta. Generas ingresos pasivos fuera del horario comercial habitual."
      },
      {
        "movimientos": [],
        "reputacion": 0,
        "feedback": "Te mantienes estático y pierdes la oportunidad de captar compras de impulso nocturnas."
      },
      {
        "movimientos": [],
        "reputacion": -2,
        "feedback": "Las llamadas a deshoras resultan molestas y no logras cerrar ventas mediante un método poco profesional."
      }
    ]
  },
  {
    "id": 455,
    "formato": "noticia",
    "medio": "Diario Económico",
    "titular": "Nueva subida prevista en la tarifa de recogida de basuras comerciales.",
    "noticia": "La junta municipal aprueba una subida del 12% en la tasa de gestión de residuos para locales comerciales. Se ofrecen bonificaciones a los negocios que reduzcan sus desperdicios.",
    "opciones": [
      "Inscribirte en el programa municipal de auditoría de residuos para acceder a la bonificación fiscal.",
      "Asumir la subida de la tasa sin revisar el volumen de basura que genera tu negocio.",
      "Tirar el cartón y los desperdicios en contenedores residenciales para intentar no pagar la tasa comercial."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 60, "categoria_pnl": "Impuestos" }
        ],
        "reputacion": 3,
        "feedback": "Buena gestión administrativa. Acreditas la reducción de residuos y consigues la bonificación en la tasa."
      },
      {
        "movimientos": [
          { "dinero": -80, "categoria_pnl": "Impuestos" }
        ],
        "reputacion": 0,
        "feedback": "Pagase el incremento impositivo completo reduciendo ligeramente la liquidez de tu caja."
      },
      {
        "movimientos": [
          { "dinero": -300, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -5,
        "feedback": "La policía local te identifica tirando residuos comerciales en contenedores no autorizados y te sanciona."
      }
    ]
  },
  {
    "id": 456,
    "formato": "noticia",
    "medio": "Logística & Transporte",
    "titular": "Saturación en las agencias de mensajería prevé retrasos en los repartos de la próxima semana.",
    "noticia": "El incremento del volumen de paquetes provoca cuellos de botella en las principales agencias de transporte. Se recomienda a las tiendas adelantar sus pedidos de reposición.",
    "opciones": [
      "Adelantar los pedidos de stock previstos para el mes pagando los portes de envío de urgencia (60€).",
      "Esperar a hacer los pedidos en las fechas habituales confiando en que no te afecten los retrasos.",
      "Cobrar un suplemento a los clientes para garantizarles que su producto llegará a tiempo."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -60, "categoria_pnl": "Servicios" },
          { "dinero": 200, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 3,
        "feedback": "Previsión acertada. Mantienes las estanterías llenas mientras la competencia sufre roturas de stock."
      },
      {
        "movimientos": [
          { "dinero": -150, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -3,
        "feedback": "Los pedidos se retrasan más de una semana y pierdes ventas clave por falta de producto."
      },
      {
        "movimientos": [
          { "dinero": -50, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -4,
        "feedback": "Trasladar el coste de la incertidumbre logística al comprador provoca el rechazo de varios clientes."
      }
    ]
  },
  {
    "id": 457,
    "formato": "noticia",
    "medio": "Seguridad en Retail",
    "titular": "Incremento de estafas mediante llamadas telefónicas falsas a empleados de comercio.",
    "noticia": "Ciberdelincuentes se hacen pasar por gestores o proveedores pidiendo pagos urgentes con Bizum o tarjetas bajo la amenaza de un corte de suministro o embargo inmediato.",
    "opciones": [
      "Redactar y difundir un protocolo interno de verificación de pagos estricto para todo tu personal.",
      "Confiar en que tus empleados son lo suficientemente espabilados para no caer en el engaño.",
      "Prohibir que los empleados atiendan llamadas telefónicas en el local durante el horario comercial."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 3,
        "feedback": "Prevención eficaz. Tu equipo detecta un intento de estafa telefónica esa misma semana y evita la pérdida."
      },
      {
        "movimientos": [
          { "dinero": -300, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -2,
        "feedback": "Un empleado cae en el engaño por nerviosismo durante una llamada engañosa y realiza una transferencia."
      },
      {
        "movimientos": [
          { "dinero": -80, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -3,
        "feedback": "No atender el teléfono impide que clientes reales soliciten información o reserven productos."
      }
    ]
  },
  {
    "id": 458,
    "formato": "noticia",
    "medio": "Información Laboral",
    "titular": "Aprobada la nueva regulación sobre las pausas de descanso en jornadas continuas.",
    "noticia": "La normativa especifica que los descansos de 15 minutos en jornadas superiores a 6 horas deben ser contabilizados obligatoriamente dentro de la jornada efectiva de trabajo.",
    "opciones": [
      "Actualizar el cuadrante de turnos con la gestoría y reorganizar los horarios de la plantilla (30€).",
      "Exigir a los trabajadores que recuperen los 15 minutos de descanso al finalizar su turno diario.",
      "Eliminar las pausas de descanso durante el turno de trabajo para evitar desajustes."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -30, "categoria_pnl": "Asesoría" }
        ],
        "reputacion": 4,
        "feedback": "Cumplimiento normativo impecable. Mantienes un clima laboral de confianza y evitas conflictos."
      },
      {
        "movimientos": [],
        "reputacion": -5,
        "feedback": "La plantilla se organiza para denunciar el incumplimiento ante la Inspección de Trabajo."
      },
      {
        "movimientos": [
          { "dinero": -500, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -7,
        "feedback": "Sanción grave de Trabajo por suprimir los descansos obligatorios fijados en el estatuto."
      }
    ]
  },
  {
    "id": 459,
    "formato": "noticia",
    "medio": "Actualidad Municipal",
    "titular": "Lanzamiento del programa de iluminación festiva para el próximo periodo navideño.",
    "noticia": "El Ayuntamiento invita a las asociaciones de comerciantes a cofinanciar la instalación de luces temáticas en las fachadas para revitalizar las ventas durante las fiestas.",
    "opciones": [
      "Aportar la cuota de la campaña navideña de comerciantes para garantizar las luces en tu calle (100€).",
      "Rechazar colaborar afirmando que el alumbrado público es responsabilidad exclusiva del Ayuntamiento.",
      "Montar una instalación eléctrica casera en el exterior sin permiso de la junta de distrito."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -100, "categoria_pnl": "Publicidad" },
          { "dinero": 300, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "La calle atrae a miles de paseantes durante la campaña festiva y tus ventas navideñas aumentan."
      },
      {
        "movimientos": [],
        "reputacion": -2,
        "feedback": "La asociación no llega al presupuesto en tu tramo de calle y el alumbrado queda incompleto y triste."
      },
      {
        "movimientos": [
          { "dinero": -200, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -4,
        "feedback": "Los técnicos municipales retiran la instalación casera por no cumplir las medidas de seguridad y te multan."
      }
    ]
  },
  {
    "id": 460,
    "formato": "noticia",
    "medio": "Consumo & Familia",
    "titular": "Campaña de inspección de la balanzas y básculas comerciales en vigor.",
    "noticia": "Inspectores de Metrología comprobarán el sellado y calibrado de todos los equipos de pesaje utilizados para la venta directa al público en los establecimientos.",
    "opciones": [
      "Solicitar la revisión técnica de verificado y sellado oficial de la balanza comercial (50€).",
      "Seguir pesando con el equipo antiguo sin precinto confiando en que no pase la inspección.",
      "Usar una báscula doméstica no homologada comprada en un supermercado."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -50, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 2,
        "feedback": "Verificación completada. Tu balanza pasa la auditoría de metrología y obtienes el sello oficial."
      },
      {
        "movimientos": [
          { "dinero": -400, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -3,
        "feedback": "La balanza no homologada presenta un descuadre en el pesaje y los inspectores te aplican una sanción."
      },
      {
        "movimientos": [
          { "dinero": -800, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -6,
        "feedback": "Uso de equipo no autorizado. Se precinta la báscula de inmediato y se tramita expediente sancionador."
      }
    ]
  },
  {
    "id": 461,
    "formato": "noticia",
    "medio": "Tecnología & Empresa",
    "titular": "El uso del pago por enlace ('Pay by Link') se extiende en la venta telefónica y por WhatsApp.",
    "noticia": "Los bancos ofrecen soluciones para que las Pymes puedan enviar un enlace seguro de cobro por mensaje, evitando que el cliente tenga que dictar su tarjeta por teléfono.",
    "opciones": [
      "Contratar el servicio de Pay by Link con tu entidad bancaria para ofrecer cobros remotos seguros (15€/mes).",
      "Seguir pidiendo los números de tarjeta completos por teléfono para apuntarlos en un papel.",
      "Exigir que todas las compras telefónicas se paguen únicamente mediante transferencia bancaria previa."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -15, "categoria_pnl": "Servicios" },
          { "dinero": 110, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 4,
        "feedback": "Cobro remoto ágil y profesional. Los clientes confían más al pagar desde la pasarela oficial."
      },
      {
        "movimientos": [
          { "dinero": -300, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -6,
        "feedback": "Apuntar datos bancarios en papel viola la normativa PCI-DSS de seguridad y sufres una fuga de datos."
      },
      {
        "movimientos": [
          { "dinero": -90, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -2,
        "feedback": "La lentitud del proceso de transferencia bancaria hace que muchos compradores desistan de la compra."
      }
    ]
  },
  {
    "id": 462,
    "formato": "noticia",
    "medio": "Diario de Servicios",
    "titular": "Nueva normativa municipal exige mantener limpios los accesos y marquesinas comerciales.",
    "noticia": "Los establecimientos deberán garantizar que las aceras que rodean su entrada estén libres de manchas, chicles o restos de embalaje derivados de su propia actividad.",
    "opciones": [
      "Contratar un servicio mensual de limpieza de agua a presión para la acera del local (40€).",
      "Barrer la acera solo cuando los desperdicios sean acumulaciones grandes.",
      "Poner un cartel responsabilizando a los peatones de la suciedad de la calle."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -40, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 4,
        "feedback": "Entrada impecable. Tu fachada se ve cuidada y el establecimiento destaca positivamente en la calle."
      },
      {
        "movimientos": [
          { "dinero": -150, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -2,
        "feedback": "La acumulación de manchas frente al escaparate provoca una amonestación por parte de la policía de barrio."
      },
      {
        "movimientos": [],
        "reputacion": -5,
        "feedback": "El cartel resulta antipático para los transeúntes y la mala imagen perjudica el acceso a la tienda."
      }
    ]
  },
  {
    "id": 463,
    "formato": "noticia",
    "medio": "Boletín de Prevención",
    "titular": "Sanidad recuerda la obligación de disponer de extintores revisados y señalizados.",
    "noticia": "Todos los locales comerciales deben realizar la prueba de retimbrado y revisión anual de sus extintores. Las inspecciones de protección civil comenzarán esta semana.",
    "opciones": [
      "Encargar la revisión anual y sellado de extintores a una empresa de protección contra incendios (60€).",
      "Verificar tú mismo la aguja del manómetro y no contratar la revisión oficial.",
      "Retirar los extintores caducados de la pared y guardarlos en el almacén para que no los vean."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -60, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 2,
        "feedback": "Seguridad al día. La empresa autorizada emite el certificado exigido por la normativa de incendios."
      },
      {
        "movimientos": [
          { "dinero": -300, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -4,
        "feedback": "La revisión propia no tiene validez legal. Protección civil comprueba la etiqueta caducada y te sanciona."
      },
      {
        "movimientos": [
          { "dinero": -800, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -8,
        "feedback": "Carecer de extintores operativos en la zona de venta representa una falta muy grave del código de edificación."
      }
    ]
  },
  {
    "id": 464,
    "formato": "noticia",
    "medio": "Mercado Local",
    "titular": "Lanzamiento de una App municipal para incentivar las compras en el comercio de barrio.",
    "noticia": "El ayuntamiento subvencionará el 15% de todas las compras realizadas en los comercios adheridos a la plataforma oficial. La inscripción para tiendas es gratuita pero requiere firma digital.",
    "opciones": [
      "Inscribir tu negocio en la plataforma municipal completando la gestión telemática hoy mismo.",
      "No apuntarte por considerar que el uso de aplicaciones no aumentará las ventas en tu zona.",
      "Intentar cobrar una comisión extra a los clientes que acudan a gastar el saldo de la aplicación."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 220, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 4,
        "feedback": "Aprovechas el impulso institucional. La aplicación atrae a decenas de nuevos clientes que gastan el saldo en tu tienda."
      },
      {
        "movimientos": [],
        "reputacion": 0,
        "feedback": "No realizas el trámite y los usuarios de la App gastan sus bonos municipales en los comercios vecinos."
      },
      {
        "movimientos": [
          { "dinero": -200, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -6,
        "feedback": "Un usuario reporta el cobro indebido a la organización. Te expulsan del programa y te imponen una penalización."
      }
    ]
  },
  {
    "id": 465,
    "formato": "noticia",
    "medio": "Gaceta Comercial",
    "titular": "Sanidad obligará a instalar purificadores de aire HEPA en comercios con zona de espera.",
    "noticia": "Para prevenir la propagación de virus respiratorios en épocas de pico estacional, las autoridades sanitarias exigirán equipos de filtración homologados en áreas donde se acumulen clientes.",
    "opciones": [
      "Comprar e instalar un purificador con filtro HEPA homologado y certificado (120€).",
      "Poner un ventilador antiguo de casa en la zona de espera simulando recirculación de aire.",
      "Retirar las sillas de la zona de espera para argumentar que los clientes no se quedan parados."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -120, "categoria_pnl": "Suministros" }
        ],
        "reputacion": 3,
        "feedback": "Cumples con la directiva sanitaria. Los clientes perciben el ambiente limpio y valoran la seguridad del local."
      },
      {
        "movimientos": [
          { "dinero": -400, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -4,
        "feedback": "El ventilador solo mueve el polvo. En la inspección de Sanidad te sancionan por no disponer de filtración HEPA."
      },
      {
        "movimientos": [
          { "dinero": -80, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -3,
        "feedback": "Al quitar el mobiliario de espera, los clientes mayores o con niños se cansan y prefieren marcharse sin comprar."
      }
    ]
  },
  {
    "id": 466,
    "formato": "noticia",
    "medio": "Logística y Consumo",
    "titular": "Se disparan las devoluciones falsas con el timo de la 'caja vacía' en envíos online.",
    "noticia": "Grupos organizados solicitan la devolución de compras por internet enviando paquetes de retorno llenos de piedras o papel. Las agencias piden auditar la recepción de cada paquete.",
    "opciones": [
      "Implementar un protocolo de grabado en vídeo al desempaquetar las devoluciones de envíos (30€ en soporte y tarjeta).",
      "Dejar de aceptar devoluciones de compras online para evitar cualquier intento de estafa.",
      "Aceptar las devoluciones sin comprobar el contenido del paquete hasta final de mes para ahorrar tiempo."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -30, "categoria_pnl": "Otros gastos" }
        ],
        "reputacion": 2,
        "feedback": "Proteges la tesorería de tu negocio. Detectas un intento de fraude de inmediato y la plataforma te reembolsa el dinero."
      },
      {
        "movimientos": [
          { "dinero": -200, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "Eliminar la política de devoluciones online arruina las conversiones de tu tienda web y pierdes ventas en masa."
      },
      {
        "movimientos": [
          { "dinero": -350, "categoria_pnl": "Compras/Materiales" }
        ],
        "reputacion": 0,
        "feedback": "Al revisar las cajas semanas después descubres varios paquetes llenos de cartón. Pierdes el importe y el producto."
      }
    ]
  },
  {
    "id": 467,
    "formato": "noticia",
    "medio": "Portal Laboral",
    "titular": "Inspección de Trabajo inicia campañas sobre el fichaje digital en teléfonos móviles.",
    "noticia": "El Ministerio advierte que las aplicaciones de control horario que utilicen geolocalización continua en dispositivos personales de los trabajadores sin acuerdo previo son ilegales.",
    "opciones": [
      "Implantar un terminal de fichaje con huella/tarjeta físico fijo en la entrada del local (140€).",
      "Obligar a la plantilla a descargarse una app con GPS activo en sus móviles personales sin consultarles.",
      "Seguir sin registrar la jornada laboral alegando que al ser pocos empleados os apañáis de palabra."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -140, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 3,
        "feedback": "Solución fija, clara y legal. Registras los horarios perfectamente y la plantilla agradece el respeto a su privacidad."
      },
      {
        "movimientos": [
          { "dinero": -700, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -6,
        "feedback": "Un empleado te denuncia ante la Agencia de Protección de Datos por intromisión y vulneración de la intimidad."
      },
      {
        "movimientos": [
          { "dinero": -1200, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -4,
        "feedback": "Inspección de Trabajo requiere el registro diario de jornada. Al no tenerlo, te clavan la sanción correspondiente."
      }
    ]
  },
  {
    "id": 468,
    "formato": "noticia",
    "medio": "Negocios Urbanos",
    "titular": "El auge de los 'Showrooms': El público visita las tiendas físicas pero compra online en multinacionales.",
    "noticia": "El fenómeno del 'showrooming' afecta gravemente al comercio local. Los clientes prueban los productos en el establecimiento y luego buscan el precio más bajo por internet desde el móvil.",
    "opciones": [
      "Ofrecer un descuento inmediato en caja a los clientes que compren en el acto o reserven el producto.",
      "Poner carteles prohibiendo el uso del teléfono móvil dentro del establecimiento.",
      "Cobrar 2€ por la entrada a la tienda reembolsables solo si se efectúa alguna compra."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -40, "categoria_pnl": "Publicidad" },
          { "dinero": 200, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 4,
        "feedback": "Fidelización rápida. Conviertes a los visitantes indecisos en compradores reales reteniendo el volumen de ventas."
      },
      {
        "movimientos": [],
        "reputacion": -5,
        "feedback": "Prohibir el móvil resulta absurdo e incómodo. Los clientes perciben un ambiente tenso y prefieren marcharse."
      },
      {
        "movimientos": [
          { "dinero": -300, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -9,
        "feedback": "Cobrar por entrar al local genera un rechazo desastroso. Las reseñas negativas arruinan tu reputación en el barrio."
      }
    ]
  },
  {
    "id": 469,
    "formato": "noticia",
    "medio": "Diario de la PYME",
    "titular": "Nuevo programa de bonos 'Kit Ciberseguridad' concede hasta 1.000€ para comercios.",
    "noticia": "El Ministerio de Transformación Digital abre la convocatoria para blindar las conexiones wifi, equipos TPV y bases de datos del comercio minorista. La adjudicación es directa por solicitud.",
    "opciones": [
      "Contratar a tu gestoría (70€) para tramitar el bono e instalar un firewall profesional sin coste extra.",
      "Intentar configurar tú mismo la seguridad de la red cambiando la contraseña del router por una más larga.",
      "No solicitar la ayuda porque no crees que un comercio pequeño sufra ataques informáticos."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -70, "categoria_pnl": "Asesoría" },
          { "dinero": 1000, "categoria_pnl": "Subvenciones" }
        ],
        "reputacion": 3,
        "feedback": "Excelente inversión. Consigues la ayuda pública, proteges la red del local y blindas los cobros del negocio."
      },
      {
        "movimientos": [],
        "reputacion": -1,
        "feedback": "Cambiar la clave del wifi no protege tu servidor de intrusiones. Mantienes vulnerabilidades en el sistema de cobro."
      },
      {
        "movimientos": [],
        "reputacion": 0,
        "feedback": "Dejas escapar capital público de digitalización que habría mejorado la infraestructura técnica del negocio."
      }
    ]
  },
  {
    "id": 470,
    "formato": "noticia",
    "medio": "Consumo & Ley",
    "titular": "Hacienda fija en un máximo de 1.000€ los pagos en efectivo entre profesionales y particulares.",
    "noticia": "Se intensificarán los controles sobre facturas simplificadas. Cualquier pago en metálico que supere el límite legal acarreará multas del 25% del importe total a ambas partes.",
    "opciones": [
      "Configurar tu TPV para bloquear transacciones en efectivo que superen los 999€ fijados por ley.",
      "Fraccionar una venta de 1.500€ en dos tickets de caja de 750€ cobrados en metálico en el mismo momento.",
      "Aceptar un pago de 2.000€ en efectivo guardando el billete en el cajón sin emitir ticket."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 2,
        "feedback": "Cumplimiento legal automático. Te proteges frente a inspecciones y garantizas la trazabilidad de los ingresos."
      },
      {
        "movimientos": [
          { "dinero": -375, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -4,
        "feedback": "El fraccionamiento de facturas es un delito tipificado. Hacienda detecta la anomalía en el arqueo y te sanciona."
      },
      {
        "movimientos": [
          { "dinero": -1000, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -7,
        "feedback": "Una auditoría fiscal cruza el inventario vendido con los cobros declarados. Te imponen una multa por fraude muy grave."
      }
    ]
  },
  {
    "id": 471,
    "formato": "noticia",
    "medio": "Retail & Sostenibilidad",
    "titular": "Se hace obligatorio el certificado de eficiencia energética para locales comerciales alquilados.",
    "noticia": "El Ministerio de Transición Ecológica exigirá la etiqueta energética en la entrada de los comercios en alquiler. Se sancionará a los arrendatarios que no muestren el distintivo oficial.",
    "opciones": [
      "Contratar a un técnico certificado para realizar la auditoría energética y colocar la etiqueta (90€).",
      "Imprimir una etiqueta energética falsa descargada de internet y pegarla en el escaparate.",
      "Reclamar al casero que pague el certificado y negarte a mostrar nada hasta que él lo gestione."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -90, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 2,
        "feedback": "Trámite completado correctamente. Expones la certificación oficial y pasas las inspecciones sin contratiempos."
      },
      {
        "movimientos": [
          { "dinero": -600, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -6,
        "feedback": "La inspección contrasta el número de registro de la etiqueta y descubre la falsedad, imponiéndote una sanción grave."
      },
      {
        "movimientos": [
          { "dinero": -300, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -2,
        "feedback": "La responsabilidad de exhibir el distintivo en la actividad comercial es del explotador del local. Te sancionan a ti."
      }
    ]
  },
  {
    "id": 472,
    "formato": "noticia",
    "medio": "Eco Barrio",
    "titular": "Plaga de insectos urbanos afecta a las aceras del distrito comercial principal.",
    "noticia": "Las altas temperaturas han provocado un brote repentino de plagas en la vía pública. El Ayuntamiento aconseja realizar desinsectaciones preventivas en las entradas de los establecimientos.",
    "opciones": [
      "Contratar un servicio de fumigación y sellado de accesos con una empresa plaguicida autorizada (110€).",
      "Comprar un par de insecticidas de supermercado y rociar la puerta al cerrar la tienda.",
      "No hacer nada esperando a que las fumigaciones de los servicios municipales resuelvan el problema."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -110, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 3,
        "feedback": "Acción preventiva impecable. Tu local permanece limpio e higiénico, obteniendo además el certificado de control de plagas."
      },
      {
        "movimientos": [
          { "dinero": -15, "categoria_pnl": "Suministros" },
          { "dinero": -100, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -3,
        "feedback": "El spray casero no frena a los insectos y el fuerte olor químico espanta a varios clientes durante la mañana."
      },
      {
        "movimientos": [
          { "dinero": -250, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -7,
        "feedback": "Aparecen insectos dentro de la zona de exposición. Los clientes se asustan, se van e imponen quejas en redes sociales."
      }
    ]
  },
  {
    "id": 473,
    "formato": "noticia",
    "medio": "Marketing Actual",
    "titular": "El 'Micro-Influencer Marketing' supera en retorno a las campañas en medios tradicionales.",
    "noticia": "Los comercios que colaboran con creadores de contenido locales (de 2.000 a 10.000 seguidores) obtienen mayores incrementos de tráfico a tienda que aquellos que invierten en folletos o prensa.",
    "opciones": [
      "Invitar a un micro-influencer del barrio a probar tus productos y regalarle un lote a cambio de una reseña (60€ coste stock).",
      "Pagar 500€ a una gran celebridad nacional sin relevancia local para que mencione tu tienda en un story de 5 segundos.",
      "Repartir folletos impresos en papel de mano por los parabrisas de los coches aparcados en la calle."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -60, "categoria_pnl": "Publicidad" },
          { "dinero": 280, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "Estrategia hiperlocal brillante. El público cercano descubre tu tienda por una recomendación creíble y suben las ventas."
      },
      {
        "movimientos": [
          { "dinero": -500, "categoria_pnl": "Publicidad" }
        ],
        "reputacion": 1,
        "feedback": "Inversión desproporcionada. Conseguiste muchos 'likes' de gente lejana que jamás pisará tu establecimiento físico."
      },
      {
        "movimientos": [
          { "dinero": -80, "categoria_pnl": "Publicidad" },
          { "dinero": -100, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -4,
        "feedback": "Poner publicidad en coches está prohibido en la ordenanza de limpieza. Te imponen una multa municipal por ensuciar la vía."
      }
    ]
  },
  {
    "id": 474,
    "formato": "noticia",
    "medio": "Empresa & Ley",
    "titular": "Sanidad y Consumo regulan de forma estricta las zonas de degustación gratuita en comercios.",
    "noticia": "Queda prohibido ofrecer muestras de comida o prueba de productos de aplicación cutánea sin mamparas de protección, guantes desechables y registros de trazabilidad de los lotes expuestos.",
    "opciones": [
      "Adquirir un expositor protegido con mampara de metacrilato y utensilios desechables homologados (85€).",
      "Seguir dejando los platos o botes de prueba al aire libre en el mostrador como siempre.",
      "Cobrar 50 céntimos por cada muestra de degustación para cubrir el coste de las mamparas."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -85, "categoria_pnl": "Suministros" }
        ],
        "reputacion": 4,
        "feedback": "Higiene y legalidad garantizadas. Das imagen de profesionalidad y la zona de pruebas sigue atrayendo ventas."
      },
      {
        "movimientos": [
          { "dinero": -450, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -5,
        "feedback": "Una inspección de Consumo detecta los productos expuestos al aire sin trazabilidad ni protección y te sanciona."
      },
      {
        "movimientos": [
          { "dinero": -120, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -3,
        "feedback": "Cobrar por las muestras rompe el incentivo de compra. Los clientes rechazan probar y pierdes la venta cruzada."
      }
    ]
  },
  {
    "id": 475,
    "formato": "whatsapp",
    "remitente": "Carlos (Dependiente)",
    "estado": "en línea",
    "mensajes": [
      { "emisor": "remitente", "texto": "Jefe, un cliente se ha dejado sobre el mostrador una cartera llena de billetes. Serán por lo menos 400€.", "hora": "11:15" },
      { "emisor": "remitente", "texto": "¿Qué hago? No ha dejado ningún teléfono ni nombre en el ticket.", "hora": "11:16" }
    ],
    "opciones": [
      "Guardar la cartera en la caja fuerte y publicar un aviso discreto en la puerta por si regresa a reclamarla.",
      "Decirle a Carlos que se quede la mitad él y la otra mitad la metáis como ingreso extra en caja.",
      "Coger el dinero para cubrir gastos del local y tirar la cartera a la basura para no dejar pistas."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 6,
        "feedback": "El cliente vuelve desesperado por la tarde. Al ver su cartera intacta se emociona, se convierte en cliente fiel y os deja una excelente reseña pública."
      },
      {
        "movimientos": [
          { "dinero": 200, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -6,
        "feedback": "El cliente regresa con la policía nacional. Revisan las cámaras de seguridad, ven cómo os quedáis el dinero y os imputan por apropiación indebida."
      },
      {
        "movimientos": [
          { "dinero": 400, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -10,
        "feedback": "La policía rastrea la última ubicación del móvil del cliente en tu tienda. Se descubre el robo y la reputación de tu negocio queda destruida."
      }
    ]
  },
  {
    "id": 476,
    "formato": "whatsapp",
    "remitente": "Lucía (Limpieza)",
    "estado": "en línea",
    "mensajes": [
      { "emisor": "remitente", "texto": "Hola, al fregar el suelo de la tienda me he dado cuenta de que hay una fuga en el termo del baño. Está empezando a gotear fuerte.", "hora": "08:30" },
      { "emisor": "remitente", "texto": "Si no se arregla hoy, mañana el almacén se va a inundar seguro.", "hora": "08:31" }
    ],
    "opciones": [
      "Llamar de urgencia a un fontanero profesional (90€) para reparar la avería en el acto.",
      "Decirle a Lucía que ponga un cubo debajo de la gota y ya lo mirarás el fin de semana con calma.",
      "Cerrar la llave de paso de agua del local para no gastar y dejar la tienda sin baño varios días."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -90, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 2,
        "feedback": "Reparación rápida y efectiva. Evitas males mayores y el local sigue operando con total normalidad."
      },
      {
        "movimientos": [
          { "dinero": -400, "categoria_pnl": "Suministros" }
        ],
        "reputacion": -2,
        "feedback": "El cubo se desborda por la noche. El agua arruina varias cajas de stock del almacén y la reparación posterior sale mucho más cara."
      },
      {
        "movimientos": [],
        "reputacion": -5,
        "feedback": "Sin baño operativo, los empleados protestan con razón y la Inspección de Trabajo te amonesta tras una denuncia por falta de higiene básica."
      }
    ]
  },
  {
    "id": 477,
    "formato": "whatsapp",
    "remitente": "Proveedor (Distribuciones Norte)",
    "estado": "en línea",
    "mensajes": [
      { "emisor": "remitente", "texto": "Buenas. Tenemos un sobrante de stock por cancelación de un cliente grande. Si me compras 10 cajas hoy te hago un 40% de descuento directo.", "hora": "14:20" },
      { "emisor": "remitente", "texto": "Eso sí, caducan en dos meses. Dime algo antes de las 16:00.", "hora": "14:21" }
    ],
    "opciones": [
      "Comprar el lote (200€) y planificar de inmediato una promoción de venta rápida en la tienda.",
      "Rechazar la oferta. Preferir no arriesgar tesorería en productos con fecha de caducidad tan corta.",
      "Comprar el lote y, si se caducan, cambiarles la etiqueta de fecha tú mismo para venderlos sin prisa."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -200, "categoria_pnl": "Compras/Materiales" },
          { "dinero": 450, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 4,
        "feedback": "La oferta exprés triunfa entre la clientela habitual. Vendes todo el stock en dos semanas con un margen excelente."
      },
      {
        "movimientos": [],
        "reputacion": 0,
        "feedback": "Jugada prudente. No arriesgas capital, aunque pierdes una oportunidad clara de conseguir liquidez rápida."
      },
      {
        "movimientos": [
          { "dinero": -200, "categoria_pnl": "Compras/Materiales" },
          { "dinero": -1000, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -8,
        "feedback": "Un cliente detecta el reetiquetado de caducidad y te denuncia ante Sanidad. Te imponen una multa gravísima por atentado a la salud pública."
      }
    ]
  },
  {
    "id": 478,
    "formato": "whatsapp",
    "remitente": "Sofía (Marketing)",
    "estado": "escribiendo...",
    "mensajes": [
      { "emisor": "remitente", "texto": "¡Oye! Un cliente nos ha dejado una crítica horrorosa en Google diciendo que la atención fue pésima y que el local daba asco.", "hora": "16:45" },
      { "emisor": "remitente", "texto": "Revisando las cámaras hemos visto que ese hombre ni siquiera ha pisado nuestra tienda. Es una reseña inventada de la competencia.", "hora": "16:46" }
    ],
    "opciones": [
      "Responder públicamente con educación explicando los datos reales comprobados y reportar la reseña a Google.",
      "Escribir una respuesta agresiva insultando al perﬁl y llamándole mentiroso y estafador.",
      "Pagar 50€ a una web para comprar 10 reseñas de 5 estrellas falsas que tapen la mala valoración."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 5,
        "feedback": "Tu respuesta profesional impecable deja en evidencia el troleo. Google elimina el comentario y la comunidad valora tu elegancia."
      },
      {
        "movimientos": [],
        "reputacion": -6,
        "feedback": "Perder las formas en público transmite una imagen de negocio neurótico. Los potenciales clientes se espantan al leer tus insultos."
      },
      {
        "movimientos": [
          { "dinero": -50, "categoria_pnl": "Publicidad" }
        ],
        "reputacion": -5,
        "feedback": "Google detecta la inyección repentina de valoraciones falsas y penaliza el posicionamiento en mapa de tu tienda."
      }
    ]
  },
  {
    "id": 479,
    "formato": "whatsapp",
    "remitente": "Pedro (Repartidor)",
    "estado": "en línea",
    "mensajes": [
      { "emisor": "remitente", "texto": "La furgoneta de reparto acaba de tirar un humo rarísimo y se ha parado en seco en medio de la avenida.", "hora": "09:12" },
      { "emisor": "remitente", "texto": "Tengo 5 entregas urgentes para esta mañana. ¿Pido grúa o intento arrancar como sea?", "hora": "09:13" }
    ],
    "opciones": [
      "Llamar a la grúa del seguro y contratar un servicio de mensajería express temporal (60€) para completar los envíos a tiempo.",
      "Decirle a Pedro que fuerce el motor para llegar al taller aunque se termine de romper la furgoneta.",
      "Cancelar las entregas del día sin avisar a los clientes hasta que el vehículo esté reparado la semana que viene."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -60, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 4,
        "feedback": "Gestión de crisis impecable. Los envíos llegan puntuales y tus clientes ni se enteran del contratiempo sufrido."
      },
      {
        "movimientos": [
          { "dinero": -500, "categoria_pnl": "Mantenimiento" }
        ],
        "reputacion": -2,
        "feedback": "Forzar el vehículo gripa el motor por completo. Lo que era una avería leve se convierte en una factura de taller desorbitada."
      },
      {
        "movimientos": [
          { "dinero": -150, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -7,
        "feedback": "Dejar plantados a los clientes sin explicaciones destruye la confianza comercial y provoca cancelaciones de pedidos."
      }
    ]
  },
  {
    "id": 480,
    "formato": "whatsapp",
    "remitente": "Gestoría (Asesora Elena)",
    "estado": "en línea",
    "mensajes": [
      { "emisor": "remitente", "texto": "Hola. Recordatorio urgente: hoy acaba el plazo para presentar el modelo del IVA trimestral.", "hora": "12:00" },
      { "emisor": "remitente", "texto": "Aún no me has mandado las facturas emitidas de este último mes. Si no las presentamos antes de las 20:00 habrá recargo.", "hora": "12:01" }
    ],
    "opciones": [
      "Dejar todo lo que estés haciendo, recopilar las facturas inmediatamente y enviárselas a Elena por correo (servicio urgente 30€).",
      "Decirle a la gestora que invente una cifra aproximada para salir del paso y ya rectificaremos la liquidación el mes que viene.",
      "Ignorar el mensaje y mandar los papeles la semana que viene cuando tengas un hueco libre."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -30, "categoria_pnl": "Asesoría" }
        ],
        "reputacion": 1,
        "feedback": "Presentación a tiempo. Evitas sanciones fiscales y mantienes la contabilidad del negocio perfectamente al día."
      },
      {
        "movimientos": [
          { "dinero": -300, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -3,
        "feedback": "Hacienda detecta el descuadre en la declaración complementaria e impone una sanción por presentación de datos incorrectos."
      },
      {
        "movimientos": [
          { "dinero": -150, "categoria_pnl": "Impuestos" }
        ],
        "reputacion": -1,
        "feedback": "La presentación fuera de plazo genera automáticamente un recargo del 5% e intereses de demora sobre el impuesto a pagar."
      }
    ]
  },
  {
    "id": 481,
    "formato": "whatsapp",
    "remitente": "Andrés (Mantenimiento)",
    "estado": "escribiendo...",
    "mensajes": [
      { "emisor": "remitente", "texto": "He revisado el sistema de aire acondicionado del local. El compresor está al límite y cualquier día de estos se quema.", "hora": "17:10" },
      { "emisor": "remitente", "texto": "Cambiarlo ahora cuesta 250€. Si esperamos a que rompa del todo, habrá que cambiar toda la máquina y serán 800€.", "hora": "17:11" }
    ],
    "opciones": [
      "Aprobar la sustitución preventiva del compresor por 250€ inmediatamente.",
      "Aguantar con la máquina tal cual hasta que pase la temporada de calor para no gastar liquidez ahora.",
      "Desconectar el aire acondicionado y poner abanicos de papel promocionales para la clientela."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -250, "categoria_pnl": "Mantenimiento" }
        ],
        "reputacion": 2,
        "feedback": "Mantenimiento preventivo inteligente. Ahorras un gran desembolso futuro y aseguras la climatización de la tienda."
      },
      {
        "movimientos": [
          { "dinero": -800, "categoria_pnl": "Mantenimiento" }
        ],
        "reputacion": -2,
        "feedback": "El aire colapsa en pleno día de ola de calor. Te ves obligado a cambiar la máquina entera a precio de urgencia."
      },
      {
        "movimientos": [
          { "dinero": -100, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -6,
        "feedback": "El calor insoportable en el local hace que las visitas duren segundos. Las ventas caen por la mala experiencia de compra."
      }
    ]
  },
  {
    "id": 482,
    "formato": "whatsapp",
    "remitente": "Laura (Caja)",
    "estado": "en línea",
    "mensajes": [
      { "emisor": "remitente", "texto": "El datáfono principal ha dejado de funcionar de golpe, da error de conexión de red constante.", "hora": "11:40" },
      { "emisor": "remitente", "texto": "Hay cola de gente para pagar y el 80% quiere pagar con tarjeta. ¿Qué hacemos?", "hora": "11:41" }
    ],
    "opciones": [
      "Activar de inmediato el TPV móvil de respaldo en el teléfono del local y llamar al soporte del banco.",
      "Decir a los clientes en la cola que solo aceptáis efectivo y que el que no lleve se vaya a un cajero.",
      "Anotar los datos de las tarjetas en un papel para pasarlas manualmente por la tarde cuando vuelva la red."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 4,
        "feedback": "Respuesta operativa perfecta. El sistema secundario salva el momento de cobro sin perder ni una sola venta."
      },
      {
        "movimientos": [
          { "dinero": -200, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -5,
        "feedback": "La mitad de la cola abandona los productos en los mostradores y se marcha enfadada por las molestias."
      },
      {
        "movimientos": [
          { "dinero": -500, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -7,
        "feedback": "Apuntar datos de tarjetas viola la normativa de seguridad bancaria. Un cliente sospecha, te denuncia y la entidad liquidadora te sanciona."
      }
    ]
  },
  {
    "id": 483,
    "formato": "whatsapp",
    "remitente": "Mario (Comercial)",
    "estado": "escribiendo...",
    "mensajes": [
      { "emisor": "remitente", "texto": "Tengo delante al responsable de compras de una empresa local. Quieren hacernos un pedido enorme de 1.500€.", "hora": "18:05" },
      { "emisor": "remitente", "texto": "Pero exige un 25% de descuento por volumen para cerrar el contrato ahora mismo. ¿Aceptamos?", "hora": "18:06" }
    ],
    "opciones": [
      "Negociar un 15% de descuento máximo asegurando un margen sano para nuestro negocio.",
      "Aceptar el 25% de descuento sin hacer números con tal de inflar la cifra total de facturación.",
      "Rechazar frontalmente cualquier descuento y exigir que paguen la tarifa oficial completa."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 1275, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 4,
        "feedback": "Negociación brillante. Cierras una gran venta garantizando un margen de beneficio positivo para la empresa."
      },
      {
        "movimientos": [
          { "dinero": 1125, "categoria_pnl": "Operativos (Ventas)" },
          { "dinero": -200, "categoria_pnl": "Descuentos" }
        ],
        "reputacion": 1,
        "feedback": "Cierras la venta pero regalas casi todo el margen comercial. Trabajas mucho para apenas obtener beneficio neto."
      },
      {
        "movimientos": [],
        "reputacion": -2,
        "feedback": "La rigidez inflexibilidad hace que la empresa cliente se vaya a la competencia, perdiendo una gran oportunidad."
      }
    ]
  },
  {
    "id": 484,
    "formato": "whatsapp",
    "remitente": "Asociación de Comercio",
    "estado": "en línea",
    "mensajes": [
      { "emisor": "remitente", "texto": "Estimado asociado: Estamos organizando el catálogo impreso navideño que se repartirá en 20.000 hogares del distrito.", "hora": "10:00" },
      { "emisor": "remitente", "texto": "El espacio destacado para tu local cuesta 120€. Necesitamos confirmación e imagen antes de las 14:00.", "hora": "10:01" }
    ],
    "opciones": [
      "Contratar el espacio (120€) y enviar una foto profesional de tu producto estrella con una oferta atractiva.",
      "Dejar pasar la oportunidad por considerar que la publicidad en papel ya no funciona.",
      "Pedir aparecer gratis argumentando que tu tienda es la más emblemática del barrio."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -120, "categoria_pnl": "Publicidad" },
          { "dinero": 380, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 4,
        "feedback": "La campaña física buzoneada atrae a cientos de vecinos durante las fiestas, disparando tus ventas locales."
      },
      {
        "movimientos": [],
        "reputacion": 0,
        "feedback": "Ahorras el desembolso inicial, pero tu competencia directa se queda con toda la visibilidad del catálogo de barrio."
      },
      {
        "movimientos": [],
        "reputacion": -3,
        "feedback": "La asociación rechaza tu petición por prepotente y genera cierta tirantez con los comerciantes organizadores."
      }
    ]
  },
  {
    "id": 485,
    "formato": "whatsapp",
    "remitente": "Ana (Almacén)",
    "estado": "en línea",
    "mensajes": [
      { "emisor": "remitente", "texto": "Acaba de llegar la agencia de transportes con 4 palés de mercancía, pero la mitad de las cajas vienen golpeadas y mojadas.", "hora": "09:45" },
      { "emisor": "remitente", "texto": "El transportista dice que firme el albarán rápido porque lleva prisa y que luego reclame si eso.", "hora": "09:46" }
    ],
    "opciones": [
      "Indicar a Ana que revise el contenido afectado, haga fotos y firme anotando los daños específicos en el albarán.",
      "Firmar el albarán de entrega sin anotar daños para no hacer perder tiempo al transportista.",
      "Rechazar el envío completo e insultar al transportista por el mal trato a la carga."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 150, "categoria_pnl": "Ingresos financieros" }
        ],
        "reputacion": 2,
        "feedback": "Procedimiento perfecto. La agencia de seguros del transporte asume los daños y te reembolsa el valor total del producto roto."
      },
      {
        "movimientos": [
          { "dinero": -200, "categoria_pnl": "Compras/Materiales" }
        ],
        "reputacion": 0,
        "feedback": "Al firmar 'conforme' sin reservas, el seguro del transporte rechaza la reclamación y te te tragas tú el coste de la mercancía rota."
      },
      {
        "movimientos": [
          { "dinero": -100, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -4,
        "feedback": "La agencia de transportes abre una incidencia por maltrato a su personal y se niega a traerte entregas urgentes los siguientes meses."
      }
    ]
  },
  {
    "id": 486,
    "formato": "whatsapp",
    "remitente": "Elena (Dependienta)",
    "estado": "escribiendo...",
    "mensajes": [
      { "emisor": "remitente", "texto": "Tengo en la tienda a una inspectora de Consumo solicitando el libro oficial de hojas de reclamaciones.", "hora": "12:30" },
      { "emisor": "remitente", "texto": "Sé que lo guardamos en alguna parte al hacer la mudanza, pero no lo encuentro por ningún sitio. ¿Qué hago?", "hora": "12:31" }
    ],
    "opciones": [
      "Dar la cara, explicar la situación a la inspectora e ir de inmediato a comprar un libro oficial a la estantería técnica (15€).",
      "Decirle a Elena que le diga a la inspectora que el libro 'se lo ha llevado el dueño a su casa para revisarlo'.",
      "Decir a la inspectora que en este comercio no se ponen reclamaciones porque todos los clientes están muy contentos."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -15, "categoria_pnl": "Suministros" }
        ],
        "reputacion": 2,
        "feedback": "La agilidad al reponer el libro y tu actitud honesta evita una sanción grave por carecer de documentación obligatoria."
      },
      {
        "movimientos": [
          { "dinero": -400, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -4,
        "feedback": "Sacar el libro de reclamaciones del local comercial es una infracción de consumo. Te cae un expediente sancionador."
      },
      {
        "movimientos": [
          { "dinero": -800, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -6,
        "feedback": "Negar la existencia del documento obligatorio desata una inspección completa de todo el negocio con multa severa."
      }
    ]
  },
  {
    "id": 487,
    "formato": "whatsapp",
    "remitente": "Propietario del Local",
    "estado": "en línea",
    "mensajes": [
      { "emisor": "remitente", "texto": "Buenas. Te escribo porque este mes el IPC ha subido un 4% y voy a actualizar la cuota del alquiler según el contrato.", "hora": "16:00" },
      { "emisor": "remitente", "texto": "A partir del mes que viene el recibo pasa de 1.000€ a 1.040€. Te enviaré la adenda por correo.", "hora": "16:01" }
    ],
    "opciones": [
      "Revisar la cláusula de actualización en el contrato original y aceptar la subida legal de 40€.",
      "Negarte rotundamente a pagar un euro más amenazando con dejar el local a final de mes.",
      "Proponerle un pago en dinero negro de 30€ al mes para evitar actualizar la factura oficial."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -40, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 1,
        "feedback": "Proceso ajustado a derecho y al contrato firmado. Mantienes una relación excelente con el arrendador de tu local."
      },
      {
        "movimientos": [
          { "dinero": -300, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -3,
        "feedback": "El propietario inicia trámites legales de resolución de contrato por incumplimiento. El desgaste y los costes legales te perjudican."
      },
      {
        "movimientos": [
          { "dinero": -600, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -7,
        "feedback": "El propietario rechaza chanchullos contables. Se rompe la confianza y te exige el cumplimiento estricto con abogado."
      }
    ]
  },
  {
    "id": 488,
    "formato": "whatsapp",
    "remitente": "Javier (Encargado)",
    "estado": "escribiendo...",
    "mensajes": [
      { "emisor": "remitente", "texto": "Se ha caído internet en todo el barrio por un corte de fibra de la operadora.", "hora": "15:30" },
      { "emisor": "remitente", "texto": "Nos quedamos sin poder usar el sistema informático ni mandar datos de facturación durante 3 horas. ¿Qué hacemos?", "hora": "15:31" }
    ],
    "opciones": [
      "Compartir datos móviles desde el teléfono de la empresa para mantener la caja activa y reclamar la incidencia a la compañía.",
      "Cerrar la tienda durante las 3 horas y mandar a los empleados a tomar algo hasta que vuelva la conexión.",
      "Trabajar en papel y no emitir facturas ni cobros exactos hasta que vuelva el servicio."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 50, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 3,
        "feedback": "Solución técnica rápida. Continúas facturando normalmente y la operadora te indemniza con un abono por el corte sufrido."
      },
      {
        "movimientos": [
          { "dinero": -250, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -2,
        "feedback": "Cerrar en horario comercial provoca pérdidas directas de ingresos e imagen de poca seriedad ante la clientela."
      },
      {
        "movimientos": [
          { "dinero": -100, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -4,
        "feedback": "Los errores de cálculo al cobrar a mano generan descuadres de caja y desconfianza en los clientes."
      }
    ]
  },
  {
    "id": 489,
    "formato": "whatsapp",
    "remitente": "Sara (Redes Sociales)",
    "estado": "en línea",
    "mensajes": [
      { "emisor": "remitente", "texto": "¡Hola! Una marca local muy conocida nos propone hacer un sorteo conjunto en Instagram este viernes.", "hora": "13:15" },
      { "emisor": "remitente", "texto": "Nos piden poner un lote de productos valorado en 40€. ¿Aceptamos la colaboración?", "hora": "13:16" }
    ],
    "opciones": [
      "Aceptar la colaboración, aportar el lote de productos (40€) y planificar la promoción conjunta.",
      "Rechazar la propuesta alegando que no quieres regalar producto a cambio de seguidores.",
      "Exigir a la otra marca que pague ellos todo el premio y que encima nos mencionen gratis."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -40, "categoria_pnl": "Publicidad" },
          { "dinero": 220, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 5,
        "feedback": "El sorteo cruzado se viraliza en el barrio. Ganas más de 500 seguidores locales y aumentas las ventas en tienda."
      },
      {
        "movimientos": [],
        "reputacion": 0,
        "feedback": "No gastas inventario, pero te pierdes un escaparate digital conjunto de muy alto impacto local."
      },
      {
        "movimientos": [],
        "reputacion": -4,
        "feedback": "La otra marca califica tu propuesta de abusiva y comparte la captura de pantalla en redes mofándose de tu actitud."
      }
    ]
  },
  {
    "id": 490,
    "formato": "whatsapp",
    "remitente": "Compañía Eléctrica",
    "estado": "en línea",
    "mensajes": [
      { "emisor": "remitente", "texto": "Aviso de facturación: Se ha detectado una anomalía en su contador y se procederá al ajuste por lecturas estimadas.", "hora": "08:00" },
      { "emisor": "remitente", "texto": "El importe regularizado a cobrar este mes asciende a 380€. Puede solicitar revisión técnica.", "hora": "08:01" }
    ],
    "opciones": [
      "Solicitar inmediatamente una revisión del contador con un técnico autorizado y reclamar el ajuste estimado.",
      "Pagar el recibo de 380€ sin comprobar si la lectura estimada corresponde al consumo real del local.",
      "Devolver el recibo bancario de inmediato y negarte a hablar con la distribuidora."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 140, "categoria_pnl": "Suministros" }
        ],
        "reputacion": 2,
        "feedback": "La auditoría demuestra un error de lectura por parte de la eléctrica. Te devuelven 140€ cobrados de más."
      },
      {
        "movimientos": [
          { "dinero": -140, "categoria_pnl": "Suministros" }
        ],
        "reputacion": 0,
        "feedback": "La pereza administrativa hace que regales dinero a la comercializadora por una estimación inflada."
      },
      {
        "movimientos": [
          { "dinero": -100, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -3,
        "feedback": "Devolver el recibo sin reclamación formal provoca un corte imprevisto de luz y gastos de reconexión."
      }
    ]
  },
  {
    "id": 491,
    "formato": "whatsapp",
    "remitente": "Tomás (Seguridad)",
    "estado": "escribiendo...",
    "mensajes": [
      { "emisor": "remitente", "texto": "Acabo de pillar a un sospechoso intentando llevarse tres artículos escondidos en el abrigo.", "hora": "19:10" },
      { "emisor": "remitente", "texto": "Ha devuelto la mercancía al verse descubierto pero se pone chulo. ¿Llamo a la policía o le dejo ir?", "hora": "19:11" }
    ],
    "opciones": [
      "Llamar a la policía de barrio para interponer la denuncia correspondiente formalizando el parte.",
      "Montar un escándalo en medio de la tienda reteniendo al cliente por la fuerza antes de que llegue la patrulla.",
      "Dejarle marchar sin más consecuencias pidiéndole amablemente que no vuelva por aquí."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 4,
        "feedback": "Intervención impecable y legal. La policía identifica al hurtador habitual y la tienda gana seguridad."
      },
      {
        "movimientos": [
          { "dinero": -300, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -6,
        "feedback": "Retener físicamente a alguien sin atribución legal puede constituir delito de detención ilegal. Acabas denunciado tú."
      },
      {
        "movimientos": [
          { "dinero": -100, "categoria_pnl": "Compras/Materiales" }
        ],
        "reputacion": -2,
        "feedback": "Impunidad total. Al ver que no hay consecuencias, el ladrón vuelve días después con compinches a robar más."
      }
    ]
  },
  {
    "id": 492,
    "formato": "whatsapp",
    "remitente": "Marta (Almacén)",
    "estado": "en línea",
    "mensajes": [
      { "emisor": "remitente", "texto": "Hemos recibido una partida de cajas de cartón para empaquetar pedidos, pero han mandado un tamaño equivocado por error del fabricante.", "hora": "11:05" },
      { "emisor": "remitente", "texto": "Si las devolvemos tardan 5 días. Si nos las quedamos nos ofrecen un 50% de descuento. ¿Qué prefieres?", "hora": "11:06" }
    ],
    "opciones": [
      "Aceptar el descuento del 50% (ahorro de 70€) y adaptar el embalaje para productos pequeños.",
      "Exigir la recogida y cambio inmediato por el tamaño correcto aunque paralice los envíos 5 días.",
      "Usar las cajas equivocadas a la fuerza rompiendo los extremos para empacar los artículos grandes."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 70, "categoria_pnl": "Suministros" }
        ],
        "reputacion": 2,
        "feedback": "Flexibilidad operativa. Ahorras costes de embalaje y aprovechas el material perfectamente."
      },
      {
        "movimientos": [
          { "dinero": -150, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -3,
        "feedback": "Paralizar las entregas provoca la queja de compradores online que esperaban su pedido esa misma semana."
      },
      {
        "movimientos": [
          { "dinero": -50, "categoria_pnl": "Compras/Materiales" }
        ],
        "reputacion": -7,
        "feedback": "Los paquetes mal cerrados llegan rotos a su destino, obligándote a abonar devoluciones y dañando tu reputación."
      }
    ]
  },
  {
    "id": 493,
    "formato": "whatsapp",
    "remitente": "Empresa de Limpieza",
    "estado": "en línea",
    "mensajes": [
      { "emisor": "remitente", "texto": "Estimado cliente: A partir del próximo mes aplicaremos un ajuste del 8% en la cuota del servicio de mantenimiento por subida de costes.", "hora": "16:40" },
      { "emisor": "remitente", "texto": "El servicio mensual pasará de 150€ a 162€. Quedamos a la espera de su conformidad.", "hora": "16:41" }
    ],
    "opciones": [
      "Aceptar la actualización de precios garantizando la continuidad de un servicio de calidad comprobada.",
      "Cancelar el contrato inmediatamente y pedir a los dependientes que limpien ellos el local tras su turno.",
      "Contratar a una persona sin contrato para que limpie en negro por la mitad de precio."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -12, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 1,
        "feedback": "Relación comercial estable. Mantienes el local en óptimas condiciones de higiene sin sobresaltos."
      },
      {
        "movimientos": [],
        "reputacion": -6,
        "feedback": "Los empleados se sienten degradados haciendo tareas fuera de su contrato. El clima laboral empeora rápidamente."
      },
      {
        "movimientos": [
          { "dinero": -2000, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -8,
        "feedback": "Una inspección de Trabajo detecta a la persona limpiando sin alta en la Seguridad Social. Multa desastrosa por empleo irregular."
      }
    ]
  },
  {
    "id": 494,
    "formato": "whatsapp",
    "remitente": "Hugo (Diseñador)",
    "estado": "escribiendo...",
    "mensajes": [
      { "emisor": "remitente", "texto": "Ya tengo listas las propuestas para los nuevos carteles promocionales de la fachada.", "hora": "12:10" },
      { "emisor": "remitente", "texto": "Imprimirlos en lona vinílica de alta calidad cuesta 100€. En papel normal impreso sale por 20€ pero dura dos semanas. ¿Qué elegimos?", "hora": "12:11" }
    ],
    "opciones": [
      "Invertir 100€ en la lona vinílica resistente para asegurar una presencia impecable durante meses.",
      "Imprimir en papel barato (20€) para ahorrar costes de publicidad a corto plazo.",
      "No poner ningún cartel en la fachada para evitar gastos de imprenta."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -100, "categoria_pnl": "Publicidad" }
        ],
        "reputacion": 4,
        "feedback": "Imagen corporativa profesional. La fachada luce atractiva y resistente al sol y la lluvia durante toda la campaña."
      },
      {
        "movimientos": [
          { "dinero": -20, "categoria_pnl": "Publicidad" }
        ],
        "reputacion": -3,
        "feedback": "El papel se arruga y se desteñirá a los pocos días con la humedad, dando una sensación de decadencia a la tienda."
      },
      {
        "movimientos": [],
        "reputacion": -1,
        "feedback": "Sin elementos de señalización exterior, la fachada pasa totalmente desapercibida para los transeúntes de la calle."
      }
    ]
  },
  {
    "id": 495,
    "formato": "whatsapp",
    "remitente": "Sofía (Caja)",
    "estado": "en línea",
    "mensajes": [
      { "emisor": "remitente", "texto": "Jefe, un cliente quiere llevarse un producto de 80€ pero se le ha olvidado la tarjeta en casa.", "hora": "17:15" },
      { "emisor": "remitente", "texto": "Dice que vive a dos calles, que se lo deje llevar y que pasa a pagarlo mañana a primera hora sin falta.", "hora": "17:16" }
    ],
    "opciones": [
      "Decirle con educación que no podemos entregar productos sin cobrar, pero que se lo guardamos en reserva hasta mañana.",
      "Dejarle llevar el producto fiado para no perder la venta ni caerle mal al cliente.",
      "Decirle a Sofía que le pida el DNI físico como empeño a cambio de dejarle salir con el producto."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 2,
        "feedback": "Gestión comercial correcta. El cliente entiende la norma del negocio, regresa al día siguiente con el dinero y completa la compra."
      },
      {
        "movimientos": [
          { "dinero": -80, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -2,
        "feedback": "El cliente no vuelve a aparecer por la tienda. Te quedas sin el producto y sin el dinero por confiarte a ciegas."
      },
      {
        "movimientos": [
          { "dinero": -200, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -6,
        "feedback": "Retener documentación personal como garantía es ilegal. El cliente se ofende, te denuncia ante Protección de Datos y te cae una sanción."
      }
    ]
  },
  {
    "id": 496,
    "formato": "whatsapp",
    "remitente": "Marcos (Mantenimiento)",
    "estado": "escribiendo...",
    "mensajes": [
      { "emisor": "remitente", "texto": "Hola. Acabo de revisar la persiana metálica del escaparate principal. El motor está haciendo un ruido terrible y se traba.", "hora": "08:10" },
      { "emisor": "remitente", "texto": "Si no le cambiamos el engranaje hoy (75€), se va a quedar atascada a medio abrir en cualquier momento.", "hora": "08:11" }
    ],
    "opciones": [
      "Aprobar la reparación inmediata del engranaje del motor por 75€.",
      "Decirle a Marcos que le eche un poco de aceite multiusos y que tiremos así hasta el mes que viene.",
      "Dejar la persiana levantada fija toda la noche para no forzar el motor y no gastar en arreglos."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -75, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 2,
        "feedback": "Mantenimiento preventivo ágil. Evitas que la tienda se quede bloqueada en plena hora punta de la mañana."
      },
      {
        "movimientos": [
          { "dinero": -250, "categoria_pnl": "Servicios" },
          { "dinero": -100, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -3,
        "feedback": "El motor colapsa dos días después a mitad de apertura. Tienes que pagar urgencias al cerrajero y pierdes dos horas de apertura."
      },
      {
        "movimientos": [
          { "dinero": -600, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -5,
        "feedback": "Dejar el local sin cierre de seguridad atrae a los vándalos. Rompen el cristal del escaparate por la noche para sustraer género."
      }
    ]
  },
  {
    "id": 497,
    "formato": "whatsapp",
    "remitente": "Laura (Asesora Laboral)",
    "estado": "en línea",
    "mensajes": [
      { "emisor": "remitente", "texto": "Buenos días. Te recuerdo que la semana que viene caduca el contrato temporal de 6 meses de David.", "hora": "10:30" },
      { "emisor": "remitente", "texto": "Tenemos que decidir si le hacemos indefinido o le liquidamos el finiquito correspondiente (120€).", "hora": "10:31" }
    ],
    "opciones": [
      "Hacerle contrato indefinido para consolidar su puesto y mantener la estabilidad en la plantilla.",
      "Finalizar el contrato, pagar la liquidación de 120€ y contratar a otra persona desde cero con periodo de prueba.",
      "Encadenar otro contrato temporal ilegal cambiando la categoría profesional en los papeles para ahorrar costes."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [],
        "reputacion": 4,
        "feedback": "David se siente valorado, aumenta su productividad y mantienes a un empleado que ya conoce perfectamente la operativa del local."
      },
      {
        "movimientos": [
          { "dinero": -120, "categoria_pnl": "Personal y SS" }
        ],
        "reputacion": -2,
        "feedback": "Gastas en la liquidación y pierdes tiempo formando a un empleado nuevo que comete errores de principiante en sus primeras semanas."
      },
      {
        "movimientos": [
          { "dinero": -1500, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -7,
        "feedback": "Fraude en la contratación temporal. Inspección de Trabajo detecta el encadenamiento irregular y te convierte el contrato a indefinido tras una multa."
      }
    ]
  },
  {
    "id": 498,
    "formato": "whatsapp",
    "remitente": "Pablo (Almacén)",
    "estado": "en línea",
    "mensajes": [
      { "emisor": "remitente", "texto": "Jefe, ha venido el técnico a traer las etiquetas de precio nuevas. Nos cobra 45€ por el lote completo.", "hora": "11:50" },
      { "emisor": "remitente", "texto": "Pero dice que si le pagamos en efectivo en mano sin factura formal nos lo deja en 30€. ¿Qué le digo?", "hora": "11:51" }
    ],
    "opciones": [
      "Exigir el pago con factura oficial completa (45€) para poder deducir el gasto de forma transparente.",
      "Pagar los 30€ en efectivo sin factura para ahorrarte 15€ de caja al momento.",
      "Rechazar los productos e imprimir las etiquetas con la impresora casera de la oficina."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -45, "categoria_pnl": "Suministros" }
        ],
        "reputacion": 2,
        "feedback": "Contabilidad impecable. Registras la factura como gasto deducible real y mantienes el negocio sin riesgos con Hacienda."
      },
      {
        "movimientos": [
          { "dinero": -30, "categoria_pnl": "Suministros" }
        ],
        "reputacion": -4,
        "feedback": "Operar sin factura descuadra el control contable de la caja y te expone a problemas si hay un requerimiento tributario."
      },
      {
        "movimientos": [
          { "dinero": -10, "categoria_pnl": "Suministros" }
        ],
        "reputacion": -3,
        "feedback": "Las etiquetas caseras se borran con el roce, la tinta mancha el producto y dan un aspecto poco profesional en las estanterías."
      }
    ]
  },
  {
    "id": 499,
    "formato": "whatsapp",
    "remitente": "Elena (Dependienta)",
    "estado": "escribiendo...",
    "mensajes": [
      { "emisor": "remitente", "texto": "Jefa, la tienda de al lado ha empezado a ofrecer envoltorio de regalo personalizado de lujo por 2€ extra por compra.", "hora": "16:20" },
      { "emisor": "remitente", "texto": "Muchos de nuestros clientes nos están preguntando si nosotros también tenemos algo parecido. ¿Ponemos el servicio?", "hora": "16:21" }
    ],
    "opciones": [
      "Comprar un kit de cajas y cintas de regalo de alta calidad (50€) y ofrecer el servicio de empaquetado a 2€.",
      "Ofrecer envoltorio de regalo gratis usando el papel de embalar genérico con el logo de la tienda.",
      "Decir a los clientes que no hacemos envoltorios, que si quieren regalar lo metan ellos en una bolsa en casa."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -50, "categoria_pnl": "Suministros" },
          { "dinero": 120, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 4,
        "feedback": "Servicio añadido rentable. Cubres la inversión rápidamente y generas un margen extra muy positivo con las compras para regalo."
      },
      {
        "movimientos": [
          { "dinero": -20, "categoria_pnl": "Suministros" }
        ],
        "reputacion": 2,
        "feedback": "Buen detalle de atención comercial, aunque asumes el coste del papel sin generar una vía adicional de ingresos."
      },
      {
        "movimientos": [
          { "dinero": -80, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -4,
        "feedback": "Negativa poco comercial. Varios compradores de regalos prefieren cruzar la calle e irse a la competencia que sí les da el paquete listo."
      }
    ]
  },
  {
    "id": 500,
    "formato": "whatsapp",
    "remitente": "Carlos (Encargado)",
    "estado": "en línea",
    "mensajes": [
      { "emisor": "remitente", "texto": "Hola. Acaba de llamar la empresa de extintores diciendo que les toca la inspección anual obligatoria.", "hora": "12:15" },
      { "emisor": "remitente", "texto": "Cobran 60€ por la revisión y el sellado de los 3 extintores del local. ¿Les doy cita para mañana?", "hora": "12:16" }
    ],
    "opciones": [
      "Autorizar la revisión oficial por 60€ y pedir que traigan el certificado de retimbrado para la carpeta del local.",
      "Decirles que no vengan, que los extintores marcan la aguja en verde y no hace falta gastar dinero este año.",
      "Descolgar los extintores viejos y comprar uno pequeño de coche en la gasolinera para ponerlo en el mostrador."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -60, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 2,
        "feedback": "Seguridad y normativa al día. Obtienes la certificación oficial requerida ante cualquier inspección municipal o del seguro."
      },
      {
        "movimientos": [
          { "dinero": -400, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -4,
        "feedback": "Protección Civil realiza una comprobación rutinaria, detecta las etiquetas de revisión caducadas y te aplica una multa administrativa."
      },
      {
        "movimientos": [
          { "dinero": -15, "categoria_pnl": "Suministros" },
          { "dinero": -800, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -8,
        "feedback": "El equipo portátil no cumple la tasa de extinción exigida por metros cuadrados. Sanción muy grave por incumplimiento del plan de incendios."
      }
    ]
  },
  {
    "id": 501,
    "formato": "whatsapp",
    "remitente": "Hugo (Logística)",
    "estado": "en línea",
    "mensajes": [
      { "emisor": "remitente", "texto": "Jefe, ha venido la empresa de recogida de aceite y envases usados a renovar el contrato anual.", "hora": "10:05" },
      { "emisor": "remitente", "texto": "Son 80€ al año por la retirada periódica y el certificado ecológico. Si no lo renovamos se llevan los contenedores.", "hora": "10:06" }
    ],
    "opciones": [
      "Aprobar el pago de 80€ para mantener el contrato de gestión de residuos y disponer del certificado exigido.",
      "Cancelar el servicio e instruir al personal para tirar los restos a los contenedores públicos de la calle.",
      "Guardar los residuos en garrafas acumuladas en el almacén sin pagar a nadie para ver qué hacemos más adelante."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -80, "categoria_pnl": "Servicios" }
        ],
        "reputacion": 3,
        "feedback": "Gestión ambiental correcta. Mantienes el local alineado con la normativa de gestión de residuos comerciales."
      },
      {
        "movimientos": [
          { "dinero": -500, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -6,
        "feedback": "Vertido no autorizado en la vía pública. La policía local identifica el origen de los envases y te sanciona severamente."
      },
      {
        "movimientos": [],
        "reputacion": -4,
        "feedback": "Acumular residuos líquidos en el almacén provoca malos olores, roza el riesgo sanitario y resta espacio operativo útil."
      }
    ]
  },
  {
    "id": 502,
    "formato": "whatsapp",
    "remitente": "Lucía (Ventas)",
    "estado": "escribiendo...",
    "mensajes": [
      { "emisor": "remitente", "texto": "Una clienta acaba de pedirnos un presupuesto especial para un lote de regalos de empresa de 600€.", "hora": "15:40" },
      { "emisor": "remitente", "texto": "Dice que si le cobramos 500€ en efectivo sin ticket nos cierra el trato de inmediato.", "hora": "15:41" }
    ],
    "opciones": [
      "Rechazar la propuesta sin ticket y mantener el presupuesto legal con su factura correspondiente y descuento formal del 5%.",
      "Aceptar la propuesta sin ticket cobrando los 500€ en mano para no perder la venta.",
      "Decirle que le cobramos 600€ sin ticket pero que le regalamos un producto extra de la tienda."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": 570, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": 4,
        "feedback": "La clienta valora la seriedad de la factura oficial para su deducción de empresa y acepta la contraoferta formalizada."
      },
      {
        "movimientos": [
          { "dinero": 500, "categoria_pnl": "Operativos (Ventas)" },
          { "dinero": -1000, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -8,
        "feedback": "Inspección tributaria realiza un arqueo de stock e identifica la falta de emisión de la transacción. Multa cuantiosa por fraude fiscal."
      },
      {
        "movimientos": [],
        "reputacion": -5,
        "feedback": "La propuesta confusa hace que la clienta desconfíe de la seriedad del negocio y se marche sin realizar la compra."
      }
    ]
  },
  {
    "id": 503,
    "formato": "whatsapp",
    "remitente": "David (Dependiente)",
    "estado": "en línea",
    "mensajes": [
      { "emisor": "remitente", "texto": "Jefe, se ha fundido uno de los focos principales de luz del escaparate. La zona de la izquierda se queda casi a oscuras por la tarde.", "hora": "18:00" },
      { "emisor": "remitente", "texto": "Comprar la bombilla LED de repuesto para esa lámpara cuesta 20€. ¿La compro al salir?", "hora": "18:01" }
    ],
    "opciones": [
      "Decirle a David que compre la bombilla de repuesto (20€) y la instale mañana por la mañana.",
      "Dejar el foco fundido y mover los productos de esa zona al centro para no gastar en bombillas.",
      "Quitar el foco entero y dejar el cable suelto colgando del techo hasta que hagamos reformas."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -20, "categoria_pnl": "Suministros" }
        ],
        "reputacion": 2,
        "feedback": "Respuesta rápida. El escaparate vuelve a lucir perfectamente iluminado en la franja horaria de mayor tránsito."
      },
      {
        "movimientos": [
          { "dinero": -50, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -2,
        "feedback": "Un escaparate parcialmente a oscuras transmite sensación de descuido y reduce la atracción visual del comercio."
      },
      {
        "movimientos": [
          { "dinero": -150, "categoria_pnl": "Otros Gastos" }
        ],
        "reputacion": -5,
        "feedback": "Dejar cables expuestos incumple la normativa de seguridad de instalaciones eléctricas y causa un requerimiento preventivo."
      }
    ]
  },
  {
    "id": 504,
    "formato": "whatsapp",
    "remitente": "Sonia (Limpieza)",
    "estado": "escribiendo...",
    "mensajes": [
      { "emisor": "remitente", "texto": "Hola. Se nos han terminado los productos desinfectantes concentrados y las bolsas de basura pesadas del almacén.", "hora": "08:45" },
      { "emisor": "remitente", "texto": "El pedido estándar de reposición para el mes en la droguería industrial son 35€. ¿Paso el encargo?", "hora": "08:46" }
    ],
    "opciones": [
      "Aprobar la compra del material de limpieza e higiene por 35€.",
      "Decirle que compre solo un bote de fregasuelos de 1€ en el supermercado y que reutilice las bolsas de plástico de los clientes.",
      "Decirle que limpie solo con agua caliente durante un par de semanas para ahorrar costes."
    ],
    "correcta": 0,
    "impactos": [
      {
        "movimientos": [
          { "dinero": -35, "categoria_pnl": "Suministros" }
        ],
        "reputacion": 2,
        "feedback": "Insumos necesarios. Garantizas la higiene y desinfección adecuada de las instalaciones cara al público."
      },
      {
        "movimientos": [
          { "dinero": -1, "categoria_pnl": "Suministros" }
        ],
        "reputacion": -3,
        "feedback": "Las bolsas endebles se rompen al sacar la basura y manchan la acera del local, dando una imagen lamentable."
      },
      {
        "movimientos": [
          { "dinero": -100, "categoria_pnl": "Operativos (Ventas)" }
        ],
        "reputacion": -6,
        "feedback": "La falta de desinfección provoca malos olores en el baño y la zona de caja. Los clientes notan la falta de limpieza y se quejan."
      }
    ]
  }
];


