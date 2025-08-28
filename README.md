# 🎬 MP4 Short Music Video Maker

**A single-page, no-nonsense MP4 video creator that works or fails fast.**

## 🎯 What it does

- Upload a short video + audio file
- Loops the video to match your audio length  
- Creates a professional MP4 (H.264/AAC) 
- Downloads with timestamped filename
- **Zero dependencies, zero fallbacks, zero complexity**

## ✅ Requirements

- Modern browser with **MediaRecorder MP4 support**
- Chrome/Edge/Safari (recent versions)
- **If MP4 isn't supported → App won't work (by design)**

## 🚀 Features

- **MP4-First**: Creates H.264/AAC directly, no conversion needed
- **Fail Fast**: No WebM fallbacks, no complex codec detection
- **Technical Logging**: See exactly what's happening in real-time  
- **Mobile Responsive**: Works perfectly on phones
- **Privacy Focused**: 100% browser-based, no uploads
- **Instant Preview**: See your video immediately when done

## 🛠️ Technical Details

- **Video**: H.264 at 4 Mbps  
- **Audio**: AAC at 192 kbps
- **Format**: MP4 container
- **Processing**: MediaRecorder API + Web Audio API
- **No Build Process**: Single HTML file with inline CSS/JS

## 📱 Mobile Support

Optimized mobile-first design:
- Touch-friendly controls
- Responsive grid layout  
- Large tap targets
- Readable text at all sizes

## 🚦 Status Indicators

- 🔴 **Error**: MP4 not supported, file load failed
- 🟡 **Warning**: Processing in progress
- 🟢 **Success**: Ready to create, MP4 completed
- ⚪ **Idle**: Waiting for input

## 🔧 Development

```bash
# Local development (Python required)
npm run dev
# Open http://localhost:3000

# Deploy to Cloudflare
npm run deploy
```

## 📋 Browser Support

| Browser | Support | Notes |
|---------|---------|-------|
| Chrome 90+ | ✅ | Full MP4 support |
| Edge 90+ | ✅ | Full MP4 support |
| Safari 15+ | ✅ | Full MP4 support |
| Firefox | ❌ | No MP4 MediaRecorder |
| Mobile Safari | ✅ | iOS 15+ |
| Mobile Chrome | ✅ | Android 90+ |

## 🎨 Design Philosophy

- **Brutally Simple**: One purpose, executed perfectly
- **No Compromises**: MP4 or nothing
- **Transparent**: Every decision logged and visible
- **Fast**: Zero build time, instant loading
- **Reliable**: Works the same way every time

## 🚀 Deployment

Deployed at: **https://shortvideomaker.franzai.com**

## 📄 License

MIT License - Use it, modify it, ship it.

---

**Built for speed, reliability, and zero confusion.**