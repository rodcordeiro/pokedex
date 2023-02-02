import React from 'react';
import { Svg, Path, Circle } from 'react-native-svg';

const Pokeball = () => {
  return (
    <Svg width="19.7" height="19.9" viewBox="0 0 394 398" fill="none">
      <Path
        d="M151 180H13C13 180 43 10 209 10C375 10 407 180 407 180H265C249 146 189 128 151 180Z"
        stroke="#FFFFFF"
        stroke-width="40"
        fill="#F4F4F4"
      />
      <Path
        d="M269 238H407C407 238 377 408 211 408C45 408 13 238 13 238H155C171 272 231 290 269 238Z"
        stroke="#FFFFFF"
        stroke-width="40"
        fill="#F4F4F4"
      />
      <Circle
        cx="207"
        cy="209"
        r="30"
        stroke="#FFFFFF"
        stroke-width="40"
        fill="#F4F4F4"
      />
    </Svg>
  );
};

export default React.memo(Pokeball);
