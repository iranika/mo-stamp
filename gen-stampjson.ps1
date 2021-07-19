
$stamps = (ls $PSScriptRoot/public/stamps).Name

ConvertTo-Json $stamps | Out-File $PSScriptRoot/src/stamps.json -Encoding utf8

