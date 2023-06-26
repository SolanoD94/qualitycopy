import { useId } from 'react'

import { Container } from '@/components/Container'

const features = [
  {
    name: 'Workforce Pro WF-C579R',
    price: '$16,659',
    description:
      'Equipo compacto para mejorar la productividad - Diseño compacto gracias al Sistema de Bolsas de Tinta Reemplazables (RIPS) para una estación de trabajo eficiente y optimizada.',
    video:
      'https://video.wixstatic.com/video/944744_43db5f5bec8a40a3bae748fe4d6df8b5/720p/mp4/file.mp4',
  },
  {
    name: 'Multifuncional EPSON L3210',
    price: '$4,838',
    description:
      'La Impresora multifuncional 3 en 1 Epson EcoTank L3210  ofrece a las familias, estudiantes y profesionales un costo de impresión ultra bajo, que te permite imprimir hasta  4.500 páginas en negro o  7.500 páginas a color con cada juego de botellas de repuesto.',
    video:""  
  },
  {
    name: 'Plotter Epson T3170',
    price: '$16,096',
    description:
      'Acepta Rollo de papel de 60cm (24 Pulg). Plotter a COLOR de hasta 60cm de Ancho. Ideal para Planos Lineales, Texto y Foto. Corta el plano automáticamente. Acepta papel en rollo y hojas hasta 11x17 pulgadas. Charola para personalizar sobres y folders.',
    video:
      'https://video.wixstatic.com/video/944744_4baeab29477f48d7a17d9c51e988445a/360p/mp4/file.mp4',
  },
  {
    name: 'Multifuncional EcoTank L15150',
    price: '$25,793',
    description:
      'Multifuncional Doble Cara. Capacidad de hasta 500 hojas en las dos bandejas frontales y botellas de reemplazo de tinta que permiten imprimir hasta 7.500 páginas en negro y hasta 6.000 páginas a color. Cuenta con la tecnología sin calor PrecisionCore Heat-Free Technology™.',
    video:
      'https://video.wixstatic.com/video/944744_ae3755c03b514a5fbff58cc50dcfd0a4/360p/mp4/file.mp4',
  },
  {
    name: 'Plotter Epson 3170X',
    price: '$55,994',
    description:
      'Plotter de escritorio de 24 pulgadas, de alta velocidad y con sistema de tanque de tinta. Resolución Máxima de Impresión: 2400ppp x 1200ppp. Tipo de Tinta: Botellas de tinta Epson T49H recargables. 4 colores (C, M, Y, K)',
    video:
      'https://video.wixstatic.com/video/944744_3e58b0a1a42c4fd492cdc7d70c59a4d6/720p/mp4/file.mp4',
  },
  {
    name: 'Tintas Originales Ecotank',
    price: 'desde $194',
    description:
      'Las tintas originales Epson brindan resultados consistentes de alta calidad, lo que ayuda a evitar la decoloración y crea documentos nítidos y fotos impresionantes. Recarga de tinta es simple y sin complicaciones.',
    video: 'https://www.youtube.com/embed/zbybcFd3Tcc',
  },
]
export function SecondaryFeatures() {
  return (
    <section
      id="empresas"
      aria-label="Features for building a portfolio"
      className="py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-gray-900">
            Línea para Negocios.
          </h2>
          <p className="my-2 text-lg text-gray-600">
            Baja costos sin afectar tu productividad de impresión en la oficina.
          </p>
          <a href="#" className="font-medium text-blue-800 hover:text-blue-500">
            Ir a Tienda Epson
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
        >
          {features.map((feature) => (
            <li
              key={feature.name}
              className="rounded-2xl border border-gray-200 p-8"
            >
              <iframe
                width="auto"
                height="auto"
                src={feature.video}
                title={feature.name}
                frameborder="0"
                allow="fullscreen; accelerometer; autoplay; muted; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                autoplay
                muted
              ></iframe>
              <div className="relative z-10 flex items-center pt-8">
                <h3 className="mt-0 font-semibold text-gray-900">
                  {feature.name}
                </h3>
                <span className="text-md ml-auto inline-flex flex-shrink-0 rounded-lg bg-cyan-500 px-4 py-0.5 font-bold text-white">
                  {feature.price}
                </span>
              </div>
              <p className="my-2 text-gray-700">{feature.description}</p>
              <a
                href="#"
                className="font-medium text-blue-800 hover:text-blue-500"
              >
                Ver Producto
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
