import type { Component } from 'solid-js'
import logo from './logo.svg'
import styles from './App.module.css'
import { createForm } from 'src'

const App: Component = () => {
  const form = createForm({
    initialValue: {
      firstName: '',
      lastName: '',
    },
  })

  return (
    <div class={styles.App}>
      <form.Field name="firstName">
        {field => (
          <div>
            <input value={field.value()} onInput={e => field.setValue(e.target.value)}></input>
          </div>
        )}
      </form.Field>
      <form.Field name="lastName">
        {field => (
          <div>
            <input value={field.value()} onInput={e => field.setValue(e.target.value)}></input>
          </div>
        )}
      </form.Field>
      <button onclick={() => form.handleSubmit(console.log, console.warn)}>Submit</button>
    </div>
  )
}

export default App
