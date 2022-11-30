import React, { useEffect, useState } from "react";
import TABLEDATA from "../assets/DATA";

export default function GroupTab() {
  const [teamList, setTeamList] = useState([
    {
      name: "Brasil",
      points: 0,
      flag: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrrWb0Sza_sXK3XH1uO_-G1AxdLBBABWq3TA&usqp=CAU",
    },
    {
      name: "Brasil",
      points: 0,
      flag: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrrWb0Sza_sXK3XH1uO_-G1AxdLBBABWq3TA&usqp=CAU",
    },
    {
      name: "Brasil",
      points: 0,
      flag: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrrWb0Sza_sXK3XH1uO_-G1AxdLBBABWq3TA&usqp=CAU",
    },
    {
      name: "Brasil",
      points: 0,
      flag: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrrWb0Sza_sXK3XH1uO_-G1AxdLBBABWq3TA&usqp=CAU",
    },
  ]);

  return (
    <div className="grouptab">
      <div className="title">
        <h1>Tabela</h1> <button>Group G</button>
      </div>
      <div className="groupinfo">
        <div className="group">Grupo G</div> <p>P</p>
      </div>
      <div className="teams">
        {teamList.map((item, index) => (
          <div className="teamlist" key={index}>
            <div className="flagandteam">
              <span className="flagpic">
                <img src={item.flag} alt="Flag" />
              </span>
              <span> {item.name} </span>
            </div>
            <span className="points"> {item.points} </span>
          </div>
        ))}
      </div>
    </div>
  );
}
