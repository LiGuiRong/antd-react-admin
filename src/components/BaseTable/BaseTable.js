import React from 'react';
import { Table, Input, InputNumber, Popconfirm, Form, Row, Col, Button, Modal } from 'antd';

const FormItem = Form.Item;
const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
    <EditableContext.Provider value={form}>
        <tr {...props} />
    </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);
  
class EditableCell extends React.Component {
  getInput = () => {
    if (this.props.inputType === 'number') {
      return <InputNumber />;
    }
    return <Input />;
  };

  render() {
    const {
      editing,
      dataIndex,
      title,
      inputType,
      record,
      index,
      ...restProps
    } = this.props;
    return (
      <EditableContext.Consumer>
        {(form) => {
          const { getFieldDecorator } = form;
          return (
            <td {...restProps}>
              {editing ? (
                <FormItem style={{ margin: 0 }}>
                  {getFieldDecorator(dataIndex, {
                    rules: [{
                      required: true,
                      message: `${title}不能为空!`,
                    }],
                    initialValue: record[dataIndex],
                  })(this.getInput())}
                </FormItem>
              ) : restProps.children}
            </td>
          );
        }}
      </EditableContext.Consumer>
    );
  }
}
  
class EditableTable extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        data: [],
        editingKey: '',
        visible: false
      };
      this.columns = [
        {
          title: 'name',
          dataIndex: 'name',
          width: '25%',
          editable: false,  // 是否可以编辑
        },
        {
          title: 'age',
          dataIndex: 'age',
          width: '15%',
          editable: true,
        },
        {
          title: 'address',
          dataIndex: 'address',
          width: '40%',
          editable: true,
        },
        {
          title: 'operation',
          dataIndex: 'operation',
          render: (text, record) => {
            const editable = this.isEditing(record);
            return (
              <div>
                {editable ? (
                  <span>
                    <EditableContext.Consumer>
                      {form => (
                        <a
                          href="javascript:;"
                          onClick={() => this.save(form, record.key)}
                          style={{ marginRight: 8 }}
                        >
                          保存
                        </a>
                      )}
                    </EditableContext.Consumer>
                    <Popconfirm
                      title="确认删除该人员?"
                      onConfirm={() => this.cancel(record.key)}
                    >
                      <a>删除</a>
                    </Popconfirm>
                  </span>
                ) : (
                  <a onClick={() => this.edit(record.key)}>编辑</a>
                )}
              </div>
            );
          },
        },
      ];
    }
  
    componentDidMount() {
      const {dataSource} = this.props;
      this.setState({
        data: dataSource
      });
    }

    isEditing = record => record.key === this.state.editingKey;
  
    cancel = () => {
      this.setState({ editingKey: '' });
    };
  
    save(form, key) {
      form.validateFields((error, row) => {
        if (error) {
          return;
        }
        const newData = [...this.state.data];
        const index = newData.findIndex(item => key === item.key);
        if (index > -1) {
          const item = newData[index];
          newData.splice(index, 1, {
            ...item,
            ...row,
          });
          this.setState({ data: newData, editingKey: '' });
        } else {
          newData.push(row);
          this.setState({ data: newData, editingKey: '' });
        }
      });
    }
  
    edit(key) {
      this.setState({ editingKey: key });
    }

    showModal = () => {
      this.setState({
        visible: true,
      });
    }
  
    handleOk = (e) => {
      console.log(e);
      this.setState({
        visible: false,
      });
    }
  
    handleCancel = (e) => {
      console.log(e);
      this.setState({
        visible: false,
      });
    }

    render() {
      const { data } = this.state;
      const components = {
        body: {
          row: EditableFormRow,
          cell: EditableCell,
        },
      };
  
      const columns = this.columns.map((col) => {
        if (!col.editable) {
          return col;
        }
        return {
          ...col,
          onCell: record => ({
            record,
            inputType: col.dataIndex === 'age' ? 'number' : 'text',
            dataIndex: col.dataIndex,
            title: col.title,
            editing: this.isEditing(record),
          }),
        };
      });
  
      return (
        <div>
          <Row gutter={16} style={{margin: '10px 0'}}>
            <Col span={6}>
              <Input.Search
                placeholder="输入UM号"
                onSearch={value => console.log(value)}
                enterButton 
              />
            </Col>
            <Col span={6} push={15}>
              <Button type="primary" onClick={this.showModal}>添加人员</Button>
            </Col>
          </Row>
          <Modal
            title="Basic Modal"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
          <Table
            components={components}
            bordered
            dataSource={data}
            columns={columns}
            rowClassName="editable-row"
          />
        </div>
      );
    }
}

export default EditableTable;