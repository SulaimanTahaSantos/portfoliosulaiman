import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaPhp,  FaReact } from 'react-icons/fa';
import {SiMysql,SiTailwindcss, SiMui, SiSymfony } from 'react-icons/si';

const Experience = () => {
  return (
     <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '20px' }}>
          <FaHtml5 size={40} title="HTML" />
          <FaCss3Alt size={40} title="CSS" />
          <FaJsSquare size={40} title="JavaScript" />
          <FaReact size={40} title="React" />
          <FaPhp size={40} title="PHP" />
          <SiSymfony size={40} title="Symfony" />
          <SiMysql size={40} title="MySQL" />
          <SiTailwindcss size={40} title="Tailwind CSS" />
          <SiMui size={40} title="Material UI" />
        </div>
  );
};

export default Experience;
