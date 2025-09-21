// src/shared/ui/ItemList/ItemList.tsx
import type { FC, PropsWithChildren, ReactNode } from 'react'

export interface ItemListProps<T> {
  items: T[]
  // как отрисовать элемент
  renderItem: (item: T, index: number) => ReactNode
  // уникальный ключ
  getKey: (item: T, index: number) => string | number
  className?: string
}

/**
 * Универсальный список с дженериком.
 * Пример:
 * <ItemList items={posts} getKey={p => p.id} renderItem={(p) => <PostCard post={p} />} />
 */
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
