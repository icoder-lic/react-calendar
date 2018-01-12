import React from "react";

//引入农历转换包
import solarlunar from "solarlunar";

export default class Calender extends React.Component{
    //构造器
    constructor(){
        super();
    }
    //日历函数
    show(){
        var year = this.props.year;
        var month = this.props.month;
        //获取本月第一天是周几  关系到 上一个月的位置有几个空格
        var week = new Date(year,month-1).getDay();
        console.log(week);
        //获取本月多少天
        var days = new Date(year,month,0).getDate();
        console.log(days);
        //获取上一个月有多少天
        var lastDays = new Date(year,month-1,0).getDate();
        console.log(lastDays);

        //创建一个存储日历的数组
        var arr = [];
        //1.前一个月的日期放到数组里
        while(week--){
            arr.unshift(lastDays);
            lastDays--;
        }
        //2.本月的日期放到数组里
        var count = 1;
        while(days--){
            arr.push(count);
            count++;
        }
        //3.后一个月的日期放到数组里
        var count = 1;
        while(arr.length != 35 && arr.length != 42){
            arr.push(count);
            count++;
        }
        console.log(arr);

        //循环遍历数组 每七个进行切割，然后封装成jsx语法
        var calenderArr = [];
        for (let i = 0; i < arr.length/7; i++) {
            calenderArr.push(
                <tr key={i}>
                    {arr.slice(i * 7,i * 7 + 7).map((item,key)=>{
                        return <td key={key}>{item}</td>
                    })
                }
                </tr>
                ); 
        }
        return calenderArr;
    }
    render(){
        return <div>
                <table>
                    <tbody>
                        <tr>
                            <td>日</td>
                            <td>一</td>
                            <td>二</td>
                            <td>三</td>
                            <td>四</td>
                            <td>五</td>
                            <td>六</td>
                        </tr>
                        {this.show()}
                    </tbody>
                </table>
        </div>
    }
}