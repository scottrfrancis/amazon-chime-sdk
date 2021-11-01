// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React from 'react';
import {
  Heading,
  PreviewVideo,
  QualitySelection,
  CameraSelection,
  Label,
  VideoFilterSelection
} from 'amazon-chime-sdk-component-library-react';

import { title, StyledInputGroup } from '../Styled';

const CameraDevices = () => {
  return (
    <div>
      <Heading tag="h2" level={6} css={title}>
        Video
      </Heading>
      <StyledInputGroup>
        <CameraSelection />
      </StyledInputGroup>
      <StyledInputGroup>
        <QualitySelection />
      </StyledInputGroup>
      <StyledInputGroup>
        <VideoFilterSelection />
      </StyledInputGroup>
      <Label style={{ display: 'block', marginBottom: '.5rem' }}>
        Video preview
      </Label>
      <PreviewVideo />
    </div>
  );
};

export default CameraDevices;
