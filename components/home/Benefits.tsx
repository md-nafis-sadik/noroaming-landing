'use client'

import Image from 'next/image'
import { BenefitIcon, images } from '@/services'
import TextFadeIn from '../animations/TextFadeIn'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const educationFeatures = [
  {
    title: 'Streamlined Administration',
    description: 'Automates tasks like admissions, attendance, fee management, and reporting—saving time and reducing errors.',
  },
  {
    title: 'Centralized Data & Easy Access',
    description: 'Stores student, staff, and academic data in one secure place, making it accessible anytime from anywhere.',
  },
  {
    title: 'Improved Academic Performance',
    description: 'Enables better communication, resource sharing, and progress tracking, leading to more effective teaching and learning.',
  },
]

const teacherFeatures = [
  {
    title: 'Efficient Class Management',
    description: 'Apps help teachers schedule classes, take attendance, track assignments, and manage grades with ease, saving time and reducing manual work.',
  },
  {
    title: 'Better Communication with Students & Parents',
    description: 'Software enables real-time updates, sharing of study materials, and smooth communication with students and parents outside classroom hours.',
  },
  {
    title: 'Personalized Learning & Progress Tracking',
    description: 'Teachers can monitor individual student progress, identify learning gaps, and provide tailored support using data-driven insights.',
  },
]

const parentsFeatures = [
  {
    title: 'Real-Time Updates & Communication',
    description: 'Parents receive instant notifications about attendance, homework, grades, and school events, keeping them closely involved in their child’s education.',
  },
  {
    title: 'Transparency & Progress Tracking',
    description: 'Apps allow parents to monitor academic performance, behavior, and teacher feedback, helping them support their childs learning more effectively.',
  },
  {
    title: 'Convenient Access to Information',
    description: 'From fee payments to exam schedules, all important information is easily accessible in one place, saving time and reducing confusion.',
  },
]

