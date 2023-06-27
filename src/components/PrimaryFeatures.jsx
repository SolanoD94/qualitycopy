import { Fragment, useEffect, useId, useRef, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useDebouncedCallback } from 'use-debounce'

// Images
import Workforce from '@/images/workforce-bg.png'
import PantumPrinter from '@/images/Pantum-2509.png'
import PantumMF from '@/images/Pantum-6559.png'

// Components
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'

const features = [
  {
    name: 'Pantum Multifuncional',
    price: '$3,921 pesos MXN',
    type: 'Multifuncional Láser B&N',
    function: 'Copia, Imprime, Escanea',
    size: 'Carta, Oficio, Legal, Ejecutivo, A4, A5, A6',
    speed: '23 ppm impresión en Negro',
    firstPage: 'menos de 12 segundos',
    resolution: '1200 x 1200',
    consumible: 'Toner Recargable - rendimiento hasta 1600 páginas',
    image: PantumMF,
  },
  {
    name: 'Pantum Impresora',
    price: '$2,564 pesos MXN',
    type: 'Impresora Láser B&N',
    function: 'Imprime',
    size: 'Carta, Oficio, Legal, Ejecutivo, A4, A5, A6',
    speed: '23 ppm impresión en Negro',
    firstPage: 'menos de 12 segundos',
    resolution: '1200 x 1200',
    consumible: 'Toner Recargable - rendimiento hasta 1600 páginas',
    image: PantumPrinter,
  },
]

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

