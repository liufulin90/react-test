import React, {Component} from 'react'
import WorkExperience from '../../components/Home/WorkExperience'
import ProjectExperience from '../../components/Home/ProjectExperience'

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      messages: [
        {
          name: 'xxx',
          time: '2016/12/12'
        },
        {
          name: 'mm',
          time: '2016/1/8'
        }
      ],
      workExperience: [
        {
          companyName: '中科创达软件有限公司',
          job: '研发工程师',
          timeSlot: '2014.03 - 至今',
          describe: 'Firefox os gaia层开发；WEB前端开发；PHP开发',
          isPrimary: true
        },
        {
          companyName: '四川省科学技术信息研究所',
          job: 'java工程师',
          timeSlot: '2013.07 - 2014.02',
          describe: '使用j2ee技术开发网站及系统',
          isPrimary: false
        }
      ],
      projectExperience: [
        {
          timeAndName: '2016/6-至今：中科创达官网',
          env: '开发环境：Webstorm+Eclipse',
          tech: '开发技术：Html+Css+JavaScript+Jquery+Bootstrap+Thinkphp',
          projectDes: '项目描述：中科创达官网www.thundersoft.com即将呈现，增加对应业务的展示介绍，页面全新设计，分中英日三中语言；采用响应示布局，针对PC、Pad、Phone均能友好展示',
          jobDes: '责任描述：负责前端代码的编写，实现响应式布局，后端部分业务逻辑的调整。关键技术突破，与设计师沟通页面呈现效果。',
          isPrimary: false
        },
        {
          timeAndName: '2015/03-至今：智能生活服务系统及软件',
          env: '开发环境：Ubuntu + Eclipse',
          tech: '开发技术：php/redis、javascript、jquery、html、css',
          projectDes: '项目描述：日本项目，基于android、IOS、pad的智能生活服务软件，持续升级开发；智能提问回答、行踪记录、天气气象更新、交通以及美食推荐、地区可用信息推送、星座占卜等功能相结合的生活服务',
          jobDes: '责任描述：与式样se详细沟通，梳理式样，前端界面整体实现，后端逻辑编码',
          isPrimary: true
        },
        {
          timeAndName: '2016/01-2016/03：东南亚行车记录跟踪报警报表系统',
          env: '开发环境：Ubuntu + Eclipse',
          tech: '开发技术：java、php/memcahce、javascript、jquery、html、css',
          projectDes: '项目描述：1、硬件OBD设备采集车辆数据，发送数据包（GPS信息，报警信息，DTC信息，总线数据）；2、java解析数据包转发给服务器存储数据 ；3、服务器端使用Google Map API实时监控车辆行踪，轨迹回放，报警统计分析， 使用（echarts）数据报表分析',
          jobDes: '责任描述：技术指导、完成google map相关功能，数据库设计，后端业务逻辑分析',
          isPrimary: true
        },
        {
          timeAndName: '2014/10-2015/05：大连山九行车跟踪监控系统',
          env: '开发环境：Ubuntu + PhpStorm',
          tech: '技术：java、php/memcahce、javascript、jquery、html、css',
          projectDes: '项目描述：1、硬件设备采集车辆数据，发送数据包；2、java解析数据包转发给服务器存储数据 3、服务器端使用百度地图接口实时监控车辆行踪，数据报表',
          jobDes: '责任描述：php开发系统，前端界面实现，部分后端功能实现',
          isPrimary: true
        },
        {
          timeAndName: '2014/03-2014/05： 中科创达官网',
          env: '开发环境： Zendstdio',
          tech: '技术： html5 + css + JQuery + php + ThinkPHP',
          projectDes: '项目描述： 实现 中、英、日3中语言，展示中科创达相关内容及新闻发布（采用关键技术Thinkphp、html、css、javascript、jquery）',
          jobDes: '责任描述：网站的整体架构设计，前端界面编码，后台管理逻辑实现',
          isPrimary: false
        },
        {
          timeAndName: '2013/09-2014/01：四川省干部信息监督管理系统',
          env: '开发环境：windows + Eclipse',
          tech: '技术：JAVA/JSP/Servlet + Extjs + Ajax + Hibernate',
          projectDes: '项目描述：该项目是一个内部管理系统，正对省干部人员各种信息的CURD，人员管理、权限管理、地区单位管理、信息资料管理、文件上传下载。',
          jobDes: '责任描述： 利用Extjs实现界面布局，负责经济责任审计、裸官监督模块以及权限管理',
          isPrimary: false
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <WorkExperience workExperience={this.state.workExperience}/>
        <ProjectExperience projectExperience={this.state.projectExperience}/>
      </div>
    )
  }
}

export default Home
