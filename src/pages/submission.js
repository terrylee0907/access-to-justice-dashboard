import styles from './index.css';
import ModCard from '@/pageCore/ModCard';
import React, { useState, useEffect} from 'react';
import { Alert, Space, message,Card,Form,Select,
Row, Col,PageHeader, Tag, Statistic, Descriptions,Icon,
Tabs,Layout,Button, Radio,Input,Empty } from 'antd';
const { Option } = Select;

var selectStyle = { width:100,margin:'0 10px', backgroundColor:'#F5F6F8',color:"#B4BBC6",
borderColor:'#F5F6F8',borderWidth:0,borderRadius:4,}

export default function() {
const [type, setType] = useState(true);

return (
<ModCard title="New Submission">
  <Row style={{ margin:'10px' }}>
    <Select defaultValue="lucy" style={ selectStyle } onChange={()=>{}}>
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
    </Select>
    <Select defaultValue="lucy" style={ selectStyle } onChange={()=>{}}>
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
    </Select>
    <Select defaultValue="lucy" style={selectStyle } onChange={()=>{}}>
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
    </Select>

    <Button type="primary" size="small" style={{ backgroundColor:'#F5F6F8',color:"#B4BBC6",
      borderColor:'#F5F6F8',borderWidth:0,borderRadius:4,}} onClick={ async ()=>{ setType(true) }} > New Submission
    </Button>

  </Row>
  <Row style={ { display:type?'none':"block" }}>
    <Empty image={ <Icon type="smile" style={{ fontSize:100,color:"#42526E" }} /> } imageStyle = { { height:150 }}
    description = { null } >
    <span style={ { color:"#42526E" }}> Great! You already submitted all data required !</span>
    </Empty>

    <Alert style={{ backgroundColor:'#E3FCEF', color:'##4A5F75' ,borderColor:"#FFF" }} message="Success"
      description=" Great! your data has been submitted." type="warning" showIcon icon={ <div className="icon-div"
      style={{ marginTop:-10 }}>
      <Icon type="down" style={ { fontSize: 15, backgroundColor:'#006644', color:'#fff' }} />
      </div> }
      />

  </Row>

  <Col style={ { display:!type?'none':"block" }}>

  <Form name="basic" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} initialValues={{ remember: true }} onFinish={()=>{
    }}
    onFinishFailed={()=>{ }}
    >
    <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
      <Input />
    </Form.Item>

    <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
      <Input.Password />
    </Form.Item>


    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type=""> Cancle </Button>
      <Button type="primary" onClick={()=>{ setType(false)
        }}
        > Submit </Button>
    </Form.Item>
  </Form>

  </Col>


</ModCard>
);
}