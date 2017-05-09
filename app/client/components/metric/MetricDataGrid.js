import React from 'react';
import { Table } from 'antd';


const columns = [
  { title: 'time', dataIndex: 'time', key: 'time', },
  { title: 'key1', dataIndex: 'key1', key: 'key1', },
  { title: 'key2', dataIndex: 'key2', key: 'key2', },
  { title: 'key3', dataIndex: 'key3', key: 'key3', },
  { title: 'key4', dataIndex: 'key4', key: 'key4', },
  { title: 'key5', dataIndex: 'key5', key: 'key5', },
  { title: 'value', dataIndex: 'value', key: 'value', },
]

const MetricDataGrid = ({ data }) => (
  <Table dataSource={data} columns={columns} />
)

export default MetricDataGrid
