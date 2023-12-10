import ReactDOM from 'react-dom/client'
import Header from "./Header"
import Footer from "./Footer"
import MainContent from './MainContent'

import './index.css'






function Page() {
    return (
        <div id='big'>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <Page/>
)
