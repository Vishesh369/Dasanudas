import React from 'react';

const Register = ({onRouteChange, onDouble}) =>{
    
    
        return (
            <div className="signinForm">
                
               <main class="pa4 black-80">
                    <form class="measure center">
                        <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                        <legend class="f4 fw6 ph0 mh0 center  ">Register </legend>
                        <div class="mt3">
                            <label class="db fw6 lh-copy f6" for="text">Username</label>
                            <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                        </div>
                        <div class="mt3">
                            <label class="db fw6 lh-copy f6" for="email-address">Email</label>
                            <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                        </div>
                        <div class="mt3">
                            <label class="db fw6 lh-copy f6" for="email-address">Confirm Email</label>
                            <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                        </div>
                        <div class="mv3">
                            <label class="db fw6 lh-copy f6" for="password">Password</label>
                            <input onClick={onDouble} class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                        </div>
                        </fieldset>
                        <div class="">
                        <input 
                        
                        onClick={()=>onRouteChange("home")}
                        
                        class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                        type="submit" value="Register"/>
                        </div>
                    </form>
            </main>

            </div>
          );
    }

 
export default Register;
