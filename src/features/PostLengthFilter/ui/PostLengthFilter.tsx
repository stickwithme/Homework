import type { FC, ChangeEvent } from 'react'
import styles from './PostLengthFilter.module.css'

interface PostLengthFilterProps {
  minLength: number
  setMinLength: (value: number) => void
}

export const PostLengthFilter: FC<PostLengthFilterProps> = ({ minLength, setMinLength }) => {
  const onNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const v = e.currentTarget.valueAsNumber
    const next = Number.isNaN(v) ? 0 : Math.max(0, Math.trunc(v))
    setMinLength(next)
  }

  const onRangeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const v = e.currentTarget.valueAsNumber
    setMinLength(Number.isNaN(v) ? 0 : v)
  }

  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>Минимальная длина заголовка:</label>
      <div className={styles.controls}>
        <input
          type="number"
          min={0}
          value={minLength}
          onChange={onNumberChange}
          className={styles.number}
          aria-label="Число минимальной длины заголовка"
        />
        <input
          type="range"
          min={0}
          max={100}
          step={1}
          value={Math.min(100, Math.max(0, minLength))}
          onChange={onRangeChange}
          className={styles.range}
          aria-label="Ползунок минимальной длины заголовка"
        />
        <span className={styles.hint}>{minLength}</span>
      </div>
    </div>
  )
}
