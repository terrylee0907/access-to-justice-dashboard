import styles from './index.css';
import { Layout, Icon, Form, Button, Input,message,Switch,Select } from 'antd'
import action from '@/pageCore/api';

import svg from '@/pageCore/svg'
const {Option } = Select
export default function() {

  // action("/post",{ method:'post',data:{ 1:1 } })

  // action("/post",{ method:'post',}).then(function(response) { console.log(response); }) .catch(function(error) { console.log(error); });
    function changePassword(oldPassword,password){
     
      if(oldPassword.trim()==="" )return   message.error("Pleass enter oldPassword");
      if(password.trim()==="" )return   message.error("Pleass enter password");
      action("/api/post").then(function(response) { 
        console.log(response); 
        message.success("change password success")
        }) .catch(function(error) {
          message.success("change password error")
           console.log(error); 
        });  

    }

    
  
  return (
    <div className={styles.normal}>  
     00 <Icon component={svg.svg3} /> 11 

     <div style={{width: 90, overflow: "hidden", marginTop: -10, float: "right"}}>
      <Select defaultValue="lucy" style={{ width: 100, margin: -5}} >
      <Option value="jack">全部</Option>
      <Option value="lucy">充值</Option>
      <Option value="disabled">提取</Option>
      <Option value="Yiminghe">提前返还</Option>
      </Select>  
      </div> 

      <ul className={styles.list}>
        test
        <Icon type="user"/>
        <Icon type="setting"/>
        <Icon type="down" style={{  color:'red' }}/>
        <Icon type="up"/>
        <Icon type="table"/>
        <Icon type="plus"/>
        <Icon type="line"/>
        <Icon type="chart"/>
        <Icon type="copy"/>
        <Icon type="file"/>
        <Icon type="mail"/>
        <Icon type="lock"/>
        <Icon type="eye"/>
      </ul>

      <Switch 
      defaultChecked
      />

      <div>
        75%
      <Button size="small" style={{   backgroundColor:'#A8CBF9', color:'#0747A6', lineHeight:10,height:10, }} type="primary">75%</Button>
      <Button style={{   backgroundColor:'#F5F6F8', color:'#42526E',  }} >Log Out</Button>
      
      <Button style={{   backgroundColor:'#F5F6F8', color:'#42526E',  }} >Cancel</Button>
      <Button  style={{   backgroundColor:'#0052CC', color:'#fff',  }} type="primary">Save</Button>
        
      </div>

      <div className="icon switcher"></div>
      <div className="icon menu1"></div>
      <div className="icon menu2"></div>
      <div className="icon menu3"></div>
      <div className="icon menu4"></div>
      <div className="icon question"></div>

      <div className="icon group1"></div>
      <div className="icon group2"></div>
      <div className="icon group3"></div>
      <div className="icon group4"></div>
      <div className="icon chevron-right"></div>

      <div className="icon arrow-up"></div>
      <div className="icon arrow-down"></div>
      <div className="icon arrow-left"></div>
      <div className="icon group4"></div>
      <div className="hello"></div>
      <div className="welcome"></div>
      <div className="extracy-log"></div>
 

    </div>
  );
}
