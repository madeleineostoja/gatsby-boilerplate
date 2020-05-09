import React from 'react';
import { Meta, MetaProps } from '.';

export default {
  title: 'Components/Meta',
  component: Meta
};

export const Default = (props: MetaProps) => <Meta {...props} />;
