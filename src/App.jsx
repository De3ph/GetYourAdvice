import React, { useEffect, useState } from "react"
import axios from "axios"

const App = () => {
  const [advice, setAdvice] = useState(
    "Your ability to learn faster than your competition is your only sustainable competitive advantage. -Arie de Gues"
  )
  const [error, setError] = useState()

  const [needNewAdvice, setNeedNewAdvice] = useState(false)

  const fetchAdvice = () => {
    setNeedNewAdvice((prev) => !prev)
  }

  const options = {
    method: "POST",
    url: "https://motivational-quotes1.p.rapidapi.com/motivation",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "091e06f20amsh3cb04795e5aab32p173a2bjsn5cc14b59a9af",
      "X-RapidAPI-Host": "motivational-quotes1.p.rapidapi.com"
    },
    data: '{"key1":"value","key2":"value"}'
  }

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setAdvice(response.data)
      })
      .catch(function (error) {
        setError(error.message)
      })
  }, [needNewAdvice])

  return (
    <>
      <div className="absolute flex flex-col justify-center items-center bg-slate-900 w-screen h-screen">
        <div className="flex flex-col justify-evenly drop-shadow-md bg-grayishBlue w-96 h-80 text-white text-center text-lg content-center border-solid rounded-lg p-4">
          <div className="text-orange-200">Advice</div>
          {error !== undefined ? (
            <div className="text-rose-500 text-2xl">
              {" "}
              I forgor the advice <br /> ⋋_⋌
            </div>
          ) : (
            <div className="italic">{advice}</div>
          )}
          <img
            className="w-96"
            src="/pattern-divider-desktop.svg"
            alt="divider"
          />
        </div>
        <button
          onClick={fetchAdvice}
          className="z-10  rounded-full w-10 h-10 mx-auto -mt-5 flex items-center justify-center bg-orange-200"
        >
          <img
            className="w-5 hover:animate-ping"
            src="/icon-dice.svg"
            alt="dice"
          />
        </button>
      </div>
    </>
  )
}

export default App
