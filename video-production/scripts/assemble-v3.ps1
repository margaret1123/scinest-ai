# SciNest Promo v3 — Full Assembly
# Scene order: 1.pain 2.chat 3.ppt-outline 4.writing 5.figures 6.ppt-edit 7.closing
# Overlays: REC indicator (1,3,5) / Logo bug (2,4,6,7)
# GPU: NVENC accelerated

$ErrorActionPreference = "Stop"
$src = "G:\版本统一\scinest-ai_new\video-production\sora-output-v2"
$assets = "G:\版本统一\scinest-ai_new\video-production\assets"
$tmp = "G:\版本统一\scinest-ai_new\video-production\temp-v3"
$out = "G:\版本统一\scinest-ai_new\video-production\output"
New-Item -Force -ItemType Directory $tmp | Out-Null

$overlayRec = "$assets\overlay-rec.png"
$overlayLogo = "$assets\overlay-logo.png"
$voiceover = "$assets\voiceover-en-v3.mp3"
$bgm = "$assets\bgm.mp3"

# Read TTS timing
$ttsTiming = Get-Content "$assets\voiceover-timing-v3.json" | ConvertFrom-Json
Write-Output "TTS total: $([math]::Round(($ttsTiming[-1].start + $ttsTiming[-1].dur), 1))s"

# Scene definitions in order
$scenes = @(
    @{file="$src\01.mp4"; dur=5.0; overlay="rec"; text="What if it's all in ONE project?"; upscale=$true},
    @{file="$src\02-chat-qa.mp4"; dur=4.3; overlay="logo"; upscale=$false},
    @{file="$src\03.mp4"; dur=4.3; overlay="rec"; upscale=$true},
    @{file="$src\04.mp4"; dur=4.7; overlay="logo"; upscale=$false},
    @{file="$src\05.mp4"; dur=4.5; overlay="rec"; upscale=$false},
    @{file="$src\06-ppt-editor.mp4"; dur=3.6; overlay="logo"; upscale=$false},
    @{file="$src\07-closing.mp4"; dur=4.0; overlay="logo"; upscale=$false}
)

# Build segments
Write-Output "`n=== Building segments ==="
$segFiles = @()
$segIndex = 0

foreach ($s in $scenes) {
    $segFile = "$tmp\seg-$($segIndex.ToString('00')).mp4"
    $segIndex++

    # Base: trim + upscale if needed
    $scaleFilter = if ($s.upscale) { "scale=1920:1080:flags=lanczos," } else { "" }

    # Overlay position (bottom-right)
    $overlayX = "W-w-20"
    $overlayY = "H-h-20"

    if ($s.overlay -eq "rec") {
        $ovFilter = "movie=$overlayRec[ov];[v][ov]overlay=$overlayX`:$overlayY`"
    } else {
        $ovFilter = "movie=$overlayLogo[ov];[v][ov]overlay=$overlayX`:$overlayY`"
    }

    # Text overlay for scene 1
    $textFilter = ""
    if ($s.text) {
        $escText = $s.text -replace "'", "'\\''" -replace ":", "\\:"
        $textFilter = "drawtext=text='$escText':fontsize=42:fontcolor=white@0.9:fontfile=/Windows/Fonts/arial.ttf:x=(w-text_w)/2:y=(h-text_h)/2-100:box=1:boxcolor=black@0.3:boxborderw=16:alpha='if(lt(t,1.0),0,if(lt(t,1.5),(t-1.0)/0.5,if(lt(t,4.0),1,if(lt(t,4.8),(4.8-t)/0.8,0))))',"
    }

    $filter = "[0:v]${scaleFilter}trim=duration=$($s.dur),setpts=PTS-STARTPTS,${textFilter}fade=t=out:st=$($s.dur - 0.2):d=0.2[v];${ovFilter}"

    Write-Output "  Seg $($segIndex-1): $([System.IO.Path]::GetFileName($s.file)) -> $($s.dur)s [$($s.overlay)]"

    & ffmpeg -y -i $s.file -filter_complex $filter -map "[v]" -map 0:a? `
        -c:v h264_nvenc -preset p1 -cq 18 -c:a aac -b:a 128k `
        -t $s.dur $segFile 2>&1 | Select-Object -Last 1
    $segFiles += $segFile
}

