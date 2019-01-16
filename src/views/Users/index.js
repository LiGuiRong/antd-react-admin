
import React, { Component } from 'react';
import BaseTable from '../../components/BaseTable/BaseTable';

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
      key: i.toString(),
      name: `Edrward ${i}`,
      age: 32,
      address: `London Park no. ${i}`,
  });
}

class Users extends Component {
  render() {
    return (
      <BaseTable dataSource={data}/>
    );
  }
}

export default Users;
