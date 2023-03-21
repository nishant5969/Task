import React from 'react';
import { useForm } from 'react-hook-form';

function ValidateForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const formSubmit = (data) => {
         console.log(data)
        alert("Form has been submitted. Please Check Console.log and there you will see the entered details");
      }

    return(
     <div className="jumbotron">
      <form method='POST' onSubmit={handleSubmit(formSubmit)}> 
      <div className="panel panel-info">
       <div className="panel-heading">Login Page</div>
       <div className="panel-body">
          
          <div className="form-group">
            <label>Enter Email:</label>
            <input type="text" name="email" className="form-control" placeholder="Enter email address" {...register("email", 
             {required: "Email is required",
               pattern:{
                value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                message: "Email must be a valid email address",
               }
             })
             }/>
             <div className="invalid-feedback" style={{color: 'red'}}>
                {errors?.email?.message}
             </div>
          </div>

          <div className="form-group">
            <label>Enter Password:</label>
            <input type="text" name="password" className="form-control" placeholder="Enter password here" {...register("password",
            {required: "password is required",
             minLength: {
                value: 7,
                message: "Password must be atleast 7 characters", 
             },
             pattern: {
                value: /^[a-zA-Z]+[0-9]+@/,
                message: "Password must be alpha numeric",
             }
            })
            }/>
            <div className="invalid-feedback" style={{color: 'red'}}>
                {errors?.password?.message}
             </div>
          </div>

           <button type="submit" className="btn btn-success">submit</button>

        </div>

         </div>
         </form>
         </div>
    )
}

export default ValidateForm;
