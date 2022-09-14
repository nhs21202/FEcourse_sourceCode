
import './App.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCaretDown, faMagnifyingGlass,faCircleHalfStroke,faEarthAsia} from '@fortawesome/free-solid-svg-icons'
import Record from './Components/Record';
import Record2 from './Components/Record2';
import Record3 from './Components/Record3';
import Record4 from './Components/Record4';
import CodeEditor from './Components/CodeEditor';
import W3SSpace from './Components/W3SSpace';
import ColorPicker from './Components/ColorPicker';
import Trending from './Components/Trending';
import Trending_HTML from './Components/Trending_html';
import LearnToCode from './Components/LearnToCode';
class App extends React.Component{
  render(){  
    const recordList1_1 = [
      {
        title:'PHP',
        subTitle: 'A web server programming language',
        background:'#FFC0C7',
        url:'https://www.w3schools.com/php/default.asp'
      },
      {
        title:'jQuery',
        subTitle: 'A JS library for developing web page',
        background:'#FFF4A3',
        url:'https://www.w3schools.com/jquery/default.asp'
      },
      {
        title:'Java',
        subTitle: 'A programming language',
        background:'#F3ECEA',
        url:'https://www.w3schools.com/java/default.asp'
      },
      {
        title:'C++',
        subTitle: 'A programming language',
        background:'#D9EEE1',
        url:'https://www.w3schools.com/cpp/default.asp',
      },
      {
        title:'W3.CSS',
        subTitle: 'A CSS framework for faster and better responsive web pages',
        background:'#96D4D4',
        url:'https://www.w3schools.com/w3css/default.asp'
      },
      {
        title:'Bootstrap',
        subTitle: 'A CSS framework for designing better web pages',
        background:'#E7E9EB',
        url:'https://www.w3schools.com/bootstrap/bootstrap_ver.asp'
      },
    ]
const recordElements1_1 = recordList1_1.map((item,index)=>{
  return <Record
    key = {index}
    title = {item.title}
    subTitle = {item.subTitle}
    background = {item.background}
    url = {item.url}
  />
})

const recordList1_2 =[
  {
    url:'https://www.w3schools.com/c/index.php',
    background:'#FFC0C7',
    title: 'C'
  },
  {
    url:'https://www.w3schools.com/cs/index.php',
    background:'#FFF4A3',
    title:'C#'
  },
 ]
 const recordElements1_2 = recordList1_2.map((item2,index2)=>{
  return <Record2
    key = {index2}
    title = {item2.title}
    background = {item2.background}
    url = {item2.url}
  />
})
const recordList1_3 = [
  {
    url:'https://www.w3schools.com/r/default.asp',
    background:'#F3ECEA',
    title:'R'
  },
  {
    url:'https://www.w3schools.com/kotlin/index.php',
    background:'#D9EEE1',
    title:'Kotlin',
  },
  {
    url:'https://www.w3schools.com/nodejs/default.asp',
    background:'#96D4D4',
    title:'Node.js'
  },
  {
    url:'https://www.w3schools.com/react/default.asp',
    background:'#FFC0C7',
    title:'React'
  },
  {
    url:'https://www.w3schools.com/js/js_json.asp',
    background:'#FFF4A3',
    title:'JSON'
  },
  {
    url:'https://www.w3schools.com/angular/default.asp',
    background:'#F3ECEA',
    title:'AngularJS'
  },
  {
    url:'https://www.w3schools.com/mysql/default.asp',
    background:'#D9EEE1',
    title:'MySQL'
  },
  {
    url:'https://www.w3schools.com/xml/default.asp',
    background:'#96D4D4',
    title:'XML'
  },
  {
    url:'https://www.w3schools.com/sass/default.php',
    background:'#FFC0C7',
    title:'Sass'
  },
  {
    url:'https://www.w3schools.com/icons/default.asp',
    background:'#FFF4A3',
    title:'Icons'
  },
  {
    url:'https://www.w3schools.com/css/css_rwd_intro.asp',
    background:'#F3ECEA',
    title:'RWD'
  },
  {
    url:'https://www.w3schools.com/graphics/default.asp',
    background:'#D9EEE1',
    title:'Graphics'
  },
  {
    url:'https://www.w3schools.com/graphics/svg_intro.asp',
    background:'#96D4D4',
    title:'SVG'
  },
  {
    url:'https://www.w3schools.com/graphics/canvas_intro.asp',
    background:'#FFC0C7',
    title:'Canvas'
  },
  {
    url:'https://www.w3schools.com/nodejs/nodejs_raspberrypi.asp',
    background:'#FFF4A3',
    title:'Rasberry Pi'
  },
  {
    url:'https://www.w3schools.com/cybersecurity/index.php',
    background:'#F3ECEA',
    title:'Cyber Security'
  },
  {
    url:'https://www.w3schools.com/colors/default.asp',
    background:'#D9EEE1',
    title:'Colors'
  },
  {
    url:'https://www.w3schools.com/git/default.asp',
    background:'#96D4D4',
    title:'Git'
  },
  {
    url:'https://www.w3schools.com/python/matplotlib_intro.asp',
    background:'#FFC0C7',
    title:'Matplotlib'
  },
  {
    url:'https://www.w3schools.com/python/numpy/default.asp',
    background:'#FFF4A3',
    title:'NumPy'
  },
  {
    url:'https://www.w3schools.com/python/pandas/default.asp',
    background:'#F3ECEA',
    title:'Panda'
  },
  {
    url:'https://www.w3schools.com/python/scipy/index.php',
    background:'#D9EEE1',
    title:'SciPy'
  },
  {
    url:'https://www.w3schools.com/asp/default.asp',
    background:'#96D4D4',
    title:'ASP'
  },
  {
    url:'https://www.w3schools.com/accessibility/index.php',
    background:'#FFC0C7',
    title:'Accessibility'
  },
  {
    url:'https://www.w3schools.com/appml/default.asp',
    background:'#FFF4A3',
    title:'AppML'
  },
  {
    url:'https://www.w3schools.com/go/index.php',
    background:'#F3ECEA',
    title:'Go'
  },
  {
    url:'https://www.w3schools.com/typescript/index.php',
    background:'#D9EEE1',
    title:'TypeScript'
  },
  {
    url:'https://www.w3schools.com/django/index.php',
    background:'#96D4D4',
    title:'Django'
  },

]
const recordElements1_3 = recordList1_3.map((item3,index3)=>{
  return <Record3
    key = {index3}
    title = {item3.title}
    background = {item3.background}
    url = {item3.url}
  />
})

const recordList1_4 =[
  {
    url:'https://www.w3schools.com/excel/index.php',
    background:'#96D4D4',
    title: 'Exel'
  },
  {
    url:'https://www.w3schools.com/googlesheets/index.php',
    background:'#FFF4A3',
    title:'Google Sheets'
  },
  {
    url:'https://www.w3schools.com/python/python_ml_getting_started.asp',
    background:'#FFC0C7',
    title: 'Machine Learning'
  },
  {
    url:'https://www.w3schools.com/ai/default.asp',
    background:'#F3ECEA',
    title: 'Artificial Intelligence'
  },
  {
    url:'https://www.w3schools.com/statistics/index.php',
    background:'#F3ECEA',
    title: 'Statistics'
  },
  {
    url:'https://www.w3schools.com/datascience/default.asp',
    background:'#D9EEE1',
    title: 'Data Science'
  },
 ]
 const recordElements1_4 = recordList1_4.map((item4,index4)=>{
  return <Record4
    key = {index4}
    title = {item4.title}
    background = {item4.background}
    url = {item4.url}
  />
})

const trendingList = [
  {
    title:'CSS',
    subTitle:'The language for styling web pages',
    title_color:'black',
    sub_color:'black',
    url1:'https://www.w3schools.com/css/default.asp',
    url2:'https://www.w3schools.com/cssref/default.asp',
    url3:'https://campus.w3schools.com/collections/certifications/products/css-certificate',
    try_url:'https://www.w3schools.com/css/tryit.asp?filename=trycss_default',
    img:'/images/CSS.PNG',
    btn2_text_color:'white',
    btn2_back:'black',
    background:'#FFF4A3'
  },
  {
    title:'JavaScript',
    subTitle:'The language for progamming web pages',
    title_color:'white',
    sub_color:'white',
    url1:'https://www.w3schools.com/js/default.asp',
    url2:'https://www.w3schools.com/jsref/default.asp',
    url3:'https://campus.w3schools.com/collections/certifications/products/js-certificate',
    try_url:'https://www.w3schools.com/js/tryit.asp?filename=tryjs_default',
    img:'/images/JS.PNG',
    btn2_text_color:'black',
    btn2_back:'white',
    background:'rgb(13,23,33)'
  },
  {
    title:'Python',
    subTitle:'A popular programming language',
    title_color:'black',
    sub_color:'black',
    url1:'https://www.w3schools.com/python/default.asp',
    url2:'https://www.w3schools.com/pythonref/default.asp',
    url3:'https://campus.w3schools.com/collections/certifications/products/python-certificate',
    try_url:'https://www.w3schools.com/python/tryit.asp?filename=trypython_default',
    img:'/images/PYTHON.PNG',
    btn2_text_color:'white',
    btn2_back:'black',
    background:'#F3ECEA'
  },
  {
    title:'SQL',
    subTitle:'A language for accessing databases',
    title_color:'black',
    sub_color:'black',
    url1:'https://www.w3schools.com/sql/default.asp',
    url2:'https://www.w3schools.com/sqlref/default.asp',
    url3:'https://campus.w3schools.com/collections/certifications/products/sql-certificate',
    try_url:'https://www.w3schools.com/sql/tryit.asp?filename=trysql_default',
    img:'/images/SQL.PNG',
    btn2_text_color:'white',
    btn2_back:'black',
    background:'#96D4D4'
  },
]
const trendingElements = trendingList.map((item,index) =>{
  return<Trending
  key = {index}
  title = {item.title}
  subTitle ={item.subTitle}
  title_color = {item.title_color}
  sub_color = {item.sub_color}
  url1 = {item.url1}
  url2 = {item.url2}
  url3  = {item.url3}
  try_url = {item.try_url}
  img = {item.img}
  btn2_back = {item.btn2_back}
  btn2_text_color = {item.btn2_text_color}
  background = {item.background}
  />
})
const trendingHTML =[ {
  title:'HTML',
  subTitle:'A language for accessing databases',
  title_color:'black',
  sub_color:'black',
  url1:'https://www.w3schools.com/html/default.asp',
  url2:'https://www.w3schools.com/htmlref/default.asp',
  url3:'https://campus.w3schools.com/collections/certifications/products/html-certificate',
  extra_url:'https://www.w3schools.com/videos/index.php',
  try_url:'https://www.w3schools.com/html/tryit.asp?filename=tryhtml_default',
  img:'/images/HTML.PNG',
  btn2_text_color:'white',
  btn2_back:'black',
  background:'#D9EEE1'
}
]
const trendingHTMLele = trendingHTML.map((item,index) =>{
  return<Trending_HTML
  key = {index}
  title = {item.title}
  subTitle ={item.subTitle}
  title_color = {item.title_color}
  sub_color = {item.sub_color}
  url1 = {item.url1}
  url2 = {item.url2}
  url3  = {item.url3}
  extra_url = {item.extra_url}
  try_url = {item.try_url}
  img = {item.img}
  btn2_back = {item.btn2_back}
  btn2_text_color = {item.btn2_text_color}
  background = {item.background}
  />
})


  return <div className ='main-container'>

    <div className='header-container'>
        <a href ='https://www.w3schools.com/'>
        <img className='logo' src ='/w3schools-logo.png' ></img>
        </a>
      <div className='header-menu'>
        <button className='head-btn1'>Tutorials <FontAwesomeIcon icon ={faCaretDown}/></button>
        <button className='head-btn2'>References <FontAwesomeIcon icon ={faCaretDown}/></button>
        <button className='head-btn3'>Exercises <FontAwesomeIcon icon ={faCaretDown}/></button>
        <a href ='https://www.w3schools.com/videos/index.php'>
          <button className='head-btn4'>Videos</button>
        </a>
      </div>

      <div className='right-container'>
        <div className='header-icon-container'>
          <a className='theme-icon'><FontAwesomeIcon icon ={faCircleHalfStroke}/></a>
          <a className='earth-icon'><FontAwesomeIcon icon ={faEarthAsia}/></a>
          <a className='search-icon'><FontAwesomeIcon icon ={faMagnifyingGlass}/></a>
        </div>
        <div className='header-button-container'>
          <a href ='https://www.w3schools.com/pro/index.php'> <button className='head-right-btn1'>Pro <span className='new'>NEW</span> </button>  </a>
          <a href ='https://campus.w3schools.com/collections/course-catalog'> <button className='head-right-btn2'>Get Certified</button>  </a>
          <a href ='https://www.w3schools.com/spaces/'> <button className='head-right-btn3'>Website</button>  </a>
          <a href ='https://profile.w3schools.com/log-in?redirect_url=https%3A%2F%2Fmy-learning.w3schools.com'> <button className='head-right-btn4'>Log in</button>  </a>

        </div>
      </div>

    </div>
    




    <div className='learn-to-code'>
      <LearnToCode/>
    </div>
    <div className='trending-container'>
      {trendingHTMLele}
      {trendingElements}
    </div>
    <div className='record1-bigcontainer'>
   <div className='record1_1-body'>
    {recordElements1_1}
     </div>

     <div className='record1_2-body'>
      {recordElements1_2}
     </div>

     <div className = 'record1_3-body'>
      {recordElements1_3}
     </div>

     <div className='record1_4-body'>
      {recordElements1_4}
     </div>
     <div className='CodeEditor'><CodeEditor/></div>
     </div>

   <div className='W3SSpaces'><W3SSpace/></div>

    <div className='ColorPicker'><ColorPicker/></div>
  </div>
  }
}

export default App;
