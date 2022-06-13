import "./App.css";
import React, { useEffect, useState, useRef } from "react";
import DropDown from "./DropDown";
import Home from "./Home";
import Beginner from "./Beginner";
import Medium from "./Medium";
import Advanced from "./Advanced";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import begginerTorahs from "./beginnerDvarTorahs";

// {
//   begginerTorahs.map((p) => console.log(p.vort));
// }

function App() {
  console.log(process.env.NODE_ENV);
  const host =
    process.env.NODE_ENV === "production"
      ? `https://dvartorah.herokuapp.com`
      : "http://localhost:1818";

  const [medium, setMedium] = useState([]);
  const [advanced, setAdvanced] = useState([]);
  let [parsha, setParsha] = useState([]);
  const [currentParsha, setCurrentParsha] = useState([]);
  // const port = 1818;
  // console.log(selected);

  // useEffect(() => {
  //   try {
  //     setSelected(selected)
  //       .then(function (response) {
  //         if (response.status >= 400) {
  //           throw new Error("Bad response from server");
  //         }
  //         return response.json();
  //       })
  //       .then(function (begginerData) {
  //         setSelected(begginerData);
  //         console.log("beginner", begginerData);
  //       });
  //   } catch (err) {
  //     console.error("eeeeeeeeeeeeeeeeeeeeeeeeeeeee", err);
  //   }
  // }, []);

  // useEffect(() => {
  //   try {
  //     fetch(`../beginnerDvarTorahs.json`)
  //       .then(function (response) {
  //         if (response.status >= 400) {
  //           throw new Error("Bad response from server");
  //         }
  //         return response.json();
  //       })
  //       .then(function (mediumData) {
  //         setMedium((mediumData));
  //         console.log("mmm", mediumData);
  //       });
  //   }
  //   catch (err) {
  //     console.error(err);
  //   }
  // }, [medium]);

  // useEffect(() => {
  //   fetch(`../beginnerDvarTorahs.json`)
  //     .then(function (response) {
  //       if (response.status >= 400) {
  //         throw new Error("Bad response from server");
  //       }
  //       return response.json();
  //     })
  //     .then(function (advancedData) {
  //       setAdvanced((advancedData));
  //       console.log("advanced", advancedData);
  //     });
  // }, [advanced]);

  useEffect(() => {
    try {
      fetch("https://www.sefaria.org/api/calendars/")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setCurrentParsha(data.calendar_items[0].displayValue.he);
          console.log("appppppppppppp", data.calendar_items[0].displayValue.he);
        });
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/drop">
            <React.Fragment>
              <div className="fadeIn">
                <DropDown
                  onChange={(e) => {
                    e.preventDefault();
                    setParsha(e.target.value);
                  }}
                />
                <div className="vort-text">
                  {/* Sefer Berishis */}
                  {/* Berishis */}
                  {parsha === "0" &&
                    begginerTorahs.map(
                      (option) =>
                        option.ID === 1 &&
                        option.parshaId === +parsha && (
                          <p style={{ color: "red" }}>
                            {option.vort.split("/").map((p) => (
                              <p> {p}</p>
                            ))}
                          </p>
                        )
                    )}

                  {/* Noach */}
                  {parsha === "1" &&
                    begginerTorahs.map(
                      (option) =>
                        option.parshaId === +parsha && (
                          <p style={{ color: "green" }}>
                            {option.vort.split("/").map((p) => (
                              <p> {p}</p>
                            ))}
                          </p>
                        )
                    )}
                  {/* Lech Lecha */}
                  {parsha === "2" &&
                    begginerTorahs.map(
                      (option) =>
                        option.parshaId === +parsha && (
                          <p style={{ color: "blue" }}>
                            {option.vort.split("/").map((p) => (
                              <p> {p}</p>
                            ))}
                          </p>
                        )
                    )}
                  {/* vayeira */}
                  {parsha === "3" &&
                    begginerTorahs.map(
                      (option) =>
                        option.ID === 5 &&
                        option.parshaId === +parsha && (
                          <p style={{ color: "rgb(33,88,98)" }}>
                            {option.vort.split("/").map((p) => (
                              <p> {p}</p>
                            ))}
                          </p>
                        )
                    )}
                  {/* Chayei Sarah */}
                  {parsha === "4" &&
                    begginerTorahs.map(
                      (option) =>
                        option.ID === 7 &&
                        option.parshaId === +parsha && (
                          <p style={{ color: "rgb(3,188,19)" }}>
                            {option.vort.split("/").map((p) => (
                              <p> {p}</p>
                            ))}
                          </p>
                        )
                    )}
                  {/* Toldos */}
                  {parsha === "5" &&
                    begginerTorahs.map(
                      (option) =>
                        option.ID === 9 &&
                        option.parshaId === +parsha && (
                          <p style={{ color: "darkteal" }}>
                            {option.vort.split("/").map((p) => (
                              <p> {p}</p>
                            ))}
                          </p>
                        )
                    )}
                  {/* Vayeitzei */}
                  {parsha === "6" &&
                    begginerTorahs.map(
                      (option) =>
                        option.parshaId === +parsha && (
                          <p style={{ color: "crimson" }}>
                            {option.vort.split("/").map((p) => (
                              <p> {p}</p>
                            ))}
                          </p>
                        )
                    )}
                  {/* Vayishlach */}
                  {parsha === "7" &&
                    begginerTorahs.map(
                      (option) =>
                        option.parshaId === +parsha && (
                          <p style={{ color: "#831" }}>
                            {option.vort.split("/").map((p) => (
                              <p> {p}</p>
                            ))}
                          </p>
                        )
                    )}
                  {/* Vayeishev */}
                  {parsha === "8" &&
                    begginerTorahs.map(
                      (option) =>
                        option.parshaId === +parsha && (
                          <p style={{ color: "##2ECC40" }}>
                            {option.vort.split("/").map((p) => (
                              <p> {p}</p>
                            ))}
                          </p>
                        )
                    )}
                  {/* Mikaitz */}
                  {parsha === "9" &&
                    begginerTorahs.map(
                      (option) =>
                        option.parshaId === +parsha && (
                          <p style={{ color: "#F012BE" }}>
                            {option.vort.split("/").map((p) => (
                              <p> {p}</p>
                            ))}
                          </p>
                        )
                    )}
                  {/* Vayigash */}
                  {parsha === "10" &&
                    begginerTorahs.map(
                      (option) =>
                        option.parshaId === +parsha && (
                          <p style={{ color: "##4040a1" }}>
                            {option.vort.split("/").map((p) => (
                              <p> {p}</p>
                            ))}
                          </p>
                        )
                    )}
                  {/* Vayichi */}
                  {parsha === "11" &&
                    begginerTorahs.map(
                      (option) =>
                        option.parshaId === +parsha && (
                          <p style={{ color: "#034f84" }}>
                            {option.vort.split("/").map((p) => (
                              <p> {p}</p>
                            ))}
                          </p>
                        )
                    )}
                  {/* Sefer Shmos */}
                  {/* Shmos  */}
                  {parsha === "12" &&
                    begginerTorahs.map(
                      (option) =>
                        option.parshaId === +parsha && (
                          <p style={{ color: "#01FF70" }}>
                            {option.vort.split("/").map((p) => (
                              <p> {p}</p>
                            ))}
                          </p>
                        )
                    )}
                  {/* Vuaira */}
                  {parsha === "13" &&
                    begginerTorahs.map(
                      (option) =>
                        option.parshaId === +parsha && (
                          <p style={{ color: "#fe3c03" }}>
                            {option.vort.split("/").map((p) => (
                              <p> {p}</p>
                            ))}
                          </p>
                        )
                    )}
                  {/* Bo */}
                  {parsha === "14" &&
                    begginerTorahs.map(
                      (option) =>
                        option.parshaId === +parsha && (
                          <p style={{ color: "#ff851b" }}>
                            {option.vort.split("/").map((p) => (
                              <p> {p}</p>
                            ))}
                          </p>
                        )
                    )}
                  {/* Bshalach */}
                  {parsha === "15" &&
                    begginerTorahs.map(
                      (option) =>
                        option.parshaId === +parsha && (
                          <p style={{ color: "#85144b" }}>
                            {option.vort.split("/").map((p) => (
                              <p> {p}</p>
                            ))}
                          </p>
                        )
                    )}
                  {/* Yisro */}
                  {parsha === "16" &&
                    begginerTorahs.map(
                      (option) =>
                        option.parshaId === +parsha && (
                          <p style={{ color: "#034f84" }}>
                            {option.vort.split("/").map((p) => (
                              <p> {p}</p>
                            ))}
                          </p>
                        )
                    )}
                  {/* Mishpatim */}
                  {parsha === "17" &&
                    begginerTorahs.map(
                      (option) =>
                        option.parshaId === +parsha && (
                          <p style={{ color: "#ff012be" }}>
                            {option.vort.split("/").map((p) => (
                              <p> {p}</p>
                            ))}
                          </p>
                        )
                    )}
                  {/* Terumah */}
                  {parsha === "18" &&
                    begginerTorahs.map(
                      (option) =>
                        option.parshaId === +parsha && (
                          <p style={{ color: "#b10dc9" }}>
                            {option.vort.split("/").map((p) => (
                              <p> {p}</p>
                            ))}
                          </p>
                        )
                    )}
                  {/* Tetzaveh */}
                  {parsha === "19" &&
                    begginerTorahs.map(
                      (option) =>
                        option.parshaId === +parsha && (
                          <p style={{ color: "#04f84" }}>
                            {option.vort.split("/").map((p) => (
                              <p> {p}</p>
                            ))}
                          </p>
                        )
                    )}
                  {/* Ki Sisa */}
                  {parsha === "20" &&
                    begginerTorahs.map(
                      (option) =>
                        option.parshaId === +parsha && (
                          <p style={{ color: "#040419" }}>
                            {option.vort.split("/").map((p) => (
                              <p> {p}</p>
                            ))}
                          </p>
                        )
                    )}
                  {/* Vayakhail */}
                  {parsha === "21" &&
                    begginerTorahs.map(
                      (option) =>
                        option.parshaId === +parsha && (
                          <p style={{ color: "#008000" }}>
                            {option.vort.split("/").map((p) => (
                              <p> {p}</p>
                            ))}
                          </p>
                        )
                    )}
                  {/* Pekudai */}
                  {parsha === "22" &&
                    begginerTorahs.map(
                      (option) =>
                        option.parshaId === +parsha && (
                          <p style={{ color: "#04939c8" }}>
                            {option.vort.split("/").map((p) => (
                              <p> {p}</p>
                            ))}
                          </p>
                        )
                    )}
                  {/* Sefer Vayikra */}
                  {/* Vayikra */}
                  {parsha === "23" &&
                    begginerTorahs.map(
                      (option) =>
                        option.parshaId === +parsha && (
                          <p style={{ color: "#FD0E35" }}>
                            {option.vort.split("/").map((p) => (
                              <p> {p}</p>
                            ))}
                          </p>
                        )
                    )}
                  {/* Tzav */}
                  {parsha === "24" &&
                    begginerTorahs.map(
                      (option) =>
                        option.parshaId === +parsha && (
                          <p style={{ color: "#E77200" }}>
                            {option.vort.split("/").map((p) => (
                              <p> {p}</p>
                            ))}
                          </p>
                        )
                    )}
                  {/* Shmini */}
                  {parsha === "25" &&
                    begginerTorahs.map(
                      (option) =>
                        option.parshaId === +parsha && (
                          <p style={{ color: "#5E8C31" }}>
                            {option.vort.split("/").map((p) => (
                              <p> {p}</p>
                            ))}
                          </p>
                        )
                    )}
                  {/* Tatzria */}
                  {parsha === "26" &&
                    begginerTorahs.map(
                      (option) =>
                        option.parshaId === +parsha && (
                          <p style={{ color: "#00468C" }}>
                            {option.vort.split("/").map((p) => (
                              <p> {p}</p>
                            ))}
                          </p>
                        )
                    )}
                  {/* Metzora */}
                  {parsha === "27" &&
                    begginerTorahs.map(
                      (option) =>
                        option.parshaId === +parsha && (
                          <p style={{ color: "#0066FF" }}>
                            {option.vort.split("/").map((p) => (
                              <p> {p}</p>
                            ))}
                          </p>
                        )
                    )}
                  {/* Achrai */}
                  {parsha === "28" &&
                    begginerTorahs.map(
                      (option) =>
                        option.parshaId === +parsha && (
                          <p style={{ color: "#652DC1" }}>
                            {option.vort.split("/").map((p) => (
                              <p> {p}</p>
                            ))}
                          </p>
                        )
                    )}
                  {/* Kedoshim */}
                  {parsha === "29" &&
                    begginerTorahs.map(
                      (option) =>
                        option.parshaId === +parsha && (
                          <p style={{ color: "#A50B5E" }}>
                            {option.vort.split("/").map((p) => (
                              <p> {p}</p>
                            ))}
                          </p>
                        )
                    )}
                  {/* Emor */}
                  {parsha === "30" &&
                    begginerTorahs.map(
                      (option) =>
                        option.parshaId === +parsha && (
                          <p style={{ color: "#E30B5C" }}>
                            {option.vort.split("/").map((p) => (
                              <p> {p}</p>
                            ))}
                          </p>
                        )
                    )}
                  {/* B'Har */}
                  {parsha === "31" &&
                    begginerTorahs.map(
                      (option) =>
                        option.parshaId === +parsha && (
                          <p style={{ color: "#CA3435" }}>
                            {option.vort.split("/").map((p) => (
                              <p> {p}</p>
                            ))}
                          </p>
                        )
                    )}
                  {/* Bechukoishai */}
                  {parsha === "32" &&
                    begginerTorahs.map(
                      (option) =>
                        option.parshaId === +parsha && (
                          <p style={{ color: "#FF6037" }}>
                            {option.vort.split("/").map((p) => (
                              <p> {p}</p>
                            ))}
                          </p>
                        )
                    )}
                  {/* Sefer Bamidbar */}
                  {/*Bamidbar  */}
                  {parsha === "33" &&
                    begginerTorahs.map(
                      (option) =>
                        option.parshaId === +parsha && (
                          <p style={{ color: "#FF9933" }}>
                            {option.vort.split("/").map((p) => (
                              <p> {p}</p>
                            ))}
                          </p>
                        )
                    )}
                  {/* Naso */}
                  {parsha === "34" &&
                    begginerTorahs.map(
                      (option) =>
                        option.parshaId === +parsha && (
                          <p style={{ color: "#FF00CC" }}>
                            {option.vort.split("/").map((p) => (
                              <p> {p}</p>
                            ))}
                          </p>
                        )
                    )}
                  {/* Bahaloshcha */}
                  {parsha === "35" &&
                    begginerTorahs.map(
                      (option) =>
                        option.parshaId === +parsha && (
                          <p style={{ color: "#FA5B3D" }}>
                            {option.vort.split("/").map((p) => (
                              <p> {p}</p>
                            ))}
                          </p>
                        )
                    )}
                  {/* Shlach */}
                  {parsha === "36" &&
                    begginerTorahs.map(
                      (option) =>
                        option.parshaId === +parsha && (
                          <p style={{ color: "#299617" }}>
                            {option.vort.split("/").map((p) => (
                              <p> {p}</p>
                            ))}
                          </p>
                        )
                    )}
                  {/* Korach */}
                  {parsha === "37" &&
                    begginerTorahs.map(
                      (option) =>
                        option.parshaId === +parsha && (
                          <p style={{ color: "#2243B6" }}>
                            {option.vort.split("/").map((p) => (
                              <p> {p}</p>
                            ))}
                          </p>
                        )
                    )}
                  {/* Chukas */}
                  {parsha === "38" &&
                    begginerTorahs.map(
                      (option) =>
                        option.parshaId === +parsha && (
                          <p style={{ color: "#9C51B6" }}>
                            {option.vort.split("/").map((p) => (
                              <p> {p}</p>
                            ))}
                          </p>
                        )
                    )}
                  {/* Balak */}
                  {parsha === "39" &&
                    begginerTorahs.map(
                      (option) =>
                        option.parshaId === +parsha && (
                          <p style={{ color: "#A83731" }}>
                            {option.vort.split("/").map((p) => (
                              <p> {p}</p>
                            ))}
                          </p>
                        )
                    )}
                  {/* Pinchas */}
                  {parsha === "40" &&
                    begginerTorahs.map(
                      (option) =>
                        option.parshaId === +parsha && (
                          <p style={{ color: "#E97451" }}>
                            {option.vort.split("/").map((p) => (
                              <p> {p}</p>
                            ))}
                          </p>
                        )
                    )}
                  {/* Matos */}
                  {parsha === "41" &&
                    begginerTorahs.map(
                      (option) =>
                        option.parshaId === +parsha && (
                          <p style={{ color: "#FFDB00" }}>
                            {option.vort.split("/").map((p) => (
                              <p> {p}</p>
                            ))}
                          </p>
                        )
                    )}
                  {/* Masei */}
                  {parsha === "42" &&
                    begginerTorahs.map(
                      (option) =>
                        option.parshaId === +parsha && (
                          <p style={{ color: "#FF7A00" }}>
                            {option.vort.split("/").map((p) => (
                              <p> {p}</p>
                            ))}
                          </p>
                        )
                    )}
                  {/* Sefer Devarim */}
                  {/* Devarim */}
                  {parsha === "43" &&
                    begginerTorahs.map(
                      (option) =>
                        option.parshaId === +parsha && (
                          <p style={{ color: "#FF007C" }}>
                            {option.vort.split("/").map((p) => (
                              <p> {p}</p>
                            ))}
                          </p>
                        )
                    )}
                  {/* V'Eschanan */}
                  {parsha === "44" &&
                    begginerTorahs.map(
                      (option) =>
                        option.parshaId === +parsha && (
                          <p style={{ color: "#C46210" }}>
                            {option.vort.split("/").map((p) => (
                              <p> {p}</p>
                            ))}
                          </p>
                        )
                    )}
                  {/* Akev */}
                  {parsha === "45" &&
                    begginerTorahs.map(
                      (option) =>
                        option.parshaId === +parsha && (
                          <p style={{ color: "#9C2542" }}>
                            {option.vort.split("/").map((p) => (
                              <p> {p}</p>
                            ))}
                          </p>
                        )
                    )}
                  {/* Raieh */}
                  {parsha === "46" &&
                    begginerTorahs.map(
                      (option) =>
                        option.parshaId === +parsha && (
                          <p style={{ color: "#58427C" }}>
                            {option.vort.split("/").map((p) => (
                              <p> {p}</p>
                            ))}
                          </p>
                        )
                    )}
                  {/* Shoftim */}
                  {parsha === "47" &&
                    begginerTorahs.map(
                      (option) =>
                        option.parshaId === +parsha && (
                          <p style={{ color: "#85754E" }}>
                            {option.vort.split("/").map((p) => (
                              <p> {p}</p>
                            ))}
                          </p>
                        )
                    )}
                  {/* Tzeitzei */}
                  {parsha === "48" &&
                    begginerTorahs.map(
                      (option) =>
                        option.parshaId === +parsha && (
                          <p style={{ color: "#319177" }}>
                            {option.vort.split("/").map((p) => (
                              <p> {p}</p>
                            ))}
                          </p>
                        )
                    )}
                  {/* Savo */}
                  {parsha === "49" &&
                    begginerTorahs.map(
                      (option) =>
                        option.parshaId === +parsha && (
                          <p style={{ color: "#9C7C38" }}>
                            {option.vort.split("/").map((p) => (
                              <p> {p}</p>
                            ))}
                          </p>
                        )
                    )}
                  {/* Netzavim */}
                  {parsha === "50" &&
                    begginerTorahs.map(
                      (option) =>
                        option.parshaId === +parsha && (
                          <p style={{ color: "#8D4E85" }}>
                            {option.vort.split("/").map((p) => (
                              <p> {p}</p>
                            ))}
                          </p>
                        )
                    )}
                  {/* Vayailech */}
                  {parsha === "51" &&
                    begginerTorahs.map(
                      (option) =>
                        option.parshaId === +parsha && (
                          <p style={{ color: "#8FD400" }}>
                            {option.vort.split("/").map((p) => (
                              <p> {p}</p>
                            ))}
                          </p>
                        )
                    )}
                  {/* Hazinu */}
                  {parsha === "52" &&
                    begginerTorahs.map(
                      (option) =>
                        option.parshaId === +parsha && (
                          <p style={{ color: "#0081AB" }}>
                            {option.vort.split("/").map((p) => (
                              <p> {p}</p>
                            ))}
                          </p>
                        )
                    )}
                  {/* V'Toz Habracha */}
                  {parsha === "53" &&
                    begginerTorahs.map(
                      (option) =>
                        option.parshaId === +parsha && (
                          <p style={{ color: "#2E2D88" }}>
                            {option.vort.split("/").map((p) => (
                              <p> {p}</p>
                            ))}
                          </p>
                        )
                    )}
                </div>
                <br />
                <a href="/">
                  <button style={{ marginBottom: "2%" }}>Back to home</button>
                </a>
              </div>
            </React.Fragment>
          </Route>
          <Route path="/beginner">
            <React.Fragment>
              <div className="fadeIn">
                <Beginner />
                <div className="vort-text">
                  {currentParsha === "בראשית" ? (
                    <p style={{ color: "#728f02" }}>
                      {begginerTorahs[0]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "נח" ? (
                    <p style={{ color: "#00035b" }}>
                      {begginerTorahs[2]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "לך לך" ? (
                    <p style={{ color: "#840000" }}>
                      {begginerTorahs[3]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "וירא" ? (
                    <p p style={{ color: "#1d0200" }}>
                      {" "}
                      {begginerTorahs[4]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "חיי שרה" ? (
                    <p style={{ color: "#3f012c" }}>
                      {begginerTorahs[6]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "תולדות" ? (
                    <p style={{ color: "#112442" }}>
                      {begginerTorahs[8]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "ויצא" ? (
                    <p style={{ color: "#424111" }}>
                      {begginerTorahs[10]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "וישלח" ? (
                    <p style={{ color: "#421141" }}>
                      {begginerTorahs[11]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "וישב" ? (
                    <p style={{ color: "#94E007" }}>
                      {begginerTorahs[12]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "מקץ" ? (
                    <p style={{ color: "#260740" }}>
                      {begginerTorahs[13]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "ויגש" ? (
                    <p style={{ color: "#840000" }}>
                      {begginerTorahs[14]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "ויחי" ? (
                    <p style={{ color: "#BD461A" }}>
                      {begginerTorahs[15]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {/*  */}
                  {currentParsha === "שמות" ? (
                    <p style={{ color: "red" }}>
                      {begginerTorahs[16]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "וארא" ? (
                    <p style={{ color: "darkgreen" }}>
                      {begginerTorahs[17]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "בא" ? (
                    <p>
                      {begginerTorahs[18]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "בשלח" ? (
                    <p style={{ color: "azure" }}>
                      {begginerTorahs[19]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "יתרו" ? (
                    <p style={{ color: "#FF7700" }}>
                      {begginerTorahs[20]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "משפטים" ? (
                    <p style={{ color: "green" }}>
                      {begginerTorahs[21]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "תרומה" ? (
                    <p style={{ color: "purple" }}>
                      {begginerTorahs[22]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "תצוה" ? (
                    <p style={{ color: "#FEDE17" }}>
                      {begginerTorahs[23]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "כי תשא" ? (
                    <p style={{ color: "grey" }}>
                      {begginerTorahs[24]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "ויקהל" ? (
                    <p>
                      {begginerTorahs[25]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "פקודי" ? (
                    <p style={{ color: "grey" }}>
                      {begginerTorahs[26]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {/*  */}
                  {currentParsha === "ויקרא" ? (
                    <p style={{ color: "crimson" }}>
                      {begginerTorahs[27]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "צו" ? (
                    <p style={{ color: "red" }}>
                      {begginerTorahs[28]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "שמיני" ? (
                    <p>
                      {begginerTorahs[29]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "תזריע" ? (
                    <p style={{ color: "grey" }}>
                      {begginerTorahs[30]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "מצורע" ? (
                    <p style={{ color: "green" }}>
                      {begginerTorahs[31]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "אחרי מות" ? (
                    <p>
                      {begginerTorahs[32]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "קדושים" ? (
                    <p style={{ color: "#FF7700" }}>
                      {begginerTorahs[33]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "אמור" ? (
                    <p>
                      {begginerTorahs[34]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "בהר" ? (
                    <p style={{ color: "green" }}>{begginerTorahs[35]?.vort}</p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "בחוקתי" ? (
                    <p>
                      {begginerTorahs[36]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {/*  */}
                  {currentParsha === "במדבר" ? (
                    <p style={{ color: "#E06F10" }}>
                      {begginerTorahs[37]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "נשא" ? (
                    <p style={{ color: "crimson" }}>
                      {begginerTorahs[38]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "בהעלותך" ? (
                    <p style={{ color: "#FF7700" }}>
                      {begginerTorahs[39]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "שלח" ? (
                    <p style={{ color: "darkgreen" }}>
                      {begginerTorahs[40]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "קרח" ? (
                    <p>
                      {begginerTorahs[41]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "חקת" ? (
                    <p style={{ color: "red" }}>
                      {begginerTorahs[42]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "בלק" ? (
                    <p>
                      {begginerTorahs[43]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "פנחס" ? (
                    <p>
                      {begginerTorahs[44]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "מטות" ? (
                    <p>
                      {begginerTorahs[45]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "מסעי" ? (
                    <p style={{ color: "#E06F10" }}>
                      {begginerTorahs[46]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {/*  */}
                  {currentParsha === "דברים" ? (
                    <p style={{ color: "red" }}>
                      {begginerTorahs[47].vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "ואתחנן" ? (
                    <p style={{ color: "green" }}>
                      {begginerTorahs[47].vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                      {begginerTorahs[48].vort}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "עקב" ? (
                    <p style={{ color: "darkteal" }}>
                      {begginerTorahs[49].vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "ראה" ? (
                    <p style={{ color: "darkcyan" }}>
                      {begginerTorahs[50].vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "שופטים" ? (
                    <p style={{ color: "royalblue" }}>
                      {begginerTorahs[51].vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "כי תצא" ? (
                    <p style={{ color: "crimson" }}>
                      {begginerTorahs[52].vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "כי תבוא" ? (
                    <p style={{ color: "darkmagenta" }}>
                      {begginerTorahs[53].vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "נצבים" ? (
                    <p style={{ color: "olive" }}>
                      {begginerTorahs[54]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "וילך" ? (
                    <p style={{ color: "cyan" }}>
                      {begginerTorahs[55].vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "האזינו" ? (
                    <p style={{ color: "blue" }}>
                      {begginerTorahs[56].vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "וזאת הברכה" ? (
                    <p style={{ color: "tomato" }}>
                      {begginerTorahs[57].vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                </div>{" "}
                <a href="/">
                  <button style={{ marginBottom: "2%" }}>Back to home</button>
                </a>
              </div>
            </React.Fragment>
          </Route>
          <Route path="/medium">
            <React.Fragment>
              <div className="fadeIn">
                <Medium />
                <div className="vort-text">
                  {currentParsha === "בראשית" ? (
                    <p style={{ color: "#728f02" }}>
                      {medium[0]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "נח" ? (
                    <p style={{ color: "#00035b" }}>
                      {medium[1]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "לך לך" ? (
                    <p style={{ color: "#840000" }}>
                      {medium[2]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "וירא" ? (
                    <p style={{ color: "#1d0200" }}>
                      {" "}
                      {medium[3]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "חיי שרה" ? (
                    <p style={{ color: "#3f012c" }}>
                      {medium[4]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "תולדות" ? (
                    <p style={{ color: "#112442" }}>
                      {medium[5]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "ויצא" ? (
                    <p style={{ color: "#424111" }}>
                      {medium[6].vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "וישלח" ? (
                    <p style={{ color: "#421141" }}>
                      {medium[7]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "וישב" ? (
                    <p style={{ color: "#94E007" }}>
                      {medium[8]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "מקץ" ? (
                    <p style={{ color: "#260740" }}>
                      {medium[9]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "ויגש" ? (
                    <p style={{ color: "#840000" }}>
                      {medium[10]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "ויחי" ? (
                    <p style={{ color: "#BD461A" }}>
                      {medium[11]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {/*  */}
                  {currentParsha === "שמות" ? (
                    <p style={{ color: "red" }}>
                      {medium[12]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "וארא" ? (
                    <p style={{ color: "darkgreen" }}>
                      {medium[13]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "בא" ? (
                    <p>
                      {medium[14]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "בשלח" ? (
                    <p style={{ color: "azure" }}>
                      {medium[15]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "יתרו" ? (
                    <p style={{ color: "#FF7700" }}>
                      {medium[16]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "משפטים" ? (
                    <p style={{ color: "green" }}>
                      {medium[17]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "תרומה" ? (
                    <p style={{ color: "purple" }}>
                      {medium[18]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "תצוה" ? (
                    <p style={{ color: "#FEDE17" }}>
                      {medium[19]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "כי תשא" ? (
                    <p style={{ color: "grey" }}>
                      {medium[20]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "ויקהל" ? (
                    <p>
                      {medium[21]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "פקודי" ? (
                    <p style={{ color: "grey" }}>
                      {medium[22]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {/*  */}
                  {currentParsha === "ויקרא" ? (
                    <p style={{ color: "crimson" }}>
                      {medium[23]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "צו" ? (
                    <p style={{ color: "red" }}>
                      {medium[24]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "שמיני" ? (
                    <p>
                      {medium[25].vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "תזריע" ? (
                    <p style={{ color: "grey" }}>
                      {medium[26]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "מצורע" ? (
                    <p style={{ color: "green" }}>
                      {medium[27]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "אחרי מות" ? (
                    <p>
                      {medium[28]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "קדושים" ? (
                    <p style={{ color: "#FF7700" }}>
                      {medium[29]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "אמור" ? (
                    <p>
                      {medium[30]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "בהר" ? (
                    <p style={{ color: "green" }}>{medium[31]?.vort}</p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "בחוקתי" ? (
                    <p>
                      {medium[32]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {/*  */}
                  {currentParsha === "במדבר" ? (
                    <p style={{ color: "#E06F10" }}>
                      {medium[33]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "נשא" ? (
                    <p style={{ color: "crimson" }}>
                      {medium[34]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "בהעלותך" ? (
                    <p style={{ color: "#FF7700" }}>
                      {medium[35]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "שלח" ? (
                    <p style={{ color: "darkgreen" }}>
                      {medium[36]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "קרח" ? (
                    <p>
                      {medium[37]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "חקת" ? (
                    <p style={{ color: "red" }}>
                      {medium[38]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "בלק" ? (
                    <p>
                      {medium[39]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "פנחס" ? (
                    <p>
                      {medium[40]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "מטות" ? (
                    <p>
                      {medium[41]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "מסעי" ? (
                    <p style={{ color: "#E06F10" }}>
                      {medium[42]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {/*  */}
                  {currentParsha === "דברים" ? (
                    <p style={{ color: "red" }}>
                      {medium[43]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "ואתחנן" ? (
                    <p style={{ color: "green" }}>
                      {medium[44]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "עקב" ? (
                    <p style={{ color: "darkteal" }}>
                      {medium[45]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "ראה" ? (
                    <p style={{ color: "darkcyan" }}>
                      {medium[46]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "שופטים" ? (
                    <p style={{ color: "royalblue" }}>
                      {medium[47]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "כי תצא" ? (
                    <p style={{ color: "crimson" }}>
                      {medium[48]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "כי תבוא" ? (
                    <p style={{ color: "darkmagenta" }}>
                      {medium[49]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "נצבים" ? (
                    <p style={{ color: "olive" }}>
                      {medium[50]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "וילך" ? (
                    <p style={{ color: "cyan" }}>
                      {medium[51]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "האזינו" ? (
                    <p style={{ color: "blue" }}>
                      {medium[52]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "וזאת הברכה" ? (
                    <p style={{ color: "tomato" }}>
                      {medium[53]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                </div>{" "}
                <a href="/">
                  <button style={{ marginBottom: "2%" }}>Back to home</button>
                </a>
              </div>
            </React.Fragment>
          </Route>
          <Route path="/advanced">
            <React.Fragment>
              <div className="fadeIn">
                <Advanced />
                <div className="vort-text">
                  {currentParsha === "בראשית" ? (
                    <p style={{ color: "#728f02" }}>
                      {advanced[0]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "נח" ? (
                    <p style={{ color: "#00035b" }}>
                      {advanced[1]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "לך לך" ? (
                    <p style={{ color: "#840000" }}>
                      {advanced[2]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "וירא" ? (
                    <p style={{ color: "#1d0200" }}>
                      {" "}
                      {advanced[3]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "חיי שרה" ? (
                    <p style={{ color: "#3f012c" }}>
                      {advanced[4]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "תולדות" ? (
                    <p style={{ color: "#112442" }}>
                      {advanced[5]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "ויצא" ? (
                    <p style={{ color: "#424111" }}>
                      {advanced[6]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "וישלח" ? (
                    <p style={{ color: "#421141" }}>
                      {advanced[7]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "וישב" ? (
                    <p style={{ color: "#94E007" }}>
                      {advanced[8]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "מקץ" ? (
                    <p style={{ color: "#260740" }}>
                      {advanced[9]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "ויגש" ? (
                    <p style={{ color: "#840000" }}>
                      {advanced[10]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "ויחי" ? (
                    <p style={{ color: "#BD461A" }}>
                      {advanced[11]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {/*  */}
                  {currentParsha === "שמות" ? (
                    <p style={{ color: "red" }}>
                      {advanced[12]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "וארא" ? (
                    <p style={{ color: "darkgreen" }}>
                      {advanced[13]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "בא" ? (
                    <p>
                      {advanced[14]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "בשלח" ? (
                    <p style={{ color: "azure" }}>
                      {advanced[15]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "יתרו" ? (
                    <p style={{ color: "#FF7700" }}>
                      {advanced[16]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "משפטים" ? (
                    <p style={{ color: "green" }}>
                      {advanced[17]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "תרומה" ? (
                    <p style={{ color: "purple" }}>
                      {advanced[18]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "תצוה" ? (
                    <p style={{ color: "#FEDE17" }}>
                      {advanced[19]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "כי תשא" ? (
                    <p style={{ color: "grey" }}>
                      {advanced[20]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "ויקהל" ? (
                    <p>
                      {advanced[21].vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "פקודי" ? (
                    <p style={{ color: "grey" }}>
                      {advanced[22]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {/*  */}
                  {currentParsha === "ויקרא" ? (
                    <p style={{ color: "crimson" }}>
                      {advanced[23]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "צו" ? (
                    <p style={{ color: "red" }}>
                      {advanced[24]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "שמיני" ? (
                    <p>
                      {advanced[25]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "תזריע" ? (
                    <p style={{ color: "grey" }}>
                      {advanced[26]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "מצורע" ? (
                    <p style={{ color: "green" }}>
                      {advanced[27]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "אחרי מות" ? (
                    <p>
                      {advanced[28]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "קדושים" ? (
                    <p style={{ color: "#FF7700" }}>
                      {advanced[29]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "אמור" ? (
                    <p>
                      {advanced[30]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "בהר" ? (
                    <p style={{ color: "green" }}>{advanced[31]?.vort}</p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "בחוקתי" ? (
                    <p>
                      {advanced[32]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {/*  */}
                  {currentParsha === "במדבר" ? (
                    <p style={{ color: "#E06F10" }}>
                      {advanced[33]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "נשא" ? (
                    <p style={{ color: "crimson" }}>
                      {advanced[34]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "בהעלותך" ? (
                    <p style={{ color: "#FF7700" }}>
                      {advanced[35]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "שלח" ? (
                    <p style={{ color: "darkgreen" }}>
                      {advanced[36]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "קרח" ? (
                    <p>
                      {advanced[37]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "חקת" ? (
                    <p style={{ color: "red" }}>
                      {advanced[38]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "בלק" ? (
                    <p>
                      {advanced[39]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "פנחס" ? (
                    <p>
                      {advanced[40]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "מטות" ? (
                    <p>
                      {advanced[41]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "מסעי" ? (
                    <p style={{ color: "#E06F10" }}>
                      {advanced[42]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {/*  */}
                  {currentParsha === "דברים" ? (
                    <p style={{ color: "red" }}>
                      {advanced[43]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "ואתחנן" ? (
                    <p style={{ color: "green" }}>
                      {advanced[44]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "עקב" ? (
                    <p style={{ color: "darkteal" }}>
                      {advanced[45]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "ראה" ? (
                    <p style={{ color: "darkcyan" }}>
                      {advanced[46]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "שופטים" ? (
                    <p style={{ color: "royalblue" }}>
                      {advanced[47]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "כי תצא" ? (
                    <p style={{ color: "crimson" }}>
                      {advanced[48]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "כי תבוא" ? (
                    <p style={{ color: "darkmagenta" }}>
                      {advanced[49]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "נצבים" ? (
                    <p style={{ color: "olive" }}>
                      {advanced[50]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "וילך" ? (
                    <p style={{ color: "cyan" }}>
                      {advanced[51]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "האזינו" ? (
                    <p style={{ color: "blue" }}>
                      {advanced[52]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "וזאת הברכה" ? (
                    <p style={{ color: "tomato" }}>
                      {advanced[53]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <a href="/">
                  <button style={{ marginBottom: "2%" }}>Back to home</button>
                </a>
              </div>
            </React.Fragment>
          </Route>
          <Route path="/">
            <div className="fadeIn">
              <Home />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
