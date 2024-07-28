import {
  SiCss3,
  SiTailwindcss,
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiSpringboot,
  SiDocker
} from 'react-icons/si';

const techs = [
  {
    title: 'HTML',
    icon: SiHtml5
  },
  {
    title: 'CSS',
    icon: SiCss3
  },
  {
    title: 'Tailwind CSS',
    icon: SiTailwindcss
  },
  {
    title: 'JavaScript',
    icon: SiJavascript
  },
  {
    title: 'TypeScript',
    icon: SiTypescript
  },
  {
    title: 'ReactJs',
    icon: SiReact
  },
  {
    title: 'Next.js',
    icon: SiNextdotjs
  },
  {
    title: 'Spring boot',
    icon: SiSpringboot
  },
  {
    title: 'Docker',
    icon: SiDocker
  }
]

export default function Techs() {
  const tamTechs = techs.length

  //animation-delay: calc(12s / 9 * (9 - 1) * -1);
  const funcAnimationDelay = (value: number) => {
    return `calc(12s / ${tamTechs} * (${tamTechs} - ${value}) * -1)`
  }
  return (
    <div className='text-secondary relative h-8 overflow-hidden wrapper'>
      {
        techs.map(({ title, icon: Icon }, index) => (
          <Icon key={index} size={32} title={title} className='absolute iconScroll'
            style={{
              animationDelay: funcAnimationDelay(index),
              left: `max(calc(32px * ${tamTechs * 2}), 100%)`
            }}
          />
        ))
      }
    </div>
  )
}