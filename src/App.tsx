import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";


export default function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }
    , []);



  return (
    <div className="app bg-gray-20">
      <Navbar 
      selectedPage={selectedPage} 
      setSelectedPage={setSelectedPage} 
      isTopOfPage={isTopOfPage} />
        <Home setSelectedPage={setSelectedPage} />
    </div>
  );
}
