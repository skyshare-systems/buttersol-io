import { TokenABI } from "@/lib/abi";
import {
  useApprove,
  useInitialData,
  useInitialNetwork,
} from "@/lib/store/store";
import {
  useAccount,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
} from "wagmi";
import { ethers } from "ethers";
import { useState } from "react";

const useApproveToken = () => {
  const { address: account } = useAccount();
  const { isApprove, setIsApprove } = useApprove((state) => state);
  const [allowance, setAllowance] = useState<number>(0);
  const { tokeninput, tokenAddress: tokenAddress0 } = useInitialData(
    (state) => state
  );
  const { address: spenderInitAddress } = useInitialNetwork((state) => state);
  const { config: configApprove } = usePrepareContractWrite({
    address: tokenAddress0 ?? "",
    abi: TokenABI,
    functionName: "approve",
    args: [spenderInitAddress, BigInt(String(ethers.constants.MaxUint256))],
  });
  const { writeAsync: approveToken } = useContractWrite(configApprove);

  const { data: dataAllowance } = useContractRead({
    address: tokenAddress0,
    abi: TokenABI,
    functionName: "allowance",
    args: [account, spenderInitAddress],
  });

  const approveSpender = () => {
    approveToken?.()
      .then((res) => {
        console.log(res);
        setIsApprove(true);
      })
      .catch((err) => {
        console.log(err);
        setIsApprove(false);
      });
  };

  function checkAllowance() {
    if (Number(ethers.utils.formatEther(String(dataAllowance))) ?? 0 > 0) {
      setIsApprove(true);
      // console.log(Number(ethers.formatEther(String(dataAllowance))) ?? 0);
      //   setAllowance(Number(ethers.formatEther(String(dataAllowance))) ?? 0);
    } else {
      setIsApprove(false);
      // console.log(allowance);

      setAllowance(0);
    }
  }

  return { approveSpender, tokeninput, checkAllowance, allowance, isApprove };
};

export default useApproveToken;
