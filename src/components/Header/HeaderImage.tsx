/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { ImageBack } from './Styles';

type THeaderImageProps = {
  page: string;
};

const HeaderImage: React.FC<THeaderImageProps> = (props: THeaderImageProps) => {
  let backgroundPath = '/img/headers/';
  switch (props.page) {
    case 'system':
      backgroundPath += 'system.png';
      break;

    case 'home':
      backgroundPath += 'system.png';
      break;

    case 'faq':
      backgroundPath += 'faq.png';
      break;

    case 'recipes':
      backgroundPath += 'recipes.png';
      break;

    default:
      backgroundPath += 'system.png';
      break;
  }
  return (
    <ImageBack background={backgroundPath}>
      <div />
    </ImageBack>
  );
};

export default HeaderImage;
