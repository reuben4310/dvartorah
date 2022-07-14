import "./App.css";
import React, { useEffect, useState, useRef } from "react";
import DropDown from "./DropDown";
import Home from "./Home";
import Beginner from "./Beginner";
import Medium from "./Medium";
import Advanced from "./Advanced";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import begginerTorahs from "./beginnerDvarTorahs";
import mediumDvarTorahs from "./mediumDvarTorahs";
import advancedDvarTorahs from "./advancedDvarTorahs";

function App() {
  console.log(process.env.NODE_ENV);
  const host =
    process.env.NODE_ENV === "production"
      ? `https://dvartorah.herokuapp.com`
      : "http://localhost:1818";

  let [parsha, setParsha] = useState([]);
  const [currentParsha, setCurrentParsha] = useState([]);

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
                    mediumDvarTorahs.map(
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
                    mediumDvarTorahs.map(
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
                    mediumDvarTorahs.map(
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
                    mediumDvarTorahs.map(
                      (option) =>
                        option.ID === 4 &&
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
                    mediumDvarTorahs.map(
                      (option) =>
                        option.ID === 5 &&
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
                    mediumDvarTorahs.map(
                      (option) =>
                        option.ID === 6 &&
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
                    mediumDvarTorahs.map(
                      (option) =>
                        option.ID === 7 &&
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
                    mediumDvarTorahs.map(
                      (option) =>
                        option.ID === 8 &&
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
                    mediumDvarTorahs.map(
                      (option) =>
                        option.ID === 12 &&
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
                    mediumDvarTorahs.map(
                      (option) =>
                        option.ID === 13 &&
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
                    mediumDvarTorahs.map(
                      (option) =>
                        option.ID === 14 &&
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
                    mediumDvarTorahs.map(
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
                    mediumDvarTorahs.map(
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
                    mediumDvarTorahs.map(
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
                    mediumDvarTorahs.map(
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
                    mediumDvarTorahs.map(
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
                    mediumDvarTorahs.map(
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
                    mediumDvarTorahs.map(
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
                    mediumDvarTorahs.map(
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
                    mediumDvarTorahs.map(
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
                    mediumDvarTorahs.map(
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
                    mediumDvarTorahs.map(
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
                    mediumDvarTorahs.map(
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
                    mediumDvarTorahs.map(
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
                    mediumDvarTorahs.map(
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
                    mediumDvarTorahs.map(
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
                    mediumDvarTorahs.map(
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
                    mediumDvarTorahs.map(
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
                    mediumDvarTorahs.map(
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
                    mediumDvarTorahs.map(
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
                    mediumDvarTorahs.map(
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
                    mediumDvarTorahs.map(
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
                    mediumDvarTorahs.map(
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
                    mediumDvarTorahs.map(
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
                    mediumDvarTorahs.map(
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
                    mediumDvarTorahs.map(
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
                    mediumDvarTorahs.map(
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
                    mediumDvarTorahs.map(
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
                    mediumDvarTorahs.map(
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
                    mediumDvarTorahs.map(
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
                    mediumDvarTorahs.map(
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
                    mediumDvarTorahs.map(
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
                    mediumDvarTorahs.map(
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
                    mediumDvarTorahs.map(
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
                    mediumDvarTorahs.map(
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
                    mediumDvarTorahs.map(
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
                    mediumDvarTorahs.map(
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
                    mediumDvarTorahs.map(
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
                    mediumDvarTorahs.map(
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
                    mediumDvarTorahs.map(
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
                    mediumDvarTorahs.map(
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
                    mediumDvarTorahs.map(
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
                    mediumDvarTorahs.map(
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
                    mediumDvarTorahs.map(
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
                      {mediumDvarTorahs[0]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "נח" ? (
                    <p style={{ color: "#00035b" }}>
                      {mediumDvarTorahs[1]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "לך לך" ? (
                    <p style={{ color: "#840000" }}>
                      {mediumDvarTorahs[2]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "וירא" ? (
                    <p style={{ color: "#1d0200" }}>
                      {" "}
                      {mediumDvarTorahs[3]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "חיי שרה" ? (
                    <p style={{ color: "#3f012c" }}>
                      {mediumDvarTorahs[4]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "תולדות" ? (
                    <p style={{ color: "#112442" }}>
                      {mediumDvarTorahs[5]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "ויצא" ? (
                    <p style={{ color: "#424111" }}>
                      {mediumDvarTorahs[6].vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "וישלח" ? (
                    <p style={{ color: "#421141" }}>
                      {mediumDvarTorahs[7]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "וישב" ? (
                    <p style={{ color: "#94E007" }}>
                      {mediumDvarTorahs[8]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "מקץ" ? (
                    <p style={{ color: "#260740" }}>
                      {mediumDvarTorahs[9]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "ויגש" ? (
                    <p style={{ color: "#840000" }}>
                      {mediumDvarTorahs[10]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "ויחי" ? (
                    <p style={{ color: "#BD461A" }}>
                      {mediumDvarTorahs[11]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {/*  */}
                  {currentParsha === "שמות" ? (
                    <p style={{ color: "red" }}>
                      {mediumDvarTorahs[12]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "וארא" ? (
                    <p style={{ color: "darkgreen" }}>
                      {mediumDvarTorahs[13]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "בא" ? (
                    <p>
                      {mediumDvarTorahs[14]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "בשלח" ? (
                    <p style={{ color: "azure" }}>
                      {mediumDvarTorahs[15]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "יתרו" ? (
                    <p style={{ color: "#FF7700" }}>
                      {mediumDvarTorahs[16]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "משפטים" ? (
                    <p style={{ color: "green" }}>
                      {mediumDvarTorahs[17]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "תרומה" ? (
                    <p style={{ color: "purple" }}>
                      {mediumDvarTorahs[18]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "תצוה" ? (
                    <p style={{ color: "#FEDE17" }}>
                      {mediumDvarTorahs[19]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "כי תשא" ? (
                    <p style={{ color: "grey" }}>
                      {mediumDvarTorahs[20]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "ויקהל" ? (
                    <p>
                      {mediumDvarTorahs[21]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "פקודי" ? (
                    <p style={{ color: "grey" }}>
                      {mediumDvarTorahs[22]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {/*  */}
                  {currentParsha === "ויקרא" ? (
                    <p style={{ color: "crimson" }}>
                      {mediumDvarTorahs[23]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "צו" ? (
                    <p style={{ color: "red" }}>
                      {mediumDvarTorahs[24]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "שמיני" ? (
                    <p>
                      {mediumDvarTorahs[25].vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "תזריע" ? (
                    <p style={{ color: "grey" }}>
                      {mediumDvarTorahs[26]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "מצורע" ? (
                    <p style={{ color: "green" }}>
                      {mediumDvarTorahs[27]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "אחרי מות" ? (
                    <p>
                      {mediumDvarTorahs[28]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "קדושים" ? (
                    <p style={{ color: "#FF7700" }}>
                      {mediumDvarTorahs[29]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "אמור" ? (
                    <p>
                      {mediumDvarTorahs[30]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "בהר" ? (
                    <p style={{ color: "green" }}>
                      {mediumDvarTorahs[31]?.vort}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "בחוקתי" ? (
                    <p>
                      {mediumDvarTorahs[32]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {/*  */}
                  {currentParsha === "במדבר" ? (
                    <p style={{ color: "#E06F10" }}>
                      {mediumDvarTorahs[33]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "נשא" ? (
                    <p style={{ color: "crimson" }}>
                      {mediumDvarTorahs[34]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "בהעלותך" ? (
                    <p style={{ color: "#FF7700" }}>
                      {mediumDvarTorahs[35]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "שלח" ? (
                    <p style={{ color: "darkgreen" }}>
                      {mediumDvarTorahs[36]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "קרח" ? (
                    <p>
                      {mediumDvarTorahs[37]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "חקת" ? (
                    <p style={{ color: "red" }}>
                      {mediumDvarTorahs[38]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "בלק" ? (
                    <p>
                      {mediumDvarTorahs[39]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "פנחס" ? (
                    <p>
                      {mediumDvarTorahs[40]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "מטות" ? (
                    <p>
                      {mediumDvarTorahs[41]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "מסעי" ? (
                    <p style={{ color: "#E06F10" }}>
                      {mediumDvarTorahs[42]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {/*  */}
                  {currentParsha === "דברים" ? (
                    <p style={{ color: "red" }}>
                      {mediumDvarTorahs[43]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "ואתחנן" ? (
                    <p style={{ color: "green" }}>
                      {mediumDvarTorahs[44]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "עקב" ? (
                    <p style={{ color: "darkteal" }}>
                      {mediumDvarTorahs[45]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "ראה" ? (
                    <p style={{ color: "darkcyan" }}>
                      {mediumDvarTorahs[46]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "שופטים" ? (
                    <p style={{ color: "royalblue" }}>
                      {mediumDvarTorahs[47]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "כי תצא" ? (
                    <p style={{ color: "crimson" }}>
                      {mediumDvarTorahs[48]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "כי תבוא" ? (
                    <p style={{ color: "darkmagenta" }}>
                      {mediumDvarTorahs[49]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "נצבים" ? (
                    <p style={{ color: "olive" }}>
                      {mediumDvarTorahs[50]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "וילך" ? (
                    <p style={{ color: "cyan" }}>
                      {mediumDvarTorahs[51]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "האזינו" ? (
                    <p style={{ color: "blue" }}>
                      {mediumDvarTorahs[52]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "וזאת הברכה" ? (
                    <p style={{ color: "tomato" }}>
                      {mediumDvarTorahs[53]?.vort.split("/").map((p) => (
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
                      {advancedDvarTorahs[0]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "נח" ? (
                    <p style={{ color: "#00035b" }}>
                      {advancedDvarTorahs[1]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "לך לך" ? (
                    <p style={{ color: "#840000" }}>
                      {advancedDvarTorahs[2]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "וירא" ? (
                    <p style={{ color: "#1d0200" }}>
                      {" "}
                      {advancedDvarTorahs[3]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "חיי שרה" ? (
                    <p style={{ color: "#3f012c" }}>
                      {advancedDvarTorahs[4]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "תולדות" ? (
                    <p style={{ color: "#112442" }}>
                      {advancedDvarTorahs[5]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "ויצא" ? (
                    <p style={{ color: "#424111" }}>
                      {advancedDvarTorahs[6]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "וישלח" ? (
                    <p style={{ color: "#421141" }}>
                      {advancedDvarTorahs[7]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "וישב" ? (
                    <p style={{ color: "#94E007" }}>
                      {advancedDvarTorahs[8]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "מקץ" ? (
                    <p style={{ color: "#260740" }}>
                      {advancedDvarTorahs[9]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "ויגש" ? (
                    <p style={{ color: "#840000" }}>
                      {advancedDvarTorahs[10]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "ויחי" ? (
                    <p style={{ color: "#BD461A" }}>
                      {advancedDvarTorahs[11]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {/*  */}
                  {currentParsha === "שמות" ? (
                    <p style={{ color: "red" }}>
                      {advancedDvarTorahs[12]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "וארא" ? (
                    <p style={{ color: "darkgreen" }}>
                      {advancedDvarTorahs[13]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "בא" ? (
                    <p>
                      {advancedDvarTorahs[14]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "בשלח" ? (
                    <p style={{ color: "azure" }}>
                      {advancedDvarTorahs[15]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "יתרו" ? (
                    <p style={{ color: "#FF7700" }}>
                      {advancedDvarTorahs[16]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "משפטים" ? (
                    <p style={{ color: "green" }}>
                      {advancedDvarTorahs[17]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "תרומה" ? (
                    <p style={{ color: "purple" }}>
                      {advancedDvarTorahs[18]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "תצוה" ? (
                    <p style={{ color: "#FEDE17" }}>
                      {advancedDvarTorahs[19]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "כי תשא" ? (
                    <p style={{ color: "grey" }}>
                      {advancedDvarTorahs[20]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "ויקהל" ? (
                    <p>
                      {advancedDvarTorahs[21].vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "פקודי" ? (
                    <p style={{ color: "grey" }}>
                      {advancedDvarTorahs[22]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {/*  */}
                  {currentParsha === "ויקרא" ? (
                    <p style={{ color: "crimson" }}>
                      {advancedDvarTorahs[23]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "צו" ? (
                    <p style={{ color: "red" }}>
                      {advancedDvarTorahs[24]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "שמיני" ? (
                    <p>
                      {advancedDvarTorahs[25]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "תזריע" ? (
                    <p style={{ color: "grey" }}>
                      {advancedDvarTorahs[26]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "מצורע" ? (
                    <p style={{ color: "green" }}>
                      {advancedDvarTorahs[27]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "אחרי מות" ? (
                    <p>
                      {advancedDvarTorahs[28]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "קדושים" ? (
                    <p style={{ color: "#FF7700" }}>
                      {advancedDvarTorahs[29]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "אמור" ? (
                    <p>
                      {advancedDvarTorahs[30]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "בהר" ? (
                    <p style={{ color: "green" }}>
                      {advancedDvarTorahs[31]?.vort}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "בחוקתי" ? (
                    <p>
                      {advancedDvarTorahs[32]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {/*  */}
                  {currentParsha === "במדבר" ? (
                    <p style={{ color: "#E06F10" }}>
                      {advancedDvarTorahs[33]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "נשא" ? (
                    <p style={{ color: "crimson" }}>
                      {advancedDvarTorahs[34]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "בהעלותך" ? (
                    <p style={{ color: "#FF7700" }}>
                      {advancedDvarTorahs[35]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "שלח" ? (
                    <p style={{ color: "darkgreen" }}>
                      {advancedDvarTorahs[36]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "קרח" ? (
                    <p>
                      {advancedDvarTorahs[37]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "חקת" ? (
                    <p style={{ color: "red" }}>
                      {advancedDvarTorahs[38]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "בלק" ? (
                    <p>
                      {advancedDvarTorahs[39]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "פנחס" ? (
                    <p>
                      {advancedDvarTorahs[40]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "מטות" ? (
                    <p>
                      {advancedDvarTorahs[41]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "מסעי" ? (
                    <p style={{ color: "#E06F10" }}>
                      {advancedDvarTorahs[42]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {/*  */}
                  {currentParsha === "דברים" ? (
                    <p style={{ color: "red" }}>
                      {advancedDvarTorahs[43]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "ואתחנן" ? (
                    <p style={{ color: "green" }}>
                      {advancedDvarTorahs[44]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "עקב" ? (
                    <p style={{ color: "darkteal" }}>
                      {advancedDvarTorahs[45]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "ראה" ? (
                    <p style={{ color: "darkcyan" }}>
                      {advancedDvarTorahs[46]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "שופטים" ? (
                    <p style={{ color: "royalblue" }}>
                      {advancedDvarTorahs[47]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "כי תצא" ? (
                    <p style={{ color: "crimson" }}>
                      {advancedDvarTorahs[48]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "כי תבוא" ? (
                    <p style={{ color: "darkmagenta" }}>
                      {advancedDvarTorahs[49]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "נצבים" ? (
                    <p style={{ color: "olive" }}>
                      {advancedDvarTorahs[50]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "וילך" ? (
                    <p style={{ color: "cyan" }}>
                      {advancedDvarTorahs[51]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "האזינו" ? (
                    <p style={{ color: "blue" }}>
                      {advancedDvarTorahs[52]?.vort.split("/").map((p) => (
                        <p> {p}</p>
                      ))}
                    </p>
                  ) : (
                    ""
                  )}
                  {currentParsha === "וזאת הברכה" ? (
                    <p style={{ color: "tomato" }}>
                      {advancedDvarTorahs[53]?.vort.split("/").map((p) => (
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
