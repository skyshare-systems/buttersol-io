// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.21;

interface IQuickRavenSwap {
    struct SwapParams {
        address dexRouter;
        address tokenIn;
        address tokenOut;
        uint256 amountIn;
        uint256 amountOutMin;
    }
}
