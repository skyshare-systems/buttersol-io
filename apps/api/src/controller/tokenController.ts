import expressAsyncHandler from "express-async-handler";
import { tokenContract } from "../config/data";
import { ethers } from "ethers";

export const GETallowance = expressAsyncHandler(async (req, res) => {
  const { network, tokenAddress, owner, spender } = req.body;
  let allowance;
  let isAllowed = false;

  try {
    allowance = await tokenContract(network, tokenAddress).allowance(
      owner,
      spender
    );
  } catch (e: any) {
    res.status(400).send("Error" + e);
    return;
  }

  if (BigInt(allowance) >= BigInt(Number.MAX_SAFE_INTEGER)) isAllowed = true;

  res.status(200).send(isAllowed);
});

export const GETbalanceOf = expressAsyncHandler(async (req, res) => {
  const { network, tokenAddress, userAddress } = req.body;
  let balance;

  try {
    balance = await tokenContract(network, tokenAddress).balanceOf(userAddress);
  } catch (e: any) {
    res.status(400).send("Error" + e);
    return;
  }

  res.status(200).send(ethers.formatEther(String(balance)));
});

export const GETtotalSupply = expressAsyncHandler(async (req, res) => {
  const { network, tokenAddress } = req.body;
  let totalSupply;

  try {
    totalSupply = await tokenContract(network, tokenAddress).totalSupply();
  } catch (e: any) {
    res.status(400).send("Error" + e);
    return;
  }

  res.status(200).send(ethers.formatEther(totalSupply));
});

export const GETname = expressAsyncHandler(async (req, res) => {
  const { network, tokenAddress } = req.body;
  let name;

  try {
    name = await tokenContract(network, tokenAddress).name();
  } catch (e: any) {
    res.status(400).send("Error" + e);
    return;
  }

  res.status(200).send(name);
});

export const GETtest = expressAsyncHandler(async (req, res) => {
  const message = "working";

  res.status(200).send(message);
});
