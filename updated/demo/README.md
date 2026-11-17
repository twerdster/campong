# New camera/pointer Pong demonstration

[Open the hosted demonstration](https://twerdster.github.io/campong/).

## Local use

From the repository root, use Python 3 and a browser:

```sh
python3 -m http.server --bind 127.0.0.1 --directory updated/demo
```

Open <http://127.0.0.1:8000/>. No dependency installation or build is required. Camera/microphone APIs require localhost or HTTPS and explicit permission.

## Controls

Move the pointer or touch the court to control the left paddle against a computer paddle. Start/Pause and Reset control the match. Optional camera mode requests video, mirrors it, saves an empty background and measures the foreground-pixel median in each side stripe. The threshold slider changes sensitivity.

## Verification and limitations

New code, not recovered source. No original Android/OpenCV, projector or prism integration is executed. Four synthetic foreground-median checks pass, and the browser controls were exercised in Chrome; physical camera tracking, projector alignment, accuracy and latency were not.

Actual Chrome checks on 2026-11-17 exercised the controls and 390-pixel/desktop layouts without JavaScript page errors or horizontal overflow. A narrow viewport is not a physical-device test; Safari/Firefox and physical phone input were not checked. Detailed current checks are in [VALIDATION.json](VALIDATION.json).

New demo source: Aaron Wetzler with agent assistance, 2026, under the scoped [MIT license](LICENSE). Original materials and supplied data retain their separate terms.

Run the focused operator/simulation checks from the repository root with `node updated/check-demo.mjs` (Node.js 18+).
