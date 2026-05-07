import {Route, Routes} from 'react-router-dom'

import * as C from '@page/Client'
import * as R from '@page/Root'

import '@styles/App.scss'
import '@styles/App.css'

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<R.SignInPage />} />
      </Route>
      <Route path="/client">
        <Route index element={<C.Template />} />
      </Route>
    </Routes>
  )
}

export default App
