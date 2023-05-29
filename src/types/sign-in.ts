import { FC, SVGProps } from 'react';

export interface ISignInProviders {
  ICON: FC<SVGProps<SVGSVGElement>> | FC;
  id: number;
  width: string;
  height: string;
}
