import { TokenABI } from "@/lib/abi";
import { useAccount, useContractRead, Address } from "wagmi";
import { useDestinationData, useInitialData } from "@/lib/store/store";

const useBalanceOf = () => {
  const { address: account } = useAccount();
  const { tokenAddress } = useInitialData((state) => state);
  const { tokenAddress: tokenAddress1 } = useDestinationData((state) => state);

  const { data } = useContractRead({
    address: tokenAddress,
    abi: TokenABI,
    functionName: "balanceOf",
    args: [account as Address],
  });

  const { data: data1 } = useContractRead({
    address: tokenAddress1,
    abi: TokenABI,
    functionName: "balanceOf",
    args: [account as Address],
  });

  const balanceOf0: any = data;
  const balanceOf1: any = data1;

  return { balanceOf0, balanceOf1 };
};

export default useBalanceOf;
