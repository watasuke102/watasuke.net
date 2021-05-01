#!/usr/bin/bash
# 
# start.sh
# 
# CopyRight (c) 2021 Watasuke
# Email  : <watasuke102@gmail.com>
# Twitter: @Watasuke102
# This software is released under the MIT SUSHI-WARE License.
# 
set -e

npm i 
npm run build 
npm run serve
