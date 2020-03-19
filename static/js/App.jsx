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

        });

    }
    render () {
        return (
            <PageHeader>
          <div>     <button onClick={this.getPythonHello}>
                    Clicker

                </button>
              </div>
            </PageHeader>
        );
    }
}
