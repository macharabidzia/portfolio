import React from 'react';
import { useTranslation } from 'react-i18next';
import ProjectsBlock from '../../containers/ProjectsBlock';
const Projects = () => {
  const { t } = useTranslation();
  return (
    <>
      <ProjectsBlock></ProjectsBlock>
    </>
  );
};

export default Projects;
