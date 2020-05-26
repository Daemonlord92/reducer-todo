import React from 'react'
import { Card } from 'reactstrap'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text }) => (
    <Card
        onClick={onClick}
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}
    >
        {text}
    </Card>
)

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo