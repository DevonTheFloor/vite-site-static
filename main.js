import './style.css'
import javascriptLogo from './javascript.svg'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite multi pages!</h1>
    <div class="card">
      <a href="./deuxieme/">Deuxieme page</a>
    </div>
    <div class="card">
      <a href="./troisieme/">Troisième page</a>
    </div>
  </div>
`
