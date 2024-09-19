import { useTask } from '@/hooks/useTasks'
import scss from './status-checkbox.module.scss'

type StatusCheckBoxProps = {
  taskId: number
  isChecked: boolean
}

export function StatusCheckBox({ taskId, isChecked }: StatusCheckBoxProps) {
  const { updateStatus } = useTask()

  const handleUpdateStatus = () => updateStatus(taskId)

  return (
    <div onClick={handleUpdateStatus}>
      <input
        type="checkbox"
        id="checkbox"
        checked={isChecked}
        className={scss.checkboxInput}
      />
      <label htmlFor="checkbox" className={scss.checkboxLabel} />
    </div>
  )
}
