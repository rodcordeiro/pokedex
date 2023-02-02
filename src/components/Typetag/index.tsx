import React from 'react';
import { getColor, getIcon } from '../../utils';
import { Container, Text } from './styles';
interface iTag {
  type: string;
}

const Tag: React.FC<iTag> = ({ type }) => {
  const Icon = getIcon(type);

  return (
    <Container style={[{ backgroundColor: getColor(type).tag }]}>
      {Icon && <Icon height={5} width={5} />}
      <Text>{type}</Text>
    </Container>
  );
};

export default React.memo(Tag);
