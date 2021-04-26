import React from "react";
import "./Staff.scss";

// BOARD
import Van from "../../../assets/images/staff/board/VanEvans.png";
import Scott from "../../../assets/images/staff/board/ScottEvans.jpeg";
import Jaime from "../../../assets/images/staff/board/JaimeFigureroa-larger.jpeg";
import Lindsey from "../../../assets/images/staff/board/LindseyZimmerman.jpeg";

// STAFF
import Alcides from "../../../assets/images/staff/staff/AlcidesJordan.jpeg";
import AnaJulie from "../../../assets/images/staff/staff/AnaJuliaGiraud.jpeg";
import Camila from "../../../assets/images/staff/staff/CamilaMoreno.jpeg";
import Christine from "../../../assets/images/staff/staff/ChristineWatts.jpeg";
import Doris from "../../../assets/images/staff/staff/DorisAvila.png";
import Elsa from "../../../assets/images/staff/staff/ElsyYanileCortesPrada.jpg";
import Jose from "../../../assets/images/staff/staff/JoseSantos.jpeg";
import Maria from "../../../assets/images/staff/staff/MariaGabrielaRomero.jpg";
import Natalia from "../../../assets/images/staff/staff/NataliaAlejandraGuzman.jpeg";
import Nayibe from "../../../assets/images/staff/staff/NayibeCatalinaRamirezGomez.jpg";
import Oriana from "../../../assets/images/staff/staff/OrianaVanesaGarciaRincon.jpg";
import RosaInes from "../../../assets/images/staff/staff/RosaInesPulecioGuzman.jpg";
import Rosario from "../../../assets/images/staff/staff/RosarioVasquez.jpeg";
import Sandra from "../../../assets/images/staff/staff/SandraGongora.jpg";
import Santiago from "../../../assets/images/staff/staff/SantiagoSanchezBarrios.jpg";
import Zulma from "../../../assets/images/staff/staff/ZulmaAlciraNaranjoCastano.jpg";

// VOLUNTEERS
import Amparo from "../../../assets/images/staff/volunteers/AmparoSoto.jpeg";
import AnaMirian from "../../../assets/images/staff/volunteers/AnaMirianArteaga.jpeg";
import Blanca from "../../../assets/images/staff/volunteers/BlancaMeryCardozo.jpeg";
import LuzAyde from "../../../assets/images/staff/volunteers/LuzAydeCristiano.jpeg";
import LuzDary from "../../../assets/images/staff/volunteers/LuzDaryBarragan.jpeg";


// APRIL 21 UPDATES
// SWITCH JAIME AND VAN IMAGES -- DONE
// COUNTRY DIRECTORS ON FIRST LINE MANAGAMENT STAFF
// MGMT STAFF TITLE TO COUNTRY DIRECTORS
// ADD HOME DIRETORS TITLE
// MISC TITLE BELOW 



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
        <span>Van Evans, PhD, LCSW</span>
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
        <div>Country Director, Peru</div>
      </div>
    </section>
  </section>
);

