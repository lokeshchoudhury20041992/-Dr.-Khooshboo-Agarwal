#!/bin/bash
# Copy and convert the generated images to WebP inside src/assets

SRC_DIR="/Users/shyanilmishra/.gemini/antigravity-ide/brain/41353958-4d92-4d9b-a54f-a886431357d7"
DEST_DIR="/Users/shyanilmishra/-Dr.-Khooshboo-Agarwal/src/assets"

echo "Converting and copying generated images to WebP format..."

python3 -c "
from PIL import Image
import os

images = {
  '$SRC_DIR/pcos_signs_1780220889938.png': '$DEST_DIR/pcos-early-signs-indian-woman-yoga.webp',
  '$SRC_DIR/indian_pregnancy_1780220909907.png': '$DEST_DIR/pregnancy-care-indian-woman.webp',
  '$SRC_DIR/indian_doctor_1780220932217.png': '$DEST_DIR/indian-gynecologist-doctor-consultation.webp',
  '$SRC_DIR/indian_couple_1780220960633.png': '$DEST_DIR/indian-couple-fertility-pregnancy-hope.webp',
  '$SRC_DIR/indian_diet_1780220984713.png': '$DEST_DIR/pcos-diet-plan-indian-foods.webp'
}

for src, dest in images.items():
    if os.path.exists(src):
        im = Image.open(src)
        im.save(dest, 'webp', quality=85)
        print(f'Successfully converted and saved to: {dest}')
    else:
        print(f'Error: Source file not found: {src}')
"
