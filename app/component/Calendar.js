import React from "react";
import CalendarTop from "./CalendarTop.js";
import CalendarBody from "./CalendarBody.js";
import CheckYear from "./CheckYear.js";
import CheckMonth from "./CheckMonth.js";

export default class Calender extends React.Component{
    //构造器
    constructor(){
        super();
        this.state ={
            year  : new Date().getFullYear(),
            month : new Date().getMonth()+1,
            show :"calendar" 
        }
    }
    setMonth(month){
        this.setState({
            month : month
        })
    }
    setYear(year){
        this.setState({
            year : year
        })
    }
    setShow(v){
        this.setState({
            show : v
        })
    }
    show(){
        if(this.state.show == "calendar"){
            return <table>
                    <CalendarTop year={this.state.year} month={this.state.month} setMonth={this.setMonth.bind(this)} setShow={this.setShow.bind(this)}/>
                    <CalendarBody  year={this.state.year} month={this.state.month} />
                   </table>
        }else if(this.state.show == "checkYear"){
            return <CheckYear year={this.state.year} setYear={this.setYear.bind(this)} setShow={this.setShow.bind(this)}/>
                   
        }else if(this.state.show == "checkMonth"){
            return <CheckMonth month={this.state.month} setMonth={this.setMonth.bind(this)} setShow={this.setShow.bind(this)}/>
        }
    }
    
    render(){
        return <div>
                
                    {this.show()}  
                
        </div>
    }
}