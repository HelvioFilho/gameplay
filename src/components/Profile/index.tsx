import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useAuth } from '../../hooks/auth';

import { Avatar } from '../Avatar';
import { ModalExit } from '../../components/ModalExit';

import { styles } from './styles';

export function Profile() {
  const { user, signOut } = useAuth();
  const [openExitModal, setOpenExitModal] = useState(false);

  function handleOpenExit() {
    setOpenExitModal(true);
  }

  function handleCloseExit() {
    setOpenExitModal(false);
  }

  function teste() {
    console.log("saindo");
  }
  return (
    <View style={styles.container}>
      <RectButton onPress={handleOpenExit}>
        <Avatar urlImage={user.avatar} />
      </RectButton>
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>
            Olá,
          </Text>
          <Text style={styles.username}>
            {user.firstName}
          </Text>
        </View>
        <Text style={styles.message}>
          Hoje é dia de vitória
        </Text>
      </View>
      <ModalExit visible={openExitModal} closeModal={handleCloseExit}>
        <Text style={styles.title}>Deseja sair do Game<Text style={styles.titleColor}>Play</Text>?</Text>
        <View style={styles.boxBottom}>
          <TouchableOpacity
            style={styles.btn}
            onPress={handleCloseExit}
            activeOpacity={0.8}
          >
            <Text style={[styles.btnBody, styles.cancel]}>
              Não
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={signOut}
            activeOpacity={0.8}
          >
            <Text style={[styles.btnBody, styles.confirm]}>
              Sim
            </Text>
          </TouchableOpacity>
        </View>
      </ModalExit>
    </View>
  );
}