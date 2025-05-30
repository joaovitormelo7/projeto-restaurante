import { styled } from "styled-components";
import IconButton from "../../IconButton";

const Figure = styled.figure`
  width: ${props => props.$expand ? '90%' : '460px'};
  max-width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;

  & > img {
    max-width: 100%;
    border-radius: 20px 20px 0 0;
  }

  figcaption {
    background-color: #001634;
    border-radius: 0 0 20px 20px;
    color: white;
    box-sizing: border-box;
    padding: 12px;

    h3 {
      font-family: 'GandhiSansBold';
    }

    h4 {
      flex-grow: 1;
    }

    h3, h4 {
      margin: 0;
      font-size: 16px;
    }
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FavoriteIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const Image = ({ picture, expand = false, onZoomSelect, onFavoriteSelect, onAlternateFav }) => {
  const isFavorite = picture.favorite;
  const checkFavoriteIcon = isFavorite
    ? '/image/icon/favorite-ativo.png'
    : '/image/icon/icons8-estrela-48.png';

  return (
    <Figure $expand={expand} id={`picture-${picture.id}`}>
      <img
        src={picture.path}
        alt={picture.alt}
        loading="lazy"
      />
      <figcaption>
        <h3>{picture.title}</h3>
        <Footer>
          <h4>{picture.font}</h4>
          <IconButton
            onClick={() => {
              if (onFavoriteSelect) onFavoriteSelect({ ...picture, favorite: !isFavorite });
              if (onAlternateFav) onAlternateFav(picture);
            }}
          >
            <FavoriteIcon src={checkFavoriteIcon} alt="Favorite icon" />
          </IconButton>

          {!expand && (
            <IconButton aria-hidden={expand} onClick={() => onZoomSelect(picture)}>
              <img src="/image/icon/icons8-expandir-30.png" alt="Expand image icon" />
            </IconButton>
          )}
        </Footer>
      </figcaption>
    </Figure>
  );
};

export default Image;
