# 🌌 Nebula Secret

**Secure Steganography & Image Forensics Suite**

Hide secret messages inside images using LSB steganography, or inspect EXIF metadata like a digital detective — all in a clean, modern web interface.

![Python](https://img.shields.io/badge/Python-3.10+-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-3.0-000000?style=for-the-badge&logo=flask&logoColor=white)
![Pillow](https://img.shields.io/badge/Pillow-10.4-8B5CF6?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| **🔒 Encode Message** | Hide any secret text inside a PNG/JPG image using LSB (Least Significant Bit) steganography |
| **🔓 Decode Message** | Extract hidden messages from steganographic images |
| **🕵️ EXIF Forensics** | Extract and view detailed metadata (camera, GPS coordinates, timestamps, etc.) |
| **🛡️ Privacy First** | Everything is processed **in-memory** — no files are ever saved on the server |
| **📱 Clean UI** | Modern single-page tabbed interface |

---

## 🚀 How It Works

### LSB Steganography

The tool embeds your secret message into the **least significant bit** of each color channel (R, G, B) of the image pixels. A special delimiter (`#####END#####`) marks the end of the message so decoding knows exactly where to stop.

- Works best with **PNG** (lossless)
- JPEG re-compression can destroy hidden data — always keep the encoded PNG

### EXIF Inspection

Upload any photo and instantly see:

- Camera model, lens, settings
- GPS coordinates (with Google Maps link)
- Capture date & time
- Basic image info (size, format, color mode)

---

## 🛠️ Tech Stack

- **Backend:** Flask 3.0
- **Image Processing:** Pillow (PIL)
- **Server:** Gunicorn
- **Frontend:** HTML + CSS + JavaScript (vanilla)

---

## 📦 Installation & Run Locally

```bash
# Clone the repository
git clone https://github.com/arnabadhikari777/Nebula-Secret.git
cd Nebula-Secret

# Create virtual environment (recommended)
python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run the app
python app.py
```

Open your browser and go to: [http://127.0.0.1:5000](http://127.0.0.1:5000)

---

## 🌐 Deploy on Render (Free)

The project already includes a `Procfile`, so deploying on [Render](https://render.com) is easy:

1. Push the code to GitHub
2. Create a new **Web Service** on Render
3. Connect this repository
4. Set:
   - **Build Command:** `pip install -r requirements.txt`
   - **Start Command:** `gunicorn app:app`
5. Deploy!

---

## 📁 Project Structure

```text
Nebula-Secret/
├── app.py                 # Main Flask application
├── requirements.txt       # Python dependencies
├── Procfile               # For Render / Heroku deployment
├── templates/
│   └── index.html         # Single-page UI
└── static/
    ├── css/               # Styles
    └── js/                # Frontend logic
```

---

## ⚠️ Important Notes

- Maximum upload size: **16 MB**
- Supported formats: **PNG, JPG, JPEG**
- Encoded images are always returned as **PNG** (to preserve hidden bits)
- If you re-save an encoded image as JPEG, the secret message will be destroyed
- No data is stored on the server — everything runs in memory

---

## 👨‍💻 Author

**Arnab Adhikari**  
GitHub: [arnabadhikari777](https://github.com/arnabadhikari777)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Made with ❤️ and a little bit of digital invisibility
</p>
