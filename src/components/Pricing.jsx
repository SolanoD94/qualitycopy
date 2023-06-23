import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logomark } from '@/components/Logo'

const plans = [
  {
    name: 'Promoción: 50% de Descuento',
    featured: false,
    price: { Monthly: '$950 MXN', Annually: '$0' },
    description:
      'Aplica para equipos usados y sujeto a disponibilidad.',
    button: {
      label: 'Contratar',
      href: '/register',
    },
    features: [
      'Incluye 5,000 impresiones/copias B&N tamaño carta',
      '5,000 escaneos',
      'Consumibles durante todo el contrato de renta',
      'Servicio Técnico',
      "Incluye tinta o toner y refacciones",
      "Multifuncional SEMI-NUEVO copia, imprime y escanea",
    ],
    logomarkClassName: 'fill-gray-300',
  },
  {
    name: 'Básico',
    featured: true,
    price: { Monthly: '$1900 MXN', Annually: '$70' },
    description:
      'Equipo NUEVO multifuncional a COLOR y Blanco & Negro',
    button: {
      label: 'Contratar',
      href: '/register',
    },
    features: [
      'Incluye 5,000 impresiones/copias B&N tamaño carta',
      '500 impresiones/ copias a COLOR tamaño carta y 5,000 escaneos',
      'Consumibles durante todo el contrato de renta',
      'Servicio Técnico',
      "Instalación y configuración",
      "Incluye tinta o toner y refacciones",
      "Multifuncional NUEVO copia, imprime y escanea",
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
    description:
      'Equipo NUEVO multifuncional a COLOR y Blanco & Negro',
    button: {
      label: 'Contratar',
      href: '/register',
    },
    features: [
      'Incluye 5,000 impresiones/copias B&N tamaño carta',
      '1,000 impresiones/ copias a COLOR tamaño carta y 5,000 escaneos',
      'Consumibles durante todo el contrato de renta',
      'Servicio Técnico',
      "Instalación y configuración",
      "Incluye tinta o toner y refacciones",
      "Multifuncional NUEVO copia, imprime y escanea",
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
            Elige tu plan de Renta
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Whether you’re one person trying to get ahead or a big firm trying
            to take over the world, we’ve got a plan for you.
          </p>
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

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-10 sm:mt-20 lg:max-w-none lg:grid-cols-3">
          {plans.map((plan) => (
            <Plan key={plan.name} {...plan} activePeriod={activePeriod} />
          ))}
        </div>
        <div className="mx-auto max-w-2xl text-center mt-6">
          <p className="mt-22 text-md text-gray-600">
        Requisitos necesarios al contratar cualquier plan de renta:
          </p>
            <div className="">
            <CheckIcon className={clsx('h-6 w-6 flex-none text-gray-700 ')}> <span className="ml-4 text-gray-700">Documentación legal y fiscal.</span></CheckIcon>
            <CheckIcon className={clsx('h-6 w-6 flex-none text-black ')}></CheckIcon> <span className="ml-4">Documentación legal y fiscal.</span>
            <CheckIcon className={clsx('h-6 w-6 flex-none text-black ')}></CheckIcon> <span className="ml-4">Documentación legal y fiscal.</span>

            </div>
          </div>
      </Container>
    </section>
  )
}
