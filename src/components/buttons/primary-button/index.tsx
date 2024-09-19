import scss from './primary-button.module.scss'

type PrimaryButtonProps = {
  title: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export function PrimaryButton({ title, ...props }: PrimaryButtonProps) {
  return (
    <button {...props} className={scss.primaryButton}>
      {title}
    </button>
  )
}
