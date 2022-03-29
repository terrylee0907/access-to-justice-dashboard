import React, { useState, useEffect} from 'react';
import { Alert, Space, message,Icon,
Row, Col,PageHeader, Tag, Statistic, Descriptions,
Tabs,Layout,Button, Radio,Input,Empty } from 'antd';
import css from './index.scss'
import group from '../../assets/group.png'
import action from '@/pageCore/api';
export default function() {
const [init, setInit] = useState(true);
const [email, setemail] = useState("");

const send =()=>{
  if(init && !/\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/.test(email))return message.error("Pleass enter right email");
  action("/api/post").then(function(response) {
  console.log(response);
  setInit(false);
  if(!init){
  message.success("Email had send out success,please check")
  }
  }).catch(function(error) {
  message.error("error");
  console.log(error);
  });

}

return (
<div className={css.bg}>
  <Row className="flex">
    <Col style={ { padding:"30px", height:'100vh', width:'35vw',}}>
    <Row className="between">

      <div style={ { width:'50%' }}>
        <Button className={css.back} onClick={()=>{ window.location.href ="/login" }} > Go back </Button>
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
      <div className={css.LOGIN}> Password Reset </div>
    </Row>


    <div className="col center" style={{ display:!init?'none':"flex", }}>
      <div className={css.middleTxt}> Enter your account's email </div>
      <div className={css.middleTxt}> and we'll send you an email </div>
      <div className={css.middleTxt}> to reset the password... </div>
      <div style={ { width:'80%',marginTop:100 }}>
        <Input placeholder="Email" className={css.email} value={email} onChange={(e)=>{ setemail(e.target.value) }}
        prefix={
        <Icon type="mail" />} />
      </div>
    </div>

    <div className="col center" style={{ display:init?'none':"flex", }}>
      <div className={css.bgTxt}> Please Check </div>
      <div className={css.bgTxt}> Your email. </div>
      <Empty image={ null} description={ null} style={{ height:'70px' }}> </Empty>
      <div className={css.middleTxt}> We have sent a password reset instruction to </div>
      <div className={css.middleTxt}> your email. </div>
      <Empty image={ null} description={ null} style={{ height:'50px' }}> </Empty>
      <div className={css.tip}> I didn't receive the password reset letter... </div>
    </div>

    <div className="col center" style={{ }}>
      <Button className={css.loginBtn} onClick={ ()=>{ send() }} > { init?'Send Email':"Resend Email" } </Button>
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