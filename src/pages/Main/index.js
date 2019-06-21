import React, { Component } from 'react';
import './Main.css';


class Main extends Component {

    state = {
        Main: [],
    };

    render() {
        return (
            <section id="main">
                <h1 className="title">Bulma</h1>
                <p className="subtitle">
                    Super style!
                </p>

                <div className="field">
                    <div className="control">
                        <input className="input" type="text" placeholder="Input" />
                    </div>
                </div>

                <div className="field">
                    <p className="control">
                        <div class="select">
                            <select>
                                <option>Select dropdown</option>
                                <option>With options</option>
                            </select>
                        </div>
                    </p>
                </div>

                <div className="buttons">
                    <a className="button is-primary">Primary</a>
                    <a className="button is-link">Link</a>
                </div>
            </section>
        );
    }
}

export default Main;