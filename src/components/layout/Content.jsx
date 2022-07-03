import { Routes, Route } from "react-router-dom";
import './Content.css'
import About from '../../views/examples/About'
import Home from '../../views/examples/Home'
import Param from '../../views/examples/Param'
import NotFound from '../../views/examples/NotFound'

const Content = props => (
    <main className="Content">
        <Routes>
            <Route path="/about" element={<About/>}/>
            <Route path="/param/:id" element={<Param/>}/>
            <Route path="*" element={<NotFound/>}/>
            <Route path="/" exact element={<Home/>}/>
        </Routes>
    </main>
)

export default Content