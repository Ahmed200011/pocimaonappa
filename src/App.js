import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Pagination from "./componant/Pagination";
import PocimonList from "./componant/pocimon";

const App = () => {
  const [pokemons, setpokemons] = useState([]);
  const [loding, setloding] = useState(true);
  const [currantpage, setcurrantpage] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextpageUrl, setnextpageUrl] = useState();
  const [prevpageUrl, setprevpageUrl] = useState();
  useEffect(() => {
    let cancel;
    setloding(true);
    axios
      .get(currantpage, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((response) => {
        setpokemons(response.data.results.map((n) => n.name));
        setloding(false);
        setnextpageUrl(response.data.next);
        setprevpageUrl(response.data.previous);
      })
      .catch((e) => {
        console.log(e);
        setloding(false);
      });
    return () => cancel();
  }, [currantpage]);

  if (loding) {
    return (
      <div className="loding">
        <h1>loding.......</h1>
      </div>
    );
  }
  function toNextpage() {
    setcurrantpage(nextpageUrl);
  }
  function toPrevpage() {
    setcurrantpage(prevpageUrl);
  }
  return (
    <>
      <PocimonList names={pokemons} />
      <Pagination
        toNextpage={nextpageUrl ? toNextpage : null}
        toPrevpage={prevpageUrl ? toPrevpage : null}
      />
    </>
  );
};

export default App;
