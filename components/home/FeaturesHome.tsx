'use client'

import Image from 'next/image'
import { CheckMarkIcon, FeatureIcon1, FeatureIcon2, FeatureIcon3, images } from '@/services'
import TextFadeIn from '../animations/TextFadeIn'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger);
const features = [
  {
    title: 'Student & Teacher Management',
    description: 'Smart PathShala provides end-to-end support throughout a student’s academic journey — from the moment of admission to the issuance of their final certificate — ensuring a seamless and well-managed educational experience.',
    icon: <FeatureIcon1/>
  },
  {
    title: 'Attendance Tracking',
    description: 'This software has been developed by skilled programmers with experience in the European and American software industries, ensuring it is optimized for both mobile devices and desktop computers.',
    icon: <FeatureIcon2/>
  },
  {
    title: 'Reports & Analytics',
    description: 'Designed to be highly efficient, this software ensures minimal internet data usage, providing a seamless experience even with limited connectivity.',
    icon: <FeatureIcon3/>
  },
]



export default function FeaturesHome() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null);
const listRef = useRef<HTMLUListElement>(null)

useEffect(() => {
  const ctx = gsap.context(() => {
    if (!sectionRef.current || !imageRef.current || !listRef.current) return;

    // Section animation (only if needed)
    gsap.fromTo(sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      }
    );

    // Image tilt animation (specific to image element)
    gsap.fromTo(imageRef.current.querySelector('img'), 
      {
        rotationX: 8,
        rotationY: -8,
        transformPerspective: 1000,
        transformOrigin: "center center",
        opacity: 0,
        scale: 0.9
      },
      {
        rotationX: 0,
        rotationY: 0,
        opacity: 1,
        scale: 1,
        duration: 3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current, // Trigger on image container
          start: 'top 80%', // When top of image hits 80% viewport
          end: 'bottom 20%',
          markers: false // Set to true to debug position
        }
      }
    );

    // List items animation (specific to list element)
    gsap.fromTo(listRef.current.children,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: listRef.current, // Trigger on list container
          start: 'top 90%', // Slightly higher trigger point for lists
          toggleActions: 'play none none reverse'
        }
      }
    );

  }, sectionRef);

  return () => ctx.revert();
}, []);

  return (
    <section ref={sectionRef} className="containerX gap-10 py-20 lg:py-[220px] flex flex-col-reverse lg:flex-row items-center justify-between relative">
  {/* Left: Text */}
  <div className="w-full lg:w-2/5 md:3/5">
  <TextFadeIn text="Our Features " className="w-full lg:max-w-[522px] text-2xl md:text-4xl lg:text-[48px] font-[700] !leading-[1.2] text-text-850 tracking-wide mb-6"
        />
        <p className="text-[#4f4f4f] text-xs md:text-sm lg:text-lg mb-7 lg:mb-10 font-medium leading-relaxed
        transition-opacity duration-1000 ease-out text-center lg:text-left">
          Discover the Features That Empower Education Management
        </p>
        <div className='flex justify-center'>
        <ul ref={listRef} className="space-y-6 max-w-xl">
          {features.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <CheckMarkIcon className="text-skyish-700 w-6 h-6 shrink-0" />
              <div>
                
                <p className="text-xs md:text-sm lg:text-base text-gray-600">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
        </div>
  </div>

  {/* Right: Circle + Image */}
        {/* Right: Image */}
<div className="image-container w-full lg:w-1/2 relative flex justify-center lg:justify-start items-center">
  <div ref={imageRef} className="tilt-image">
    <Image
      src={images.FeatureImage}
      alt="Dashboard Screenshot"
      width={681}
      height={381}
      className="relative z-10 w-auto lg:w-full h-[350px] lg:h-auto max-w-[580px]"
      priority
    />
  </div>
</div>
</section>
  )
}
