import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaPhp, FaJava, FaNodeJs, FaReact, FaCode } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiMysql, SiPostgresql, SiUnrealengine, SiTailwindcss, SiMui, SiBulma, SiSymfony, SiLaravel, SiPython, SiGithub } from 'react-icons/si';

const TechIcons = () => {
  return (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '20px' }}>
      <FaHtml5 size={40} title="HTML" />
      <FaCss3Alt size={40} title="CSS" />
      <FaJsSquare size={40} title="JavaScript" />
      <FaReact size={40} title="React" />
      <SiNextdotjs size={40} title="Next.js" />
      <SiTypescript size={40} title="TypeScript" />
      <FaPhp size={40} title="PHP" />
      <SiSymfony size={40} title="Symfony" />
      <SiLaravel size={40} title="Laravel" />
      <SiPython size={40} title="Python" />
      <FaJava size={40} title="Java" />
      <FaNodeJs size={40} title="Node.js" />
      <SiMysql size={40} title="MySQL" />
      <SiPostgresql size={40} title="PostgreSQL" />
      <FaCode size={40} title="XML" />
      <SiUnrealengine size={40} title="Unreal Engine" />
      <SiTailwindcss size={40} title="Tailwind CSS" />
      <SiMui size={40} title="Material UI" />
      <SiBulma size={40} title="Bulma" /> 
      <SiGithub size={40} title="GitHub" />
    </div>
  );
};

export default TechIcons;
