import { css } from '@emotion/core';
import React, { HTMLProps } from 'react';
import ReactPlayer from 'react-player';
import { aspect, position } from 'satchel-css';

export type VideoProps = {
  /** URL source of the video */
  src: string;
  /** Whether to remove all player controls and chrome */
  inline?: boolean;
  /** Optional placeholder image to click before playing */
  placeholder?: string;
  /** Whether the video should autoplay (must be muted) */
  autoplay?: boolean;
  /** Whether the video should fit its container like background-size: cover */
  cover?: boolean;
} & HTMLProps<HTMLDivElement> &
  any;

/**
 * Adaptive video player for local files and streaming services
 */
export function Video({
  src,
  inline,
  placeholder,
  autoplay,
  cover,
  ...props
}: VideoProps) {
  return (
    <div
      css={[
        !cover &&
          css`
            ${aspect(16, 9)}
            width: 100vw;
            max-width: 100%;
          `,
        cover &&
          css`
            width: 100%;
          `
      ]}
      data-cover={cover}
    >
      <ReactPlayer
        css={css`
          ${position('absolute', 0)}
        `}
        url={src}
        light={placeholder}
        width="100%"
        height="100%"
        loop={autoplay}
        muted={inline}
        playsinline={inline}
        controls={!inline}
        {...props}
      />
    </div>
  );
}
