import styles from './index.css';
import ModCard from '@/pageCore/ModCard';
import React, {useState, useEffect} from 'react';
import { Alert, Space, message,Card,Modal,Icon,Progress,Select,
Row, Col,PageHeader, Tag, Statistic, Descriptions,
Tabs,Layout,Button, Radio,Input,Empty } from 'antd';  /** */

import Test from '@/pageCore/echart';
import Pine from '@/pageCore/pine';
import Line from '@/pageCore/line';
const { Option } = Select;
var bodyStyle = { padding:"20px", boxShadow:" 1px 2px 3px #888888",borderRadius:8}
const getBigCard = (title,val,reate) => {
return <Card style={{ margin:10,borderRadius:8, }} bodyStyle={ bodyStyle }>
  <span style={ { color:"#42526E" }}> { title }</span>
  <div>
    <span style={ { color:"#42526E",fontSize:34,fontWeight:800 }}> { val }</span>
    <span style={ { color:'#5480C2',fontSize:18 ,fontWeight:600 }}> { reate }</span>
  </div>
</Card>
}

const getCard = (title,val,reate) => {
var tmp = Object.assign({},bodyStyle,{ padding:'10px 10px' })
return <Card style={{ margin:10,borderRadius:8,padding:0 }} bodyStyle={　tmp　}>
  <Row style={ { display:"flex", width:200, justifyContent: "space-between" , }}>
    <Col style={ { width:'50%', }}> { title } </Col>
    <Col style={ { width:'10%', }}>
    </Col>
    <Col style={ { color:'#5480C2',fontSize:18,fontWeight:600 }}> { val }</Col>
    <Col style={ { width:'10%', }}>
    </Col>
  </Row>
</Card>
}
export default function() {
return (
<ModCard title="Overview">

  <Row style={ { display:"flex", justifyContent: "space-between" , }}>
    <Col span={7 }>
    <Card style={{ margin:10,borderRadius:8,padding:0 }} bodyStyle={bodyStyle}>
      <Row style={ { display:"flex", justifyContent: "space-between" , }}>
        <Col span={10}>
        <Select style={ { width:'100%', }} defaultValue="1" onChange={()=>{}}>
          <Option value="1">January</Option>
          <Option value="2">February</Option>
          <Option value="3">March</Option>
          <Option value="4">April</Option>
          <Option value="5">May</Option>
          <Option value="6">June</Option>
          <Option value="7">July</Option>
          <Option value="8">August</Option>
          <Option value="9">September</Option>
          <Option value="10">October</Option>
          <Option value="11">November</Option>
          <Option value="12">December</Option>
        </Select>
        </Col>
        <Col span={5}>
        <Select style={ { width:'100%', }} defaultValue="2021" onChange={()=>{}}>
          <Option value="2021">2021</Option>
          <Option value="2020">2020</Option>
          <Option value="2019">2019</Option>
          <Option value="2018">2018</Option>
          <Option value="2017">2017</Option>
        </Select>
        </Col>
        <Col span={5} style={ { width:'10%', }}> 75% </Col>
      </Row>

      <Row style={ { }}>
        Data Submission
      </Row>
      <Row style={ { display:"flex", justifyContent: "space-between" , }}>

        <Col span={23} style={ { color:'#5480C2',fontSize:40,fontWeight:600 }}> { 90 }</Col>
        <Col style={ { width:'10%', }}> +23 </Col>
      </Row>
      <Row style={ { display:"flex", justifyContent: "space-between" , }}>
        <Progress percent={75} showInfo={false} strokeColor={ '#0747A6' } trailColor={ '#C2C2C2' } />
      </Row>
      <Row style={ { display:"flex", justifyContent: "space-between" , }}>
        <Col style={ { width:'75%', textAlign:'end' }}> { 90 }</Col>
        <Col style={ { width:'10%', }}> 120 </Col>
      </Row>
      <Row style={ { display:"flex", justifyContent: "flex-end" , }}>
        <Button type="primary">View Data</Button>
        <Button>Advocate List</Button>
      </Row>

    </Card>
    </Col>
    <Col style={ { width:'50%', }}>
    <Row style={ { display:"flex", width:200, justifyContent: "space-between" , }}>
      <Col> { getBigCard("Total Cases",189,"+16") } { getCard("Housing",230,1) } { getCard("Family",102,1) } </Col>
      <Col> { getBigCard("Family Law",189,"+16") } { getCard("Family",230,1) } { getCard("Incoming Security",102,1) } </Col>
      <Col> { getBigCard("Poverty Law",189,"+16") } { getCard("Child Protection",230,1) } { getCard("Other",102,1) } </Col>
    </Row>
    </Col>
  </Row>

  <Row style={ { display:"flex", justifyContent: "space-between" , }}>
    <Col span={12 }>
    <Card style={{ margin:10,borderRadius:8,padding:0 }} bodyStyle={bodyStyle}>
      map
    </Card>
    </Col>
    <Col style={ { width:'50%', }}>
    <Line data={{ xdata: [''], ydata: { ydata1:[2.0, 4.9,
      7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3], ydata2:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2,
      48.7, 18.8, 6.0, 2.3], } }} />
    </Col>
  </Row>



</ModCard>
);
}