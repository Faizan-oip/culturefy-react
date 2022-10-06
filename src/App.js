//router
import IndexRouters from "./router/index"

//scss
import "./assets/scss/socialv.scss"
import "./assets/scss/customizer.scss"

import globalStyles from './globalStyles.module.scss'

function App() {
  return (
    <div className="App">
      <IndexRouters />
    </div>
  );
}

export default App;
