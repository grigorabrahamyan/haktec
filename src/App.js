import { useCallback, useEffect, useState } from "react";
import { sendRequest } from "./api/helpers";
import "./App.css";

import Header from "./components/header";
import Loader from "./components/loader";
import Middle from "./components/middle";
import Popup from "./components/Popup";

function App() {
  const [input, setInput] = useState("");
  const [categories, setCategories] = useState("ALL");
  const [choosenThings, setChoosenThings] = useState({});
  const [isPopup, setIsPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const [logoUrl, setLogoUrl] = useState("");
  const [title, setTitle] = useState("");

  const handleChangeInput = useCallback((str) => {
    setInput(str);
  }, []);

  const handleChangeMenu = useCallback((item) => {
    setCategories(item);
    setInput("");
  }, []);

  const handleAddThing = useCallback(
    (item) => {
      const obj = { ...choosenThings };
      if (item.id in obj) {
        delete obj[item.id];
      } else {
        obj[item.id] = item;
      }
      setChoosenThings(obj);
    },
    [choosenThings]
  );

  const handleChangePopup = useCallback((bool) => {
    setIsPopup(bool);
  }, []);

  const handleChangeCoosenThings = useCallback(() => {
    setChoosenThings({});
  }, []);

  const handleChageLoader = useCallback((bool) => {
    setIsLoading(bool);
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    const abort = controller.signal;

    Promise.all([sendRequest(
      `app-contents/jVV3Q?appId=2731&eventId=2570`,
      abort,
      1
    ), sendRequest(
      `content-app-cats/jVV3Q?appId=2731&eventId=2570`,
      abort,
      1
    )]).then(([{contents}, {header_logo, title}]) => {
      const result = [...contents];
      result.pop();
      const obj = {};
      result.forEach((item) => {
        obj[item.catName] = item;
      });
      setData(obj);
      setLogoUrl(header_logo);
      setTitle(title);
    }).catch(err => console.log(err)).finally(() => handleChageLoader(false));

    return () => controller.abort();
  }, [handleChageLoader]);

  return (
    <div className="container">
      {isLoading ? (
        <div className="loader">
          <div className="loader__item">
            <Loader />
          </div>
        </div>
      ) : (
        <>
          <Header
            handleChangeInput={handleChangeInput}
            input={input}
            choosenThings={choosenThings}
            handleChangePopup={handleChangePopup}
            logoUrl={logoUrl}
            title={title}
          />
          <Middle
            input={input}
            categories={categories}
            handleChangeMenu={handleChangeMenu}
            handleAddThing={handleAddThing}
            choosenThings={choosenThings}
            data={data}
          />
          {isPopup ? (
            <Popup
              handleChangePopup={handleChangePopup}
              handleChangeCoosenThings={handleChangeCoosenThings}
            />
          ) : null}
        </>
      )}
    </div>
  );
}

export default App;
