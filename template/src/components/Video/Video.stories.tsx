import React from 'react';
import { Video, VideoProps } from '.';
import { css } from '@emotion/core';

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

/** Show a placeholder image and delay loading the video. Results in better performance */
export const Placeholder = () => (
  <Video src={video} placeholder="https://source.unsplash.com/random/900x600" />
);

/** Inline autoplaying video, great for backgrounds */
export const Inline = () => (
  <Video src={video} inline autoplay />
);
