import React from "react";
import "./Staff.scss";

// BOARD
// import Van from "../../../assets/images/staff/board/VanEvans.png";
import Van from "../../../assets/images/staff/Van.jpeg";
import Scott from "../../../assets/images/staff/ScottWhite.jpeg";
import Jaime from "../../../assets/images/staff/JaimeWhite.jpeg";
// import Lindsey from "../../../assets/images/staff/board/LindseyZimmerman.jpeg";
import Lindsey from "../../../assets/images/staff/LindseyZimmerman.jpeg";

// STAFF
import Alcides from "../../../assets/images/staff/staff/AlcidesJordan.jpeg";
import AnaJulie from "../../../assets/images/staff/AnaJuliaGiraudGomez.jpeg";
// import Camila from "../../../assets/images/staff/staff/CamilaMoreno.jpeg";
import Camila from "../../../assets/images/staff/CamilaMoreno.jpeg";
import Christine from "../../../assets/images/staff/staff/ChristineWatts.jpeg";
import Doris from "../../../assets/images/staff/DorisAvilaGuzman.jpeg";
import Elsa from "../../../assets/images/staff/ElsyYanileCortesPrada.jpeg";
import Jose from "../../../assets/images/staff/JoseSantosHernandezRengifo.jpeg";
import Maria from "../../../assets/images/staff/MariaGabrielaRomeroMorlan.jpeg";
// import Natalia from "../../../assets/images/staff/staff/NataliaAlejandraGuzman.jpeg";
import Nayibe from "../../../assets/images/staff/NayibeCatalinaRamirezGomez.jpeg";
import Oriana from "../../../assets/images/staff/OrianaVanesaGarciaRincon.jpeg";
import RosaInes from "../../../assets/images/staff/RosaInesPulecioGuzman.jpeg";
import Rosario from "../../../assets/images/staff/RosarioVasquezdeLeal.jpeg";
import Sandra from "../../../assets/images/staff/SandraMilenaGongoraLievano.jpeg";
import Santiago from "../../../assets/images/staff/SantiagoSanchezBarrios.jpeg";
import Zulma from "../../../assets/images/staff/ZulmaAlciraNaranjoCastaño.jpeg";

// VOLUNTEERS
import AnaMirian from "../../../assets/images/staff/AnaMiriamArteaga.jpeg";
import LuzAyde from "../../../assets/images/staff/volunteers/LuzAydeCristiano.jpeg";
import MariaMateus from "../../../assets/images/staff/MariaMateus.jpeg";
import FelisaAguiar from '../../../assets/images/staff/FelisaAguiar.jpeg';
import Viviana from "../../../assets/images/staff/VivianaVillamil.jpeg";

// import GroupImage from '../../../assets/images/staff/Group.jpeg';



const Staff = () => (
  <section id="staff-main">
    <header>
      <h1 id='staff-main-header'>Our Staff</h1>
    </header>
    <Board />
    <CountryDirectors />
    <HomeDirectors />
    <Volunteers />
    <StaffMisc />
  </section>
);

export default Staff;

const Board = () => (
  <section id="staff-section">
    <header id="staff-header">Board of Directors</header>
    <section id="staff-img-cont">
      <div id="staff-imgHolder">
        <img src={Van} alt="VanEvans" id="staff-img" />
        <span>Van Evans, PhD</span>
        <div>President</div>
      </div>
      <div id="staff-imgHolder">
        <img src={Lindsey} alt="LindseyZimmerman" id="staff-img" />
        <span>Lindsey Zimmerman</span>
        <div>Secretary</div>
      </div>
      <div id="staff-imgHolder">
        <img src={Scott} alt="ScottEvans" id="staff-img" />
        <span>Scott Evans, CPA</span>
        <div>Treasurer</div>
      </div>
      <div id="staff-imgHolder">
        <img src={Jaime} alt="JaimeFigureroa" id="staff-img" />
        <span>Jaime Figureroa, MPA</span>
        <div>Director, Peru</div>
      </div>
    </section>
  </section>
);

