import React from 'react';

interface Props {
    msg: string;
    onClose: () => void;
}

export function InfoWindow({ msg, onClose }: Props) {
    return (
        <>
            <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50" onClick={onClose}></div>
                <div className="bg-white p-6 rounded-lg shadow-md z-50" >
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold text-gray-800">活動(議程)名稱 已完成</h2>
                        {/* <img src="" alt="" /> */}
                    </div>
                    <p className="text-gray-700">{msg}</p>
                </div>
            </div>
        </>
    );
};
