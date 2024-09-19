import scss from './tasks.module.scss'
import { DeleteTaskDialog } from '../dialogs/delete-task'
import { StatusCheckBox } from '@/components/tasks/status-checkbox'

type ListTasksProps = {
  title: string
  tasks: {
    id: number
    title: string
    status: boolean
  }[]
  statusFilter: boolean
}

export function ListTasks({ title, tasks, statusFilter }: ListTasksProps) {
  return (
    <>
      <p className={scss.title}>{title}</p>
      <div className={scss.taskContainer}>
        {tasks
          .filter((task) => task.status === statusFilter)
          .map((task) => (
            <div key={task.id} className={scss.task}>
              <StatusCheckBox taskId={task.id} isChecked={task.status} />
              <p
                className={
                  task.status ? scss.taskTitleCompleted : scss.taskTitle
                }
              >
                {task.title}
              </p>

              <DeleteTaskDialog taskId={task.id} />
            </div>
          ))}
      </div>
    </>
  )
}
