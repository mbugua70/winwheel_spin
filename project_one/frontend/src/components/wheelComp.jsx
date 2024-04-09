import { useEffect, useRef } from "react";
import Winwheel from "winwheel";

const WheelComp = () => {
  console.log(Winwheel);
  useEffect(() => {
    let winwheel = new Winwheel({
      canvasID: "myCanvas",
      numSegments: 5,
      segments: [
        { fillStyle: "#eae56f", text: "Segment 1" },
        { fillStyle: "#89f26e", text: "Segment 2" },
        { fillStyle: "#7de6ef", text: "Segment 3" },
        { fillStyle: "#e7706f", text: "Segment 4" },
        { fillStyle: "#d8754f", text: "Segment 5" },
      ],
    });
  }, []);
  const renderc = <canvas id="canvas" width="880" height="300"></canvas>;
  return (
    <>
      <div className="spin_wheel">
        {renderc}
        <img id="prizePointer" src="./image/basic_pointer.png" alt="V" />
        <audio id="winsound" controls>
          <source src="./audio/audio_one.mp3" type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
        <button>Spin the Wheel</button>
      </div>
    </>
  );
};

export default WheelComp;
