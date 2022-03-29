import React, { useState, useEffect} from 'react'; 
 
import Header from './Header'
import Footer from './Footer'
import styles from  './index.scss'
import   './index.scss'
import logo from '../assets/user.png'
import { HashRouter, Switch, NavLink, Route, Redirect, withRouter } from 'react-router-dom';
import {Provider} from './context'
 
import { Layout,Sider, Menu, Dropdown, Icon, Affix,Button ,Modal} from 'antd';
import Link from "umi/link"
  
import question from '../assets/question-circle.png'



export default function() {

  const [collapsed, setCollapsed] = useState(false);
  const [showModal, setShowModal] = useState(false); 
  const [type, setTtype] = useState(1);
  
  return (
    <Affix offsetTop={0}>
      <div className={styles.header} style={{ backgroundColor:'#FFF', borderBottom: "1px solid #ccc"}}>
        
        <div style={{ display: 'flex',flexDirection:'row',padding:"10px" }}>
          <div className="icon switcher"></div>
          <Link to="/"> 
            <div className="extracy-log"></div>
          </Link>
        </div> 
        <div className={styles.right}>
          <img style={{ width:20,marginRight:10 }} src={question} alt="logo" />
          
          <Button type="primary" size="small" style={{  backgroundColor:'#F5F6F8',color:"#B4BBC6", marginRight:40,borderColor:'#F5F6F8',borderWidth:0,borderRadius:4,}} 
          onClick={ async ()=>{  setShowModal(true)   
          
          }} > Log Out </Button> 
        </div>
      </div>

      <Modal
      width={350}
      visible={showModal} 
      centered={true}  
      closable={false} 
      style={{ padding: 0 }}
      footer={null }
      className={ styles.logoutModal}
      wrapClassName={'logoutModal'}
    >
      <p style={ {  color:"#42526E",fontSize:18,fontWeight:600  }}>  Are you sure want to log out ?</p>
      <div style={{ display:'flex' ,  justifyContent: "flex-end",}}>
        <div   style={{  backgroundColor:'#fff' ,padding: '1px 10px',height:25,borderRadius:4 , color:'#42526E' }}  type="text" onClick={()=>{ setShowModal(false) }}>Cancle</div> 
        <Button   type="primary" style={{  backgroundColor:'#0052CC' ,padding: '1px 10px',height:25,borderRadius:4 }} onClick={()=>{ 
         
          localStorage.clear();
          window.location.href ="/login"  
        }}> Log Out </Button>
      </div>
    </Modal>

    </Affix>
  );
} 
