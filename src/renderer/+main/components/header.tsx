/* eslint-disable prettier/prettier */

import { ClientWallet } from "../models/client-wallet";

interface HeaderProps{
  mainWallet: ClientWallet | undefined;
}
export default function HeaderComponent({ mainWallet }: HeaderProps) {
  return (
    <div className="w-full h-12 bg-stone-800 flex flex-row">
      <div className="flex-1 flex justify-start items-center px-4 h-full">
        <h1 className="text-xl text-black dark:text-zinc-400 font-semibold">
          Sniper
        </h1>
      </div>
      {mainWallet && <div className="flex-1 h-full flex flex-row justify-evenly items-center">
        <p className="text-white">
              {mainWallet.address?.substring(0, 10)}...
              {mainWallet.address?.substring(38, 50)}
        </p>
        <p className="text-white">
          balance: {mainWallet.balance?.substring(0, 6)}
        </p>
      </div>}
      <div className="flex-1">
        <div />
      </div>
    </div>
  );
}
