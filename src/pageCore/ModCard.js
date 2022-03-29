import React from 'react';
import {Card, Spin,Affix} from 'antd'; 
const ModCard = (props) => {
  const {loading = false, children, ...others} = props; 
  return (
    <div className="myCard">
        <div style={{color:'#42526E',padding: '40px 40px 0 40px',fontSize:24,fontWeight:700}}> { others.title }</div>
        <div style={{ padding: '20px 40px 0 40px'}}>
            {children}
        </div>
    </div> 
  );
};
export default React.memo(ModCard);
