import React from "react";
import HomeScreen from "./screens/HomeScreen";
import { Route } from "react-router-dom";
import CourseScreen from "./screens/CourseScreen";
function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">
            Beyond 8 Courses
          </a>
        </div>
      </header>
      <main>
        <Route path="/" component={HomeScreen} exact></Route>
        <Route path="/course/:id" component={CourseScreen} exact></Route>
      </main>
      <footer className="">
        All rights Reserved Beyond 8      </footer>
    </div>
  );
}

export default App;
