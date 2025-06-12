import React, { Component } from 'react'
import { Row, Col, Button, Avatar, Dropdown, Menu } from 'antd'
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { logout } from '../../redux/actions/actions'
import logo from '../../images/logo.png'

class NavBar extends Component {
  handleLogout = () => {
    this.props.logout()
    this.props.history.push('/')
    window.location.reload(true);
  }

  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <Link to="/friends">
            ดูรายชื่อเพื่อน
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/changepassword">
            เปลี่ยนรหัสผ่าน
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link onClick={() => this.handleLogout()} to='#'>
            ออกจากระบบ
          </Link>
        </Menu.Item>
      </Menu>
    );

    return (
      <Row style={{ height: '100%' }} align="middle">
        <Col span={4} style={{ height: '100%' }}>
          <Link to="/">
            <img src={logo} alt="Logo Fakebook" style={{ height: '5vh' }} />
          </Link>
        </Col>
        <Col span={20}>
          <Row justify="end">
            <Col span={4}>
              <Avatar
                src={this.props.user.profilePic}
              />
            </Col>
            <Dropdown overlay={menu}>
              <Col span={6}>
                <Link to="/my-profile">
                  <Button type="link">{this.props.user.name}</Button>
                </Link>
              </Col>
            </Dropdown>
          </Row>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {
  logout: logout
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar))