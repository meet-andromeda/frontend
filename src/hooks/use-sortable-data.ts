import { useMemo, useState } from 'react';
import get from 'lodash.get';
import { isNumber } from 'helpers/big-number';

interface SortConfig {
  key: string;
  direction: 'ascending' | 'descending';
}

interface UseSortableDataResponse<T> {
  items: T[];
  requestSort: (key: string) => void;
  sortConfig: SortConfig;
}

interface UseSortableDataProps<T> {
  items: T[];
  config: SortConfig;
}

function useSortableData<T>({
  items,
  config,
}: UseSortableDataProps<T>): UseSortableDataResponse<T> {
  const [sortConfig, setSortConfig] = useState<SortConfig>(config);

  const sortedItems = useMemo(() => {
    const sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a: T, b: T) => {
        const { key } = sortConfig;
        let aValue = get(a, key);
        let bValue = get(b, key);

        if (isNumber(aValue) && isNumber(bValue)) {
          aValue = Number(aValue);
          bValue = Number(bValue);
        }

        if (aValue < bValue) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }

        if (aValue > bValue) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }

    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key: string): void => {
    const direction = sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending' ? 'descending' : 'ascending';
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
}

export default useSortableData;
export type {
  SortConfig,
};
