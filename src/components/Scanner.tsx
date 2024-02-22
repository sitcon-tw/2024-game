'use client';
import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import {InfoWindow} from '../components/InfoWindow';

const Scanner = () => {
  const [IsgetData, setIsgetData] = useState(false);
  const [facingMode, setFacingMode] = useState('environment');

  return (
    <div className='flex justify-center text-center items-center'>
      <div className='w-full'>    
        <div className='mt-24'>
            <select onChange={(e) => setFacingMode(e.target.value)}>
              <option value={"environment"}>後置鏡頭</option>
              <option value={"user"}>前置鏡頭</option>
            </select>
        </div>

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
      </div>
      {IsgetData && <InfoWindow msg="恭喜獲得一塊拼圖!!" onClose={() => setIsgetData(false)} />}
    </div>
  );
};

export default Scanner;
