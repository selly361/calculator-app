import React from "react";

interface IProps {
  theme: string;
  setTheme: (arg: string) => void;
}

function Theme({ theme, setTheme }: IProps) {
  return (
    <div className="h-[44px] w-[139px] flex gap-[26px] items-center">
      <h2 className="text-[12px]">THEME</h2>
      <div className="w-[71px]">
        <ul className="text-[var(--textColor)] text-[12px] flex justify-between items-center">
          <li className="w-[20px] text-center h-[71px]">1</li>
          <li className="w-[20px] text-center h-[71px]">2</li>
          <li className="w-[20px] text-center h-[71px]">3</li>
        </ul>
        <div className="bg-[var(--auxBackground)] w-[100%] h-[26px] rounded-[13px] flex items-center px-[5px] ">
          <div className="bg-[var(--equalsBackground)] rounded-[50%] h-[16px] w-[16px]"></div>
        </div>
      </div>
    </div>
  );
}

export default Theme;
