import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { SkeletonContainer } from '../styles/PayoutsPage.styles';

const SkeletonLoader: React.FC = () => (
  <SkeletonContainer>
    <Skeleton height={40} width={'100%'} style={{ marginBottom: 40 }} />
    <Skeleton height={20} width={'100%'} style={{ marginBottom: 20 }} />
    <Skeleton height={20} width={'100%'} style={{ marginBottom: 20 }} />
    <Skeleton height={20} width={'100%'} style={{ marginBottom: 20 }} />
    <Skeleton height={20} width={'100%'} style={{ marginBottom: 20 }} />
    <Skeleton height={20} width={'100%'} style={{ marginBottom: 20 }} />
  </SkeletonContainer>
);

export default SkeletonLoader;
