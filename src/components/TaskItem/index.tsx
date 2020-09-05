import React, { useState } from 'react';

import { Ionicons } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'; 
import { 
  Container, 
  TitleTask, 
  TitleContainer, 
  DescriptionContainer, 
  Description, 
  ButtonCheck, 
  ButtonTrash 
} from './styles';

const TaskItem: React.FC = () => {
  const [check, setCheck] = useState(false)

  return (
    <Container>
        <TitleContainer>
          <ButtonTrash>
            <Ionicons name='ios-trash' size={35} color='#c70000'/>
          </ButtonTrash>
            <ButtonCheck onPress={ () => setCheck(!check) } >
              {
                check ? <Ionicons name='ios-checkmark-circle' size={35} color='#52ff74' />
                : <Entypo name='circle' size={30} color='#52ff74' />
              }
            </ButtonCheck>
            <TitleTask>Criar FrontEnd da aplicação</TitleTask>
        </TitleContainer>
        <DescriptionContainer>
            <Description>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Description> 
        </DescriptionContainer>
    </Container>
  )
}

export default TaskItem