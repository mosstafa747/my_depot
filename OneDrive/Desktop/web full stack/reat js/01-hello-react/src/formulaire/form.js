import { useState } from "react";
function Form(props){
    let[user,setUser]=useState();
    let[pass,setPass]=useState();
    let[error_user,setError_user]=useState("");
    let[error_pass,seterror_pass]=useState("");
    

    function saisir_user(e){setUser(e.target.value)}
    function saisir_pass(e){setPass(e.target.value)}
    function valider(){
        let x=props.login.filter((ele)=>(user===ele.username)).length;
        let y=props.login.filter((ele)=>(pass===ele.password && user===ele.username )).length;
        if(x===0){
            setUrl(" ")
            setError_user(props.r.uname)
        }else{
            setError_user(" ")
            console.log(" user worked")
        }

        if(y===0){
            seterror_pass(props.r.upass)
            setUrl(" ")
        }else{
            seterror_pass(" ")
            setUrl("https://www.facebook.com/")
            console.log(" pass worked")
        } 
    }
    return(
        <div>
            <form >
                <h1>Connexion</h1>
                identifiant <br/>
                <input type="text" onChange={(e)=>saisir_user(e)}/>
                <p >{error_user}</p>
                Mot de pass <br/>
                <input type="password" onChange={(e)=>saisir_pass(e)}/>
                <p>{error_pass}</p>
                <button onClick={()=>valider()}>valider</button>
            </form>
        </div>
    )
}
export default Form;