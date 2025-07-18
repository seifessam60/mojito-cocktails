import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);
function App() {
  return (
    <div className="text-red-500 h-[100vh] flex-center text-3xl">
      App is Running
    </div>
  );
}

export default App;
