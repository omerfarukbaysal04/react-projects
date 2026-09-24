import './Contents.css'
import { useState } from "react"

function Content() {

    const [notlar, setNotlar] = useState(["İlk notum", "React Öğreniyorum","map() deneme"])
    const [yeniNot, setYeniNot]= useState("")
    const [duzenlenenIndex, setDuzenenlenenIndex] = useState(null)
    const [duzenlenenMetin, setDuzenlenenMetin] = useState("")
    const notEkle = () => {
        setNotlar([...notlar, yeniNot])
        setYeniNot("")
    }
    const notSil=(silinecekIndex)=>{
        setNotlar(notlar.filter((not, index) => index !== silinecekIndex))
    }
    const notGuncelle=(guncellenecekIndex)=>{
        setNotlar(notlar.map((not, index)=>
            index === guncellenecekIndex ? duzenlenenMetin : not
        ))
        setDuzenenlenenIndex(null)
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
                <li key={index} className='not-karti'>
                    {index === duzenlenenIndex ? (
                     <>
                     <input value={duzenlenenMetin} onChange={(e)=> setDuzenlenenMetin(e.target.value)}/>
                     <button onClick={() => notGuncelle(index)}>Kaydet</button>
                     </>) : (
                     <>
                     {not}
                     <div className='buton-grubu'>
                        <button onClick={()=> {setDuzenenlenenIndex(index); setDuzenlenenMetin(not)}}>Düzenle</button>
                        <button className="sil-btn" onClick={() => notSil(index)}>Sil</button>
                     </div>

                    </>
              )}
              </li>
            ))}
        </ul>
    </div> 
    )
}
export default Content