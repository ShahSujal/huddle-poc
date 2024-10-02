"use client";

import axios from "axios";

// import { createRandomRoom } from "@/lib/action";
// import { RoomDetails } from "@/types/common";
import { useHuddle01, useLobby, useRoom } from "@huddle01/react/hooks";
// import Image from "next/image";
// import { useHuddle01 } from '@huddle01/react';
export default function Home() {
  // const roomId = createRandomRoom();
  // const { huddleClient } = useHuddle01();
  // const {} = useRoom()
  // initialize("YOUR_PROJECT_ID")

  const { joinRoom, state, leaveRoom } = useRoom({
    onJoin: (room) => {
      console.log("onJoin", room);
      // updateMetadata({ displayName });
    },
    onPeerJoin: (peer) => {
      console.log("onPeerJoin", peer);
    },
  });
 
 
  // const { initialize } = useHuddle01();

  // const response = await axios.post(
  //   'https://api.huddle01.com/api/v1/create-room',
  //   {
  //     roomLocked: false,
  //     metadata: {
  //       title: "My Room",
  //       hostWallets: ['0x29f54719E88332e70550cf8737293436E9d7b10b']
  //     },
  //   },
  //   {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'x-api-key': "",
  //     },
  //   }
  // );
  // console.log(response.data);
  // console.log(response);

  const createRandomRoom = async () => {
    let headersList = {
      "x-api-key": "",
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
      roomLocked: false,
      metadata: {
        title: "My Room",
        hostWallets: "['0x29f54719E88332e70550cf8737293436E9d7b10b']",
      },
    });

    let reqOptions = {
      url: "https://api.huddle01.com/api/v1/create-room",
      method: "POST",
      headers: headersList,
      data: bodyContent,
    };

    let response = await axios.request(reqOptions);
    console.log(response.data);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={() => createRandomRoom()}>Create room</button>
      <button
        onClick={() => {
          joinRoom({
            roomId: "gco-nrci-kqd",
            token: "",
          });
        }}
      >
        Join Room
      </button>
      <button onClick={leaveRoom}>Leave Room</button>
    </main>
  );
}
