#dans le cmd executer -> python create_zip.py

import zipfile

with zipfile.ZipFile("paddock_f1_2026_v14.zip", "w", zipfile.ZIP_DEFLATED) as zip_file:
    for f in ["index.html", "style.css", "app.js"]:
        zip_file.write(f)

print("Zip généré !")
