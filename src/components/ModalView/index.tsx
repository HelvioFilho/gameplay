import React, { ReactNode } from 'react';
import {
  View,
  Modal,
  ModalProps,
  TouchableWithoutFeedback
} from 'react-native';

import { styles } from './styles';

import { Background } from '../Background';

type Props = ModalProps & {
  children: ReactNode;
  styleVision?: boolean;
  closeModal: () => void;
}

export function ModalView({ children, styleVision, closeModal, ...rest }: Props) {
  return (
    <Modal
      transparent
      animationType={styleVision ? "fade" : "slide"}
      statusBarTranslucent
      {...rest}
    >
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styleVision ? [styles.error, styles.overlay] : styles.overlay}>
          <View style={styleVision ? styles.modalView : styles.container}>
            <Background>
              <View style={styles.bar} />
              {children}
            </Background>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal >
  );
}