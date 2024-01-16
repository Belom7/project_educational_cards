import { TypedUseSelectorHook, useSelector } from 'react-redux'

import { RootState } from '@/common'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
