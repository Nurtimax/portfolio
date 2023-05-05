import { FC, SVGProps } from 'react';

const Vercel: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12 1L24 22H0L12 1Z" fill="#000000" />
    </svg>
  );
};

export default Vercel;
