import "./App.css";
import LikeImage from "./components/LikeImage";
import LikePost from "./components/LikePost";
import LikeImageWithHOC from "./components/HOC/LikeImageHoc";
import LikePostWithHOC from "./components/HOC/LikePostHoc";
import LikeImageWithRenderProps from "./components/RenderProps/LikeImageRender";
import LikePostWithRenderProps from "./components/RenderProps/LikePostRender";

function App() {
  return (
    <div>
      <h1>Some Blog</h1>
      <div className="buttons">
        <LikePost />
        <LikeImage />
      </div>
      <div>
        <h1>Using Higher Order Component (HOC)</h1>
        <div className="buttons">
          <LikeImageWithHOC />
          <LikePostWithHOC />
        </div>
        <h1>Using Render Props</h1>
        <div className="buttons">
          <LikeImageWithRenderProps />
          <LikePostWithRenderProps />
        </div>
      </div>
    </div>
  );
}

export default App;
