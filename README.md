# 🤖 AI Bit Core (Clean Version)

Single-file MakeCode extension for micro:bit.

---

# 🚀 Features

## 🟩 Matrix (5x5)
- set pixel
- clear screen
- framebuffer system

## 🔊 Audio
- tone playback
- beep function

## 📡 Net (UART ready)
- send data
- receive data
- ESP32 bridge ready

## ⚡ Flash Memory
- store script
- retrieve script
- clear memory

## 🤖 Executor (VM)
Run JSON scripts:

```json
[
  {"op":"text","v":"HELLO"},
  {"op":"wait","v":500},
  {"op":"tone","f":440,"t":200}
]