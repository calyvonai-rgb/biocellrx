const VitalityVideo = () => {
  return (
    <div className="w-full">
      <div style={{padding:"75% 0 0 0", position:"relative"}}>
        <iframe 
          src="https://player.vimeo.com/video/1117754950?autoplay=1&muted=1&controls=1&loop=0"
          frameBorder="0" 
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
          referrerPolicy="strict-origin-when-cross-origin" 
          style={{position:"absolute", top:0, left:0, width:"100%", height:"100%"}}
          title="Bio cell RX"
          className="rounded-2xl shadow-xl"
        />
      </div>
    </div>
  );
};

export default VitalityVideo;
