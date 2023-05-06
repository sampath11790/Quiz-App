import "./App.css";
import Button from "@mui/material/Button";
import QuizList from "./Component/QuizList/quizLIst";
import Home from "./Component/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Submition from "./Component/submition/Submition";
import FinalPage from "./Component/FinalPage/Finalpage";
import SimpleDialogDemo from "./Component/Pop up/popup";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<QuizList></QuizList>}></Route>
        <Route path="/answer" element={<Submition></Submition>}></Route>
        <Route path="/final" element={<FinalPage></FinalPage>}></Route>
        <Route
          path="/popup"
          element={<SimpleDialogDemo></SimpleDialogDemo>}
        ></Route>

        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
