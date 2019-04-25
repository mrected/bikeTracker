import React, { Component } from 'react';

class Status extends Component {


    render() {
        return (
            <div className="app">
                <h1>status name</h1>
                <section className="module">
                    {/*

                    "lastService": "1/8/18",
                    "milesUntilService": "10",
                    "milesUntilReplace": "1000" */}
                    <div>
                        <p>image</p>
                        <h2 className="module-title">name</h2>
                    </div>
                    <div>
                        <div className="status-bar">
                            <div className="status-light good"></div>
                            <div className="status-light warning"></div>
                            <div className="status-light danger"></div>
                        </div>
                    </div>
                </section>
                <section className="module">
                    <div>
                        <p className="module-text">Purchased: date</p>
                        <p className="module-text">Last Serviced: date</p>
                        <p className="module-text">Miles until next svc: number</p>
                        <p className="module-text">Miles until replace: number</p>
                    </div>
                </section>
            </div>
        );
    }
}

export default Status;
