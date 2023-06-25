import { useEffect, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'

import { Container } from '@/components/Container'

const reviews = [
  {
    title: 'Muy buena experiencia y atención al cliente.',
    body: 'Rentar equipos multifuncionales con Quality Copy ha sido una experiencia impecable. La calidad de los productos es de primera clase, superando todas mis expectativas. Además, el servicio brindado por el equipo de soporte técnico de Quality Copy ha sido excepcional. Siempre están disponibles y dispuestos a ayudar. Definitivamente seguiré utilizando los servicios de Quality Copy en el futuro.',
    author: 'Pedro Rodríguez',
    rating: 5,
  },

  {
    title:
      'Calidad insuperable y atención al cliente excepcional en Quality Copy',
    body: 'No puedo estar más satisfecho con la calidad de los equipos multifuncionales que he rentado de Quality Copy. Han sido confiables, eficientes y han mejorado significativamente la productividad de mi negocio. Además, el equipo de atención al cliente de Quality Copy ha sido amable, profesional y siempre dispuesto a brindar asistencia. Los recomiendo sin ninguna duda.',
    author: 'Ana Torres',
    rating: 5,
  },

  {
    title: 'Excelente en todos los aspectos',
    body: 'Desde el primer contacto con Quality Copy, supe que había tomado la decisión correcta. La calidad de los productos es excepcional y el servicio al cliente es simplemente impecable. Siempre están dispuestos a ir más allá para asegurarse de que esté satisfecho. ¡No podría pedir más de Quality Copy!',
    author: 'Carlos Mendoza',
    rating: 5,
  },

  {
    title: 'Una inversión que vale la pena con Quality Copy',
    body: 'Rentar equipos multifuncionales con Quality Copy ha sido una inversión que definitivamente vale la pena. La calidad de los equipos es increíble y su rendimiento ha superado mis expectativas. Si estás buscando una solución confiable y rentable, no busques más que Quality Copy.',
    author: 'Laura Martínez',
    rating: 5,
  },
  {
    title: 'Servicio técnico excepcional y atención rápida',
    body: 'Cada vez que he tenido algún problema con los equipos multifuncionales, su equipo de soporte ha respondido de manera rápida y eficiente. Han resuelto los problemas de manera profesional y me han mantenido en funcionamiento sin interrupciones prolongadas. Su atención rápida y eficiente es verdaderamente admirable.',
    author: 'Luisa Fernández',
    rating: 5,
    },
    
    {
    title: 'Atención inmediata y soluciones efectivas',
    body: 'El servicio técnico de Quality Copy es simplemente extraordinario. Siempre que he solicitado asistencia, han respondido de inmediato y han proporcionado soluciones efectivas. Su equipo técnico es amable, conocedor y está comprometido en garantizar que los equipos estén funcionando de manera óptima. Estoy muy satisfecho con su atención rápida y eficiente.',
    author: 'Roberto González',
    rating: 5,
    },
    
    {
    title: 'Asistencia técnica de primera categoría',
    body: 'Quality Copy se destaca por su asistencia técnica de primera categoría. Han demostrado ser expertos en su campo y han brindado soluciones rápidas y efectivas a cualquier problema que haya surgido. Su atención al cliente es excepcional y su compromiso con la satisfacción del cliente es evidente. Recomiendo encarecidamente su servicio técnico.',
    author: 'María López',
    rating: 5,
    },
    
    {
    title: 'Respuesta rápida y solución eficiente',
    body: 'Cuando he requerido asistencia técnica de Quality Copy, su respuesta ha sido rápida y su solución eficiente. Han demostrado un alto nivel de conocimiento y habilidad en el manejo de cualquier problema que haya surgido. Aprecio su profesionalismo y dedicación para garantizar que mis necesidades sean atendidas de manera oportuna. Estoy muy satisfecho con su servicio técnico.',
    author: 'Juan Torres',
    rating: 5,
    },
    {
      title: 'La mejor opción para mi negocio',
      body: 'Cuando tuve que elegir una empresa de renta de equipos multifuncionales para mi negocio, no dudé en optar por Quality Copy. Sus productos de alta calidad y su reputación en el mercado me dieron la tranquilidad de que estaba tomando la decisión correcta. Desde el primer contacto, su equipo profesional y amable me brindó un servicio personalizado y se aseguró de entender mis necesidades específicas. Estoy encantada con mi elección y recomiendo encarecidamente a Quality Copy.',
      author: 'María Fernández',
      rating: 5,
      },
      {
        title: 'La elección perfecta: Quality Copy',
        body: 'Elegir Quality Copy para la renta de equipos multifuncionales ha sido la elección perfecta. Desde el momento en que contacté a la empresa, su profesionalismo y atención al cliente excepcionales me convencieron de que estaba en buenas manos. Su amplia gama de productos de calidad, combinada con su compromiso de brindar un servicio de excelencia, hacen de Quality Copy la opción más confiable en el mercado. Estoy completamente satisfecha con mi elección.',
        author: 'Laura Martínez',
        rating: 5,
        },
]

function StarIcon(props) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function StarRating({ rating }) {
  return (
    <div className="flex">
      {[...Array(5).keys()].map((index) => (
        <StarIcon
          key={index}
          className={clsx(
            'h-5 w-5',
            rating > index ? 'fill-cyan-500' : 'fill-gray-300'
          )}
        />
      ))}
    </div>
  )
}

function Review({ title, body, author, rating, className, ...props }) {
  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = ['0s', '0.1s', '0.2s']
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ]
  }, [])

  return (
    <figure
      className={clsx(
        'animate-fade-in rounded-3xl bg-white p-6 opacity-0 shadow-md shadow-gray-900/5',
        className
      )}
      style={{ animationDelay }}
      {...props}
    >
      <blockquote className="text-gray-900">
        <StarRating rating={rating} />
        <p className="mt-4 text-lg font-semibold leading-6 before:content-['“'] after:content-['”']">
          {title}
        </p>
        <p className="mt-3 text-base leading-7">{body}</p>
      </blockquote>
      <figcaption className="mt-3 text-sm text-gray-600 before:content-['–_']">
        {author}
      </figcaption>
    </figure>
  )
}

