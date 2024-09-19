import { create } from 'zustand'

export interface ITask {
  id: number
  title: string
  status: boolean
}

export const taskState = create(() => ({
  tasks: [] as ITask[],
}))

export function useTask() {
  const { tasks } = taskState()

  function addTask(task: ITask) {
    taskState.setState({ tasks: [...tasks, task] })
  }

  function removeTask(id: number) {
    taskState.setState({ tasks: tasks.filter((task) => task.id !== id) })
  }

  function updateStatus(id: number) {
    taskState.setState({
      tasks: tasks.map((task) => {
        if (task.id === id) {
          return { ...task, status: !task.status }
        }

        return task
      }),
    })
  }

  return { tasks, addTask, removeTask, updateStatus }
}
