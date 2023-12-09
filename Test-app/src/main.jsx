import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import logo from './assets/react-logo.png'

function Text(){
	return(
		<div>
			<h1>Informações sobre o react</h1>
			<ul>
				<li>Foi lançado em 2013</li>
				<li>Foi criado por Jordan Walke</li>
				<li>Tem mais de 100k de favoritos no Gihub</li>
				<li>É mantido pelo facebook</li>
			</ul>
		</div>
	);
}



ReactDOM.createRoot(document.getElementById('root')).render(
	<div>
		<img src={logo} className="App-logo" alt="logo" />
		<Text/>
	</div>

)
