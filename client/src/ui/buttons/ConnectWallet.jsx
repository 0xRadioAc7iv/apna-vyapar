import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { ethers } from "ethers";

const ConnectWallet = () => {
  const [connected, setConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");

  async function connectWallet() {
    try {
      if (!connected) {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const _walletAddress = await signer.getAddress();
        setConnected(true);
        setWalletAddress(_walletAddress);
      } else {
        // Disconnect the wallet
        await window.ethereum.request({
          method: "wallet_requestPermissions",
          params: [{ eth_accounts: {} }],
        });
        setConnected(false);
        setWalletAddress("");
      }
    } catch (error) {
      console.error("Error disconnecting wallet:", error);
    }
  }

  return (
    <div className="">
      <div className="main ">
        <div className="content">
          <button
            className="flex text-sm items-center pb-2.5 inset-x-0 border border-transparent dark:border-white/[0.2] rounded-full bg-gradient-to-r from-green-500 to-green-700 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-3 py-2 space-x-4 hover:text-white hover:shadow-md"
            onClick={connectWallet}
          >
            {connected ? (
              <h4 className="wal-add">
                {walletAddress.length > 12
                  ? `${walletAddress.substring(0, 10)}...`
                  : walletAddress}
              </h4>
            ) : (
              "Connect Wallet"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;
