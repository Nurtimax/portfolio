import { StaticImageData } from 'next/image';
import { FC, SVGProps } from 'react';

interface IProjects {
  id: string;
  title: string;
  description: string[];
  projectImage: StaticImageData;
  links: IProjectsLinks[];
}

export interface IProjectsLinks {
  id: string;
  link: string;
  type: string;
  ICON: FC<SVGProps<SVGSVGElement>>;
}

export default IProjects;
