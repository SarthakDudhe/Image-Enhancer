# 📸 Image Enhancer  

Image Enhancer is an AI-powered tool that takes a **blurred image as input** and returns a **clear, sharp version** using an **AI Enhancement API**.  
Unlike traditional filters, this project leverages deep learning APIs to **restore details, reduce noise, and improve clarity**.  

---

## 🚀 Features  
- Upload any blurred image and get a sharper result  
- Works with popular formats: `.jpg`, `.png`, `.jpeg`  
- Fast and lightweight (AI API does the heavy work)  
- No need to train or run large ML models locally  
- Can be used via script or web app  

---

## 🛠️ Tech Stack  
- **Frontend:** Python (React + Vite)  
- **Image Processing:** AI API (e.g.,Picwish Blur API)  
- **Dependencies:**  Requests, dotenv, etc.  

---

## 📂 Project Structure  
```
Image-Enhancer/
│── data/                # Sample input images
│── outputs/             # Enhanced images saved here
│── src/
│   ├── enhancer.py      # Core API integration logic
│   ├── app.py           # (Optional) Web interface
│   └── utils.py         # Helper functions
│── requirements.txt     # Dependencies
│── .env.example         # Environment variables template
│── README.md            # Documentation
```

---

## ⚙️ Installation & Setup  

### **1. Download Project**  
Clone or download the repository:  
```bash
git clone https://github.com/yourusername/image-enhancer.git
cd image-enhancer
```

👉 Or [📥 **Download ZIP**](https://github.com/yourusername/image-enhancer/archive/refs/heads/main.zip)  

---

### **2. Create Environment**  
```bash
python -m venv venv
source venv/bin/activate    # Mac/Linux
venv\Scripts\activate       # Windows
```

---

### **3. Install Dependencies**  
```bash
pip install -r requirements.txt
```

---

### **4. Configure API Key**  
Create a `.env` file in the project root:  
```ini
AI_API_KEY=your_api_key_here
```

Replace `your_api_key_here` with the actual key from your AI provider.  

---

## ▶️ Usage  

### **Option 1: Enhance via Script**  
```bash
python src/enhancer.py --input data/blur_image.jpg --output outputs/clear_image.jpg
```

### **Option 2: Run Web App (Optional)**  
```bash
streamlit run src/app.py
```
Then open your browser → upload a blurred image → get a clear version.  



---

## 📊 Example  

**Input (Blurred):**  
![Blurred](https://via.placeholder.com/200x150?text=Blurred+Image)  

**Output (Enhanced):**  
![Enhanced](https://via.placeholder.com/200x150?text=Enhanced+Image)  

---

## 📈 Future Roadmap  
- [ ] Batch image processing  
- [ ] Video frame enhancement  
- [ ] Multiple API provider support  
- [ ] Cloud storage integration (S3, ImageKit, GCP)  

---

## 🤝 Contributing  
Contributions are welcome!  
1. Fork this repo  
2. Create a feature branch (`git checkout -b feature-name`)  
3. Commit (`git commit -m "Added feature"`)  
4. Push (`git push origin feature-name`)  
5. Open a Pull Request  

---

## 📥 Download  

🔗 **Download Latest Release:** [Click Here](https://github.com/yourusername/image-enhancer/releases)  
🔗 Or **ZIP File:** [Download](https://github.com/yourusername/image-enhancer/archive/refs/heads/main.zip)  

---

## 📜 License  
Licensed under the **MIT License** – free to use, modify, and distribute.  
