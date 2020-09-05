import React from "react"
import { Ionicons } from '@expo/vector-icons'
import { Container, TaskPanel, Title } from "./styles"

import TopBar from '../../components/TopBar'
import TaskItem from '../../components/TaskItem'

const Tasks: React.FC = () => {
  return (
    <Container>
        <TopBar />
        <TaskPanel>
          <Title>Suas Tarefas {``} <Ionicons name='ios-paper' size={20} /> </Title>

         <TaskItem />
         <TaskItem />
         <TaskItem />
         <TaskItem />
         <TaskItem />
        </TaskPanel>
    </Container>
  )
}

export default Tasks
