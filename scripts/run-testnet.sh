#!/usr/bin/env bash
set -o errexit

if [ -f .env.local ]; then
  set -o allexport; source .env.local; set +o allexport
fi

yarn run ganache \
  --fork.url="https://mainnet.infura.io/v3/$INFURA_KEY" \
  --chain.chainId=1 \
  --miner.defaultGasPrice=2000000000 \
  --unlock="0x2F5B5F7771aCdc698Bce5FEb53C40084939D7b60" \ # oz holder, pass id 145
  --unlock="0x28C6c06298d514Db089934071355E5743bf21d60" # binance
