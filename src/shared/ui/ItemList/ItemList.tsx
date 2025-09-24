import type { FC, PropsWithChildren, ReactNode } from 'react'

export interface ItemListProps<T> {
  items: T[]

  renderItem: (item: T, index: number) => ReactNode

  getKey: (item: T, index: number) => string | number
  className?: string
}

export const ItemList = <T,>({
  items,
  renderItem,
  getKey,
  className,
}: PropsWithChildren<ItemListProps<T>>) => {
  return (
    <div className={className}>
      {items.map((it, idx) => (
        <div key={getKey(it, idx)}>{renderItem(it, idx)}</div>
      ))}
    </div>
  )
}
