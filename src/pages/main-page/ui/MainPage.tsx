import { Button, Col, Row, Typography } from 'antd';
import { Content } from 'antd/es/layout/layout';
import Paragraph from 'antd/es/typography/Paragraph';

export const MainPage = () => {
  // const { data: users, error, isLoading } = useGetUsersQuery();
  // const [createUser] = useCreateUserMutation();

  // const handleCreateUser = async () => {
  //   try {
  //     const newUser = await createUser({
  //       username: 'newuser',
  //       email: 'newuser@example.com',
  //     }).unwrap();
  //     console.log('User created:', newUser);
  //   } catch (error) {
  //     console.error('Failed to create user:', error);
  //   }
  // };

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>kuku</div>;

  // return (
  //   <div>
  //     <h1>Users</h1>
  //     <button onClick={handleCreateUser}>Create User</button>
  //     <ul>
  //       {users?.map((user) => (
  //         <li key={user.id}>{user.username}</li>
  //       ))}
  //     </ul>
  //   </div>
  // );
  return (
    <Content style={{ padding: '50px 50px', backgroundColor: 'white' }}>
      <Row justify='center' align='middle' style={{ minHeight: '70vh' }}>
        <Col span={12} style={{ textAlign: 'center' }}>
          <Typography.Title level={2}>Welcome to MyApp</Typography.Title>
          <Paragraph>
            This is a brief description of what MyApp does. You can explore our features, learn more
            about us, and sign in to access all functionalities.
          </Paragraph>
          <Button type='primary' size='large'>
            Get Started
          </Button>
        </Col>
      </Row>
    </Content>
  );
};
