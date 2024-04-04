import React, { Component } from 'react'
import { getCode} from '../../api/account';

let timer = null;

export default class Code extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:this.props.data,
            code_button_text:"GET CODE",
            code_button_loading:false,
            code_button_disabled:false,
            flag:true,
            dataType:this.props.dataType,
            module:this.props.module

        }
    }

    UNSAFE_componentWillReceiveProps(value){
        this.setState({
            data:value.data,
            dataType:value.dataType
        })
    }

    componentWillUnmount(){
        clearInterval(timer);
    }

    getCode=()=>{
        if (!this.state.flag) {return false;} 
        if(!this.state.data){
            <Message data={`${this.state.dataType} cannot be empty!`}></Message>
            return false;
        }
        
        this.setState({
            flag:false,
            code_button_loading:true,
            code_button_text:"SENDING"
        })
        //avoid multiple clicks! 
        const requestData={
            data:this.state.data,
            module:this.state.module
        }
        getCode(requestData).then(res=>{
            console.log(res)
            this.countDown()
            
        }).catch(err=>{
            this.setState({
                code_button_loading:false,
                code_button_text:"GET AGAIN!",
                flag:true
            })
    
            console.log(err)
        })

    }

    countDown=()=>{

        let sec=5;

        this.setState({
            code_button_disabled:true,
            code_button_loading:false,
            code_button_text:`${sec}S`
        })
        timer=setInterval(()=>{
            console.log("!",sec)
            sec--;
            if (sec<=0){
                this.setState({
                    code_button_text:"GET AGAIN",
                    code_button_disabled:false,
                    flag:true
                })
                clearInterval(timer);
                return false;
            }
            this.setState({
                code_button_text:`${sec}S`
            })
        },1000)

    }





  render() {
    const {code_button_disabled,code_button_loading,code_button_text} = this.state;
    return (
        <button block disabled={code_button_disabled} loading={code_button_loading} type="primary" danger onClick={this.getCode}>
            {code_button_text}
        </button>
    )
  }
}
