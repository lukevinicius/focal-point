import scss from './secondary-button.module.scss'

type SecondaryButtonProps = {
  title: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export function SecondaryButton({ title, ...props }: SecondaryButtonProps) {
  return (
    <button {...props} className={scss.secondaryButton}>
      {title}
    </button>
  )
}