const CountryDirectors = () => (
  <section id="staff-section">
    <header id="staff-header">Country Directors</header>
    <section id="staff-img-cont">
      <div id="staff-imgHolder">
        <img src={Sandra} alt="SandraGongora" id="staff-img" />
        <span>Sandra Gongora</span>
        <div>Country Director, Colombia</div>
      </div>
      <div id="staff-imgHolder">
        <img src={AnaJulie} alt="AnaJuliaGiraud" id="staff-img" />
        <span>Ana Julia Giraud</span>
        <div>Country Director, Venezuela</div>
      </div>
      <div id="staff-imgHolder">
        <img src={Jaime} alt="JaimeFigureroa" id="staff-img" />
        <span>Jaime Figureroa, MPA</span>
        <div>Country Director, Peru</div>
      </div>
    </section>
  </section>
);
const HomeDirectors = () => (
  <section id="staff-section">
    <header id="staff-header">Home Directors</header>
    <section id="staff-img-cont">
      <div id="staff-imgHolder">
        <img src={Rosario} alt="RosarioVasquez" id="staff-img" />
        <span>Rosario Vasquez</span>
        <div>Home Director, Espinal</div>
      </div>
      <div id="staff-imgHolder">
        <img src={Elsa} alt="ElsaYanileCortesPrada" id="staff-img" />
        <span>Elsa Yanile Cortes</span>
        <div>Home Director, Ibague - San Jose</div>
      </div>
      <div id="staff-imgHolder">
        <img src={Doris} alt="DorisAvila" id="staff-img" />
        <span>Doris Avila</span>
        <div>Assistant Director, Ibague - San Jose</div>
      </div>

      <div id="staff-imgHolder">
        <img src={AnaJulie} alt="AnaJuliaGiraud" id="staff-img" />
        <span>Ana Julia Giraud</span>
        <div>Home Director, Cucuta & San Felipe</div>
      </div>
      <div id="staff-imgHolder">
        <img src={Maria} alt="MariaGabrielaRomero" id="staff-img" />
        <span>Maria Gabriela Romero</span>
        <div>Home Director, Melgar</div>
      </div>
      <div id="staff-imgHolder">
        <img src={Santiago} alt="SantiagoSanchezBarrios" id="staff-img" />
        <span>Santiago Barrios</span>
        <div>Assistant Director, Melgar</div>
      </div>
      <div id="staff-imgHolder">
        <img src={Oriana} alt="OrianaVanesaGarciaRincon" id="staff-img" />
        <span>Oriana Rincon</span>
        <div>Home Director, La Guajira</div>
      </div>

      <div id="staff-imgHolder">
        <img src={Zulma} alt="ZulmaAlciraNaranjoCastano" id="staff-img" />
        <span>Zulma Castano</span>
        <div>Home Director, Medellin</div>
      </div>

      <div id="staff-imgHolder">
        <img src={Nayibe} alt="NayibeCatalinaRamirezGomez" id="staff-img" />
        <span>Nayibe Gomez</span>
        <div>Assistant Director, Medellin</div>
      </div>
      <div id="staff-imgHolder">
        <img src={Alcides} alt="AlcidesJordan" id="staff-img" />
        <span>Alcides Jordan</span>
        <div>Home Director, Azul Wasi</div>
      </div>
    </section>
  </section>
);

const Volunteers = () => (
  <section id="staff-section">
    <header id="staff-header">Volunteers</header>
    <section id="staff-img-cont">
      <div id="staff-imgHolder">
        <img src={AnaMirian} alt="AnaMirianArteaga" id="staff-img" />
        <span>Ana Mirian Arteaga</span>
        <div>Volunteer, Espinal Home</div>
      </div>
      <div id="staff-imgHolder">
        <img src={FelisaAguiar} alt="LuzDaryBarragan" id="staff-img" />
        <span>Felisa Aguilar</span>
        <div>Volunteer, Melgar Home</div>
      </div>
      <div id="staff-imgHolder">
        <img src={MariaMateus} alt="AmparoSoto" id="staff-img" />
        <span>Maria Mateus</span>
        <div>Travel</div>
      </div>
      <div id="staff-imgHolder">
        <img src={Viviana} alt="BlancaMeryCardozo" id="staff-img" />
        <span>Dr. Viviana Villamil</span>
        <div>Dentistry</div>
      </div>
    </section>
  </section>
);


const StaffMisc = () => (
  <section id="staff-section">
    <header id="staff-header">Staff</header>
    <section id="staff-img-cont">
      <div id="staff-imgHolder">
        <img src={Jose} alt="JoseSantos" id="staff-img" />
        <span>Jose Santos</span>
        <div>Logistics</div>
      </div>
      <div id="staff-imgHolder">
        <img src={RosaInes} alt="RosaInesPulecioGuzman" id="staff-img" />
        <span>Rosa Guzman</span>
        <div>Legal Rep, Colombia</div>
      </div>
      <div id="staff-imgHolder">
        <img src={Camila} alt="CamilaMoreno" id="staff-img" />
        <span>Camila Moreno</span>
        <div>Public Relations</div>
      </div>
      <div id="staff-imgHolder">
        <img src={Christine} alt="ChristineWatts" id="staff-img" />
        <span>Christine Watts</span>
        <div>Recruitment</div>
      </div>
      <div id="staff-imgHolder">
        <img src={LuzAyde} alt="LuzAydeCristiano" id="staff-img" />
        <span>Luz Ayde Cristiano</span>
        <div>Spanish Translation & Editing</div>
      </div>
    </section>
  </section>
);