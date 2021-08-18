
$path = "/stamps/"
$stamps = (ls $PSScriptRoot/public/stamps).Name | % { $path + $_ }

ConvertTo-Json $stamps | Out-File $PSScriptRoot/src/stamps.json -Encoding utf8

