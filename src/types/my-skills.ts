import { FC, SVGProps } from 'react';

export interface IMySkillsData {
  id: number;
  title: string;
  ICON: FC<SVGProps<SVGSVGElement>> | FC;
}
