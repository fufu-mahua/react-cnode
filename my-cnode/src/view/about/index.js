//引入react组件，利用结构赋值
import React,{Component} from 'react';
import data from './data'; 
import PublicCard from "../public_Card"
//扩充组件，声明一个类
class About extends Component {
    //渲染
    render(){
        //返回值
        return (<PublicCard
            data = {data}
        />);
    }
}
//导出扩充的组件
export default About;