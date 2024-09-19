'use client'

import { useState } from 'react'
import scss from './delete-task.module.scss'
import { SecondaryButton } from '@/components/buttons/secondary-button'
import { DangerButton } from '@/components/buttons/danger-button'
import { Trash } from 'lucide-react'
import { useTask } from '@/hooks/useTasks'

type DeleteTaskDialogProps = {
  taskId: number
}

export function DeleteTaskDialog({ taskId }: DeleteTaskDialogProps) {
  const { removeTask } = useTask()

  const [isOpen, setIsOpen] = useState(false)

  const openDialog = () => setIsOpen(true)

  const closeDialog = () => setIsOpen(false)

  const handleDeleteTask = () => {
    removeTask(taskId)
    closeDialog()
  }

  return (
    <div>
      <div className={scss.taskIcon}>
        <Trash onClick={openDialog} size={24} />
      </div>

      {isOpen && (
        <div className={scss.dialogContainer}>
          <div className={scss.dialogCard}>
            <p className={scss.dialogTitle}>Deletar tarefa</p>
            <p className={scss.dialogDescription}>
              Deletar tarefa Tem certeza que você deseja deletar essa tarefa?
            </p>
            <div className={scss.dialogFooter}>
              <SecondaryButton title="Cancelar" onClick={closeDialog} />
              <DangerButton title="Deletar" onClick={handleDeleteTask} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
