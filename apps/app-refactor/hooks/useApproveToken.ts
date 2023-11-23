import { TokenABI } from "@/lib/abi";

import {
  useApprove,
  useInitialData,
  useInitialNetwork,
} from "@/lib/store/store";

import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
  Address,
} from "wagmi";

import { ethers } from "ethers";
import { useEffect, useState } from "react";
import axios from "axios";

const useApproveToken = () => {
  const { isApprove, setIsApprove } = useApprove((state) => state);
  const [allowance, setAllowance] = useState<any>();
  const [hash, setHash] = useState("");
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

  const { writeAsync: approveToken, isLoading: isLoadingApprove } =
    useContractWrite(configApprove);

  const approveSpender = () => {
    approveToken?.()
      .then((res) => {
        setHash(res.hash);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  async function getAllowance(
    id: any,
    tokenAdd: any,
    ownerAdd: any,
    spenderAdd: any
  ) {
    await axios
      .post(`https://quickraven-api.onrender.com/api/token/allowance`, {
        network: id,
        tokenAddress: tokenAdd,
        owner: ownerAdd,
        spender: spenderAdd,
      })
      .then((res) => {
        setIsApprove(res.data);
      })
      .catch((err) => console.info(err));
  }

  const { data, isError, isLoading, isSuccess } = useWaitForTransaction({
    hash: hash as Address,
  });

  useEffect(() => {
    if (isSuccess) {
      setIsApprove(true);
    }
  }, [data]);

  return {
    approveSpender,
    tokeninput,
    allowance,
    isApprove,
    setAllowance,
    getAllowance,
    isSuccess,
    isLoadingApprove,
  };
};

export default useApproveToken;
