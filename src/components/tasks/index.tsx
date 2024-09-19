'use client'

import scss from './tasks.module.scss'

import { CreateTaskDialog } from '@/components/dialogs/create-task'

import { ListTasks } from './list-tasks'
import { useTask } from '@/hooks/useTasks'

export function Tasks() {
  const { tasks } = useTask()

  return (
    <div className={scss.container}>
      <div className={scss.card}>
        {tasks.length === 0 ? (
          <p className={scss.title}>Nenhuma tarefa cadastrada</p>
        ) : (
          <ListTasks
            title="Suas tarefas de hoje"
            tasks={tasks}
            statusFilter={false}
          />
        )}
        {tasks.length > 0 && (
          <ListTasks
            title="Tarefas finalizadas"
            tasks={tasks}
            statusFilter={true}
          />
        )}
      </div>
      <CreateTaskDialog />
    </div>
  )
}
