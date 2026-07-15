import "./App.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "@/pages/LandingPage";

function App() {

  useEffect(() => {

    !(function(f,b,e,v,n,t,s){
      if(f.fbq) return;

      n = f.fbq = function(){
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      };

      if(!f._fbq) f._fbq = n;

      n.push = n;
      n.loaded = true;
      n.version = "2.0";
      n.queue = [];

      t = b.createElement(e);
      t.async = true;
      t.src = v;

      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);

    })(
      window,
      document,
      "script",
      "https://connect.facebook.net/en_US/fbevents.js"
    );

    window.fbq("init", "9775540749175790");
    window.fbq("track", "PageView");

  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;