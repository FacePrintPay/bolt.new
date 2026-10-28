#!/bin/bash

bindings=""

while IFS= read -r line || [ -n "$line" ]; do
  if [[ ! "$line" =~ ^# ]] && [[ -n "$line" ]]; then
    name=$(echo "$line" | cut -d '=' -f 1)
    value=$(echo "$line" | cut -d '=' -f 2-)
    value=$(echo $value | sed 's/^"\(.*\)"$/\1/')
    bindings+="--binding ${name}=${value} "
  fi
done < .env.local

bindings=$(echo $bindings | sed 's/[[:space:]]*$//')

echo $bindings

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=bindings.sh
