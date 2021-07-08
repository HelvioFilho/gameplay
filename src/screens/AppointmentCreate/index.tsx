import React, { useState } from 'react';
import {
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import uuid from 'react-native-uuid';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { TextArea } from '../../components/TextArea';
import { ModalView } from '../../components/ModalView';
import { GuildIcon } from '../../components/GuildIcon';
import { SmallInput } from '../../components/SmallInput';
import { Background } from '../../components/Background';
import { CategorySelect } from '../../components/CategorySelect';

import { Guilds } from '../Guilds';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { GuildProps } from '../../components/Guild';
import { COLLECTION_APPOINTMENTS } from '../../configs/database';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function AppointmentCreate() {
  const [category, setCategory] = useState('');
  const [openGuildsModal, setOpenGuildsModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);
  const [openErrorModal, setOpenErrorModal] = useState(false);

  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const [description, setDescription] = useState('');
  const [textError, setTextError] = useState('');

  const navigation = useNavigation();

  function handleOpenGuilds() {
    setOpenGuildsModal(true);
  }

  function handleCloseGuilds() {
    setOpenGuildsModal(false);
  }

  function handleOpenError() {
    setOpenErrorModal(true);
  }

  function handleCloseError() {
    setOpenErrorModal(false);
  }

  function handleGuildSelect(guildSelect: GuildProps) {
    setGuild(guildSelect);
    setOpenGuildsModal(false);
  }

  function handleCategorySelect(categoryId: string) {
    setCategory(categoryId);
  }

  function verifyDate() {
    switch (isNaN(parseInt(month)) || parseInt(month)) {
      case true:
        parseInt(day) <= 31 ? '' : setDay('31');
        break;
      case 2:
        parseInt(day) <= 29 ? '' : setDay('29');
        break;
      default:
        parseInt(day) <= 31 ? '' : setDay('31');
        parseInt(month) <= 12 ? '' : setMonth('12');
        break;
    }
    if (day.length === 1) {
      setDay(`0${day}`);
    }
    if (month.length === 1) {
      setMonth(`0${month}`);
    }
  }

  function verifyTime() {
    parseInt(hour) > 23 ? setHour('23') : '';
    parseInt(minute) > 59 ? setMinute('00') : '';
    if (hour.length === 1) {
      setHour(`0${hour}`);
    }
    if (minute.length === 1) {
      setMinute(`0${minute}`);
    }
  }

  async function handleSave() {
    const newAppointment = {
      id: uuid.v4(),
      guild,
      category,
      date: `${day}/${month} às ${hour}:${minute}h`,
      description,
    }

    const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const appointments = storage ? JSON.parse(storage) : [];

    await AsyncStorage.setItem(
      COLLECTION_APPOINTMENTS,
      JSON.stringify([...appointments, newAppointment])
    );
    navigation.navigate('Home');
  }

  function checkForm() {
    if (category === '') {
      setTextError('Selecione uma categoria!');
      handleOpenError();
    } else if (guild.id === undefined) {
      setTextError('Selecione um servidor!');
      handleOpenError();
    } else if (day === '' || month === '') {
      setTextError('Defina um dia e mês!');
      handleOpenError();
    } else if (hour === '' || minute === '') {
      setTextError('Defina um horário válido!');
      handleOpenError();
    } else if (description === '') {
      setTextError('Escreva uma descrição!');
      handleOpenError();
    } else {
      handleSave();
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <Background>
        <ScrollView>
          <Header
            title="Agendar Partida"
          />
          <Text style={[
            styles.label,
            { marginLeft: 24, marginTop: 36, marginBottom: 18 }]}
          >
            Categoria
          </Text>
          <CategorySelect
            hasCheckBox
            setCategory={handleCategorySelect}
            categorySelected={category}
          />
          <View style={styles.form}>
            <RectButton onPress={handleOpenGuilds}>
              <View style={styles.select}>
                {
                  guild.icon ? <GuildIcon guildId={guild.id} iconId={guild.icon} /> : <View style={styles.image} />
                }
                <View style={styles.selectBody}>
                  <Text style={styles.label}>
                    {guild.name ? guild.name : 'Selecione um servidor'}
                  </Text>
                </View>
                <Feather
                  name="chevron-right"
                  color={theme.colors.heading}
                  size={18}
                />
              </View>
            </RectButton>
            <View style={styles.field}>
              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>
                  Dia e mês
                </Text>
                <View style={styles.column}>
                  <SmallInput
                    maxLength={2}
                    onChangeText={setDay}
                    onBlur={verifyDate}
                    value={day}
                  />
                  <Text style={styles.divider}>
                    /
                  </Text>
                  <SmallInput
                    maxLength={2}
                    onChangeText={setMonth}
                    onBlur={verifyDate}
                    value={month}
                  />
                </View>
              </View>
              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>
                  Hora e minuto
                </Text>
                <View style={styles.column}>
                  <SmallInput
                    maxLength={2}
                    onChangeText={setHour}
                    onBlur={verifyTime}
                    value={hour}
                  />
                  <Text style={styles.divider}>
                    :
                  </Text>
                  <SmallInput
                    maxLength={2}
                    onChangeText={setMinute}
                    onBlur={verifyTime}
                    value={minute}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.field, { marginBottom: 12 }]}>
              <Text style={styles.label}>
                Descrição
              </Text>
              <Text style={styles.caracteresLimit}>
                Max 100 caracteres
              </Text>
            </View>
            <TextArea
              multiline
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}
              onChangeText={setDescription}
            />
            <View style={styles.footer}>
              <Button
                title="Agendar"
                onPress={checkForm}
              />
            </View>
          </View>
        </ScrollView>
      </Background>
      <ModalView visible={openErrorModal} styleVision={true} closeModal={handleCloseError}>
        <Text style={styles.error}>{textError}</Text>
      </ModalView>
      <ModalView visible={openGuildsModal} closeModal={handleCloseGuilds}>
        <Guilds handleGuildSelect={handleGuildSelect} />
      </ModalView>
    </KeyboardAvoidingView>
  );
}