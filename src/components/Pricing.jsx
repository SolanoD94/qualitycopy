import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import clsx from 'clsx'
import {
  ExclamationTriangleIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/20/solid'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logomark } from '@/components/Logo'
import { Excedentes } from '@/components/Modal'

const plans = [
  {
    name: 'Mini Impresora Laser B&N',
    featured: false,
    price: { Monthly: '$567 MXN', Annually: '$0' },
    description: 'Renta Mini Impresora para Oficina Máximo 4 Usuarios Wifi.',
    button: {
      label: 'Contratar',
      href: '/register',
    },
    features: [
      'Incluye 1,000 impresiones/copias B&N.',
      'Tamaño Carta y Oficio.',
      'Consumibles durante todo el contrato de renta. No incluye papel.',
      'Servicio Técnico.',
      'Incluye tinta o toner y refacciones.',
      'Impresora Laser NUEVA: Imprime en B&N.',
    ],
    logomarkClassName: 'fill-gray-300',
  },
  {
    name: 'Mini Multifuncional',
    featured: false,
    price: { Monthly: '$584 MXN', Annually: '$0' },
    description:
      'Renta Mini Multifuncional para Oficina Máximo 4 Usuarios Wifi.',
    button: {
      label: 'Contratar',
      href: '/register',
    },
    features: [
      'Incluye 1,000 impresiones/copias B&N y Color.',
      'Tamaño Carta y Oficio.',
      'Incluye 1,000 escaneos.',
      'Consumibles durante todo el contrato de renta. No incluye papel.',
      'Servicio Técnico.',
      'Incluye tinta o toner y refacciones.',
      'Multifuncional NUEVA: Copia, Imprime y Escanea',
    ],
    logomarkClassName: 'fill-gray-300',
  },
  {
    name: 'Básico',
    featured: true,
    price: { Monthly: '$1900 MXN', Annually: '$70' },
    description: 'Equipo NUEVO multifuncional a COLOR y Blanco & Negro',
    button: {
      label: 'Contratar',
      href: '/register',
    },
    features: [
      'Incluye 5,000 impresiones/copias B&N.',
      'Tamaño Carta.',
      '500 impresiones/copias a COLOR y 5,000 escaneos.',
      'Consumibles durante todo el contrato de renta. No incluye papel.',
      'Servicio Técnico.',
      'Instalación y configuración.',
      'Incluye tinta o toner y refacciones.',
      'Multifuncional NUEVO: Copia, Imprime y Escanea.',
    ],
    adicionales: [
      'Excendentes B&N y Escaneos $0.20 +IVA; Color $3.00 más IVA',
      'Doble Carta se cobra doble impresión',
    ],
    logomarkClassName: 'fill-cyan-500',
  },
  {
    name: 'Renta + Color',
    featured: false,
    price: { Monthly: '$2200 MXN', Annually: '$1,990' },
    description: 'Equipo NUEVO multifuncional a COLOR y Blanco & Negro',
    button: {
      label: 'Contratar',
      href: '/register',
    },
    features: [
      'Incluye 5,000 impresiones/copias B&N.',
      'Tamaño Carta.',
      '1,000 impresiones/copias a COLOR y 5,000 escaneos.',
      'Consumibles durante todo el contrato de renta. No incluye papel.',
      'Servicio Técnico.',
      'Instalación y configuración.',
      'Incluye tinta o toner y refacciones.',
      'Multifuncional NUEVO: Copia, Imprime y Escanea.',
    ],
    adicionales: [
      'Excendentes B&N y Escaneos $0.20 +IVA; Color $3.00 más IVA',
      'Doble Carta se cobra doble impresión',
    ],
    logomarkClassName: 'fill-gray-500',
  },
]

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
        fill="currentColor"
      />
      <circle
        cx="12"
        cy="12"
        r="8.25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Plan({
  name,
  price,
  description,
  button,
  features,
  featured = false,
  activePeriod,
  logomarkClassName,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleIconClick = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <section
      className={clsx(
        'flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg shadow-gray-900/5',
        featured ? 'order-first bg-gray-900 lg:order-none' : 'bg-white'
      )}
    >
      <h3
        className={clsx(
          'flex items-center text-sm font-semibold',
          featured ? 'text-white' : 'text-gray-900'
        )}
      >
        <Logomark className={clsx('h-6 w-6 flex-none', logomarkClassName)} />
        <span className="ml-4">{name}</span>
      </h3>
      <p
        className={clsx(
          'relative mt-5 flex text-3xl tracking-tight',
          featured ? 'text-white' : 'text-gray-900'
        )}
      >
        {price.Monthly === price.Annually ? (
          price.Monthly
        ) : (
          <>
            <span
              aria-hidden={activePeriod === 'Annually'}
              className={clsx(
                'transition duration-300',
                activePeriod === 'Annually' &&
                  'pointer-events-none translate-x-6 select-none opacity-0'
              )}
            >
              {price.Monthly}
            </span>
            <span
              aria-hidden={activePeriod === 'Monthly'}
              className={clsx(
                'absolute left-0 top-0 transition duration-300',
                activePeriod === 'Monthly' &&
                  'pointer-events-none -translate-x-6 select-none opacity-0'
              )}
            >
              {price.Annually}
            </span>
          </>
        )}
        <span className="pl-2 text-sm"> / mes</span>
        {/* Dollar Info Button */}
        <button
          onClick={handleIconClick}
          className={clsx(
            'ml-3 h-4 w-4 flex-none',
            featured ? 'text-white' : 'text-cyan-500'
          )}
        >
          <span className="relative flex h-4 w-4">
            <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-sky-400 opacity-75"></span>
            <CurrencyDollarIcon className="relative inline-flex" />
          </span>
        </button>
      </p>
      <p
        className={clsx(
          'mt-3 text-sm',
          featured ? 'text-gray-300' : 'text-gray-700'
        )}
      >
        {description}
      </p>
      <div className="order-last mt-6">
        <ul
          role="list"
          className={clsx(
            '-my-2 divide-y text-sm',
            featured
              ? 'divide-gray-800 text-gray-300'
              : 'divide-gray-200 text-gray-700'
          )}
        >
          {features.map((feature) => (
            <li key={feature} className="flex py-2">
              <CheckIcon
                className={clsx(
                  'h-6 w-6 flex-none',
                  featured ? 'text-white' : 'text-cyan-500'
                )}
              />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <Button
        href={button.href}
        color={featured ? 'cyan' : 'gray'}
        className="mt-6"
        aria-label={`Contrata el plan ${name} por ${price} mensuales`}
      >
        {button.label}
      </Button>
    </section>
  )
}

function SolicitarCotización(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
        fill="none"
        stroke="white"
      />
    </svg>
  )
}

export function Pricing() {
  let [activePeriod, setActivePeriod] = useState('Monthly')

  return (
    <section
      id="planesRenta"
      aria-labelledby="pricing-title"
      className="border-t border-gray-200 bg-gray-100 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="pricing-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Simplifica tu trabajo y ahorra con nuestros planes de renta
            mensuales.
          </h2>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="relative">
            <RadioGroup
              value={activePeriod}
              onChange={setActivePeriod}
              className="grid grid-cols-2"
            >
              {['Monthly', 'Annually'].map((period) => (
                <RadioGroup.Option
                  key={period}
                  value={period}
                  className={clsx(
                    'cursor-pointer border border-gray-300 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing.2)-1px)] text-sm text-gray-700 outline-2 outline-offset-2 transition-colors hover:border-gray-400',
                    period === 'Monthly'
                      ? 'rounded-l-lg'
                      : '-ml-px rounded-r-lg'
                  )}
                >
                  {period}
                </RadioGroup.Option>
              ))}
            </RadioGroup>
            <div
              aria-hidden="true"
              className={clsx(
                'pointer-events-none absolute inset-0 z-10 grid grid-cols-2 overflow-hidden rounded-lg bg-cyan-500 transition-all duration-300',
                activePeriod === 'Monthly'
                  ? '[clip-path:inset(0_50%_0_0)]'
                  : '[clip-path:inset(0_0_0_calc(50%-1px))]'
              )}
            >
              {['Monthly', 'Annually'].map((period) => (
                <div
                  key={period}
                  className={clsx(
                    'py-2 text-center text-sm font-semibold text-white [&:not(:focus-visible)]:focus:outline-none',
                    period === 'Annually' && '-ml-px'
                  )}
                >
                  {period}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-10 sm:mt-20 lg:max-w-none lg:grid-cols-2">
          {plans.map((plan) => (
            <Plan key={plan.name} {...plan} activePeriod={activePeriod} />
          ))}
        </div>
        {/* Requisitos */}
        <div className="mx-auto mt-16 max-w-2xl rounded-md bg-yellow-50 p-4 lg:max-w-none">
          <div className="flex">
            <div className="flex-shrink-0">
              <ExclamationTriangleIcon
                className="h-5 w-5 text-yellow-400"
                aria-hidden="true"
              />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">
                Requisitos para contratar un plan de renta.
              </h3>
              <div className="mt-2 text-sm text-yellow-700">
                <ul role="list" className="list-disc space-y-1 pl-5">
                  <li>Documentos legales y fiscales.</li>
                  <li>Pago de un mes de renta como depósito.</li>
                  <li>Firma de contrato por 12 meses forzoso.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Boton */}
        <div className="mt-8 flex justify-center">
          <Button
            href="https://api.whatsapp.com/send?phone=5212223929010"
            target="_blank"
            variant="solid"
            rel="noreferrer"
            color="cyan"
            className="mx-auto mt-16 max-w-2xl"
          >
            <SolicitarCotización className="h-6 w-6 flex-none" />
            <span className="text-md mx-3">Solicitar cotización formal</span>
          </Button>
        </div>
      </Container>
    </section>
  )
}
