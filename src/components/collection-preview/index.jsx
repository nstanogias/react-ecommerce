import React from "react";

import CollectionItem from "../collection-item";

import styled from "styled-components";

const StyledCollectionPreview = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
`;

const Preview = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CollectionPreview = ({ title, items }) => (
  <StyledCollectionPreview>
    <Title>{title.toUpperCase()}</Title>
    <Preview>
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
    </Preview>
  </StyledCollectionPreview>
);

export default CollectionPreview;
