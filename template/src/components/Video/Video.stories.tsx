import React from 'react';
import { Video, VideoProps } from '.';
import { css } from '@emotion/core';

export default {
  title: 'Components/Video',
  component: Video
};

export const Default = ({
  src = 'https://vimeo.com/channels/staffpicks/55073825',
  ...props
}: VideoProps) => (
  <Video
    css={css`
      width: 100%;
    `}
    {...{ src, ...props }}
  />
);

/** Show a placeholder image and delay loading the video. Results in better performance */
export const Placeholder = () => (
  <Video
    src="https://vimeo.com/channels/staffpicks/55073825"
    placeholder="https://source.unsplash.com/random/900x600"
  />
);

/** Inline autoplaying video, great for backgrounds */
export const Inline = () => (
  <Video src="https://vimeo.com/channels/staffpicks/55073825" inline autoplay />
);
