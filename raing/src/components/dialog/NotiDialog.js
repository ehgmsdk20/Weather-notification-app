import React from 'react';
import {Modal} from 'react-native';
import styled from 'styled-components/native';

const Background = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  background-color: rgba( 0, 0, 0, 0.5 );
`;
const NotiDialogContainer = styled.View`
  position: absolute;
  width: 300px;
  border-radius: 4px;
  background-color: #FFFFFF;
`;
const Title = styled.Text`
  font-size: 25px;
  text-align: center;
  margin: 10px;
  color: #000000;
  border-bottom-color: #000000;
  border-bottom-width: 1px;
`;
const MainText = styled.Text`
  font-size: 20px;
  text-align: center;
  margin: 10px;
  color: #000000;
`;

const NotiDialog = (props) => {
  const { modalVisible, setModalVisible, content } = props

  return (
    <Modal
      animationType={'fade'}
      transparent={true}
      visible={modalVisible}>
      <Background
        onTouchEnd={() => setModalVisible(false)}>
        <NotiDialogContainer>
          <Title>
            Test
          </Title>
          <MainText>
            내일 비가 올까용?
            {/* {content} */}
          </MainText>
        </NotiDialogContainer>
      </Background>
    </Modal>
  );

};

export default NotiDialog;