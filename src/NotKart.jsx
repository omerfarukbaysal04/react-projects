import { useState } from "react"

function NotKart({metin, tarih, onSil, onGuncelle}){
    const [duzenleniyor, setDuzenleniyor] = useState(false)
    const [taslak, setTaslak] = useState(metin)

    if(duzenleniyor) {
        return(
            <li className="not-karti">
                <input value={taslak} onChange={(e)=> setTaslak(e.target.value)}/>
                <button onClick={()=>{onGuncelle(taslak); setDuzenleniyor(false)}}>Kaydet</button>
            </li>
        )
    }
    return (
        <li className="not-karti">
        {metin} <small>({tarih})</small>
            <div className="buton-grubu">
                <button onClick={()=> setDuzenleniyor(true)}>Düzenle</button>
                <button className="sil-btn" onClick={onSil}>Sil</button>
            </div>
        </li>
    )
}

export default NotKart