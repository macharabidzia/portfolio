import React from 'react';
import { useTranslation } from 'react-i18next';
import IntroBlock from '../../containers/IntroBlock';
const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <IntroBlock title="BlockyBlock" content="lorem ipsum dolor"></IntroBlock>
    </>
  );
};

export default Home;