function FeaturesDesktop() {
  let [changeCount, setChangeCount] = useState(0)
  let [selectedIndex, setSelectedIndex] = useState(0)
  let prevIndex = usePrevious(selectedIndex)
  let isForwards = prevIndex === undefined ? true : selectedIndex > prevIndex

  let onChange = useDebouncedCallback(
    (selectedIndex) => {
      setSelectedIndex(selectedIndex)
      setChangeCount((changeCount) => changeCount + 1)
    },
    100,
    { leading: true }
  )

  return (
    <Tab.Group
      as="div"
      className="grid grid-cols-12 items-center gap-8 lg:gap-16 xl:gap-24"
      selectedIndex={selectedIndex}
      onChange={onChange}
      vertical
    >
      <Tab.List className="relative z-10 order-last col-span-6 space-y-6">
        {features.map((feature, featureIndex) => (
          <div
            key={feature.name}
            className="relative rounded-2xl transition-colors hover:bg-gray-800/30"
          >
            {featureIndex === selectedIndex && (
              <motion.div
                layoutId="activeBackground"
                className="absolute inset-0 bg-gray-800"
                initial={{ borderRadius: 16 }}
              />
            )}
            <div className="relative z-10 flex items-center px-8 pt-8">
              <h3 className="text-lg font-semibold text-white">
                <Tab className="text-left [&:not(:focus-visible)]:focus:outline-none">
                  <span className="absolute inset-0 rounded-2xl" />
                  {feature.name}
                </Tab>
              </h3>
              <span className="text-md ml-auto inline-flex flex-shrink-0 items-center rounded-lg bg-cyan-500 px-4 py-0.5 font-bold text-white">
                {feature.price}
              </span>
            </div>
            <div className="relative z-10 flex px-8 pb-6 pt-2">
              <div>
                <div className="mt-3 border-t border-white/10">
                  <dl className="divide-y divide-white/10">
                    <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-sm font-medium leading-5 text-white">
                        {feature.type}
                      </dt>
                      <dd className="mt-1 text-sm leading-5 text-gray-400 sm:col-span-2 sm:mt-0">
                        {feature.function}
                      </dd>
                    </div>
                    <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-sm font-medium leading-5 text-white">
                        Tamaño de papel
                      </dt>
                      <dd className="mt-1 text-sm leading-5 text-gray-400 sm:col-span-2 sm:mt-0">
                        {feature.size}
                      </dd>
                    </div>
                    <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-sm font-medium leading-5 text-white">
                        Velocidad
                      </dt>
                      <dd className="mt-1 text-sm leading-5 text-gray-400 sm:col-span-2 sm:mt-0">
                        {feature.speed}
                      </dd>
                    </div>
                    <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-sm font-medium leading-5 text-white">
                        Primera hoja impresa
                      </dt>
                      <dd className="mt-1 text-sm leading-5 text-gray-400 sm:col-span-2 sm:mt-0">
                        {feature.firstPage}
                      </dd>
                    </div>
                    <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-sm font-medium leading-5 text-white">
                        Resolución
                      </dt>
                      <dd className="mt-1 text-sm leading-5 text-gray-400 sm:col-span-2 sm:mt-0">
                        {feature.resolution}
                      </dd>
                    </div>
                    <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-sm font-medium leading-5 text-white">
                        Consumible
                      </dt>
                      <dd className="mt-1 text-sm leading-5 text-gray-400 sm:col-span-2 sm:mt-0">
                        {feature.consumible}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Tab.List>

      {/* Image Section */}
      <div className="relative col-span-6">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <CircleBackground color="#13B5C8" className="animate-spin-slower" />
        </div>
        <div className="z-10 mx-auto w-full max-w-[366px]">
          <Tab.Panels as={Fragment}>
            <AnimatePresence
              initial={false}
              custom={{ isForwards, changeCount }}
            >
              {features.map((feature, featureIndex) =>
                selectedIndex === featureIndex ? (
                  <Tab.Panel
                    static
                    key={feature.name + changeCount}
                    className="col-start-1 row-start-1 flex focus:outline-offset-[32px] [&:not(:focus-visible)]:focus:outline-none"
                  >
                    <Image
                      src={feature.image}
                      animated
                      custom={{ isForwards, changeCount }}
                    />
                  </Tab.Panel>
                ) : null
              )}
            </AnimatePresence>
          </Tab.Panels>
        </div>
      </div>
    </Tab.Group>
  )
}

function FeaturesMobile() {
  let [activeIndex, setActiveIndex] = useState(0)
  let slideContainerRef = useRef()
  let slideRefs = useRef([])

  useEffect(() => {
    let observer = new window.IntersectionObserver(
      (entries) => {
        for (let entry of entries) {
          if (entry.isIntersecting) {
            setActiveIndex(slideRefs.current.indexOf(entry.target))
            break
          }
        }
      },
      {
        root: slideContainerRef.current,
        threshold: 0.6,
      }
    )

    for (let slide of slideRefs.current) {
      if (slide) {
        observer.observe(slide)
      }
    }

    return () => {
      observer.disconnect()
    }
  }, [slideContainerRef, slideRefs])

  return (
    <>
      <div
        ref={slideContainerRef}
        className="-mb-4 flex snap-x snap-mandatory -space-x-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-4 [scrollbar-width:none] sm:-space-x-6 [&::-webkit-scrollbar]:hidden"
      >
        {features.map((feature, featureIndex) => (
          <div
            key={featureIndex}
            ref={(ref) => (slideRefs.current[featureIndex] = ref)}
            className="w-full flex-none snap-center px-4 sm:px-6"
          >
            <div className="relative transform overflow-hidden rounded-2xl bg-gray-800 px-5 py-6">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <CircleBackground
                  color="#13B5C8"
                  className={featureIndex % 2 === 1 ? 'rotate-180' : undefined}
                />
              </div>
              <Image
                className="mx-auto mt-8 max-w-[2000px]"
                priority
                src={feature.image}
              ></Image>
              <div className="absolute inset-x-0 bottom-0 bg-gray-800/95 p-6 backdrop-blur sm:p-10">
                <h3 className="text-md mt-6 font-semibold text-white sm:text-lg">
                  {feature.name}
                  <span className="ml-5 inline-flex flex-shrink-0 items-end rounded-lg bg-cyan-500 px-4 py-0.5 font-bold text-white">
                    {feature.price}
                  </span>
                </h3>
                <p className="mt-2 text-sm text-gray-400">{feature.type}</p>
                <div className="mt-3 border-t border-white/10">
                  <dl className="divide-y divide-white/10">
                    <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-sm font-medium leading-5 text-white">
                        {feature.type}
                      </dt>
                      <dd className="mt-1 text-sm leading-5 text-gray-400 sm:col-span-2 sm:mt-0">
                        {feature.function}
                      </dd>
                    </div>
                    <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-sm font-medium leading-5 text-white">
                        Tamaño de papel
                      </dt>
                      <dd className="mt-1 text-sm leading-5 text-gray-400 sm:col-span-2 sm:mt-0">
                        {feature.size}
                      </dd>
                    </div>
                    <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-sm font-medium leading-5 text-white">
                        Velocidad
                      </dt>
                      <dd className="mt-1 text-sm leading-5 text-gray-400 sm:col-span-2 sm:mt-0">
                        {feature.speed}
                      </dd>
                    </div>
                    <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-sm font-medium leading-5 text-white">
                        Primera hoja impresa
                      </dt>
                      <dd className="mt-1 text-sm leading-5 text-gray-400 sm:col-span-2 sm:mt-0">
                        {feature.firstPage}
                      </dd>
                    </div>
                    <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-sm font-medium leading-5 text-white">
                        Resolución
                      </dt>
                      <dd className="mt-1 text-sm leading-5 text-gray-400 sm:col-span-2 sm:mt-0">
                        {feature.resolution}
                      </dd>
                    </div>
                    <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-sm font-medium leading-5 text-white">
                        Consumible
                      </dt>
                      <dd className="mt-1 text-sm leading-5 text-gray-400 sm:col-span-2 sm:mt-0">
                        {feature.consumible}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center gap-3">
        {features.map((_, featureIndex) => (
          <button
            type="button"
            key={featureIndex}
            className={clsx(
              'relative h-0.5 w-4 rounded-full',
              featureIndex === activeIndex ? 'bg-gray-300' : 'bg-gray-500'
            )}
            aria-label={`Go to slide ${featureIndex + 1}`}
            onClick={() => {
              slideRefs.current[featureIndex].scrollIntoView({
                block: 'nearest',
                inline: 'nearest',
              })
            }}
          >
            <span className="absolute -inset-x-1.5 -inset-y-3" />
          </button>
        ))}
      </div>
    </>
  )
}

export function PrimaryFeatures() {
  return (
    <section
      id="features"
      aria-label="Linea economica pantum"
      className="bg-gray-900 py-20 sm:py-32"
    >
      <Container>
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8">
          <div className="mt-6 lg:col-span-7 lg:mt-0">
            <h2 className="pt-4 text-3xl font-medium tracking-tight text-white">
              Nuestra Línea Económica de Impresión
            </h2>
            <p className="pt-3 text-lg text-gray-400">
              Pantum, la marca de impresoras y multifuncionales de mejor
              calidad, al precio más bajo del mercado.
            </p>
          </div>
          <div className="flex justify-center lg:col-span-4 lg:col-start-9 lg:justify-start">
            <iframe
              src="https://video.wixstatic.com/video/52a653_414bd22a7b284501868be7f37bddd442/720p/mp4/file.mp4"
              className="rounded object-cover"
              allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; muted"
              allowfullscreen
              autoplay
              muted
            ></iframe>
          </div>
        </div>
      </Container>
      <div className="mt-16 md:hidden">
        <FeaturesMobile />
      </div>
      <Container className="hidden md:mt-20 md:block">
        <FeaturesDesktop />
      </Container>
    </section>
  )
}
