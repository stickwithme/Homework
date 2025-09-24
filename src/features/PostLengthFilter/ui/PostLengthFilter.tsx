import { FC, useCallback, ChangeEvent } from 'react'

type PostLengthFilterProps = {
  minLength: number
  setMinLength: (value: number) => void
}

export const PostLengthFilter: FC<PostLengthFilterProps> = ({
  minLength,
  setMinLength,
}) => {
  const onNumberChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const v = e.currentTarget.valueAsNumber
      const next = Number.isNaN(v) ? 0 : Math.max(0, Math.trunc(v))
      setMinLength(next)
    },
    [setMinLength]
  )

  const onRangeChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const v = e.currentTarget.valueAsNumber
      const next = Number.isNaN(v) ? 0 : Math.max(0, Math.trunc(v))
      setMinLength(next)
    },
    [setMinLength]
  )

  return (
    <div>
      <label>Минимальная длина: {minLength}</label>
      <input type="number" value={minLength} onChange={onNumberChange} />
      <input
        type="range"
        min={0}
        max={100}
        step={1}
        value={minLength}
        onChange={onRangeChange}
      />
    </div>
  )
}
