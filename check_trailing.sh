#!/bin/bash
grep -rn "\.md" src/content/pages -e "\]\([a-zA-Z0-9/_-]*\)"
