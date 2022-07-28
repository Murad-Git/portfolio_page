import AodIcon from '@mui/icons-material/Aod';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import { ReactComponent as RelaxSvg } from '../img/relaxation-project.svg';
import { ReactComponent as CookSvg } from '../img/cooking-project.svg';
import { ReactComponent as ProjectSvg } from '../img/project-project.svg';

export const products = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1598784143976-cd71919612bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    link: 'https://www.google.com/',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1598784143976-cd71919612bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    link: 'https://www.google.com/',
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1598784143976-cd71919612bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    link: 'https://www.google.com/',
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1598784143976-cd71919612bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    link: 'https://www.google.com/',
  },
  {
    id: 5,
    img: 'https://images.unsplash.com/photo-1598784143976-cd71919612bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    link: 'https://www.google.com/',
  },
  {
    id: 6,
    img: 'https://images.unsplash.com/photo-1598784143976-cd71919612bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
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
  { title: 'Photographer', id: 3 },
  { title: 'Writer', id: 4 },
  { title: 'Content Creater', id: 5 },
];
