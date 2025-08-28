import type { ButtonHTMLAttributes } from 'react'
import styles from './Button.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}) => {
  const variantClass = styles[variant] || styles.primary
  const buttonClass = `${styles.button} ${variantClass} ${className}`.trim()

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  )
}
