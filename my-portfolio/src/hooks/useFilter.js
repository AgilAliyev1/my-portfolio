import { useState, useMemo } from 'react'

export function useFilter(items, { searchKeys = ['title'], categoryKey = 'category' } = {}) {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  const categories = useMemo(() => {
    const cats = new Set(items.map(item => item[categoryKey]))
    return ['All', ...cats]
  }, [items, categoryKey])

  const filtered = useMemo(() => {
    return items.filter(item => {
      const matchesSearch = searchKeys.some(key =>
        String(item[key]).toLowerCase().includes(search.toLowerCase())
      )
      const matchesCategory = category === 'All' || item[categoryKey] === category
      return matchesSearch && matchesCategory
    })
  }, [items, search, category, searchKeys, categoryKey])

  return { search, setSearch, category, setCategory, categories, filtered }
}
