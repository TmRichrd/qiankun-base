import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

function render(props) {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    props.container
      ? props.container.querySelector('#root')
      : document.getElementById('root')
  )
}
if (!window.__POWERED_BY_QIANKUN__) {
  render({})
}
export async function bootstrap() {
  console.log('React app bootstraped')
}

export async function mount(props) {
  console.log('React app mount', props)
  render(props)
}
export async function unmount(props) {
  console.log('React app unmount', props)
  ReactDOM.unmountComponentAtNode(
    props.container
      ? props.container.querySelector('#root')
      : document.getElementById('root')
  )
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
