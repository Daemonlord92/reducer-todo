import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Container } from 'reactstrap'
import rootReducer from './reducer'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'

const store = createStore(rootReducer)

render(
    <Provider store={store}>
        <Container>
            <App />
        </Container>
    </Provider>,
    document.getElementById('root')
)