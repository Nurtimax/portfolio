import { ReactNode } from 'react';

const findSkillsAndChangeToReactElement = (
  title: string,
  findElement: string[],
  element?: 'span' | 'div' | 'p'
): ReactNode => {
  const HTMLElement = element || 'span';

  let count = 0;

  const findSkill = title.split(',').map((item) => {
    if (findElement.some((el) => el === item)) {
      count = count + 1;
      return (
        <HTMLElement>
          {' '}
          {item}
          {count !== findElement.length - 1 ? ', ' : ''}
        </HTMLElement>
      );
    }
    return item;
  });

  return <>{findSkill}</>;
};

export default findSkillsAndChangeToReactElement;
