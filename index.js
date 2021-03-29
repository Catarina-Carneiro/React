var container = document.getElementById("app")

//var titulo = document.createElement("h1")
//titulo.innerHTML = "Titulo inserido por JS"
//container.appendChild(titulo)
//import teste from 'https://compass-ssl.xbox.com/assets/f0/85/f085c120-d3d5-4424-8b70-eb25deaa326e.png?n=XBX_A-BuyBoxBGImage01-D.png';

function Contador(props){

    //let numero= 0;
    const[numero, setNumero] = React.useState(0);

    function somar(){
        setNumero(numero + 1)
       // numero++;
        console.log("somei e ficou=" + numero)
    }

    function subtrair(){
        setNumero(numero - 1)
        //numero--;
        console.log("subtrai e ficou igual =" + numero)
    }
    return(
        <React.Fragment>
            <h1>{props.titulo}</h1>
            <h2>{numero}</h2>
            <button onClick={somar}>+</button>
            <button onClick={subtrair}>-</button>
           
        </React.Fragment> 
    );
}


function App(){
return(
    <React.Fragment>
        <h1> Vote no seu preferido!</h1>
        <h2></h2>
        <Contador titulo= "xbox"/>
        <Contador titulo= "pc"/>
        <Contador titulo="playstation"/>
    </React.Fragment>
);


}





ReactDOM.render(React.createElement(App,null,null), container);
