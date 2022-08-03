import cookbirdImg from '../img/cookbird-shot.webp';
import spoonAndForkImg from '../img/spoonacular-shot.webp';
import soonImg from '../img/soon.webp';
import AodIcon from '@mui/icons-material/Aod';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import { ReactComponent as RelaxSvg } from '../img/relaxation-project.svg';
import { ReactComponent as CookSvg } from '../img/cooking-project.svg';
import { ReactComponent as ProjectSvg } from '../img/project-project.svg';

export const products = [
  {
    id: 1,
    img: cookbirdImg,
    link: 'https://cook-bird.herokuapp.com/',
  },
  {
    id: 2,
    img: spoonAndForkImg,
    link: 'https://spoonandfork.netlify.app/',
  },
  {
    id: 3,
    img: soonImg,
    link: 'https://www.google.com/',
  },
  {
    id: 4,
    img: soonImg,
    link: 'https://www.google.com/',
  },
  {
    id: 5,
    img: soonImg,
    link: 'https://www.google.com/',
  },
  {
    id: 6,
    img: soonImg,
    link: 'https://www.google.com/',
  },
];

export const worksFc = (img: string) => {
  return [
    {
      id: 1,
      title: 'Web Design',
      icon: <AodIcon className={img} />,
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, veritatis!',
      img: <RelaxSvg className={img} />,
    },
    {
      id: 2,
      title: 'Cooking Design',
      icon: <AcUnitIcon className={img} />,
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, veritatis!',
      img: <CookSvg className={img} />,
    },
    {
      id: 3,
      title: 'Project Design',
      icon: <AddModeratorIcon className={img} />,
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, veritatis!',
      img: <ProjectSvg className={img} />,
    },
  ];
};

export const titlesAnimation = [
  { title: 'Web Developer', id: 1 },
  { title: 'UI/UX Designer', id: 2 },
  { title: 'Learner', id: 3 },
  { title: 'Inquisitive', id: 4 },
  { title: 'Curious', id: 5 },
];
