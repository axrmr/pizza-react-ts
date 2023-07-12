import React from 'react';
import cls from './Section.module.scss';

type SectionProps = {
  children: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({ children }) => {
  return <section className={cls.section}>{children}</section>;
};

export default Section;
