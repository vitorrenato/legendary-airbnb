import React from 'react';
import { useRoute } from '@react-navigation/native';

import DetailedPost from '../../components/DetailedPost';

import places from '../../../assets/data/feed';

export default function PostScreen() {

    const route = useRoute();
    const { postId } = route.params;
    const item = places[postId];

    return(
        <DetailedPost post={item} />
    )
}