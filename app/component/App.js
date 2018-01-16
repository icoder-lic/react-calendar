import React from "react";
import Calendar from "./Calendar.js";

import CalendarNew from "./CalendarNew.js";

export default class App extends React.Component{
    constructor(){
        super();
    }

    render(){
        return <div>
                <Calendar /> 
        </div>
    }
}