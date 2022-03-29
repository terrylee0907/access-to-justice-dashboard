import styles from './index.css'; 
import ModCard from '@/pageCore/ModCard';
import React, {useState, useEffect} from 'react'; 
import { Alert, Space, message,Card,Modal,Icon,Table,
    Row, Col,PageHeader, Tag, Statistic, Descriptions,
    Tabs,Layout,Button, Radio,Input,Empty } from 'antd';
 
import Test from '@/pageCore/echart';
import Pine from '@/pageCore/pine';
import Line from '@/pageCore/line';
import Bar from '@/pageCore/bar';
import BarBG from '@/pageCore/barBg';

const dataSource = [
  { key: '1', name: 'Total infomation / referal', num: 438, },
  { key: '2', name: 'Total advice summary service', num: 64, },
  { key: '3', name: 'Toal pepresentation files closed', num: 57, },
   
];

const columns = [
  {
    title: 'Disability Alliance BC',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '',
    dataIndex: 'num',
    key: 'num',
  }, 
];

var bodyStyle = { padding:"20px", boxShadow:" 1px 2px 3px #888888",borderRadius:8}
const getBigCard = (title,val,reate) => {
  return  <Card style={{ margin:10,borderRadius:8, }} bodyStyle = {  bodyStyle }>
    <span style={ {    color:"#42526E"  }} >  { title }</span>
    <div>
      <span style={ {    color:"#42526E",fontSize:34,fontWeight:800   }} > { val }</span>  
      <span style={ {     color:'#5480C2',fontSize:18 ,fontWeight:600   }} > { reate }</span>
    </div> 
</Card>
}

const getCard = (title,val,reate) => {
  var tmp = Object.assign({},bodyStyle,{ padding:'10px 10px' })
  return  <Card style={{ margin:10,borderRadius:8,padding:0 }} bodyStyle={　tmp　}>
    <Row  style={ { display:"flex", width:200, justifyContent: "space-between", }}>  
      <Col style={ {    width:'50%', }}>  { title } </Col>
      <Col style={ {   width:'10%', }}> </Col>
      <Col style={ {  color:'#5480C2',fontSize:18,fontWeight:600   }}> { val }</Col>
      <Col style={ {   width:'10%',  }}> </Col>
</Row>
</Card>
}

export default function() {
  return (
    <ModCard title="Visualization">
      <Row  style={ { display:"flex",   justifyContent: "space-between", }}>  
        
        <Col span={17 }>
          <Row  style={ { display:"flex", justifyContent: "space-between", }}>  
            <Col span={8 }>   { getBigCard("Total Cases",189,"+16") }  { getCard("Housing",230,1) }  { getCard("Family",102,1) } </Col>
            <Col span={8 }>   { getBigCard("Total Cases",189,"+16") }  { getCard("Housing",230,1) }  { getCard("Family",102,1) } </Col>
            <Col span={8 } >   { getBigCard("Total Cases",189,"+16") }  { getCard("Housing",230,1) }  { getCard("Family",102,1) } </Col>
           
         </Row>
        </Col> 

        <Col  span={7 }>  
          <Card style={{ margin:10,borderRadius:8,padding:0 }} bodyStyle={bodyStyle}>
             
            <Pine data={{
              xdata: [''],
              ydata: {
                ydata1:[],
                ydata2:[],
              }
            }}/> 
              

         </Card>
        </Col>

        </Row>

  
  <Row  style={ { display:"flex", justifyContent: "space-between", }}>  
    <Col span={8}> <Card style={{  margin:10,borderRadius:8, }}> <BarBG/> </Card> </Col>
    <Col span={16}> <Card style={{  margin:10,borderRadius:8, }}> <Bar/> </Card> </Col>
      
  </Row>

  <Row  style={ { display:"flex", justifyContent: "space-between", }}>  
    <Col span={12}> <Table dataSource={dataSource} columns={columns} pagination={{
      position:'bottomCenter'
    }} /> </Col>
    <Col  span={12}> <Line />   <Bar/>
    </Col>
  </Row>

  
     
    </ModCard>
  );
}
