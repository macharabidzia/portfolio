import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/Card';
import * as S from './styles';
import { listProjects } from '../../core/store/projects/actions';
import LoadScreen from '../../components/LoadScreen';
import IProject from '../../core/models/project.model';
const ProjectsBlock = () => {
  const projectList = useSelector((state: any) => state.projectList);

  const dispatch = useDispatch();

  const {
    loading = true,
    error,
    projects,
  }: { loading: boolean; error: string; projects: IProject[] } = projectList;

  useEffect(() => {
    dispatch(listProjects());
  }, [dispatch]);

  if (loading) return <LoadScreen />;

  if (error) return <p>{error}</p>;

  return (
    <S.Container>
      <a href="https://www.codewars.com/users/itsjustamirage" target="blank">
        <S.Image
          src="https://www.codewars.com/users/itsjustamirage/badges/large"
          alt="codewars"
        />
      </a>
      <S.Wrapper>
        {projects.map((item: any, index: any) => (
          <Card key={index} {...item} />
        ))}
      </S.Wrapper>
    </S.Container>
  );
};

export default ProjectsBlock;
