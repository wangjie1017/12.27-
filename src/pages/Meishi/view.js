import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'antd';
import Axios from 'axios';

export default class view extends Component {
  static propTypes = {
    //prop: PropTypes
  }
  state = {
    data: [],
    tou: "rgba(254,254,254,0)",
    col: "white",
    poi:"none",
    tt:""
  }
  aaaa = (e) => {
    console.log(e)
  }
  handleScroll = (event) => {
    //滚动条高度
    let ctx = this;
    let clientHeight = document.documentElement.clientHeight; //可视区域高度
    let scrollTop = document.documentElement.scrollTop;  //滚动条滚动高度
    let scrollHeight = document.documentElement.scrollHeight; //滚动内容高度
    console.log(scrollTop)
    if (scrollTop > 75) {
        this.setState({
          tou: "rgba(254,254,254)",
          col: "green"
        })
    } else {
      this.setState({
        tou: "rgba(254,254,254,0)",
        col: "white"
      })
    }
    if (scrollTop > 272) {
        this.setState({
          poi:"fixed",
          tt:"0.8rem"
        })
    } else {
      this.setState({
        poi:"none",
        tt:""
      })
    }
  }
  render() {
    return (
      <div className="Meishi">
        <div className="hed" style={{ background: this.state.tou, color: this.state.col }}>
          <p><Icon type="left" /></p>
          <p><input type="text" placeholder="搜索商家名、品类或商圈" /></p>
          <p><Icon type="user" /></p>
        </div>
        <div className="sec" onScroll={(e) => this.aaaa(e)}>
          <div className="Four">
            <img src="//s1.meituan.net/bs/file?f=meis/meishi.mobile:img/app_download_banner.png@5b5269e" alt="" />
          </div>
          <div className="Five">
            <div className="FiveTwo">
              <dl>
                <dt><img src="//p0.meituan.net/codeman/050ce6754d32482c75273e292407f2b312356.png" alt="" /></dt>
                <dd>火锅</dd>
              </dl>
              <dl>
                <dt><img src="//p0.meituan.net/codeman/e5277d18a450c1fe51c6cda9cff6a9e016621.png" alt="" /></dt>
                <dd>火锅</dd>
              </dl>
              <dl>
                <dt><img src="//p1.meituan.net/codeman/962b082a549e88f2939dbee2ac3d235613019.png" alt="" /></dt>
                <dd>火锅</dd>
              </dl>
              <dl>
                <dt><img src="//p0.meituan.net/codeman/12ff749bd7fdf473abd59e2651a9ee1913684.png" alt="" /></dt>
                <dd>火锅</dd>
              </dl>
              <dl>
                <dt><img src="//p0.meituan.net/codeman/0fe84029cc6cf6ccf12838ce6546734a16488.png" alt="" /></dt>
                <dd>火锅</dd>
              </dl>
              <dl>
                <dt><img src="//p0.meituan.net/codeman/2ae734d26259e6138ea61f2dcdac8fa115018.png" alt="" /></dt>
                <dd>火锅</dd>
              </dl>
              <dl>
                <dt><img src="//p1.meituan.net/codeman/a7c360a9aeca1f972a1819465154c6b414043.png" alt="" /></dt>
                <dd>火锅</dd>
              </dl>
              <dl>
                <dt><img src="//p1.meituan.net/codeman/13a0d1537d45b237a07b665eb5a7845e17141.png" alt="" /></dt>
                <dd>火锅</dd>
              </dl>
            </div>

          </div>
          <div className="Six" style={{position:this.state.poi,top:this.state.tt}}>
            <p>全部类目</p>
            <p>附近商家</p>
            <p>智能排序</p>
            <p>筛选</p>
          </div>
          <div className="Seven">
            {
              this.state.data.map(v => {
                return (
                  <div className="boxs" key={v.id}>
                    <div className="top">
                      <div className="left1">
                        <img src={v.imgurl} alt="" />
                      </div>
                      <div className="right1">
                        <p>{v.name}</p>
                        <p>
                          <span>⭐⭐⭐⭐⭐ ￥{v.price}/人</span><span>{v.dizhi}</span>
                        </p>
                        <p>{v.juli}</p>
                      </div>
                    </div>
                    <div className="bot">
                      <div className="left2">

                      </div>
                      <div className="right2">
                        {
                          !v.one ? "" : <div className="bbc"><img src={v.imgurlThree} className="aa" alt="" /><p>{v.one}</p></div>
                        }

                        <p><img src={v.imgurlTwo} className="aa" alt="" />{v.two}</p>
                      </div>
                    </div>
                  </div>
                )
              })
            }

          </div>
        </div>
      </div>
    )
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
    Axios.get("./dataTwo.json").then(res => {
      //console.log(res)
      this.setState({
        data: res.data
      })
    })
  }
}
