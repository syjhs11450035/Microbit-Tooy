# 🤖 AI Bit Core (Micro:bit Extension)

AI Bit 是一個單檔式 micro:bit OS-like runtime extension。

---

# 🚀 功能

## 🟩 Matrix（5x5 顯示）
- 設定像素
- 清除畫面
- 顯示 framebuffer

## 🔊 Audio
- 播放音調
- 嗶聲
- 音波掃描（簡易合成）

## 📡 Net
- UART 通訊
- ESP32 未來擴展準備

## ⚡ Flash System
- 儲存 script
- 模擬快閃記憶體

## 🤖 Executor (VM)
支援 JSON script：

```json
[
  {"op":"text","v":"HI"},
  {"op":"wait","v":500},
  {"op":"tone","f":440,"t":200}
]