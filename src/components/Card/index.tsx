import React from 'react';
import Button from '../Button';
import * as S from './styles';
const Card = ({ title, img, author, description, url }: any) => {
  return (
    <S.Card>
      <S.CardImage src={img} />
      <S.CardBody>
        <S.CardTitle>{title}</S.CardTitle>
        <S.CardDescription>{description}</S.CardDescription>
        <S.CardAuthor>{author}</S.CardAuthor>
      </S.CardBody>
      <S.CardFooter>
        <Button>
          <S.Link href={url} target="_blank">
            Read More
          </S.Link>
        </Button>
      </S.CardFooter>
    </S.Card>
  );
};

export default Card;
