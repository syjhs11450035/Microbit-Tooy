# Microbit-Tooy

一個 micro:bit 多功能硬體整合工具

---

## 🚀 功能

### 🎨 8x8 彩色編輯器
- setPixel(x,y,color)
- clear()
- show()

### 📡 無線（nRF24L01 概念封裝）
- rfSet(text)
- rfGet()

### 🔊 蜂鳴器（V2）
- beep(freq, ms)

### 🎤 麥克風
- soundLevel()

### ⚙️ 動作系統（Action）
- registerAction(name)
- runAction(name)

### 📥 變數系統
- setVar(key,value)
- getVar(key)

---

## 📦 硬體支援

### nRF24L01
- SPI 通訊
- 3.3V
- CE/CSN 控制

### WS2812B-64
- 8x8 RGB LED
- 5V 外部供電
- 單線控制

### 蜂鳴器
- P0 或任意 GPIO
- PWM / tone

### micro:bit V2 麥克風
- soundLevel()

---

## 🎯 設計理念

- 硬體（Hardware）
- 動作（Action）
- 變數（Variable）
- 8x8 視覺系統

---

## ⚠️ 注意

- nRF24L01 必須 3.3V
- WS2812B 必須外接 5V
- 所有 GND 必須共地