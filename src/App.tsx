import { Provider } from 'react-redux'

import { store } from '@/common/api'
import { Router } from '@/common/routes'

export function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}
