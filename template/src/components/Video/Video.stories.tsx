import { css } from '@emotion/core';
import React from 'react';
import { Video, VideoProps } from '.';

export default {
  title: 'Components/Video',
  component: Video
};

const video = 'https://vimeo.com/channels/staffpicks/310781983';

export const Default = ({ src = video, ...props }: VideoProps) => (
  <Video
    css={css`
      width: 100%;
    `}
    {...{ src, ...props }}
  />
);

export const Placeholder = () => <Video src={video} placeholder />;

export const CustomPlaceholder = () => (
  <Video src={video} placeholder="https://source.unsplash.com/random/900x600" />
);

export const Inline = () => <Video src={video} inline autoplay />;
