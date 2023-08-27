import { useEffect, useState } from 'react';
import {Button, Space, Table} from 'antd';
import '../firebase'
import { db } from '../firebase';
import { collection } from '@firebase/firestore';
import { Link } from 'react-router-dom';

function TableRooms() {
  const [columns, setColumns] = useState([]);
  const [dataSource, setDataSource] = useState([]);

  const dataType = collection(db, 'Rooms');
  useEffect(() => {
    fetch(`https://hcrms-project-default-rtdb.europe-west1.firebasedatabase.app/${dataType}`)
    .then(res => res.json())
    .then((result) => {
      const list = result[dataType] || {}
      const firstObj = list[0] || {}
      const cols = []
      for (const key in firstObj) {
        const col = {
          title: key,
          dataIndex: key,
          render: () => {
            <Space size='middle'>
              <Button><Link to={`/rooms${id}`}>More information</Link></Button>
            </Space>
          }
        }
        cols.push(col);
      }
      setColumns(cols);
      setDataSource(result.Rooms);
    });
  }, [])

  return (
    <div className="Table">
      <Table columns={columns} dataSource={dataSource} scroll={{y: 500}}/>
    </div>
  );
}

export default TableRooms;
