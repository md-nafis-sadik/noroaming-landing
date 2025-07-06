'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TextFadeIn from '../animations/TextFadeIn'
import AnimatedText from '../ui/AnimatedTitle'
import { GradientButton } from '../ui/gradient-button'
import Image from 'next/image'
import { images } from '@/services'

// Import other components & assets...
// (your existing imports)

gsap.registerPlugin(ScrollTrigger)

const HeroHome = () => {
  const sectionRef = useRef(null)
  const imageRef = useRef<HTMLImageElement | null>(null)
  const textBlockRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate text from bottom
      gsap.fromTo(
        textBlockRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      )

      // Animate image
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          delay: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className='relative min-h-[720px] pt-[160px]' style={{
      background: `
      radial-gradient(ellipse at 50% 80%, #033877 0%, #000 100%)
    `,
      backgroundBlendMode: 'overlay'
    }}>
      <section className="containerX font-[600] w-full pt-10 md:pt-20 lg:pt-0 pb-0 px-0 lg:px-16 2xl:px-20">
        <div className="flex flex-col lg:flex-row gap-10 px-4 sm:px-8">
          {/* Left portion */}
          <div ref={textBlockRef} className="flex flex-col w-full lg:w-[53%]">
            <TextFadeIn text="Stay connected up anywhere without any stress." className="text-center lg:text-left text-5xl md:text-[50px] lg:text-[65px] xl:text-[64px] font-extrabold !leading-[1.2] mt-3 md:mt-2 text-white" />
            <AnimatedText text="Noroaming is your one-stop eSIM solution for seamless global connectivity. No physical SIMs, no surprise fees." className="mt-5 text-center text-text-50 lg:text-left text-xs md:text-sm lg:text-base" />

            <div className="mt-5 lg:mt-10 flex items-center justify-center lg:justify-start gap-2 md:gap-4">
              <GradientButton className="w-fit group bg-white text-text-900 hover:bg-neutral-50 py-2.5">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path d="M21 15.5V19.5C21 20.0304 20.7893 20.5391 20.4142 20.9142C20.0391 21.2893 19.5304 21.5 19 21.5H5C4.46957 21.5 3.96086 21.2893 3.58579 20.9142C3.21071 20.5391 3 20.0304 3 19.5V15.5" stroke="#131313" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M7 10.5L12 15.5L17 10.5" stroke="#131313" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12 15.5V3.5" stroke="#131313" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </span>
                <span className="!leading-none py-1 text-sm lg:text-base">Get Started</span>
              </GradientButton>
            </div>
          </div>

          {/* Right portion */}
          <div className="absolute bottom-0 right-[-45px]">
            <Image
              ref={imageRef}
              alt="hero star glass image"
              src={images.hero}
              className="w-auto"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
        </div>
      </section>
    </section>
  )
}

export default HeroHome
