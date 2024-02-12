'use client';
import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import {InfoWindow} from '../components/InfoWindow';
import { sendPuzzle2Player } from '@/lib/sendPuzzle2Player';
import { getPlayerPuzzle } from '@/lib/getPlayerPuzzle';

const Scanner = () => {
  const [IsgetData, setIsgetData] = useState(false);
  const [facingMode, setFacingMode] = useState('user');

  const toggleFacingMode = () => {
    setFacingMode(prevMode => prevMode === 'user' ? 'environment' : 'user');
  };

  return (
    <div className='flex justify-center items-center '>
      <div className='w-full'>
        <QrReader
          onResult={(result) => {
            if(!!result) {
              // alert(data);
              // check the data if it is valid
              setIsgetData(true);
              // sendPuzzle2Player('7679f08f7eaeef5e9a65a1738ae2840e', '') send Puzzle to the player, how to get playerToken
            }
          }}
          constraints={{ facingMode: facingMode }}
        />
        <div className=' justify-center text-center items-center'>
            <button className='' onClick={toggleFacingMode}>切換鏡頭</button>
        </div>
      </div>
      {IsgetData && <InfoWindow msg="恭喜獲得一塊拼圖!!" onClose={() => setIsgetData(false)} />}
    </div>
  );
};

export default Scanner;
