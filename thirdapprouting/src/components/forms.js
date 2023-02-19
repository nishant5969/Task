import React from 'react';

const url = "http://localhost:8900/languages"

class Forms extends React.Component {
   constructor(){
       super()

       this.state={
          name:'',
          desc:''
       }

       this.handleChangeName=this.handleChangeName.bind(this)
       this.handleChangeDesc=this.handleChangeDesc.bind(this)
       this.handleSubmit=this.handleSubmit.bind(this)
   }

   handleChangeName(event){
    this.setState({name:event.target.value})
   }

   handleChangeDesc(event){
    this.setState({desc:event.target.value})
   }

   handleSubmit(){
     console.log(this.state)
     var id = Math.floor(Math.random()*1000)
     var data ={
        id:id,
        name:this.state.name,
        desc:this.state.desc
     }

     fetch(url,{ method:'POST',
         headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
         },
         body:data
      })
      .then(console.log("data added"))
   }

    render(){
      return(
        <div class="panel panel-info">
           <div class="panel-heading">Panel Header</div>
           <div class="panel-body">
              
              <div class="form-group">
                <label>Enter Name:</label>
                <input type="text" class="form-control" placeholder="Name Of the topic" value={this.state.name}
                onChange={this.handleChangeName}/>
              </div>
              <div class="form-group">
                <label>Description:</label>
                <input type="text" class="form-control" placeholder="Enter the details here" value={this.state.desc}
                onChange={this.handleChangeDesc}/>
              </div>
               <button type="submit" class="btn btn-success" onClick={this.handleSubmit}>submit</button>
           
           </div>
      </div>
      )
    }
    
}

export default Forms;