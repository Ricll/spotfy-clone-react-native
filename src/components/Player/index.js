import React from 'react';

import {
  Container,
  CoverBackground,
  EpisodeInfo,
  Title,
  Author,
  Controls,
  ControlButtom,
  ControlIcon,
} from './styles';

const Player = () => (
  <Container>
    <CoverBackground source={{ uri: 'https://s3-sa-east-1.amazonaws.com/gonative/cover1.png' }} />
    <EpisodeInfo>
      <Title>Papercut</Title>
      <Author>Linkin Park</Author>
    </EpisodeInfo>
    <Controls>
      <ControlButtom onPress={() => {}}>
        <ControlIcon name="skip-previous" />
      </ControlButtom>

      <ControlButtom onPress={() => {}}>
        <ControlIcon name="play-circle-filled" />
      </ControlButtom>

      <ControlButtom onPress={() => {}}>
        <ControlIcon name="skip-next" />
      </ControlButtom>
    </Controls>
  </Container>
);

export default Player;
