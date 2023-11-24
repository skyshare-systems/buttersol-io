// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.21;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "./interfaces/IQuickRavenSwap.sol";
import "./interfaces/IUniswap.sol";

contract QuickRavenSwap is IQuickRavenSwap, OwnableUpgradeable {
    /**
     * Local Variables
     */

    /**
     * Modifiers
     */

    /**
     * Events
     */

    /**
     * Constructor
     */

    function initialize() external initializer {
        __Ownable_init();
    }

    /**
     * Main Functions
     */
    function butterSwap(SwapParams memory _swapParams) external {
        IERC20(_swapParams.tokenIn).transferFrom(
            msg.sender,
            address(this),
            _swapParams.amountIn
        );
        IERC20(_swapParams.tokenIn).approve(
            _swapParams.dexRouter,
            _swapParams.amountIn
        );

        address[] memory path = new address[](2);
        path[0] = _swapParams.tokenIn;
        path[1] = _swapParams.tokenOut;

        IUniswapV2Router(_swapParams.dexRouter).swapExactTokensForTokens(
            _swapParams.amountIn,
            _swapParams.amountOutMin,
            path,
            address(this),
            block.timestamp
        );
    }

    /**
     * Write Functions
     */

    /**
     * Read Functions
     */
}
