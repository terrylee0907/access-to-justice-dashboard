import React, { useState, useEffect} from 'react'; 
import { Layout,Sider,Menu,Icon,Badge } from 'antd'
import Header from './Header'
import Footer from './Footer'
import styles from  './index.scss'
import   './index.scss'
import logo from '../assets/user.png'
import { HashRouter, Switch, NavLink, Route, Redirect, withRouter } from 'react-router-dom';
import {Provider} from './context'
import svg from '@/pageCore/svg'
const { Content } = Layout

function BasicLayout({children, location}) {

  const [collapsed, setCollapsed] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [pathname, setPathname] = useState("/"); 
  const [name, setName] = useState(""); 
  const [desc, setDesc] = useState(""); 
  const [type, setTtype] = useState(1);

  useEffect(()=>{
    setPathname(location.pathname)
    var type = localStorage.getItem("type") 
    setTtype( type )

    setName( "Amy" )
    // Law Foundation BC 
    setDesc(type === 1?"Law Foundation BC ":"service");
  },[])
  if(!localStorage.getItem("token")){
     window.location.href ="/login"  
  }
  if(location.pathname === '/login') {
    return children
  }else{
    console.log(location.pathname,children)
   
  }

  return (
    <Provider value={{ showModal, setShowModal }}>
      

      <Layout className={styles['basic-layout']} >
        <Header />
        <Layout style={{ display: 'flex',flexDirection:'row', }}>
          <div style={{ backgroundColor:'#FFF',height:'calc(100vh - 50px)',
          padding:'10px 10px 10px 10px',
          borderRight:'1px solid #CCC', }}>
             <div style={{ display: 'flex',flexDirection:'row', }} key={pathname}>
              <img className={styles.logo} src={logo} alt="logo" />
              <div style={{ padding:'0 0 0 2px'}}>
                 <div style={{ color:'#42526E',fontSize:14}}> {name } </div>
                 <div style={{ color:'#6B778C',fontSize:12}}> {desc} </div>
              </div>
             </div>

            <Menu  
            defaultSelectedKeys={[ location.pathname ]}
            style={{ display:type==="0" ?'block':"none",borderRight:0, }} 
          mode="vertical"> 
            <Menu.Item  key="/"> <NavLink exact to='/'>
              <Icon component={ svg.overview1 } style={{   display:location.pathname === '/'?'none':'', }} />
              <Icon component={ svg.overview } style={{   display:location.pathname === '/'?'':'none', }} />
               <span className="nav-text">Overview</span> </NavLink> </Menu.Item>  

              <Menu.Item  key="/submission"> <NavLink exact to='/submission'> <Icon type="plus" /> <span className="nav-text">New Submission</span> </NavLink> </Menu.Item>
               
              <Menu.Item  key="/setting"> <NavLink exact to='/setting'>
                <Icon component={ svg.setting1 } style={{   display:location.pathname === '/setting'?'none':'', }} />
                <Icon component={ svg.setting } style={{   display:location.pathname === '/setting'?'':'none', }} />
                 <span className="nav-text">Settings</span> </NavLink> </Menu.Item>  

            </Menu>
            <Menu  
            defaultSelectedKeys={[ location.pathname ]}
            style={{ display:type=="1"?'block':"none",borderRight:0, }}   mode="vertical"> 
            <Menu.Item  key="/"> <NavLink exact to='/'>
              <Icon component={ svg.overview1 } style={{   display:location.pathname === '/'?'none':'', }} />
              <Icon component={ svg.overview } style={{   display:location.pathname === '/'?'':'none', }} />
               <span className="nav-text">Overview</span> 
                <Badge 
                style={{ margin:'0 0 10px 10px'}}
               count={1} size="small"/></NavLink> </Menu.Item>  
 
              
              <Menu.Item  key="/viewData"> <NavLink exact to='/viewData'>
                <Icon component={ svg.view1 } style={{   display:location.pathname=== '/viewData'?'none':'', }} />
                <Icon component={ svg.view } style={{   display:location.pathname === '/viewData'?'':'none', }} />
                 <span className="nav-text">View Data</span> </NavLink> </Menu.Item>  


              <Menu.Item  key="/visualization"> <NavLink exact to='/visualization'>
                <Icon component={ svg.visua1 } style={{   display:location.pathname === '/visualization'?'none':'', }} />
                <Icon component={ svg.visua } style={{   display:location.pathname === '/visualization'?'':'none', }} />
                 <span className="nav-text">Visualization</span> </NavLink> </Menu.Item>  

              <Menu.Item  key="/advcateList"> <NavLink exact to='/advcateList'>
                <Icon component={ svg.users1 } style={{   display:location.pathname === '/advcateList'?'none':'', }} />
                <Icon component={ svg.users } style={{   display:location.pathname === '/advcateList'?'':'none', }} />
                 <span className="nav-text">Advcate list</span> </NavLink> </Menu.Item>  
              
                 <Menu.Item  key="/setting"> <NavLink exact to='/setting'>
                  <Icon component={ svg.setting1 } style={{   display:location.pathname === '/setting'?'none':'', }} />
                  <Icon component={ svg.setting } style={{   display:location.pathname === '/setting'?'':'none', }} />
                   <span className="nav-text">Settings</span> </NavLink> </Menu.Item>  

          
              
            </Menu>
          </div> 
          
          <Content  style={{ backgroundColor:'#FFF' }}>{children}</Content>
        </Layout> 
      </Layout> 
  </Provider>
  );
}

export default BasicLayout;
/*
menu 
inlineCollapsed = { false }
*/