import './Contents.css'
import { useState } from "react"
import NotKart from './NotKart'

function Content() {

    const [notlar, setNotlar] = useState([
        { metin: "İlk notum", tarih: "24.09.2026" },
        { metin: "React Öğreniyorum", tarih: "22.09.2026" },
        { metin: "map() deneme", tarih: "27.09.2026" },
    ])
    const [yeniNot, setYeniNot]= useState("")
    const notEkle = () => {
        setNotlar([...notlar,{metin: yeniNot, tarih: new Date().toLocaleDateString()}])
        setYeniNot("")
    }
    const notSil=(silinecekIndex)=>{
        setNotlar(notlar.filter((n, index) => index !== silinecekIndex))
    }
    const notGuncelle=(index, yeniMetin)=>{
        setNotlar(notlar.map((n, i)=>
            i === index ? {...n, metin: yeniMetin} : n
        ))
    }

    return(

    <div className="not-sayfasi">
        <h1>Not Ekle</h1>
        <div className='ekle-satiri'>
            <input 
            value={yeniNot}
            onChange={(e)=> setYeniNot(e.target.value)}
        />
        <button onClick={notEkle}>Not ekle</button>
        </div>
            <ul className='not-listesi'>
            {notlar.map((not, index)=> (
               <NotKart 
                key={index}
                metin={not.metin}
                tarih={not.tarih}
                onSil={()=> notSil(index) }
                onGuncelle={(yeniMetin)=>notGuncelle(index, yeniMetin)} />
            ))}
        </ul>
    </div> 
    )
}
export default Content