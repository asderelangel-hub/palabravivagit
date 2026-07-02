# Hero discipline — leer antes de tocar nada

Esta carpeta está **deliberadamente vacía**. No hay un `Hero.astro` genérico
porque el hero es el lugar donde el sitio gana o pierde su identidad.
Si poneo un template acá, todos los clientes terminan con el mismo hero
(la #1 señal de sitio AI-generated).

## Reglas duras

1. **Cada cliente recibe un hero diseñado a medida.** No copiar de otro cliente.
2. **Foto del cliente, no stock.** Mínimo iPhone en su local/taller/equipo.
   - Si el cliente no tiene fotos: programá una sesión rápida (1-2 horas) o
     pedile que mande 5-10 fotos antes de empezar a construir.
   - Si literalmente no se puede: usar tipografía + color a pantalla completa
     antes que usar Unsplash.
3. **El hero está restringido al ABOVE-THE-FOLD.** No te excedas — debajo
   viene la librería modular.
4. **Pinear copy del brief**, no inventar genérico. Usar números/años/
   specifics del cliente (ej. "61 años fabricando letreros" > "Calidad
   profesional desde siempre").

## Cuatro arquetipos de partida (inspiración, NO templates)

Elegí cuál encaja con la personalidad del cliente. Cada uno se construye
desde cero, mirando estas referencias.

### Arquetipo 1 — Visual dominante
```
┌──────────────────────────┐
│                          │
│   FOTO CLIENTE 100%      │
│   (workshop, equipo)     │
│                          │
│   ▌Headline encima       │
│    botón                 │
└──────────────────────────┘
```
- Foto del local/taller/equipo ocupando todo el viewport
- Headline encima con backdrop sutil (gradient bottom o caja)
- 1 CTA prominente
- **Para:** gastronomía, retail visual, productos con foto-protagonista

### Arquetipo 2 — Split asimétrico
```
┌───────────────┬──────────┐
│ HEADLINE      │  FOTO    │
│ GRANDE        │  CLIENTE │
│               │          │
│ subtítulo     │          │
│ [CTA]         │          │
└───────────────┴──────────┘
```
- 60/40 o 65/35, NO 50/50 (la asimetría es la clave)
- Texto a la izquierda con headline display
- Foto del cliente/producto a la derecha
- 1-2 CTAs (primario + secundario)
- **Para:** servicios profesionales, B2B, consultorías

### Arquetipo 3 — Editorial
```
┌──────────────────────────┐
│                          │
│  HEADLINE                │
│  ENORME EN                │
│  3 LÍNEAS                │
│                          │
│  [foto pequeña]  ─→     │
└──────────────────────────┘
```
- Solo tipografía display a tamaño gigante en mobile y desktop
- Subtítulo de soporte
- Foto pequeña abajo a la derecha (referencia visual mínima)
- **Para:** servicios premium, estudios creativos, marcas con voz fuerte

### Arquetipo 4 — Industrial
```
┌──────────────────────────┐
│  FOTO B/N FONDO          │
│  ╔════════════════╗       │
│  ║ HEADLINE en    ║       │
│  ║ color brand    ║       │
│  ╚════════════════╝       │
│                          │
└──────────────────────────┘
```
- Foto de fondo en B/N (o duotono) tono industrial
- Headline en color brand fuerte (rojo/amarillo) encima de la foto
- Tipografía con peso, posiblemente condensada
- **Para:** fabricación, talleres, industrial, construcción

## Workflow sugerido

1. Mirá el brief del cliente y elegí arquetipo
2. Creá `Hero.astro` en esta carpeta
3. Usá los tokens del cliente (vars CSS `--color-primary`, `--font-display`, etc)
4. Mostrá el resultado al cliente ANTES de seguir con el resto del sitio.
   Si no aprueba el hero, no avances — todo se construye alrededor.

## Anti-AI red flags en el hero

Si tu hero tiene cualquiera de estas cosas, rehacelo:

- ❌ Imagen de Unsplash/stock
- ❌ Headline tipo "Soluciones profesionales para tu negocio"
- ❌ Fondo con degradado índigo→violeta
- ❌ Layout split centrado 50/50 sin diferenciación
- ❌ CTA que dice "Comenzar" o "Empezar ahora" sin contexto
- ❌ Icono Heroicon monoline genérico
