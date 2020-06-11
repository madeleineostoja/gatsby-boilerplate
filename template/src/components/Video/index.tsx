import { css } from '@emotion/core';
import React from 'react';
import ReactPlayer, { ReactPlayerProps } from 'react-player';
import { aspect } from 'satchel-css';

export type VideoProps = {
  /** URL source of the video */
  src: string;
  /** Whether to remove all player controls and chrome */
  inline?: boolean;
  /** Optional placeholder image to click before playing */
  placeholder?: string | boolean;
  /** Whether the video should autoplay (must be muted) */
  autoplay?: boolean;
  /** Whether the video should fit its container like background-size: cover */
  cover?: boolean;
} & Partial<ReactPlayerProps>;

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
    <ReactPlayer
      css={[
        !cover &&
          css`
            ${aspect(16, 9, { mode: 'absolute' })}
            width: 100%;
          `,
        cover &&
          css`
            width: 100%;
          `
      ]}
      url={src}
      light={placeholder}
      width="100%"
      height="100%"
      loop={autoplay}
      muted={inline}
      playsinline={inline}
      controls={!inline}
      playing={!!placeholder}
      {...props}
    />
  );
}
