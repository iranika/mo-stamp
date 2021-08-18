param(
    $imageFile,
    $saveImgDir = "$PSScriptRoot/public/img"
)

ffmpeg -i $imageFile -y -s 192x192 "$saveImgDir/icons/android-chrome-192x192.png"
ffmpeg -i $imageFile -y -s 512x512 "$saveImgDir/icons/android-chrome-512x512.png"
ffmpeg -i $imageFile -y -s 16x16 "$saveImgDir/icons/favicon-16x16.png"
ffmpeg -i $imageFile -y -s 32x32 "$saveImgDir/icons/favicon-32x32.png"
ffmpeg -i $imageFile -y -s 32x32 "$saveImgDir/favicon.ico"


