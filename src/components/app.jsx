import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'

import Header from './header'
import StreamCreate from './streams/streamCreate'
import StreamDelete from './streams/streamDelete'
import StreamEdit from './streams/streamEdit'
import StreamList from './streams/streamList'
import StreamShow from './streams/streamShow'
import history from '../history'

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <Header/>
                <div className="ui padded grid">
                    <Switch>
                        <Route path="/" exact component={StreamList} />
                        <Route path="/streams/new" exact component={StreamCreate} />
                        <Route path="/streams/edit/:id" exact component={StreamEdit} />
                        <Route path="/streams/delete/:id" exact component={StreamDelete} />
                        <Route path="/streams/:id" exact component={StreamShow} />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default App