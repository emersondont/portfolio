import techInfo from '@/utils/techData';

const projects = [
  {
    title: 'PET Computação',
    description: 'Reformulação do portal do PET Computação - UFPel',
    href: 'https://wp.ufpel.edu.br/petcomp/',
    img: '/img/Portal-pet.png',
    techs: [
      techInfo.wordpress,
      techInfo.html,
      techInfo.css,
      techInfo.javascript
    ]
  },
  {
    title: 'Wallet',
    description: 'Projeto Full Stack de uma carteira virtual, hospedado na AWS.',
    href: 'https://github.com/emersondont/wallet',
    img: '/img/Wallet.png',
    techs: [
      techInfo.react,
      techInfo.tailwindcss,
      techInfo.typescript,
      techInfo.springboot,
      techInfo.postgresql,
      techInfo.amazonaws,
      techInfo.docker,
      techInfo.nginx
    ]
  },
  {
    title: 'Notes - Listas de Tarefas',
    description: 'Projeto Full Stack de uma aplicação de listas de tarefas.',
    href: 'https://github.com/emersondont/notes',
    img: '/img/Notes.png',
    techs: [
      techInfo.nextdotjs,
      techInfo.typescript,
      techInfo.tailwindcss,
      techInfo.springboot,
      techInfo.postgresql
    ]
  },
  {
    title: 'Color Converter',
    description: 'Um site prático e versátil para converter cores sem esforço.',
    href: 'https://color-converter-one.vercel.app/',
    img: '/img/Color-converter.png',
    techs: [
      techInfo.nextdotjs,
      techInfo.css,
      techInfo.typescript
    ]
  },
  // {
  //   title: 'Minecraft 3D store',
  //   description: 'Uma loja de objetos 3D',
  //   href: 'https://minecraft-3d-store.vercel.app/',
  //   img: '/img/Minecraft-3d-store.png',
  //   techs: [
  //     techInfo.webgl,
  //     techInfo.html,
  //     techInfo.css,
  //     techInfo.javascript
  //   ]
  // },
  // {
  //   title: 'Ray Marching',
  //   description: 'Minha implementação de Ray Marching.',
  //   href: 'https://ray-marching-xi.vercel.app/',
  //   img: '/img/Ray-marching.png',
  //   techs: [
  //     techInfo.webgl,
  //     techInfo.html,
  //     techInfo.javascript
  //   ]
  // },
  {
    title: 'Portfólio',
    description: 'Este portfólio, onde falo um pouco sobre mim e listo meus projetos.',
    href: 'https://emersondont.vercel.app/',
    img: '/img/Portfolio.png',
    techs: [
      techInfo.nextdotjs,
      techInfo.tailwindcss,
      techInfo.typescript
    ]
  },
  // {
  //   title: 'Império Suplementos',
  //   description: 'Plataforma para exibir produtos de uma loja de suplementos.',
  //   href: 'https://imperiosuplementos.vercel.app/',
  //   img: '/img/Imperio-suplementos.png',
  //   techs: [
  //     techInfo.nextdotjs,
  //     techInfo.tailwindcss,
  //     techInfo.tailwindcss,
  //   ]
  // }
];

export default projects;