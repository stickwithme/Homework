import type { FC, ChangeEvent } from 'react'
import styles from './PostLengthFilter.module.css'

interface PostLengthFilterProps {
  minLength: number
  setMinLength: (value: number) => void
}

export const PostLengthFilter: FC<PostLengthFilterProps> = ({
  minLength,
  setMinLength,
}) => {
  const onNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const v = e.currentTarget.valueAsNumber
    const next = Number.isNaN(v) ? 0 : Math.max(0, Math.trunc(v))
    setMinLength(next)
  }

  const onRangeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMinLength(e.currentTarget.valueAsNumber || 0)
  }

  const rangeFill = minLength % 100
  const rangeStyle = {
    background: `linear-gradient(90deg, #5b9cff 0%, #5b9cff ${rangeFill}%, rgba(0,0,0,0.12) ${rangeFill}%)`,
  } as React.CSSProperties

  return (
    <div className={styles.filter} aria-label="Фильтр по длине заголовка">
      <div className={styles.row}>
        <span className={styles.label}>Минимальная длина заголовка</span>
        <input
          className={styles.numberInput}
          type="number"
          min={0}
          step={1}
          inputMode="numeric"
          value={String(minLength)}
          onChange={onNumberChange}
          aria-label="Минимальная длина заголовка, число"
        />
      </div>

      <div className={styles.rangeWrap}>
        <input
          className={styles.range}
          type="range"
          min={0}
          max={100}
          step={1}
          value={Math.min(100, Math.max(0, minLength))}
          onChange={onRangeChange}
          style={rangeStyle}
          aria-label="Ползунок минимальной длины заголовка"
        />
        <span className={styles.hint}>{minLength}</span>
      </div>
    </div>
  )
}
