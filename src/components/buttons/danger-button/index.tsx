import scss from './danger-button.module.scss'

type DangerButtonProps = {
  title?: string
  icon?: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export function DangerButton({ title, icon, ...props }: DangerButtonProps) {
  return (
    <button {...props} className={scss.dangerButton}>
      {icon}
      {title}
    </button>
  )
}
