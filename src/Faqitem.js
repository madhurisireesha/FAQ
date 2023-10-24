import './faqitem.css'
import {Component} from 'react'
import './faqitem.css'
class Faqitem extends Component{
    state={
        
        addsymbol:true
    }
    onClickAdd=()=>{
        
        const{addsymbol}=this.state
        this.setState({
            addsymbol:!addsymbol,
            

        })
    }
    
    render(){
        const{addsymbol}=this.state
        const{details}=this.props
        const{questionText, answerText}=details
        const symbol=addsymbol?"https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png":"https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
        const addtext=addsymbol?<div></div>:<div>{answerText}</div>
        return(
            <div className='inner'>
               
               <div className='question'>
                {questionText}
                <div className='but'><button onClick={this.onClickAdd} className='buu'> <img src={symbol} /></button></div>
              </div>
               <div className='answer'>
                   <p>{addtext}</p>
               </div>
            </div>
        )
    }
}
export default Faqitem