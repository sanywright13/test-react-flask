import React from "react";
import { PageHeader } from "react-bootstrap";

require('../css/fullstack.css');
var $ = require('jquery');


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.getPythonHello=this.getPythonHello.bind(this);
    }

    getPythonHello() {
        $.get(window.location.href + 'hello', (data) => {
            console.log(data);
            this.personaliseGreeting(data);
        });
    }
    render () {
        return (
            <PageHeader>
                <button onClick={this.getPythonHello}></button>button>
            </PageHeader>
        );
    }
}
