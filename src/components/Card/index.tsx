import React from 'react';
import Button from '../Button';
import * as S from './styles';
const Card = ({ title, img, author, description }: any) => {
  return (
    <S.Card>
      <S.CardImage src={img} />
      <S.CardBody>
        <S.CardTitle>{title}</S.CardTitle>
        <S.CardDescription>{description}</S.CardDescription>
        <S.CardAuthor>{author}</S.CardAuthor>
      </S.CardBody>
      <S.CardFooter>
        <Button>Read More</Button>
      </S.CardFooter>
    </S.Card>
  );
};

export default Card;
