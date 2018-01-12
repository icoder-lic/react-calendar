import React from "react";
// import Calendar from "./Calendar.js";
import CalendarNew from "./CalendarNew.js";

export default class App extends React.Component{
    constructor(){
        super();
        this.state ={
            year  : new Date().getFullYear(),
            month : new Date().getMonth()+1 
        }
    }
    render(){
        return <div>
                {/*<Calendar year={this.state.year} month={this.state.month} />*/}
                <CalendarNew year={this.state.year} month={this.state.month} />
        </div>
    }
}