import React, { Component } from 'react';
import Blogdetaildata from './Blogdetaildata';
import Blogdetailitem from './Blogdetailitem';
class Blogdetail extends React.Component{
 render(){
  const Id = this.props.match.params.id;
  let varitem = Blogdetaildata.filter(function(item){
     return item.id == Id;
  });
  let id = varitem[0].id;
  let content = varitem[0].content;
  let title = varitem[0].title;
  let image = varitem[0].image;
 
    return (
       <Blogdetailitem title={title} img={image} content={content} id={id} />
    );
  
 
 }
}
export default Blogdetail;