const CountryDirectors = () => (
  <section id="staff-section">
    <header id="staff-header">Country Directors</header>
    <section id="staff-img-cont">
      <div id="staff-imgHolder">
        <img src={Jaime} alt="JaimeFigureroa" id="staff-img" />
        <span>Jaime Figureroa, MPA</span>
        <div>Country Director, Peru</div>
      </div>
      <div id="staff-imgHolder">
        <img src={AnaJulie} alt="AnaJuliaGiraud" id="staff-img" />
        <span>Ana Julia Giraud</span>
        <div>Country Director, Venezuela</div>
      </div>
      <div id="staff-imgHolder">
        <img src={Sandra} alt="SandraGongora" id="staff-img" />
        <span>Sandra Gongora</span>
        <div>Country Director, Colombia</div>
      </div>
    </section>
  </section>
);
const HomeDirectors = () => (
  <section id="staff-section">
    <header id="staff-header">Home Directors</header>
    <section id="staff-img-cont">
      <div id="staff-imgHolder">
        <img src={Alcides} alt="AlcidesJordan" id="staff-img" />
        <span>Alcides Jordan</span>
        <div>Home Director, Azul Wasi</div>
      </div>
      <div id="staff-imgHolder">
        <img src={Doris} alt="DorisAvila" id="staff-img" />
        <span>Doris Avila</span>
        <div>Assistant Director, Ibague - San Jose</div>
      </div>
      <div id="staff-imgHolder">
        <img src={Elsa} alt="ElsaYanileCortesPrada" id="staff-img" />
        <span>Elsa Yanile Cortes</span>
        <div>Home Director, Ibague - San Jose</div>
      </div>
      <div id="staff-imgHolder">
        <img src={Jose} alt="JoseSantos" id="staff-img" />
        <span>Jose Santos</span>
        <div>Home Director, Alvarado</div>
      </div>
      <div id="staff-imgHolder">
        <img src={Maria} alt="MariaGabrielaRomero" id="staff-img" />
        <span>Maria Gabriela Romero</span>
        <div>Home Director, Melgar</div>
      </div>
      
      <div id="staff-imgHolder">
        <img src={Nayibe} alt="NayibeCatalinaRamirezGomez" id="staff-img" />
        <span>Nayibe Gomez</span>
        <div>Home Volunteer, Medellin</div>
      </div>
      <div id="staff-imgHolder">
        <img src={Oriana} alt="OrianaVanesaGarciaRincon" id="staff-img" />
        <span>Oriana Rincon</span>
        <div>Home Director, Guajira</div>
      </div>
      
      <div id="staff-imgHolder">
        <img src={Rosario} alt="RosarioVasquez" id="staff-img" />
        <span>Rosario Vasquez</span>
        <div>Home Director, Espinal</div>
      </div>
      <div id="staff-imgHolder">
        <img src={Santiago} alt="SantiagoSanchezBarrios" id="staff-img" />
        <span>Santiago Barrios</span>
        <div>Home Volunteer, Tolima</div>
      </div>
      <div id="staff-imgHolder">
        <img src={Zulma} alt="ZulmaAlciraNaranjoCastano" id="staff-img" />
        <span>Zulma Castano</span>
        <div>Home Director, Medellin</div>
      </div>
    </section>
  </section>
);

const Volunteers = () => (
  <section id="staff-section">
    <header id="staff-header">Volunteers</header>
    <section id="staff-img-cont">
      <div id="staff-imgHolder">
        <img src={Amparo} alt="AmparoSoto" id="staff-img" />
        <span>Amparo Soto</span>
        <div>Volunteer, Espinal Home</div>
      </div>
      <div id="staff-imgHolder">
        <img src={AnaMirian} alt="AnaMirianArteaga" id="staff-img" />
        <span>Ana Mirian Arteaga</span>
        <div>Volunteer, Espinal Home</div>
      </div>
      <div id="staff-imgHolder">
        <img src={Blanca} alt="BlancaMeryCardozo" id="staff-img" />
        <span>Blanca Mery Cardozo</span>
        <div>Volunteer, Espinal Home</div>
      </div>
      <div id="staff-imgHolder">
        <img src={LuzDary} alt="LuzDaryBarragan" id="staff-img" />
        <span>Luz Dary Barragan</span>
        <div>Volunteer, Espinal Home</div>
      </div>
    </section>
  </section>
);


const StaffMisc = () => (
  <section id="staff-section">
    <header id="staff-header">Staff</header>
    <section id="staff-img-cont">
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
        <img src={RosaInes} alt="RosaInesPulecioGuzman" id="staff-img" />
        <span>Rosa Guzman</span>
        <div>Legal Rep. Ong Chapter, Colombia</div>
      </div>

      <div id="staff-imgHolder">
        <img src={Natalia} alt="NataliaAlejandraGuzman" id="staff-img" />
        <span>Natalia Alejandra Guzman</span>
        <div>Marketing & Publicity</div>
      </div>
      <div id="staff-imgHolder">
        <img src={LuzAyde} alt="LuzAydeCristiano" id="staff-img" />
        <span>Luz Ayde Cristiano</span>
        <div>Spanish Translation & Editing</div>
      </div>
    </section>
  </section>
);