import styles from './index.css';
import ModCard from '@/pageCore/ModCard';
import React, { useState, useEffect} from 'react'; 
import { Alert, Space, message,Card,Modal,Icon,
    Row, Col,PageHeader, Tag, Statistic, Descriptions,
    Tabs,Layout,Button, Radio,Input,Empty } from 'antd';

export default function() {

  
  const [initProfile, setProfileCard] = useState(true);   
  const [initNotice, setNoticeCard] = useState(true);   
  const [initEmail, setEmailCard] = useState(true);   
  const [initPassword, setPasswordCard] = useState(true);   
  const [showModal, setShowModal] = useState(false);   
  

  var cardStyle = {margin:10,borderRadius:8}  
  var inputStyle = {margin:'10px 0',}  
  var bodyStyle = { padding:"20px", boxShadow:" 1px 2px 3px #888888",borderRadius:8}
  var rowStyle = { display:"flex", justifyContent: "space-between", }

  return (<>
  <ModCard title="Settings">
    
    <Card style={ cardStyle } bodyStyle =  {bodyStyle} >
      <Row style={rowStyle } onClick={()=>{ setProfileCard(false) }}>
        <Col span={23}>Profile Information</Col>   <Icon type="down" style={{   visibility:!initProfile?'hidden':"inherit"  }} />
      </Row>
      <Row style={{ display:initProfile?'none':"flex", justifyContent: "space-between",   }} >
         <Col span={23}> 
          <Row  style={ {  width:'100%',justifyContent: "space-between", }}>  
              <Col style={ {  padding:"10px",   width:'50%', backgroundColor:'#fff' }}> 
                 <span>First Name</span>
                 <Input placeholder="Text" />
              </Col> 
              <Col style={ {  padding:"10px",   width:'50%', backgroundColor:'#fff' }}> 
                <span>Last Name</span>
                <Input placeholder="Text" />
              </Col> 
          </Row>
         </Col> 
          <Icon type="up"  onClick={()=>{ setProfileCard(true) }} />
      </Row> 
 </Card>


    <Card style={ cardStyle } bodyStyle =  {bodyStyle} >
       <Row style={rowStyle } onClick={()=>{ setNoticeCard(false) }}>
        <Col span={23}>Notification</Col>   <Icon type="down" style={{   visibility:!initNotice?'hidden':"inherit"  }}  />
       </Row>
       <Row style={{ display:initNotice?'none':"flex", justifyContent: "space-between",   }} >
           <Col span={23}>Notification </Col> 
           <Icon type="up"  onClick={()=>{ setNoticeCard(true) }} />
       </Row> 
  </Card>

      <Card style={ cardStyle } bodyStyle =  {bodyStyle} >
        <Row style={rowStyle } onClick={()=>{ setEmailCard(false) }}>
          <Col span={23}>Change Email</Col>    <Icon type="down" style={{   visibility:!initEmail?'hidden':"inherit"  }} />
        </Row>
        <Row style={{ display:initEmail?'none':"flex", justifyContent: "space-between",   }} >
          <Col span={23}> 
            <Input placeholder="New Email"   style={inputStyle}/>
            <Input placeholder="Email Code"  style={inputStyle}/>
          </Col> 
           <Icon type="up"  onClick={()=>{ setEmailCard(true) }} />
        </Row> 
  </Card>


      <Card style={ cardStyle }  bodyStyle =  {bodyStyle} >
        <Row style={rowStyle } onClick={()=>{ setPasswordCard(false) }}>
          <Col span={23}>Change Password</Col>     <Icon type="down" style={{   visibility:!initPassword?'hidden':"inherit"  }} />
        </Row>
        <Row style={{ display:initPassword?'none':"flex", justifyContent: "space-between",   }} >
          <Col span={23}> 
            <Input placeholder="Old password" style={inputStyle}/>
            <Input placeholder="New password" style={inputStyle}/>
          </Col>  
          <Icon type="up"   onClick={()=>{ setPasswordCard(true) }} />
        </Row> 
    </Card>

  </ModCard>
  
 {/*  <Modal
  width={600}
  visible={showModal} 
  centered={false}  
  closable={false} 
  style={{ padding: 0 }}
  footer={null }  
>
  <p style={ {  color:"#42526E",fontSize:18,fontWeight:600  }}>  A link to reset your password has been sent to your email. </p>
  <div style={{ textAlign:'end'}}>
    <Button   style={{  color:'#105DCF',fontWeight:600 }} type="text" onClick={()=>{ setShowModal(false) }}>Ok</Button> 
  </div>
</Modal> */}
    
  </>);
}
