var container = document.getElementById("app")


function Contador(props){

    
    const[numero, setNumero] = React.useState(0);

    function somar(){
        setNumero(numero + 1)
      
        console.log("somei e ficou=" + numero)
    }

    function subtrair(){
        setNumero(numero - 1)
     
        console.log("subtrai e ficou igual =" + numero)
    }
    return(
        <React.Fragment>
            <h1>{props.titulo}</h1>
            <h3>{numero}</h3>
            <button onClick={somar}>+</button>
            <button onClick={subtrair}>-</button>
           
        </React.Fragment> 
    );
}


function App(){
return(
    <React.Fragment>
        <h1> Qual seu favorito para os games!</h1>
        <h3></h3>
        <Contador titulo= "nitendo"/>
        <Contador titulo="playstation"/>
        <Contador titulo= "xbox"/>
        <Contador titulo="pc gamer"/>
    </React.Fragment>
);


}





ReactDOM.render(React.createElement(App,null,null), container);
