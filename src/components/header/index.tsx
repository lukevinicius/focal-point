import Image from 'next/image'
import scss from './header.module.scss'
import logo from '@/assets/logo.png'

export function Header() {
  return (
    <header className={scss.header}>
      <div className={scss.container}>
        <Image src={logo} alt="logo-marca" />
        <p className={scss.mainText}>Bem-vindo de volta, Marcus</p>
        <p className={scss.dateText}>
          {new Date().toLocaleDateString('pt-BR', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </p>
      </div>
    </header>
  )
}
