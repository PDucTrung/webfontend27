// const { array } = require("prop-types");

const Audio = ({ audio, onPrev, onNext }) => {
  const audioRef = React.useRef();
  const [audioStatus, changeAudioStatus] = React.useState(false);
  const [audioRepeat, changeAudioRepeat] = React.useState(false);
  const [audioRandom, changeAudioRandom] = React.useState(false);

  function ramdomAudio() {
    if (audioRandom == false) {
      document.querySelector(".random").classList.add("active");
      changeAudioRandom(true);
    } else {
      document.querySelector(".random").classList.remove("active");
      changeAudioRandom(false);
    }
  }

  const repeatAudio = () => {
    if (audioRepeat == false) {
      document.querySelector(".repeat").classList.add("active");
      changeAudioRepeat(true);
    } else {
      document.querySelector(".repeat").classList.remove("active");
      changeAudioRepeat(false);
    }
  };

  const startAudio = () => {
    audioRef.current.play();
    changeAudioStatus(true);
  };

  const pauseAudio = () => {
    audioRef.current.pause();
    changeAudioStatus(false);
  };

  const handleLoadedData = () => {
    if (audioStatus == true) {
      audioRef.current.play();
    }
  };

  return (
    <div className="section-audio">
      <img src={audio.img} alt={audio.artist} />
      <div className="author">
        <h3 className="font-mali">{audio.title}</h3>
        <p className="font-poppins">Singer: {audio.artist}</p>
      </div>
      <div className="audio">
        <audio
          ref={audioRef}
          src={audio.src}
          onEnded={() => {
            if (audioRepeat == true) {
              audioRef.current.play();
            } else {
              changeAudioStatus(false);
              onNext();
              changeAudioStatus(true);
            }
          }}
          onLoadedData={handleLoadedData}
          controls
        ></audio>
        <div className="control d-flex align-items-center gap-4">
          <button className="random" onClick={ramdomAudio}>
            <i className="fa-solid fa-shuffle"></i>
          </button>
          <button className="pre" onClick={onPrev}>
            <i className="fa-solid fa-backward-fast"></i>
          </button>
          <div className="btn-change-audio">
            {audioStatus ? (
              <button onClick={pauseAudio}>
                <i className="fa-solid fa-pause"></i>
              </button>
            ) : (
              <button onClick={startAudio}>
                <i className="fa-solid fa-play"></i>
              </button>
            )}
          </div>
          <button className="next" onClick={onNext}>
            <i className="fa-solid fa-forward-fast"></i>
          </button>
          <button className="repeat" onClick={repeatAudio}>
            <i className="fa-sharp fa-solid fa-repeat"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [index, setIndex] = React.useState(0);

  const audios = [
    {
      id: 1,
      img: "./img/img1.jpg",
      src: "./audio/ChungTaChiLaDaTungYeuDaiMeoRemix-ThienTu.mp3",
      title: "Chúng ta chỉ là đã từng yêu",
      artist: "Thiên Tú",
    },
    {
      id: 2,
      img: "./img/img2.jpg",
      src: "./audio/ChanhLongThuongCoOrrinRemix-HuyVacNonHanTa.mp3",
      title: "Chạnh lòng cô thương",
      artist: "Huy Vac",
    },
    {
      id: 3,
      img: "./img/img3.jpg",
      src: "./audio/ChieuThuHoaBongNangMix-DatKaa.mp3",
      title: "Chiều thu họa bóng nàng",
      artist: "DatKaa",
    },
    {
      id: 4,
      img: "./img/img4.jpg",
      src: "./audio/Khoc-Cho-Nguoi-Ai-Khoc-Cho-Anh-Gia-Huy-Singer-TVk.mp3",
      title: "Khóc Cho Người Ai Khóc Cho Anh",
      artist: "Gia Huy",
    },
  ];

  const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const randomSongIndex = getRandom(0, audios.length);
  const audio = audios[index];
  // const audioRandom = audios[randomSongIndex];

  const handleNext = () => {
    if (document.querySelector(".random").classList.contains("active")) {
      setIndex(randomSongIndex);
    } else if (index == audios.length - 1) {
      setIndex(0);
    } else setIndex(index + 1);
  };
  const handlePrev = () => {
    if (index == 0) setIndex(audios.length - 1);
    else setIndex(index - 1);
  };

  return (
    <div>
      <Audio audio={audio} onPrev={handlePrev} onNext={handleNext} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<App />);
