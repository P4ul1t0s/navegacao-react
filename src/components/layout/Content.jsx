import { Routes, Route } from "react-router-dom";
import './Content.css'

const Content = props => (
    <main className="Content">
        <Routes>
            {/* <Route path="/about" element={<About />} />
            <Route path="/param/:id" element={<Param />} />
            <Route path="/" exact element={<Home />} />
            <Route path="*" element={<NotFound />} /> */}
        </Routes>
    </main>
)

export default Content