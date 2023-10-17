import { TokenABI } from "@/lib/abi";
import { useAccount, useContractRead } from "wagmi";
import { ethers } from "ethers";

const useBalanceOf = ({ tokenAddress }: any) => {
  const { address: account } = useAccount();

  const { data } = useContractRead({
    address: "0x144C2849e6eD7b0D9DC22485Fa1c54d830896021",
    abi: TokenABI,
    functionName: "balanceOf",
    args: ["0x680f19b9cCfc1D6A106DDDd4373Fb474d64c2664"],
  });

  const balanceOf: any = data;

  console.log(
    "Testing " + ethers.utils.parseEther(String(balanceOf ? balanceOf : 0))
  );

  return { balanceOf };
};

export default useBalanceOf;
