import React from "react"
import { Container, TaskPanel, Text } from "./styles"

import TopBar from '../../components/TopBar'

const Tasks: React.FC = () => {
  return (
    <Container>
        <TopBar />
        <TaskPanel>
          <Text>Tasks</Text>
          <Text>Organize suas tarefas</Text>
        </TaskPanel>
    </Container>
  )
}

export default Tasks
