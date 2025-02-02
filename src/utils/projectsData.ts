import techInfo from '@/utils/techData';

const projects = [
  {
    title: 'PET Computação',
    description: 'Reformulação do portal do PET Computação da Universidade Federal de Pelotas(UFPel), incluindo melhorias na interface do usuário com um design moderno.',
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
    description: 'Projeto Full Stack de uma carteira virtual, hospedado na AWS. Permite aos usuários gerenciar suas finanças de forma eficiente. Os usuários podem criar uma conta, fazer login e começar a utilizar os recursos disponíveis.',
    // href: 'http://ec2-3-142-194-138.us-east-2.compute.amazonaws.com/',
    gitHubHref: 'https://github.com/emersondont/wallet',
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
    title: 'Virtual Bank',
    description: 'Projeto FullStack de um banco virtual, onde os usuários podem realizar transferências bancárias entre eles, visualizar o extrato de transações e o saldo da conta.',
    gitHubHref: 'https://github.com/emersondont/virtual-bank',
    img: '/img/Virtual-Bank.png',
    techs: [
      techInfo.springboot,
      techInfo.postgresql,
      techInfo.nextdotjs,
      techInfo.tailwindcss,
      techInfo.typescript,
      techInfo.docker,
    ]
  },
  {
    title: 'Gym landing page',
    description: 'Uma landing page desenvolvida para uma academia fictícia, projetada para atrair novos membros e fornecer informações detalhadas sobre os serviços oferecidos.',
    href: 'https://gym-landing-page-lime.vercel.app/',
    gitHubHref: 'https://github.com/emersondont/gym-landing-page',
    img: '/img/gym-landing-page.png',
    techs: [
      techInfo.nextdotjs,
      techInfo.tailwindcss,
      techInfo.typescript
    ]
  },
  {
    title: 'Color Converter',
    description: 'Um site prático e versátil que permite converter cores entre diversos formatos. Com o Color Converter, você pode transformar facilmente uma cor de RGB em HEX e explorar conversões entre outros formatos, como HSL, CMYK e HSV.',
    href: 'https://color-converter-one.vercel.app/',
    gitHubHref: 'https://github.com/emersondont/color-converter',
    img: '/img/Color-converter.png',
    techs: [
      techInfo.nextdotjs,
      techInfo.css,
      techInfo.typescript
    ]
  },
  {
    title: 'Notes - Listas de Tarefas',
    description: 'Projeto Full Stack de uma aplicação de listas de tarefas, permitindo aos usuários criar listas de tarefas personalizadas, cada uma com descrição e data associadas.',
    gitHubHref: 'https://github.com/emersondont/notes',
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
    title: 'Portfólio',
    description: 'Este portfólio, onde compartilho um pouco sobre minha trajetória, habilidades e experiências. Além disso, apresento uma lista de alguns dos meus projetos, cada um acompanhado de descrições, tecnologias utilizadas e links.',
    href: 'https://emersondont.vercel.app/',
    gitHubHref: 'https://github.com/emersondont/portfolio',
    img: '/img/Portfolio.png',
    techs: [
      techInfo.nextdotjs,
      techInfo.tailwindcss,
      techInfo.typescript
    ]
  }
];
export default projects;