export default function Benefits() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const listRefs = useRef<(HTMLUListElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      // Animate main section
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

      // Animate images
      imageRefs.current.forEach((imageRef) => {
        if (!imageRef) return;
        gsap.fromTo(imageRef.querySelector('img'),
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
              trigger: imageRef,
              start: 'top 80%',
              end: 'bottom 20%',
            }
          }
        );
      });

      // Animate list items
      listRefs.current.forEach((listRef) => {
        if (!listRef) return;
        Array.from(listRef.children).forEach((child, i) => {
          gsap.fromTo(child,
            { opacity: 0, x: 50 },
            {
              opacity: 1,
              x: 0,
              duration: 0.6,
              delay: i * 0.7,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: child,
                start: 'top 90%',
                toggleActions: 'play none none reverse'
              }
            }
          );
        });
      });
    }, sectionRef);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      ctx.revert();
    };
  }, []);

  const addImageRef = (el: HTMLDivElement | null, index: number) => {
    imageRefs.current[index] = el;
  };

  const addListRef = (el: HTMLUListElement | null, index: number) => {
    listRefs.current[index] = el;
  };

  return (
    <section ref={sectionRef} className='bg-[#FFFBEA]'>
      <div className='containerX py-16 md:py-[120px] space-y-12'>
        <div>
          <div className="flex justify-center w-full">
            <TextFadeIn text="Benefits" className=" text-2xl md:text-4xl lg:text-[48px] font-[700] !leading-[1.2] text-text-850 tracking-wide mb-6" />
          </div>
          <p className="text-[#4f4f4f] text-xs md:text-sm lg:text-lg mb-7 lg:mb-10 font-medium leading-relaxed transition-opacity duration-1000 ease-out text-center">
            Setting the Path for a Smarter, More Connected Future in Education
          </p>
        </div>

        {/* Section 1: Education */}
        <div className="rounded-xl lg:rounded-[5%] bg-white p-6 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12 relative">
          <div className="image-container w-full lg:w-1/2 relative flex justify-center lg:justify-start items-center">
            <div ref={el => addImageRef(el, 0)} className="tilt-image">
              <Image
                src={images.BenifitsImage1}
                alt="Dashboard Screenshot"
                width={322}
                height={618}
                className="relative z-10 w-auto lg:w-full h-[300px] lg:h-auto max-w-[322px]"
                priority
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 pb-8 lg:pb-0">
            <div className="text-center lg:text-left w-full max-w-full lg:max-w-[522px] text-[22px] md:text-[24px] xl:text-[28px] font-bold !leading-[1.2] text-text-850 tracking-wide mt-4 mb-8 lg:mb-10">
              Benefits of Educational Institutions
            </div>
            <ul ref={el => addListRef(el, 0)} className="space-y-6">
              {educationFeatures.map((item, idx) => (
                <li key={idx} className="flex flex-col lg:flex-row items-center lg:items-start gap-3">
                  <BenefitIcon className="flex justify-center shrink-0" />
                  <div>
                    <p className="text-center lg:text-left text-base lg:text-lg font-semibold text-text-850">{item.title}</p>
                    <p className="text-center lg:text-left text-xs md:text-sm lg:text-base text-gray-600 mt-1 max-w-lg">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Section 2: Teachers */}
        <div className="rounded-xl lg:rounded-[5%] bg-white p-6 lg:p-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-6 lg:gap-12 relative">
          <div className="w-full lg:w-1/2 pb-8 lg:pb-0">
            <div className="text-center lg:text-left w-full max-w-full lg:max-w-[522px] text-[22px] md:text-[24px] xl:text-[28px] font-bold !leading-[1.2] text-text-850 tracking-wide mt-4 mb-8 lg:mb-10">
              Benefits of Teachers
            </div>
            <ul ref={el => addListRef(el, 1)} className="space-y-6">
              {teacherFeatures.map((item, idx) => (
                <li key={idx} className="flex flex-col lg:flex-row items-center lg:items-start gap-3">
                  <BenefitIcon className="flex justify-center shrink-0" />
                  <div>
                    <p className="text-center lg:text-left text-base lg:text-lg font-semibold text-text-850">{item.title}</p>
                    <p className="text-center lg:text-left text-xs md:text-sm lg:text-base text-gray-600 mt-1 max-w-lg">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="image-container w-full lg:w-1/2 relative flex justify-center lg:justify-end items-center">
            <div ref={el => addImageRef(el, 1)} className="tilt-image">
              <Image
                src={images.BenifitsImage2}
                alt="Dashboard Screenshot"
                width={322}
                height={618}
                className="relative z-10 w-auto lg:w-full h-[300px] lg:h-auto max-w-[322px]"
                priority
              />
            </div>
          </div>
        </div>

        {/* Section 3: Parents */}
        <div className="rounded-xl lg:rounded-[5%] bg-white p-6 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12 relative">
          <div className="image-container w-full lg:w-1/2 relative flex justify-center lg:justify-start items-center">
            <div ref={el => addImageRef(el, 2)} className="tilt-image">
              <Image
                src={images.BenifitsImage3}
                alt="Dashboard Screenshot"
                width={322}
                height={618}
                className="relative z-10 w-auto lg:w-full h-[300px] lg:h-auto max-w-[322px]"
                priority
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 pb-8 lg:pb-0">
            <div className="text-center lg:text-left w-full max-w-full lg:max-w-[522px] text-[22px] md:text-[24px] xl:text-[28px] font-bold !leading-[1.2] text-text-850 tracking-wide mt-4 mb-8 lg:mb-10">
              Benefits of Parents
            </div>
            <ul ref={el => addListRef(el, 2)} className="space-y-6">
              {parentsFeatures.map((item, idx) => (
                <li key={idx} className="flex flex-col lg:flex-row items-center lg:items-start gap-3">
                  <BenefitIcon className="flex justify-center shrink-0" />
                  <div>
                    <p className="text-center lg:text-left text-base lg:text-lg font-semibold text-text-850">{item.title}</p>
                    <p className="text-center lg:text-left text-xs md:text-sm lg:text-base text-gray-600 mt-1 max-w-lg">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
