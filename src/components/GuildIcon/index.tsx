import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';

export function GuildIcon() {
  const uri = 'https://s2.glbimg.com/qATGpWjVKu2GCCqFNmwl6FzbOkI=/0x0:1099x731/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/M/v/hGAcJnQsaaC7Ng09MdQg/key-visual.png';
  return (
    <Image
      style={styles.image}
      source={{ uri }}
      resizeMode="cover"
    />
  )
}