import Foto1 from "../src/assets/me.jpg";
import Foto2 from "../src/assets/health.jpg";
import Foto3 from "../src/assets/gal.jpg";
import Foto4 from "../src/assets/cont.jpg";
import vid from "../src/assets/v2.mp4";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonPinCircleOutlinedIcon from "@mui/icons-material/PersonPinCircleOutlined";

function App() {
  return (
    <>
      <div className="h-screen grid grid-cols-2">
        <div className="w-full h-screen relative">
          <video
            className="w-full h-screen object-cover"
            src={vid}
            autoPlay
            loop
            muted
          />
        </div>
        <div className="grid grid-cols-2 row-span-2 ">
          <button className="relative">
            <img
              className=" h-full sm:hover:opacity-100 "
              src={Foto1}
              alt="/"
            />
            <div className="absolute top-[45%] left-[42%] text-2xl font-bold">
              <StarBorderOutlinedIcon sx={{ fontSize: 50 }} />
              <p>O mnie</p>
            </div>
          </button>
          <button className="relative">
            <img
              className="h-full flex-1 sm:hover:opacity-100"
              src={Foto2}
              alt="/"
            />
            <div className="absolute  top-[45%] left-[20%] text-2xl font-bold">
              <MonitorHeartOutlinedIcon sx={{ fontSize: 50 }} />
              <p>Właściwości zdrowotne</p>
            </div>
          </button>
          <button className="relative">
            <img
              className=" h-full bg-cover sm:hover:opacity-100 "
              src={Foto3}
              alt="/"
            />
            <div className="absolute top-[45%] left-[42%] text-2xl font-bold">
              <FavoriteBorderOutlinedIcon sx={{ fontSize: 50 }} />
              <p>Galeria</p>
            </div>
          </button>
          <button className="relative">
            <img className=" h-full sm:hover:opacity-900" src={Foto4} alt="/" />
            <div className="absolute top-[45%] left-[42%] text-2xl font-bold">
              <PersonPinCircleOutlinedIcon sx={{ fontSize: 50 }} />
              <p>Kontakt</p>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
