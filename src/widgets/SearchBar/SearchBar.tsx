import type { FC, ChangeEvent, FormEvent } from 'react'
import styles from './SearchBar.module.css'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  onSubmit?: () => void
}

export const SearchBar: FC<SearchBarProps> = ({ value, onChange, placeholder, onSubmit }) => {
  const submit = (e: FormEvent) => {
    e.preventDefault()
    onSubmit?.()
  }
  const onInput = (e: ChangeEvent<HTMLInputElement>) => onChange(e.currentTarget.value)

  return (
    <form onSubmit={submit} className={styles.wrapper}>
      <input
        className={styles.input}
        value={value}
        onChange={onInput}
        placeholder={placeholder ?? 'Поиск...'}
        aria-label={placeholder ?? 'Поиск'}
      />
      <button className={styles.button} type="submit">Найти</button>
    </form>
  )
}
