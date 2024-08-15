import { MatrixContext, MatrixContextType } from '@/context/matrix';
import { useContext } from 'react';

export function useMatrix(): MatrixContextType {
  return useContext(MatrixContext);
}
