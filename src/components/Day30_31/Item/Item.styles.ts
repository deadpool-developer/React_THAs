import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
 
  transform:
    perspective(800px)
   
  transition: transform 1s ease 0s;
  border-radius: 4px;
  box-shadow:
    rgba(0, 0, 0, 0.024) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0.05) 0px 1px 0px 0px,
    rgba(0, 0, 0, 0.03) 0px 0px 8px 0px,
    rgba(0, 0, 0, 0.1) 0px 20px 30px 0px;
  height: 100%;
  
  .day30_img {
    
    height:250px;
    width:250px;
    margin-left:60px;
    margin-top : 10px;
    padding:15px;
    
    
  }
  .day30_item {
    font-family: Arial, Helvetica, sans-serif;
    
    padding: 1rem;
    height: 100%;
  }
  .day30_btn1
  {
    background: rgb(43,80,190);
background: radial-gradient(circle, rgba(43,80,190,1) 0%, rgba(12,9,242,1) 100%);
  font-weight: bolder;
  font-size : 15px;
  color:white;
  font-family : "lobster",cursive;
  }
  
`;