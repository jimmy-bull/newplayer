import React from "react";

function Player(props) {
  return (
    <div className="playerBody">
      <div class="blur">
        <div style={{ alignSelf: "center" }}>
          <img
            className="imgplayer"
            src="https://generations.fr/media/news/thumb/1110x624_drake-critique-pour-ses-vols-courte-duree-en-jet-prive-il-repond_62e10bbfb289e.jpeg.webp"
            alt=""
          />
          <div className="playerControl">
            <div>
              <ion-icon
                style={{ fontSize: "20px", color: "white" }}
                name="cloud-download-outline"
              ></ion-icon>
            </div>
            <div>
              <ion-icon
                style={{ fontSize: "30px", color: "white" }}
                name="play-skip-back-outline"
              ></ion-icon>
            </div>
            <div>
              <ion-icon
                style={{ fontSize: "40px", color: "white" }}
                name="play-circle-outline"
              ></ion-icon>
            </div>
            <div>
              <ion-icon
                style={{ fontSize: "30px", color: "white" }}
                name="play-skip-forward-outline"
              ></ion-icon>
            </div>
            <div>
              <ion-icon
                style={{ fontSize: "20px", color: "#B6E1E1" }}
                name="heart-outline"
              ></ion-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Player;
