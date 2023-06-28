import { useId, useRef, useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import printerWF from "@/images/workforce-bg-2.png"
import logoEpson from "@/images/logos/epson.svg"
import logoXerox from "@/images/logos/xerox.svg"
import logoPantum from "@/images/logos/pantum.png"
import logoRicoh from "@/images/logos/ricoh.svg"
import logoBrother from "@/images/logos/brother.svg"


// Empieza animación circular
function BackgroundIllustration(props) {
  let id = useId()

  return (
    <div {...props}>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-slow"
      >
        <path
          d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M513 1025C230.23 1025 1 795.77 1 513"
          stroke={`url(#${id}-gradient-1)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-1`}
            x1="1"
            y1="513"
            x2="1"
            y2="1025"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-reverse-slower"
      >
        <path
          d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M913 513c0 220.914-179.086 400-400 400"
          stroke={`url(#${id}-gradient-2)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-2`}
            x1="913"
            y1="513"
            x2="913"
            y2="913"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
// Termina animación circular

function SolicitarCotización(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
        fill="none"
        stroke="#A3A3A3"
      />
    </svg>
    
  )
}


export function Hero() {
  return (
    <div className="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36">
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <h1 className="text-4xl font-medium tracking-tight text-gray-900">
            Renta un Equipo con <br></br> 50% Descuento
            </h1>
            <p className="mt-6 text-lg text-gray-600">
            Quality Copy te brinda la mejor experiencia al ofrecerte equipos multifuncionales de alta calidad, soporte técnico especializado y planes de renta flexibles a tus necesidades. Con nosotros, podrás maximizar tu productividad y eficiencia sin preocuparte por los costos y el mantenimiento asociados a la propiedad de los equipos. 
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
            <Button href="#planesRenta" className="lg:block">
              Ver Planes de Renta
            </Button>
              <Button
                href="https://api.whatsapp.com/send?phone=5212223929010"
                variant="outline"
                target="_blank"
                rel="noreferrer"
              >
                <SolicitarCotización className="h-6 w-6 flex-none" />
                <span className="ml-2.5">Solicitar Cotización</span>
              </Button>
            </div>
          </div>
          <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <BackgroundIllustration className="absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
            <div className="-mx-4 h-[448px] px-9 [mask-image:linear-gradient(to_bottom,white_60%,transparent)] sm:mx-0 lg:absolute lg:-inset-x-10 lg:-bottom-20 lg:-top-10 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
              <Image className="mx-auto max-w-full mt-8" priority
              src={printerWF}
              >
              </Image>
            </div>
          </div>
          <div className="relative -mt-4 lg:col-span-7 lg:mt-0 xl:col-span-6">
            <p className="text-center text-xl font-semibold text-gray-800 lg:text-left">
              Distribuidor Autorizado
            </p>
            <ul
              role="list"
              className="mx-auto mt-8 flex max-w-xl flex-wrap justify-start gap-x-6 gap-y-12 lg:mx-0 lg:justify-start"
            >
              {[
                ['Epson', logoEpson],
                ['Xerox', logoXerox],
                ['Pantum', logoPantum],
                // ['Brother', logoBrother],
                // ['Ricoh', logoRicoh]
              ].map(([name, logo, className]) => (
                <li key={name} className={clsx('flex', className)}>
                  <Image src={logo} alt={name} className="h-10" unoptimized />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}
