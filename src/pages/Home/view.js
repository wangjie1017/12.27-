import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Menu, Dropdown, Icon } from 'antd';
import { Input } from 'antd';
import { Carousel } from 'antd';
import axios from 'axios'
import { NavLink } from 'react-router-dom'

export default class view extends Component {
  static propTypes = {
    //prop: PropTypes
  }
  state = {
    data: []
  }
  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
            1st menu item
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
            2nd menu item
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
            3rd menu item
          </a>
        </Menu.Item>
      </Menu>
    );
    return (
      <div className="Home">
        <header>
          <p>
            <Dropdown overlay={menu}>
              <a className="ant-dropdown-link" href="#">
                北京 <Icon type="down" />
              </a>
            </Dropdown>
          </p>
          <p>
            <Input placeholder="请输入商家名、品类或者商圈" />
          </p>
          <p>
            <Icon type="user" />
          </p>
        </header>
        <section>
          <div className="One">
            <img src="1.jpg" alt="" />
          </div>
          <div className="Two">
            <Carousel autoplay>
              <div>
                <NavLink to="/Meishi">
                  <dl>
                    <dt><Icon type="apple" /></dt>
                    <dd>美食</dd>
                  </dl>
                </NavLink>
              </div>
              <div>
                2
              </div>
            </Carousel>
          </div>
          <div className="Three">
            <div className="bb">
              猜你喜欢
              </div>
            {
              this.state.data.map(v => {
                return (
                  <div className="box" key={v.id}>
                    <div className="left">
                      <img src={v.imgurl} alt="" />
                    </div>
                    <div className="right">
                      <p>{v.name}</p>
                      <p>{v.jianjie}</p>
                      <p>
                        <span>{v.price}元 门市价:{v.menshijia}元</span><span>已售{v.shou}</span>
                      </p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </section>
      </div>
    )
  }
  componentDidMount() {
    axios.get("./data.json").then(res => {
      this.setState({
        data: res.data
      })
    })
  }
}
