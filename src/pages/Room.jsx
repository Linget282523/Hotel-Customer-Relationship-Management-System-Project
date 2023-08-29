import React from 'react';
import { Layout, Space } from 'antd';
import SiderRoom from './components/SiderRoom';
import ContentRoom from './components/ContentRoom';
import FooterRoom from './components/FooterRoom';
import HeaderRoom from './components/HeaderRoom';
import Link from 'antd/es/typography/Link';

const { Header, Footer, Sider, Content } = Layout;

const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 56,
  paddingInline: 50,
  lineHeight: '64px',
};

const contentStyle = {
  textAlign: 'left',
};

const siderStyle = {
  textAlign: 'left',
  lineHeight: '120px',
  height: '350px',
  color: '#fff',
  backgroundColor: 'white',
};

const footerStyle = {
  textAlign: 'left',
  height: '200px',

};


const Room = () => {
    const [rooms, setRooms] = React.useState([]);
    React.useEffect(() => {
      fetch(`https://hcrms-project-default-rtdb.europe-west1.firebasedatabase.app/${rooms}`)
      .then((res) =>  res.json())
      .then((arr) => {
        setRooms(arr);
      });
      });


  return (
    <div>
      {
        rooms.map( rooms => {
          return(
            <Space
            direction="vertical"
            style={{
              width: '100%',
            }}
            size={[0, 48]}
          >
            <Layout>
            <Link key={rooms} to={'/rooms'}>
              <Header style={headerStyle}>
                <HeaderRoom/>
              </Header>
              <Layout withSider>
                <Sider style={siderStyle} width='600px'>
                  <SiderRoom/>
                </Sider>
                <Content style={contentStyle}>
                  <ContentRoom/>
                </Content>
              </Layout>
              <Footer style={footerStyle} >
                <FooterRoom/>
              </Footer>
              </Link>
            </Layout>
          </Space>
          )
        })
      }

  </div>
  )

};
export default Room;
