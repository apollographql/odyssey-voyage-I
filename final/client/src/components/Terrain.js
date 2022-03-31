import PropTypes from 'prop-types';
import {Aerial, Aquatic, Galactic, Magmatic, Terrestrial} from './icons';

const terrainIcons = {
  TERRESTRIAL: <Terrestrial />,
  AQUATIC: <Aquatic />,
  AERIAL: <Aerial />,
  GALACTIC: <Galactic />,
  MAGMATIC: <Magmatic />
};

export const Terrain = ({terrain}) => {
  const terrainIcon = terrainIcons[terrain];
  return (
    <svg width="30" height="40">
      {terrainIcon}
    </svg>
  );
};

export default Terrain;

Terrain.propTypes = {
  terrain: PropTypes.string
};