function splitArray(array, numParts) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts
    if (!result[index]) {
      result[index] = []
    }
    result[index].push(array[i])
  }
  return result
}

function ReviewColumn({
  className,
  reviews,
  reviewClassName = () => {},
  msPerPixel = 0,
}) {
  let columnRef = useRef()
  let [columnHeight, setColumnHeight] = useState(0)
  let duration = `${columnHeight * msPerPixel}ms`

  useEffect(() => {
    let resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current.offsetHeight)
    })

    resizeObserver.observe(columnRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div
      ref={columnRef}
      className={clsx('animate-marquee space-y-8 py-4', className)}
      style={{ '--marquee-duration': duration }}
    >
      {reviews.concat(reviews).map((review, reviewIndex) => (
        <Review
          key={reviewIndex}
          aria-hidden={reviewIndex >= reviews.length}
          className={reviewClassName(reviewIndex % reviews.length)}
          {...review}
        />
      ))}
    </div>
  )
}

function ReviewGrid() {
  let containerRef = useRef()
  let isInView = useInView(containerRef, { once: true, amount: 0.4 })
  let columns = splitArray(reviews, 3)
  columns = [columns[0], columns[1], splitArray(columns[2], 2)]

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView && (
        <>
          <ReviewColumn
            reviews={[...columns[0], ...columns[2].flat(), ...columns[1]]}
            reviewClassName={(reviewIndex) =>
              clsx(
                reviewIndex >= columns[0].length + columns[2][0].length &&
                  'md:hidden',
                reviewIndex >= columns[0].length && 'lg:hidden'
              )
            }
            msPerPixel={10}
          />
          <ReviewColumn
            reviews={[...columns[1], ...columns[2][1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= columns[1].length && 'lg:hidden'
            }
            msPerPixel={15}
          />
          <ReviewColumn
            reviews={columns[2].flat()}
            className="hidden lg:block"
            msPerPixel={10}
          />
        </>
      )}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-50" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-50" />
    </div>
  )
}

export function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="pb-16 pt-20 sm:pb-24 sm:pt-32"
    >
      <Container>
        <h2
          id="reviews-title"
          className="text-3xl font-medium tracking-tight text-gray-900 sm:text-center"
        >
          30 años de experiencia nos respaldan.
        </h2>
        <p className="mt-2 text-lg text-gray-600 sm:text-center">
          Las experiencias de nuestros clientes hablan por sí mismas.
        </p>
        <ReviewGrid />
      </Container>
    </section>
  )
}
