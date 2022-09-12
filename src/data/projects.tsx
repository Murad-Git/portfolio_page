import cookbirdImg from '../img/cookbird-shot.webp';
import movieImg from '../img/movie_page_screenshot.webp';
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
    img: movieImg,
    link: 'https://movie-rating-timdb.vercel.app/',
  },
  {
    id: 2,
    img: cookbirdImg,
    link: 'https://cook-bird.herokuapp.com/',
  },
  {
    id: 3,
    img: spoonAndForkImg,
    link: 'https://spoonandfork.netlify.app/',
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

export const works = (imgClassName: string) => {
  return [
    {
      id: 1,
      title: 'Web Design',
      icon: <AodIcon className={imgClassName} />,
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, veritatis!',
      img: <RelaxSvg className={imgClassName} />,
    },
    {
      id: 2,
      title: 'Cooking Design',
      icon: <AcUnitIcon className={imgClassName} />,
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, veritatis!',
      img: <CookSvg className={imgClassName} />,
    },
    {
      id: 3,
      title: 'Project Design',
      icon: <AddModeratorIcon className={imgClassName} />,
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, veritatis!',
      img: <ProjectSvg className={imgClassName} />,
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
