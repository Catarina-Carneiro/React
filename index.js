var container = document.getElementById("app")


function Contador(props){

    const cardStyle = {
     color: props.cor || '#f00',
      }



    
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
            <h1 style={cardStyle}>{props.titulo}</h1>
            <h3 style={cardStyle} >{numero}</h3>
            <button onClick={somar}>+</button>
            <button onClick={subtrair}>-</button>
           
        </React.Fragment> 
    );
}


function App(){
return(
    <React.Fragment>
        <h1 cor= "FFFFFFFF"> Qual seu favorito para os games!</h1>
        <h3></h3>
        <Contador titulo= "nitendo" />
        <Contador titulo="playstation" cor="#00BFFF"/>
        <Contador titulo= "xbox" cor="#00FF00"/>
        <Contador titulo="pc gamer" cor="#FFFF00"/>
    </React.Fragment>
);


}





ReactDOM.render(React.createElement(App,null,null), container);
