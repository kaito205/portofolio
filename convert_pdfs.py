import os
import fitz  # PyMuPDF

directory = r"d:\myproject\public\assets\sertifikat"

print(f"Scanning directory: {directory}")

for filename in os.listdir(directory):
    if filename.lower().endswith(".pdf"):
        pdf_path = os.path.join(directory, filename)
        png_path = os.path.join(directory, filename[:-4] + ".png")
        
        # Skip if PNG already exists
        if os.path.exists(png_path):
            print(f"Skipping {filename}, PNG already exists.")
            continue
            
        try:
            print(f"Converting {filename}...")
            # Open the PDF
            doc = fitz.open(pdf_path)
            if len(doc) > 0:
                # Load the first page
                page = doc.load_page(0)
                # Render page to an image (dpi=150)
                pix = page.get_pixmap(dpi=150)
                # Save as PNG
                pix.save(png_path)
                print(f"Successfully converted {filename} to PNG")
            doc.close()
        except Exception as e:
            print(f"Error converting {filename}: {e}")
            
print("Conversion complete!")
