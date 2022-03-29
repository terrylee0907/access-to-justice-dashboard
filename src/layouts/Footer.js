import React from 'react'
import { Layout, Icon } from 'antd'
import styles from './index.scss'

const { Footer } = Layout

// 无状态组件
const index = () => {
  return (
    <Footer className={styles.footer} style={{ backgroundColor:'#FFF' }}>
     
    </Footer>
  )
}

export default index;
