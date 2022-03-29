import styles from './index.css';
import ModCard from '@/pageCore/ModCard';
import React, { useState, useEffect} from 'react'; 
import { Alert, Space, message,Card,Modal,Icon,Select,Table,
    Row, Col,PageHeader, Tag, Statistic, Descriptions,
    Tabs,Layout,Button, Radio,Input,Empty } from 'antd';
    const { Option } = Select;
    var  selectStyle = { width:'90%',margin:'0 10px', backgroundColor:'#F5F6F8',color:"#B4BBC6", borderColor:'#F5F6F8',borderWidth:0,borderRadius:4,}
    
  var cardStyle = {margin:10,borderRadius:8}  
  var inputStyle = {margin:'10px 0',}  
  var bodyStyle = { padding:"20px", boxShadow:" 1px 2px 3px #888888",borderRadius:8}
  var rowStyle = { display:"flex", justifyContent: "space-between", }


export default function() {
  const [showModal, setShowModal] = useState(false);   
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);   
   
  // Select all City Submission Date Court Type Status Export to CSV
const columns = [
  {
    title: ()=>{ return <span> Select all</span>},
    width: 100,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  {
    title: ()=>{ return <span> City </span>},
    width: 100,
    dataIndex: 'age',
    key: 'age',
    fixed: 'left',
  },
  {
    title: ()=>{ return <span> Submission </span>},
    dataIndex: 'address',
    key: '1',
    width: 150,
  },
  {
    title: ()=>{ return <span> Date </span>},
    dataIndex: 'address',
    key: '2',
    width: 150,
  },
  {
    title: ()=>{ return <span> Court Type  </span>},
    dataIndex: 'address',
    key: '3',
    width: 150,
  },
  
  {
    title: '',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <Button type="link">view</Button>,
  },
];

const data = [];
for (let i = 0; i < 10; i++) {
  data.push({
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}

  return (<>
  <ModCard title="Advocate List">
     
    <Row style={rowStyle }>
      <Col span={16}>
        <Input
        placeholder="Search: Advocate Name/ Organization Name"
        prefix={<Icon type="search"  />} 
      />
      </Col>  
      <Col span={4}>
        <Select defaultValue="City"  bordered={false} style={ selectStyle } onChange={()=>{}}> 
          <Option value="Van">Vancouver</Option>
          <Option value="Vic">Victoria</Option> 
        </Select>
      </Col>  
      <Col span={4}>
        <Select defaultValue="Court type" bordered={false} style={ selectStyle } onChange={()=>{}}> 
          <Option value="FL">Family Law</Option>
          <Option value="PL">Poverty law</Option> 
        </Select>
      </Col>   
    </Row>

    <Table
          columns={columns} 
            
          pagination={{ 
            size:"small",
           // position:['bottomCenter'],
            showSizeChanger: false,//设置每页显示数据条数
            showQuickJumper: false, 
            pageSize:10,
            total: 11,  //数据的总的条数
            onChange: (current) => this.changePage(current), //点击当前页码
             
           }}
          rowSelection={{
            selectedRowKeys,
            onChange: (selectedRowKeys) => {
                setSelectedRowKeys(selectedRowKeys)
            },
          }}
          rowKey={record =>record.id}
          dataSource={data}
        />
   

  </ModCard>
  
  <Modal
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
</Modal>
    
  </>);
}
