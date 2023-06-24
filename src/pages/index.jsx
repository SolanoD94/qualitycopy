import Head from 'next/head'

import { CallToAction } from '@/components/Soporte360'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Intro'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'

export default function Home() {
  return (
    <>
      <Head>
        <title>Quality Copy</title>
        <meta
          name="Quality Copy"
          content="By leveraging insights from our network of industry insiders, you’ll know exactly when to buy to maximize profit, and exactly when to sell to avoid painful losses."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Pricing />
        <Reviews />
      </main>
      <Footer />
    </>
  )
}
