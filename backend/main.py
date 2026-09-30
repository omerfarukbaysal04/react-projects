from fastapi import FastAPI
from pydantic import BaseModel


app = FastAPI()

class Not(BaseModel):
    metin: str
    tarih: str

notlar = [
    {"id": 1, "metin": "İlk notum", "tarih": "30.09.2026"},
]


@app.get("/")
def anasayfa():
    return {"mesaj": "Merhaba FastAPI"}
 
@app.get("/notlar") 
def notlari_getir():
    return notlar

@app.post("/notlar")
def not_ekle(yeni_not: Not):
    yeni_id = max([n["id"] for n in notlar], default=0) + 1
    eklenecek = {"id": yeni_id,"metin": yeni_not.metin, "tarih" : yeni_not.tarih}
    notlar.append(eklenecek)
    return eklenecek

@app.delete("/notlar/{not_id}")
def not_sil(not_id: int):
    notlar[:]=[n for n in notlar if n["id"] != not_id]

@app.put("/notlar/{not_id}")
def not_guncelle(not_id: int, guncel: Not):
    for n in notlar:
        if n["id"] == not_id:
            n["metin"]=guncel.metin
            n["tarih"]=guncel.tarih
            return n
    



