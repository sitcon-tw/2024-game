import React, { useState } from "react";

interface Props {
  title: string;
  msg: string;
  onClose: () => void;
}

export function InfoWindow({ title, msg, onClose }: Props) {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center">
      <div
        className="fixed left-0 top-0 h-full w-full bg-black bg-opacity-50"
        onClick={onClose}
      >
      </div>
      <div className="z-50 rounded-lg bg-white p-6 shadow-md">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
          {/* <img src="" alt="" /> */}
        </div>
        <p className="text-gray-700">{msg}</p>
      </div>
    </div>
  );
}
