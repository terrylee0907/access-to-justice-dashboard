import React, { useState, useEffect} from 'react';
import { Alert, Space, message,Icon,Checkbox,Select,
Row, Col,PageHeader, Tag, Statistic, Descriptions,
Tabs,Layout,Button, Radio,Input,Empty
} from 'antd';
import css from './index.scss'
import group from '../../assets/group.png'
import action from '@/pageCore/api';
const { Option } = Select;
export default function() {

const [fname, setfname] = useState("");
const [lname, setlname] = useState("");
const [email, setemail] = useState("");
const [password, setPassword] = useState("");
const [rePwd, setrePwd] = useState("");
const [checked, setChecked] = useState(false);
const create =()=>{
console.log(
fname,lname,email,password, rePwd,checked,
)
if(!checked) return message.info("Please Accept Terms and Service ")
if(fname.trim() === "" ) return message.info("Please Enter First Name")
if(lname.trim() === "" ) return message.info("Please Enter Last Name")
if(!/\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/.test(email))return message.error("Pleass enter right email");
if(password.trim()==="" )return message.error("Pleass enter password");
if(rePwd.trim()==="" )return message.error("Pleass Re-enter Password");
if(rePwd!==password) return message.error("Password is diffrent from Re-enter Password");
action("/api/post").then(function(response) {
console.log(response);
message.success("Create a account success")
window.location.href ="/login"
}) .catch(function(error) {
message.error("error");
console.log(error);
});
}
return (
<div className={css.bg2}>
  <Row style={{ display: 'flex' ,flexDirection:'row',padding:"0px" }}>
    <Col className={css.createRight}>
    <div style={ { width:'50%' }}>
      <Button className={css.back} onClick={()=>{ window.location.href ="/login" }} >
        <Icon type="arrow-left" /> Go back
      </Button>
    </div>
    <div className={css.paddiv}>
      <div className={css.tiptext}> Already have an </div>
      <div className={css.tiptext}> Account? </div>
      <div className={css.accesstext}> Access the login page here! </div>
      <Button className={css.loginPage} onClick={ async ()=>{ window.location.href ="/login" }}> Login Page </Button>
    </div>
    </Col>
    <Col span={16}>
    <div className={ css.createLeft }>

      <div className={ css.welcome }>
        <div className="welcome"></div>
      </div>

      <div className={ css.line }>
        <Input className={ css.fname } placeholder="First Name" value={fname} onChange={(e)=>{ setfname(e.target.value)
        }}/>
        <Input className={ css.fname } placeholder="Last Name" value={lname} onChange={(e)=>{ setlname(e.target.value)
        }}/>
      </div>

      <div className={ css.selectDiv }>
        <Select className={ css.select } defaultValue="City">
          <Option value="Abbotsford">Abbotsford</Option>
          <Option value="Burnaby">Burnaby</Option>
          <Option value="Campbell River">Campbell River</Option>
          <Option value="Chilliwack">Chilliwack</Option>
          <Option value="Coquitlam">Coquitlam</Option>
          <Option value="Courtenay">Courtenay</Option>
          <Option value="Cranbrook">Cranbrook</Option>

          <Option value="Dawson Creek">Dawson Creek</Option>
          <Option value="Duncan">Duncan</Option>
          <Option value="Vic">Victoria</Option>
          <Option value="Fort Nelson">Fort Nelson</Option>
          <Option value="Vic">Victoria</Option>
          <Option value="Van">Vancouver</Option>

        </Select>
      </div>

      <div className={ css.selectDiv }>
        <Select className={ css.select } defaultValue="organization">
          <Option value="organization">organization</Option>
          <Option value="acs">Abbotsford Community Services</Option>
          <Option value="bws">Battered Women's Support Services</Option>
        </Select>
      </div>

      <Input placeholder="Email" className={css.email} value={email} onChange={(e)=>{ setemail(e.target.value) }}
      prefix={
      <Icon type="mail" />} />
      <Input placeholder="Password" className={css.email} value={password} onChange={(e)=>{ setPassword(e.target.value)
      }} prefix={
      <Icon type="lock" />} suffix={
      <Icon type="eye" />} type="password" />
      <Input placeholder="Re-enter Password" className={css.email} value={rePwd} onChange={(e)=>{
      setrePwd(e.target.value) }} suffix={
      <Icon type="eye" />} type="password" />
      <Checkbox checked={checked} style={{ margin:'30px 0 0 20px',color:'#00282A' }} onChange={(val)=>{
        setChecked(val.target.checked) }}>Accept Terms and Service</Checkbox>
    </div>
    <div className="">
      <div className="icon question" style={{ margin:'30px 0 0 320px',}}></div>
      <Button className={css.createBtn} style={{ margin:'0 0 0 320px',}} onClick={ ()=>{ create() }}> Create
        Account</Button>
    </div>
    </Col>
  </Row>
</div>
);
}