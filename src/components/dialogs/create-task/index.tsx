'use client'

import { useState } from 'react'
import scss from './create-task.module.scss' // Importando o arquivo SCSS
import { PrimaryButton } from '@/components/buttons/primary-button'
import { SecondaryButton } from '@/components/buttons/secondary-button'
import { useTask } from '@/hooks/useTasks'

export function CreateTaskDialog() {
  const [isOpen, setIsOpen] = useState(false)
  const { addTask } = useTask()

  const openDialog = () => setIsOpen(true)

  const closeDialog = () => setIsOpen(false)

  function handleAddTask(data: FormData) {
    const title = data.get('title')?.toString()

    console.log(title)

    if (!title) {
      return
    }

    addTask({ id: Date.now(), title, status: false })

    closeDialog()
  }

  return (
    <div>
      <PrimaryButton title="Adicionar nova tarefa" onClick={openDialog} />

      {isOpen && (
        <div className={scss.dialogContainer}>
          <form action={handleAddTask}>
            <div className={scss.dialogCard}>
              <p className={scss.dialogTitle}>Nova tarefa</p>

              <div>
                <label htmlFor="task">Título</label>
                <input type="text" name="title" placeholder="Digite" />
              </div>

              <div className={scss.dialogFooter}>
                <SecondaryButton title="Cancelar" onClick={closeDialog} />
                <PrimaryButton title="Adicionar" type="submit" />
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}
