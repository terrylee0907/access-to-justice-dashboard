import React, { useState, useEffect} from 'react';
import { Alert, Space, message,Icon,
Row, Col,PageHeader, Tag, Statistic, Descriptions,
Tabs,Layout,Button, Radio,Input,Empty
} from 'antd';
import css from './index.scss'
import group from '../../assets/group.png'
import action from '@/pageCore/api';
export default function() {
const [init, setInit] = useState(true);
const [email, setemail] = useState("");
const [password, setPassword] = useState("");

if(localStorage.getItem("token")){
// window.location.href ="/"
}
const login =()=>{
if(!/\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/.test(email))return message.error("Pleass enter right email");
if(password.trim() ==="" )return message.error("Pleass enter password");
action("/api/post").then(function(response) {
console.log(response);
localStorage.setItem("name", "Smith");
localStorage.setItem("type", "1");
localStorage.setItem("token", "Smith");
 window.location.href ="/"
}) .catch(function(error) {
   console.log(error); });
}

return (
<div className={css.bg}>
  <Row className="flex">
    <Col style={ { padding:"30px", height:'100vh', width:'35vw',}}>
    <Row className="between">

      <div style={ { width:'50%' }}>
        <Button className={css.back} onClick={()=>{ setInit(true) }} > Go back </Button>
      </div>

      <div style={ { width:'50%', textAlign: 'end' }}>
        <Button className={css.IconBtn} shape="circle">
          <Icon type="question" />
        </Button>
        <Button className={css.IconBtn} shape="circle">
          <Icon type="right" />
        </Button>
      </div>

    </Row>

    <Row style={{padding:30, }}>
      <div className={css.LOGIN}> LOGIN </div>
      <div className={css.HELLO}> HELLO. </div>
    </Row>

    <div style={{ display:init?'none':"block", }}>
      <Row className="col center">
        <div style={ { width:'80%',marginTop:100 }}>
          <Input placeholder="Email" className={css.email} value={email} onChange={(e)=>{ setemail(e.target.value) }}
          prefix={
          <Icon type="mail" />} />
          <Input placeholder="Password" className={css.email} value={password} onChange={(e)=>{
          setPassword(e.target.value) }} prefix={
          <Icon type="lock" />} suffix={
          <Icon type="eye" />} type="password" />
        </div>
        <Button className={css.loginBtn} onClick={ ()=>{ login() }} > Login </Button>
        <div className={css.ForgetPwd} onClick={ ()=>{ window.location.href ="/sendEmail" }} > Forget ID or password
        </div>
        <Button className={css.loginCreateBtn} onClick={ ()=>{ window.location.href ="/create" }} > Create new account
        </Button>
      </Row>
    </div>

    <div style={{ visibility:!init?'hidden':"inherit", marginTop:"300px", }}>
      <Row className="col center">
        <Button className={css.Advocates} > Advocates </Button>
        <Button className={css.LawFoundation} onClick={()=>{ setInit(false) }} > The Law Foundation </Button>
      </Row>
    </div>
    </Col>


    <Col style={ { padding:"30px", height:'100vh', width:'65vw', }}>

    <div className={css.logoImg}>
      <div className="extracy-log" style={{ width:'50%',height:'10vh' }}></div>
    </div>

    <Row style={{ display:"flex" }}>

      <div style={ {width:"50%",margin:'0 100px',color:"#fff",fontSize:30}}>
        <Descriptions size="small" column={3} layout="vertical">
          <Descriptions.Item label="Address">605 Robson St Vancouver ,BC,V6B 5J3</Descriptions.Item>
          <Descriptions.Item label="Tel"> +1(604) 688 2337 </Descriptions.Item>
          <Descriptions.Item label="Email">Info@law.org</Descriptions.Item>
        </Descriptions>
      </div>
      <div>
        <img src={group} />
      </div>

    </Row>
    </Col>

  </Row>
</div>
);
}