# Build ending card for last segment
Write-Output "`n=== Building ending card ==="
$endFile = "$tmp\seg-06-endcard.mp4"
& ffmpeg -y -i "$src\07-closing.mp4" -filter_complex `
    "[0:v]trim=duration=4.0,setpts=PTS-STARTPTS,`n" +
    "drawtext=text='SciNest':fontsize=56:fontcolor=white:fontfile=/Windows/Fonts/arialbd.ttf:x=(w-text_w)/2:y=(h-text_h)/2-40:alpha='if(lt(t,0.8),0,if(lt(t,1.3),(t-0.8)/0.5,1))',`n" +
    "drawtext=text='From sources to submission.':fontsize=30:fontcolor=white@0.85:fontfile=/Windows/Fonts/arial.ttf:x=(w-text_w)/2:y=(h-text_h)/2+20:alpha='if(lt(t,1.5),0,if(lt(t,2.0),(t-1.5)/0.5,1))',`n" +
    "drawtext=text='scinest-ai.vercel.app':fontsize=22:fontcolor=white@0.6:fontfile=/Windows/Fonts/arial.ttf:x=(w-text_w)/2:y=(h-text_h)/2+60:alpha='if(lt(t,2.2),0,if(lt(t,2.7),(t-2.2)/0.5,1))',`n" +
    "fade=t=out:st=3.5:d=0.5[v];`n" +
    "movie=$overlayLogo[ov];[v][ov]overlay=W-w-20:H-h-20" `
    -map "[v]" -map 0:a? -c:v h264_nvenc -preset p1 -cq 18 -c:a aac -b:a 128k -t 4.0 $endFile 2>&1 | Select-Object -Last 1
$segFiles[-1] = $endFile

# Concat
Write-Output "`n=== Concatenating ==="
$listFile = "$tmp\concat.txt"
$segFiles | ForEach-Object { "file '$($_.Replace('\','/'))'" } | Out-File -Encoding ascii $listFile

$concatFile = "$tmp\concat-v3.mp4"
& ffmpeg -y -f concat -safe 0 -i $listFile -c copy $concatFile 2>&1 | Select-Object -Last 1

# Audio mixing + subtitles
Write-Output "`n=== Mixing audio + subtitles ==="

# Generate SRT
$srtFile = "$out\scinest-v3-en.srt"
$painOffset = 5.0  # narration starts after pain montage
$srtLines = @(
    @{start=$painOffset; end=$painOffset+$ttsTiming[0].dur; text=$ttsTiming[0].text},
    @{start=$painOffset+$ttsTiming[1].start; end=$painOffset+$ttsTiming[1].start+$ttsTiming[1].dur; text=$ttsTiming[1].text},
    @{start=$painOffset+$ttsTiming[2].start; end=$painOffset+$ttsTiming[2].start+$ttsTiming[2].dur; text=$ttsTiming[2].text},
    @{start=$painOffset+$ttsTiming[3].start; end=$painOffset+$ttsTiming[3].start+$ttsTiming[3].dur; text=$ttsTiming[3].text},
    @{start=$painOffset+$ttsTiming[4].start; end=$painOffset+$ttsTiming[4].start+$ttsTiming[4].dur; text=$ttsTiming[4].text},
    @{start=$painOffset+$ttsTiming[5].start; end=$painOffset+$ttsTiming[5].start+$ttsTiming[5].dur; text=$ttsTiming[5].text}
)
$srt = @(); $idx = 1
foreach ($l in $srtLines) {
    $srt += "$idx"
    $srt += "$(fmtSrt $l.start) --> $(fmtSrt $l.end)"
    $srt += "$($l.text)`n"
    $idx++
}
function fmtSrt($s) {
    $h = [math]::Floor($s/3600)
    $m = [math]::Floor(($s%3600)/60)
    $sec = [math]::Floor($s%60)
    $ms = [math]::Floor(($s%1)*1000)
    return "{0:D2}:{1:D2}:{2:D2},{3:D3}" -f $h,$m,$sec,$ms
}
$srt | Out-File -Encoding utf8 $srtFile
Write-Output "  SRT: $srtFile"

# Final composition
$totalDur = ($scenes | Measure-Object -Property dur -Sum).Sum
Write-Output "  Total: $([math]::Round($totalDur,1))s"

$finalFile = "$out\scinest-promo-v3.mp4"
$srtSafe = $srtFile.Replace('\','/').Replace(':','\:')
$subStyle = "FontName=Arial,FontSize=26,PrimaryColour=&H00FFFFFF,OutlineColour=&H00000000,Outline=2,Shadow=1,Alignment=2,MarginV=70,BorderStyle=1"
$narrationDelay = [math]::Round($painOffset * 1000)

& ffmpeg -y `
    -i $concatFile `
    -i $voiceover `
    -i $bgm `
    -filter_complex "`n" +
    "[1:a]volume=1.6,adelay=${narrationDelay}|${narrationDelay}[voice];`n" +
    "[2:a]volume=0.06,afade=t=in:d=2,afade=t=out:st=$($totalDur-2):d=2[bgm];`n" +
    "[voice][bgm]amix=inputs=2:duration=first[audio];`n" +
    "[0:v]subtitles='${srtSafe}':force_style='${subStyle}'[outv]" `
    -map "[outv]" -map "[audio]" `
    -c:v h264_nvenc -preset p1 -cq 18 `
    -c:a aac -b:a 192k `
    -t $totalDur `
    $finalFile 2>&1 | Select-Object -Last 3

Write-Output "`n=== Done ==="
Write-Output "  $finalFile"
