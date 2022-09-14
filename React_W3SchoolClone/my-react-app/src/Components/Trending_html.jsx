import React from 'react';
import '../App.css'
class Trending_HTML extends React.Component{
  render(){
    return<div className='trending' style={{background:this.props.background}}>
      <div className='trend-text-container'>
        <p className='trend-title'style ={{color:this.props.title_color}}>{this.props.title}</p>

        <p className ='trend-sub-title'style ={{color:this.props.sub_color}}>{this.props.subTitle}</p>

        <div className='trend-btn-container'>
            <a href = {this.props.url1}>
                <button className ='btn1' style={{background:'#04AA6D',color:'white'}}>Learn {this.props.title}</button>
            </a>
            <a href ={this.props.extra_url}>
                <button className='extra-btn' style ={{background:'#FFF4A3',color:'black'}}>Video Tutorial</button>
            </a>
            <a href = {this.props.url2}>
                <button className ='btn2'style={{background:this.props.btn2_back, color:this.props.btn2_text_color}}>{this.props.title} Reference</button>
            </a>

            <a href = {this.props.url3}>
                <button className ='btn3' style ={{background:'#FFC0C7', color:'black'}}>Buy Certificate</button>
            </a>
        </div>

       </div>

        <div className='trend-img-containter'>
         <a href = {this.props.try_url}>
            <img className='try_img' src ={this.props.img}></img>
         </a>
        </div>
    </div>
  }
}
export default Trending_HTML;